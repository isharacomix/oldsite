---
layout: post
title: Open Tactics Day 2
tags: replay
replay: open-tactics-day-2
---
In this livestream, I focused primarily on the UI engine. I developed what I
call the ```interactable``` interface, which separates out models from their
view/controllers. Interactables include widgets such as context menus, as well
as the view of the grid, which was split out from the grid's drawing method
written in the previous stream.

I accidentally broke the stream this time around. I tried to merge the two
halves. Hopefully it worked, but I lost my emacs buffer from the first stream.
I tried to capture as much as possible below.

    ;; This buffer is for notes you don't want to save, and for Lisp evaluation.
    ;; If you want to create a file, visit that file with C-x C-f,
    ;; then enter the text in that file's own buffer.



     --EVERYTHING BROKE--

    OK. Sorry about that. I accidentally killed my stream and needed to clean up
    the mess.

    I lost my previous scratch buffer, so I'll need to recover it by replaying
    the stream up until this point. What a pain. I don't even know if it's
    possible to concatenate the replay files. I guess I'll spend most of tonight
    figuring that out.

    In the meantime, let's get back to what we were doing - splitting the Grid.py
    module into a viewer/controller and a dedicated model. Only the viewing part
    should be responsible for actually drawing the map on the terminal. The model
    is strictly a model.


    Hmm... so I still never came up with a name for it.
      - grid
      - board
      - view
      - interface
      - command
      - ui
      - 

    I could rename grid to "world" and then call the view the grid.

    I know what to do.

    There we go. For now, we'll just call it 'gridview' and stick it in the
    same model as the grid. That might be a good compromise for now (but there
    are different kinds of views of the same grid. The view for combat is diff
    from the view of map editing).

    OK. This is positive! So now, we have successfully abstracted the interface
    to "interactables". As I mentioned in the previous recording (which I hope
    I can concatenate), a recordable is - simply put - an object that possesses
    both a draw and a handle_input method. The draw method takes the x,y position
    of the top-left of the object and draws from there. The handle_input takes
    input from gfx.get_input

    One thing I feel like I need are "borders" around the elements... I don't want
    to make them gaudy....

    heck, lets just program it it'd be faster

    A plain "space" border seems appropriate. I could add something fancier,
    or specifically make a... border... method...

    I LIKE THAT ONE.

    Excellent. Now I have the functionality for making borders. I don't know if
    I'll keep the explicit borders or tone them down to just a buffer of spaces,
    but that's not really important at the moment.

    Now, as far as our interaction with the grid goes, essentially what should
    happen is whenever we press enter on a tile, we get a context menu.


    THAT looks nice.

    I also need to make it so that if the menu would run over the edge of the
    screen, it should go to the left side of the cursor, as well as adjusting y position appropriately

    The idea is that the menu should not overlap the unit.


    I think that is an excellent place to stop. So I'm going to save this buffer,
    try to concatenate the two replays, and post them to the website.

    We only had one visitor to the stream today. :(


