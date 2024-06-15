---
layout: post
title: Intersection observer api
description: The Intersection Observer API provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document’s viewport..
date: 2021-07-01 08:02:44 -0800
tags: JS
---

# Intersection observer api

Modern web applications use a lot of animations and media ranging from images, gif, videos to SVG’s to make user experience elegant and engaging. If not handled properly, it can hamper your website’s performance, and these things might not work in your favour. To overcome this issue of over-fetching resources, we need to handle the media on our website more sincerely and display them only when necessary, the jargon for which is lazy loading.

Native observers empower your JavaScript to subscribe to events like the alteration of the DOM, an elements position in relation to the viewport and even the resizing of individual elements. Each observer follows a similar pattern to construct and they offload complicated and sometimes tightly coupled functionality to the browser.

In this post, I’ll talk about the intersection and observation process and how they relate to the threshold and browser viewport.. To explain our intersection observer, we will implement a *lazy loading* using Intersection observer in react.

## Get the images by url

At this point we're going to do a little cheating, since if we were using a conventional REST API, we should get the list of photos and then get the resource associated with the image sprites of each photo. All the sprites are under the same URL:

```
export default async function fetchPhotos () {
    return await Array.apply(null, { length: 150 })
        .map((item, index) => {
            return {
                id: index + 1,
                sprite: `https://picsum.photos/200/300?random=${index}`
            }
        })
}
```

## Implementing the Intersection Observer in a gallery of photos

The goal I want to achieve is to avoid loading images that appear below the viewport but, at the same time, to achieve a fluid user experience so that you do not notice that you are doing this downloading of images in delay.The intersection observer allows you to watch when an element intersects with the viewport.
An intersection observer follows the following pattern to set up: we need to define our observer and a callback function to fire when our conditions are met:

```
const observer = new IntersectionObserver(intersectionCallback);
```

The fields of options object are as follows:

- **root:** The element that is used as the viewport for checking the visibility of the target. If the value is provided as null or not specified, then it will take the browser’s viewport.
- **rootMargin:** This set of values serves to grow or shrink each side of the root element's bounding box before computing intersections. It accepts values in a similar fashion as CSS e.g. "5px 10px 5px 10px".
- **threshold:** Either a single number or an array of numbers which indicate at what percentage of the target's visibility, the observer's callback should be executed. Its value ranges from 0 to 1.0, where 0 symbolises that one pixel is visible and 1.0 means every pixel is visible in the viewport.

Now we will select all target elements and observe them.

`observer.observe(document.querySelector(‘.yourElement’));`

Finally our callback, which we called `lazyLoadImage` above.

```
export default function lazyLoadImage(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      entry.target.src = entry.target.dataset.src;
    }
  });
}
```

In this callback, we say “Hey - intersectionObserver, every time one of our image containers hits the viewport (`isIntersecting` ), load the image (`entry.target.src = entry.target.dataset.src;`)”. And that’s it - no more fragile viewport calculations.

While lazy loading images is an immediate choice, it can be useful in all sorts of applications like flyouts and triggered animations.

[Github](https://github.com/jaumeCloquellCapo/react-intersection-observer)