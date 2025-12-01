# 🚀 Guía Rápida de Inicio

## Instalación Completada ✅

El proyecto está 100% configurado y listo para usar.

## Comandos Principales

### Iniciar en Modo Desarrollo
```bash
npm run dev
```
Abre tu navegador en: **http://localhost:4321**

### Compilar para Producción
```bash
npm run build
```
Los archivos optimizados estarán en la carpeta `dist/`

### Vista Previa de Producción
```bash
npm run preview
```

---

## 📁 Archivos Clave que Puedes Editar

### 1. **Datos de Aromas**
`src/data/aromas.json`

Este es el archivo principal donde puedes modificar los textos, imágenes y preguntas de cada aroma.

**Estructura:**
```json
{
  "id": "naranja",
  "name": "Naranja",
  "images": [
    "URL_imagen_1",
    "URL_imagen_2",
    "URL_imagen_3"
  ],
  "adjectives": [
    "Cítrico",
    "Fresco",
    "Vibrante",
    ...
  ],
  "evocativeText": "Imagina el sol de la mañana...",
  "questions": [
    "¿Recuerdas algún momento especial...?",
    "¿En qué lugar o situación...?"
  ]
}
```

### 2. **Duración de las Fases**
`src/components/TrainingSession.jsx` (líneas 4-7)

```javascript
const PHASE_DURATIONS = {
  STIMULATION: 60,  // Cambia aquí (segundos)
  ACTION: 20,       // Cambia aquí (segundos)
};
```

### 3. **Colores del Diseño**
`tailwind.config.mjs` (líneas 6-26)

```javascript
colors: {
  primary: {
    500: '#f0701e',  // Color naranja principal
    ...
  },
  accent: {
    500: '#22c55e',  // Color verde de acción
    ...
  }
}
```

---

## 🎨 Cambiar Imágenes de Unsplash

Las URLs de las imágenes siguen este patrón:
```
https://images.unsplash.com/photo-XXXXXXXX?w=800&q=80
```

**Cómo encontrar nuevas imágenes:**
1. Ve a [unsplash.com](https://unsplash.com)
2. Busca el término (ej: "orange texture macro")
3. Abre la imagen que te guste
4. Haz clic derecho en la imagen → "Copiar dirección de imagen"
5. Pega la URL en el array `images` del aroma

---

## ✏️ Agregar un Nuevo Aroma

1. Abre `src/data/aromas.json`
2. Agrega un nuevo objeto al array:

```json
{
  "id": "lavanda",
  "name": "Lavanda",
  "images": [
    "https://images.unsplash.com/photo-...",
    "https://images.unsplash.com/photo-...",
    "https://images.unsplash.com/photo-..."
  ],
  "adjectives": [
    "Floral",
    "Relajante",
    "Herbáceo",
    "Suave",
    "Calmante",
    "Aromático",
    "Delicado",
    "Fresco"
  ],
  "evocativeText": "Escribe aquí un texto descriptivo y sensorial...",
  "questions": [
    "¿Pregunta de memoria 1?",
    "¿Pregunta de memoria 2?"
  ]
}
```

3. Guarda el archivo
4. Reinicia el servidor (`Ctrl+C` y luego `npm run dev`)

---

## 🔧 Solución de Problemas

### El servidor no inicia
```bash
# Borra node_modules y reinstala
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Los cambios no se reflejan
- Asegúrate de haber guardado el archivo
- Recarga la página con `Ctrl + Shift + R` (recarga completa)
- Si editaste datos JSON, reinicia el servidor

### Error de TypeScript
```bash
npm run build
```
Esto te mostrará exactamente dónde está el error

---

## 📱 Probar en el Móvil

1. Inicia el servidor con:
```bash
npm run dev -- --host
```

2. Verás una URL de red como:
```
Network  http://192.168.X.X:4321/
```

3. Abre esa URL en tu móvil (debe estar en la misma red WiFi)

---

## 🌐 Desplegar en Producción

### Opción 1: Netlify (Recomendado - Gratis)
1. Sube tu proyecto a GitHub
2. Ve a [netlify.com](https://netlify.com) y conecta tu repositorio
3. Netlify detectará automáticamente que es Astro
4. ¡Deploy automático!

### Opción 2: Vercel (Gratis)
1. Sube tu proyecto a GitHub
2. Ve a [vercel.com](https://vercel.com)
3. Importa tu repositorio
4. Deploy automático

### Opción 3: GitHub Pages
```bash
npm run build
# Sube la carpeta `dist` a GitHub Pages
```

---

## 📚 Recursos

- [Documentación de Astro](https://docs.astro.build)
- [Documentación de Tailwind](https://tailwindcss.com/docs)
- [Unsplash - Imágenes gratuitas](https://unsplash.com)

---

## ✅ Checklist de Personalización

- [ ] Editar textos en `src/data/aromas.json`
- [ ] Cambiar imágenes de Unsplash
- [ ] Ajustar duración de fases si es necesario
- [ ] Personalizar colores en `tailwind.config.mjs`
- [ ] Probar en móvil
- [ ] Compilar para producción (`npm run build`)
- [ ] Desplegar en hosting

---

¡Listo! Ahora tienes todo para personalizar y usar tu Web App de Entrenamiento Olfativo.
