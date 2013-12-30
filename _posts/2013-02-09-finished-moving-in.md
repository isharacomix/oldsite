---
layout: post
title: Finished Moving In
tags: blog
---

I managed to get my domain name situated over here in tumblrland, so now I've officially moved out of Wordpress. It's been a fun ride, but I think it's time to move on.

One of the things I dreaded most about the move was losing my OpenID, since I had worked so hard to get it to work, but I learned a neat trick for [adding OpenID to my tumblr domain](http://www.brimdeforest.com/post/133742802/turn-your-tumblr-into-an-openid) so that I could log into Google and have that serve as my OpenID for these sites instead. I tried it out for a few sites, and it looks like they don't even know the difference, so go me!

Basically, the trick goes a little something like this:

    <link rel="openid2.provider" href="https://www.google.com/accounts/o8/ud?source=profiles" /> 
    <link rel="openid2.local_id" href="http://www.google.com/profiles/109698223232106496867" />

It's stupid easy. Depending on whether you're using Wordpress, Google, or Launchpad, the specifics are a little different. Also, if you decide to go with Google, you might as well start enabling Google for JavaScript, or you're gonna have a bad time.

Anyway, once I get caught up with work, I'll start blogging some more here. Oh, and don't worry, I promise not to go too crazy with the reblogging. :)

