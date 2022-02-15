import React from 'react'
import styled from 'styled-components'
import {Box, Stack, VStack} from '@chakra-ui/react'
import Footer from'../components/common/Footer/Footer'
import SideBar from'../components/common/SideBar/SideBar'
import RecentPosts from'../components/common/RecentPosts/RecentPosts'
import Navigation from'../components/common/Navigation/Navigation'

const Page1 = () => {
   
    return (
        <Container>
             <Navigation/>

<Stack direction='column' pl='7%' pr='7%' spacing='30px'> 

                    {/** horizontal - 2 columns */}
                    <Stack direction='row' spacing='50px'>
                    {/** main */}
                    <Box>
                    <Box className='recent_headtitle post_headtitle'>Home / Blog / 15 Vue vs React in 2021 - a Comparison from a Business Perspective</Box>
                        <VStack w="724px" spacing='10px'>
                
                                    <Box className='posts_wrap' >
                                
                                                <img src={'/icons/Eimage.png'} />
                                                <h5>Published 2 months ago By Alero</h5>
                                                <h1>15 Vue vs React in 2021 - a Comparison from a Business Perspective</h1>
                                        
                                    </Box>  

                                    <Box>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Penatibus lectus arcu sed faucibus. Magna enim tortor vestibulum cursus. Lectus consectetur id nec lacus eu feugiat tempus augue. Dictumst venenatis scelerisque rhoncus phasellus tempor neque facilisis. In scelerisque nibh ullamcorper pulvinar. Imperdiet iaculis volutpat et semper eleifend nisl, posuere in. Sapien, at ullamcorper viverra pulvinar morbi at pulvinar. Mauris, tempus nam euismod et magna viverra. Consequat sagittis purus senectus condimentum eros, gravida morbi nunc consectetur. Velit, egestas sit vestibulum volutpat ut nullam. Pretium ut consectetur velit, proin magna est ullamcorper venenatis morbi. Bibendum vitae quis urna, duis nisl lobortis.
                                                            A pellentesque egestas eget massa sapien. Vel egestas eu, feugiat dui aliquam imperdiet nunc nisi, posuere. Donec justo vel condimentum ut ullamcorper risus mi. Turpis orci, cursus congue turpis consequat. Dui nunc curabitur risus sagittis consequat. Feugiat scelerisque odio congue mi gravida. Ut semper odio bibendum cras. Laoreet amet aliquam ac aliquet. Vulputate cras senectus id urna sem turpis etiam. Volutpat bibendum eros facilisi leo elementum. Pellentesque pellentesque potenti venenatis praesent pharetra, viverra amet.
                                                                Volutpat elementum nibh sit condimentum nisl imperdiet. Odio neque odio in tempor ut pellentesque scelerisque lacus sed. Eleifend netus libero aliquam arcu mauris, aliquet semper facilisis viverra. Sed elit ut pellentesque accumsan nulla. Tincidunt nullam lacus, vel, libero quam scelerisque et. Facilisis pellentesque aliquet justo, vitae.

                                                        </p>
                                    </Box>

                                    <Box className='inner_postImage'><img src={'/icons/Eimage.png'} /></Box>

                                    <Box>
                                                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Penatibus lectus arcu sed faucibus. Magna enim tortor vestibulum cursus. Lectus consectetur id nec lacus eu feugiat tempus augue. Dictumst venenatis scelerisque rhoncus phasellus tempor neque facilisis. In scelerisque nibh ullamcorper pulvinar. Imperdiet iaculis volutpat et semper eleifend nisl, posuere in. Sapien, at ullamcorper viverra pulvinar morbi at pulvinar. Mauris, tempus nam euismod et magna viverra. Consequat sagittis purus senectus condimentum eros, gravida morbi nunc consectetur. Velit, egestas sit vestibulum volutpat ut nullam. Pretium ut consectetur velit, proin magna est ullamcorper venenatis morbi. Bibendum vitae quis urna, duis nisl lobortis.
                                                                    A pellentesque egestas eget massa sapien. Vel egestas eu, feugiat dui aliquam imperdiet nunc nisi, posuere. Donec justo vel condimentum ut ullamcorper risus mi. Turpis orci, cursus congue turpis consequat. Dui nunc curabitur risus sagittis consequat. Feugiat scelerisque odio congue mi gravida. Ut semper odio bibendum cras. Laoreet amet aliquam ac aliquet.Vulputate cras senectus id urna sem turpis etiam. Volutpat bibendum eros facilisi leo elementum. Pellentesque pellentesque potenti venenatis praesent pharetra, viverra amet.
                                                                    Volutpat elementum nibh sit condimentum nisl imperdiet. Odio neque odio in tempor ut pellentesque scelerisque lacus sed. Eleifend netus libero aliquam arcu mauris, aliquet semper facilisis viverra. Sed elit ut pellentesque accumsan nulla. Tincidunt nullam lacus, vel, libero quam scelerisque et. Facilisis pellentesque aliquet justo, vitae.
                                                                    Purus est eget vulputate turpis varius vel vel nisl neque. Natoque habitant ut vel curabitur diam. Aliquam ac vehicula viverra leo. Cursus sit condimentum turpis vel morbi in dui senectus sodales. Aliquet ac libero odio at. Consectetur nisl ante commodo eget egestas. Non nisl neque nibh suspendisse ornare egestas dui mauris. Orci, ultrices nec enim dictumst in quam est purus eu. Commodo vel odio duis cursus turpis malesuada. Lobortis mauris nisi, risus felis vitae, ipsum. Elementum viverra turpis venenatis, risus nisi, aliquet facilisis ut blandit. Aliquet mi lacus odio est tincidunt sit. Et malesuada ultrices tempor nibh commodo. Facilisis elit convallis quis ut feugiat tincidunt bibendum tortor.

                                                                    </p>
                                    </Box>
                                              
                        </VStack>
                    </Box>
                 <SideBar/>
    
</Stack>

<RecentPosts/>
   <Footer/>
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
.post_headtitle {
    width:100%;
}
.posts_wrap{
    width: 713px;
height: 100%;
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




.inner_postImage {
    img {
    width: 389px;
height: 277px;
position:relative !important;
    }

}

`

;

export default Page1
