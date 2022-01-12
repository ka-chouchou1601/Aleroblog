import React from 'react'
import styled from 'styled-components'
import {Box, Stack, VStack, HStack} from '@chakra-ui/react'
const Home = () => {

    let RecentData = [{
        id: 1,
        description: '15 Steps to Become Junior Developer'
    },{
        id: 2,
description: '15 Steps to Become Junior Developer'
    },{
        id: 3,
        description: 'Jamstack Development Cost  All You Need to Know'
    },{
        id: 4,
        description: 'Web Solutions For Improving Your Online Store'
    }]
    let post=[{
        id:1,
        img:"/icons/Eimage",
        Published:'Published 2 months ago By Alero',
        Title:'Why E-commerce Development Company Should Help You To Go Online',
        subtext:'Even it is not the first time youre doing it. Web development is evolving each day so If you want to be on top, there is a lot of things to acknowledge and implement. [...]'
    },{
        id:1,
        img:"/icons/Eimage",
        Published:'Published 2 months ago By Alero',
        Title:'How to Use PWA Plugin in ReactJS',
        subtext:'PWA support plugin is one of the greatest features in my opinion. In this post, I would like to introduce you into PWA world using ReactJS. [...]'
    },{
        id:1,
        img:"/icons/Eimage",
        Published:'Published 2 months ago By Alero',
        Title:'The Top JavaScript Trends to Look Forward to In 2021',
        subtext:'If you are wondering what 2019 will bring when it comes to top JavaScript development check out our newest blog post about upcoming trends [...]'
    },]
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
            <Stack direction='column' pl='7%' pr='7%' spacing='30px'>
                {/** recent posts */}
                  <Box>
                        <Box className='recent_headtitle'>RECENT POSTS</Box>
                        

                        <Stack direction='row' spacing="20px">

                        {
                            RecentData.map((data, index)=>(
                             <Box className='recent__post' key={data.id}>
                                <h5>1 hour ago</h5>
                                <img src={'/icons/image.png'} alt=""/>
                                <h2>{data.description}</h2>
                            </Box>   
                            ))
                        }  
                        </Stack>
                   </Box>
                  

                  {/** main section */}
                    <Box>
                    {/** horizontal - 2 columns */}
                    <Stack direction='row' spacing='50px'>
                    {/** main */}
                    <Box>
                    <Box className='recent_headtitle'>Ecommerce</Box>
                        <VStack w="724px
                        ">
                            {
                                post.map((data,index)=>(
                                    <Box className='posts_wrap' key={data.id}>
                                
                                    <img src={'/icons/Eimage.png'} />
                                    <h5>{data.Published}</h5>
                                    <h1>{data.Title}</h1>
                                     <p>{data.subtext}</p>
                                </Box>  
                                ))
                            }
                           
                        </VStack>
                    </Box>
                    

                        {/** sidebar */}
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
                    </Stack>
                    </Box>
            </Stack>
        </Container>
    )
}

const Container = styled.div`

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

.recent__post {
        width: 327.95px;
    height: 277.19px;
    overflow:hidden;
    h5 {
        font-family: Noto Sans;
        font-style: normal;
        font-weight: 600;
        font-size: 14.046px;
        line-height: 19px;
        color: #ABABAB;
    }

    h2 {
        font-family: Noto Sans;
        font-style: normal;
        font-weight: 600;
        font-size: 19px;
        line-height: 31px;
        color: #000000;
    }

    img {
        width: 327.95px;
        height: 172.44px;
        object-fit:cover;
    }
}

.posts_wrap{
    width: 713px;
height: 548.25px;
    img{
    width: 100%;
    height: 326.41px;
    object-fit:cover;
    }
    h5 {
        font-family: Noto Sans;
        font-style: normal;
        font-weight: 600;
        font-size: 14.046px;
        line-height: 19px;
        color: #ABABAB;
    }
    h1{
 height: 85.63px;       
font-family: Noto Sans;
font-style: normal;
font-weight: 600;
font-size: 34.3962px;
line-height: 47px;
display:flex;
align-items: center;
color: #000000;
    }

p{
    height: 75px;
font-family: Noto Sans;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 25px;
}
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

;


export default Home
