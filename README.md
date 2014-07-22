---
tags: OO
languages: JavaScript
level: advanced
---

# Space Invaders
Space flight is no joke, and neither is this lab.  You're going to need to create two JS constructor's a `Ship` and `CrewMember`. These constructors will pump out instances that are instances that by default unable to act with one another.  A space ship will be inactive if it is created without a crew.  And a crew member by default will be hanging out in the Cantina looking for a ride if they were not put inside a ship when it is initialized.

This means that when a ship is created it needs to be aware of it's crew members, and their skills.  This will also require you to make sure a crew member becomes aware of their ship when they are added to it.

To run the specs follow these commands:
- first install the new gem to run the tests
  - `gem sources -a http://flatiron:33west26@gems.flatironschool.com`
  - `gem install jasmine-flatiron`
- to run in the command line run
  -  `jasmine-flatiron`
- to run in the browser
  - `jasmine-flatiron -b`