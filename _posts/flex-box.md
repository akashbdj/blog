---
title: 'Flex Box'
date: '2020-11-11T05:35:07.322Z'
---


Unlike Grid, Flex box is 1-Dimensional.

By default:
1. The Main Axis is from Left -> Right and Cross Axis is Top -> Bottom.
2. Items try to fit themselves in a single row. It means they don't wrap themselves onto the next line even when there's no space; they'll shrink to minimum possible width. It doesn't work even if you specify larger width. To wrap them onto the next line, you need to specify `flex-wrap`.  

**justify-content**: distribute space between items along the Main Axis. 

**Note**: not just in-between items.

Default value is: flex-start 
Other options: space-between | center | space-around | flex-end

![Intro](/images/flexbox/intro.png "Intro of Flex Box")
![Intro](/images/flexbox/row.png "Intro of Flex Box")
![Intro](/images/flexbox/row-reverse.png "Intro of Flex Box")
![Intro](/images/flexbox/column.png "Intro of Flex Box")
![Intro](/images/flexbox/column-reverse.png "Intro of Flex Box")