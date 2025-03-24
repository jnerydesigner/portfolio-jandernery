#!/bin/sh
echo "Deploy Initialised"

git pull origin main

yarn install --frozen-lockfile

yarn build

pm2 restart portfolio-jandernery 

echo "Deployment Completed"




#!/bin/bash
set -e # Faz o script parar no primeiro erro

echo "🚀 Iniciando deploy..."

# Atualiza o código
git pull origin main

# Instala dependências
yarn install --frozen-lockfile

# Constrói a aplicação
yarn build

# Verifica se o aplicativo já está rodando no PM2
if pm2 list | grep -q "portfolio-jandernery"; then
  echo "🔄 Aplicação encontrada no PM2 - Reiniciando..."
  pm2 restart portfolio-jandernery || {
    echo "❌ Falha ao reiniciar o PM2"
    exit 1
  }
else
  echo "⭐ Aplicação não encontrada - Iniciando pela primeira vez..."
  pm2 start ecosystem.config.cjs || {
    echo "❌ Falha ao iniciar o PM2"
    exit 1
  }
fi

echo "✅ Deploy concluído com sucesso!"
