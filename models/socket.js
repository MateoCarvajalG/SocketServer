class Sockets{

    constructor(io){
        this.io = io
        this.socketEvents()
    }

    socketEvents(){
        // On Connection
        this.io.on('connection', (socket) => {
            //escuchar evento
            socket.on('new-message-to-server',(data)=>{
                console.log(data)
                this.io.emit('message-from-server',data) 
            })
        });
    }
}

module.exports= Sockets