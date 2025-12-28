# Website-Structure

## Technology Stack
Core Library: React.js (v18+) – utilized for component-based architecture and efficient state management.
Styling: Custom CSS3 with Glassmorphism effects, CSS Grid, and Flexbox for a responsive, mobile-first experience.
Icons & UI: Scalable Vector Graphics (SVG) and Lucide-React icons for crisp visuals.
Development Tooling: Vite for lightning-fast bundling and optimized production builds.
Communication: WhatsApp Cloud API (via wa.me) for instant client-to-business messaging.

## Key Improvements
We have made several architectural and design upgrades over the previous website:
Component-Based Architecture: The site is now modular. Sections like Services, Skills, and Gallery are independent React components, making the codebase easier to maintain and scale.
Interactive User Experience:
Animated Progress Bars: Skills only animate when the user scrolls them into view, providing a "live" feel to the data.
Contextual Overlays: The Gallery features a dynamic CSS overlay that highlights projects on hover.
Enhanced Mobile UI: A fully custom "Hamburger" navigation system replaces the static menu, optimized for thumb-reach on smartphones.
Glassmorphism Design: The UI uses frosted-glass effects (via backdrop-filter) on cards and headers, aligning the brand with 2025 technology design trends.

## Tech Assistant
The Digital Assistant is a custom-built chat interface designed to reduce friction for Small and Medium Enterprises (SMEs) seeking information.
Automated Logic: The assistant scans user input for keywords (e.g., "Web", "Contact", "Price") and provides instant technical responses.
Dynamic UX: It features an auto-scroll message window and a "typing" delay to simulate a natural conversation flow.
State Management: It remembers the conversation history during the session, allowing users to scroll back and review provided information.
