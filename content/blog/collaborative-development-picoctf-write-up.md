---
title: Collaborative Development - PicoCTF Write-Up
date: 2024-11-07
authors:
  - name: PrintN
    link: https://github.com/PrintN
    image: https://github.com/PrintN.png
tags:
  - CTF
  - PicoCTF
---
Today we're going to take a look at the challenge Collaborative Development on PicoCTF by Jeffery John. The difficulty is easy.

### Challenge Description
My team has been working very hard on new features for our flag printing program! I wonder how they'll work together? You can download the challenge files here:
- [challenge.zip](https://artifacts.picoctf.net/c_titan/178/challenge.zip)

### Solution
Let’s begin by extracting the contents of the downloaded `.zip` file and then navigate to the unzipped directory:
```bash
unzip challenge.zip
cd drop-in/
```

Inside this folder, we notice the presence of a `.git` directory, which indicates that Git version control has been initialized. 
```bash
┌──(printn㉿kali)-[~/drop-in]
└─$ ls -la
total 16
drwxr-xr-x  3 printn printn 4096 Mar 11  2024 .
drwx------ 14 printn printn 4096 Nov  7 11:40 ..
drwxr-xr-x  8 printn printn 4096 Mar 11  2024 .git
-rw-r--r--  1 printn printn   30 Mar 11  2024 flag.py
```

Let's try running the `flag.py` and see what we get.
```bash
┌──(printn㉿kali)-[~/drop-in]
└─$ python3 flag.py 
Printing the flag...
                      
```

Hmmm, seems like something may be hidden or unfinished. We can try checking if there are other branches with different code.
```bash
┌──(printn㉿kali)-[~/drop-in]
└─$ git branch -a                                                                                                  
  feature/part-1
  feature/part-2
  feature/part-3
* main
```

Let's switch to the `feature/part-1` branch.
```bash
┌──(printn㉿kali)-[~/drop-in]
└─$ git checkout feature/part-1
Switched to branch 'feature/part-1'
                                                                                                                           
┌──(printn㉿kali)-[~/drop-in]
└─$ ls -la
total 16
drwxr-xr-x  3 printn printn 4096 Nov  7 11:46 .
drwx------ 14 printn printn 4096 Nov  7 11:40 ..
drwxr-xr-x  8 printn printn 4096 Nov  7 11:46 .git
-rw-rw-r--  1 printn printn   64 Nov  7 11:46 flag.py
                                                                                                                           
┌──(printn㉿kali)-[~/drop-in]
└─$ python3 flag.py
Printing the flag...
picoCTF{t3@mw0rk_
```

Great! Now we have the first part of the flag. Instead of manually checking out each branch and assembling the flag, we can use the following command:
```bash
┌──(printn㉿kali)-[~/drop-in]
└─$ git checkout feature/part-1 && cat flag.py && git checkout feature/part-2 && cat flag.py && git checkout feature/part-3&& cat flag.py
Switched to branch 'feature/part-1'
print("Printing the flag...")
print("picoCTF{t3@mw0rk_", end='')Switched to branch 'feature/part-2'
print("Printing the flag...")

print("m@k3s_th3_dr3@m_", end='')Switched to branch 'feature/part-3'
print("Printing the flag...")

print("w0rk_6c06cec1}")
```

Flag: ```picoCTF{t3@mw0rk_m@k3s_th3_dr3@m_w0rk_6c06cec1}```