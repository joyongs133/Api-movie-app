import { Component} from './core/joyong'
import TheHeader from './components/TheHeader'
import TheFooter from './components/TheFooter'
export default class App extends Component {
    render() {
        const theHeader = new TheHeader().el
        const theFooter = new TheFooter().el
        const rounterView = document.createElement('router-view')

        this.el.append(
            theHeader,
            rounterView,
            theFooter
            )
    }
 }