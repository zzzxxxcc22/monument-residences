# MONUMENT Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Собрать, проверить и опубликовать адаптивный премиальный лендинг MONUMENT, визуально соответствующий утверждённому референсу.

**Architecture:** Статически генерируемая страница Next.js App Router состоит из серверной оболочки и небольших изолированных клиентских компонентов для меню, переключателей, формы и появлений при прокрутке. Контент хранится в типизированном модуле, изображения — локально в `public/images`, визуальная система — в глобальных токенах и CSS Modules секций.

**Tech Stack:** Next.js, React, TypeScript, CSS Modules, Vitest, Testing Library, Playwright, Vercel.

## Global Constraints

- Визуально максимально приблизить композицию, тёмную графитовую палитру, бронзовые акценты и типографический контраст к предоставленному референсу.
- Сохранить исходный PNG в `reference/monument-reference.png` только как визуальный ориентир.
- Использовать настоящие русские тексты, локальные изображения и один связный лендинг без внешних горячих ссылок.
- Поддержать desktop от 1280 px, tablet 768–1279 px и mobile 320–767 px без горизонтальной прокрутки.
- Обеспечить клавиатурную доступность, видимый фокус, осмысленные alt-тексты и `prefers-reduced-motion`.
- Перед публикацией выполнить тесты, TypeScript-проверку, lint, production build и браузерный smoke test.

---

## File Map

- `app/layout.tsx` — метаданные, шрифты и корневая оболочка.
- `app/page.tsx` — серверная композиция секций страницы.
- `app/globals.css` — дизайн-токены, сброс, типографика и общие утилиты.
- `components/*.tsx` — смысловые секции и клиентские интерактивы.
- `components/*.module.css` — изолированная раскладка и состояния секций.
- `data/site.ts` — типизированные русские данные комплекса.
- `lib/lead-validation.ts` — чистая проверка формы заявки.
- `tests/*.test.ts(x)` — тесты данных, валидации и интерактивов.
- `e2e/site.spec.ts` — браузерная проверка главного пути.
- `public/images/*` — локальные архитектурные ассеты.
- `reference/monument-reference.png` — предоставленный визуальный ориентир.

### Task 1: Project Foundation and Reference

**Files:**
- Create: `package.json`, `tsconfig.json`, `next.config.ts`, `eslint.config.mjs`, `vitest.config.ts`, `vitest.setup.ts`
- Create: `app/layout.tsx`, `app/page.tsx`, `app/globals.css`
- Create: `reference/monument-reference.png`
- Test: `tests/site-data.test.ts`

**Interfaces:**
- Produces: runnable Next.js App Router project and `SiteData` import contract from `data/site.ts`.

- [ ] **Step 1: Copy the supplied reference**

Copy `C:/Users/HOME/AppData/Local/Temp/codex-clipboard-6d449f7a-55bf-4038-8c39-8c0737805629.png` to `reference/monument-reference.png` and verify the destination exists with non-zero length.

- [ ] **Step 2: Write the failing content test**

Create `tests/site-data.test.ts` importing `siteData` from `@/data/site` and assert that the project name is `MONUMENT`, there are four residence cards, 17 floor entries, and every residence has a title, area, price, and local image path beginning with `/images/`.

- [ ] **Step 3: Run the test to verify RED**

Run `npm test -- tests/site-data.test.ts`. Expected: FAIL because `@/data/site` does not exist.

- [ ] **Step 4: Scaffold the app and minimal data module**

Create the configs, install runtime/dev dependencies, define the `Residence`, `FloorAvailability`, and `SiteData` interfaces, then export `siteData` satisfying the test. Render a minimal semantic `main` in `app/page.tsx`.

- [ ] **Step 5: Verify GREEN and commit**

Run `npm test -- tests/site-data.test.ts`, then commit `chore: scaffold monument website`.

### Task 2: Original Architectural Assets

