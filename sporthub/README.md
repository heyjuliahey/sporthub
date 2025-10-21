# SportHub - Sports News Portal

A modern, responsive sports news website built with React and Vite.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Mobile Navigation**: Hamburger menu with slide-in navigation for mobile screens
- **News Grid**: Dynamic news cards with hover effects
- **Coach Quotes**: Featured quotes from sports coaches
- **Newsletter Subscription**: Email subscription form with validation
- **Social Media Integration**: Links to various social media platforms

## 🛠️ Technologies

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **SASS/SCSS** - CSS preprocessor
- **React Icons** - Icon library
- **PropTypes** - Runtime type checking

## 📦 Installation

1. Clone the repository
```bash
git clone <repository-url>
cd sportshub
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

## 🏗️ Project Structure

```
sportshub/
├── src/
│   ├── assets/          # Images and static files
│   ├── components/      # React components
│   │   ├── Header/
│   │   ├── Footer/
│   │   ├── MainPage/
│   │   ├── NewsSection/
│   │   ├── Banner/
│   │   ├── CategoriesBar/
│   │   ├── SubscribeForm/
│   │   └── ...
│   ├── constants/       # App constants (colors, breakpoints)
│   ├── data/           # Data files (news, coaches)
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles & CSS variables
├── public/             # Public assets
└── package.json        # Dependencies
```

## 🎨 Design System

The project uses a consistent design system with:
- **CSS Variables**: Defined in `index.css` for colors, spacing
- **Constants**: Centralized in `src/constants/` for colors and breakpoints
- **Component-scoped styles**: Each component has its own SCSS file

### Colors
- Primary Red: `#e3000f`
- Dark Red: `#d31212`
- Text colors and neutrals defined in CSS variables

### Breakpoints
- Mobile: 640px
- Tablet: 768px
- Desktop Small: 992px
- Desktop Medium: 1200px
- Desktop Large: 1400px

## 📱 Responsive Behavior

- **Desktop (>768px)**: Horizontal navigation, 2-column news grid
- **Mobile (≤768px)**: Hamburger menu, single-column layout
- **Adaptive padding**: Content padding adjusts based on screen size

## ♿ Accessibility

- ARIA labels on interactive elements
- Semantic HTML structure
- Keyboard navigation support
- Form validation with error messages

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔧 Configuration

- **Vite Config**: `vite.config.js`
- **ESLint Config**: `eslint.config.js`

## 📄 License

This project is for educational/interview purposes.

## 👥 Author

Developed as a test task for frontend developer interview.