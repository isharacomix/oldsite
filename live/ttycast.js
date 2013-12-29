
  var el = document.getElementById('term')
    , buf = new DisplayBuffer(el)


  buf["setRows"].apply(buf, [24])
  for ( var i = 0; i < 24; i++ )
  {
      buf["setCols"].apply(buf, [i,80])
      buf["draw"].apply(buf, [0,0,"",[]])
  }


  var socket = io.connect("ws://live.isharacomix.org:13377")
  socket.on('data', function(operations) {
    for (var i = 0; i < operations.length; i ++) {
      var operation = operations[i]
      buf[operation[0]].apply(buf, operation.slice(1))
    }
  })


