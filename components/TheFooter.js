import { Component } from '../core/joyong'
import aboutStore from '../store/about'

export default class TheFooter extends Component {
    constructor() {
        super({
            tagName: 'footer'
        })
    }

    render() {
      const {github, repository} = aboutStore.state
  this.el.innerHTML = /*html*/ `
<div>
    <a href="${repository}">
        Joyong github Repositioy
    </a>
</div>
<div>
    <a href="${github}">
        ${new Date().getFullYear()}
        Joyong!
</div>

`
    }          
}

