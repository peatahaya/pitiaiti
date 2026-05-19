# PITIAITI — Landing Page Brief

> Kontekst dla Claude Code. Cel: zbudować pixel-perfect landing page studia software'owego z glassmorphism w Next.js 15.

---

## 🎯 Cel projektu

Landing page premium studia tworzącego aplikacje webowe, mobilne i SaaS. Aesthetic: Linear.app × Vercel × Apple keynote × Arc Browser. Restrained, confident, expensive.

**Referencja wizualna:** `/public/reference/landing-reference.jpeg` (dołączyć render z nano banana)

---

## 🛠 Stack

```
Next.js 15 (App Router)
TypeScript (strict)
Tailwind CSS v4
Framer Motion (animacje)
next/font (typografia)
```

**Dodatkowe biblioteki:**
- `clsx` + `tailwind-merge` → utility `cn()`
- `lucide-react` → ikony
- `@vercel/analytics` (opcjonalnie)

**Brak:**
- Żadnych UI kitów (shadcn opcjonalnie tylko dla buttona/dialoga)
- Żadnego CSS-in-JS poza Tailwind
- Żadnych template'ów

---

## 📁 Struktura projektu

```
app/
  layout.tsx              # root layout, fonts, metadata
  page.tsx                # landing page (Hero only na MVP)
  globals.css             # Tailwind + custom CSS variables

components/
  layout/
    GlassNav.tsx          # floating glass pill nav (top)
  hero/
    Hero.tsx              # główna sekcja hero
    HeroHeadline.tsx      # massive thin headline
    HeroCTAs.tsx          # primary + ghost button
    TrustRow.tsx          # "Trusted by" + abstract logos
  cards/
    FloatingCard.tsx      # bazowy komponent glass card
    MobileAppCard.tsx     # iPhone-style mockup floating
    DashboardCard.tsx     # SaaS dashboard fragment
    CodeSnippetCard.tsx   # syntax-highlighted code card
    SidebarCard.tsx       # mała karta z menu (top right)
  background/
    MeshGradient.tsx      # animated SVG gradient mesh
    BokehLayer.tsx        # blurred light orbs
    FilmGrain.tsx         # subtle noise overlay
  ui/
    GlassButton.tsx       # reusable glass pill button
    GhostButton.tsx       # secondary outlined button
  brand/
    Logo.tsx              # SVG wordmark (NIE font — wektor!)

lib/
  utils.ts                # cn() helper
  motion.ts               # shared framer-motion variants

public/
  fonts/                  # custom .woff2 jeśli mamy
  reference/              # screeny referencyjne
  logos/                  # SVG logo + client logos
```

---

## 🎨 Design tokens

### Kolory (CSS variables w `globals.css`)

```css
:root {
  /* Background palette — gradient mesh */
  --bg-base: #0a0a1a;
  --bg-indigo: #1a1b3e;
  --bg-violet: #6b46c1;
  --bg-magenta: #d946ef;
  --bg-teal: #14b8a6;

  /* Glass surfaces */
  --glass-bg: rgba(255, 255, 255, 0.08);
  --glass-bg-strong: rgba(255, 255, 255, 0.12);
  --glass-border: rgba(255, 255, 255, 0.18);
  --glass-border-bright: rgba(255, 255, 255, 0.28);

  /* Text */
  --text-primary: rgba(255, 255, 255, 1);
  --text-secondary: rgba(255, 255, 255, 0.7);
  --text-tertiary: rgba(255, 255, 255, 0.5);
  --text-muted: rgba(255, 255, 255, 0.35);

  /* Accents */
  --accent-glow: rgba(217, 70, 239, 0.4);
}
```

### Typografia

**Display headline:** `Inter Display` lub `Geist` w wadze 200-300 (thin/extralight)
**Body:** `Inter` 400/500
**Logo:** SVG wektor — NIE polegać na foncie (krój PITIAITI jest custom)

```ts
// app/layout.tsx
import { Inter } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
// const interDisplay = localFont({ src: "./fonts/InterDisplay-Thin.woff2", ... });
```

### Skala typograficzna

```
Hero headline:    clamp(56px, 8vw, 120px) / line-height 0.95 / weight 200 / tracking -0.02em
Sub-headline:     clamp(18px, 1.4vw, 22px) / weight 400 / opacity 0.7
Nav items:        14px / weight 500 / tracking 0
CTA button:       15px / weight 500
Trust label:      11px / uppercase / tracking 0.15em / opacity 0.4
```

