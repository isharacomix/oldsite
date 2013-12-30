---
layout: post
title: Maximal Game Design
tags: blog
---
I don't think I've ever made much of a secret that I'm a huge fan of Roguelike
games. At least, in theory, I'm a fan, since I've never successfully made a
Roguelike or anything, but there's still something that fascinates me about the
Roguelike development subculture enough to keep me logged into the #rgrd chatroom
for years on end.

One of my labmates, when I brought up my love of Roguelikes, made the statement
that Roguelikes seem to exhibit a quality he refers to as "maximal game design",
something that resonated with many of the beliefs that I have.

For those who don't know, Roguelikes are historically grid-based, turn-based,
single-player, high-fantasy role-playing games. They typically take place in
randomly generated dungeons, and you hack your way from the first level, down to
the depths of the earth to obtain the mighty amulet of whatever that will make
you a hero in the eyes of civilization. They are a kind of hardcore game, since
death is final, and if you die, it's back to the beginning of a brand-new
randomly generated dungeon.

Also, it's usually text-based. As in, you're an @ symbol moving about a maze
represented with periods and hashmarks, killing dragons represented by a
menacing capital letter D. While many folks would consider this a turn-off and
opt to play something more modern, I revel in this style of abstraction of the
world.

The decision to use characters as tiles is largely, but not entirely, aesthetic.
While the original game meant to be played on UNIX terminals simply could not
support graphics, the decision not to attempt to make graphics for each games
makes Roguelikes an approachable genre for the beginning programmer. Since there
is no need to find an artist or develop graphical resources, the developer can
start on what matters the most: the gameplay. After all, if your game absolutely
needs stellar graphics in order to be fun, then you're building your house on
a heck of a shaky foundation. However, if your game is super-immersive when it's
represented entirely textually, then you know you've got a winner, and now you're
ready to kickstart something to raise some money to get a real artist to do your
game justice.

However, free of the constraints of having to make graphics for every new 
mechanic in the game, programmers get a lot of room to do things that would
be difficult to do in modern games. First and foremost, it's difficult to
make randomly generated worlds look good without making them look repetitive,
but when the bar is set low in the world of ASCII, you don't care if all of
the houses in one town look the same as the houses in another. There is also
room for procedurally generated monsters and spells, which would require a lot
of work up-front to make look good. But some games, like *Dwarf Fortress*, go
well beyond that by simulating Dwarfs and their victims down to the fingers.
When some games will simply stop at combat being a battle to reduce HP to 0,
*Dwarf Fortress* makes it possible to knock the teeth out of a dwarf and craft
them into a fine-looking statue (assuming a necromancer doesn't animate the
teeth first).

One might argue that extensively creating unnecessary simulations like this
doesn't add (and may even detract from) the game experience for the player.
But Roguelikes are just as much games for their developers as their players.
Roguelikes are abstracted playgrounds that offer you an opportunity to try out
things in game development that would be too difficult otherwise. You can just
keep adding more stuff to the world, and while that might make the game hard to
approach for novices, the most dedicated players treat it as just another
challenge.

I'm going to be making a Roguelike starting tomorrow night at 10 PM EST
on my new [Twitch.tv channel](http://twitch.tv/isharacomix) and streaming
(hopefully) about an hour a night at that regular time. I hope you'll join me
for the ride! If this goes well, I may actually go through with my "Let's Make"
series!

