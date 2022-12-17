import { Component } from "../core/joyong"
import aboutStore from "../store/about"
export default class About extends Component {
  render() {
   const { photo, name, email,  github} = aboutStore.state

    this.el.classList.add('container', About)
    this.el.innerHTML = /*html*/ `
      <h1>About</h1>
      <div
      style="background-image: url(${photo});
      class="photo></div>
      <p class="name>${name}</p>
        <p>
          <a href="https://github.com/joyongs133?tab=repositories"
         target="_blank">
  </a>
  <p><a href="${github}" target="_blank">Github</a></p>
       <div>
    `
  }
}