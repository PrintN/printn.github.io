---
title: FactCheck - PicoCTF Write-Up
date: 2025-01-08
authors:
  - name: PrintN
    link: https://github.com/PrintN
    image: https://github.com/PrintN.png
tags:
  - CTF
  - PicoCTF
---
Hello 👋 Today we're going to take a look at the challenge FactCheck on PicoCTF by Junias Bonou. The difficulty is medium.

### Challenge Description
This binary is putting together some important piece of information... Can you uncover that information? Examine this [file](https://artifacts.picoctf.net/c_titan/186/bin). Do you understand its inner workings? 

### Solution
Let’s start by downloading the file.
```bash
wget https://artifacts.picoctf.net/c_titan/186/bin
```

Running `strings` on the file gives us a part of the flag.
```
picoCTF{wELF_d0N3_mate_
```

Hmmm, let's do some static analysis with Ghidra. Open the file up in Ghidra and analyze it with the default settings. After doing that we get the code of the main function. Here is the main part of the code.
```c++
  std::allocator<char>::allocator();
                    /* try { // try from 001012cf to 001012d3 has its CatchHandler @ 00101975 */
  std::__cxx11::basic_string<>::basic_string
            ((char *)local_248,(allocator *)"picoCTF{wELF_d0N3_mate_");
  std::allocator<char>::~allocator(&local_249);
  std::allocator<char>::allocator();
                    /* try { // try from 0010130a to 0010130e has its CatchHandler @ 00101996 */
  std::__cxx11::basic_string<>::basic_string((char *)local_228,(allocator *)&DAT_0010201d);
  std::allocator<char>::~allocator(&local_249);
  std::allocator<char>::allocator();
                    /* try { // try from 00101345 to 00101349 has its CatchHandler @ 001019b1 */
  std::__cxx11::basic_string<>::basic_string((char *)local_208,(allocator *)&DAT_0010201f);
  std::allocator<char>::~allocator(&local_249);
  std::allocator<char>::allocator();
                    /* try { // try from 00101380 to 00101384 has its CatchHandler @ 001019cc */
  std::__cxx11::basic_string<>::basic_string((char *)local_1e8,(allocator *)&DAT_00102021);
  std::allocator<char>::~allocator(&local_249);
  std::allocator<char>::allocator();
                    /* try { // try from 001013bb to 001013bf has its CatchHandler @ 001019e7 */
  std::__cxx11::basic_string<>::basic_string((char *)local_1c8,(allocator *)&DAT_0010201d);
  std::allocator<char>::~allocator(&local_249);
  std::allocator<char>::allocator();
                    /* try { // try from 001013f6 to 001013fa has its CatchHandler @ 00101a02 */
  std::__cxx11::basic_string<>::basic_string((char *)local_1a8,(allocator *)&DAT_00102023);
  std::allocator<char>::~allocator(&local_249);
  std::allocator<char>::allocator();
                    /* try { // try from 00101431 to 00101435 has its CatchHandler @ 00101a1d */
  std::__cxx11::basic_string<>::basic_string((char *)local_188,(allocator *)&DAT_00102025);
  std::allocator<char>::~allocator(&local_249);
  std::allocator<char>::allocator();
                    /* try { // try from 0010146c to 00101470 has its CatchHandler @ 00101a38 */
  std::__cxx11::basic_string<>::basic_string((char *)local_168,(allocator *)&DAT_00102027);
  std::allocator<char>::~allocator(&local_249);
  std::allocator<char>::allocator();
                    /* try { // try from 001014a7 to 001014ab has its CatchHandler @ 00101a53 */
  std::__cxx11::basic_string<>::basic_string((char *)local_148,(allocator *)&DAT_00102029);
  std::allocator<char>::~allocator(&local_249);
  std::allocator<char>::allocator();
                    /* try { // try from 001014e2 to 001014e6 has its CatchHandler @ 00101a6e */
  std::__cxx11::basic_string<>::basic_string((char *)local_128,(allocator *)&DAT_0010202b);
  std::allocator<char>::~allocator(&local_249);
  std::allocator<char>::allocator();
                    /* try { // try from 0010151d to 00101521 has its CatchHandler @ 00101a89 */
  std::__cxx11::basic_string<>::basic_string((char *)local_108,(allocator *)&DAT_0010202d);
  std::allocator<char>::~allocator(&local_249);
  std::allocator<char>::allocator();
                    /* try { // try from 00101558 to 0010155c has its CatchHandler @ 00101aa4 */
  std::__cxx11::basic_string<>::basic_string((char *)local_e8,(allocator *)&DAT_00102025);
  std::allocator<char>::~allocator(&local_249);
  std::allocator<char>::allocator();
                    /* try { // try from 00101593 to 00101597 has its CatchHandler @ 00101abf */
  std::__cxx11::basic_string<>::basic_string((char *)local_c8,(allocator *)&DAT_0010202f);
  std::allocator<char>::~allocator(&local_249);
  std::allocator<char>::allocator();
                    /* try { // try from 001015ce to 001015d2 has its CatchHandler @ 00101ada */
  std::__cxx11::basic_string<>::basic_string((char *)local_a8,(allocator *)&DAT_00102031);
  std::allocator<char>::~allocator(&local_249);
  std::allocator<char>::allocator();
                    /* try { // try from 00101606 to 0010160a has its CatchHandler @ 00101af5 */
  std::__cxx11::basic_string<>::basic_string((char *)local_88,(allocator *)&DAT_00102033);
  std::allocator<char>::~allocator(&local_249);
  std::allocator<char>::allocator();
                    /* try { // try from 0010163e to 00101642 has its CatchHandler @ 00101b0d */
  std::__cxx11::basic_string<>::basic_string((char *)local_68,(allocator *)&DAT_0010201d);
  std::allocator<char>::~allocator(&local_249);
  std::allocator<char>::allocator();
                    /* try { // try from 00101676 to 0010167a has its CatchHandler @ 00101b25 */
  std::__cxx11::basic_string<>::basic_string((char *)local_48,(allocator *)&DAT_00102033);
  std::allocator<char>::~allocator(&local_249);
                    /* try { // try from 00101699 to 0010185f has its CatchHandler @ 00101b3d */
  pcVar2 = (char *)std::__cxx11::basic_string<>::operator[]((ulong)local_208);
  if (*pcVar2 < 'B') {
    std::__cxx11::basic_string<>::operator+=(local_248,local_c8);
  }
  pcVar2 = (char *)std::__cxx11::basic_string<>::operator[]((ulong)local_a8);
  if (*pcVar2 != 'A') {
    std::__cxx11::basic_string<>::operator+=(local_248,local_68);
  }
  pcVar2 = (char *)std::__cxx11::basic_string<>::operator[]((ulong)local_1c8);
  cVar1 = *pcVar2;
  pcVar2 = (char *)std::__cxx11::basic_string<>::operator[]((ulong)local_148);
  if ((int)cVar1 - (int)*pcVar2 == 3) {
    std::__cxx11::basic_string<>::operator+=(local_248,local_1c8);
  }
  std::__cxx11::basic_string<>::operator+=(local_248,local_1e8);
  std::__cxx11::basic_string<>::operator+=(local_248,local_188);
  pcVar2 = (char *)std::__cxx11::basic_string<>::operator[]((ulong)local_168);
  if (*pcVar2 == 'G') {
    std::__cxx11::basic_string<>::operator+=(local_248,local_168);
  }

```
We can see that it first gives us the first part of the flag. Let's start by changing the variable names for all the basic string functions to the character they each represent. We can do that by double-clicking on the `&DAT_`, and it will show us the character, and then just simply rename the variable name. Once done, it should look something like this. 

{{< callout type="info" >}}
  Each flag is unique, so your characters will be different from mine
{{< /callout >}}

```c++
  std::allocator<char>::allocator();
                    /* try { // try from 001012cf to 001012d3 has its CatchHandler @ 00101975 */
  std::__cxx11::basic_string<>::basic_string
            ((char *)local_248,(allocator *)"picoCTF{wELF_d0N3_mate_");
  std::allocator<char>::~allocator(&local_249);
  std::allocator<char>::allocator();
                    /* try { // try from 0010130a to 0010130e has its CatchHandler @ 00101996 */
  std::__cxx11::basic_string<>::basic_string((char *)char_3,(allocator *)&DAT_0010201d);
  std::allocator<char>::~allocator(&local_249);
  std::allocator<char>::allocator();
                    /* try { // try from 00101345 to 00101349 has its CatchHandler @ 001019b1 */
  std::__cxx11::basic_string<>::basic_string((char *)char_5,(allocator *)&DAT_0010201f);
  std::allocator<char>::~allocator(&local_249);
  std::allocator<char>::allocator();
                    /* try { // try from 00101380 to 00101384 has its CatchHandler @ 001019cc */
  std::__cxx11::basic_string<>::basic_string((char *)char_9,(allocator *)&DAT_00102021);
  std::allocator<char>::~allocator(&local_249);
  std::allocator<char>::allocator();
                    /* try { // try from 001013bb to 001013bf has its CatchHandler @ 001019e7 */
  std::__cxx11::basic_string<>::basic_string((char *)char2_3,(allocator *)&DAT_0010201d);
  std::allocator<char>::~allocator(&local_249);
  std::allocator<char>::allocator();
                    /* try { // try from 001013f6 to 001013fa has its CatchHandler @ 00101a02 */
  std::__cxx11::basic_string<>::basic_string((char *)char_4,(allocator *)&DAT_00102023);
  std::allocator<char>::~allocator(&local_249);
  std::allocator<char>::allocator();
                    /* try { // try from 00101431 to 00101435 has its CatchHandler @ 00101a1d */
  std::__cxx11::basic_string<>::basic_string((char *)char_b,(allocator *)&DAT_00102025);
  std::allocator<char>::~allocator(&local_249);
  std::allocator<char>::allocator();
                    /* try { // try from 0010146c to 00101470 has its CatchHandler @ 00101a38 */
  std::__cxx11::basic_string<>::basic_string((char *)char_a,(allocator *)&DAT_00102027);
  std::allocator<char>::~allocator(&local_249);
  std::allocator<char>::allocator();
                    /* try { // try from 001014a7 to 001014ab has its CatchHandler @ 00101a53 */
  std::__cxx11::basic_string<>::basic_string((char *)char_e,(allocator *)&DAT_00102029);
  std::allocator<char>::~allocator(&local_249);
  std::allocator<char>::allocator();
                    /* try { // try from 001014e2 to 001014e6 has its CatchHandler @ 00101a6e */
  std::__cxx11::basic_string<>::basic_string((char *)char_f,(allocator *)&DAT_0010202b);
  std::allocator<char>::~allocator(&local_249);
  std::allocator<char>::allocator();
                    /* try { // try from 0010151d to 00101521 has its CatchHandler @ 00101a89 */
  std::__cxx11::basic_string<>::basic_string((char *)char_d,(allocator *)&DAT_0010202d);
  std::allocator<char>::~allocator(&local_249);
  std::allocator<char>::allocator();
                    /* try { // try from 00101558 to 0010155c has its CatchHandler @ 00101aa4 */
  std::__cxx11::basic_string<>::basic_string((char *)char2_b,(allocator *)&DAT_00102025);
  std::allocator<char>::~allocator(&local_249);
  std::allocator<char>::allocator();
                    /* try { // try from 00101593 to 00101597 has its CatchHandler @ 00101abf */
  std::__cxx11::basic_string<>::basic_string((char *)char_2,(allocator *)&DAT_0010202f);
  std::allocator<char>::~allocator(&local_249);
  std::allocator<char>::allocator();
                    /* try { // try from 001015ce to 001015d2 has its CatchHandler @ 00101ada */
  std::__cxx11::basic_string<>::basic_string((char *)char_6,(allocator *)&DAT_00102031);
  std::allocator<char>::~allocator(&local_249);
  std::allocator<char>::allocator();
                    /* try { // try from 00101606 to 0010160a has its CatchHandler @ 00101af5 */
  std::__cxx11::basic_string<>::basic_string((char *)char_8,(allocator *)&DAT_00102033);
  std::allocator<char>::~allocator(&local_249);
  std::allocator<char>::allocator();
                    /* try { // try from 0010163e to 00101642 has its CatchHandler @ 00101b0d */
  std::__cxx11::basic_string<>::basic_string((char *)char3_3,(allocator *)&DAT_0010201d);
  std::allocator<char>::~allocator(&local_249);
  std::allocator<char>::allocator();
                    /* try { // try from 00101676 to 0010167a has its CatchHandler @ 00101b25 */
  std::__cxx11::basic_string<>::basic_string((char *)char2_8,(allocator *)&DAT_00102033);
  std::allocator<char>::~allocator(&local_249);
                    /* try { // try from 00101699 to 0010185f has its CatchHandler @ 00101b3d */
  pcVar2 = (char *)std::__cxx11::basic_string<>::operator[]((ulong)char_5);
  if (*pcVar2 < 'B') {
    std::__cxx11::basic_string<>::operator+=(local_248,char_2);
  }
  pcVar2 = (char *)std::__cxx11::basic_string<>::operator[]((ulong)char_6);
  if (*pcVar2 != 'A') {
    std::__cxx11::basic_string<>::operator+=(local_248,char3_3);
  }
  pcVar2 = (char *)std::__cxx11::basic_string<>::operator[]((ulong)char2_3);
  cVar1 = *pcVar2;
  pcVar2 = (char *)std::__cxx11::basic_string<>::operator[]((ulong)char_e);
  if ((int)cVar1 - (int)*pcVar2 == 3) {
    std::__cxx11::basic_string<>::operator+=(local_248,char2_3);
  }
  std::__cxx11::basic_string<>::operator+=(local_248,char_9);
  std::__cxx11::basic_string<>::operator+=(local_248,char_b);
  pcVar2 = (char *)std::__cxx11::basic_string<>::operator[]((ulong)char_a);
  if (*pcVar2 == 'G') {
    std::__cxx11::basic_string<>::operator+=(local_248,char_a);
  }
  std::__cxx11::basic_string<>::operator+=(local_248,char_4);
  std::__cxx11::basic_string<>::operator+=(local_248,char_8);
  std::__cxx11::basic_string<>::operator+=(local_248,char_3);
  std::__cxx11::basic_string<>::operator+=(local_248,char_f);
  std::__cxx11::basic_string<>::operator+=(local_248,'}');
  std::__cxx11::basic_string<>::~basic_string(char2_8);
  std::__cxx11::basic_string<>::~basic_string((basic_string<> *)char3_3);
  std::__cxx11::basic_string<>::~basic_string((basic_string<> *)char_8);
  std::__cxx11::basic_string<>::~basic_string(char_6);
  std::__cxx11::basic_string<>::~basic_string((basic_string<> *)char_2);
  std::__cxx11::basic_string<>::~basic_string(char2_b);
  std::__cxx11::basic_string<>::~basic_string(char_d);
  std::__cxx11::basic_string<>::~basic_string((basic_string<> *)char_f);
  std::__cxx11::basic_string<>::~basic_string(char_e);
  std::__cxx11::basic_string<>::~basic_string((basic_string<> *)char_a);
  std::__cxx11::basic_string<>::~basic_string((basic_string<> *)char_b);
  std::__cxx11::basic_string<>::~basic_string((basic_string<> *)char_4);
  std::__cxx11::basic_string<>::~basic_string((basic_string<> *)char2_3);
  std::__cxx11::basic_string<>::~basic_string((basic_string<> *)char_9);
  std::__cxx11::basic_string<>::~basic_string(char_5);
  std::__cxx11::basic_string<>::~basic_string((basic_string<> *)char_3);
  std::__cxx11::basic_string<>::~basic_string(local_248);
```
Now we can start assembling our flag! First it checks if the ASCII value of 5 is smaller than the ASCII value of B, which is true, as you can see in this [ASCII table](https://www.ascii-code.net/), so let's append 2 to the flag.
```c++
  pcVar2 = (char *)std::__cxx11::basic_string<>::operator[]((ulong)char_5);
  if (*pcVar2 < 'B') {
    std::__cxx11::basic_string<>::operator+=(local_248,char_2);
  }
```
Next up it checks if 6 is not equal to A, and that is true, so we can append 3 to the flag.
```c++
  pcVar2 = (char *)std::__cxx11::basic_string<>::operator[]((ulong)char_6);
  if (*pcVar2 != 'A') {
    std::__cxx11::basic_string<>::operator+=(local_248,char3_3);
  }
```
Next it checks if the ASCII value of 3 - ASCII value of e = ASCII value of 3, which it's not, as 51 - 101 = 50, so we don't append 3 to the flag.
```c++
  pcVar2 = (char *)std::__cxx11::basic_string<>::operator[]((ulong)char2_3);
  cVar1 = *pcVar2;
  pcVar2 = (char *)std::__cxx11::basic_string<>::operator[]((ulong)char_e);
  if ((int)cVar1 - (int)*pcVar2 == 3) {
    std::__cxx11::basic_string<>::operator+=(local_248,char2_3);
  }
```
Next it just adds the characters 9 and b without any checks, and then it checks if ASCII value of a is the same as the ASCII value of G, which it isn't, so we don't append anything to the flag.
```c++
  std::__cxx11::basic_string<>::operator+=(local_248,char_9);
  std::__cxx11::basic_string<>::operator+=(local_248,char_b);
  pcVar2 = (char *)std::__cxx11::basic_string<>::operator[]((ulong)char_a);
  if (*pcVar2 == 'G') {
    std::__cxx11::basic_string<>::operator+=(local_248,char_a);
  }
```
And lastly, it just appends the last characters to the flag without any checks.
```c++
  std::__cxx11::basic_string<>::operator+=(local_248,char_4);
  std::__cxx11::basic_string<>::operator+=(local_248,char_8);
  std::__cxx11::basic_string<>::operator+=(local_248,char_3);
  std::__cxx11::basic_string<>::operator+=(local_248,char_f);
  std::__cxx11::basic_string<>::operator+=(local_248,'}');
```
And I end up with this flag, which will be a bit different from yours.

Flag: ```picoCTF{wELF_d0N3_mate_239b483f}```