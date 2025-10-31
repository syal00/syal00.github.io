# Developer Portfolio - Next.js 16 Portfolio Website

A modern, responsive developer portfolio website built with **Next.js 16**, **React 19**, and **Tailwind CSS 4**. Features dark theme with gradient designs, Lottie animations, and a fully customizable data-driven configuration.

## 🚀 Technology Stack

### Core Technologies
- **Next.js 16.0.1** - React framework with App Router, Server Components, and Server Actions
- **React 19.2.0** - UI library with latest features
- **Tailwind CSS 4.x** - Utility-first CSS framework
- **SASS** - CSS preprocessor for advanced styling
- **Node.js** - Runtime environment (requires 18.17+)

### Key Dependencies
- **lottie-react** - Lightweight animations using Lottie JSON files
- **react-fast-marquee** - Smooth scrolling marquee for skills section
- **react-icons** - Icon library
- **react-toastify** - Beautiful notification toasts
- **axios** - HTTP client for API requests
- **nodemailer** - Email sending functionality
- **@emailjs/browser** - Client-side email service
- **sharp** - High-performance image processing

## 📋 Prerequisites

- Node.js 18.17 or higher
- npm or yarn package manager

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/syal00/syal00.github.io.git
   cd syal00.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   # Google Tag Manager (Optional)
   NEXT_PUBLIC_GTM=GTM-XXXXXXX

   # App URL (Required for contact form)
   NEXT_PUBLIC_APP_URL=http://localhost:3000

   # Telegram Bot (Optional)
   TELEGRAM_BOT_TOKEN=your_bot_token
   TELEGRAM_CHAT_ID=your_chat_id

   # Gmail (Optional)
   GMAIL_PASSKEY=your_app_password
   EMAIL_ADDRESS=your_email@gmail.com
   ```

4. **Add your profile image**
   - Place your profile image at `public/profile.png`
   - Or update the path in `utils/data/personal-data.js`

5. **Customize your data**
   - Edit `utils/data/personal-data.js` with your information
   - Update `utils/data/projects-data.js` with your projects
   - Modify `utils/data/skills.js` with your skills
   - Edit `utils/data/experience.js` with your work experience
   - Update `utils/data/educations.js` with your education

## 🚀 Running the Project

### Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
npm start
```

## 📁 Project Structure

```
developer-portfolio/
├── app/
│   ├── api/                    # API routes
│   │   ├── contact/            # Contact form endpoint
│   │   └── data/               # Data API endpoint
│   ├── assets/                 # Assets folder
│   │   ├── lottie/            # Lottie animation JSON files
│   │   └── svg/               # SVG illustrations
│   ├── components/             # React components
│   │   ├── homepage/          # Homepage sections
│   │   ├── helper/            # Helper components
│   │   ├── navbar.jsx         # Navigation bar
│   │   └── footer.jsx         # Footer component
│   ├── css/                   # Styles
│   │   ├── globals.scss       # Global styles
│   │   └── card.scss          # Card animations
│   ├── blog/                  # Blog page
│   ├── layout.js              # Root layout
│   ├── page.js                # Home page
│   └── not-found.jsx          # 404 page
├── utils/                     # Utility functions
│   ├── data/                  # Data configuration files
│   └── ...                    # Utility functions
├── public/                    # Static files
│   └── profile.png            # Profile image
├── package.json
├── next.config.js
└── tailwind.config.js
```

## 🎨 Customization Guide

### Personal Information
Edit `utils/data/personal-data.js`:
- Update name, designation, description
- Add social media links (GitHub, LinkedIn, etc.)
- Set your dev.to username for blog integration
- Add resume link

### Projects
Edit `utils/data/projects-data.js`:
- Add/remove project objects
- Each project needs: `id`, `name`, `description`, `tools[]`, `role`, `code`, `demo`

### Skills
Edit `utils/data/skills.js`:
- Add/remove skill strings
- Skills display in a scrolling marquee

### Experience & Education
- Edit `utils/data/experience.js` for work experience
- Edit `utils/data/educations.js` for education history

### Color Scheme
Primary colors used:
- Teal: `#16f2b3`
- Pink: `#ec4899`
- Violet: `#9333ea`

Edit Tailwind classes throughout components to customize colors.

## 📧 Contact Form Setup

The contact form supports multiple notification methods:

1. **Email via Nodemailer** (Optional)
   - Set `GMAIL_PASSKEY` and `EMAIL_ADDRESS` in `.env.local`
   - Requires Gmail App Password

2. **Telegram Notifications** (Optional)
   - Set `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID`
   - Create a bot via @BotFather on Telegram

## 📝 Blog Integration

- Set `devUsername` in `personal-data.js` to your dev.to username
- Portfolio automatically fetches blog posts from dev.to API
- Only posts with cover images are displayed

## 🚢 Deployment

### Recommended Platforms

**Vercel** (Recommended)
- Native Next.js support
- Zero-config deployment
- Automatic HTTPS

**Netlify**
- Static site deployment
- Serverless functions support

**AWS Amplify**
- Full-stack deployment
- Built-in CI/CD

**Docker**
- Use included Dockerfile for containerized deployment

## 🎯 Key Features

- ✅ Server-Side Rendering (SSR)
- ✅ Responsive Design (Mobile-first)
- ✅ Dark Theme with Gradient Designs
- ✅ Lottie Animations
- ✅ Contact Form with Email/Telegram
- ✅ Blog Auto-Fetch from dev.to
- ✅ SEO Optimized
- ✅ Performance Optimized
- ✅ Accessible
- ✅ Fully Customizable

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👤 Author

**Rakesh Syal**
- GitHub: [@syal00](https://github.com/syal00)
- Portfolio: [https://syal00.github.io](https://syal00.github.io)

---

⭐ If you find this project helpful, please give it a star!