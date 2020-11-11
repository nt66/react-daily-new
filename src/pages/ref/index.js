import React, { Component,createRef } from 'react';
class RefTest extends Component {
    constructor(props) {
        super(props)
        this.inputRef = createRef()  //也可以用这种 ref={this.inputRef}  用的时候 this.inputRef.current
    }
    componentDidMount(){
        console.log('inputRef:',this.inputRef.current)
    }
    render() {
        return (
            <div>
                <h1>ref</h1>  
                <input
                    type='text'
                    ref={this.inputRef}
                    value='10'
                />
                <span>ref测试</span>
            </div>
        )
    }
}

export default RefTest;