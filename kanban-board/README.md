# 🧩 Live Collaborative Kanban Board

A modern Kanban board application built using React and Redux Toolkit, supporting drag-and-drop, real-time simulation, search, filtering, and undo/redo functionality.

---

## 🚀 Live Demo
👉 (Add your deployed link here - Vercel/Netlify)

---

## 📌 Features

### 🖱️ Drag & Drop (Custom Implementation)
- Built using native HTML5 Drag API (no external libraries)
- Move cards across columns
- Reorder cards داخل the same column
- Handles empty columns and edge cases

---

### 🧠 State Management
- Global state using Redux Toolkit
- Normalized data structure for performance
- Undo / Redo support (Ctrl + Z / Ctrl + Y)
- Optimistic UI updates

---

### 💾 Persistence
- Board state stored in `localStorage`
- Data persists across reloads

---

### ⚡ Real-time Simulation
- Simulates another user via `setInterval`
- Random card movement every 10 seconds
- Basic conflict detection when dragging same card

---

### 🔍 Search & Filter
- Debounced search (300ms)
- Filter by labels (URL-synced)
- Dynamic filtering across all columns

---

### 🎯 Performance
- Optimized rendering using `React.memo`
- Cards re-render only when necessary

---

### ♿ Accessibility (Basic)
- ARIA roles (`list`, `listitem`)
- Keyboard shortcuts for undo/redo

---

## 🛠️ Tech Stack

- React (Vite)
- Redux Toolkit
- JavaScript (ES6)
- HTML5 Drag & Drop API
- CSS (inline styles)

---

## 📁 Project Structure

```bash
src/
├── app/
│ └── store.js
├── features/
│ └── boardSlice.js
├── components/
│ ├── Board.jsx
│ ├── Column.jsx
│ ├── Card.jsx
│ ├── SearchBar.jsx
├── services/
│ └── simulation.js
├── hooks/
│ └── useDebounce.js
├── utils/
│ └── localStorage.js
└── App.jsx

```
---

## ⚙️ Setup Instructions

```bash
git clone "https://github.com/Ujwal1256/kanban-board.git"
cd kanban-board
npm install
npm run dev

```
# 🎮 Usage
- Drag cards between columns
- Reorder cards in a column
- Use search bar to filter tasks
-Apply label filters via UI
- Use:
- Ctrl + Z → Undo
- Ctrl + Y → Redo


# ⚠️ Known Limitations
- Virtualization (react-window) was explored but not included due to compatibility issues with Vite
- Advanced keyboard navigation can be further improved
  Conflict resolution is basic (alert-based)

# 🚀 Future Improvements
- Smooth drag animations (ghost + snap)
- Advanced accessibility (full keyboard navigation)
- Better conflict resolution UI (toast system)
- Backend integration for real collaboration
- Virtualization for handling 1000+ cards

# 📸 Performance Proof

(Add React DevTools Profiler screenshot here)

# 👨‍💻 Author
Ujwal Jakhamate


---

# 📝 Submission Explanation (IMPORTANT)

Use this in submission form / email:

---

### 📌 Explanation

This project is a **Live Collaborative Kanban Board** built using React and Redux Toolkit, focusing on core frontend engineering concepts such as state management, performance optimization, and user interaction.

### 🔧 Key Implementation Highlights

- **Custom Drag & Drop**  
  Implemented using the native HTML5 Drag API without external libraries, supporting cross-column movement and reordering داخل columns.

- **State Architecture**  
  Used Redux Toolkit with a normalized state structure for efficient updates. Implemented undo/redo functionality using a history stack approach.

- **Optimistic UI + Persistence**  
  All actions update UI instantly and persist to localStorage for consistency across sessions.

- **Real-time Simulation**  
  Simulated concurrent user behavior using `setInterval`, with conflict detection when interacting with the same card.

- **Search & Filtering**  
  Implemented debounced search and label-based filtering with URL synchronization.

- **Performance Optimization**  
  Used `React.memo` to prevent unnecessary re-renders and maintain responsiveness.

---

### ⚠️ Trade-offs & Decisions

- Initially implemented virtualization using `react-window`, but faced compatibility issues with Vite during module resolution.  
  Due to time constraints, prioritized stability and core functionality. The current architecture supports easy integration of virtualization if needed.

---

### 🎯 Focus

The main focus of this implementation was:
- Clean and scalable architecture
- Correct state management
- Reliable drag-and-drop behavior
- Meeting core functional requirements within the given time constraint

---

### 🚀 Conclusion

This project demonstrates strong fundamentals in:
- React architecture
- State management (Redux Toolkit)
- Performance optimization
- Problem-solving under constraints

---