**Files:**
- Create: `public/images/hero.webp`, `exterior.webp`, `interior-main.webp`, `interior-detail.webp`, `park.webp`, `construction.webp`, `residence-1.webp`, `residence-2.webp`, `residence-3.webp`, `residence-4.webp`
- Create: `public/images/floor-plan.svg`, `public/images/location-map.svg`

**Interfaces:**
- Consumes: local paths declared by `siteData`.
- Produces: optimized image assets with sufficient intrinsic dimensions for their rendered slots.

- [ ] **Step 1: Generate a cohesive evening architecture asset set**

Use original AI-generated imagery guided by the reference: premium Moscow residence, dark blue-hour sky, warm windows, pale stone arches, realistic editorial architecture photography, no text or logos.

- [ ] **Step 2: Convert and size raster assets**

Store hero/exterior at no less than 1920 px wide, large interiors/park at no less than 1400 px wide, and card crops at no less than 800 px wide; encode as WebP without upscaling.

- [ ] **Step 3: Draw original plan and location graphics**

Create accessible, restrained SVG graphics matching the bronze/graphite visual language.

- [ ] **Step 4: Verify assets and commit**

Run a script or image inspector to print intrinsic dimensions, confirm all paths from `siteData` exist, then commit `feat: add monument visual assets`.

### Task 3: Static Page Composition

**Files:**
- Modify: `app/page.tsx`, `app/globals.css`, `data/site.ts`
- Create: `components/Header.tsx`, `Hero.tsx`, `About.tsx`, `Residences.tsx`, `Interiors.tsx`, `Infrastructure.tsx`, `Plans.tsx`, `Construction.tsx`, `Location.tsx`, `LeadSection.tsx`, `Footer.tsx`
- Create: matching `components/*.module.css`
- Test: `tests/page-structure.test.tsx`

**Interfaces:**
- Consumes: `siteData: SiteData` and local image paths.
- Produces: one semantic page with anchors `about`, `residences`, `infrastructure`, `construction`, `contacts` and exactly one `h1`.

- [ ] **Step 1: Write the failing structure test**

Render `app/page.tsx` and assert one `h1`, a `nav`, `main`, `footer`, all five anchor targets, four residence article elements, the hero CTA `Смотреть резиденции`, and the final CTA `Записаться на просмотр`.

- [ ] **Step 2: Run the structure test to verify RED**

Run `npm test -- tests/page-structure.test.tsx`. Expected: FAIL because section components and anchors are missing.

- [ ] **Step 3: Implement semantic sections**

Build focused server components with `next/image`, responsive `sizes`, Russian copy from `siteData`, and no interaction beyond links/buttons.

- [ ] **Step 4: Implement the reference-led visual system**

Add color/font/spacing/motion tokens, asymmetric desktop grids, thin rules, editorial typography, image overlays, aligned card CTAs, tablet stacking, and the 320 px single-column layout.

- [ ] **Step 5: Verify GREEN and commit**

Run the structure test plus `npm run typecheck`, then commit `feat: build monument landing page`.

### Task 4: Interactive Menu, Floors, Gallery, and Form

**Files:**
- Modify: `components/Header.tsx`, `Residences.tsx`, `Interiors.tsx`, `LeadSection.tsx`
- Create: `components/FloorSelector.tsx`, `components/Reveal.tsx`, `lib/lead-validation.ts`
- Test: `tests/lead-validation.test.ts`, `tests/interactions.test.tsx`

**Interfaces:**
- Produces: `validateLead(input: LeadInput): LeadErrors`, where `LeadInput` contains `name`, `phone`, and `consent`; keyboard-operable floor tabs; gallery tabs; accessible mobile dialog navigation.

- [ ] **Step 1: Write failing validation tests**

Assert that blank name returns `Введите имя`, phone shorter than ten digits returns `Введите корректный телефон`, unchecked consent returns `Подтвердите согласие`, and a valid input returns an empty object.

