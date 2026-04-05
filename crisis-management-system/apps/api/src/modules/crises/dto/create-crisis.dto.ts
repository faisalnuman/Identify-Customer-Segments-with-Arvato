import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export enum CrisisSeverity {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  CRITICAL = 'CRITICAL',
}

export class CreateCrisisDto {
  @IsString()
  @IsNotEmpty()
  title!: string;

  @IsString()
  description!: string;

  @IsEnum(CrisisSeverity)
  severity!: CrisisSeverity;
}
