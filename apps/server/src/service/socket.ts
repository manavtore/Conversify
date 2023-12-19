import { Server } from "socket.io";
class SocketService{
    private _io: Server;

    constructor(){
        console.log("Init socket server");
        this._io = new Server();
    }
    get io(){
        return this._io;
    }
    public initListeners(){
        console.log("Init socket listeners");
        const io = this._io;    
        io.on("connect", (socket) => {
            console.log('new Socket Connection');

           socket.on('event:message',async ({message}:{message:string })=>{
            console.log("New message Rec",message)
           })
        });
    }

}
export default SocketService;