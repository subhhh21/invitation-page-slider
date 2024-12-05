let currentSlide = 0;
const images = ['https://i.pinimg.com/236x/5d/66/4f/5d664fec812e0cf9c9104179cf5a2c7a.jpg', 'https://i.pinimg.com/236x/5d/66/4f/5d664fec812e0cf9c9104179cf5a2c7a.jpg', 'https://i.pinimg.com/236x/5d/66/4f/5d664fec812e0cf9c9104179cf5a2c7a.jpg']; 

function changeSlide(direction) {
    currentSlide += direction;
    if (currentSlide < 0) {
        currentSlide = images.length - 1;
    } else if (currentSlide >= images.length) {
        currentSlide = 0;
    }
    document.getElementById('slider-image').src = images[currentSlide];
}

function updateText() {
    const textInput = document.getElementById('text-input').value;
    document.getElementById('slider-text').innerText = textInput;
}

function changeFont() {
    const fontSelect = document.getElementById('font-select');
    const selectedFont = fontSelect.value;
    document.getElementById('slider-text').style.fontFamily = selectedFont;
}