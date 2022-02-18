import React from 'react'
import styled from'styled-components'
import{ Box, Stack} from '@chakra-ui/react'

const SideNav =()=>{
    return(
        <Container>
            <Stack direction="column" spacing="5px" >
<Box className="Tout">
           
               
               <Box  className="Logo">
<img src={'./icons/logo2.svg'}/>
<img src={'./icons/chevrons.svg'}/>
               </Box>
<Box className="Dashboard">
    <img  src={'./icons/Dashboard.png'}/>

</Box>
<Box className="Transactions">
    <img src={'./icons/Transactions.png'}/>

</Box>
<Box className="Settings">
    <img src={'./icons/Settings.png'}/>

</Box>
  </Box>
               </Stack> 
      
        </Container>
    )
}
const Container= styled.div`
.Tout{
position: static;
flex-direction: column;
justify-content:flex-start;
width: 50px;
height: 1433px;
left: 0px;
top: 0px;

background: #FFFFFF;

}
.Logo{
position:absolute;

width: 79px;
height: 91px;
left:1.15%;
top: 14px;
}
.Dashboard{
position: absolute;
width: 79px;
height: 53px;
left:-0.70%;
top: 90px;
}
.Transactions{
    position: absolute;
width: 60px;
height: 24px;
left: 0px;
top: 150px;
}
.Settings{
    position: absolute;
width: 79px;
height: 53px;
left: -0.70%;
top: 606px;
}

`
export default SideNav