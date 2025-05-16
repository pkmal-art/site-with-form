# Some Company – Лендинг и форма обратной связи

Современный адаптивный лендинг с формой обратной связи, разработанный с использованием **Next.js**, **TypeScript**, **Material UI** и **styled-components**. Оптимизирован по требованиям SEO, доступности и производительности.

---

## 🔧 Технологии

- **Фреймворк**: [Next.js](https://nextjs.org/)
- **Язык**: TypeScript
- **UI-библиотека**: [Material UI (MUI)](https://mui.com/)
- **Стилизация**: styled-components (CSS-in-JS)
- **Формы**: react-hook-form + yup
- **Управление Head и мета-тегами**: next/head
- **Видео**: react-lite-youtube-embed (облегчённая загрузка YouTube)

---

## 🚀 Быстрый старт

### ✅ Требования
- Node.js 18+
- npm или yarn

### 📦 Установка

```bash
npm install
```

### 🧪 Запуск в режиме разработки

```bash
npm run dev
```

Приложение будет доступно по адресу [http://localhost:3000](http://localhost:3000).


---

## 🎨 Особенности стилизации

Используется `styled-components` — современный способ написания CSS прямо в компонентах.

Основные моменты:
- Полностью адаптивная вёрстка
- Анимации появления (`fadeIn`, `fadeSlideIn`)
- Кастомные стили для состояний `:hover`, `:focus`
- Эффект **"glassmorphism"** и размытия фона у шапки
- Переходы и тени при наведении (для карточек и кнопок)

### 💡 Необычные/современные приёмы CSS

- Облегчённая загрузка YouTube-видео с помощью **react-lite-youtube-embed** — iframe загружается только при взаимодействии. Это значительно улучшает **Core Web Vitals** (особенно LCP и FID).
- Кнопки и карточки используют **скейл-эффекты при наведении и нажатии**, увеличивая интерактивность без ущерба для доступности.

---

## 📈 SEO и производительность

Следуем лучшим практикам SEO:
- Уникальные `<title>` и `<meta description>` на каждой странице
- Канонические ссылки (`<link rel="canonical" />`)
- Правильная иерархия заголовков (`h1`, `h2`, `h3`)
- Мета-теги `robots`, `viewport`, `charset`
- Поддержка мета-тегов для соцсетей

### 🧵 Теги для предпросмотра в соцсетях (Open Graph / Twitter)

Добавлены в `<Head>` каждой страницы:

```html
<!-- Open Graph -->
<meta property="og:title" content="Some Company" />
<meta property="og:description" content="Свяжитесь с нами через форму обратной связи." />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://yourdomain.com/" />
<meta property="og:image" content="https://yourdomain.com/preview.jpg" />

<!-- Twitter Cards -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Some Company" />
<meta name="twitter:description" content="Контактная форма для связи с нашей командой." />
<meta name="twitter:image" content="https://yourdomain.com/preview.jpg" />
```

---

## 🔒 Доступность (A11y)

- Семантическая HTML-структура (`<section>`, `<article>`, `<form>`, `<header>`, `<footer>`)
- Метки и `aria`-совместимые ошибки валидации форм
- Навигация с клавиатуры
- Видимый фокус и высокая контрастность элементов

---

## ✅ Что реализовано

- ✅ Типизированный код (TypeScript)
- ✅ Адаптивная вёрстка
- ✅ Валидация форм в реальном времени
- ✅ Анимации и интерактивные состояния
- ✅ SEO и доступность на каждой странице
- ✅ Поддержка соцсетей (OG + Twitter)
- ✅ Высокая производительность (легкие компоненты, lazy load)


---

## 👨‍💻 Автор

Разработано pkmal. Проект открыт для использования как шаблон или основа для других лендингов.

---