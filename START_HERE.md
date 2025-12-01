# 🌸 Bienvenido a tu Web App de Entrenamiento Olfativo

## ✅ Estado del Proyecto: COMPLETADO Y LISTO PARA USAR

---

## 🚀 Inicio Rápido (3 pasos)

### 1. Inicia el servidor de desarrollo
```bash
npm run dev
```

### 2. Abre tu navegador
Visita: **http://localhost:4321**

### 3. ¡Explora!
- Haz clic en cualquier aroma
- La imagen se expandirá suavemente (View Transition)
- Comenzará automáticamente la sesión de entrenamiento

---

## 📂 Documentación Disponible

| Archivo | Contenido |
|---------|-----------|
| **GUIA_RAPIDA.md** | Cómo personalizar textos, imágenes, colores y tiempos |
| **TECHNICAL_SUMMARY.md** | Detalles técnicos completos de la implementación |
| **README.md** | Documentación general del proyecto |

---

## 🎯 Funcionalidades Implementadas

### ✅ Página Principal
- Grid de 4 aromas (Naranja, Eucalipto, Geranio, Canela)
- Tarjetas con efecto hover
- Transiciones suaves entre páginas
- Sección de instrucciones

### ✅ Página de Entrenamiento
**Fase 1: Estimulación (60s) - ANTES de oler**
- Grid de 3 imágenes del aroma
- Nube de 8 adjetivos sensoriales
- Texto evocador descriptivo
- 2 preguntas de memoria episódica para reflexionar
- Barra de progreso naranja
- ⚠️ **NO huelas todavía**: prepara tu mente primero

**Fase 2: Acción (20s) - AHORA huele**
- Indicador visual verde "¡Huele Ahora!"
- Contador grande regresivo
- Animación de respiración
- Barra de progreso verde
- Haz inspiraciones cortas y suaves mientras hueles

**Fase 3: Completado**
- Mensaje de felicitación
- Botón "Repetir Sesión"
- Botón "Volver al Menú"

### ✅ Características Técnicas
- **View Transitions nativas** de Astro
- **React Islands** para la lógica interactiva
- **Tailwind CSS** para estilos
- **Responsive** (móvil, tablet, desktop)
- **Accesibilidad** (HTML semántico, contraste WCAG)
- **Performance** optimizado

---

## 🎨 Personalización Rápida

### Cambiar Textos de los Aromas
Edita: `src/data/aromas.json`

### Cambiar Duración de las Fases
Edita: `src/components/TrainingSession.jsx` (líneas 4-7)

### Cambiar Colores
Edita: `tailwind.config.mjs`

---

## 📦 Estructura del Proyecto

```
anosmia/
├── src/
│   ├── components/
│   │   └── TrainingSession.jsx    # Componente React con timers
│   ├── data/
│   │   └── aromas.json            # Base de datos de aromas
│   ├── layouts/
│   │   └── Layout.astro           # Layout base
│   ├── pages/
│   │   ├── index.astro            # Página principal
│   │   └── train/
│   │       └── [id].astro         # Página de entrenamiento
│   └── styles/
│       └── global.css             # Estilos Tailwind
├── public/
│   └── favicon.svg
├── GUIA_RAPIDA.md                 # 👈 Lee esto para personalizar
├── TECHNICAL_SUMMARY.md           # Documentación técnica
└── README.md
```

---

## 🌐 Desplegar en Internet

### Netlify (Recomendado - Gratis)
1. Sube el proyecto a GitHub
2. Conecta GitHub con Netlify
3. Deploy automático
4. URL pública gratuita

### Vercel (Alternativa - Gratis)
Similar a Netlify, deploy automático desde GitHub

---

## 💡 Próximos Pasos

1. **Prueba la aplicación**: `npm run dev`
2. **Personaliza los textos**: Edita `src/data/aromas.json`
3. **Cambia las imágenes**: Usa Unsplash para nuevas fotos
4. **Ajusta los tiempos**: Si 60s/20s no te convence
5. **Compila para producción**: `npm run build`
6. **Despliega en internet**: Netlify/Vercel

---

## 🆘 ¿Necesitas Ayuda?

### El servidor no inicia
```bash
rm -rf node_modules
npm install
npm run dev
```

### Los cambios no aparecen
- Guarda el archivo
- Recarga con `Ctrl + Shift + R`
- Si editaste JSON, reinicia el servidor

### Ver errores de TypeScript
```bash
npm run build
```

---

## 📱 Probar en Móvil

```bash
npm run dev -- --host
```
Luego visita la URL Network que aparece desde tu móvil (misma WiFi).

---

## ✨ Características Destacadas

- ⚡ **Rápido**: Zero JavaScript innecesario
- 🎨 **Visual**: Diseño minimalista centrado en imágenes
- 📱 **Responsive**: Funciona en todos los dispositivos
- ♿ **Accesible**: Contraste y HTML semántico
- 🔄 **Transiciones**: Animaciones nativas suaves
- 🧘 **UX**: Flujo claro de 3 fases

---

## 🎯 Objetivos Terapéuticos

- Frecuencia: 2 veces al día
- Duración: Mínimo 3 meses
- Concentración en recuerdos episódicos
- Respiración suave y consciente

---

¡Tu Web App está 100% funcional y lista para ayudar en la recuperación olfativa!

**Comando para empezar:**
```bash
npm run dev
```

Luego abre: http://localhost:4321
