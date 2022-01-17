import React from 'react'
import styled from 'styled-components'
import {Box, Stack, VStack, HStack} from '@chakra-ui/react'
import Footer from'../components/common/Footer/Footer'
import SideBar from'../components/common/SideBar/SideBar'
import RecentPosts from'../components/common/RecentPosts/RecentPosts'
import Navigation from'../components/common/Navigation/Navigation'
const Home = () => {

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
  
    
             
    return (
        <Container>
            <Navigation/>
             <Stack direction='column' pl='7%' pr='7%' spacing='30px'>  
                {/** recent posts */}
                 
                  <RecentPosts/>

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
                    <SideBar/>

                        {/** sidebar */}
                       
                    </Stack>
                    
                    </Box>
                    
                    <Footer/>
                      {/** Footer */}
                   
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


`

;


export default Home
