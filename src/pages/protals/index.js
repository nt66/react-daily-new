import React, { Component } from 'react'
import Modal from './modal'
class ProtalsTest extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (<>
            <h1> protals </h1>
            <div id='root1'>
                <Modal>
                    <span>我是Modal组件,虽然我写在root1中，但我挂在root2里</span>
                </Modal>
            </div>
            <div id='root2'></div>
        </>)    
    }
}

export default ProtalsTest;