import  React from'react'
import  styled from'styled-components'
import {Box, Stack, VStack, HStack} from '@chakra-ui/react'
import { Button, ButtonGroup, IconButton,SearchIcon } from '@chakra-ui/react'
import SideNav from '../components/SideNav/SideNav'
import ToolBar from '../components/ToolBar/ToolBar'

const PostGrid=()=>{
    let Tcontent=[{
     
        id:1,
       No:"1",
       Title:"Ronald Richard",
       Categories:"sabren@comcast.net",
       CreatedDate:"22 Oct, 2020"
    },{
         id:2,
       No:"2",
       Title:"Leslie Alexander",
       Categories:"notaprguy@hotmail.com",
       CreatedDate:"17 Oct, 2020"
    },{
        id:3,
       No:"3",
       Title:"Ralph Edwards",
       Categories:"grossman@gmail.com",
       CreatedDate:"21 Sep, 2020" 
    },{
        id:4,
       No:"4",
       Title:"Kathryn Murphy",
       Categories:"gravyface@mac.com",
       CreatedDate:"22 Oct, 2020" 
    },{
        id:5,
       No:"5",
       Title:"Cameron Williamson",
       Categories:"doormat@att.net",
       CreatedDate:"1 Feb, 2020" 
    },{
        id:6,
       No:"6",
       Title:"Cody Fisher",
       Categories:"ateniese@mac.com",
       CreatedDate:"24 May, 2020" 
    },{
        id:7,
       No:"7",
       Title:"Arlene McCoy",
       Categories:"zeitlin@sbcglobal.net",
       CreatedDate:"24 May, 2020" 
    },
    {
        id:7,
       No:"8",
       Title:"Kristin Watson",
       Categories:"zeitlin@sbcglobal.net",
       CreatedDate:"8 Sep, 2020" 
    },]
    return(
<Container>
    <Stack direction="row" width="100%" overflow="hidden" >
     
 <Box>
      <SideNav/>  
      </Box>

<Stack  direction="column" width="100%"    bg="#e5e5e5" spacing="60px" >
    {/**
     * 
     *    
     */}
  <ToolBar/>   

<Box bg="#e5e5e5"  w='100%' pl='5%' pr='5%'  >
<Stack direction="column"   w='100%' overflowX="hidden" spacing={'30px'} >
       {/**header */}
     <Box className="Header" >
                            
                                <Box className="Title" >
                                    <h1>Recent Post</h1>
                                    <h5>View Blog postList  </h5>
                                </Box>
                                <Box >
                                    {/**button */}
                                        <Button bg='#BF2D35'  size='lg' >
                                            + Create New
                                        </Button>
                                </Box>
                       </Box>
                       {/**search Bar */}
                       <Stack direction="row" >
                         <Box className="SearchBar">
                        
   
                         </Box>

                       </Stack>

<Box   bg="white"  w='100%' pt='0px' borderRadius={'8px'}>

    {/**head title */}
    <Stack direction="row" w='100%'    spacing="15px" >
        <Box className="Table" >

              <table>
                  <thead>
                      <tr>

                          <th>#</th>
                           <th>Title</th>
                            <th>Categories</th>
                             <th>Created Date</th>
                             <th></th>
                             <th></th>
                            
                      </tr>
                  </thead>
                  <tbody>
                      {
                         
                          Tcontent.map((data,index)=>(
<tr key={data.id}>
                           
                          <td>{data.No}</td>
                          <td>{data.Title}</td>
                          <td>{data.Categories}</td>
                            <td>{data. CreatedDate}</td>

                             <td> <Button colorScheme='red' variant='outline' 
                            position="static"
width= "106px"
height=" 29px"
left=" 7px"
top="16px"
flex=" none"
order=" 0"
flex-grow=" 0"
margin=" 0px 0px">
                           
    Delete
  </Button></td>
 <td> <Button bg='#295DA2' variant='solid'
  position=" static"
width=" 105px"
height="29px"
flex="none"

left="75%"
order="0"
flex-grow="0"
margin="0px 0px"
 >
    Edit
  </Button></td>
 
  
    </tr>
                          ))
                      }
                      
                      
               

                        
                  </tbody>
              </table>
         
       </Box>
    </Stack>
     </Box>
</Stack>
</Box>
 </Stack>   
</Stack>
</Container>
    )
    }
    
    {/**table */}

     const Container= styled.div`
     width:100%;
     overflow-x:hidden;
     .Header{
    width:100%;
    display:flex;
    align-items:center;
    justify-content:space-between;
   
}
.Title{
    
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 27.7081px;
    line-height: 32px;
    display: flex;
justify-content: center;
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
     .Table{
        
       
  width:100%;
table {
  width:100%;
}
th,
td {
  border: 1px solid #ffffff;
  text-align: left;
  padding: 8px;
  font-size: 16.7081px;
  font-style: normal;
  font-family: Noto Sans;
  font-weight: 32px;
  font-style: normal;
  backgrounf-color: #e5e5e5;

}

th {
  background-color: #e5e5e5;
}

td {
  background-color:white;
}

form {
  display: flex;
  gap: 5px;
}


form * {
  font-size: 20px;
}

     }

     `
    export default PostGrid