# Educa2 — Plataforma Docente IA

Plataforma web para docentes peruanos que combina dos capacidades centrales:

1. **Generador Curricular CNEB** — planificaciones anuales, unidades, sesiones de aprendizaje, rúbricas, fichas y exámenes alineados estrictamente al Currículo Nacional de Educación Básica del Perú.
2. **Simulador de Ascenso y Nombramiento Docente** — simulacros de evaluación para la Carrera Pública Magisterial basados en el Marco de Buen Desempeño Docente.

## Estado

🚧 **En construcción — Fase 0 (Setup)**

- ✅ Proyecto Next.js 13.5 (App Router) + TypeScript + Tailwind CSS
- ✅ Conexión a PostgreSQL vía Supabase
- ✅ Estructura de carpetas: `/app`, `/components`, `/lib`, `/types`
- ✅ Variables de entorno via `.env.example` (sin hardcodear credenciales)
- ✅ Pipeline build + lint verde
- ⏳ Deploy a Vercel pendiente de conexión GitHub → Vercel
- ⏳ Base de datos Supabase pendiente de credenciales reales

## Stack tecnológico

| Capa            | Tecnología                          |
|-----------------|-------------------------------------|
| Framework       | Next.js 13.5 (App Router)           |
| Lenguaje        | TypeScript                          |
| Estilos         | Tailwind CSS                        |
| Base de datos   | PostgreSQL (Supabase)               |
| Cliente DB      | @supabase/supabase-js               |
| Deploy          | Vercel                              |

## Estructura del proyecto

```
/app             # Rutas y páginas (App Router)
/components      # Componentes reutilizables de UI
/lib             # Lógica de servidor, clientes de BD, utilidades
/types           # Definiciones de tipos TypeScript
skills_*.md      # Documentación de skills del producto
```

## Empezando

### Prerrequisitos

- Node.js >= 18.17
- npm >= 8

### Instalación

```bash
npm install
```

### Variables de entorno

Copia el archivo de ejemplo y completa con tus credenciales de Supabase:

```bash
cp .env.example .env.local
```

```
NEXT_PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=tu-clave-publishable
```

### Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

### Build de producción

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

## Deploy

El deploy es automático via Vercel conectado al repositorio GitHub. Cada push a `main` despliega a producción.

## Licencia

Privado — © Brayan Martinez Ojeda