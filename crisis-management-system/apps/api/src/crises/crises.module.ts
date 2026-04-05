import { Module } from '@nestjs/common';
import { CrisesController } from './crises.controller';

@Module({ controllers: [CrisesController] })
export class CrisesModule {}
