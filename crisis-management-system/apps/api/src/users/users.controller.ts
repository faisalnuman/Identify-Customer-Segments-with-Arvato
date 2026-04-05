import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Roles } from '../common/roles.decorator';
import { Role } from '../common/roles';

@Controller('users')
export class UsersController {
  @Get()
  @Roles(Role.ADMIN)
  listUsers() {
    return [{ id: 'u-1', fullName: 'Sample User', role: Role.USER }];
  }

  @Post()
  @Roles(Role.ADMIN)
  createUser(@Body() payload: Record<string, unknown>) {
    return { id: 'u-new', ...payload };
  }

  @Put(':id')
  @Roles(Role.ADMIN)
  updateUser(@Param('id') id: string, @Body() payload: Record<string, unknown>) {
    return { id, ...payload };
  }
}
