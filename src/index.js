import { extractTextFromImage } from './scripts/orc';
import { showText, showError, showLoading } from './scripts/pages';

document.getElementById('upload').addEventListener('change', async (event) => {
    console.log('Image file change detected.');
    const file = event.target.files[0];
    if (!file) {
        alert('Please upload an image file.');
        return;
    }

    const imageElement = document.getElementById('uploaded-image');
    imageElement.src = URL.createObjectURL(file);
    imageElement.style.display = 'block';

    // Wait for the image to load before processing
    imageElement.onload = async () => {
        try {
            console.log('Image loaded.');
            showLoading();
            const text = await extractTextFromImage(imageElement);
            console.log('Extracted text:', text);
            showText(text);
        } catch (error) {
            console.error('Error processing the image:', error);
            showError('Error processing the image.');
        }
    };

    imageElement.onerror = () => {
        console.error('Error loading the image.');
        showError('Error loading the image.');
    };

    // Append the image to the body for debugging
    document.body.appendChild(imageElement);
});
