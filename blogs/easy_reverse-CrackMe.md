---
title: easy_reverse - CrackMes Walkthrough
pubDate: 07/08/2024
description: A walkthrough of "easy_reverse" on CrackMes.
author: PrintN
tags: CrackMes,Reverse Engineering,Walkthrough
---
### Hello 👋 Today we are going to reverse engineer "easy_reverse" from cbm-hackers.
**NOTE:** Please try to solve this challenge by yourself first before looking at the solution. If you have tried your best and can't solve it then please don't just take the answer and leave immediately because that is not how you learn reverse engineering. 

## Prerequisites:
1. Ghidra
2. easy_reverse executable (unzip with password "crackmes.one")

## What does it do?
So the program is very simple it just asks us to provide a password when running it.

<img src="https://github.com/user-attachments/assets/d806516a-6bf1-48fc-b0c8-a0c43cde6a8c" />

## Decompiling with Ghidra
Now we will just open it up in Ghidra and analyze it, we'll only enable the "Decompiler Parameter ID" and let the rest be on default.

<img src="https://github.com/user-attachments/assets/c4736a9f-e8de-4e40-a367-ffa7c4d529e4" />

Once analyzed the main function should automatically pop up in the Decompiled window, if it hasn't you can find it manually by going to the symbol tree and search for it.

<img src="https://github.com/user-attachments/assets/821d3b76-0097-45c9-9e24-1cc7ed3fbcc6" />

Now we can take a look at the code.
   
```
undefined8 main(int param_1,undefined8 *param_2)

{
  size_t sVar1;

  if (param_1 == 2) {
    sVar1 = strlen((char *)param_2[1]);
    if (sVar1 == 10) {
      if (*(char *)(param_2[1] + 4) == '@') {
        puts("Nice Job!!");
        printf("flag{%s}\n",param_2[1]);
      }
      else {
        usage(*param_2);
      }
    }
    else {
      usage(*param_2);
    }
  }
  else {
    usage(*param_2);
  }
  return 0;
}
```
## Analyzing The Code
We see that it checks if our input (param_1) meets the correct conditions. So this should be pretty straight forward 😀 

First it checks if our input is 10 characters long.
```
if (sVar1 == 10) {
```
If our input is 10 characters long, it then checks if the 5th character in our input is a '@' if it is we get the flag. 
```
if (*(char *)(param_2[1] + 4) == '@') {
  puts("Nice Job!!");
  printf("flag{%s}\n",param_2[1]);
}
```

## Running it with the correct password
So now we can construct a password that meets the correct conditions.

<img src="https://github.com/user-attachments/assets/2d4a5d95-85d2-4d8f-8d17-4120968b9e28" />

It works! I hope you learned something new, don't forget to check me out on [Youtube](https://youtube.com/@PrintN42) where I have some great videos.
