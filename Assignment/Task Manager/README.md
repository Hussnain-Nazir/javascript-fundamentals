# DOM Assignment - Task Manager

A Task Manager built with plain HTML, CSS, and vanilla JavaScript.

## What is the DOM?

DOM stands for Document Object Model. When a browser loads an HTML page, it doesn't just read the text - it builds a tree-like structure in memory where every HTML tag becomes an object (a "node"). This tree is the DOM.

JavaScript can use the DOM to read and change the page after it has loaded: adding elements, removing elements, changing text, changing styles, and reacting to events like clicks. Without the DOM, JavaScript would have no way to interact with what the user sees on the page.

## Event Bubbling vs Capturing

When an event (like a click) happens on an element, it doesn't just fire on that one element. It travels through the DOM tree in two possible phases:

- **Capturing phase**: the event starts at the top of the DOM tree (`window`/`document`) and travels down to the target element.
- **Bubbling phase**: after reaching the target, the event then travels back up from the target element to its parents, all the way to the top.

By default, event listeners in JavaScript run during the bubbling phase. This is why, in this project, a single click listener on the parent `#task-list` div can catch clicks on the Complete/Delete buttons inside each task - the click "bubbles up" from the button to the parent, and the parent's listener handles it. This is called **event delegation**.

## preventDefault() vs stopPropagation() vs stopImmediatePropagation()

These three methods are often confused, but they do different things:

- **`preventDefault()`** - Stops the browser's default built-in action for that event, but does NOT stop the event from bubbling/propagating. Example in this project: stopping the form from refreshing the page on submit, and stopping a link from navigating to a new page.

- **`stopPropagation()`** - Stops the event from continuing to bubble (or capture) to other elements, but does NOT stop the browser's default action, and does NOT stop other listeners on the same element from running. Example in this project: the `#middle` div stops the click from reaching the `#outer` div's listener.

- **`stopImmediatePropagation()`** - Does everything `stopPropagation()` does, PLUS it stops any other listeners attached to that exact same element from running. Example in this project: the inner button has two click listeners; the first one calls `stopImmediatePropagation()`, so the second listener never runs.

## Critical Rendering Path

The Critical Rendering Path is the sequence of steps the browser takes to convert HTML, CSS, and JavaScript into pixels on the screen. Roughly:

1. **HTML is parsed** into the **DOM tree**.
2. **CSS is parsed** into the **CSSOM tree** (CSS Object Model).
3. The DOM and CSSOM are combined into the **Render Tree**, which only contains what will actually be visible.
4. **Layout (Reflow)** - the browser calculates the exact size and position of every element.
5. **Paint** - the browser fills in pixels (colors, text, images, borders) based on the layout.
6. **Composite** - layers are combined and drawn to the screen.

## What I Learned

Through this assignment I practiced:
- Creating elements dynamically with `createElement()` and `appendChild()` instead of hardcoding them in HTML.
- Using event delegation by attaching one listener to a parent element instead of many listeners on child elements, relying on event bubbling.
- The practical difference between `preventDefault()`, `stopPropagation()`, and `stopImmediatePropagation()` by building a small demo where each one is clearly visible in a log.
- Using different DOM selector methods (`getElementById`, `getElementsByClassName`, `querySelector`, `querySelectorAll`) and when each one is useful.
