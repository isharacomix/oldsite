---
layout: post
title: Quick-and-Dirty Grading Script
---

As you probably know, I'm teaching this year, and one of the most boring parts of teaching is this matter of grading. You would probably think that since I'm teaching a high-tech Software Engineering lab section, the grading would be automated, but a major part of this course is writing documentation, which requires me to manually inspect each of the submissions. The the hardest part about grading online submissions is keeping track of the feedback I want to give the students - I want to make sure that my feedback (and point deductions) are consistent from student to student, so I whipped up a little script to make it easier for me.

The workflow works like this: I begin with a spreadsheet in Open Office. The columns represent students and their grades, while the rows represent grading criteria and feedback. Basically, if I put a point award or deduction in a cell, it belongs to the student that's associated with that column, and they should get the feedback associated with that row.

![Photo]({{ site.baseurl }}img/screen_grading_input.png)

The reason why I do it this way is that whenever I come across a mistake that I realize that many students will make, I create a new row specifically for that mistake and assign it a certain penalty (like -1). That way, when I get to the next student that makes that mistake, they get the same feedback and grade as the first one. I'm not limited by the rows I create: if a student does something really exotic, I can override the default feedback with something of my own, or give them my own score. When I get done, I save the rich spreadsheet as a simple comma-seperated value (CSV) file and run it through my script, giving me feedback for each student.


![Photo]({{ site.baseurl }}img/screen_grading_output.png)

I'm talking in terms of penalties, meaning that I started at 100 points for each student and looked for things that they did wrong in order to penalize them. This is a very pessimistic way of grading, but it was the one that made the most sense at the time that I was first putting this workflow together. This tool, however, supports more positive grading approaches as well. For example, you could easily take a traditional matrix-style analytical rubric and put each of the criteria and grading levels on the left side, and award students points for reaching each level rather than taking them away.

Of course, I'm only sharing this because I came up with it. As proud as I am of my little technique, there are probably much better tools out there than this one. This just happened to be something that I could make that fits my workflow. If it works for you, awesome! If not, I'll be happy to talk with you and try to help you make it work, but this isn't designed to be a robust piece of enterprise software. It's just something I made the other day to get a job done.

So without further ado, here's the code! Just copy and paste it and save it as <code>easygrader.py</code> and you're all set!

    #! /usr/bin/env python
    # EasyGrader version 1.0 - Made by Barry <isharacomix.org>

    import sys

    # Read in the CSV file.
    data = file(sys.argv[1]).readlines()
    names = data[0].strip().split(',')[1:]
    fields = data[1:]

    # Process all of the student names.
    i = 0
    print "\n"
    for n in names:
        i += 1
        
        # Print the student's name first.
        print n
        
        # Now go through the criteria.
        for x in fields:
            f,g = x.strip().split(',')[0], x.strip().split(',')[i]
            if f.startswith('"'): f = f[1:-1]
            if g.startswith('"'): g = g[1:-1]
            
            # If "f" is a criterion, print it.
            if f.startswith("*"):
                print f
            
            # If "g" is a feedback, print it.
            elif g != "":
                if (g in f) and f != "": print "    ",f
                else: print "    ",g
        
        print "\n"

