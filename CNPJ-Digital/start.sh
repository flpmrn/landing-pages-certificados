#!/bin/sh
# Script de inicialização para o modo standalone do Next.js
# Copia os arquivos estáticos necessários para dentro da pasta standalone
echo "Copiando arquivos estáticos para standalone..."
cp -r public .next/standalone/public 2>/dev/null || echo "Pasta public não encontrada, pulando..."
cp -r .next/static .next/standalone/.next/static 2>/dev/null || echo "Pasta .next/static não encontrada, pulando..."
echo "Iniciando servidor Next.js..."
exec node .next/standalone/server.js
