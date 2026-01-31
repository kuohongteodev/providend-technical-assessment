import { Injectable } from '@nestjs/common';
import { mockData } from 'data/mock-data';
import { Note } from 'src/models/note.model';

@Injectable()
export class NotesService {
  getNotesByClientId(clientId: string): Note[] {
    return mockData.notes.filter((note) => note.clientId === clientId);
  }

  addNoteForClientId(clientId: string, content: string): Note {
    console.log(content);
    const newNote: Note = {
      id: mockData.notes.length + 1,
      clientId,
      content,
      createdAt: new Date(),
      authorId: 'admin-user-001', // In a real application, this would be dynamic
    };
    mockData.notes.push(newNote);
    return newNote;
  }
}
