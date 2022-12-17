import { Component } from "../core/joyong";

export default class Headline extends Component {
    render() {
        this.el.classList.add('headline')
        this.el.innerHTML = /*html*/ `
        <h1>
            <span>Joyong API</span><br />
            Grand OPEN<br />
            MOVIE DATABASE
        </h1>
        <p>
        The Open Movie Joyongs Api Database<br />
        The Joyong API is a RESTful web service to obtain movie information, all content and images on the site are contributed and maintained by our users.<br />
        If you find this service useful, please consider making a one-time donation or become a patron<br />
    </p>
        `
    }
}