# 💻 Ejemplos de Código - Snippets Útiles

## 📝 Estructura de un Aroma (aromas.json)

```json
{
  "id": "naranja",
  "name": "Naranja",
  "images": [
    "https://images.unsplash.com/photo-1580052614034-c55d20bfee3b?w=800&q=80",
    "https://images.unsplash.com/photo-1582979512210-99b6a53386f9?w=800&q=80",
    "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=800&q=80"
  ],
  "adjectives": [
    "Cítrico",
    "Fresco",
    "Vibrante",
    "Dulce",
    "Energizante",
    "Solar",
    "Jugoso",
    "Luminoso"
  ],
  "evocativeText": "Imagina el sol de la mañana atravesando un naranjo en flor...",
  "questions": [
    "¿Recuerdas algún momento especial tomando jugo de naranja recién exprimido?",
    "¿En qué lugar o situación solías percibir este aroma con más intensidad?"
  ]
}
```

---

## 🎨 View Transitions (Astro)

### index.astro (Página de origen)
```astro
<img
  src={aroma.images[0]}
  alt={aroma.name}
  transition:name={`aroma-${aroma.id}`}  👈 Identificador único
/>
```

### [id].astro (Página de destino)
```astro
<img
  src={aroma.images[0]}
  alt={aroma.name}
  transition:name={`aroma-${aroma.id}`}  👈 Mismo identificador
/>
```

**Resultado:** La imagen se expande suavemente entre páginas sin recarga.

---

## ⏱️ State Machine del Componente React

```javascript
// TrainingSession.jsx

const [phase, setPhase] = useState('STIMULATION');
const [timeLeft, setTimeLeft] = useState(60);

useEffect(() => {
  const interval = setInterval(() => {
    setTimeLeft((prev) => {
      if (prev <= 1) {
        // Cambio de fase automático
        if (phase === 'STIMULATION') {
          setPhase('ACTION');
          return 20; // Nueva duración
        } else if (phase === 'ACTION') {
          setPhase('COMPLETED');
          return 0;
        }
      }
      return prev - 1;
    });
  }, 1000);

  return () => clearInterval(interval);
}, [phase]);
```

**Flujo:**
```
STIMULATION (60s) → ACTION (20s) → COMPLETED
```

---

## 🎯 Renderizado Condicional por Fase

```javascript
// Fase 1: Muestra contenido completo
{phase === 'STIMULATION' && (
  <div>
    <ImageGrid images={aroma.images} />
    <Adjectives list={aroma.adjectives} />
    <EvocativeText text={aroma.evocativeText} />
    <Questions list={aroma.questions} />
  </div>
)}

// Fase 2: Solo indicador de acción
{phase === 'ACTION' && (
  <div>
    <h2>Respira Profundamente</h2>
    <Timer seconds={timeLeft} />
  </div>
)}

// Fase 3: Botones de finalización
{phase === 'COMPLETED' && (
  <div>
    <h2>¡Excelente trabajo!</h2>
    <button onClick={handleReset}>Repetir</button>
    <a href="/">Volver</a>
  </div>
)}
```

---

## 📊 Barra de Progreso Dinámica

```javascript
const [progress, setProgress] = useState(0);

useEffect(() => {
  const totalDuration = phase === 'STIMULATION' ? 60 : 20;
  const elapsed = totalDuration - timeLeft;
  setProgress((elapsed / totalDuration) * 100);
}, [timeLeft, phase]);

// JSX
<div className="w-full h-3 bg-neutral-200 rounded-full">
  <div
    className={`h-full rounded-full transition-all ${
      phase === 'STIMULATION' ? 'bg-primary-500' : 'bg-accent-500'
    }`}
    style={{ width: `${progress}%` }}
  />
</div>
```

**Resultado:**
- Fase 1: Barra naranja que se llena en 60s
- Fase 2: Barra verde que se llena en 20s

---

## 🔄 Botón de Reset

```javascript
const handleReset = () => {
  setPhase('STIMULATION');
  setTimeLeft(60);
  setProgress(0);
};

// JSX
<button onClick={handleReset}>
  Repetir Sesión
</button>
```

---

