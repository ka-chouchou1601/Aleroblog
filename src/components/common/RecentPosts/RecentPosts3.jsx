import React,{useState, useEffect} from 'react'
import {Text} from '@chakra-ui/react'
import ButtonChild from './ButtonChild'
const RecentPost3 = () => {
    const [name, setName] = useState('');
    const [name2, setName2] = useState('');
    const [admin, setAdmin] = useState({name: 'grace', age:'30', name2: 'divine'})

    //function to change state
    const changeName = (name)=>{
        setName(name)
    }

    const ChangeAdmin = (name, age)=> {
        setAdmin({name, age})
    }

    //useffect same as componentDidMount
    //takes in two arguments
    // first callback func
    //sec array of values
       useEffect (()=>{

      setName2('Jacob')
    }, [admin.name])

    useEffect (()=>{
        changeName('Divine')
         setName2('Divine')
    }, [])

 



    return (<div>
        <Text color='green' fontSize='30px'>hello, first -time {name}</Text>
        <button onClick={()=>changeName('Alex')}>change our name to Alex in our function component</button>
        <br/>
         <button onClick={()=>changeName('Chouella')}>change our name to Chouella in our function component</button>
         <br/>
 <Text color='green' fontSize='30px'>hello, {name2}</Text>
         <Text color='gray' fontSize='50px'>made by : {admin.name}</Text>
         <Text  color='gray' fontSize='30px'>age bracket of author: {admin.age}</Text>
         <button onClick={()=>ChangeAdmin('chris', '40')}>Change our adminstrator</button>
         <ButtonChild change={ChangeAdmin}/>
        </div>)
}

export default RecentPost3