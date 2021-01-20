import React, { Component } from 'react'
import PartSelector from './PartSelector'

export class MainForm extends Component {
    render() {
        console.log(this.props.features)
        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                <PartSelector {...this.props} />
            </form>
        )
    }
}

export default MainForm
