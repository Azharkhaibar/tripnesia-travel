import React from 'react'
import { 
  Box,
  Text,
  Image,
  Heading,
  Flex,
  Button,
  Stack
} from '@chakra-ui/react'
import { Navbar } from '../components/navbar'

const Service = () => {
  return (
    <Box>
      <Box
        px="0px"
        bgImage="url('/image/panorama/yunani.png')"
        h="75vh"
        bgSize="cover"
        bgRepeat="no-repeat"
        pos="relative"
      >
        {/* Overlay */}
        <Box
          w="100%"
          h="100%"
          bg="black"
          opacity="0.4" 
          pos="absolute"
          zIndex="0" 
        />

        <Navbar />
        <Box textAlign="center" pt="10%" zIndex="1" pos="relative"> {/* Menambahkan pos relative */}
          <Heading
            fontSize={["50px", "60px", "80px"]}
            color="white"
            pt="1%"
          >
            Services
          </Heading>

          <Text
            fontSize="18px"
            fontWeight="400"
            pt="2%"
            color="white"
            maxW="600px"
            mx="auto"
          >
            Plan and book your perfect trip with expert advice, travel tips, destination information, and inspiration from us.
          </Text>
        </Box>
      </Box>

      {/* BEST TRAVEL */}
      <Box w="100%"
        h="100vh"
      >
       
      </Box>


    </Box>
  )
}

export default Service