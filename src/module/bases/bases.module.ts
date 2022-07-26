import { Module } from '@nestjs/common';
import { BasesService } from './bases.service';


@Module({
  providers: [ BasesService]
})
export class BasesModule {}
