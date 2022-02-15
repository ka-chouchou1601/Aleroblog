import React from'react'
import  styled from 'styled-components'
import {Box, Stack, VStack, HStack,} from '@chakra-ui/react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react'
  import {Button, Link  } from '@chakra-ui/react'
  import { ChevronDownIcon } from '@chakra-ui/icons'
const ToolBar =()=>{
    return(
        <Container>
            
<VStack>
    
    <Box className="User-Icon">
   
      <Menu>
      <MenuButton as={Button} color="#264C2D" font-family="Noto Sans"
fontStyle="normal"
fontWeight="600"
fontSize= "12px"
lineHeight="25px"
margin-left=""
borderRadius="14px"
width="70px"
height="45px"


align-items= "Left" variant ="ghost" rightIcon={<ChevronDownIcon />}>
 <img src={'/icons/userIcon.png'}/>
                         
                        </MenuButton>
      </Menu>
      </Box>
</VStack>


 
        </Container>
    )
}
const Container= styled.div`
display:flex;
justify-content: flex-end;
padding-right: 50px;
background-color: #ffffff;


`

export default ToolBar