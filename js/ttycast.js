
  var el = document.getElementById('term')
    , buf = new DisplayBuffer(el)

  
  var strings = [
"",
"                         Welcome to IsharaComix.org!                         ",
"",
" This is the personal website of Barry Peddycord III. Here you can find my",
" blog, CV, projects, and links to my other profiles around the web. Everything",
" should be rather straightforward.",
"",
"",
" Quite frequently, I livestream software development. When I'm streaming, this",
" console window will display what is on my own terminal. I do this using",
" websockets, meaning that older browsers will be unable to view my livestream.",
"",
"",
" I can be reached via Twitter, e-mail, or IRC using the chat box below. During",
" my streams, I'm more than happy to answer questions or hold conversations.",
"",
"",
"    Current livestreaming schedule: 10 PM to midnight EST",
"    Current livestreaming project : http://github.com/isharacomix/rules-of-war",
"",
"",
"",
"",
""
  ]
  buf["setRows"].apply(buf, [24])
  for ( var i = 0; i < 24; i++ )
  {
      var s = strings[i]
      var attr = []
      if (s.length > 0) {
        attr = [[3584,s.length]]
      }
      buf["setCols"].apply(buf, [i,80])
      buf["draw"].apply(buf, [i,0,s,attr])
  }


  var socket = io.connect("ws://live.isharacomix.org:13377")
  socket.on('data', function(operations) {
    document.title = "IsharaComix LIVE | ON-AIR!!!"
    for (var i = 0; i < operations.length; i ++) {
      var operation = operations[i]
      buf[operation[0]].apply(buf, operation.slice(1))
    }
  })


