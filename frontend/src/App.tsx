import { useEffect, useState } from 'react';

// Define the Note type
type Note = {
  content: string;
};

// Replace with the actual client ID
const clientId = "bb4d460d-b86f-4ae8-bf01-1826053f0ff3"

export default function NotesApp() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [newNote, setNewNote] = useState('');

  // Fetch notes from the backend
  const fetchNotes = async () => {
    try {
      const res = await fetch(`http://localhost:3000/notes/${clientId}/notes`);
      if (!res.ok) throw new Error('Failed to fetch notes');
      const data: Note[] = await res.json();
      setNotes(data);
    } catch (err) {
      console.error('Error fetching notes:', err);
    }
  };

  // Fetch notes when the component mounts
  useEffect(() => {
    fetchNotes();
  }, []);

  // Add a new note
  const addNote = async () => {
    if (!newNote.trim()) return;

    try {
      const res = await fetch(`http://localhost:3000/notes/${clientId}/notes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: newNote }),
      });
      if (!res.ok) throw new Error('Failed to add note');

      setNewNote('');
      fetchNotes();
    } catch (err) {
      console.error('Error adding note:', err);
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Notes for Client {clientId}</h1>

      {/* Notes List */}
      {notes.length > 0 ? (
        <ul>
          {notes.map((note, index) => (
            <li key={index}>{note.content}</li>
          ))}
        </ul>
      ) : (
        <p>No notes yet.</p>
      )}

      <div style={{ marginTop: '1rem' }}>
        <input
          type="text"
          placeholder="New note"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          style={{ padding: '0.5rem', width: '300px' }}
        />
        <button
          onClick={addNote}
          style={{ marginLeft: '0.5rem', padding: '0.5rem 1rem' }}
        >
          Add Note
        </button>
      </div>
    </div>
  );
}
