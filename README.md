# Crypto Tracker

A real-time cryptocurrency tracking web application built with React, Redux, and Vite. This app displays live updates of various cryptocurrencies with charts and detailed information.

---

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/student-sneha/-Crypto-Tracker.git
   cd crypto-tracker
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

---

## Tech Stack & Architecture

- **React**: Frontend UI library for building interactive user interfaces.
- **Redux**: State management to handle global app state and asynchronous updates.
- **Vite**: Fast build tool and development server.
- **CSS**: Styling for components.
- **Assets**: SVG charts and logos stored in the `src/assets` and `public/assets` folders.

### Architecture Overview

- Components are located in `src/components/` (e.g., `CryptoTable.jsx`).
- Global state is managed using Redux slices in `src/redux/` (e.g., `cryptoSlice.js`).
- Utility functions and sample data are in `src/utils/`.
- The main app entry point is `src/App.jsx` and `src/main.jsx`.
- Vite config is in `vite.config.js`.

---

## Demo

![Crypto Tracker Demo]
https://crypto-tracker-sneha.vercel.app/

---

## License

This project is licensed under the MIT License.

---

## Contact

For questions or feedback, please contact [snehakhandelwal373@gmail.com].
