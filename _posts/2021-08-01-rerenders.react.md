---
layout: post
title: Prevent re-renders on React
description: Approaches can help optimize and reduce unuseful re-renders in ReactJS components.
date: 2021-07-01 08:02:44 -0800
tags: JS
---

# Prevent re-renders on React

In most cases, React performance is not something you need to worry about. The core library does a ton of work under the hood to make sure everything is rendering efficiently. However, occasionally you can run into scenarios where your components are rendering more often than they need to and slowing your site down.

To understand why hooks need to remember (memoize), we need to understand the motivation behind memoization in React. [Memoization](https://en.wikipedia.org/wiki/Memoization) in programming is a computation strategy where functions remember the output of their previous execution, then uses it as a factor for the next computation. Usually, the function would try to run for each computation in a range of data but instead, it runs only once for the next range then factors the previous result.

In this article, I’ll demonstrate with a few simple examples why we need these hooks and when and how to use them. This is not an introduction to hooks, and you must be familiar with the [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook to follow.

# Case Study

Before we start, let’s introduce a helper button component. We’ll use [React.memo](https://reactjs.org/docs/react-api.html#reactmemo) to turn it into a memoized component. This will force React to never re-render it, unless some of its properties change. We’ll also add a random colour as its background so we can track when it re-rerenders:

[https://codesandbox.io/embed/charming-night-6d34n?fontsize=14&amp;hidenavigation=1&amp;theme=dark](https://codesandbox.io/embed/charming-night-6d34n?fontsize=14&amp;hidenavigation=1&amp;theme=dark)

Now let’s look at the following simple app. It displays 2 numbers - a counter `Beta` and a `delta`. One button allows the user to increment `delta` by 1. A second button, allows the user to increment the counter by adding `delta` to it

In this example, any changes to data will cause `*App*` to re-render all of it's child components, including the `Button` component, even if title didn't change. . In this case it's probably not a big deal, but if `*<Button/>*` was performing some expensive computation every time it rendered we would want to make sure it was only rendering when necessary.

When using class based components, `PureComponent` will return the last rendered value if the passed in props are the same. There is also a `*shouldComponentUpdate*` function for more fine tuned control. When using functional components, React provides three methods of optimization that this article will be focusing on: `React.memo, useMemo,` and `useCallback.`

## useCallback

`*useCallback*` can prevent unnecessary renders between parent and child components. It takes as an argument a function and returns a cached/memoized version of it.

[https://codesandbox.io/embed/beautiful-elbakyan-k6bx6?fontsize=14&amp;hidenavigation=1&amp;theme=dark](https://codesandbox.io/embed/beautiful-elbakyan-k6bx6?fontsize=14&amp;hidenavigation=1&amp;theme=dark)

Now `increment` will have the same value until `delta` changes, which will reduce the number of times renders. The `useCallback` hook has created a single cached version of `increment`, which encapsulates the **initial value** of `delta`. When `App` re-renders with different values for `delta`, `useCallback` returns the previous version of the `increment` function which keeps the old value of `delta` from the first rendering.

We need to tell `useCallback` to create new cached version of `increment` for every change of `delta` ( the the second argument)

## React.Memo

`React.memo` is a higher order component that memoizes the result of a function component. If a component returns the same result given the same props, wrapping it in memo can result in a performance boost. In other words useMemo caches a computed value. This is usefull when the computation requires significant resources and we don’t want to repeat it on every re-renderTo see the differences  between  use `React.memo` or not, we define two components, header and subheader. The first components is wrapper using React.memo and the other not.  Also exist a button allows the user to increment a counter by In this example, any changes to data will cause App to re-render all of it's child components, including the `<SubHeader>` and `<Header>` component, even if title didn't change. We can come to the conclusion that this component not need to be rendered unless title changes, so it would be safe to wrap it in React.memo.‍Instead of skipping the render-step like in class based components, `React.memo` will reuse the last rendered result instead of calculating a new result.This occur because  React.memo will reuse the last rendered result instead of calculating a new result in the case the `<Header />` component

[https://codesandbox.io/embed/solitary-brook-l8704?fontsize=14&amp;hidenavigation=1&amp;theme=dark](https://codesandbox.io/embed/solitary-brook-l8704?fontsize=14&amp;hidenavigation=1&amp;theme=dark)

## useMemo

While `React.memo` is a [higher-order component](https://reactjs.org/docs/higher-order-components.html) as it accepts a component and returns the new/memoized **component**.`React.useMemo` is a [hook](https://reactjs.org/docs/hooks-intro.html)(which is a function). It accepts a function and returns the memoized return value of the function you passed.

```
const value = React.useMemo(
() => computeExpensiveValue(a, b), [a, b]);
```

Using useMemo will memoize the result, so if widgets haven't changed since the component's last render it will skip the function call and return what it got last.‍

## Conclusions

The main difference between the `React.useMemo` and `React.useCallback` is that `React.useCallback` returns a memoized callback and `React.useMemo` returns a memoized value that is the result of the function parameter.

If you have to process a lot of data, ‘useMemo’ is the perfect Hook as it will do the work once at the first render and then return a cached version on every other render.