### Spacing & layout

```
Container max-width:  1440px
Hero padding:         pt-32 pb-24 px-8
Nav top offset:       top-6
Card border-radius:   24px (large) / 16px (small)
Glass blur:           backdrop-blur-2xl (40px) / backdrop-blur-3xl (60px)
```

---

## 🧩 Komponenty — specyfikacja

### `GlassNav`
- Floating pill na górze, `position: fixed`, `top-6`, centered
- Width: ~`max-w-5xl`, padding `px-6 py-3`
- `backdrop-blur-2xl`, `bg-white/8`, `border border-white/18`
- Lewa strona: Logo (SVG, h-6)
- Środek: linki — `Work, Services, Process, About, Contact`
- Prawa strona: `<GlassButton>Start a project →</GlassButton>` (ciemniejszy wariant)
- On scroll: subtle `bg` boost (`bg-white/12`)

### `Hero`
- Pełna wysokość viewportu (`min-h-screen`), padding-top na nav
- Layout: 2 kolumny (text left 60%, floating cards right 40%)
- Mobile: 1 kolumna, karty schowane lub stacked

### `HeroHeadline`
- Tekst: **"We build software that feels inevitable."**
- 2 linie z manualnym `<br>` po "software"
- White, thin (200), tight tracking
- Sub: **"A design-led studio shipping products for ambitious teams."**

### `HeroCTAs`
- Primary: `<GlassButton>View our work</GlassButton>`
- Secondary: `<GhostButton>Read the manifesto</GhostButton>`
- Gap-3, mt-8

### `FloatingCard` (bazowy)
```tsx
type Props = {
  className?: string;
  rotate?: number;          // degrees
  blur?: "lg" | "xl" | "2xl" | "3xl";
  children: React.ReactNode;
};
```
- `rounded-3xl border border-white/20 bg-white/8 backdrop-blur-2xl`
- `shadow-[0_8px_32px_rgba(0,0,0,0.3)]`
- Inner glow: `before:` pseudo-element z gradient bordera
- On hover: lekki `scale-1.02` + zwiększony blur

### `MobileAppCard`
- Rozmiar: ~280×580px, rotate -8deg, position right-32 top-1/3
- Wewnątrz: abstract dashboard mockup (chart + cards)
- iPhone-style frame (rounded-[40px], notch indicator)

### `DashboardCard`
- Szerokość: ~420px, rotate +4deg, position right-8 top-1/4
- Wewnątrz: SaaS dashboard fragment (sidebar + chart + KPI numbers)
- Tytuł: "SaaS dashboard"
- Mock chart: SVG line chart (smooth bezier)
- KPI: "$3.58K", "13,430", "11,918"

### `CodeSnippetCard`
- Mała karta dolna prawa, ~320×180px, rotate -3deg
- macOS-style traffic lights (red/yellow/green)
- Code: HTML/JSX z syntax highlighting (Prism lub shiki)
- Bardzo subtle, low opacity content

### `MeshGradient`
- SVG fullscreen z animowanymi gradient stops
- Warstwy: indigo base → violet middle → magenta highlights → teal accents
- Animacja: powolny shift co 20s (framer-motion lub CSS)
- **Krytyczne:** to musi być fizyczny element pod kartami, NIE tło body

### `BokehLayer`
- Kilka rozmytych kółek (radial-gradient) na warstwie absolute
- Różne rozmiary, opacity 0.3-0.6
- Filter: `blur(60px)`
- Animacja: bardzo wolny float

### `FilmGrain`
- Fixed overlay, mix-blend-mode: overlay, opacity 0.05
- SVG noise turbulence albo PNG texture
- Pointer-events: none

---

## ⚠️ Pułapki techniczne

### 1. Glassmorphism wymaga warstw
`backdrop-blur` rozmywa to co JEST POD elementem. Struktura DOM musi być:

```tsx
<main className="relative">
  <MeshGradient />      {/* z-0, absolute inset-0 */}
  <BokehLayer />        {/* z-0 */}
  <FilmGrain />         {/* z-50 */}
  <GlassNav />          {/* z-40 */}
  <Hero />              {/* z-10 */}
</main>
```

