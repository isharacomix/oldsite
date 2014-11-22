---
layout: post
title: An NP-Hardness Proof for Chip's Challenge
tags: blog
---

Way back when I was in middle school, I remember sitting at the cafeteria tables at lunch with a group of friends and a sheet of graph paper drawing out complicated puzzles with keys, locked doors, traps, and sliding ice floors. These weren't dungeons for D&D or Pokemon levels... these were levels for [Chip's Challenge][].

Chip's Challenge is an old Atari Lynx game ported to DOS and Windows that features the titular Chip trying to win his way into the Bit Buster's Club, reserved only for the best nerds at accomplishing death-defying feats of spelunking. That game was darn hard, but who would have guessed it was *computationally hard*? For our 707 homework, we were asked to pick a video game and try to prove this, so my partner and I did a proof sketch for Chip's Challenge.

First of all...
---------------
I'm not going to get into the nuances of [computational hardness][]. That's a completely different blog entry. This proof sketch follows the general framing of Erik Demaine's proofs of hardness for [classic Nintendo games][] such as Mario, Zelda, Pokemon, Metroid, etc. In other words, if I can take a computationally hard problem and represent it as a level in Chip's Challenge, it means that the space of all possible problems in the game are at least as hard as the computationally hard problem I encoded. This is not a blog entry for the faint of heart. :)

3-SAT
-----
[3-SAT][] is a problem that looks pretty simple but turns out to be really computationally hard when you think about it. The problem is as follows: given an arbitrary number of clauses of three boolean variables OR-d together, is it possible to find an assignment of true and false to each variable such that *every* clause is True?

In other words, the problem might be articulated as ```(A or B or C) AND (A or not B or not C) AND (not A or B or C)```. One assignment of variables such that these three clauses are all true is setting A to True, B to False, and C to True. As long as one variable in each clause is True, the entire clause is True. The tricky part is figuring out how to pick the right values of A, B, and C (or however many variables you have) so that every clause is true. Sometimes there is no solution, and it's hard even just to figure out if there's a solution or not!

The proof that 3-SAT is hard is a really fancy and drawn out proof, but when all is said and done, we generally accept 3-SAT as being NP-complete and use it whenever we try to figure out how hard other problems are. The idea is that if you can take 3-SAT and create another problem such that a solution to the other problem corresponds exactly to a solution of 3-SAT, the other problem must be as hard as 3-SAT (in other words, putting a hard problem into the other problem doesn't make it any easier). Erik Demaine did this by creating levels in games like Mario that represent the variables and clauses of 3-SAT such that the level is only beatable if there is a solution to the 3-SAT puzzle encoded in the level.

So in this blog post, I present a way of designing a Chip's Challenge Level for any 3-SAT problem.

Intuition
---------
In order to solve a 3-SAT problem, you must be able to choose a True and False value for each variable, check to see if any individual clause has at least one True variable, and then check to make sure all of the clauses are true. Before getting into Chip's Challenge, let's just imagine a game where you start off in a room that has one True and one False key for every variable, and you are allowed to pick up one key per variable. Then there is a room for each clause with three doors and a crown jewel inside. Once you pick up your keys, you only need to open one corresponding door on each room to reach the crown jewel, and if you get the crown jewel, you win! **If the level is unwinnable, the 3-SAT problem it corresponds to is unsolvable.**

Unfortunately, in Chip's Challenge, we don't have enough different kinds of keys to handle all of the variables that could be used, so we need to be a bit more clever in our formulation. We need to create four **gadgets** (technical term) that allow us to encode these various parts of the solution, and convince the reader that it's not possible to cheat by opening hypothetical doors we don't have the hypothetical keys for.

Clause Gadget
-------------
![Clauses]({{ site.baseurl }}img/nphard_clause.png)

The way we distinguish from True and False is by using different traps. It might help to read this one from right to left. When Chip starts, he can either pick up a set of Fire Boots or Water Flippers. The fire boots (True) protect him from burning to a crisp in a fireplace, while the water flippers (False) protect him from drowning when he falls in a pool. The three vertical alleyways on the right each correspond to a variable and whether or not it's being negated. When you have the right kind of shoes, you can safely walk over the trap and pick up the yellow key to open the yellow door at the top of the hallway.

But wait... who's that shifty looking character there?

That's the **thief**. What he does is steal your shoes, stopping Chip from going back across the trap. We need to do that so that *Chip can't take the yellow key and then save it for another clause that he shouldn't have access to*. Instead, Chip is forced to go forward, and use his key. Only then does he get his shoes back. He then follows the corridor back around and then moves on to the next clause. But how do we know which variable we're currently working on?

Variable and Crossover Gadget
-----------------------------
![Crossover]({{ site.baseurl }}img/nphard_crossover.png)

Let's show a bit more of the stage. Up at the top, we see where Chip is required to pick True or False for the current variable. One you pick a shoe, you get forced down the moving platform and channeled into the a corridor. This corridor goes under the clauses, and when you get to a clause that you're allowed to move upward to, you can cross the trap and unlock the yellow door.

However, if you get to a variable that isn't related to your current path, you end up slipping on ice. When Chip steps on ice, he continues sliding in that direction until he gets back on stable ground. This stops Chip from going up a different variable's corridor, even if he has the right boots to avoid the traps. As you might notice, if you're on the *right* path, you slide from the ice into the trap, but you never get the opportunity to go left or right onto a previous path. This is what's called the **crossover gadget**: since most games are 2D, we need some way to enforce one-way movement through the puzzle, preventing backtracking to old variables.

After completing all of the clauses, you go all the way up the right corridor and meet a Thief before going to the next variable. He kindly picks up your shoes for you so that you can get a fresh batch for the next variable. :)

Finish Gadget
-------------
![Finish]({{ site.baseurl }}img/nphard_finish.png)

Once we've done all of the variables, we meet a Thief for the last time, pick up a green key and press a button. Unlike the yellow keys, that can only open a single door, the green key doesn't go away when it's used. Once that button is pressed, the green-bordered wall turns into a floor and the green-bordered floors to the north turn into walls, forcing you to go left.

For each clause, there is a green entrance on the right and a green exit on the left, but notice that in order to actually leave the clause and move on to the next one, *you must go through one of the yellow doors you unlocked earlier*. This means the only way to complete the puzzle is to have a combination of true and false variables such that at least one yellow door in each clause gets opened. If no such combination exists, the 3-SAT problem is unsolvable.

Q.E.D.

Further Explanation
-------------------
As you can see, it's easy to attach new clauses or variables to the puzzle, so it supports an arbitrary number of variables and clauses. There might be some other ways to encode 3-SAT as well (I'm currently working on one that uses the example I provided earlier using keys and crown jewels), but you only have to do it once to do the proof. Even though it might not seem too hard, think about how many lifes you would need if you wanted to solve a puzzle with ten clauses and six variables. It's deceptively simple, but that doesn't mean it's easy. :)

I hope this was fun for you - I had a great time figuring it out myself! If you have any questions or see a bug in my proof sketch, feel free to hit me up via Twitter and I'll check it out!




[Chip's Challenge]: http://chipschallenge.wikia.com
[computational hardness]: https://en.wikipedia.org/wiki/NP-hard
[classic Nintendo games]: http://arxiv.org/pdf/1203.1895v2.pdf
[3-SAT]: https://en.wikipedia.org/wiki/Boolean_satisfiability_problem

