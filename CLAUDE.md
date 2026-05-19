# Claude Code — Instrukcje dla projektu PITIAITI

## Kontekst

Budujemy landing page studia software'owego w Next.js 15.
**Pełny brief znajdziesz w `BRIEF.md` w roocie projektu — przeczytaj go ZAWSZE przed jakąkolwiek akcją.**

## Zasady pracy

1. **Czytaj BRIEF.md przed każdym nowym komponentem** — tam są design tokens, struktura, pułapki techniczne i checklist MVP.

2. **Pracuj krokami z checklisty MVP** (sekcja "Checklist MVP" w BRIEF.md). Po każdym ukończonym kroku:
   - Pokaż co zrobiłeś (lista zmienionych plików)
   - Czekaj na moją akceptację zanim przejdziesz dalej
   - NIE przeskakuj kroków

3. **Trzymaj się design tokens ściśle** — kolory, spacing, typografia są zdefiniowane w briefie. Nie improwizuj.

4. **Glassmorphism = warstwy DOM**. Pamiętaj że `backdrop-blur` rozmywa to co jest POD elementem. Struktura z-index z briefu jest obowiązkowa.

5. **Logo to PNG, nie SVG, nie font** — `public/logos/pitiaiti-logo.png` z przezroczystym tłem. Używaj `next/image`.

6. **Referencja wizualna**: `public/reference/landing-reference.jpeg` — wracaj do niej przy każdym komponencie hero/cards.

## Czego NIE robić

- NIE instaluj shadcn/ui ani innych UI kitów (chyba że poproszę)
- NIE używaj styled-components ani CSS-in-JS innego niż Tailwind
- NIE dodawaj komponentów spoza checklisty MVP (Day 2+ przyjdzie później)
- NIE używaj emoji w UI
- NIE dodawaj animacji "bouncy" — tylko ease-out, długie czasy
- NIE rób bulk changes — komponent po komponencie

## Workflow każdego kroku

```
1. Przeczytaj odpowiednią sekcję BRIEF.md
2. Powiedz mi co zamierzasz zrobić (1-2 zdania)
3. Stwórz/edytuj pliki
4. Pokaż diff i listę zmian
5. Czekaj na "ok" / "dalej" / feedback
```

## Stan projektu

- [x] Setup: Next.js 15 + TS + Tailwind v4
- [x] Dependencies: framer-motion, clsx, tailwind-merge, lucide-react
- [x] Assety: logo PNG, screen referencyjny
- [ ] **Następny krok: Krok 2 z checklisty BRIEF.md (globals.css — design tokens)**

## Komendy

```bash
npm run dev        # dev server na :3000
npm run build      # production build (sprawdzaj często)
npm run lint       # ESLint
```