- [ ] **Step 2: Run validation tests to verify RED**

Run `npm test -- tests/lead-validation.test.ts`. Expected: FAIL because `validateLead` is missing.

- [ ] **Step 3: Implement minimal validation and verify GREEN**

Implement the pure function, rerun the validation test, and keep error keys limited to `name`, `phone`, and `consent`.

- [ ] **Step 4: Write failing interaction tests**

Assert mobile navigation toggles its accessible expanded state and closes on Escape; selecting floor `12` changes the availability summary; selecting the second gallery tab changes the displayed image alt; a valid form submission displays `Спасибо! Мы свяжемся с вами.`.

- [ ] **Step 5: Run interaction tests to verify RED**

Run `npm test -- tests/interactions.test.tsx`. Expected: FAIL because the client behavior is absent.

- [ ] **Step 6: Implement interactions and motion guards**

Use local component state, semantic buttons/tabs, Escape handling, body-scroll locking for mobile navigation, IntersectionObserver reveals, and a reduced-motion bypass.

- [ ] **Step 7: Verify GREEN and commit**

Run all unit/component tests, then commit `feat: add monument interactions`.

### Task 5: Automated and Browser Quality Checks

**Files:**
- Create: `playwright.config.ts`, `e2e/site.spec.ts`
- Modify: styles/components only for issues reproduced by tests.

**Interfaces:**
- Produces: repeatable desktop and mobile smoke coverage against the built application.

- [ ] **Step 1: Write the browser smoke test**

At 1440×1000 and 320×800, assert the page loads without horizontal overflow, hero CTA scrolls to residences, mobile menu opens/closes, floor 12 is selectable, gallery changes, form errors appear for invalid submission, and no console errors are emitted.

- [ ] **Step 2: Run checks and capture failures**

Run `npm test`, `npm run typecheck`, `npm run lint`, `npm run build`, then `npm run test:e2e`. Record any exact failing assertion or console message before changing code.

- [ ] **Step 3: Fix only reproduced issues and rerun the full suite**

For every failure, add or retain a regression assertion, apply the smallest correction, and rerun all five commands until they exit 0.

- [ ] **Step 4: Perform visual QA**

Capture desktop and mobile screenshots, inspect hierarchy, image crops, CTA alignment, overflow, contrast, and spacing against `reference/monument-reference.png`.

- [ ] **Step 5: Commit**

Commit `test: verify monument responsive experience`.

### Task 6: GitHub and Vercel Publication

**Files:**
- Modify: `README.md` with setup, checks, content-editing notes, and public URL.
- Create: `.gitignore` excluding dependencies, builds, environment files, and Playwright artifacts.

**Interfaces:**
- Produces: a clean `main` branch, remote repository when authenticated, and verified public Vercel production URL.

- [ ] **Step 1: Confirm repository scope and credentials**

Run `git status`, `git diff --check`, `gh auth status`, and `vercel whoami`. Do not expose tokens in logs or commit local credentials.

- [ ] **Step 2: Run final local verification**

Run `npm test && npm run typecheck && npm run lint && npm run build && npm run test:e2e` in PowerShell-compatible sequential commands and verify every exit code.

- [ ] **Step 3: Publish source**

Rename the branch to `main`; when GitHub authentication is available, create a repository named `monument-residences`, push `main`, and keep the remote URL in Git configuration.

- [ ] **Step 4: Deploy production**

Use a GitHub-connected Vercel project when the available account permits it; otherwise deploy the checked local `main` with `vercel --prod` and record the resulting URL.

- [ ] **Step 5: Verify production**

Check HTTP 200, page title, hero heading, primary local image responses, mobile navigation, floor selection, gallery change, and form validation on the public URL.

- [ ] **Step 6: Document and commit final metadata**

Add the verified public URL and local commands to `README.md`, rerun `git diff --check`, and commit `docs: document monument portfolio project`.
