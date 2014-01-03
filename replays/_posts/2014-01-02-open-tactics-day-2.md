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


    Hello and welcome to day 2! Streaming seems to be working, and the replay       
    from yesterday uploaded without a hitch! A few things before we start.          
                                                                                    
     - replays are available at isharacomix.org/replays                             
     - this scratch buffer that I'm writing in is posted in the description of      
       each replay.                                                                 
     - replays are about 2 megabytes. playing them in realtime is kind of slow,     
       so it's encouraged to fast forward - if you need to read code, best to       
       read it on github                                                            
     - but hey, what do i know? :D 
     
    Wit that out of the way, what I'm going to work on is
     
      1. A cursor that moves around the map
      2. A context menu that appears when "clicking" on units/terrain               
      3. A message window so we can print out debug messages. :P                    
                                                                                    
                                                                                    
    Yesterday I spent a lot more time than I should have talking about stuff like   
    the game rules when this information is built ON TOP of the core we're building 
    now. Regardless of whether we decide to make a fantasy swords and dragons world 
    or a netpanzer kind of thing, it will still rely on the same grid system.       
                                                                                    
    The idea is that the rule system (let's call one "wargames") will instantiate   
    a grid and control it. Another game could perceivably utilize the same grid     
    with a completely different goal in mind. Furthermore, map editors should       
    (maybe) use the same system to some extent.                                     
                                                                                    
                                                                                    
    So our goal is interface. Woooo. :D  


    In a way, I'm not sure what the best way to handle it is. I feel like since     
    only one player can control the cursor at a time, we should just make the       
    cursor a part of the grid rather than some singleton object that would be       
    used otherwise. *shurg*  


    (I'm still getting used to emacs. by the end of the month, i'll be a pro.      
      perhaps i need to disable nano so that I don't rely on it so much. :))    
      
                                                                                      
    I need some simple widgets that I can pass control to, like a menu.             
                                                                                    
    A menu needs to be rendered, and needs to intercept input. It should ideally    
    intercept input the same way a view of a grid would. Let's try that.            
                                                                         
                                                                         
                                                                                                                                                      
                                                                                    
      I just created the menu... it has two important methods:                      
          1. handle_input, which takes the return value of gfx.get_input()          
          2. draw, which renders its contents to the screen                         
                                                                                    
    Basically, the entire interface should be composed of these "interactables".    
    I should be able to have a list of interactables with various priorities and    
    pass the get_input() value to all of them so they can use them as they need     
    to. Afterwards, I draw them.                                                    
                                                                                    
    As you could see, when the menu was destroyed, the field appeared on top of it. 
    I don't clear the entire terminal with each frame.                              
                                                                                    
    Based on this philosophy:                                                       
                                                                                    
       - the GRID should not be responsible for having a draw method, as it         
         is simply a container.                                                     
       - the VIEW OF THE GRID will be the one with the handle_input and the         
         draw method.                                                               
                                                                                    
                                                                                 
    game creates view of grid                                                       
       view of grid creates menu                                                    
                                                                                    
    game passes input to view                                                       
       view passes input to menu                                                    
                                                                                    
    Basically we can offload the responsibility of each element, which also         
    allows us to create "game" interfaces (quit, logout) and "view of grid"         
    interfaces (attack, move)                                                            
                        
                        
                        Hmmmmmm....                                                                     
                                                                                    
    So now we need to think of a fancy name for this view of the grid as well as    
    creating some kind of output buffer for game messages to appear in. It should   
    essentially just maintain a list of strings (color coded!) and have a scrolling 
    interface that can be accessed either externally or internally.                 
                                                                                    
                                                                                    
    Woo! That worked very nicely! Still need to add the ability to handle input,    
    but most of the time, I don't envision input being passed to buffers. Now we    
    can display dialogue, UI feedback, and (most importantly) DEBUG MESSAGES! 


    Hrrmrmmph... one cool thing would be to be able to change "focus" to different  
    GUI elements. But that doesn't need to be encoded in the elements themselves.   
                                                                                    
    Now it's time to turn the grid into two classes.... a grid (the model) and      
    the interactable (the view/controller).                                         
                                                                                    
    Hmm... what should I call it? Grid is good for the actual data... hmmm          
                                                       
                  
                                                                                    
                                                   


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


