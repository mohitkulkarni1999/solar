# 🌞 SolarTech Solutions - Solar Installation Website

A professional, modern, and fully responsive solar installation website built with React and Tailwind CSS. Features a clean industry-level design with modular components and smooth animations.

## ✨ Features

### 🎨 Design
- **Modern UI/UX**: Professional industry-level design with unique header and footer
- **Color Scheme**: Clean white background with sky blue and light green accents (used separately)
- **Fully Responsive**: Works perfectly on all devices (mobile, tablet, desktop)
- **Smooth Animations**: Fade-in, slide-up, and float animations for enhanced user experience
- **Custom Scrollbar**: Branded scrollbar matching the site theme

### 📄 Pages
1. **Home** - Hero section, features, benefits, testimonials, and CTA
2. **About** - Company mission, vision, values, timeline, and team
3. **Services** - Detailed service offerings, process, and financing options
4. **Projects** - Portfolio with filtering by category (Residential, Commercial, Industrial)
5. **Contact** - Interactive form with validation, FAQs, and contact information

### 🧩 Modular Components
- **Layout**: Header (with sticky navigation), Footer (with newsletter)
- **Common**: Button, Card, SectionTitle, StatCard, ScrollToTop
- **Reusable**: All components are easily editable and customizable

### 🚀 Technical Features
- React 18 with modern hooks
- React Router for navigation
- Tailwind CSS for styling
- Lucide React for icons
- Form validation
- Responsive grid layouts
- Custom animations
- SEO-friendly structure

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```
   The site will open at `http://localhost:3000`

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
solar-installation-website/
├── public/
├── src/
│   ├── components/
│   │   ├── common/          # Reusable components
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── SectionTitle.jsx
│   │   │   ├── StatCard.jsx
│   │   │   └── ScrollToTop.jsx
│   │   └── layout/          # Layout components
│   │       ├── Header.jsx
│   │       └── Footer.jsx
│   ├── pages/               # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── App.jsx              # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎨 Customization

### Colors
Update the Tailwind config (`tailwind.config.js`) to change the color scheme:
```javascript
colors: {
  'solar-sky': { /* Sky blue shades */ },
  'solar-green': { /* Light green shades */ }
}
```

### Components
All components are modular and can be easily edited:
- **Button**: `src/components/common/Button.jsx`
- **Card**: `src/components/common/Card.jsx`
- **Header**: `src/components/layout/Header.jsx`
- **Footer**: `src/components/layout/Footer.jsx`

### Content
Each page is self-contained and easy to modify:
- Update text, images, and data directly in the page files
- Add new sections by copying existing patterns
- Modify the arrays of data (features, services, projects, etc.)

## 🌐 Pages Overview

### Home Page
- Hero section with CTA buttons
- Statistics cards
- Features grid (4 columns)
- Benefits section
- Customer testimonials
- Call-to-action section

### About Page
- Mission and vision cards
- Company statistics
- Core values
- Timeline of milestones
- Team members
- CTA section

### Services Page
- Main services grid (Residential, Commercial, Maintenance, Storage)
- Step-by-step process
- Benefits and advantages
- Financing options
- CTA section

### Projects Page
- Filter buttons (All, Residential, Commercial, Industrial)
- Project cards with details
- Statistics overview
- Customer testimonial
- CTA section

### Contact Page
- Contact information cards
- Interactive contact form with validation
- FAQs section
- Map placeholder
- CTA section

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🎯 Key Features Implementation

### Form Validation
The contact form includes:
- Required field validation
- Email format validation
- Phone number validation
- Real-time error messages
- Success state with auto-reset

### Animations
- Fade-in on page load
- Slide-up for sections
- Float animation for hero images
- Hover effects on cards and buttons
- Smooth scroll behavior

### Navigation
- Sticky header that shrinks on scroll
- Active link highlighting
- Mobile-responsive hamburger menu
- Smooth scroll to top on route change

## 🚀 Deployment

This project can be deployed to:
- **Vercel**: `npm run build` then deploy the `dist` folder
- **Netlify**: Connect your repo for automatic deployments
- **GitHub Pages**: Use `gh-pages` package
- **Any static hosting**: Upload the `dist` folder after building

## 💡 Suggestions & Enhancements

### Implemented Features:
✅ Modular component architecture
✅ Responsive design for all screen sizes
✅ Professional animations and transitions
✅ Form validation and error handling
✅ Filter functionality (Projects page)
✅ Custom color scheme (sky blue + light green)
✅ SEO-friendly structure
✅ Performance optimized

### Future Enhancements (Optional):
- Add a blog section for solar energy tips
- Integrate Google Maps for location
- Add a calculator for energy savings
- Implement dark mode toggle
- Add image gallery with lightbox
- Connect to a backend API
- Add live chat support
- Implement analytics tracking

## 📞 Support

For questions or issues, please refer to the documentation or contact the development team.

## 📄 License

This project is created for demonstration purposes.

---

**Built with ❤️ using React + Tailwind CSS**
