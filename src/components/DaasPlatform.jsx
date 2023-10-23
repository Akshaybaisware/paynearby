import React from 'react'
import {
    Image,
  } from '@chakra-ui/react';
  import "./styles.css"
  import image1 from "../images/image1.jpg"
  import image2 from "../images/image2.jpg"
  import image3 from "../images/image3.jpg"
  import { Text } from '@chakra-ui/react'


function DaasPlatform() {
  return (
    <>
    <div  className='main-component'> 
    
      {/* <h1>India's largest Distribution as-a-service (DaaS) platform</h1> */}
      <div className='text'>
      <Text fontSize='42px' color='Blue'>
         India's largest Distribution as-a-service (DaaS) platform
      </Text>
      </div>
       <div  style={{marginLeft:"2rem"}}className='images'>
        <div>
       <Image  ml={'20px'} src={image1} width={'380px'} />
       <p style={{marginLeft:"6rem"}}>Harward Business Publishing</p>
       </div>
       <div>
       <Image ml={'20px'} src={image2} width={'380px'}/>
       <p  style={{marginLeft:"4rem"}}>India's Best WorkPlacesTM in BFSI</p>
       </div>
       <div>
       <Image ml={'20px'} src={image3} width={'380px'}/>
       <p  style={{marginLeft:"5rem"}}>MIT Technology review </p>
       </div>
       
       </div>
      
       </div>
    

    </>
  )
}

export default DaasPlatform