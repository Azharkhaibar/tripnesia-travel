import React from "react";
import {
  Box,
  Text,
  Heading,
} from "@chakra-ui/react";
import { Navbar } from "./navbar";

export const Banner = ({ bgImage, title, breadcrumbs }) => {
  return (
    <Box bgImage={`url(${bgImage})`} pos="relative" bgRepeat="no-repeat" bgSize="cover" w="100%" h="60vh">
      <Navbar />
      {/* Overlay */}
      <Box pos="absolute" top="0" left="0" w="100%" h="100%" bg="black" opacity="0.3" zIndex="1"></Box>
      <Box pos="relative" zIndex="10" h="100%" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
        <Heading textAlign="center" fontSize="65px" color="white" mb="0">
          {title}
        </Heading>
        {/* Breadcrumb */}
        <Box display="flex" color="white" fontSize="20px" fontWeight="500" mt="2">
          {breadcrumbs.map((breadcrumb, index) => (
            <Text key={index} ml={index !== 0 ? 2 : 0}>
              {breadcrumb}
            </Text>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
