# Roopesh Singh - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This portfolio showcases my skills, experience, and projects as a Frontend Architect.

## 🚀 Features

- **Modern Tech Stack**: React 18, TypeScript, Vite, Tailwind CSS
- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Dark Mode**: Complete light/dark theme with system preference detection
- **Performance Optimized**: Code splitting, lazy loading, and optimized images
- **SEO Ready**: Proper meta tags, structured data, and semantic HTML
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support
- **Interactive UI**: Smooth animations and transitions
- **Contact Form**: Integrated with EmailJS for direct communication
- **Error Handling**: Comprehensive error boundaries and fallback states
- **Testing**: Unit tests with Vitest and React Testing Library

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 18.2.0
- **Build Tool**: Vite 6.3.5
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.3.2
- **Icons**: React Icons
- **Email**: EmailJS

### Development
- **Testing**: Vitest, React Testing Library
- **Linting**: ESLint with TypeScript support
- **Type Checking**: TypeScript strict mode

### Performance
- **Code Splitting**: React.lazy() and Suspense
- **Lazy Loading**: Intersection Observer API
- **Image Optimization**: Custom LazyImage component
- **Bundle Optimization**: Tree shaking and minification

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/roopeshsingh/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run test` | Run tests |
| `npm run test:ui` | Run tests with UI |
| `npm run test:coverage` | Run tests with coverage |
| `npm run lint` | Lint code |
| `npm run lint:fix` | Fix lint issues |
| `npm run type-check` | Type check without emitting |

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── __tests__/      # Component tests
│   ├── About.jsx       # About section
│   ├── Contact.jsx     # Contact form
│   ├── DarkModeToggle.jsx # Theme toggle
│   ├── ErrorBoundary.tsx # Error handling
│   ├── Header.jsx      # Navigation
│   ├── Hero.jsx        # Hero section
│   ├── LazyImage.tsx   # Optimized image component
│   ├── Projects.jsx    # Project showcase
│   ├── Skills.jsx      # Skills section
│   └── ...
├── assets/             # Static assets
├── types/              # TypeScript type definitions
├── test/               # Test setup
├── App.jsx             # Main app component
├── main.jsx            # Entry point
└── index.css           # Global styles
```

## 🎨 Customization

### Theme Configuration
The theme is configured in `tailwind.config.js` with custom animations and color schemes.

### Content Updates
- **Personal Info**: Update `src/components/About.jsx` and `src/components/Hero.jsx`
- **Skills**: Modify `skillsData` in `src/components/Skills.jsx`
- **Projects**: Update `projects` array in `src/components/Projects.jsx`
- **Experience**: Modify `src/components/Experience.jsx`

### SEO & Meta Tags
Update meta tags in `index.html` for better SEO performance.

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Configure redirects for SPA routing

### Deploy to Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the build settings
3. Deploy with one click

## 📈 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Bundle Size**: Optimized with code splitting
- **Loading**: Lazy loading for images and components
- **Caching**: Service worker for offline support

## 🧪 Testing

The project includes comprehensive testing with:
- Component unit tests
- Accessibility testing
- Error boundary testing
- User interaction testing

Run tests with:
```bash
npm run test
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -m 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Roopesh Singh**  
Frontend Architect  
📧 Email: roopeshsingh993@gmail.com  
💼 LinkedIn: [linkedin.com/in/roopesh-singh-66b62931b](https://linkedin.com/in/roopesh-singh-66b62931b)  
🔗 GitHub: [github.com/roopeshsingh](https://github.com/roopeshsingh)

---

⭐ If you like this project, please give it a star on GitHub!
