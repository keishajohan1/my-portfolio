# Keisha Johan - Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.

## Features

- 🎨 Modern, professional design with custom color scheme
- 📱 Fully responsive (mobile, tablet, desktop)
- ✨ Smooth scroll animations using Intersection Observer
- 🎯 Animated skill progress bars
- 💼 Experience and education showcase
- 📧 Contact section with social links
- 🚀 Fast performance with Vite

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/     # React components
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Experience.jsx
│   ├── Education.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── data/          # Portfolio data
│   └── portfolioData.js
├── hooks/         # Custom React hooks
│   └── useScrollAnimation.js
├── App.jsx        # Main app component
├── main.jsx       # Entry point
└── index.css      # Global styles
```

## Configuration

### Updating Portfolio Data

All portfolio content is stored in `src/data/portfolioData.js`. Simply edit this file to update:
- Personal information
- Skills
- Experience
- Education
- Contact information

### Profile Photo

**Important:** The profile photo URL needs to be a direct image link. Imgur album links won't work.

To update the profile photo:
1. Open your Imgur album: https://imgur.com/a/hxGQYAL
2. Right-click on the image and select "Copy image address"
3. Update the `profilePhoto` field in `src/data/portfolioData.js` with the direct image URL

The direct image URL format should look like: `https://i.imgur.com/[imageId].jpg`

Alternatively, you can:
- Upload the image directly to Imgur (not as an album) to get a direct link
- Use a service like Cloudinary, AWS S3, or GitHub for hosting
- Place the image in the `public` folder and reference it as `/image.jpg`

### Color Scheme

The color scheme is defined in `tailwind.config.js`:
- Primary: #055742 (deep teal)
- Accent: #590F00 (burgundy)
- Secondary: #172EB1 (royal blue)
- Background: #FFFFFF (white)
- Light Background: #DADFE1 (light gray)

## Customization

### Adding New Sections

1. Create a new component in `src/components/`
2. Add the section data to `src/data/portfolioData.js` if needed
3. Import and add the component to `src/App.jsx`
4. Add a navigation link in `src/components/Navbar.jsx`

### Modifying Styles

- Global styles: Edit `src/index.css`
- Component styles: Modify Tailwind classes in component files
- Color scheme: Update `tailwind.config.js`

## Deployment

### Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Vite and deploy

### Netlify

1. Push your code to GitHub
2. Import your repository in Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### GitHub Pages

1. Install `gh-pages`: `npm install --save-dev gh-pages`
2. Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/my-portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```
3. Run: `npm run deploy`

## License

This project is open source and available under the MIT License.

## Contact

Keisha Johan
- Email: kjohan@purdue.edu
- LinkedIn: https://www.linkedin.com/in/keishajohan/
