import React from 'react'
import styled from 'styled-components'

import { Box, Stack, VStack, HStack, Input, Select , Button, Link, Checkbox, Textarea,} from '@chakra-ui/react'
import SideNav from '../components/SideNav/SideNav'
import ToolBar from '../components/ToolBar/ToolBar'

const Product2 = () => {
  return (
<Container>
    <Stack direction="row">
       <SideNav/>
        <Stack direction="column" width="100%" bg="#e5e5e5" spacing="64px">
<ToolBar/>

    <Box  bg="#e5e5e5" >
        <Stack direction="column"  bg="#e5e5e5" pl="50px" pr="50px" spacing="15px">
            {/**header */}
            <Box className="Header" width="100%">
                            
                                <Box className='Title' >
                                    <h1>Create Blog</h1>
                                    <h5>Modify the sections </h5>
                                </Box>
                                <Box >
                                    {/**button */}
                                        <Button bg='#BF2D35'  size='lg' >
                                            submit
                                        </Button>
                                </Box>
                       </Box>
{/**main section */}
                       <Stack direction="row" spacing="30px">
{/**side section  */}
<Box width="100%">
<Stack direction="column" bg="white">
    <Box className="T-Title" >
                                <h2>Slug*</h2>
                                <Input placeholder=''
                                    position="static"
                                    width=" 595.9px"
                                    height=" 43.3px"
                                    left="0px"
                                    top=" 31px"
                                    flex="none"
                                    order=" 1"
                                    alignSelf=" stretch"
                                    flexGrow="0"
                                    margin=" 15px 0px"
                                />
                            </Box>
                            <Box className="T-Title">
                                <h2>Product Title*</h2>
                                <Input placeholder=''
                                    position="static"
                                    width=" 595.9px"
                                    height=" 43.3px"
                                    left="0px"
                                    top=" 31px"
                                    flex="none"
                                    order=" 1"
                                    align-self=" stretch"
                                    flex-grow="0"
                                    margin=" 15px 0px"
                                />
                            </Box>
                            <Box className="T-Title">
                                <h2>Product Description*</h2>
                               
                                     <textarea placeholder='' type="text"
                                   
                                />
                               
                               
                            </Box>
</Stack>
</Box>

{/**forms */}
<Box>
    <Stack  direction="column" spacing="50px"> 
    <Box bg="white" width="100%" height="100%">
        <Box  >
                <Box className="S-Title">Status*</Box>
                            <Select placeholder='Not Active'
                                height=" 43.3px"
                                marginBottom="0px"
                            >
                                <option value='option1'>Option 1</option>
                                <option value='option2'>Option 2</option>
                                <option value='option3'>Option 3</option>
                            </Select>

                        </Box>
                        <Box>
                            <Box className="S-Title"  >Tags</Box>
                            <Input placeholder=''
                                position="static"
                                left=" 100px"
                                paddingRight="200px"
                                right=" 100.33px"
                                top="180px"
                                bottom="300px"
                                marginLeft="3px"
                                background="#FFFFFF"
                                border=" 1.0826px solid #E4E4E4"
                                boxSizing=" border-box"
                                borderRadius=" 4.60388px"
                            />

                        </Box>
                         <Box className="S-Title">Categories*</Box>
                        <Box className="Cat">
                            <Stack direction="column">
                                <Checkbox >Bags</Checkbox>
                                <Checkbox >Bracelets</Checkbox>
                                <Checkbox >Earrings</Checkbox>
                                <Checkbox >Necklaces</Checkbox>
                                <Checkbox >Rings</Checkbox>
                                <Checkbox >Shop men's</Checkbox>
                            </Stack>
                        </Box>
                        </Box>
               <Box> 
                   <Stack direction="column"> 
                       {/**Visibility */}
                        <Box bg="white">

                            <Box className="S-Title" >Visibility</Box>
                        <Checkbox size='md' colorSheme="#264C2D" defaultIsChecked>
                            Publish On Site
                        </Checkbox>
                        </Box>

                        </Stack>
                        </Box>
                    <Stack direction="column">
                            <Box bg="white">
               <Box className="S-Title"> Total Stock*</Box>
                        <Box>
                            <Input placeholder='0'
                                position="static"
                                left=" 600px"
                                paddingRight="230px"
                                right=" 100.33px"
                                top="180px"
                                bottom="300px"
                                marginLeft="9px"
                                background="#FFFFFF"
                                border=" 1.0826px solid #E4E4E4"
                                boxSizing=" border-box"
                                borderRadius=" 4.60388px"
                            />
                        </Box>
<Stack direction="column" bg="white">
                                  <Box className="S-Title" > Reserved</Box>
                        <Box>
                            <Input placeholder='0'
                                position="static"
                                left=" 600px"
                                paddingRight="230px"
                                right=" 100.33px"
                                
                                bottom="100px"
                                marginLeft="9px"
                                background="#FFFFFF"
                                border=" 1.0826px solid #E4E4E4"
                                boxSizing=" border-box"
                                
                            />
                        </Box>     
                             </Stack>
                            </Box>
                           
                             
                              
                         </Stack>
                        
                        </Stack>
 
                       
                       
                        {/**Tags */}                
                       
                
</Box>
                       </Stack>
        </Stack>
    </Box>
    </Stack>
    </Stack>
    
</Container>

   
  )
}
const Container = styled.div`
overflow:hidden;
.Header{
    width:100%;
    display:flex;
    justify-content: space-between;
}
.Title{
    
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 27.7081px;
    line-height: 32px;
    display: flex;
    flex-direction:column;
    align-items: flex-start;
   padding: 0px;

}
 h5 {
        font-family: Noto Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        color: #8B8F8F;
    }

.T-Title{
    h2{
        font-family: Inter;
        font-style: normal;
        font-weight: 500;
        font-size: 17.3216px;
        line-height: 95.02%;
        color: #3A3A3A;
        
    }
    textarea{
 position:static;
                                    width:596.14px;
                                    height:156px;
                                    left:0px;
                                    top:0px;
                                    flex:none;
                                    order:1;
                                    align-self:stretch;
                                    flex-gro:0;
                                    margin:15px 0px;
                                    border: 1px solid #000000;
                                    border-radius:8px;
                                    outline:none;

    }
}
S-Title:{
position: static;
left: 0%;
right: 69.79%;
top: 0%;
bottom: 94.06%;
font-family: Inter;
font-style: normal;
font-weight: 500;
font-size: 17.3216px;
line-height: 95.02%;
color: #3A3A3A;
flex: none;
order: 0;
flex-grow: 0;
margin: 15.1564px 0px;
    h2{
        
        marginLeft:5px;
          
    }
}
`
export default Product2