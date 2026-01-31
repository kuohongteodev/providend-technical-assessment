export interface Note {
  id: number;
  clientId: string;
  content: string;
  createdAt: Date;
  authorId: string;
}

export class CreateNoteDto {
  content: string;
}
