import { Module } from '@nestjs/common';
import { BlogModule } from './blog/blog.module';
import { ConfigurationModule } from './config/config.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ConfigurationModule,
    BlogModule,
  ]
})
export class AppModule {}
