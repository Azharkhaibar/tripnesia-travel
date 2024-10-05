"use client"
import React from 'react';
import {
  Box,
  Text,
  Image,
  Heading,
  Flex,
} from '@chakra-ui/react';
import { Navbar } from '../components/navbar';
import { HooksPaketDestinasi } from '../libs/hooks/fetchpaketdestinasi';

const Service = () => {
  const { paketDestinasi, error } = HooksPaketDestinasi(); 
  if (error) {
    return (
      <Text color="red" textAlign="center" mt="50px">
        Failed to load data: {error}
      </Text>
    );
  }
  if (!paketDestinasi.length) {
    return (
      <Text textAlign="center" mt="50px">
        Loading...
      </Text>
    );
  }

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
        <Box textAlign="center" pt="10%" zIndex="1" pos="relative">
          <Heading fontSize={["50px", "60px", "80px"]} color="white" pt="1%">
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

      {/* Best Travel Section */}
      <Box w="100%" py="50px" bg="gray.100">
        <Flex justify="center" wrap="wrap">
          {paketDestinasi.map((paket) => (
            <Box
              key={paket.id}
              w="350px"
              m="20px"
              bg="white"
              borderRadius="md"
              overflow="hidden"
              boxShadow="lg"
              transition="transform 0.3s"
              _hover={{ transform: 'scale(1.05)' }} // Add a hover effect
            >
              <Image
                src={`data:image/jpeg;base64,${paket.img}`} // Assuming img is a base64 string
                alt={paket.nama_paket}
                w="100%"
                h="200px"
                objectFit="cover"
              />
              <Box p="20px">
                <Heading size="md">{paket.nama_paket}</Heading>
                <Text mt="10px">Tempat: {paket.tempat}</Text>
                <Text>Harga: Rp. {paket.harga}</Text>
                <Text>Rating: {paket.rating}</Text>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default Service;
