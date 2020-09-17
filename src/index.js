import HelloWorldButton from "./components/hello-world-button/hello-world";
import addImage from "./add-image";

const button = new HelloWorldButton();
button.render();
addImage();

if (process.env.NODE_ENV === 'production') {
    console.log('production');
} else if (process.env.NODE_ENV === 'development') {
    console.log('development');
} else {
    console.log('none');
}