---
layout: post
title: Test Driven Development vs Rapid Prototyping
tags: blog
---

I've been working on [#8bitmooc](http://8bitmooc.org) for about 3 months now,
and the process by which I develop it has been raising some interesting questions
about my development habits. I've been teaching our Junior-level Software
Engineering class lab section for the past year, and part of what we preach
is how important test-driven development is. We give students a *mostly* strong
set of requirements that they are to code to, then they compose acceptance tests
to ensure that when their coding is done, it does what we asked them to do.

For #8bitmooc, I *really* wanted to use some of the practices I've been preaching
to my students for the past year. I really wanted to use version control, proper
testing, and so forth. But there's one big difference between CSC326 and #8bitmooc:
*I had no idea what I wanted #8bitmooc to be*.

In game development, the key thing that's discussed is rapid prototyping: getting
a user interface that has minimal functionality working as quickly as possible
so that you can see if you like the way everything fits together. The design or
structure may change multiple times, but that's OK, because the "ideal" project
will emerge after enough tests. For highly interactive projects like games,
rapid prototyping is essential since there's no way to tell what's fun or works
well until you have it on the screen and you start playing with it. A good game
isn't made after months of planning and requirements specifications, it emerges
naturally as prototypes are played and tested with human beings.

Test driven development requires you to know what you need before you start
making it, and that's a luxury I don't have with this project. As such, while
I do make tests, those are often surface-level tests that are designed to let me
know if something that I change breaks something that used to work. They exist
for regression, which makes them a bit on the weak side (since I'm able to make
pretty large commits without breaking tests, telling me that my testing suite
needs some improvements).

I suppose the proper thing is to do it in a scientific way: figure our what you
want to make, decide which files are going to be changed, and start writing tests
for those files. That way, I ensure that the tests are always there. The worst
tests are the ones you don't write, and as we start approaching prime time, I'm
getting a little nervous about how things are going to fit together.

Bootstrap is God's gift to people who need to do rapid prototyping for websites.
Heck, this blog and [my teaching portfolio](http://teaching.isharacomix.org) are
basically rapid prototypes of a website that I'll end up designing later. They
have all the essential information, which makes them good enough for me. I love
making web apps in Django, too, since the testing is super-easy to do and
working with the database doesn't take any effort at all thanks to Django's ORM.
Python itself, with its interactive shell, is also a rapid-prototyping must-have.

