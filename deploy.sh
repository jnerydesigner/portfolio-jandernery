
#!/bin/bash
set -e # Faz o script parar no primeiro erro

echo "🚀 Iniciando deploy..."

# Atualiza o código
echo "🚀 Atualizando o código..."
git pull origin main

# Instala dependências
echo "🚀 Instalando as Dependencias..."
yarn install --frozen-lockfile

# Constrói a aplicação
echo "🚀 Construindo a aplicação..."
yarn build

# Verifica se o aplicativo já está rodando no PM2
if pm2 list | grep -q "portfolio-jandernery "; then
  echo "🔄 Aplicação encontrada no PM2 - Reiniciando..."
  pm2 restart portfolio-jandernery  || {
    echo "❌ Falha ao reiniciar o PM2"
    exit 1
  }
else
  echo "⭐ Aplicação não encontrada - Iniciando pela primeira vez..."
  pm2 start my-pm2-start.json || {
    echo "❌ Falha ao iniciar o PM2"
    exit 1
  }
fi

echo "✅ Deploy concluído com sucesso!"
