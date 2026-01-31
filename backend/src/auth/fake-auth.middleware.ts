import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class FakeAuthMiddleware implements NestMiddleware {
  use(
    req: { user?: { id: string; username: string } },
    res: any,
    next: () => void,
  ) {
    // Hardcoded logged-in user
    //Change to admin-user-001 for testing valid user
    req.user = { id: 'admin-user-001', username: 'admin' };
    next();
  }
}
