import { Module } from '@nestjs/common';
import { PaymentGatewayService } from './payment-gateway.service';
import { PaymentGatewayController } from './payment-gateway.controller';
import { PaymentWebhookController } from './PaymentWebhook.controller';

@Module({
  providers: [PaymentGatewayService],
  controllers: [PaymentGatewayController, PaymentWebhookController],
  exports: [PaymentGatewayService],
})
export class PaymentGatewayModule {}
