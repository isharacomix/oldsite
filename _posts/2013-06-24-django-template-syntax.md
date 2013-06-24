---
layout: post
title: Django Template Syntax
---

Something that I find infinitely interesting is how the usage of the programming
languages of today influence the design of the programming languages of
tomorrow. Today, I want to write about the [Django Template Language](
https://docs.djangoproject.com/en/dev/topics/templates/), which is appropriate
since #8bitmooc is essentially built on top of it.

The Django template language is pretty awesome. Unlike languages like PHP, where
a PHP page is basically and HTML page with PHP code sprinkled throughout, a
template file is just that: an HTML template where you pass in variables and
render the template based on the variables you send in. The problem with
PHP-likes is that since the code that can change the state of the database is
embedded in the HTML, there is no strict delineation between the controller and
the view. While sometimes this is necessary (since PHP is often the only language
enabled by web hosts by default), this is hardly optimal. Template languages
give you purposely limited control structures so that you don't even think about
trying to do "logic" in your view.

This isn't to say you can't do things like loops: after all, most web pages are
just lists of content, so you need to be able to do a for loop, right?

    {% for s in status_messages %}
      <h3>{{ s.title }}</h3>
      <p>{{ s.content }}</p>
    {% endfor %}

This is essentially the extent of the complexity needed by any template
language, right? However, there is this notoriously irritating case with for
loops. Let's say we have a list of names, and we want to display "Alice, Barry,
and Charlie", where there are commas after all the names except the last one,
and the word "and" before the last one.

With the above construct, there is no way to find out if you're on the last
line or not, right? After all, you don't know the index of *s* in that loop!
This little irritation has plagued us in languages like C, but the fine folks
who developed this language gave us this little gem: ```forloop.last```. This
special variable exists inside of for loops, and returns True if the current
pass through the loop is the last one.

    {% for n in names %}
      {% if forloop.last and not forloop.first %}
        and
      {% endif %}
      
      {{ n }}{% if not forloop.last %}, {% endif %}
    {% empty %}
       Nobody's here...  
    {% endfor %}
    
This is really handy. The naive Python approach is to do the following:

    i = 0
    s = ""
    for n in names:
        i += 1
        if i == len(n) and i != 1:
            s += " and "
        s += n
        if i != len(n)
        s += ", "
    if len(names) == 0:
        s = "Nobody's here..."

With some guidance from stack overflow, it's possible to reduce the solution
to something slightly more beautiful:

    s = ""
    for i, n in enumerate(names):
        if i == len(n) and i != 1:
            s += " and "
        s += n
        if i != len(n)
        s += ", "
    if len(names) == 0:
        s = "Nobody's here..."
    
But in both of these, the programmer is responsible for providing the index
to the language. The difference between the Python approach and the Django
approach isn't that there's a special case, but that the ability to detect
the last item in the list is **part of the for loop construct itself**. While
Django isn't the first such language to feature such a construct (I've used
the same thing in MUSH Code years ago), but it is the one in recent memory,
that shows that programming languages evolve to meet the needs of their popular
usage.

