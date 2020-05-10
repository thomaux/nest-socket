import { Module } from '@nestjs/common';
import { AppGateway } from './AppGateway';

@Module({
    providers: [AppGateway]
})
export class AppModule {}