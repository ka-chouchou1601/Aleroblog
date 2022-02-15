import React from'react'
import styled from 'styled-components'

import { Box, Stack,Input, Button,Link,ExternalLinkIcon,Text} from '@chakra-ui/react'

const Login=()=>{
    return(
        <Container>
<Stack direction="row" spacing="370px">
   <Stack direction="column" spacing="10px">
       {/**Logo */}
 <Box className="Logo">
<img src={'/icons/RLogo.png'}/>
 </Box>
 {/**Header */}
 <Box className="Body">
 <Box className="Header">
<Stack direction="row" >
<h1>Sign in</h1>
<h5> Account</h5>
</Stack>
 </Box>
<Box className="Text">
<Input 
display="flex"
flexDirection="column"
alignItems=" flex-start"
padding="0px"

position="static"
width="326px"
height=" 48px"
left=" 0px"
top="0px"

 placeholder='email or userName' />
<Input placeholder='password' />
<Button bg='#BF2D35'  >Sign in</Button>

</Box>

    <Box className="Footer">
       <Text>
  Forgot your password ?
  <Link color='teal.500' href='#'>
  Reset
  </Link>
</Text>
    </Box>
    </Box>
 </Stack>
<Box className="SideImage" >
<img src={'/icons/SideI.jpg'}/>
</Box>
</Stack>
        </Container>
    )
}
const Container=styled.div`
.Body{
    display: flex;
flex-direction: column;
align-items: flex-start;
padding: 40px;

position: absolute;
width: 420px;
height: 403px;
left: 150px;
top: 255px;

border-radius: 16px;

}
.SideImage{
    img{
     display: flex;
    justify-content: flex-end;
    width: 100%;
    height: 90%;
    left: 100px;
top: 15px;

    }
}

`

export default Login