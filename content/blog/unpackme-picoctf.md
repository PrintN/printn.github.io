---
title: unpackme - PicoCTF Write-Up
date: 2024-10-12
authors:
  - name: PrintN
    link: https://github.com/PrintN
    image: https://github.com/PrintN.png
---
### Introduction
Hello! 👋 Today, we're going to take a look at the 'unpackme' challenge on PicoCTF by LT 'syreal' Jones. The difficulty level is medium."

### Challenge Description
Can you get the flag? 

Reverse engineer this [binary](https://artifacts.picoctf.net/c/205/unpackme-upx).

### Solution
So, let's make the binary executable using **chmod**.
```bash
chmod +x unpackme-upx
```

Now, let's try running the executable and see what it does.
```bash
┌──(printn㉿printn)-[~]
└─$ ./unpackme-upx 
What's my favorite number? 1
Sorry, that's not it!
```

From the first hint, we are asked what **UPX** is, and a quick search online gives us this:
**UPX is a free and open-source executable packer that compresses and reduces the size of executable files**

So let's unpack the binaray with **UPX**.
```bash
┌──(printn㉿printn)-[~]
└─$ upx -d unpackme-upx
                       Ultimate Packer for eXecutables
                          Copyright (C) 1996 - 2024
UPX 4.2.2       Markus Oberhumer, Laszlo Molnar & John Reiser    Jan 3rd 2024

        File size         Ratio      Format      Name
   --------------------   ------   -----------   -----------
   1006445 <-    379188   37.68%   linux/amd64   unpackme-upx

Unpacked 1 file.
```

We can now open it up in **Ghidra** and analyze it with the default settings. After it has analyzed we **Ghidra** finds the main function:
```c
undefined8 main(void)

{
  long in_FS_OFFSET;
  int local_44;
  char *local_40;
  undefined8 local_38;
  undefined8 local_30;
  undefined8 local_28;
  undefined4 local_20;
  undefined2 local_1c;
  long local_10;
  
  local_10 = *(long *)(in_FS_OFFSET + 0x28);
  local_38 = 0x4c75257240343a41;
  local_30 = 0x30623e306b6d4146;
  local_28 = 0x6865666430486637;
  local_20 = 0x36636433;
  local_1c = 0x4e;
  printf("What\'s my favorite number? ");
  __isoc99_scanf(&DAT_004b3020,&local_44);
  if (local_44 == 0xb83cb) {
    local_40 = (char *)rotate_encrypt(0,&local_38);
    fputs(local_40,(FILE *)stdout);
    putchar(10);
    free(local_40);
  }
  else {
    puts("Sorry, that\'s not it!");
  }
  if (local_10 != *(long *)(in_FS_OFFSET + 0x28)) {
                    /* WARNING: Subroutine does not return */
    __stack_chk_fail();
  }
  return 0;
}
```

We see that it checks if our input is the same as ```0xb83cb```, which is encrypted in base 16 (hexadecimal). Converting it to base 10, we get the number ```754635```.
```bash
┌──(printn㉿printn)-[~]
└─$ ./unpackme-upx
What's my favorite number? 754635
picoCTF{up><_m3_f7w_5769b54e}
```

And we get the flag 😃: ```picoCTF{up><_m3_f7w_5769b54e}```