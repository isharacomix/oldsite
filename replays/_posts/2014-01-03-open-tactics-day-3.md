---
layout: post
title: Open Tactics Day 3
tags: replay
replay: open-tactics-day-3
---
In this livestream, I add the ability to move units! We focus a bit more on the
internal representation of units and terrain in a grid, and start working on how
to make them interact. The goal now is to make a simple tactical game where units
from two armies fight each other one turn at a time.


    ;; This buffer is for notes you don't want to save, and for Lisp evaluation.
    ;; If you want to create a file, visit that file with C-x C-f,
    ;; then enter the text in that file's own buffer.

    Hooray and welcome to day 3!!!

    Today we are streaming from a server I just rented, a VPS from
    digital ocean! It's so cool to have a live remote server I can use to play
    with. They offer plenty of uptime and when I'm not streaming, I can use it
    for other experiments as well. Some folks have even used it with
    shoutcast, which is a Voip broadcasting protocol. That would be really cool
    for recording voice, though there still isn't a way to associate the sound
    with the terminal recording... yet.... :)


    So yesterday we did a lot of good work. We mostly worked on UI. We made a
    class for widgets as well as splitting up the responsibilities of the Grid
    class that will be responsible for modeling our world.

    The grid has two classes. The grid proper, which is the model, and something
    I'm calling GridView, which is a class that is created with a width, height,
    and parent grid. It intercepts player commands and then makes them act on the
    world.

    Today what I'd like to do is add two new classes to the mix, probably sticking
    them in the grid module until I can think of a good place to put them:

     terrain and units


    Terrain objects and unit objects exist in the cells on the grid. Every x,y
    position should be a cell with the terrain properties, and can contain one
    or zero units in it. So let's do this thing.



    Sorry for getting sidetracked. What I just did was change the way that the
    color codes make things get drawn. This was written back during the
    thanksgiving game jam, so let me explain.

     to draw a character to the terminal, you call Draw(x,y,c,col)

       x and y are obviously the x and y position. c is the character

       col is a color code. Let's say I wanted to draw bold red on green.


       col="rG!"

      the lower case letter is the text color, the uppercase is the background.
      the excalamtion point means bold. there is also a ? for invert (which is how I
    move the cursor in the menus and such). originally, if there where two
    competing colors (like "rg"), it wouldn't know what color to use. Now, it does:
    the later colors take precedence.

    This is important because of how the interactable draw functions override the
    draw functions of their members. For example, I want the grid to be able to
    draw all of the terrain. But I want the view to be able to override the colors
    of units (like inverting where the cursor is). Now I can invert by simply
    concatenating the new string to the old one.

     "rG"+"b!" will replace all characters with capital blue and ignore their
      background color.

    So now that that's done, let's get back to where we were before.

    We need to make it so that cells can be drawn, and then, so units can be
    drawn! ... i'm expecting some trouble here. :/


    ...

    What's currently on my mind is the idea of "armies" or at least "teams".
    have a list of all teams and their respective colors.
    each team has a list of units.


    Right now that will do. I suppose the next thing would be to support actions,
    particularly units moving and turns ending. Maybe we can make something like
    fake chess. One kind of unit, units can move. Not really chess since each
    side moves their entire army before they change turns. But whatever. For this
    to work, we need to start thinking more about the control loop at the level of
    the gridview object.


     play begins with player 1.
       - all units start ready
       - player can move all ready units under his command
       - player ends turn
       - all units return to ready state
       - control passes to player 2

    right now i just need an interface for moving. I need to floodfill and find
    "possible movement paths".


    I THINK THAT IS A GOOD PLACE TO STOP!

    Hooray! We have successfully done some good work! We can select units and
    move them around now! I'm a little worried about how all of the functions use
    coordinates instead of utilizing the unit objects, but I like the idea of
    units not knowing "where" they are in the world and making that a function
    of the all-knowing game board. It's just irritating that units know so much
    about their team and nothing about their world.

    There are some downsides to this approach, mainly that it is super slow to
    have to get units in such a roundabout way ( world.get(x,y).unit... and also
    you have to make sure the tile exists!).

    However, there will be time in the future to clean it up. For now, we're going
    to commit our work to github, upload the recording, and call it tonight!

    We only had one visitor tonight. :(

