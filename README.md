# INO360 — Vite + React + Tailwind (para GitHub Pages con dominio propio)

## Requisitos
- Node 18+
- npm

## Desarrollo
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```
El build queda en `dist/`.

## Publicación en GitHub Pages con dominio `www.ino360.cl`
1. Crea un repositorio en GitHub (cuenta `INO360`). Ej: `ino360-web`.
2. Ejecuta `npm run build`.
3. **Opción simple:** Sube **el contenido de `dist/`** como archivos a tu repo (raíz). Agrega los archivos `CNAME` y `.nojekyll` en la raíz del repo.
4. En el repo: **Settings → Pages** → Source: `main`, Folder: `/ (root)`.

### CNAME
Crea un archivo llamado `CNAME` (sin extensión) con:
```
www.ino360.cl
```

### .nojekyll
Crea también un archivo vacío llamado `.nojekyll` en la raíz.

### DNS en NIC Chile
Registros A para `ino360.cl`:
- 185.199.108.153
- 185.199.109.153
- 185.199.110.153
- 185.199.111.153

CNAME para `www`:
- Host: `www`
- Apunta a: `INO360.github.io.`  (con punto final)

**Propagación:** 15 min a 24 h.

---

Si prefieres workflow automatizado (Actions), dímelo y te agrego el YAML.
