---
layout: post
title: Well, that failed miserably
tags: blog
---
So, originally I was going to try to [stream a game for the end of the year](http://isharacomix.org/2013/12/26/lets-make-the-end-of-2013). I knew things were off to a good start when just a few hours after posting that story, *my computer stopped running*. I had to reinstall Xubuntu, and by the time I was done, it was 2 in the morning. I had planned to stay up late and work, but not like this.

After getting my computer working again, I was looking forward to finally getting to stream my work! I even started streaming 30 minutes early, only to discover that while my video was reaching Twitch, *nobody could see my livestream*. After struggling with THAT for about four hours, I was done with the whole affair. So I did what any rational human would do: I decided that I would ignore Twitch and figure out how to stream a text-based terminal directly to my website.

That seems a little extreme, but here's my thought process and what I've learned in the meantime. A long time ago, I blogged about a neat tool I found called [Shelr](http://isharacomix.org/2012/06/09/shelr-tv). Shelr is a tool for recording terminal screencasts, which are much higher resolution and less bandwidth intensive than traditional streams. Unfortunately, their competitor, Codestre.am, is no longer running. The one advantage that Codestre.am had over Shelr was the ability to actually stream your terminal live, rather than simply saving recordings and sharing them after the fact.

While I don't usually do my editing in a terminal, I feel like terminal screencasting would be an appropriate way to get across how I make games, especially while I'm on this Roguelike kick. I've already discovered that the Shelr.tv playback features are purely Javascript and JSON, meaning that I can easily run them on my Github-powered website. The challenge, at least for a while, was figuring out how to stream live. I ran across another tool called [TTYcast](https://github.com/dtinth/ttycast), which seems like a winner, though I've had to learn a bit more about node.js and socket.io to figure it out.

TTYcast can be divided into its client and server. The client is a simple html+js file that listens on a websocket for commands from the mothership as to how to draw the terminal being livestreamed. I've successfully gotten this client running on Github pages - all I have to do now is find a way to set up the mothership. This is tricky, since I need a server that can run node.js that I can pipe my terminal through. In theory, this is easy. In practice, not so much. My original idea was to go through Openshift, which technically worked, but Openshift is not designed to be used with prolonged SSH connections. I also tried my club's university server, but didn't want to take advantage of those resources. I ended up setting a temporary server in my apartment, but I think I might move to a VPS like [DigitalOcean](https://www.digitalocean.com) in the near future. A VPS is nice because it gives me a server I can play with for nearly no headache or upkeep, especially when it's being used to bounce data to my Github-based website.

One positive thing about this experience is that it made me re-evaluate why I was wanting to livestream development. I feel like instead of making the videos the educational artifact, the entire game can be a learning object. With a development diary, recorded programming streams, and well-commented Git commit messages, all stored in the game's documentation, the story about how the game was made can be told.

Of course, all of this means I need to learn emacs. I guess I couldn't put that one off forever. D:

