# Notes App

A simple React notes application built with Vite and Tailwind CSS.

## Features

- Add notes with a title and details
- Display a list of recent notes
- Delete notes individually
- Persist notes in `localStorage` so they survive page refreshes
- Built with React 19, Vite, Tailwind CSS, and Lucide icons

## Project structure

- `src/main.jsx` – Application entry point
- `src/App.jsx` – Main app wrapper
- `src/components/Notes.jsx` – Notes form, list, and localStorage persistence
- `src/index.css` / `src/App.css` – Styling and Tailwind utilities

## Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the local URL shown in the terminal (usually `http://localhost:5173`).

## Usage

- Enter a title and note text in the form.
- Click `Add Notes` to save the note.
- Notes are displayed on the right side.
- Click the trash icon to delete a note.
- Notes are automatically stored in browser `localStorage`.

## Notes persistence

The app saves notes to `localStorage` whenever the note list changes. When the app loads, it reads from `localStorage` and restores saved notes automatically.

## Scripts

- `npm run dev` — start the development server
- `npm run build` — build the app for production
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint

## Dependencies

- `react`
- `react-dom`
- `vite`
- `tailwindcss`
- `lucide-react`

## Customization

- Change the note layout in `src/components/Notes.jsx`
- Update styling in `src/App.css` and `src/index.css`
- Add new note fields or categories by extending the note object and form inputs.

---

Built as a lightweight notes app example using React and modern frontend tooling.
