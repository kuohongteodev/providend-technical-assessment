// src/common/types/auth-request.interface.ts
import { Request } from 'express';
import { RequestUser } from './request-user.type';

export interface AuthRequest extends Request {
  user: RequestUser;
}
