import { WebSocketGateway, OnGatewayConnection } from '@nestjs/websockets';
import { Socket } from 'socket.io';

@WebSocketGateway()
export class AppGateway implements OnGatewayConnection {

    handleConnection(socket: Socket) {
        socket.emit('hello', 'Hello World!');
    }

}