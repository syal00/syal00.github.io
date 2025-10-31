# Quick Setup Guide

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Environment Variables
Create a `.env.local` file in the root directory:
```env
# App URL (Required for contact form)
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Optional: Email via Nodemailer
GMAIL_PASSKEY=your_app_password
EMAIL_ADDRESS=your_email@gmail.com

# Optional: Telegram Notifications
TELEGRAM_BOT_TOKEN=your_bot_token
TELEGRAM_CHAT_ID=your_chat_id

# Optional: Google Tag Manager
NEXT_PUBLIC_GTM=GTM-XXXXXXX
```

### 3. Add Profile Image
- Place your profile image at `public/profile.png`
- Or update the path in `utils/data/personal-data.js`

### 4. Add Lottie Animations (Optional)
- Place `code.json` in `app/assets/lottie/` for Experience section
- Place `study.json` in `app/assets/lottie/` for Education section
- If not available, sections will show "Loading animation..." (still functional)

### 5. Run Development Server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## 📝 Customization

### Personal Information
Edit `utils/data/personal-data.js`:
- Update name, designation, description
- Add social media links
- Set dev.to username for blog integration

### Projects
Edit `utils/data/projects-data.js`:
- Add your projects with required fields

### Skills
Edit `utils/data/skills.js`:
- Add or remove skills

### Experience & Education
- Edit `utils/data/experience.js`
- Edit `utils/data/educations.js`

## 🎨 Styling

- Primary colors: Teal (#16f2b3), Pink (#ec4899), Violet (#9333ea)
- Edit Tailwind classes in components to customize
- Global styles in `app/css/globals.scss`
- Card animations in `app/css/card.scss`

## 📧 Contact Form Setup

### Email Setup (Nodemailer)
1. Enable 2-factor authentication on Gmail
2. Generate an App Password
3. Add to `.env.local`:
   ```
   GMAIL_PASSKEY=your_app_password
   EMAIL_ADDRESS=your_email@gmail.com
   ```

### Telegram Setup
1. Message @BotFather on Telegram
2. Create a new bot with `/newbot`
3. Get your bot token
4. Get your chat ID (message @userinfobot)
5. Add to `.env.local`:
   ```
   TELEGRAM_BOT_TOKEN=your_bot_token
   TELEGRAM_CHAT_ID=your_chat_id
   ```

## 🚢 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy!

### Other Platforms
- Netlify: Connect GitHub repo
- AWS Amplify: Follow Next.js deployment guide
- Docker: Use included Dockerfile

## ✅ What's Included

- ✅ Next.js 16 with App Router
- ✅ React 19
- ✅ Tailwind CSS 4
- ✅ Dark theme with gradients
- ✅ Responsive design
- ✅ Contact form with email/Telegram
- ✅ Blog integration (dev.to)
- ✅ Lottie animations support
- ✅ SEO optimized
- ✅ Performance optimized

## 🐛 Troubleshooting

### Build Errors
- Make sure Node.js version is 18.17+
- Run `npm install` again
- Clear `.next` folder: `rm -rf .next`

### Animation Errors
- Animations are optional, sections work without them
- Check browser console for import errors

### Contact Form Not Working
- Check environment variables are set
- Verify API route is accessible
- Check browser console for errors

## 📚 Need Help?

Check the main README.md for detailed documentation.
