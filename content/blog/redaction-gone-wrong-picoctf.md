---
title: Redaction gone wrong - PicoCTF Write-Up
date: 2024-10-24
authors:
  - name: PrintN
    link: https://github.com/PrintN
    image: https://github.com/PrintN.png
---
### Introduction
Hello! 👋 Today, we're going to take a look at the 'Redaction gone wrong' challenge on PicoCTF by Mubarak Mikail. The difficulty level is medium.

### Challenge Description
Now you DON’T see me. This [report](https://artifacts.picoctf.net/c/84/Financial_Report_for_ABC_Labs.pdf) has some critical data in it, some of which have been redacted correctly, while some were not. Can you find an important key that was not redacted properly?

### Solution
Let's start by opening the provided PDF file. It looks like we have a financial report but there are some words that have been redacted. Based on the challenge description we know that there are some redacted words that were not redacted correctly.

Let's try to find some mis-redacted words by selecting all the text in the PDF file with **CTRL+A** and simply pasting it with **CTRL+V**.
```
Financial Report for ABC Labs, Kigali, Rwanda for the year 2021.
Breakdown - Just painted over in MS word.
Cost Benefit Analysis
Credit Debit
This is not the flag, keep looking
Expenses from the
picoCTF{C4n_Y0u_S33_m3_fully}
Redacted document.
```

And we find the flag: ```picoCTF{C4n_Y0u_S33_m3_fully}```