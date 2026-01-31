import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { NotesService } from './notes.service';
import { CreateNoteDto } from 'src/models/note.model';
import { ClientAssignmentGuard } from 'src/common/guards/client-assignment.guard';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Get(':clientId/notes')
  @UseGuards(ClientAssignmentGuard)
  getNotesByClientId(@Param('clientId') clientId: string) {
    return this.notesService.getNotesByClientId(clientId);
  }

  @Post(':clientId/notes')
  @UseGuards(ClientAssignmentGuard)
  addNoteForClientId(
    @Param('clientId') clientId: string,
    @Body() request: CreateNoteDto,
  ) {
    // Implementation for adding a new note for the given clientId
    return this.notesService.addNoteForClientId(clientId, request.content);
  }
}
