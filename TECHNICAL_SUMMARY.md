# 📋 Resumen Técnico - Entrenamiento Olfativo

## ✅ Proyecto Completado

### 🎯 Funcionalidades Implementadas

#### 1. **Estructura de Datos** (`src/data/aromas.json`)
Archivo JSON con 4 aromas configurados:
- ✅ Naranja
- ✅ Eucalipto
- ✅ Geranio
- ✅ Canela

Cada aroma contiene:
```typescript
{
  id: string              // Slug para URL
  name: string            // Nombre visible
  images: string[]        // 3 URLs de Unsplash
  adjectives: string[]    // 8 palabras clave sensoriales
  evocativeText: string   // Párrafo descriptivo
  questions: string[]     // 2 preguntas de memoria episódica
}
```

#### 2. **Página Principal** (`src/pages/index.astro`)
- ✅ Grid responsive (1 columna mobile, 2 desktop)
- ✅ 4 tarjetas con imagen + nombre del aroma
- ✅ **View Transition en imágenes** usando `transition:name={aroma-{id}}`
- ✅ Efecto hover con scale y shadow
- ✅ Sección de instrucciones con 3 fases explicadas
- ✅ Gradiente de fondo sutil

#### 3. **Página de Entrenamiento** (`src/pages/train/[id].astro`)
- ✅ Ruta dinámica con `getStaticPaths()`
- ✅ Hero image con **View Transition conectada** a la home
- ✅ Botón "Volver" con icono
- ✅ Integración del componente React como isla (`client:load`)
- ✅ Sección de consejos (visible solo desktop)

#### 4. **Componente React** (`src/components/TrainingSession.jsx`)

**State Machine con 3 fases:**

##### **Fase 1: STIMULATION (60 segundos) - ANTES de oler**
- Timer countdown visible
- Barra de progreso naranja
- Grid de 3 imágenes
- Nube de badges con adjetivos
- Texto evocador en card con backdrop-blur
- 2 preguntas en cards destacadas para reflexionar
- **Objetivo**: Preparar la mente ANTES de oler el aroma

##### **Fase 2: ACTION (30 segundos) - AHORA huele**
- Timer countdown grande
- Barra de progreso verde
- Badge verde pulsante: "Fase 2: ¡Huele Ahora!"
- Icono de cara respirando
- Mensaje motivacional
- Animación de respiración (punto pulsante)
- **Objetivo**: Oler el aroma con inspiraciones cortas y suaves (no profundas)

##### **Fase 3: COMPLETED**
- Badge gris: "Sesión Completada"
- Icono de check
- Mensaje de felicitación
- 2 botones:
  - "Repetir Sesión" → Resetea el state
  - "Volver al Menú" → Link a `/`

**Lógica de Timers:**
```javascript
useEffect(() => {
  // Intervalo de 1 segundo
  // Al llegar a 0, cambia de fase automáticamente
  // STIMULATION → ACTION → COMPLETED
}, [phase]);

useEffect(() => {
  // Calcula progreso de barra (0-100%)
}, [timeLeft, phase]);
```

#### 5. **Configuración de Astro** (`astro.config.mjs`)
```javascript
export default defineConfig({
  integrations: [
    react(),                        // Soporte React
    tailwind({ applyBaseStyles: false })
  ],
  experimental: {
    viewTransitions: true           // View Transitions habilitadas
  }
});
```

#### 6. **Estilos Tailwind** (`src/styles/global.css`)
- ✅ Fuentes Google: Inter (sans), Lora (serif)
- ✅ Paleta personalizada:
  - Primary: Naranja (#f0701e) → Estimulación
  - Accent: Verde (#22c55e) → Acción
  - Neutral: Grises → Base
- ✅ Clases custom:
  - `.card-hover` → Efecto de elevación
  - `.badge` → Pills de adjetivos
  - `.progress-bar` → Barra de progreso

---

## 🚀 Comandos

```bash
# Desarrollo
npm run dev           # http://localhost:4321

# Producción
npm run build         # Build estático
npm run preview       # Preview del build
```

---

## 📐 Responsive Design

| Breakpoint | Layout |
|------------|--------|
| Mobile (< 768px) | Grid 1 columna, texto reducido |
| Tablet (768px - 1024px) | Grid 2 columnas |
| Desktop (> 1024px) | Grid 2 columnas + sección consejos |

---

## 🎨 UX Highlights

### **View Transitions (Astro Native)**
```astro
<!-- index.astro -->
<img transition:name="aroma-naranja" />

<!-- [id].astro -->
<img transition:name="aroma-naranja" />
```
→ La imagen se expande suavemente entre páginas

### **Feedback Visual por Fase**
- **Fase 1:** Naranja, contenido denso, progreso constante
- **Fase 2:** Verde, UI minimalista, animación pulsante
- **Fase 3:** Gris, mensaje positivo, CTAs claros

### **Animaciones CSS**
```css
@keyframes fade-in {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
```

---

## 🔧 Personalización Rápida

### Cambiar Duración de Fases
`src/components/TrainingSession.jsx:4-7`
```javascript
const PHASE_DURATIONS = {
  STIMULATION: 60,  // Cambia aquí
  ACTION: 30,       // Cambia aquí
};
```

### Agregar Nuevos Aromas
`src/data/aromas.json`
```json
{
  "id": "lavanda",
  "name": "Lavanda",
  "images": ["url1", "url2", "url3"],
  "adjectives": [...],
  "evocativeText": "...",
  "questions": [...]
}
```

### Cambiar Colores
`tailwind.config.mjs:6-26`

---

## 📦 Dependencias Principales

```json
{
  "astro": "^4.16.18",
  "@astrojs/react": "^3.6.2",
  "@astrojs/tailwind": "^5.1.2",
  "react": "^18.3.1",
  "tailwindcss": "^3.4.17"
}
```

---

## ✨ Características Destacadas

1. ✅ **Zero JavaScript en páginas estáticas** (solo isla React para timer)
2. ✅ **Transiciones nativas de Astro** (sin librerías externas)
3. ✅ **Diseño mobile-first** responsive
4. ✅ **State machine clara** (fácil de mantener)
5. ✅ **Textos placeholder** (listos para reemplazo)
6. ✅ **Imágenes de Unsplash** curadas por tipo (macro, whole, landscape)
7. ✅ **Accesibilidad:** HTML semántico, contraste WCAG AA
8. ✅ **Performance:** CSS optimizado, componentes lazy

---

## 🎯 Próximos Pasos Sugeridos (Opcionales)

- [ ] Añadir persistencia (LocalStorage) para trackear progreso
- [ ] Implementar sonidos suaves en cambios de fase
- [ ] Agregar modo oscuro
- [ ] Crear gráfica de progreso semanal
- [ ] Exportar datos de sesiones a CSV
- [ ] Añadir notificaciones push (recordatorios)

---

## 📄 Licencia
MIT - Uso libre
