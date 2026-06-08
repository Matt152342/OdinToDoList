# TODO List Web App
A clean and functional task management dashboard that allows users to create, view, organize, and track tasks alongside specialized sub-task checklists.

# Live Preview: https://matt152342.github.io/OdinToDoList/

## Features
Task Management: Create tasks with titles, descriptions, formatted due dates, and priority levels (1-3).

Granular Checklists: Drill down into any individual task to add, complete (strike-through), or remove localized sub-items.

Persistent Storage: Integrates localStorage to ensure your data stays saved even after closing or refreshing the browser.

Smart Dashboard: Displays an overview grid of all active tasks, paired with a sidebar tracking recently added tasks.

Responsive Layout: Seamlessly collapses into a single-column layout optimized for mobile screens.

## Tech Stack
Frontend: HTML5 (utilizing native <dialog> elements for modal popups), Semantic CSS3 (CSS Variables, Flexbox, Grid).

JavaScript: Object-Oriented ES6+ Modules (Task class structures, DOM event delegation, crypto.randomUUID()).

Dependencies: date-fns (for clean, human-readable date formatting).

## Project Architecture
template.html: Provides the core scaffolding, container grids, and native pop-up modal forms for adding tasks and sub-items.

task.js: Contains the baseline Task blueprint class responsible for generating unique IDs and managing internal checklist data arrays.

tasksDOM.js: Houses the central logic for interaction. It manages localStorage caching, formats raw input dates, and dynamically handles DOM construction for cards and single-task views.

index.js: The main application entry point that hooks into UI interactive nodes, triggers state changes, and coordinates view toggles between dashboards and task inspection panels.

styles.css: Establishes the deep green color palette and handles the responsive grid breakdown rules.
