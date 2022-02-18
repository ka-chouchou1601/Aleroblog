import React from'react'
import styled from 'styled-components'

import { Box, Stack,Input, Button} from '@chakra-ui/react'

const ForgotPassword=()=>{
    return(
        <Container>

   <Stack direction="column" spacing="20px" width="100%" display="flex" justifyContent="center">
       {/**Logo */}
 <Box className="Logo">
<img src={'/icons/RLogo.png'}/>
 </Box>
 {/**Header */}
 <Box className="Body">
 <Box className="Header">
<Stack direction="row" >
<h1>Forgot Password</h1>

</Stack>
 </Box>

 {/**text area  */}
<Box className="Text">
<Input 
display="flex"
flexDirection="column"
alignItems=" flex-start"
padding="0px"
justify-content="space-between"

position="static"
width="326px"
height=" 48px"
left=" 0px"
top="0px"
marginBottom="20px"
 placeholder='Email' />


<Button 
display=" flex"
flex-direction="row"
justify-content="center"
align-items="center"
padding="12px 30px"
width="326px"
position="static"
left="0%"
right="0%"
top="0%"
bottom="0%"
color="white"
bg='#BF2D35' marginBottom="20px"  >Request</Button>

</Box>
    </Box>
    {/**Footer */}
    <Box className="Footer">
<h5>© 2021 Alero Blog Dashboard. All Rights Reserved</h5>
    </Box>
 </Stack>




        </Container>
    )
}
const Container=styled.div`
.Logo{
    position: Absolute;
    width: 100%;
    justify-content: center;
left: 5.35%;
right: 80.97%;
top:36px;
bottom: 50.14%;
}
.Body{
    display: flex;
flex-direction: column;
align-items: flex-start;
padding: 40px;

position: absolute;
width: 100%;
height: 403px;
left: 532px;
top: 255px;

border-radius: 16px;

}

.Header{
    h1{
 position: static;
width: 326px;
height: 27px;
left: 0px;
top: 0px;
font-family: SF Pro Display;
font-style: normal;
font-weight: bold;
font-size: 24px;
display: flex;
align-items: center;
color:#515151;
flex: none;
order: 0;
flex-grow: 0;
margin: 24px 0px;
    }
    h5{
        position: absolute;
width: 70%;
height: 17px;
top:50px;
font-family: SF Pro Display;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 100%;
display: flex;
justify-content: flex-end;
color:#7C849E;

    }
}
.Footer{
   position: absolute;
width: 289px;
height: 17px;
left: 576px;
top: 967px;
font-family: Lato;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 140%;
display: flex;
align-items: flex-end;
letter-spacing: 0.5px;

color: #8A8A8A;
}

`

export default  ForgotPassword