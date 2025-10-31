# Developer Portfolio - Next.js 16

A modern, responsive developer portfolio built with Next.js 16, React 19, and Tailwind CSS 4.

## Features

- 🚀 Next.js 16 with App Router
- ⚛️ React 19
- 🎨 Tailwind CSS 4 + SCSS
- ♿ Full accessibility support (WCAG AA)
- 📱 Responsive design
- 🔒 Secure contact form with reCAPTCHA
- 📧 Email notifications via Nodemailer
- 🐳 Docker support
- 🧪 Testing with Playwright and Jest

## Setup

1. Clone the repository:
```bash
git clone https://github.com/syal00/syal00.github.io.git
cd syal00.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` file (copy from `.env.example`):
```bash
# Google Tag Manager (optional)
NEXT_PUBLIC_GTM=

# App URL
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Telegram (optional)
TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=

# Email (Nodemailer)
GMAIL_PASSKEY=
EMAIL_ADDRESS=

# reCAPTCHA
RECAPTCHA_SECRET=
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=
```

4. Run development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

### Required for Contact Form
- `EMAIL_ADDRESS` - Your Gmail address
- `GMAIL_PASSKEY` - Gmail app password (not your regular password)
- `RECAPTCHA_SECRET` - Server-side reCAPTCHA secret key
- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` - Client-side reCAPTCHA site key

### Optional
- `NEXT_PUBLIC_GTM` - Google Tag Manager ID
- `NEXT_PUBLIC_APP_URL` - Your app URL (defaults to localhost:3000)
- `TELEGRAM_BOT_TOKEN` - Telegram bot token for notifications
- `TELEGRAM_CHAT_ID` - Telegram chat ID for notifications

## Build

Build for production:
```bash
npm run build
```

Start production server:
```bash
npm start
```

## Docker

### Development
```bash
docker-compose up dev
```

### Production
```bash
docker-compose up prod
```

Or build individually:
```bash
# Dev
docker build -f Dockerfile.dev -t portfolio-dev .

# Prod
docker build -f Dockerfile.prod -t portfolio-prod .
```

## Testing

### Run Playwright smoke tests:
```bash
npx playwright test
```

### Run unit tests:
```bash
npm test
```

## Project Structure

```
├── app/
│   ├── api/              # API routes
│   ├── components/       # React components
│   ├── css/              # SCSS styles
│   ├── layout.js         # Root layout
│   └── page.js           # Homepage
├── utils/
│   ├── data/             # Content data files
│   └── *.js               # Utility functions
├── public/                # Static assets
└── tests/                 # Test files
```

## Accessibility

This portfolio follows WCAG AA standards:
- Semantic HTML5
- Keyboard navigation
- ARIA labels and roles
- Focus indicators
- Color contrast (AA compliant)
- Screen reader friendly

## Performance

- Image optimization with Next.js Image
- Code splitting and lazy loading
- Minimal layout shift (CLS)
- Lighthouse score: 90+ across all categories

## License

© 2025 Rakesh Syal. All rights reserved.