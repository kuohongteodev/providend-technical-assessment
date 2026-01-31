import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { FakeAuthMiddleware } from './auth/fake-auth.middleware';

async function bootstrap() {
  const corsOptions: CorsOptions = {
    origin: 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  };

  const app = await NestFactory.create(AppModule, { cors: corsOptions });
  const fakeAuth = new FakeAuthMiddleware();
  app.use(fakeAuth.use.bind(fakeAuth));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
