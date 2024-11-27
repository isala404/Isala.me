---
title: 'SVEX: Supercharging Markdown with Svelte Components'
description: 'Learn how to enhance your Markdown content with interactive Svelte components using SVEX - a powerful combination of Svelte and MDX.'
date: '2024-11-26'
author: 'Isala Piyarisi'
author_image: 'https://picsum.photos/200'
image: 'https://picsum.photos/1200/630'
genre: 'technical-guide'
read_time: '5 min'
slug: 'example'
keywords:
  - svex
  - markdown
  - svelte
  - mdx
published: true
---

<script>
	import Boinger from './Boinger.svelte';
	import Section from './Section.svx';
	import Count from './Count.svelte';
  import Seriously from './Seriously.svelte';

	let number = 45;
  let list = [1, 2, 3, 4, 'boo'];
  let color = 'cadetblue';
  let count = 25;
</script>

# { title }

## Good stuff in your markdown

Markdown is pretty good but sometimes you just need more.

Sometimes you need a boinger like this:

<Boinger color="{ color }"/>

Not many people have a boinger right in their markdown.

## Markdown in your markdown

Sometimes what you wrote last week is so good that you just _have_ to include it again.

I'm not gonna stand in the way of your egomania.

> <Section />
> <Count />
>
> — _Me, May 2019_

Yeah, thats right you can put wigdets in markdown (`.svx` files or otherwise). You can put markdown in widgets too.

<Seriously>

### I wasn't joking

```
	This is real life
```

</Seriously>

Sometimes you need your widgets **inlined** (like this:<Count count="{number}"/>) because why shouldn't you.
Obviously you have access to values defined in YAML (namespaced under `metadata`) and anything defined in an fenced `js exec` block can be referenced directly.

Normal markdown stuff works too:

| like  | this |
| ----- | ---- |
| table | here |

And _this_ and **THIS**. And other stuff. You can also use all your favorite Svelte features, like `each` blocks:

<ul>
{#each list as item}
  <li>{item}</li>
{/each}
</ul>

and all the other good Svelte stuff.

## Standard Markdown Examples

### Headers

# This is a Heading h1

## This is a Heading h2

### This is a Heading h3

#### This is a Heading h4

##### This is a Heading h5

###### This is a Heading h6

### Emphasis

_This text will be italic_  
_This will also be italic_

**This text will be bold**  
**This will also be bold**

_You **can** combine them_

### Lists

#### Unordered

- Item 1
- Item 2
- Item 2a
- Item 2b

#### Ordered

1. Item 1
2. Item 2
3. Item 3
   1. Item 3a
   2. Item 3b

### Images

![This is an alt text.](https://markdownlivepreview.com/image/sample.webp 'This is a sample image.')

### Links

You may be using [Markdown Live Preview](https://markdownlivepreview.com/).

### Blockquotes

> Markdown is a lightweight markup language with plain-text-formatting syntax, created in 2004 by John Gruber with Aaron Swartz.
>
> > Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.

### Code Blocks

```rust
// Define a struct to represent a person
struct Person {
    name: String,
    age: u32,
}

// Implement methods for Person
impl Person {
    // Constructor
    fn new(name: String, age: u32) -> Person {
        Person { name, age }
    }

    // Method to create birthday greeting
    fn birthday_greeting(&self) -> String {
        format!("Happy birthday {}! You are now {} years old!", self.name, self.age + 1)
    }
}
```
