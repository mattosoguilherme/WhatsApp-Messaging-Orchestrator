const fs = require("fs");
const {
  makeWASocket,
  useMultiFileAuthState,
  DisconnectReason,
} = require("@whiskeysockets/baileys");
const qrcode = require("qrcode-terminal")


const AUTH_FOLDER = "auth_info_baileys";

let sock = null;
let isConnected = false;
let isConnecting = false;

// Garante que a pasta exista
if (!fs.existsSync(AUTH_FOLDER)) {
  fs.mkdirSync(AUTH_FOLDER, { recursive: true });
}

const connect = async () => {
  if (isConnecting) return;
  isConnecting = true;

  try {
    const { state, saveCreds } = await useMultiFileAuthState(AUTH_FOLDER);

    sock = makeWASocket({
      auth: state,
      printQRInTerminal: true,
      browser: ["Kairos", "Chrome", "1.0.0"],
      markOnlineOnConnect: true,
      connectTimeoutMs: 60_000,
    });

    sock.ev.on("creds.update", () => {
      saveCreds();
      console.log("💾 Credenciais atualizadas.");
    });

    sock.ev.on("connection.update", async (update) => {
      const { connection, lastDisconnect, qr } = update;
      console.log("🔄 connection.update:", connection);

      if (qr) {
        console.log("📲 Escaneie este QR Code no seu WhatsApp:");
        // O QR já aparece no terminal, esse log é só reforço
        qrcode.generate(qr, { small: true });
      }

      if (connection === "open") {
        isConnected = true;
        isConnecting = false;
        console.log("✅ Conectado ao WhatsApp!");
      } else if (connection === "close") {
        isConnected = false;
        isConnecting = false;

        const statusCode = lastDisconnect?.error?.output?.statusCode;
        const reason = lastDisconnect?.error?.output?.payload?.reason || lastDisconnect?.error?.message;

        console.log(`❌ Desconectado: código ${statusCode} - motivo: ${reason}`);

        // Se for erro de sessão inválida ou logoff, limpa os arquivos de sessão para forçar novo login
        if (
          statusCode === DisconnectReason.loggedOut ||
          statusCode === DisconnectReason.invalidSession ||
          statusCode === DisconnectReason.restartRequired
        ) {
          console.log("🧹 Sessão inválida, removendo arquivos de autenticação...");
          try {
            fs.rmSync(AUTH_FOLDER, { recursive: true, force: true });
          } catch (err) {
            console.error("Erro ao limpar sessão:", err);
          }
        }

        // Tenta reconectar em 3 segundos
        setTimeout(() => {
          console.log("🔄 Tentando reconectar...");
          connect();
        }, 3000);
      }
    });

    // Logs extras para debug
    sock.ev.on("messages.upsert", (m) => {
      console.log("📩 Mensagens recebidas:", JSON.stringify(m, null, 2));
    });

  } catch (error) {
    console.error("⚠️ Erro na conexão:", error);
    isConnecting = false;
    // Tenta reconectar em 3 segundos
    setTimeout(connect, 3000);
  }
};

const waitForConnection = async () => {
  while (!isConnected) {
    console.log("⏳ Esperando conexão...");
    await new Promise((res) => setTimeout(res, 2000));
  }
};

const sendBailey = async (number, message) => {
  if (!sock) throw new Error("Socket não iniciado.");
  await waitForConnection();
  const jid = `55${number}@s.whatsapp.net`;
  await sock.sendMessage(jid, { text: message });
  console.log(`✅ Mensagem enviada para ${number}`);
};

module.exports = {
  connect,
  sendBailey,
};
