import React from 'react'

const Child = ({changes}) => {
    // console.log('this props from my child', props)
    // //destucturing properties
    // const {change} = props
    return (
        <div>
            <button onClick={changes}>Click me to change name</button>
        </div>
    )
}

export default Child
