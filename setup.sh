#!/bin/bash
set -e

# ── 1. Git (opcional) ────────────────────────────────────────────────────────
echo "==> Verificando git..."

GIT_BIN=""
for candidate in "/Applications/GitHub Desktop.app/Contents/Resources/app/git/bin/git" /usr/local/git/bin/git /Library/Developer/CommandLineTools/usr/bin/git /usr/local/bin/git /usr/bin/git; do
  if "$candidate" --version &>/dev/null 2>&1; then
    GIT_BIN="$candidate"
    break
  fi
done

if [ -n "$GIT_BIN" ]; then
  echo "    $($GIT_BIN --version)"
else
  echo "    Git não encontrado — pulando controle de versão (deploy via Vercel CLI funciona normalmente)."
fi

# ── 2. Dependências npm ───────────────────────────────────────────────────────
echo "==> Instalando dependências npm..."
npm install

# ── 3. Build ──────────────────────────────────────────────────────────────────
echo "==> Verificando build..."
npm run build

# ── 4. Repositório git ────────────────────────────────────────────────────────
if [ -n "$GIT_BIN" ]; then
  echo "==> Commitando alterações..."
  set +e  # git pode emitir avisos não-fatais; não abortar o script
  if [ ! -d ".git" ]; then
    $GIT_BIN init 2>/dev/null
    $GIT_BIN add . 2>/dev/null
    $GIT_BIN -c user.email="dev@local" -c user.name="Dev" \
      commit -m "chore: initial commit — landing page Dra. Queren Tribioli" 2>/dev/null
    echo "    Repositório criado com commit inicial."
  else
    $GIT_BIN add . 2>/dev/null
    if ! $GIT_BIN diff --cached --quiet 2>/dev/null; then
      TIMESTAMP=$(date "+%Y-%m-%d %H:%M")
      $GIT_BIN -c user.email="dev@local" -c user.name="Dev" \
        commit -m "chore: atualiza site ($TIMESTAMP)" 2>/dev/null
      echo "    Commit criado: $TIMESTAMP"
    else
      echo "    Nenhuma alteração para commitar."
    fi
  fi
  set -e
fi

# ── 5. Dev server ─────────────────────────────────────────────────────────────
echo "==> Iniciando servidor dev..."
npm run dev &
DEV_PID=$!

# Detecta a porta real que o Next.js subiu (3000, 3001, 3002...)
PORT=""
for i in $(seq 1 20); do
  for p in 3000 3001 3002 3003; do
    STATUS=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:$p 2>/dev/null || true)
    if [ "$STATUS" = "200" ]; then
      PORT=$p
      break 2
    fi
  done
  sleep 1
done

if [ -n "$PORT" ]; then
  open "http://localhost:$PORT"
  echo ""
  echo "Site rodando em http://localhost:$PORT (PID $DEV_PID)"
else
  echo ""
  echo "Servidor subindo... acesse http://localhost:3000 (PID $DEV_PID)"
fi

echo "Pressione Ctrl+C para parar."
wait $DEV_PID
