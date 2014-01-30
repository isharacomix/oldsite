---
layout: post
title: Rules of War Day 21
tags: replay
replay: rules-of-war-21
---
In this livestream, we start to wind down and bring the game to a close. It is
now possible to start a hotseat game and probably play it to completion. All
that's left now is to actually do some playtesting and release the game as it
stands.

We start wondering if RoW is really the game for us, but after finally getting
it done, we can't wait to start next month and begin the Great Refactoring!

    ;; This buffer is for notes you don't want to save, and for Lisp evaluation.
    ;; If you want to create a file, visit that file with C-x C-f,
    ;; then enter the text in that file's own buffer.

    *yawn*

    Today is day 21 of RoW development. As we could see last time, I've gotten
    kind of frustrated with the codebase because it's gotten long in the tooth.
    These 2-hour development sessions might be OK for refactoring, but refactoring
    here in the terminal is particularly difficult to do, so I may hold off and
    do refactoring another time. I love my game and I'm enjoying writing it, but
    the structure is irritating me since I despise UI stuff... particularly having
    to make these sequences of menus. I feel like there should be a better way.

    I recently started watching Josh Parnell's updates for Limit Theory, which is
    a game I've been looking forward to for the longest time. In my eyes, there
    are two ways to focus on game dev: to focus on the rules of the game, or to
    focus on the experience you want the players to have. When making a game for
    yourself, I don't think it's possible to actually come up with an experience
    that you would like to have, since you're always in such a state of
    meta-awareness of what you're doing. But I'm getting ahead of myself.

    Limit Theory is a procedurally generated, 3D, gorgeous space sim kind of like
    Elite. In November of last year, the update video demonstrated something very
    interesting: a node-based UI that allows browsing and modification of all of
    the entities that exist in the game world. This works well for data that might
    be stored in... say... JSON. The dictionaries that we have are very well-suited
    for such a UI:

      Grid

         Tile 1 1
           Terrain
             Grass

         Tile 1 2
           Terrain
             City
               Owner: Blue Team
           Unit
             Tank
               HP 38%

    and so on. Each element in the dictionary is a node in the tree. If a node
    is a list or dictionary, then it has subnodes, and you can explore it until
    there's nothing left to explore. This kind of browsing allows you to make one
    interface to rule them all, which is why I've fallen in love with Limit
    Theory all over again, and why I'm crossing my arms and scratching my head
    looking at the abomination I'm putting together and calling a game.

    I think part of my problem was trying to make it too abstract. It's much easier
    to just hardcode everything. It's hard to edit, but once it's done, you don't
    need to ever see your code again (right? :P). Now we've got this big mess of
    a thing and it's a little frustrating to be sure.

    So this is why I think it's a good idea to take a break and come back to it
    with a fresh mind, especially after getting to release it to the world at the
    end of One Game a Month. I can spend my time working on a new game, thinking
    about things differently, and working on a different sort of experience.

    Before diving into the code, I also want to talk about the kind of game I want
    to work on next. As I said, I want to work on something that might be a more
    traditional Roguelike. Focusing less on abstraction and more on experience.
    I want to make something like the Gearhead RPG with dynamically constructed
    plotlines that you can follow. One of the biggest things that has bothered me
    as a grad student gamer (lol) is that I can only really play a game once in a
    blue moon. Games like Minecraft and Starbound, while in theory should be
    easy to drop and get back into on an asynchronous schedule, really aren't.
    Those games kind of encourage grand projects in building and exploration, and
    if you don't have that kind of time, you don't get to experience the full
    thing. What I want are games that are more coffeebreak in nature. Games that
    take place in a universe that is persistent, but the games are short little
    vignettes in a larger story that might take a day or two to get through.

    That's the kind of game I want to make next month. I'm not sure what the theme
    would be, or much of anything about it, but that's the philosophy. I like
    having the chance to sort of pontificate like this in my livestreams because
    I feel like I can get away with a stream of consciousness that I can't get
    away with in blog posts. So that's nice.


    With that out of the way...

    Time to work on RoW. What is still in the clouds?
     - Main Menu: You need to be able to set up and start a game from Main
     - Rulebook: We need a comprehensive Readme and first page for the ingame rules
     - Some default maps

    There are only 3 more days left in January. Let's do this (my keyboard just
    shorted out on me????).


    (first, I need some music...... much better!)


    MAIN MENU LAYOUT

    When you click on a stage and say "Start Battle", you should be presented
    with a list of the teams that are a part of the game. You can turn on and
    off teams, and also change their names.

    Hmm... actually, I think this might be easy. All I need to do is open an
    "editor" and provide the teams as the choice elements. Hmmmmmm....

    Well, that turned out to be easier than I thought it would be. So now what?
    I suppose I could write the rules, but I wasn't expecting to have to write
    in english today. Python is easier than English, I must admit. Sometimes.

    Welp, the sooner I take care of it, the sooner it gets done. We can type in
    english for the other hour of tonight. We'll probably finish early. Then I can
    rant and rave about the project I want to do after I put this one on the shelf.

    Well, this night is turning out to be a quick one. I guess we could try to
    make some maps! After all, I did make the map editor. :)

    I can't really make more work for myself. We're winding down, it seems. I wish
    I could end things stronger, but I think it's about time to start wrapping this
    project up. I'll see what else needs to be done for this game tomorrow, and
    perhaps end up submitting it for completion to the regular venues.

    It's been fun, but I think I'll have more fun if I start a new project from
    scratch! That's what 1GAM is all about!
