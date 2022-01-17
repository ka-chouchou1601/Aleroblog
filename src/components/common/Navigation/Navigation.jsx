import React from 'react'
import styled from 'styled-components'
import {Box, Stack, VStack, HStack} from '@chakra-ui/react'
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
const Navigation = () => {
    return (
       <Container>
                <Box className="Navbar"  mb='60px'>
            <HStack   justifyContent="space-between" marginBottom="100px" paddingRight="90px" paddingLeft="90px">
                {/** NavBar */}
              
               <Box className="Logo">
                         <img src={'/icons/Logo.svg'} alt=" " 
                     
/>
                </Box>
               
                   <Box ClassName="MenuList" >
                  <HStack>
                   <Menu>
                        <MenuButton as={Button} color="#264C2D" font-family="Noto Sans"
fontStyle="normal"
fontWeight="600"
fontSize= "12px"
lineHeight="25px"
display= "flex" 

align-items= "center" variant ="ghost" rightIcon={<ChevronDownIcon />}>
                        SERVICES
                        </MenuButton>
                        <MenuList>
   
                            <MenuItem>Create a Copy</MenuItem>
                            <MenuItem>Mark as Draft</MenuItem>
                            <MenuItem>Delete</MenuItem>
                            <MenuItem>Attend a Workshop</MenuItem>
                        </MenuList>
                    </Menu>
                    <Menu>
                    <MenuButton as={Button} color="#264C2D" font-family="Noto Sans"
fontStyle="normal"
fontWeight="600"
fontSize= "12px"
lineHeight="25px"

display= "flex" 
align-items= " center" variant ="ghost" rightIcon={<ChevronDownIcon />}>
                       INSPIRATION
                    </MenuButton>
                    <MenuList>
                    
                        <MenuItem>Create a Copy</MenuItem>
                        <MenuItem>Mark as Draft</MenuItem>
                        <MenuItem>Delete</MenuItem>
                        <MenuItem>Attend a Workshop</MenuItem>
                    </MenuList>
                    </Menu>
                    <Link href="/about" passHref>
                     <Button as="a" color="#264C2D" fontFamily="Noto Sans" font-family="Noto Sans"
fontStyle="normal"
fontWeight="600"
fontSize= "12px"
lineHeight="25px"
display= "flex" 

align-items= "center" variant="ghost" aria-label="About" my={5} >
                        ABOUT
                    </Button>
                    </Link>
    <Link href="/ressources" passHref>
      <Button as="a" color="#264C2D" fontFamily="Noto Sans"  variant="ghost" font-family="Noto Sans"
fontStyle="normal"
fontWeight="600"
fontSize= "12px"
lineHeight="25px"
display= "flex" 

align-items= "center"  aria-label="Ressources" my={3} >
       RESSOURCES
      </Button>
    </Link>
    <Link href="/Quote" passHref>
     
      <Button variant='outline' color="#264C2D" fontFamily="Noto Sans" font-family="Noto Sans"
fontStyle="normal"
fontWeight="600"
fontSize= "12px"
lineHeight="25px"
display= "flex" 

align-items= "center">
      GET A QUOTE
  </Button>
    </Link>

             </HStack>
               </Box>
               </HStack>
            </Box>   
            </Container>
    )
}
const Container = styled.div`
color="#264C2D" 
fontFamily="Noto Sans" 
font-family="Noto Sans"
fontStyle="normal"
fontWeight="600"
fontSize= "12px"
lineHeight="25px"
display= "flex" 
marginBottom="60px"
align-items= "center"
.Navbar{
    .Logo{
       width:187px;
     
       img {
           width:100%;
           height:100%;
           object-fit:cover;
       }
   }
   
   .MenuList{
      
       width:50px;
       height: 9px;
       left: 809px;
   font-family: Noto Sans;
   font-style: normal;
   font-weight: 400;
   font-size: 12px;
   line-height: 19px;
   flex: 1;
   display: flex;
   align-items: center;
   justify-content: flex-end;
   
   
   }
   }
`

export default Navigation
