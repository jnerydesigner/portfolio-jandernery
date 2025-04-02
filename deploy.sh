
#!/bin/bash
set -e # Faz o script parar no primeiro erro

echo "🚀 Iniciando deploy..."


# Instala dependências
echo "🚀 Instalando as Dependencias..."
yarn install --frozen-lockfile

# Constrói a aplicação
echo "🚀 Construindo a aplicação..."
yarn build


echo "✅ Deploy concluído com sucesso!"
