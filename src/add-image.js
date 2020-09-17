import Kiwi from "./kiwi.jpg";

function addImage() {
    const image = document.createElement('img');
    image.alt = 'kiwi';
    image.width = 300;
    image.src = Kiwi;
    document.querySelector('body').appendChild(image);
}

export default addImage;