import { Component } from "../core/joyong";

export default class NotFound extends Component {
    render() {
        this.el.classList.add('container', 'not-found')
        this.el.innerHTML =  /* html */`
        <h1>
        <p>The result of Jo Yong's confirmation<p><br />
        <p>It's a missing page

    </h1>
        `
    }
}