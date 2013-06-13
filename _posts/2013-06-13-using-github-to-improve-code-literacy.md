---
layout: post
title: Using Github to Improve Code Literacy
---

Whenever we teach English classes, we don't just teach our students the grammar
and vocabulary of the language and then expect them to produce a novel. They
start by writing short sentences and essays to develop their understanding of
the language, and then they read short stories and classic literature to see
how the great writers express their ideas in poetry and prose.

We don't do that in Computer Science.

In Computer Science, the bulk of the focus of the curriculum is on developing
the students' understanding of syntax and coding paradigms, but we don't often
ask students to *read* code and then test their reading comprehension. My
question is... why not?

Recently, I've been trying to get my brother to learn how to code, so I've
had him doing the Python track on [Code Academy](http://codeacademy.com) in order
to develop his fluency in the language. However, I realized after watching him
that the toy examples from Code Academy are too isolated and artificial to
actually develop any understanding of code deeper than the surface of the
syntax. Normally I say "well, go work on an open source project," but that's
terribly overwhelming. Even just going to try to *read* open source code is a
tremendous task, since it doesn't really give the reader any idea of where to
start.

And that's when it hit me - the commit log!

The commit log is a brilliant place to get students to begin reading code,
because it brings the student's attention to a specific, intentional change
made by a programmer. Code can't be read from top to bottom like a novel since
it grows non-linearly through additions and refactoring. Code is better read
chronologically, and best read topically. Commit logs provide a digestible chunk
of code that can be read in the context of how the programmer was attempting to
accomplish something specific. 

When a student reads a diff, there are three questions to consider:

 * What did the programmer change?
 * How does this change affect the code?
 * Why did the programmer make this change?

After my brother completes a section in Code Academy, I then seek out one of
the changes I made to [#8bitmooc](http://github.com/isharacomix/8bitmooc)
and ask my brother to answer those questions and look at my code, and we discuss
the changes for about 10 minutes. We don't only look at the change, since
whenever I end up calling a function, we look through the code base to find
where it's declared and what it does. However, these conversations seem to be
very valuable at showing how the language is used in a "real language".

It works really well with him, so I'd love to try this out in the classroom.
I imagine it would be a great way to start class.

