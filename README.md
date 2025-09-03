# Dashboard App

A modern, responsive dashboard application built with React, Vite, and Tailwind CSS. Features beautiful charts, analytics, and a clean user interface with a purple color scheme.

## Features

- 📊 **Interactive Charts**: Line charts and donut charts using Recharts
- 📱 **Responsive Design**: Works perfectly on desktop and mobile devices
- 🎨 **Modern UI**: Clean design with purple (#6C5CE7) color palette
- 📈 **Analytics Dashboard**: Summary cards, recent activities, and order management
- 🔍 **Search & Filters**: Date picker and search functionality
- 🎯 **Real-time Data**: Dynamic data visualization and updates

## Components

### Layout Components
- **Sidebar**: Navigation with purple background and icons
- **Header**: Top bar with search, date picker, and user profile
- **SummaryCard**: Colored statistics cards with trends

### Data Visualization
- **LineChart**: Revenue analytics with gradient purple-orange styling
- **PieChart**: Transaction overview with donut chart (Sale/Distribute/Return)
- **Activities**: Recent activities feed with timestamps
- **OrdersTable**: Customer orders with status indicators

## Color Palette

- Primary Purple: `#6C5CE7`
- Orange Accent: `#FFA502` 
- Blue Accent: `#1E90FF`
- Background: `#F8FAFC`
- White Cards with subtle shadows

## Installation

1. **Clone or download the project**
2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser and navigate to:**
   ```
   http://localhost:5173
   ```

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the project for production
- `npm run preview` - Preview the built project locally
- `npm run lint` - Run ESLint for code quality

## Technologies Used

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Recharts** - Composable charting library for React
- **Lucide React** - Beautiful & consistent icon set
- **Date-fns** - Modern JavaScript date utility library

## Project Structure

```
dashboard-app/
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx          # Navigation sidebar
│   │   ├── Header.jsx           # Top header with search
│   │   ├── SummaryCard.jsx      # Statistics cards
│   │   ├── LineChart.jsx        # Revenue line chart
│   │   ├── PieChart.jsx         # Transaction donut chart
│   │   ├── Activities.jsx       # Recent activities feed
│   │   └── OrdersTable.jsx      # Orders management table
│   ├── App.jsx                  # Main application component
│   ├── main.jsx                 # React entry point
│   └── index.css               # Global styles and Tailwind
├── index.html                   # HTML template
├── package.json                 # Dependencies and scripts
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
├── vite.config.js              # Vite configuration
└── README.md                   # This file
```

## Customization

### Colors
Modify the color palette in `tailwind.config.js`:
```js
colors: {
  primary: '#6C5CE7',    // Purple
  orange: '#FFA502',     // Orange  
  blue: '#1E90FF',       // Blue
}
```

### Data
Update chart data and statistics in the respective component files:
- Line chart data in `LineChart.jsx`
- Pie chart data in `PieChart.jsx` 
- Activities in `Activities.jsx`
- Orders in `OrdersTable.jsx`

## Responsive Design

The dashboard is fully responsive and adapts to different screen sizes:
- **Desktop**: Full sidebar with labels, multi-column layout
- **Tablet**: Condensed sidebar, stacked components  
- **Mobile**: Icon-only sidebar, single column layout

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## License

This project is open source and available under the [MIT License](LICENSE).