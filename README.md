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