Karty wewnątrz Hero muszą mieć `relative z-10`, gradient `absolute inset-0 z-0`.

### 2. Tailwind v4 — glass utility
Stwórz custom utility w `globals.css`:

```css
@utility glass {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(40px) saturate(180%);
  -webkit-backdrop-filter: blur(40px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.18);
}

@utility glass-strong {
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(60px) saturate(200%);
  border: 1px solid rgba(255, 255, 255, 0.25);
}
```

### 3. Performance
- `MeshGradient` jako SVG (nie canvas, nie WebGL na MVP)
- Animacje tylko na transform/opacity (nie filter)
- `will-change: transform` na floating cards
- Lazy load floating cards poza viewport

### 4. Logo jako SVG, nie font
Krój PITIAITI to custom. Najlepiej:
1. Otwórz referencyjny PNG w Figmie/Illustratorze
2. Zwektoryzuj literki (Image Trace lub ręcznie)
3. Eksportuj jako optymalizowany SVG
4. Wklej jako React component (`<Logo />`)

### 5. Mobile responsiveness
- Floating cards: `hidden lg:block` na MVP, później upraszczana wersja mobile
- Headline: `text-5xl md:text-7xl lg:text-8xl xl:text-9xl`
- Nav: hamburger pod `md`

---

## 🎬 Animacje (framer-motion)

### Hero entrance
```ts
const heroVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
  }
};
```

### Floating cards parallax
```ts
// w Hero.tsx
const { scrollYProgress } = useScroll();
const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
```

### Cards float idle
```ts
animate={{
  y: [0, -10, 0],
  transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
}}
```

### Stagger children w nav
```ts
const navStagger = {
  visible: { transition: { staggerChildren: 0.05 } }
};
```

---

## ✅ Checklist MVP (Day 1)

```
[ ] 1. Setup: Next.js 15 + TS + Tailwind v4 + framer-motion
[ ] 2. globals.css — design tokens + glass utilities
[ ] 3. Logo.tsx — SVG wordmark (zwektoryzowany)
[ ] 4. MeshGradient.tsx — animowany SVG gradient
[ ] 5. BokehLayer.tsx + FilmGrain.tsx
[ ] 6. GlassButton.tsx + GhostButton.tsx
[ ] 7. GlassNav.tsx — floating pill
[ ] 8. HeroHeadline.tsx + HeroCTAs.tsx + TrustRow.tsx
[ ] 9. FloatingCard.tsx (baza) + DashboardCard + MobileAppCard + CodeSnippetCard
[ ] 10. Hero.tsx — skleja wszystko
[ ] 11. page.tsx — wstawia Hero
[ ] 12. Animacje entrance + floating idle
[ ] 13. Responsive check
[ ] 14. Lighthouse: 95+ na desktop
```

---

## 🚀 Day 2+ roadmap

- Sekcja Services (4 karty: Web, Mobile, SaaS, Design)
- Sekcja Work (case studies grid)
- Sekcja Process (numbered steps z animacją)
- Stopka z newsletterem
- Strona /work z portfolio
- Strona /contact z formularzem
- Cursor effect (subtle glow follow)
- Page transitions

---

## 🎨 Aesthetic guardrails

**TAK:**
- Negative space jako element designu
- Typografia jako bohater
- Subtelne animacje (ease-out, długie czasy 0.8-1.5s)
- Kontrast wagowy (thin headline + medium UI)
- Glass jako fizyczny materiał, nie graficzny efekt

**NIE:**
- Stockowe ikony
- Gradienty na buttonach (płaskie glass!)
- Drop shadows na tekście
- Emoji w UI
- Bouncy animacje
- Decoracyjne shape'y bez funkcji
- Więcej niż 3 kolory akcentu w viewport

---

## 📝 Komenda startowa dla Claude Code

```
Przeczytaj BRIEF.md w roocie projektu. Zacznij od checklisty MVP, 
krok 1 (setup). Po każdym ukończonym kroku pokaż mi diff i czekaj 
na akceptację zanim ruszysz dalej. Trzymaj się design tokens 
i aesthetic guardrails ściśle.
```

---

**Filozofia:** to nie ma być landing — to ma być manifest. 
Każdy pixel ma znaczyć. Każdy whitespace jest celowy.
