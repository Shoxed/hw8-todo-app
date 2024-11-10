# Reflections on Building the Angular ToDo App

## Overview

Creating this Angular ToDo app helped me learn the basics of Angular. I worked with components, data binding, and event handling, which gave me a clearer understanding of how Angular works for building interactive UIs.

## Challenges Faced

### 1. Setting Up Standalone Components
Using Angular’s standalone component feature was new to me, and I learned that I had to import modules like `FormsModule` and `CommonModule` differently. This helped me understand how Angular manages dependencies.

### 2. Making `ngModel` Work for Input Binding
Getting `ngModel` to work was tricky at first because I forgot to import `FormsModule`. This was a good reminder to always double-check module imports.

### 3. Handling Task State
I needed to make sure tasks could be marked as complete or deleted. Setting up an array of tasks and updating it with each action taught me how to manage state within an Angular component.

## Key Takeaways

### Understanding Angular Modules
This project taught me more about Angular modules and how to import only what’s needed for specific components, especially in standalone components.

### Using Components
Working with components showed me how Angular lets you keep code organized and modular, which makes things easier to manage.

### Event and Data Binding
I got to practice using `[(ngModel)]` for input and `(click)` for events, which connected my HTML to the component’s logic easily.

## Future Improvements

- **Better UI**: Adding animations or visual feedback could make the app look and feel nicer.
- **Saving Tasks**: Adding a way to save tasks to local storage or a database would make the app more useful.
- **Task Filters**: It would be helpful to add options to filter tasks by completed or incomplete status.

## Conclusion

Building this ToDo app helped me understand Angular basics and how to put together a simple interactive application. It was a great way to learn and see how Angular’s tools work together.
