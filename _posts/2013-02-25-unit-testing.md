---
layout: post
title: Unit Testing
tags: blog
---

So I teach the lab segment of Software Engineering, a Junior-level course for Computer Science majors, and the entire course is basically divided into a lecture about software engineering theory (test-driven development, requirements engineering, and security) and a semester-long, persistent course project called iTrust.

iTrust is a software-as-a-service hospital management application that has a lot of very authentic teaching qualities to speak of: it's a large codebase (no real programmer will ever start with a blank slate), it's full of bugs (from previous semesters), and it has to comply with inane regulations set forth by the powers that be (namely HIPPA). This makes it a great project... in theory.

After the NCSULUG Hack Day, I started building a Unit-testing framework for #8bitmooc, and I was thinking to myself, "man, Python is so easy even making HTTPtests is a breeze... I don't have to go and click on buttons or anything - I just have to enter the URLS!"

That's when it hit me: the thing that's awesome about #8bitmooc (and Rails/Django apps in general) isn't only that they practically enforce Model-View-Controller design... but that they also make it stupid-easy to develop RESTful applications. iTrust is far from RESTful, and this is where I think our Software Engineering class ends up falling short.

Despite the theoretical content being up to date, the technical content is years out of date and out of line with what students have learned up until that point. We do learn about SQL (skipping over the Relational Database theory), but we don't actually learn about the heart of MVC, SaaS, DRY, or RESTfulness. The hardest work for me as a TA is dealing with keeping out-of-date projects working with the current code base.

How do we improve iTrust?

 * Switch to Git and grade pull requests rather than entire iTrust installations.
 * Upgrade to newer versions of URL dispatchers and languages (we're still on Java 5 and Tomcat 6)
 * Use Rails or Django instead of Java - it's good to learn different languages.

