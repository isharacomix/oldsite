---
layout: post
title: My Crowning Achievement
---

**Problem:** Write a C program that, given a string of words on standard input, will print the words in reverse.

**Example:** The string "```Hello there Wordpress```" becomes "```Wordpress there Hello```" after running it.

**Constraints:** You may not use any data structures, including arrays.

For those of you who answered "that's not possible"... congratulations! You're correct - theoretically, anyway. There's a little bit of automata theory behind understanding why this is so. You see, the problem definition requires us to collect the characters of the words, and then replay them in their original order when we reach a space in the string. However, because we can't store the characters in an array, we are either required to toss each character we read from standard input or do a recursive call and push them onto the runtime stack. If we toss them, we obviously can't reconstruct the words, but pushing them on the stack doesn't fare much better since we can't go backwards into the stack without tossing away the newest characters we just read. So therefore, no well-defined programming language can produce a program to solve this problem in the required constraints.

However, since computers have practical limitations, we can still "cheat". On most machines, function calls are implemented by placing their parameters, local variables, and return pointers on the runtime stack in something called a <em>stack frame</em>. In the case of a recursive function call, the stack frame for the function itself will usually be the same size each time, meaning that there is a predictable offset between local variables in the runtime stack.

Do you see where I'm going with this?

If not, here's the code: those of you with weak constitutions may wish to avert your eyes - this could be considered quite obscene.


    /*
    This program takes lines of text from standard input and reverses
    the order of the words.

    Example: "Hello there Wordpress"
    becomes  "Wordpress there Hello"

    This code may not successfully run on machines that take security
    seriously. You may need to disable stack protection to make it run.

    Author: Barry Peddycord III
    */

    #include <stdlib.h>
    #include <stdio.h>
     
    int reverse( int code, char *start, int diff );
     
    int main( void )
    {
        char c;
        int diff;
     
        /* Figure out the size of runtime stack blocks. */
        diff = reverse( 1, NULL, 0 );
     
        /* Loop until EOF. */
        while (1)
        {
            c = getc( stdin );
     
            if ( c == EOF )
                break;
            else
                ungetc( c, stdin );
     
            reverse( 0, NULL, diff );
            putc( '\n', stdout );
        }
     
        return 0;
    }
     
    int reverse( int code, char *start, int diff )
    {
        char VALUE;
        int res;
     
        /* Determine the span between invocations of the runtime stack. */
        if ( code == 1 ) return reverse( 2, &VALUE, 0 );
        if ( code == 2 ) return (&VALUE)-start;
     
        /* The actual code involved in reversing the string. We pass the front
        of the word to the end of the word to help unwind it. */
        VALUE = getc( stdin );
     
        if ( VALUE == EOF || VALUE == '\n' )
        {
            /* On traditional machines, the stack pointers go from higher space
            to lower space. I put this conditional for cross platform-ness. */
            while ( (diff < 0 && start > &VALUE) || (diff > 0 && start < &VALUE) )
            {
                putchar( *start );
                start += diff;
            }
        }
        else if ( start == NULL )
            reverse( code, &VALUE, diff );
        else if ( VALUE == ' ' )
            reverse( code, NULL, diff );
        else
            reverse( code, start, diff );
     
        /* Printing on the way down. */
        if ( VALUE == ' ' )
        {
            putchar( ' ' );
            while ( (diff < 0 && start > &VALUE) || (diff > 0 && start < &VALUE) )
            {
                putchar( *start );
                start += diff;
            }
        }
     
        return 0;
    }

This program is and shall remain my crowning achievement.
