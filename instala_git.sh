#!/bin/bash

# Verifica se git já funciona
GIT_BIN=""
for candidate in /usr/bin/git /usr/local/git/bin/git /usr/local/bin/git; do
  if "$candidate" --version &>/dev/null 2>&1; then
    GIT_BIN="$candidate"
    break
  fi
done

if [ -n "$GIT_BIN" ]; then
  echo "Git já instalado: $("$GIT_BIN" --version)"
  exit 0
fi

echo ""
echo "┌─────────────────────────────────────────────────────────────┐"
echo "│  Git não encontrado. Iniciando instalação automática...     │"
echo "│                                                             │"
echo "│  Uma janela de instalação vai abrir.                        │"
echo "│  Clique em  [ Instalar ]  e aguarde ~5 minutos.             │"
echo "│                                                             │"
echo "│  Este script aguardará automaticamente.                     │"
echo "└─────────────────────────────────────────────────────────────┘"
echo ""

# Dispara o instalador gráfico do Xcode CLT
xcode-select --install 2>/dev/null || true

echo "Aguardando instalação (pode levar alguns minutos)..."

# Espera até o git estar funcional
WAIT=0
while true; do
  for candidate in /usr/bin/git /usr/local/git/bin/git /usr/local/bin/git; do
    if "$candidate" --version &>/dev/null 2>&1; then
      GIT_BIN="$candidate"
      break 2
    fi
  done
  WAIT=$((WAIT + 10))
  if [ $WAIT -ge 600 ]; then
    echo "Tempo esgotado. Instale o git manualmente e rode o script novamente."
    exit 1
  fi
  printf "."
  sleep 10
done

echo ""
echo "Git instalado: $($GIT_BIN --version)"

# Adiciona ao PATH no .zshrc se necessário
LINE="export PATH=\"$(dirname $GIT_BIN):\$PATH\""
PROFILE="$HOME/.zshrc"
if ! grep -qF "$(dirname $GIT_BIN)" "$PROFILE" 2>/dev/null; then
  echo "" >> "$PROFILE"
  echo "# git" >> "$PROFILE"
  echo "$LINE" >> "$PROFILE"
fi

echo "Pronto! Rode agora:  ./setup.sh"
