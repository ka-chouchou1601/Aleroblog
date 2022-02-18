import React from'react'
import styled from 'styled-components'

import { Box, Stack,Input, Button,Link,Text} from '@chakra-ui/react'

const SignIn=()=>{
    return(
        <Container>
<Stack direction="row" spacing="100px" height="100%" width="100%" >
   <Stack direction="column" spacing="20px"
    alignItems="center" width="50%"  justifyContent="center"   height="100%">
       {/**Logo */}
 <Box className="Logo">
<img src={'/icons/RLogo.png'}/>
 </Box>
 {/**Header */}
 <Box className="Body">
                <Box className="Header" >

                <h1>Sign in</h1>
                <h5> Account</h5>

                </Box>

                {/**text area  */}
                <Box className="Form-Input">
                <Input 
               
                placeholder='email or userName' />
                <Input 
             
                placeholder='password' />

                <Button bg='#BF2D35'  >Sign in</Button>

                </Box>

                    <Box className="Reset">
                    <Text>
                Forgot your password ?
                <Link color='teal.500' href='#'>
                Reset
                </Link>
                </Text>
                    </Box>
    </Box>
    {/**Footer */}
    <Box className="Footer">
<h5>© 2021 Alero Blog Dashboard. All Rights Reserved</h5>
    </Box>
 </Stack>
<Box className="SideImage"  width="50%">
<img src={'/icons/SideI.jpg'}/>
</Box>


</Stack>
        </Container>
    )
}
const Container=styled.div`
height: 100vh;
overflow-y:hidden;
.Logo{
    position: absolute;
left: 5.35%;
right: 80.97%;
top:36px;

}
.Body{
    display: flex;
flex-direction: column;
justify-content: center;
padding: 40px;
width: 400px;
border-radius: 16px;
height:100%;

}
.SideImage{
    img{
     display: flex;
     width: 100%;
    justify-content: flex-end;
    height: 100vh;
    


    }
}
.Header{
    display:flex;
    align-items:center;
    justify-content: space-between;
    h1{
       

left: 0px;
top: 0px;
font-family: SF Pro Display;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 140%;
display: flex;
color:#515151;
flex: none;
order: 0;
flex-grow: 0;
    }
    h5{

font-family: SF Pro Display;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 100%;
display: flex;

color:#7C849E;

    }
}
.Footer{
    position: absolute;
width: 288px;
height: 17px;
left: 64px;
bottom:10px;
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

.Form-Input{
input{
    margin-bottom: 15px;

}
}

`

export default SignIn