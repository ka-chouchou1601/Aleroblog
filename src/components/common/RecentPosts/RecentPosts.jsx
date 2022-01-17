import React from 'react'
import styled from 'styled-components'
import {Box, Stack, VStack, HStack} from '@chakra-ui/react'

const RecentPosts = () => {
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
    return (
        <Container>
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
`
export default RecentPosts
