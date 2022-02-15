import React, {Component} from 'react'
import {Text} from '@chakra-ui/react'

class ButtonChild extends Component {
    constructor(props) {
        super(props);
       console.log('acccess props from outside',this.props );
       console.log('acccess props from inside', props);
    
    }
componentDidMount() {
    console.log('properties in button component')
    console.log('properties in button component2', this.props.change)
}
    render () {
        return (
            <div>
            <button onClick={()=> this.props.change('alex', '28')} style={{background:'gray', width:'100%', padding:'20px', borderRadius:'20px'}}>Click from Class Component</button>
            </div>
        )
    }
}

export default ButtonChild