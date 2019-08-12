# 数据结构和算法
学习算法非常重要，因为解决同样的问题，往往可以使用多种算法。对于高效程序员来 说，知道哪种算法效率最高非常重要。比如，现在至少有六七种排序算法，如果知道快速 排序比选择排序效率更高，那么就会让排序过程变得高效。又比如，实现一个线性查找的 算法很简单，但是如果知道有时二分查找可能比线性查找快两倍以上，那你势必会写出一个更好的程序。深入学习数据结构和算法，不仅可以知道哪种数据结构和算法更高效，还会知道如何找出最适合解决手头问题的数据结构和算法。

## 数据结构

最近，通过[这个youtube教程](https://www.youtube.com/watch?v=t2CEgPsws3U&t=5249s)学习了数据结构，教程用`js`实现了列表、栈、链表、队列、字典、散列、集合、树和图。

### List
**列表**是一组有序的数据。每个列表中的数据项称为元素。在 `JavaScript` 中，列表中的元素 可以是任意数据类型。列表中可以保存多少元素并没有事先限定，实际使用时元素的数量 受到程序内存的限制。

[实现一个列表类, 及其使用](https://codepen.io/webkws/pen/XvxoWw?editors=0012)

### Stacks
**栈**是一种特殊的列表，栈内的元素只能通过列表的一端访问，这一端称为栈顶。咖啡厅内 的一摞盘子是现实世界中常见的栈的例子。只能从最上面取盘子，盘子洗净后，也只能摞 在这一摞盘子的最上面。栈被称为一种后入先出(LIFO，last-in-first-out)的数据结构。
由于栈具有后入先出的特点，所以任何不在栈顶的元素都无法访问。为了得到栈底的元 素，必须先拿掉上面的元素。

[栈的实现](https://codepen.io/beaucarnes/pen/yMBGbR?editors=0012)

### Sets
**集合**是一种包含不同元素的数据结构。集合中的元素称为成员。集合的两个最重 要特性是:首先，集合中的成员是无序的;其次，集合中不允许相同成员存在

[Set类的实现](https://codepen.io/beaucarnes/pen/dvGeeq?editors=0012)

### Queues
**队列**的两种主要操作是:向队列中插入新元素和删除队列中的元素。插入操作也叫做入 队，删除操作也叫做出队。入队操作在队尾插入新元素，出队操作删除队头的元素

[队列和优先队列](https://codepen.io/beaucarnes/pen/QpaQRG?editors=0012)


### Binary Search Tree

**树**是一种非线性的数据结构，以分层的方式 存储数据。树被用来存储具有层级关系的数据，比如文件系统中的文件;树还被用来存储 有序列表。

[实现二叉查找树](https://codepen.io/beaucarnes/pen/ryKvEQ?editors=0011)

### Hash Tables 
散列是一种常用的数据存储技术，散列后的数据可以快速地插入或取用。散列使用的数据 结构叫做散列表。在散列表上插入、删除和取用数据都非常快，但是对于查找操作来说却 效率低下，比如查找一组数据中的最大值和最小值。这些操作得求助于其他数据结构，二 叉查找树就是一个很好的选择。

[HashTable类](https://codepen.io/beaucarnes/pen/VbYGMb?editors=0012)


### Linked List
数组不总是组织数据的最佳数据结构。在数组中，添加和删 除元素也很麻烦，因为需要将数组中的其他元素向前或向后平移，以反映数组刚刚进行了 添加或删除操作。如果需要随机访问，数组仍然是 更好的选择。

[设计一个基于对象的链表](https://codepen.io/beaucarnes/pen/ybOvBq?editors=0011)
以上实现较为繁琐，有个更简便的方式，增加了链表的查找
[链表简单版](https://codepen.io/webkws/pen/wVQZGq)
[双向链表](https://codepen.io/webkws/pen/wVQLaB?editors=1111)


### Trie
又称单词查找树，**Trie树**，是一种树形结构，是一种哈希树的变种。典型应用是用于统计，排序和保存大量的字符串（但不仅限于字符串），所以经常被搜索引擎系统用于文本词频统计。它的优点是：利用字符串的公共前缀来减少查询时间，最大限度地减少无谓的字符串比较，查询效率比哈希树高。

[单词查找树](https://codepen.io/beaucarnes/pen/mmBNBd?editors=0011)


### Heap (max and min) 
[介绍](https://www.jianshu.com/p/6b526aa481b1)

[地址](https://codepen.io/beaucarnes/pen/JNvENQ?editors=0010)


### Graphs
图形的实现方法很多

[地址](https://codepen.io/beaucarnes/pen/XgrXvw?editors=0012)


## 算法