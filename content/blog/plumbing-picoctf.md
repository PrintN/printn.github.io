---
title: Plumbing - PicoCTF Write-Up
date: 2024-10-09
authors:
  - name: PrintN
    link: https://github.com/PrintN
    image: https://github.com/PrintN.png
---
Hello👋 Today we're going to take a look at the challenge Plumbing on PicoCTF by Alex Fulton & Danny Tunitis. The difficulty is medium.

### Challenge Description
Sometimes you need to handle process data outside of a file. Can you find a way to keep the output from this program and search for the flag? Connect to ```jupiter.challenges.picoctf.org 4427```.

### Solution
When we connect to ```jupiter.challenges.picoctf.org 4427``` we're given a bunch of lines saying this is not the flag.
```bash
┌──(printn㉿printn)-[~]
└─$ nc jupiter.challenges.picoctf.org 4427                  
Not a flag either
Not a flag either
Again, I really don't think this is a flag
Again, I really don't think this is a flag
This is defintely not a flag
I don't think this is a flag either
Not a flag either
Not a flag either
Not a flag either
Again, I really don't think this is a flag
I don't think this is a flag either
Not a flag either
This is defintely not a flag
Again, I really don't think this is a flag
Again, I really don't think this is a flag
Not a flag either
I don't think this is a flag either
Again, I really don't think this is a flag
Not a flag either
Not a flag either
I don't think this is a flag either
Not a flag either
This is defintely not a flag
Not a flag either
Not a flag either
This is defintely not a flag
```

I tried to find the flag by scrolling through the output but with no luck. Looking at the hints, they say that we must remember the flag format is ```picoCTF{XXXX}``` and that we can use [pipe](https://www.linfo.org/pipes.html).

We can filter out the output by using ```grep``` since we know that the flag always starts with ```picoCTF{```. So we should be able to find the flag by using the following command.
```bash
──(printn㉿printn)-[~]
└─$ nc jupiter.challenges.picoctf.org 4427 | grep "picoCTF{"
picoCTF{digital_plumb3r_5ea1fbd7}
```

And we get the flag 🥳