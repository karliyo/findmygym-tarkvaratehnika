import Header from './Header'
import React, {Component} from 'react'

class Layout extends Component {
    render() {
        return (
            <div>
                <Header />
                {this.props.children}
            </div>
        )
    }
}

export default Layout;