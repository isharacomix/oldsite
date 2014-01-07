---
layout: post
title: Open Tactics Day 6
tags: replay
replay: open-tactics-day-6
---
In this livestream, we have a very productive evening of programming! We finally
figure out how we're going to assign the responsibility of drawing the grid - by
creating a new class, the very aptly named CAMERA widget! Not only did it work,
it ended up being easier to implement than we first thought, so we went and
added a few little things here and there. We cleaned up the battle animation code,
we tried out some different ways of indicating movement ranges, and we made the
camera scroll around the playfield! We were so productive, we even stopped a whole
twenty minutes early!

    ;; This buffer is for notes you don't want to save, and for Lisp evaluation.
    ;; If you want to create a file, visit that file with C-x C-f,
    ;; then enter the text in that file's own buffer.

    DAY SIX. It has almost been a week since we started, meaning this game has
    been worked on for about 12 hours. And believe it or not, I finally came up
    with a way to handle the drawing requirements. They were under my nose the
    whole time, too. It makes me sad that it took me this long to figure it out.

      The first task for today is to implement a new Interactable widget:
      The CAMERA.

    A camera is a widget that takes, in addition to its width and height, a
    Grid. It is solely responsible for rendering the grid and displaying things
    to the player such as the cursor. I haven't decided if I want to directly
    pass control to it or not, but for now, it will be a container with no
    input parsing.

    It's only been 30 minutes, but I feel like I've done more than I've done in
    an hour on other recordings. This new camera widget is awesome. Not perfect,
    mind you, since it basically does the same thing as the code that came before
    it, but it's pretty all right.

    So what I was doing there at the end was checking the CPU usage of this code.
    The drawing code that's going on is ridiculously unoptimized. It's burning an
    entire core, and in SDL mode, you can see a noticeable framerate drop. It's a
    bit of a headache, at any rate.

    That does much better, but there's still no reason for it to be so CPU
    intensive. It's a text-based game for crying out loud. :/


    Anyway. One thing that's bothering me is how we draw the cursor on top of the
    highlighted cells. I don't particularly like using a white-background cell
    to illuminate a single cell in a collection of inverted video cells. It rubs
    me the wrong way. But simlarly, I don't want to try to use a colored background
    on the range, since it would look absolutely gaudy. Observe...

    It's not the best. In fact, there's probably no good situation here... another
    possibility is to OUTLINE the legal area...

              X 
             X.X
            X...X
           X..@..X
            X...X
             X.X
              X

    That way the flashing is along the border of where you can go. I don't actually
    like this approach since the calculation is not trivial. *sigh*

    The best solution I suppose is color. The white square is ALWAYS the cursor.
    The inverted video lets you see the actual color of the squares underneath.
    Though perhaps it would be more wise to color them based on the team that owns
    the tile.

    Yeah, that's the way to do it. At least for now.



    So, we have solved a great challenge that has been on our conscience for the
    past forever. We have created a new object who is responsible for drawing the
    grid, and it's doing a good job. However, it's not perfect. For example, I
    believe that the camera should decide how to draw the units on the grid rather
    than leaving it up to the units, the terrain, or what have you. If I encode
    all of this in the camera, the grid can truly become an agnostic data storage
    location.

    Challenges remaining:
         * Determine the API that will be used for the grid
         * Remove all code from units/terrain
         * Create "action list" interpretation by grid
         * Clean up the game logic hidden in the gridview


    One of the biggest problems now is that there is so much game logic in the
    gridview. This is a problem because it tries to maintain a bunch of information
    about the current state of the game, but some of that information is handled
    when menu items are clicked while others are handled when locations on the map
    are clicked.

    The player's activity in the game is essentially to build an action for the
    game engine.


     "Starting at 8,3, i want to move the unit to 7,3 and attack 7,4"

    Click on 8,3
    Click on 7,3
    Click Attack
    Click on 7,4

    This means that the game should know what it is expecting from the player
    at any given time based on the current construction of the command. There is
    far too much logic stuffed in there!

    Another issue are the animations. I believe that Alerts of any type should
    die out after a set amount of time, meaning that we can abstract the HP battle
    animation alerts a bit. I was very pleased by them. :D

    Hmmm... let's think on this...

    The alerts are low-hanging fruit. Let's set this up.

    Awesome! That's what I call code cleanup! As we see, we turned our magic HP
    combat animation thing into just an ordinary alert as far as the rendering is
    concerned. Brilliant! The ability to just stick variables into objects is one
    of the things I love about python. Even though none of the interactables have
    a "time" member variable, we can just make one up if we need one without
    having to go through the trouble of adding it to the API!

    So that cleaned up a lot. I'm not sure if I want to put this HPAlert thing
    in the widgets...

    Eh, why not.



    I've never done inheritance like this in python, so I'm experimenting a bit.
    Huh, that's an interesting way of doing inheritance I guess. Anyway, it its
    a bit nicer in theory than what I had.


    Wow, tonight is proving to be extremely productive. Right now the only thing
    making me not want to program are these cold fingers of mine! I' having a heck
    of a time trying to type thanks to this cold front. D:


    Blarg. OK, let's go back and look at our list... hmmm

    Know what? Let's commit what we've got right now. OK. It's a good idea to push
    when you've done a lot of work. And we've been more productive than I expected
    tonight. It's funny how I was dreading this and it turned out to be the most
    simple thing thus far.

    I don't want to start anything big as late as it is now. If I can't find
    another small thing to pick off, then I'll call it a night early and enjoy the
    extra shut-eye.

    OK. That was another good addition. The camera can now move around the area,
    and all of the components handle the movement gracefully. I wasn't expecting
    that to go easy either, but it sure did!

    Well, I don't think I can make up any more busy work for myself. I can say
    this: after coming up with this camera idea, the whole matter of not knowing
    what should be drawing what won't be on my mind nearly as much! I was really
    having trouble focusing because of that one. Now the big question is how do
    we get the rules to use the grid correctly? That means tomorrow we're going
    to work on the API. This is going to be a big one.

    So I'm calling it a night early. Later!

