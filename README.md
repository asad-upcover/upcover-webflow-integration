# Upcover Webflow Integration Modular Widget Library

A modular, component-based HTML/CSS/TypeScript project designed for:
- Local development and preview using Parcel
- Seamless integration with [Webflow](https://webflow.com) by embedding compiled JavaScript files

---

## 🧩 Project Structure

```
.
├── components/
│   ├── appbar/
│   │   ├── index.ts         # Self-rendering logic
│   │   └── style.css        # Component-specific styles
│   └── navbar/...
├── dev/
│   └── index.html           # Local preview of all widgets
│   └── style.css            # Local styling of all widgets
├── dist/                    # Compiled JS (after build)
├── package.json
└── tsconfig.json
```

---

## 🛠️ Local Development

### 1. Install dependencies

```bash
npm install
```

### 2. Start local development server

```bash
npm run start
```

- This opens `dev/index.html` via Parcel
- Widgets auto-render based on their element ID (`#widget-button`, etc.)

---

## ⚙️ Production Build

### Compile widgets

```bash
npm run build
```

- Outputs compiled JS into `dist/`
- Each component is independently usable

---

## 🌐 Webflow Integration

You can use any widget inside Webflow like this:

```html
<!-- Add inside Webflow embed block -->
<div id="widget-button"></div>
<script src="https://your-cdn.com/widget-button.js"></script>
```

> Ensure the matching `div#widget-button` exists before including the script.

Each widget is self-contained and auto-renders when loaded.

---

## 🧪 Local Preview of Production Build

After running the build:

### Option 1: Use `serve` (recommended)

```bash
npm install -g serve
serve dist
```

### Option 2: Use Python

```bash
cd dist
python3 -m http.server
```

Then open [http://localhost:8000](http://localhost:8000)

---

## 📦 Deployment

You can deploy the contents of the `dist/` folder to:
- Google Cloud Storage (GCS)
- AWS S3
- Vercel / Netlify (static hosting)

These URLs can then be embedded in Webflow.

---

## 📁 To Do

- [ ] Add GitHub Actions CI for auto-build & GCS upload
- [ ] Add unit tests for widgets
- [ ] Add more components (forms, calculators, banners, etc.)

---

## 👨‍💻 Author

Developed by Upcover team for embedded component use across marketing and Webflow pages.
