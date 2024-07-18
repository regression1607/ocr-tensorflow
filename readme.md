Here's a `README.md` file for your project:

```markdown
# Image Text Extraction

This project allows you to upload an image and extract text from it using Tesseract.js. The extracted text is then displayed on the web page.

## Project Structure

```
my-app/
├── public/
│   ├── index.html
│   ├── styles.css
├── src/
│   ├── index.js
│   ├── scripts/
│   │   ├── pages.js
│   │   ├── ocr.js
├── dist/
│   ├── bundle.js
├── webpack.config.js
├── package.json
```

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:

```sh
git clone https://github.com/your-repo/image-text-extraction.git
cd image-text-extraction
```

2. Install the dependencies:

```sh
npm install
```

3. Build the project:

```sh
npm run build
```

4. Start the development server:

```sh
npm run start
```

5. Open your browser and navigate to `http://localhost:8081`.

## Usage

1. Open the application in your browser.
2. Upload an image by clicking the file input.
3. Wait for the image to be processed.
4. The extracted text will be displayed below the uploaded image.

## File Descriptions

### public/index.html

The main HTML file that contains the structure of the web page.

### public/styles.css

The CSS file that styles the web page.

### src/index.js

The main JavaScript file that handles the image upload and text extraction logic.

### src/scripts/ocr.js

Contains functions for text extraction using Tesseract.js.

### src/scripts/display.js

Contains functions for updating the UI, including showing the extracted text, loading messages, and error messages.

### webpack.config.js

Configuration file for webpack, which bundles the project files.

### package.json

Contains project metadata and dependencies.

## Explanation of Key Files

### src/scripts/ocr.js

This file uses Tesseract.js to perform Optical Character Recognition (OCR) on the uploaded image. It extracts text and returns it.

```javascript
import Tesseract from 'tesseract.js';

export async function extractTextFromImage(imageElement) {
    console.log('Starting text extraction with Tesseract.js.');
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = imageElement.width;
    canvas.height = imageElement.height;
    context.drawImage(imageElement, 0, 0, imageElement.width, imageElement.height);

    const dataUrl = canvas.toDataURL('image/png');
    console.log('Data URL generated:', dataUrl);

    const { data: { text } } = await Tesseract.recognize(dataUrl, 'eng', {
        logger: m => console.log(m)
    });

    console.log('Text extracted:', text);
    return text;
}
```

### src/scripts/display.js

This file contains functions to manipulate the DOM and show the results of the OCR process.

```javascript
export function showText(text) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Clear previous results

    if (text) {
        const textElement = document.createElement('p');
        textElement.textContent = text;
        resultDiv.appendChild(textElement);
    } else {
        resultDiv.textContent = 'No text found in the image.';
    }
}

export function showError(message) {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `Error: ${message}`;
}

export function showLoading() {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = 'Processing image...';
}
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

This `README.md` file provides an overview of the project, its structure, setup instructions, and explanations of key files. Adjust the content as needed to fit your specific project details and preferences.
