---
layout: post
title: Playing with Wire
tags: blog
---

Yesterday, my [Arduino][] arrived in the mail! After many years of trying to make
games and watching them fail cataclysmically, I've decided that the only way to
go on is to embrace constrained computing even more than I've already done via
assemblers and emulators. It's time to drop down to a lower level and start
**[playing with wire][]**.

**Playing with Wire** is the name of my new personal project for personal growth
and learning. In this project, rather than thinking about software development and
web application projects, I'm going to dive into the world of detailed spec sheets,
circuit-board layouts, physical components, and having absolutely no idea what's
going wrong when something is broken. One of the most important aspects in the world
when it comes to software development is the notion of *introspection*, being able
to observe and report the state of the program at any given point in time. When you
hit the hardware level, you very seldom get the opportunity to use a debugger since
you often have a custom circuit with chips that act like black boxes. This world
encourages efficiency and simplicity, and requires the utmost attention to detail.

One mistake could cost more than a recompilation, after all.

I've said for many times that having too much computational power kills my ability
to be creative because I'm too concerned with doing things the culturally "perfect"
way. I get too bogged down in the big software engineering and design patterns
with no simple metric for what is better or what is worse. Most importantly, going
back to fix something often breaks it horribly. The sheer numbers of interworking
parts make what should be fun (improving code) a disappointing and overwhelming
nightmare. Worst of all, it's usually self-imposed, and that makes it all the worse
to deal with.

Hardware is a simpler time. While making 8bitmooc was a tough engineering challenge,
I enjoyed the simple fact that I could at least do the NES games right. I had fun
writing my very first NES game, despite it not being particularly well-engineered,
there was a certain joy in having to plan things out meticulously - where to store
the information, what was needed, how to handle physics. In modern OO systems, many
people are rightly pleased by the ability to stick in a physics handler anywhere
they like. However, this freedom is overwhelming and ultimately not a fun way to
spend my leisure time.

"Play" is all about constraints. The reason we enjoy games is because the rules
constrain our actions, and we have to figure out how to accomplish tasks in the
confines of those rules. The rules of programming languages are restricting at
first, but unless you use an intentionally constrained programming language,
these environments are so loose and freeform that you can do just about anything
in any number of ways. If I don't feel constrained, I can't focus on what I
need to do. Hardware simplifies that task for me by giving me too few resources
to do what I want. I only have so many pins on the chip or so many resistors to
spare. If I want to do more, I have to buy the equipment and wait for it to
arrive, so there's an advantage (and admittedly, a certain thrill) to figuring
out how to accomplish the task with what I have, whether that involves rationing
wires or emulating a device using my Arduino.

Here's to a great experience working with hardware!

[Arduino]: http://arduino.cc
[playing with wire]: http://playing-with-wire.org
