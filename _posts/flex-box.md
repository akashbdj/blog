---
title: 'Learn CSS Flex Box'
excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus.'
date: '2020-02-16T05:35:07.322Z'
---





Unlike Grid, Flex box is 1D.

By default:

- The Main Axis is from Left -> Right and Cross Axis is Top -> Bottom.
    1. I'm one.
    2. I'm two.
- Items try to fit themselves in a single row. It means they don’t wrap themselves onto the next line even when there’s no space; they’ll shrink to minimum possible width. It doesn’t work even if you specify larger width. To wrap them onto the next line, you need to specify flex-wrap.
justify-content: distribute space between items along the Main Axis.

# Unordered list

* Item 1
* Item 2
* Item 3
    * Item 3a
    * Item 3b
    * Item 3c

# Ordered list

1. Step 1
2. Step 2
3. Step 3
    1. Step 3.1
    2. Step 3.2
    3. Step 3.3

# List in list

1. Step 1
2. Step 2
3. Step 3
    * Item 3a
    * Item 3b
    * Item 3c


Note: not just in-between items.

Default value is: flex-start Other options: space-between | center | space-around | flex-end

![Intro](/images/column.png "Intro of Flex Box")