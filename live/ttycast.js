
window.onload = function() {

  var el = document.getElementById('terminal')
    , buf = new DisplayBuffer(el)

  var socket = io.connect("ws://live.isharacomix.org:13377")
  socket.on('data', function(operations) {
    for (var i = 0; i < operations.length; i ++) {
      var operation = operations[i]
      buf[operation[0]].apply(buf, operation.slice(1))
    }
  })

}
