const express = require('express');
const app = express();
app.use(express.static(__dirname + "/public"));
const server = app.listen(1337);
const io = require('socket.io')(server);
var counter = 0;

io.on('connection', function (socket) { //2

    socket.emit('greeting', { msg: 'Greetings, from server Node, brought to you by Sockets! -Server' }); //3
    socket.on('thankyou', function (data) { //7
        console.log(data.msg); //8 (note: this log will be on your server's terminal)
    });

});



<html>
<head>
    <title>Sockets</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script type="text/javascript" src="/socket.io/socket.io.js"></script>
    <script type ="text/javascript">
        $(document).ready(function (){
    
            var socket = io(); //1
    
            socket.on('greeting', function (data) { //4
                console.log(data.msg); //5
                socket.emit('thankyou', { msg: 'Thank you for connecting me! -Client' }); //6
            });
        })
    </script>
</head>
<body>
    <h1>Fun with sockets</h1>  
</body>
</html>
