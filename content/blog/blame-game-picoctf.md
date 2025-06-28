---
title: Blame Game - PicoCTF Write-Up
date: 2024-10-05
authors:
  - name: PrintN
    link: https://github.com/PrintN
    image: https://github.com/PrintN.png
---
### Introduction
Hello👋 Today we're going to take a look at the challenge Blame Game on PicoCTF by Jeffery John. The difficulty is easy.

### Challenge Description
Someone's commits seems to be preventing the program from working. Who is it? 

You can download the challenge files here:
- [challenge.zip](https://artifacts.picoctf.net/c_titan/158/challenge.zip)

### Solution
Let’s begin by extracting the contents of the downloaded ```.zip``` file and then navigate to the unzipped directory:
```bash
unzip challenge.zip
cd drop-in/
```

Inside this folder, we notice the presence of a ```.git``` directory, which indicates that Git version control has been initialized. 
```bash
┌──(printn㉿printn)-[~/Downloads/drop-in]
└─$ ls -la
total 16
drwxr-xr-x 3 printn printn 4096 Mar 11  2024 .
drwxr-xr-x 3 printn printn 4096 Oct  6 07:24 ..
drwxr-xr-x 8 printn printn 4096 Mar 11  2024 .git
-rw-r--r-- 1 printn printn   22 Mar 11  2024 message.py
```

The challenge description says that someone made a mistake in the code and we must find out who did it. To check all the changes made to the ```message.py``` file in every commit, we can use this command:
```bash
git log -p message.py  
```
This command provides the commit history along with patches, showing the modifications made to the specified file.
```bash
┌──(printn㉿printn)-[~/Downloads/drop-in]
└─$ git log -p message.py  
commit 8c83358c32daee3f8b597d2b853c1d1966b23f0a
Author: picoCTF{@sk_th3_1nt3rn_2c6bf174} <ops@picoctf.com>
Date:   Tue Mar 12 00:07:11 2024 +0000

    optimize file size of prod code

diff --git a/message.py b/message.py
index 7df869a..326544a 100644
--- a/message.py
+++ b/message.py
@@ -1 +1 @@
-print("Hello, World!")
+print("Hello, World!"

commit caa945839a2fc0fb52584b559b4e89ac7c46bf54
Author: picoCTF <ops@picoctf.com>
Date:   Tue Mar 12 00:07:11 2024 +0000

    create top secret project

diff --git a/message.py b/message.py
new file mode 100644
index 0000000..7df869a
--- /dev/null
+++ b/message.py
@@ -0,0 +1 @@
+print("Hello, World!")
```
Flag: ```picoCTF{@sk_th3_1nt3rn_2c6bf174}```