---
title: What is the difference between a hard link and a symbolic link?
date: "2020-02-03T06:53:32.169Z"
description: Let's talk about symbolic links...
---

![Linux](./linux.png)

> [A symbolic or soft link is an actual link to the original file, whereas a hard link is a mirror copy of the original file. If you delete the original file, the soft link has no value, because it points to a non-existent file. But in the case of hard link, it is entirely opposite. Even if you delete the original file, the hard link will still has the data of the original file. Because hard link acts as a mirror copy of the original file](https://ostechnix.com/explaining-soft-link-and-hard-link-in-linux-with-examples/)

## An accurate summary:

### Soft link

- Can cross the file system
- Allows linking between directories
- Has different inode number and file permissions than original file
- Permissions can’t be updated
- Can only have the path of the original file, not the contents

---

### Hard link

- Can’t cross the file system boundaries (i.e. A hardlink can only work on the same filesystem)
- Can’t link directories
- Has the same inode number and permissions of original file
- Permissions will be updated if we change the permissions of source file,
- Has the actual contents of original file, so that you still can view the contents, even if the original file moved or removed

### Let’s give some examples for a better understanding of the difference between a hard link and a soft link.

**Creating Soft Link or Symbolic Link**

Soft links are created with the ln command. For example, the following would create a soft link named link_1 to the file_1, both in the current directory

```bash
ln -s file_1 link_1
```

To verify new soft link run:

```bash
ls -l file_1 link_1
```

Let’s create a folder called “example_test”:

```bash
mkdir example_test && cd example_test
```

Create a new file called example.data with something in it:

```bash
echo "Welcome to my blog
```

Now create a symbolic or soft link to the example.data:

```bash
ln -s example.data softlink.data
```

As you see they both share the same information, however the [inodes](https://www.howtogeek.com/465350/everything-you-ever-wanted-to-know-about-inodes-on-linux/) and [permissions](http://linuxcommand.org/lc3_lts0090.php) are different (to test this try running `ls -lia` command... I'll give you a [hint](https://detailed.wordpress.com/2017/10/28/understanding-ls-command-output/) the `-i`flag stands for inode)

If we remove the original file the shortcut is useless, but if you remove the soft link, the original file will still be available.

**Creating Hard Link**

The syntax is as follows for Unix / Linux hard link command:

```bash
ln {source} {link}
ln /path/to/source /path/to/link
ln target link
ln target directory
```

Where, **source** is an existing file and **link** is the file to create (a hard link).

Let us create the hard link to the example.data:

```bash
ln example.data hardlink.data
```

Try running the `ls -lia` command one more time. As you see they both have the same data, and the inodes and permissions are just the same.

It doens't matter if I delete the source file, I can view contents of the hardlink.data file because, the Hard link shares the inode number, the permissions and data of the original file.
