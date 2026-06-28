# n8n Auto RTL Persian + Vazirmatn (Safe)

A Tampermonkey userscript that automatically applies Right-to-Left (RTL) direction and the beautiful **Vazirmatn** Persian font to n8n interfaces for Persian/Farsi text.

## ✨ Features

- **Automatic RTL**: Detects Persian text and applies RTL styling.
- **Vazirmatn Font**: Loads and applies the popular Vazirmatn font for better Persian typography.
- **Safe Mode**: Carefully excludes code editors, Monaco, textareas, inputs, and other editing areas to prevent breaking functionality.
- **Dynamic**: Uses MutationObserver to handle dynamically loaded content in n8n.
- **Lightweight & Efficient**: Only processes relevant text nodes.

## 🚀 Installation

1. Install [Tampermonkey](https://www.tampermonkey.net/) extension in your browser (Chrome, Firefox, Edge, etc.).
2. Click on the Tampermonkey dashboard.
3. Create a new script and paste the content of [`n8n-auto-rtl-persian-vazirmatn.user.js`](n8n-auto-rtl-persian-vazirmatn.user.js).
4. Save and enable the script.

Alternatively, you can install it directly from GitHub by clicking the **Raw** button on the `.user.js` file and allowing Tampermonkey to install it.

## 🎯 Use Cases

- **Presenting workflows to Persian-speaking clients**: Make your n8n workflows look professional and natural in Persian.
- **Working with Persian nodes and data**: Improved readability when building automations for Iranian/Persian users.
- **Daily Persian n8n usage**: Cleaner interface for native Farsi speakers.

Perfect for anyone who frequently uses n8n with Persian content!

## 📸 Screenshots

*(Add screenshots here in future updates)*

## 🛠️ How It Works

The script:
- Loads the Vazirmatn font from CDN.
- Scans the DOM for Persian characters using regex.
- Applies custom CSS class to parent elements for RTL and font.
- Skips all editor and code areas for safety.
- Monitors DOM changes to apply to new elements.

## 📝 Notes

- Works on both local n8n (`http://localhost:5678`) and cloud instances.
- Version 1.2 (Safe)
- Author: Mohammad Yamini

## 🤝 Contributing

Feel free to open issues or pull requests!

## 📄 License

MIT License
