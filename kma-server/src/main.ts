/* main.ts */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
// import helmet from 'helmet';
// import * as compression from 'compression'
import { NestExpressApplication } from '@nestjs/platform-express';
import { Response, Request } from 'express';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger: ['log', 'error', 'warn', 'debug', 'verbose'],
  });

  // Trust proxy (for Render or other proxies)
  app.set('trust proxy', 1);

  // Enable CORS
  app.enableCors({
    origin:
      process.env.NODE_ENV === 'production'
        ? 'https://kma-website.onrender.com' // production frontend
        : [
            'http://localhost:5173', // dev Vite frontend
            'http://127.0.0.1:5173', // dev Vite frontend alternative
          ],
    credentials: true,
  });

  // Security + performance
  // app.use(helmet());
  // app.use(compression());

  // Global validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  );

  // API prefix
  app.setGlobalPrefix('api/v1');

  // Serve React build
  // const publicDir = join(__dirname, '..', 'public');
  // app.useStaticAssets(publicDir);
  // app.setBaseViewsDir(publicDir);

  // // SPA fallback: only serve index.html if route does not start with /api
  // app.getHttpAdapter().get('/{*any}', (req: Request, res: Response) => {
  //   if (!req.path.startsWith('/api')) {
  //     res.sendFile(join(publicDir, 'index.html'));
  //   }
  // });

  // Graceful shutdown hooks
  app.enableShutdownHooks();

  const port = Number(process.env.PORT ?? 3000);
  await app.listen(port, '0.0.0.0');
  console.log(`🚀 Server ready on port ${port}`);
}

bootstrap();
