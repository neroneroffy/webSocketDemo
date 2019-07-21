const msgBox = document.getElementById('msg-need-send')
const sendBtn = document.getElementById('send-btn')
const exit = document.getElementById('exit')
const receiveBox = document.getElementById('receive-box')

const ws = new WebSocket('ws://127.0.0.1:3000/websocket/test')
ws.onopen = e => {
  console.log(`WebSocket 连接状态： ${ws.readyState}`)
}

ws.onmessage = data => {
  receiveBox.innerHTML += `<p>${data.data}</p>`
  receiveBox.scrollTo({
    top: receiveBox.scrollHeight,
    behavior: "smooth"
  })
}

ws.onclose = data => {
  console.log('WebSocket连接已关闭')
  console.log(data);
}


sendBtn.onclick = () => {
  ws.send(msgBox.value)
}
exit.onclick = () => {
  ws.close()
}
