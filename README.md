🎨 BGChanger:

A simple React application that allows users to change the background color of the page by clicking on colored buttons. This project demonstrates fundamental React concepts such as component reusability, useState hook, props handling, and basic Tailwind CSS styling.

🚀 Features:

Clickable buttons to change the background color dynamically

Tailwind CSS for sleek UI styling

Responsive and centered button layout

Custom button components using props

Smooth background transition with duration-200

📁 Project Structure:

bgchanger/
├── src/
│   ├── App.jsx         // Main component rendering all color buttons
│   ├── Property.jsx    // Alternative single-color button component
│   └── index.js        // React entry point
├── public/
│   └── index.html
├── tailwind.config.js  // Tailwind configuration (if used)
├── package.json
└── README.md

🧠 How It Works:

    App.jsx:

    Uses the useState hook to manage background color.

    ColorButton is a reusable button component that receives the color name and setColor function as props.

    A list of predefined colors is mapped to individual buttons.

    Clicking a button updates the background color of the full screen.

    Property.jsx:

    Demonstrates another way to build color-changing buttons using props colorProp and txtInput.

    Best for rendering single-color controls in isolation or dynamic scenarios.

🛠️ Installation & Usage:

Clone the repository

cd bgToggler
Install dependencies

npm install
Run the app

npm run dev
Open your browser at http//localhost:5173/ (if using Vite) or the specified local server.


✨ Example Colors Included

🔴 Red

🟠 Orange

🟡 Yellow

🟣 Indigo

🔵 Blue

🟪 Purple

💜 Violet

🌸 Pink

⚪ White

⚫ Gray

🖤 Black

📄 License:

This project is open source and available under the MIT License.

🙌 Acknowledgements:

React.js Documentation

Tailwind CSS

Inspired by color palette and UI patterns seen in popular design systems.