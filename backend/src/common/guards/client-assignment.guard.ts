import {
  CanActivate,
  ExecutionContext,
  Injectable,
  ForbiddenException,
} from '@nestjs/common';
import { clientAssignments } from '../../../data/mock-assignments';
import { RequestUser } from 'src/common/types/request-user.type';
import { AuthRequest } from 'src/common/types/auth-request.interface';

@Injectable()
export class ClientAssignmentGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<AuthRequest>();
    const user = request.user as RequestUser | undefined; // typed cast
    const clientId = request.params.clientId as string; // typed cast

    if (!user) {
      throw new ForbiddenException('No user found');
    }

    const allowedClients = clientAssignments[user.id] || [];
    if (!allowedClients.includes(clientId)) {
      throw new ForbiddenException('You are not assigned to this client');
    }

    return true;
  }
}
