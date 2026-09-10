# SEO Pausa — Fase 1 (research + mapeo de keywords) y notas de implementación

Ejecutado a partir de `prompt-claude-code-seo-pausa.md`. Alcance: español/Argentina primero, sin blog, sin contenido nuevo — optimización técnica y de metadatos sobre las páginas ya existentes.

**Limitación honesta:** no tengo acceso a una herramienta de volumen de búsqueda (Google Keyword Planner, Ahrefs, SEMrush). El research de abajo es cualitativo — análisis real de qué rankea hoy en Google.com.ar para cada frase, quién compite, y qué señales de intención de búsqueda aparecen — no cifras de volumen/dificultad. Donde el prompt pedía "validar volumen y competencia con las herramientas que tengas disponibles", esto es lo que tenía disponible.

---

## 1. Reconciliación de rutas — el prompt asume URLs que no coinciden con el repo real

El prompt lista: `/` · `/plataforma` · `/metodologia` · `/impacto` · `/nosotros` · `/contacto` · `/seguridad` · `/prensa` · `/preguntas-frecuentes` · `/desarrollo-de-habilidades` · `/sumate-al-equipo` · `/terminos-y-condiciones` · `/politicas-de-privacidad`

Inconsistencias reales encontradas en el código:

- **`/impacto` no existe como página propia.** "Impacto" es una sección dentro de `metodologia.html` (`#impacto`). No armé una página separada.
- **`/nosotros` no existe.** La página `nosotros.html` se eliminó en una sesión anterior de este mismo rediseño — `equipo.html` es hoy la página de compañía/equipo real.
- **`/seguridad` no existe como página propia.** Vive como sección `#seguridad` dentro de `politicas-de-privacidad.html`, enlazada desde ahí y desde `plataforma.html`.
- **`reconocimiento.html` existe y el prompt no lo menciona.** Es una página real (el mismo premio VISA · La Nación que también cubre `prensa.html`), todavía con el sistema visual viejo (no migrada al rediseño — usa `assets/style.css`). La dejé con metadatos nuevos pero no le toqué el diseño (fuera de alcance de este pedido).
- **Las URLs no son "limpias" — llevan `.html`.** El sitio se despliega en GitHub Pages (hay un `CNAME` apuntando a `www.pausaco.com`, sin `vercel.json`/`netlify.toml`/config de rutas). Sin una capa de rewrite, GitHub Pages sirve los archivos tal cual: `/plataforma.html`, no `/plataforma`. Implementé canonical y sitemap con las URLs reales (`.html`). Pasar a URLs limpias es una decisión de infraestructura/hosting, no de contenido — lo dejo señalado, no lo cambié sin preguntar.
- **EN/PT ya existen con contenido real** — el prompt asume "no hay contenido en esos idiomas todavía, dejar solo la base técnica". Eso ya quedó viejo: hay 12 páginas en `en/` y 10 en `pt/` (falta `reconocimiento` y `terminos-y-condiciones` en portugués) con traducciones completas. Implementé hreflang real apuntando a esas páginas existentes, no una preparación para el futuro.

---

## 2. Research de competencia (Argentina / LatAm hispanohablante)

Búsquedas reales hechas hoy contra Google, no supuestos:

**Hallazgo más importante:** la frase genérica **"gestión del tiempo"** en Argentina está dominada por software de **control horario / fichaje** (Fichap, Control14, Kronjop, VeoTime, TimeTac) — herramientas de cumplimiento normativo y marcación de asistencia, no de gestión de rol ni reflexión. Competir de frente por esa frase sola pondría a Pausa al lado de productos que resuelven un problema totalmente distinto. Mismo patrón con "delegar tareas" y "gestión de tareas", dominado por Asana/Bizneo/RescueTime.

**Competidores regionales reales identificados** (no los tres globales que ya estaban señalados en el prompt — BetterUp, Culture Amp, Microsoft Viva no aparecen en estas búsquedas locales, confirmando la hipótesis del prompt):

| Competidor | Qué hace | Por qué no es 1:1 con Pausa |
|---|---|---|
| **BS360** (Córdoba) | Bienestar organizacional con metodología propia basada en datos (encuestas EBI/EBO), certificaciones ISO | El más cercano en espíritu ("convertir el bienestar en sistema medible"), pero no trabaja rol-vs-tiempo real ni tiene plataforma de uso semanal — es consultoría + encuestas periódicas |
| **Ahora Wellness** | Consultora de bienestar corporativo, "metodología basada en datos y resultados medibles" | Mismo posicionamiento discursivo que Pausa pero sin producto de software ni Rol Vivo/Foco/Desvío |
| **Lenox HR** | Software HR LatAm (control horario, vacaciones, onboarding, cumplimiento normativo por país) | Herramienta administrativa, no de gestión de rol ni liderazgo |
| **Glue Leadership** (Glue Executive Search) | Evaluación ejecutiva con herramientas tecnológicas para desarrollo de talento | Competencia en Desarrollo de habilidades / acompañamiento ejecutivo, no en la plataforma |
| **Vistage Argentina** | Red de coaching ejecutivo para CEOs (peer groups) | Competencia indirecta en el nivel "acompañamiento ejecutivo" |

