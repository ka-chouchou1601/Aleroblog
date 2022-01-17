import React from 'react'
import styled from 'styled-components'
import {Box, Stack, VStack, HStack} from '@chakra-ui/react'
const Footer = () => {
    let Fsecond=[{
        id:1,
        name:"Website"
    }, {  id:2,
      name:"Mobile"
},{  id:3,
  name:"Online Store"
},{  id:4,
  name:"Domaine"
},{  id:5,
  name:"Logo& Brand Design"
},{  id:6,
  name:"Backend API development"
},
]    
let Fthird=[{
  id:1,
  name: "Help&learning "

},{
  id:2,
  name: "Support "

},{
  id:3,
  name: "Forum "

},] 
let Ffourth=[{
  id:1,
  name: "About us "

},{
  id:2,
  name: "Carrers "

},{
  id:3,
  name: "Resources "

},{
  id:4,
  name: "Contact "

},]  
    return (
        <Container>
           <Box>
                       {/**Horizontal section -4 column */}
                       <Stack direction ='row' spacing="50px">
                           {/**main */}
                           <Box >
                               <VStack w=" ">
                                   <Box className="First_section">
                                       <img src={'/icons/Logo.svg'} alt=" "/>
                                       <h2> Bring your business online.We can do it with you!</h2>
                                 <h5>Mobile : +2540794 268882</h5>
                                 <h5>Email  : marketing@alero.co.ke</h5>
                                   </Box>
                               </VStack>
                           </Box>
                           {/**services section */}
                           <Box className=" Services">
                           <Box className="F_Title">Services</Box>
                               <VStack w=" ">
                                   {
                                       Fsecond.map((data,index)=>(
                                        <Box className= " Second_section" key={data.id}>
                                        <h5>{data.name}</h5>
                                    </Box>
                                       ))
                                   }
                                 
                                   


                               </VStack>
                           </Box>
                     {/**Support Section */}
                     <Box className= "Support" >
                     <Box className="F_Title">Support</Box>   
                     <VStack >
                         {
                             Fthird.map((data,index)=>(
                                <Box className=" Third_section" key={data.id} >
                                <h5>{data.name}</h5>
                            </Box>
                             ))
                         }
                        
                     </VStack>
                     </Box>
                     {/**Company Section */}
                     <Box className= "Company" >
                     <Box className="F_Title">Company</Box>   
                     <VStack >
                         {
                             Ffourth.map((data,index)=>(
                                <Box className=" Fourth_section" key={data.id} >
                                <h5>{data.name}</h5>
                            </Box>
                             ))
                         }
                        
                     </VStack>
                     </Box>
                       </Stack>
                       </Box>  
                       </Container>
    )
}
const Container = styled.div`
margin-top: 40px;
.First_section{
    .img{
    position: absolute;
    width: 202.36px;
    height: 63.56px;
    left: 230px;
    top: 118px;
    }
    h2{
        width:293px;
    font-family: Noto Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 22.3818px;
    line-height: 29px;
    color: #022211;
    }
    h5{
        font-family: Noto Sans;
        font-style: normal;
        font-weight: 500;
        font-size: 14.046px;
        line-height: 25px;
        color: #022211;
           
    }
    }
    .Services{
        margin-bottom: 50px;
    .F_Title{
       height:35px;
        font-family: Noto Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 22.3818px;
        line-height: 30px;
        text-align: right;
        color: #022211; 
    }
    .Second_section{
       
       h5{
           height:15px;
     margin-left: 55%;
       width:170px;
        font-family: Noto Sans;
    font-style: normal;
    font-weight: normal;
    font-size:14.046px;
    line-height: 25px;
    
    color: #022211;
    }
    }
    }
    .Support{
        .F_Title{
            height:35px;
             font-family: Noto Sans;
             font-style: normal;
             font-weight: bold;
             font-size: 22.3818px;
             line-height: 30px;
             text-align: right;
             color: #022211; 
         }
         .Third_section   {
            h5{
                height:15px;
          margin-left: 55%;
            width:170px;
             font-family: Noto Sans;
         font-style: normal;
         font-weight: normal;
         font-size:14.046px;
         line-height: 25px;
         
         color: #022211;
         }   
         }
    }
    .Company{
        .F_Title{
            height:35px;
             font-family: Noto Sans;
             font-style: normal;
             font-weight: bold;
             font-size: 22.3818px;
             line-height: 30px;
             text-align: right;
             color: #022211; 
         }
         .Fourth_section {
            h5{
                height:15px;
          margin-left: 55%;
            width:170px;
             font-family: Noto Sans;
         font-style: normal;
         font-weight: normal;
         font-size:14.046px;
         line-height: 25px;
          color: #022211;
         }   
         }
    }
`

export default Footer