## 🎨 Clases Tailwind Personalizadas (global.css)

```css
@layer components {
  .card-hover {
    @apply transition-all duration-300 hover:shadow-xl hover:-translate-y-1;
  }

  .badge {
    @apply inline-block px-3 py-1 text-sm rounded-full
           bg-primary-100 text-primary-700 font-medium;
  }

  .progress-bar {
    @apply h-2 bg-primary-500 rounded-full
           transition-all duration-1000 ease-linear;
  }
}
```

**Uso:**
```astro
<div class="card-hover">...</div>
<span class="badge">Cítrico</span>
<div class="progress-bar"></div>
```

---

## 🗂️ Rutas Dinámicas (Astro)

```astro
---
// train/[id].astro

import aromas from '../../data/aromas.json';

export function getStaticPaths() {
  return aromas.map((aroma) => ({
    params: { id: aroma.id },
    props: { aroma },
  }));
}

const { aroma } = Astro.props;
---

<h1>{aroma.name}</h1>
```

**Resultado:**
- `/train/naranja` → Muestra datos de naranja
- `/train/eucalipto` → Muestra datos de eucalipto
- `/train/geranio` → Muestra datos de geranio
- `/train/canela` → Muestra datos de canela

---

## 🎭 Integración de React Island

```astro
---
import TrainingSession from '../../components/TrainingSession.jsx';
---

<TrainingSession client:load aroma={aroma} />
```

**Directivas disponibles:**
- `client:load` → Carga inmediata
- `client:idle` → Carga cuando el navegador está idle
- `client:visible` → Carga cuando es visible

---

## ⏲️ Formatear Tiempo (Utility Function)

```javascript
const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

formatTime(90);  // "1:30"
formatTime(5);   // "0:05"
```

---

## 🌈 Sistema de Colores (Tailwind)

```javascript
// tailwind.config.mjs
colors: {
  primary: {
    50: '#fef7ee',
    100: '#fdecd6',
    500: '#f0701e',  // 👈 Color principal (naranja)
    900: '#782b16',
  },
  accent: {
    50: '#f0fdf4',
    100: '#dcfce7',
    500: '#22c55e',  // 👈 Color de acción (verde)
    900: '#14532d',
  }
}
```

**Uso:**
```html
<div class="bg-primary-500 text-white">...</div>
<div class="bg-accent-100 text-accent-700">...</div>
```

---

## 🎬 Animaciones CSS

```css
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.5s ease-out;
}
```

```astro
<div class="animate-fade-in">
  <!-- Contenido que aparece suavemente -->
</div>
```

---

## 📱 Breakpoints Responsive

```astro
<!-- Mobile: Stack vertical -->
<div class="grid grid-cols-1">...</div>

<!-- Tablet (md): 2 columnas -->
<div class="grid grid-cols-1 md:grid-cols-2">...</div>

<!-- Desktop (lg): 3 columnas -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">...</div>
```

**Breakpoints Tailwind:**
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

---

## 🔗 Links con Transiciones

```astro
<a href="/train/naranja">
  <!-- El navegador usará View Transitions automáticamente -->
</a>
```

No se necesita configuración adicional si `<ViewTransitions />` está en el layout.

---

## 🎯 Props de TypeScript (Opcional)

```typescript
// TrainingSession.tsx
interface Aroma {
  id: string;
  name: string;
  images: string[];
  adjectives: string[];
  evocativeText: string;
  questions: string[];
}

interface Props {
  aroma: Aroma;
}

const TrainingSession: React.FC<Props> = ({ aroma }) => {
  // ...
};
```

---

## 📦 Import de Datos JSON

```javascript
// En cualquier componente Astro
import aromas from '../data/aromas.json';

// Uso
const naranja = aromas.find(a => a.id === 'naranja');
console.log(naranja.name); // "Naranja"
```

---

## 🎨 Gradientes de Fondo

```html
<!-- Gradiente sutil -->
<div class="bg-gradient-to-br from-neutral-50 via-primary-50/20 to-accent-50/20">
  ...
</div>

<!-- Overlay oscuro sobre imagen -->
<div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
</div>
```

---

¡Usa estos snippets como referencia para personalizar tu aplicación!
