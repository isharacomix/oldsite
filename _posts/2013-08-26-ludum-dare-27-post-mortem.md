---
layout: post
title: Ludum Dare 27 Post-Mortem
---

Three cheers for me for my first successful Ludum Dare! And my first successful
NES game! A lot of first successes this time around - my body will forgive me
for the missed meals. :)

So a bit of post-game analysis - I had a lot of reasons for wanting to make this
game the way I did. As we all know, I'm working on my online course,
[#8bitmooc](http://8bitmooc.org), and part of the course is all about making a
game all by yourself from scratch! So I wanted to make sure that I could develop
the game using the same tools that I expect my students to use, which are the
8bitmooc playground and the documentation that I've been writing! I've been
taking the text from the [NESDev wiki](http://wiki.nesdev.com), and rewriting
it to be more accessible for people who are just interested in programming by
describing the NES as if it were an API. Normally I use that wiki when I need
help, but for this project, I made it a point to only use my own documentation,
which I think went pretty well!

A few folks have indicated some problems with the ROM image, such as it failing
in some emulators. It works perfectly in Mednafen, jsNES, and John's Android
NES Emulator, but a friendly fellow from the NESDev forums told me about some
not-so-great things I was doing in my code, like writing the sprites way too
late. I still have a lot to learn about the NES, but the best way to learn about
something is to teach it, and I obviously know quite a bit considering that I
was able to make a game in the end!

I really wanted to get a fast-paced game with goofy sounds and graphics when I
made this game, and that's why the controls are so twitchy. I spent most of the
time on the physics engine and the "feel" of the game until I was happy getting
a little dude bouncing around, pushing blocks, and dying every 10 seconds.
Having to do collisions between 16 solid objects is tricky and takes up a lot of
clock cycles. But for a simple game written in 48 hours, I am extremely pleased
with my output, and that I was able to take the two top themes and run with them
so quickly! I think I might have spent 16 hours at the computer in total or so.
I definitely did NOT spend much on the level design, which is my least favorite
part of game making.

All things considered, I'm amazed that my game has managed to get 67 ratings in
just one day after submission - I've really appreciated
[everyone's feedback!](http://www.ludumdare.com/compo/ludum-dare-27/?action=preview&uid=23902)
Granted, it's hard to play others' games when you're running Linux, but I've
enjoyed many of the ones I've gotten to run! LD really brings out the creativity
in people, so I'm glad I participated this time around. :)

