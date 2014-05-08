---
layout: post
title: Sailing Through Code
tags: blog
---

Today I spoke with a friend of mine about teaching people Computer Science, and
he brought up with a very interesting way of thinking that I'll try to recreate
below.

> Students in programming classes are not used to the kind of mathematical
> precision required by programming. Students are more used to trying to solve
> a problem, getting it close to the answer, and correcting the error themself.
> In other words, it's a lot *like sailing a ship*, where they can make small
> corrections while en route to the goal, rather than having to get it right
> the very first time.

This reminded me a lot of the game *[0x10c][]*. When it comes to it, 0x10c was
basically programmatic sailing.

For those who weren't reading my blog during the heydey of the 0x10c nonsense,
this was a game by the man who made Minecraft as an attempt to make a game about
programming IN SPACE. You had a spaceship that was powered entirely by a 16-bit
computer running a custom assembly language of Notch's creation, and the only
way to pilot it was to use the 16-bit computer. You could obviously just have
a program that allowed you to interact directly with your ship's hardware, but
part of the fun came from developing applications to make automating the things
your ship has to do in order to make it more efficient!

In that respect, you are really sailing - working with the ship's controls
directly is not only more flexible, it's easier for people who don't have the
programmatic mindset. But when it comes down to it, a ship is too complicated
to manage by hand, so by learning the programming language, tweaking it while
the ship is flying live, and figuring it out as you go along facilitates this
very human attitude of handling the "last mile" of complexity by hand.

This reminds me a lot of what it was like to program in Emacs Lisp. Part of
what makes Emacs such a fun editor is that it's a text editor that can be
programmed from the inside out. Any time you come across a line of code in a
document, you can run it. You can write a program by writing entirely unrelated
snippets of code in your buffer, running them, and then splicing them together
into larger programs when you've got them right. Unlike the very one-dimensional
REPL for languages like Python and Ruby, languages like Lisp exist in two
dimensions, very similar to the way you can drag and drop hanging pieces of code
in a language like Snap or Scratch.

And another environment that handles this - which you should be expecting by
now - is MUSH. In MUSH, a live environment focused on roleplay and interaction,
the programs exist in space spitting out imperfect-but-good-enough text that
people can interact with. The program-to-output loop is much smaller and doesn't
require as much work as your average object oriented language.

The paradigm of a language and how it is meant to be used has a huge influence
on its utility to new, novice users. Interactive languages have a lot going for
them, but Lisp and Snap are interactive in a different kind of way - it's almost
like a programming sketchbook... where you have little sketches sitting around
waiting to be fleshed out into complete applications. This is what I want in
a workshop, something that I still haven't resolved even after all this time.

[0x10c]: http://en.wikipedia.org/wiki/0x10c
