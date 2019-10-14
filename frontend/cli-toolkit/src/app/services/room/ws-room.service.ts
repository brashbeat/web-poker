import { Injectable } from '@angular/core';
import { WebSocketService } from 'src/app/utils/web-socket.service';
import { StompService } from 'src/app/utils/stomp.service';

@Injectable({
  providedIn: 'root'
})
export class WsRoomService extends WebSocketService {

  constructor(stomp: StompService) {
    super(stomp);
  }

  public connect(server, port) {
    this.setBasicConfig(server, port, '/external');
    this.startConnection();
  }

}
