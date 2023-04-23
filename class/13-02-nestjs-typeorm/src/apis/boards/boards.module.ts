import { Module } from '@nestjs/common';
import { BoardService } from './boards.service';
import { BoardResolver } from './boards.resolver';

@Module({
  // imports : [],
  // controllers : [],
  providers: [BoardResolver, BoardService],
})
export class BoardModule {}
