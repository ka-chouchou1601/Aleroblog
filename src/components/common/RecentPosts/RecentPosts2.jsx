import React, {Component} from 'react'
import {Text} from '@chakra-ui/react'
import Child from './child.jsx'

class RecentPosts2 extends Component {

//second 

// constructor(props) {
//     super(props);
//     this.state={
//         name: 'Joshua'
//     }
// }

    // keyword = this
    //first way
state={
    name: 'Chouella',
    age:'24'
}

changeName = (name) => {
    this.setState({ name:name})
   // console.log('state name', this.state)
}
//life cycle methods
//usually is called once at the first render of the component
componentDidMount() {
    this.changeName('stephanie');
    console.log('it has run again')
}

//componentDidUpdate
//usually run when there is a change in information/state/props
// componentDidUpdate(prevProps, prevState) {
//     if (prevState.name === this.state.name){
//         this.changeName();
//     }
// }

changeToAnother = () => {
this.changeName('joshua')
}

    render () {
        
         console.log('testing times rendered', this.state)
       return (
        <div>
            <Text color='black' fontSize='30px' >hello, {this.state.name} {this.state.age}</Text>
            {/** child component - function based component */}
            <Child changes={this.changeToAnother}/>
            <button onClick={this.changeToAnother}>change my name within the class component </button>
        </div>
    )  
    }
   
}

export default RecentPosts2
