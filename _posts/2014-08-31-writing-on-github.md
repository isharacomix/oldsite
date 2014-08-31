---
layout: post
title: Writing on Github
tags: blog
---

This weekend I finished writing my paper for [SIGCSE][]. One of the most spectacular parts about it is that I wrote the entire paper on Github! I really do love Github as a cloud solution for project management, and I wanted to talk just a bit about my flow for making it work.

Organization
------------
My research repository (which is a private repo) is divided into three main folders: code, papers, and resources. Code is the live version of the source code I'm currently using to do research, mostly related to cleaning data. I try to keep this code up to date as much as possible so that I can share it with my colleagues. Resources include things that I keep for convenient references, such as LaTeX templates for conferences. However, the folder that got the most love this weekend was my Papers folder.

In the papers folder, every conference has its own folder and each paper has its own folder in there, usually with a pithy filename that quickly articulates what the paper is about. The key feature is that the main drafting copy of the conference paper is in a file called "README.md". The reason for this is that whenever you're looking at a folder on Github's website, **the text of README.md appears underneath the file listing**. This means that in order to read my current draft of a paper, I just have to visit its folder on Github. More importantly, the main draft of the Github paper is written in Markdown so that the writing process is focusing on content, and not formatting. The other files in the folder are things such as my figures, data spreadsheets, and the LaTeX files for the camera-ready copy. But the README.md is the main paper, and I'm so proud of myself for keeping it that way.

However, Github is more than the files. We also have the **wiki** and the **issue tracker**.

The Wiki
--------
Github doesn't have any subdirectory functionality for its wikis, so I make do with different "conceptual" kinds of pages that exist. The most important part of the wiki is the paper database. I try to read a paper every day and include my stream of consciousness for that paper in the wiki. I include important metadata such as the abstract, the bibtex citation, and the list of references, and the stream of consciousness is divided into two levels, one level where I reflect solely on the paper, and another that represents the voice in my head talking about how I might extend the results for my own research. I make heavy use of **bolding** to bring out what look like the key points, and I've found that thanks to this wiki, **it is much easier for me to go back and find papers for myself and for my colleagues** than with any other citation manager I've used.

Another big part of my wiki is my daily journal where I document what I do each day. Each week has its own page, and I begin the page with a bulleted list of that day's accomplishments, followed by my diary entry for the day. These have been wonderful since it gives me an easy way to prepare for my progress reports at lab meetings, since I just go through the accomplishments and remind myself what I've managed to get done!

Finally, I keep pages on important themes in my research, which are like meta projects. Each theme page contains a paragraph as to what the theme is, and all of the papers that I've found that are related to that theme so that I can bring it up and justify it in any paper I need to. This is important for me so that I can tie every paper I write under some umbrella that brings it back to why I'm doing research in the first place.

There's only one drawback to the whole Wiki thing... you can't search your wiki on Github. You have to use API tools or download your wiki and grep it locally for the files you need. However, I'm super comfortable with the command line, so I happily make use of that anyway.

The Issue Tracker
-----------------
Lots of the stuff on Github can be downloaded and worked on locally, but the issue tracker is where project management really comes together for Github. I make judicious use of issues both as a To-do list and as a ribbon on my finger as it were to not forget to pursue things when I have spare time. I have a lot of colored tags that include things such as papers in progress, cool ideas, and pure "TODO" items that need to be taken care of.

It's really cool that you can link commits to issues. Every paper has a root issue associated with it, so that means I can reference any paper in a commit message (added methods section to paper #23). When I look at my root issue's conversation log, I can see all of the action that's taken place. If I want, I could also divide the paper up into multiple issues and close them individually as their problems are resolved. When I start using Github to collaborate on papers rather than simply writing them on my own, this might be done more frequently.

Every conference deadline that I care about is represented as a Milestone in Github's issue tracker, and papers and issues are connected to these milestones. Once all of the issues are closed for a conference deadline, it means that it's time to submit the paper!

The Website
-----------
The best part about Github repos are that every repo can eventually be a website! All you need a gh-pages branch and you can publicize the things that make that repo interesting. I really am looking forward to starting my own research lab and bringing us all together under a Github organization so that we can have a workflow that focuses on collaboration, delegation, and (most importantly) opening up our results to the world. An organization can have an unlimited number of public projects for free, meaning that if my lab makes any software, there is an incentive to make it public so that we can keep our paper writing private, at least for a short time.

I've not been blogging much because I've made a decision to get my life organized before trying to show it off to the world, and I'm very proud of where I'm going with my research right now. I see a dissertation in my near future, which means that the Grad Blog has almost fulfilled its purpose. Before I graduate, I want a new website that focuses on the important things and displaying them the right way.

[SIGCSE]: http://sigcse2015.sigcse.org/
