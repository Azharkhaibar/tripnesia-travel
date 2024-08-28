import React from "react";
import {
    Box,
    Text,
    Heading,
    Container,
    Image
} from "@chakra-ui/react";

export const Banner = () => {
    return (
      <Box bgImage="url('/image/banner/banner2.jpg')" pos="relative" bgRepeat="no-repeat" bgSize="cover" w="100%" h="45vh">
        {/* Overlay */}
        <Box pos="absolute" top="0" left="0" w="100%" h="100%" bg="black" opacity="0.3" zIndex="1"></Box>
        <Box pos="relative" zIndex="10" h="100%" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
          <Heading textAlign="center" fontSize="65px" color="white" mb="0">
            Contact us
          </Heading>
          {/* Breadcrumb */}
          <Box display="flex" color="white" fontSize="20px" fontWeight="500" mt="2">
            <Text>Home</Text>
            <Text ml={2}>Contact us</Text>
          </Box>
        </Box>
      </Box>
    );
}
