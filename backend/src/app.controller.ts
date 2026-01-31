import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientAssignmentGuard } from './common/guards/client-assignment.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('api/notes')
  @UseGuards(ClientAssignmentGuard)
  listNotes(clientId: string): string {
    console.log('clientId', clientId);
    return this.appService.getHello();
  }

  @Get('api')
  getApiData(): string {
    return this.appService.getHello();
  }

  //List notes for a given clientId

  //Add new note for a given clientId

  //Simple authorization check
}
