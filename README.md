# Sadhana Sahakari Bank (SSB) - Website

A modern, responsive website for Sadhana Sahakari Bank built with Next.js, featuring smooth animations and a professional banking interface.

## 🏦 About

Sadhana Sahakari Bank Ltd. has been serving the Nagpur community since 1984. This website showcases the bank's services, branch information, and provides a modern digital presence for their 9,076+ members across 5 branches.

## ✨ Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Interactive Animations**: Powered by Framer Motion for engaging user experience
- **Banking Services**: Comprehensive information about loans, deposits, and mobile banking
- **Branch Information**: Details about all 5 branch locations
- **Contact Information**: Easy access to bank details and operating hours

## 🛠️ Tech Stack

- **Framework**: Next.js 14.2.16
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: Radix UI primitives
- **Icons**: Material Icons
- **Package Manager**: PNPM

## 📋 Prerequisites

Before running this project locally, make sure you have the following installed:

- **Node.js** (version 18 or higher)
- **PNPM** (recommended) or npm/yarn

## 🚀 Local Setup

Follow these steps to set up the project locally:

### 1. Clone the Repository

```bash
git clone <repository-url>
cd "PROJ2 Bank (SSB)"
```

### 2. Install Dependencies

Using PNPM (recommended):
```bash
pnpm install
```

Or using npm:
```bash
npm install
```

### 3. Run the Development Server

```bash
pnpm dev
```

Or with npm:
```bash
npm run dev
```

### 4. Open in Browser

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── annual-reports/    # Annual reports page
│   ├── contact/           # Contact page
│   ├── gallery/           # Gallery page
│   ├── mobile-banking/    # Mobile banking page
│   ├── news-events/       # News and events page
│   ├── services/          # Services page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── ui/               # UI component library
│   ├── navigation.tsx    # Navigation component
│   └── theme-provider.tsx # Theme provider
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
└── styles/               # Additional stylesheets
```

## 🎨 Key Components

- **Hero Section**: Animated landing section with bank introduction
- **Services Grid**: Interactive cards showcasing banking services
- **About Section**: Bank history and branch information
- **Contact Section**: Branch details and contact information
- **Navigation**: Responsive navigation with smooth transitions

## 📱 Pages

- **Home** (`/`): Main landing page with all sections
- **About** (`/about`): Detailed bank information
- **Services** (`/services`): Banking services overview
- **Mobile Banking** (`/mobile-banking`): SSB Mbank app information
- **Contact** (`/contact`): Contact details and branch locations
- **Gallery** (`/gallery`): Bank gallery and images
- **News & Events** (`/news-events`): Latest updates
- **Annual Reports** (`/annual-reports`): Financial reports

## 🔧 Available Scripts

```bash
# Development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linting
pnpm lint
```

## 🏢 Bank Information

- **Established**: March 16, 1984
- **Registration**: U.B.D. MH-396P under the Co-Operative Society Act
- **IFSC Code**: IBKL0041SSB
- **MICR Code**: 440207000
- **GSTIN**: 27AAAAS0970J1ZE
- **Members**: 9,076+
- **Shared Capital**: ₹409.96L

### Branch Locations

1. **Jaripatka** (Head Office) - 504, 2nd Floor, Near Dayanand Park, Jaripatka, Nagpur - 440014
2. **Gandhibag**
3. **Ayodhya Nagar**
4. **Maskasath**
5. **Wadi**

## 🕒 Operating Hours

- **Monday - Friday**: 9:30 AM - 3:30 PM
- **Saturday**: 9:30 AM - 1:30 PM
- **Sunday**: Closed

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## 📄 License

This project is developed for Sadhana Sahakari Bank Ltd. All rights reserved.

**Developed by**: Trust Systems & Software (I) Pvt Ltd

## 📞 Support

For technical support or inquiries about the website, please contact the development team or visit any of our branch locations.

---

*Banking that feels genuinely yours* - Sadhana Sahakari Bank Ltd.