import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import config from '@/config';
import { ThrottlerModule, seconds } from '@nestjs/throttler';
import { DatabaseModule } from './shared/database/database.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [...Object.values(config)],
    }),
    ThrottlerModule.forRootAsync({
      useFactory: () => ({
        errorMessage: '当前操作过于频繁，请稍后再试！',
        throttlers: [{ ttl: seconds(10), limit: 10 }],
      }),
    }),
    DatabaseModule,
  ],
  providers: [],
})
export class AppModule {}
