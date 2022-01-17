import React from 'react'
import styled from 'styled-components'
import {Box, Stack, VStack, HStack} from '@chakra-ui/react'

const SideBar = () => {
    let ListData=[{
        id:1,
       cat: 'FRONT END DEVELOPMENT'
    },{
        id:2,
       cat: 'JAVASCRIPT DEVELOPMENT' 
    },{
        id:3,
       cat: 'ONLINE MARKETING' 
    },{
        id:4,
       cat: 'NATIVE MOBILE DEVELOPMENT' 
    },{
        id:5,
       cat: 'SOFTWARE DEVELOPMENT' 
    },{
        id:6,
       cat: 'UI/UX' 
    },]
    let Soft_List=[{
        id:1,
        img:"/icons/Simage.png",
        Published:'Published 17 days ago By Alero',
        Title:'Web Solutions For Improving Your Online Store'
            },{
                id:2,
                img:"/icons/Simage.png",
                Published:'Published 2 days ago By Alero',
                Title:'How to Optimize Your Storefront for SEO'
                    },{
                        id:3,
                        img:"/icons/Simage.png",
                        Published:'Published 5 days ago By Alero',
                        Title:'Maintain performance with big datasets using MongoDB'
                            },]
    return (

        <Container>
       
             <VStack>

{/** categories */}

<Box>
    <Box className='recent_headtitle'>categories </Box>
    <Stack direction="column" spacing="7px">
        {
            ListData.map((data,index)=> (
             <Box className='list_cat' key={data.id}>{data.cat}</Box>
            ))
        }
       
       

    </Stack>
</Box>

{/** software development */}
<Box w='310px'>
    <Box className='recent_headtitle soft_head' >software development</Box>
    <Stack direction="column " spacing="30px">
        {
           Soft_List.map((data,index)=>(
             <Box className='Soft_List' key={data.id}>
             <img src={'/icons/Simage.png'} alt=''/>
             <h5>{data.Published}</h5>
             <h1>{data.Title}</h1>
         </Box>
           )) 
        }
       
    </Stack>
</Box>
</VStack>
</Container>   
    )
}
const Container= styled.div`
margin-top: 40px;
.recent_headtitle {
    width: 141px;
height: 33px;
background: #3A7A44;
margin-bottom:30px;

font-family: Noto Sans;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 19px;
text-transform: uppercase;
color: #FCFCFC;
display:flex;
justify-content:center;
align-items:center;

}
.list_cat{
    width: 326px;
    height: 64px;
     font-family: Noto Sans;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 207.2%;
color: #000000;
}
.soft_head{
    width:222px;
}
.Soft_List{
    height: 313px;
    h5 {
        font-family: Noto Sans;
        font-style: normal;
        font-weight: 500;
        font-size: 17.5762px;
        line-height: 24px;
        color:#9C9FA1;
    }
    img{
    width: 415px;
height: 194px;
}
h1{
    font-family: Noto Sans;
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 35px;
color: #000000;
}
}
`

export default SideBar
