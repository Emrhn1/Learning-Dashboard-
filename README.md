# 📚 Learning Dashboard

A modern, minimalist personal learning management application that helps you track your learning journey, manage topics, overcome learning blockers, and reflect on your progress.

## ✨ Features

### 🎯 Dashboard
- **Real-time Statistics**: Track active topics, stuck topics, weekly progress, and daily focus
- **Quick Overview**: View your most recent learning topics at a glance
- **Interactive Progress**: Update progress directly from topic cards with +/- controls

### 📖 Topics Management
- **Comprehensive Topic Tracking**: Add, filter, and manage all your learning topics
- **Smart Filtering**: Filter by difficulty level (Beginner, Intermediate, Advanced) and status (Active, Stuck, Completed)
- **Progress Control**: Increment or decrement progress in 5% steps with visual feedback
- **Dynamic Status**: Topics automatically transition to "completed" when reaching 100%

### 🚧 Stuck Notes
- **Problem Tracking**: Dedicated space for topics you're struggling with
- **Solution Documentation**: Add detailed solutions to your blockers
- **Smart Resolution**: Mark topics as resolved with automatic +10% progress bonus
- **Context Preservation**: Solutions are saved with original problems for future reference

### 💭 Reflection
- **Daily Learning Journal**: Track your daily learning activities and insights
- **Habit Tracking**: Monitor your learning streak and consistency
- **Progress Visualization**: See your weekly learning hours and achievements

### ➕ Add Topic Modal
- **Intuitive Form**: Clean, user-friendly interface for adding new topics
- **Smart Validation**: Context-aware validation based on topic status
- **Category Selection**: Choose from predefined learning categories
- **Progress Slider**: Set initial progress with a custom-styled slider
- **Conditional Notes**:
    - **Active topics**: Notes field is disabled
    - **Stuck topics**: Notes field becomes required with "Where are you stuck?" prompt

## 🛠️ Technologies

- **React 18** - Modern UI library
- **Next.js** -- Dynamic Pages Router
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first styling
- **Material UI** - Beautiful icon library
- **Clerk** - Authentication

## 🎨 Design Philosophy

Inspired by modern productivity tools like Notion, Linear, and Vercel dashboards, this application features:

- Clean, minimalist interface with plenty of white space
- Soft shadows and rounded cards for visual comfort
- Calm, productivity-focused color palette
- Smooth animations and transitions
- Responsive design for all screen sizes

## 🚀 Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/Emrhn1/learning-dashboard.git
cd learning-dashboard
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## 📱 Usage

### Adding a New Topic

1. Click the **"Add Topic"** button on Dashboard or Topics page
2. Fill in the topic details:
    - Topic name (required)
    - Category
    - Difficulty level
    - Status (Active or Stuck)
    - Initial progress (0-100%)
    - Notes (required only if status is "Stuck")
3. Click **"Add Topic"** to save

### Managing Progress

- **Increase Progress**: Click the **+** button on any topic card (+5%)
- **Decrease Progress**: Click the **-** button on any topic card (-5%)
- Topics automatically become "completed" at 100%

### Resolving Stuck Topics

1. Navigate to **Stuck Notes** page
2. Find the topic you've resolved
3. Click **"Add Solution"** to document how you solved it
4. Click **"Save & Resolve"** to mark as resolved (+10% bonus)
5. Or click **"Mark Resolved"** for quick resolution without notes

## 🎯 Workflow

```
New Topic → Active → [Learning] → Progress Updates → 100% → Completed
                ↓
              Stuck → Add Problem Description → Work on Solution → Resolve → Active
```

## 📊 Key Metrics

- **Active Topics**: Currently learning
- **Stuck Topics**: Need attention and resolution
- **Weekly Progress**: Total hours invested
- **Today's Focus**: Completed sessions

## 🎨 Color Scheme

- **Primary**: Neutral tones (900, 700, 600, 500, 400, 200, 100, 50)
- **Active/Success**: Green (600, 700)
- **Stuck/Warning**: Orange (600, 700, 50)
- **Intermediate**: Blue (600, 700)
- **Advanced**: Purple (600, 700)

## 📁 Project Structure

```
src/
├── app/
│   ├── App.tsx                 # Main application component
│   └── components/
│       ├── AddTopicModal.tsx   # Topic creation modal
│       ├── DashboardPage.tsx   # Dashboard view
│       ├── TopicsPage.tsx      # All topics view
│       ├── StuckNotesPage.tsx  # Stuck topics management
│       ├── ReflectionPage.tsx  # Daily reflection journal
│       ├── Sidebar.tsx         # Navigation sidebar
│       ├── Header.tsx          # Top header
│       ├── TopicCard.tsx       # Individual topic card
│       ├── StatCard.tsx        # Statistics card
│       └── ui/                 # Reusable UI components
├── styles/
│   ├── theme.css              # Design tokens
│   └── fonts.css              # Font imports
└── main.tsx                   # Application entry point
```


## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Future Enhancements

- [ ] Data persistence
- [ ] Export learning progress as PDF/CSV
- [ ] Calendar view for learning sessions
- [ ] Goal setting and tracking
- [ ] Learning resources attachment
- [ ] Dark mode support



---

⭐ If you find this project helpful, please give it a star!