**Hallazgo con más potencial de contenido:** el burnout ejecutivo tiene datos durísimos y muy recientes para Argentina — **9 de cada 10 trabajadores dicen estar quemados** (4to año consecutivo liderando el ranking regional), **88% de RR.HH. reconoce no tener programa de prevención**, causa #1 declarada es **sobrecarga de trabajo (43%)**. Esto conecta directo con la nota de La Nación que Pausa ya tiene en prensa ("Burnout ejecutivo: el costo invisible del alto rendimiento") y con el ángulo de `desarrollo-de-habilidades.html` reescrito esta sesión. Es la brecha de contenido más fuerte y menos disputada que encontré: nadie está atacando "burnout ejecutivo" con un enfoque de datos/rol/tiempo, todos lo atacan desde bienestar genérico (Wellhub, mindfulness, gimnasios).

Sources: [Fichap](https://fichap.com/) · [BS360 — Punto a Punto](https://puntoapunto.com.ar/del-bienestar-organizacional-a-la-rentabilidad-la-formula-de-bs360-para-transformar-empresas) · [Ahora Wellness](https://ahorawellness.com.ar/servicios-bienestar-corporativo/) · [Lenox HR](https://www.lenoxhr.com/) · [Glue Leadership — El Economista](https://eleconomista.com.ar/negocios/liderazgo-empresarial-una-consultora-argentina-lanza-una-nueva-unidad-negocio-impulsar-ejecutivos-region-n83647) · [Vistage Argentina](https://vistage.com.ar/) · [Burnout Argentina — Bloomberg Línea](https://www.bloomberglinea.com/latinoamerica/argentina/burnout-laboral-en-argentina-9-de-cada-10-trabajadores-dicen-estar-agotados/) · [Burnout Argentina — Infobae](https://www.infobae.com/economia/2025/11/01/segun-un-estudio-nueve-de-cada-diez-trabajadores-argentinos-estan-quemados-por-su-trabajo/) · [People analytics LatAm — Latin Human Capital](https://www.latinhumancapital.com/people-analytics-latinoamerica-2026-rrhh-datos-decisiones-talento/)

---

## 3. Mapeo de keyword por página (evita canibalización)

| Página | Keyword principal | Secundarias |
|---|---|---|
| `/` (home) | plataforma de gestión de roles y tiempo | liderazgo basado en datos · gestión consciente de equipos |
| `/plataforma` | plataforma de gestión de roles y tiempo con IA | Rol Vivo y agentes de IA · dashboard de foco y desvío |
| `/metodologia` | metodología Rol Vivo, Foco y Desvío | brecha entre rol y desempeño real |
| `/desarrollo-de-habilidades` | desarrollo de liderazgo basado en datos | prevención de burnout ejecutivo con datos · diagnóstico antes de capacitar |
| `/equipo` | equipo Pausa | quiénes son Pausa gestión consciente |
| `/sumate-al-equipo` | trabajar en Pausa | empleo gestión consciente Argentina |
| `/contacto` | agendar demo Pausa | contacto plataforma de gestión de equipos |
| `/preguntas-frecuentes` | preguntas frecuentes Pausa | privacidad e integración con calendario |
| `/politicas-de-privacidad` (cubre `#seguridad`) | seguridad y privacidad de datos Pausa | cumplimiento Google Workspace / Microsoft 365 |
| `/prensa` | Pausa en los medios | Premio VISA La Nación Innovación |
| `/reconocimiento` | Premio VISA La Nación a la Innovación 2025 | (branded — sin competir con /prensa por keyword genérica) |
| `/terminos-y-condiciones` | términos y condiciones Pausa | — (legal, sin objetivo competitivo) |

Sin cruce: cada página apunta a una frase o clúster distinto. `/prensa` y `/reconocimiento` comparten tema (mismo premio) pero con ángulos distintos — vale considerar a futuro si conviene fusionarlos en una sola URL para no competir por los mismos términos (señalado, no resuelto acá).

---

## 4. Qué se implementó técnicamente (Fase 2)

- **Title + meta description únicos** en las 12 páginas ES, alineados a la keyword de la tabla de arriba, dentro de largo recomendado. Páginas que ya tenían metadatos sólidos (contacto, preguntas-frecuentes, políticas de privacidad, prensa, términos) se dejaron con su descripción — solo se ajustó el `<title>` donde faltaba la keyword.
- **Canonical + hreflang real** (`es`/`en`/`pt-BR`/`x-default`) en las 34 páginas (ES+EN+PT), apuntando a las páginas ya traducidas que existen — no una preparación para el futuro, sino la implementación real.
- **JSON-LD `Organization` + `WebSite`** en las 34 páginas.
- **JSON-LD `FAQPage`** en `preguntas-frecuentes.html` (ES), con las 9 preguntas/respuestas reales de la página.
- **`sitemap.xml`** en la raíz — 34 URLs con anotaciones `hreflang` cruzadas — y **`robots.txt`** apuntando a él. Ninguno de los dos existía antes.
- **Jerarquía de encabezados:** verifiqué las 12 páginas ES — todas tienen exactamente un `<h1>`. No hizo falta corregir nada.
- **Enlazado interno:** confirmé que `prensa.html`, `preguntas-frecuentes.html` y `sumate-al-equipo.html` solo estaban enlazadas desde nav/footer, nunca desde el cuerpo de otra página (`desarrollo-de-habilidades.html` sí tenía ya un link contextual desde `metodologia.html`). Agregué tres enlaces contextuales mínimos, sin tocar copy aprobado:
  - En `equipo.html`, debajo de la grilla: *"¿Te gustaría ser parte de este equipo? Sumate al equipo →"*
  - En `contacto.html`, debajo del email: *"¿Tenés dudas antes de escribirnos? Mirá las preguntas frecuentes."*
  - En `index.html`, el texto ya existente "Premio VISA · La Nación" ahora linkea a `/prensa.html` (mismo texto, se agregó el link).
  - Replicado en EN/PT donde corresponde.
- **Imágenes:** revisé atributos `alt` — no encontré ninguno genérico ("imagen1", vacío sin motivo). El único `alt=""` real es un layer decorativo de crossfade en el hero de la home, correcto dejarlo vacío.

---

## 5. Qué quedó pendiente / necesita validación humana

- **JSON-LD adicional no implementado:** `BreadcrumbList` y `Service`/`Product` para la plataforma. El sitio es muy plano (sin categorías anidadas), así que el valor de breadcrumbs es bajo — lo dejé afuera por prioridad, no por olvido. Se puede sumar en una siguiente pasada si el equipo lo quiere.
- **Core Web Vitals:** no pude correr un Lighthouse/PageSpeed real contra la versión desplegada desde este entorno. Hice una revisión cualitativa (nada bloqueante evidente: fuentes con `preconnect`, imágenes con `loading="lazy"` donde corresponde) pero recomiendo correr PageSpeed Insights contra `www.pausaco.com` una vez que este branch se despliegue a preview.
- **FAQPage en EN/PT:** implementé el schema solo en español, siguiendo la decisión explícita del prompt de "no generar contenido en esos idiomas todavía". Es marcado estructural sobre contenido que ya existe en esos idiomas, así que sumarlo ahí es una tarea rápida cuando se decida abrir la fase EN/PT.
- **URLs limpias (sin `.html`):** señalado en la sección 1. Requiere una decisión de hosting/infraestructura (rewrite en GitHub Pages o mudar de proveedor), no un cambio de contenido — no lo toqué sin preguntar.
- **`/prensa` vs `/reconocimiento`:** ambas páginas cubren el mismo premio con ángulos distintos. Vale una conversación de marca sobre si conviene fusionarlas — no es una decisión técnica, la dejo señalada.
- **Cifra de países/años pendiente de otra sesión:** ya estaba documentada como inconsistencia sin resolver (4 vs. 6 países, 5 vs. 8 años) en briefs anteriores del proyecto — no la usé para keywords geográficas hasta que se confirme.

## 6. Recomendación priorizada para la próxima fase

1. **Desarrollo de habilidades como puerta de entrada a "burnout ejecutivo"** — es la brecha de contenido más clara que encontré (datos durísimos, poca competencia con enfoque de datos, y Pausa ya tiene la nota de prensa que lo respalda). Antes de fase EN/PT, tiene más ROI reforzar este ángulo en `/desarrollo-de-habilidades` y quizás sumar un caso concreto (el propio "Pendiente" que señala `brief-desarrollo-de-habilidades-v2.md`: un caso real con nombre de cliente y medición antes/después).
2. **Inglés antes que portugués:** Estados Unidos ya es uno de los 6 países donde opera Pausa (según el copy actual del sitio) y el contenido EN ya existe completo — es la traducción con mercado más inmediato para activar SEO real, no solo hreflang técnico.
3. **Blog:** sigo de acuerdo con la decisión ya tomada de no abrirlo todavía. Si en algún momento se reconsidera, el ángulo de burnout ejecutivo + datos de Argentina sería el punto de partida más fuerte, no contenido genérico de productividad.
