# Birthday Party Invitation

A self-made React website designed as a party invitation, featuring optional riddles for guests to solve.

## Project Overview

- **Technologies:** React 19, Vite 7
- **Architecture:** Standard Vite-based Single Page Application (SPA).
- **Goal:** Provide an interactive invitation experience where guests can choose to solve riddles to reveal party details.

## Getting Started

All project files are located in the `invite/` subdirectory.

### Prerequisites

- [Node.js](https://nodejs.org/) installed.

### Installation

1.  Navigate to the project directory:
    ```powershell
    cd invite
    ```
2.  Install dependencies:
    ```powershell
    npm install
    ```

### Development

Run the development server:
```powershell
npm run dev
```
The app will be available at `http://localhost:5173`.

### Building for Production

To build the project for production:
```powershell
npm run build
```
The output will be in the `dist` folder.

### Other Commands

- `npm run lint`: Lint the project using ESLint.
- `npm run preview`: Preview the production build locally.

## Project Structure

- `invite/`: Main project directory.
  - `src/`: Contains the React components and logic.
    - `pages/`: Individual page components (e.g., `intro.jsx`).
    - `assets/`: Images and other static assets.
    - `App.jsx`: Main application component, handling routing (note: currently uses `react-router-dom`, which may need to be installed).
    - `main.jsx`: Entry point that renders the React application.
  - `public/`: Public static assets.

## Development Conventions

- **Linting:** ESLint is configured for code quality. Run `npm run lint` before committing.
- **Styling:** CSS is imported locally into components or kept in `src/styles/` (e.g., `src/styles/intro.css` is referenced in `intro.jsx`).
- **State Management:** Uses React's `useState` for local component state.
- **Routing:** Planned implementation using `react-router-dom`.

## TODOs / Known Issues

- [ ] Install `react-router-dom` dependency in `invite/`.
- [ ] Fix syntax error in `invite/src/App.jsx` (closing `</Routes>` tag).
- [ ] Wrap the application in a `Router` component (e.g., `BrowserRouter`) in `main.jsx` or `App.jsx`.
- [ ] Complete the riddle logic and navigation to the final invitation page.
