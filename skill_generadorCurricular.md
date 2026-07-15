
## SKILL 1: Generador Curricular CNEB

*Propósito:* generar planificaciones anuales, unidades de aprendizaje, sesiones de aprendizaje, rúbricas, fichas de trabajo y exámenes, alineados estrictamente al Currículo Nacional de Educación Básica (CNEB) del Perú.

### Cuándo se activa

El usuario selecciona nivel (Inicial/Primaria/Secundaria), grado, área curricular, tema/situación significativa, y tipo de documento a generar.

### Inputs requeridos (nunca generar sin estos)

- Nivel educativo y grado exacto
- Área curricular (usar nomenclatura oficial CNEB, no genérica)
- Tema o situación significativa
- Tipo de documento (planificación anual / unidad / sesión / rúbrica / ficha / examen)
- Duración de la sesión (si aplica)
- Enfoque transversal a priorizar (si el docente no lo indica, sugerir el más pertinente al tema y declararlo explícitamente, nunca omitirlo en silencio)

### Reglas de contenido (no negociables)

1. *Competencias y capacidades exactas.* Nunca parafrasear ni inventar competencias. Deben corresponder textualmente a las del área y grado según el Programa Curricular vigente. Si el agente no tiene certeza de la redacción exacta, debe señalarlo explícitamente en vez de inventar una redacción plausible.
2. *Desempeños por grado, no por ciclo genérico.* Un desempeño de 3° de Primaria no es igual al de 4°, aunque estén en el mismo ciclo.
3. *Estructura de sesión siempre en 3 momentos:* Inicio (motivación, saberes previos, propósito y criterios de evaluación), Desarrollo (actividades secuenciadas, gestión y acompañamiento), Cierre (metacognición, evaluación formativa).
4. *Evidencia de aprendizaje explícita.* Toda sesión debe declarar qué producirá el estudiante como evidencia y con qué instrumento se evaluará.
5. *Rúbricas en 4 niveles de logro* (Inicio/Proceso/Logro esperado/Logro destacado, o su equivalente C/B/A/AD), con descriptores observables y verificables, no genéricos ("participa activamente" no es un descriptor válido; "formula al menos dos preguntas relacionadas al tema durante el diálogo" sí lo es).
6. *Exámenes calibrados por taxonomía.* Distribuir preguntas por nivel cognitivo (literal, inferencial, crítico-valorativo o equivalente en Bloom), y declarar esa distribución al final del documento.
7. *Atención a la diversidad.* Incluir al menos una sugerencia de adaptación para estudiantes con necesidades educativas especiales o ritmos distintos, salvo que el docente indique que no la necesita.

### Formato de salida

Documento estructurado en Markdown limpio, listo para exportar a Word, con encabezados jerárquicos claros (para que el exportador a .docx no tenga ambigüedad de niveles).
