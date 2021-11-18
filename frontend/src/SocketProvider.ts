import * as SocketIO from 'socket.io-client';

interface SocketProviderConfig {
  serverUrl: string;
  onConnect: (data: any) => void;
  onActivateYourTurn: (data: any) => void;
  onReady: (data: any) => void;
  onListTrigger: (data: any) => void;
  onGameOver: (data: any) => void;
  onRandomNumber: (data: any) => void;
  onMessage: (data: any) => void;
}

export default class SocketProvider {
  private socket: any;

  private static instance: SocketProvider;

  private constructor(config: SocketProviderConfig) {
    this.socket = SocketIO(config.serverUrl);
    this.socket.on('connect', config.onConnect);
    this.socket.on('activateYourTurn', config.onActivateYourTurn);
    this.socket.on('onReady', config.onReady);
    this.socket.on('listTrigger', config.onListTrigger);
    this.socket.on('gameOver', config.onGameOver);
    this.socket.on('randomNumber', config.onRandomNumber);
    this.socket.on('message', config.onMessage);
  }

  public static getInstance(config?: SocketProviderConfig): SocketProvider {
    if (!SocketProvider.instance && config) {
      SocketProvider.instance = new SocketProvider(config);
    }
    return SocketProvider.instance;
  }

  public login(username: string) {
    this.socket.emit('login', { username });
  }

  public joinRoom(username: string, room: string, roomType: string) {
    this.socket.emit('joinRoom', {
      username,
      room,
      roomType,
    });
  }

  public letsPlay() {
    this.socket.emit('letsPlay');
  }

  public sendNumber(number: number, selectedNumber: number) {
    this.socket.emit('sendNumber', { number, selectedNumber });
  }

  public leaveRoom() {
    this.socket.emit('leaveRoom');
  }

  public disconnect() {
    this.socket.emit('disconnect');
  }
}
