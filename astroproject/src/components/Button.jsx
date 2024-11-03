// src/components/ReactButton.jsx
// import { Button } from '@mui/material';

export default function ReactButton({ text, onClick }) {
  return (
    <button
      variant="contained"
      color="primary"
      onClick={onClick}
      className="mt-4"
    >
      {text}
    </button>
  );
}
