import React from 'react'
import styled from'styled-components'
import{ Box, Stack} from '@chakra-ui/react'

const SideNav =()=>{
    return(
        <Container>
<Box>
           <Stack direction="column">
               <Box  className="Logo">
<img src={'./icons/logo2.svg'}/>
<img src={'./icons/chevrons.svg'}/>
               </Box>

               </Stack> 
        </Box>
        </Container>
    )
}
const Container= styled.div`
`
export default SideNav