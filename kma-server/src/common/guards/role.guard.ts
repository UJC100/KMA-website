import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { RoleEnum } from '../enums/roles.enum';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.get<RoleEnum[]>(
      'roles',
      context.getHandler(),
    );
    if (!requiredRoles) {
      return true;
    }
    interface RequestWithUser {
      user: { roles: RoleEnum[] };
    }
    const request = context.switchToHttp().getRequest<RequestWithUser>();
    const user = request.user;
    return requiredRoles.some((role) => user.roles.includes(role));
  }
}
