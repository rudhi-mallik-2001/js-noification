# Customizable JavaScript Notification System

## Overview
This JavaScript Notification System provides a simple yet effective way to display dynamic notifications on your web page. With customizable text, background colors, and icons, it allows you to create notifications for various purposes such as warnings, errors, information updates, or success messages.

## Features
- **Customizable Notifications:** Tailor notifications to your needs with customizable text, background colors, and icons.
- **Dynamic Animation:** Smooth animation effects for notification appearance and disappearance enhance user experience.
- **Hover Interaction:** Pause and resume notification animation by hovering over them.
- **Automatic Removal:** Notifications automatically disappear after a set duration, keeping your interface clutter-free.

## Getting Started
1. **Include JavaScript File:**
   - Include the `notification.js` file in your project.
   
2. **Usage:**
   - Use the provided functions to display different types of notifications:
     - `toast.warn(text)`
     - `toast.error(text)`
     - `toast.info(text)`
     - `toast.success(text)`
     
3. **Customization:**
   - Customize notification text, background colors, and icons directly in the JavaScript code.

## Example
```javascript
// Display a warning notification
toast.warn("This is a warning message!");

// Display an error notification
toast.error("Oops! Something went wrong.");

// Display an information notification
toast.info("Just an update: New features added.");

// Display a success notification
toast.success("Task completed successfully!");
