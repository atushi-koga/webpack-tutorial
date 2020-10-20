import "./hello-world-button.scss";
import "./hello-world.css";

class HelloWorldButton {
    buttonCssClass = 'hello-world-button';

    render() {
        const button = document.createElement('button');
        button.innerHTML = 'Hello World';
        button.classList.add(this.buttonCssClass);
        const body = document.querySelector('body');
        body.appendChild(button);

        button.onclick = () => {
            const p = document.createElement('p');
            p.innerHTML = 'Hello World';
            p.classList.add('hello-world-test');
            body.appendChild(p);
        }
    }
}

export default HelloWorldButton;