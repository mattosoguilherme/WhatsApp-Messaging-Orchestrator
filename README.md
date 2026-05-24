# 🚀 Zapbo — WhatsApp Messaging Orchestrator

![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![License](https://img.shields.io/badge/license-MIT-blue)

> Plataforma de automação de mensageria via WhatsApp orientada a dados.

---

## 🧠 Sobre o projeto

O **WhatsApp-Messaging-Orchestrator** é um serviço backend desenvolvido em Node.js para automatizar o envio de mensagens via WhatsApp com base em dados armazenados em banco.

A aplicação permite gerenciar contatos, executar envios em massa e gerar relatórios automatizados, garantindo eficiência, controle e escalabilidade.

---

## ⚡ Problema que resolve

Empresas que lidam com alto volume de clientes e cobranças enfrentam:

- Processos manuais repetitivos  
- Falta de controle de envio  
- Baixa escalabilidade  
- Perda de produtividade  

O WhatsApp-Messaging-Orchestrator automatiza esse processo de ponta a ponta.

---

## 💡 Solução

- Integra banco de dados ao WhatsApp  
- Executa envios automáticos  
- Controla fluxo de mensagens  
- Gera relatórios de envio  
- Escala comunicação sem esforço manual  

---

## 🚀 Funcionalidades

- 📲 Envio automatizado de mensagens via WhatsApp  
- 🧠 Disparo baseado em dados (data-driven)  
- 👤 Cadastro e validação de usuários  
- 📥 Importação de contatos via JSON  
- 📤 Envio em massa com controle de intervalo  
- 📊 Relatórios diários automatizados  
- ⏱️ Controle de horário de envio  

---

## 🧱 Arquitetura
src/
├── controllers # Entrada das requisições
├── services # Regras de negócio
├── routes # Endpoints da API
├── config # Configurações
└── prisma # Banco de dados

---

## 🔄 Fluxo de funcionamento

1. Dados são armazenados no banco  
2. O sistema identifica condições de envio  
3. Regras de negócio são executadas  
4. As mensagens são enviadas automaticamente via WhatsApp  
5. O status é atualizado no banco  

---

## 🛠️ Tecnologias utilizadas

- Node.js  
- Prisma ORM  
- Baileys (WhatsApp Web API)  
- SQLite / PostgreSQL  
- Swagger (documentação de API)  

---

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/mattosoguilherme/WhatsApp-Messaging-Orchestrator.git

# Acesse o diretório
cd WhatsApp-Messaging-Orchestrator

# Instale as dependências
npm install

# Configure o ambiente
cp .env.example .env

# Execute as migrations
npx prisma migrate dev

# Inicie o servidor
npm run dev

🔐 Variáveis de ambiente
DATABASE_URL=
PORT=
📡 API

Acesse a documentação após iniciar o servidor:

http://localhost:PORT/docs
🔥 Funcionalidades detalhadas
👤 Cadastro de Usuários (create_user)

Cria usuários validando duplicidade de CPF e telefone.

await messageService.create_user({
  nome: "João Silva",
  cpf: 12345678900,
  telefone_principal: 5511987654321,
  telefones_secundarios: [5511912345678]
});
📥 Importação de Contatos (addNumber)

Importa contatos a partir de arquivo JSON:

c:/arkg.solutions/solutions/zapbo_fgts/temps/dados_filtrados.json
Processamento em lote (batch de 10)
Otimizado para performance
await messageService.addNumber(5511987654321);
📤 Envio em Massa (sendToMany)

Responsável pelo envio automatizado com regras:

Apenas contatos não processados
Horário permitido: 06h às 22h
Intervalo de 4 minutos entre mensagens
Atualização de status após envio
📊 Relatórios Diários
Gerar relatório
await messageService.generateDailyReport(new Date());
Envio de resumo
Consolida dados do dia
Envia relatório para administradores
⏱️ Agendamento
Execução automática
Respeita horário configurado
Pausa fora da janela
Retoma automaticamente
⚠️ Boas práticas implementadas
Controle de intervalo entre envios
Validação de duplicidade
Processamento em lote
Controle de horário
Persistência de status
📈 Roadmap
 Sistema de filas (Redis / RabbitMQ)
 Retry automático
 Logs estruturados
 Multi-sessão (vários números)
 Dashboard administrativo
 Webhooks
 Rate limit
🧠 Conceito técnico

Sistema de mensageria automatizada orientado a eventos com integração a banco de dados e envio via WhatsApp.

🏢 Evolução futura
Painel web
Sistema SaaS
API pública
Integração com CRM
Cobrança por uso
👨‍💻 Autor

Guilherme Mattoso

📩 arkgsolutions@gmail.com
📱 (11) 99276-7398

📄 Licença

MIT License


---

Agora sim:
- ✔ 100% copiável  
- ✔ sem bug  
- ✔ sem lixo técnico  
- ✔ padrão GitHub  
- ✔ nível produto  

Se quiser, próximo passo eu te faço isso virar **README de startup (com branding + nome forte tipo SaaS)** — aí muda te
