---
layout: post
title: How ready are YOU?
---

![Photo]({{ site.baseurl }}img/computer_ubuntu.jpg)


**If your computer failed right now, would you be ready to deal with it?**

I'm not trying to scare you, but the fact of the matter is that nobody is safe from a computer catastrophe. There's no way to prevent a computer from failing, an operating system from crashing, or a power cord from mysteriously shorting out on you. What you do have control over is how you have your data spread out and what you stand to lose in the event of a computer failure. As my power cord has mysteriously shorted out on me as of yesterday, rather than crying about it on my blog, I'm going to take an opportunity to discuss my recovery plan and how I went from crying back to research in 10 seconds flat.

When your computer dies on you, the most immediate thing that should be on your mind is holding everything constant, <em>how do I get back to work?</em> It's tempting to throw a tantrum, shovel down some ice cream, and toss your books in the air, but that's not productive. And if you have a plan ahead of time before you have the pleasure of experiencing such a failure, then it's easy to bounce right back from the depths of misfortune.

So the first thing is equipment. If I physically can't use my laptop because the charger will no longer keep it running, what other machines to I have? I have another, even older laptop (which is what I'm using to write this blog entry) and I have my personal lab machine (my advisor likes it when I'm in the lab anyway). Even if I didn't have those, I have multiple server accounts on several machines that I'm affiliated with that I can remotely log into and work on. I have no shortage of machines to do work on - even if they are a little less comfortable than my regular machine. As long as you have a machine that you can access, it'll keep you productive while you wait for your replacement hardware to arrive, whether it's a power cord, a hard drive, or a new laptop.

The next issue is data? I'm not going to mention backups, because even I don't use backups. It's more about how much data you keep around that is readily accessible? Where can you get your data and immediately get back to work, not having to dig through old, forgotten folders? When it comes to schoolwork, I love suggesting <a href="http://dropbox.com">Dropbox</a>. It comes with its share of security issues and I would never use it for my actual research, but for doing projects and homework, it's not only an easy way to keep your data up-to-date on many machines, it's also a good way to share resources in group projects. <a href="http://one.ubuntu.com">Ubuntu One</a> is another good choice if you like to take leverage of Open Source Community.

These are very natural to the average consumer, but if you're a hardcore developer or a grad student, nothing beats installing a git or svn repository on a server that you have access to (like I said, I have four). My advisor won't let us use git on his machine, but what I do is put a private subversion repository on it, and tunnel it through ssh. Not only can I host a canonical backup on my advisor's machine, each machine that checks out a copy of the repo is also a backup that's up-to-date and in a ready-to-work state. If I didn't have to worry about data access control and patent issues, I could even mirror the repository across all of my servers.

Thanks to this setup, the only thing left to do was get my old laptop up to speed. I installed <a href="http://xubuntu.org">Xubuntu 11.10</a> on it and it runs fairly well, if a little slow (this machine <em>is</em> seven years old, after all). Afterwards, I install svn and check out the repository, and my homework is back and ready to go.

When a computer fails, it's easy to feel a little helpless, because responsibilities seem to get bigger and scarier and it feels like you've lost all control. The reason I like using Linux is that even though the hardware is out of my hands, I'm still able to fix the software with almost no frustrations. Linux is something I'm comfortable with, it's free, and most importantly, it's my responsibility. When something fails in Windows, it's too easy to give up and lose hope, but in Linux, even when the nuclear option of wiping and reinstalling is all I have left, I'm able to reassure myself that I've got everything under control.

And that was my weekend.
