(function () {
    let chatContent = document.getElementById('chatContent')
    let chatInput = document.getElementById('chatInput')
    let send = document.getElementById('send')

    window.CHAT = {
        init: function () {
            return this.socket = io.connect();
        },
        login: function () {
            this.socket.on('msg', msg => {
                const divNode = document.createElement('li');
                divNode.innerHTML = msg
                chatContent.appendChild(divNode)
            })
        }
    }
    send.addEventListener('click', () => {
        CHAT.init().emit('msg', chatInput.value)
    })

    CHAT.init()
    CHAT.login()
})()