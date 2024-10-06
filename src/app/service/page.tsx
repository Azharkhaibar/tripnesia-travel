"use client";
import React, { useState } from "react";
import { Box, Text, Image, Heading, Flex, Badge, Button, Icon } from "@chakra-ui/react";
import { Navbar } from "../components/navbar";
import { HooksPaketDestinasi } from "../libs/hooks/fetchpaketdestinasi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Menggunakan ikon untuk tombol

const Service = () => {
  const { paketDestinasi, error } = HooksPaketDestinasi();

  const itemsPerPage = 4;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - itemsPerPage, 0));
  };
  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + itemsPerPage, paketDestinasi.length - itemsPerPage));
  };

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
      {/* Hero Section */}
      <Box
        bgImage="url('/image/panorama/yunani.png')"
        h="70vh"
        bgSize="cover"
        bgRepeat="no-repeat"
        pos="relative"
      >
        <Box w="100%" h="100%" bg="blackAlpha.600" pos="absolute" zIndex="0" />
        <Navbar />
        <Box textAlign="center" pt="10%" zIndex="1" pos="relative">
          <Heading fontSize={["40px", "60px"]} color="white">
            Explore Our Services
          </Heading>
          <Text
            fontSize="18px"
            fontWeight="400"
            pt="2%"
            color="whiteAlpha.900"
            maxW="700px"
            mx="auto"
          >
            Discover your next great adventure, become an explorer to get started on planning your perfect trip.
          </Text>
        </Box>
      </Box>

      {/* Service Slider Section */}
      <Box w="100%" py="60px" pos="relative">
        <Box w="100%" maxW="1430px" m="auto">
          <Box textAlign="center" mb="30px">
            <Text fontSize="18px" fontWeight="400">Best Experience</Text>
            <Heading fontSize="40px" fontWeight="600">Amazing Travel Experience</Heading>
          </Box>

          {/* Navigation Buttons */}
          <Flex justify="space-between" mb="4" alignItems="center" textAlign="center">
            <Button
              onClick={handlePrev}
              isDisabled={currentIndex === 0}
              variant="outline"
              colorScheme="teal"
              leftIcon={<Icon as={FaChevronLeft} />}
              pos="absolute"
              left="2%"
              top="50%"
              borderRadius="50%"
              w="50px"
              h="50px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              _hover={{ bg: "teal.500", color: "white" }}
              _disabled={{ opacity: 0.5 }}
              aria-label="Previous Slide"
            />

            <Button
              onClick={handleNext}
              isDisabled={currentIndex >= paketDestinasi.length - itemsPerPage}
              variant="outline"
              colorScheme="teal"
              rightIcon={<Icon as={FaChevronRight} />}
              pos="absolute"
              right="2%"
              top="50%"
              borderRadius="50%"
              w="50px"
              h="50px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              _hover={{ bg: "teal.500", color: "white" }}
              _disabled={{ opacity: 0.5 }}
              aria-label="Next Slide"
            />
          </Flex>
          <Flex justify="center">
            {paketDestinasi.slice(currentIndex, currentIndex + itemsPerPage).map((paket, index) => (
              <Box
                key={index}
                w={["300px", "320px", "350px"]}
                h="auto"
                borderRadius="15px"
                boxShadow="lg"
                overflow="hidden"
                display="flex"
                flexDirection="column"
                m="10px"
              >
                <Image
                  src={`data:image/jpeg;base64,${paket.img}`}
                  alt={paket.nama_paket}
                  w="100%"
                  h="auto"
                  objectFit="cover"
                  borderTopRadius="15px"
                />
                <Box p="20px" flex="1" display="flex" flexDirection="column" justifyContent="space-between">
                  <Flex justifyContent="space-between" align="center">
                    <Heading fontSize="28px" color="gray.800">
                      {paket.nama_paket}
                    </Heading>
                    <Badge colorScheme="yellow" fontSize="0.9em">
                      {paket.rating} ★
                    </Badge>
                  </Flex>
                  <Text fontSize="16px" color="gray.600" mb="1px">
                    {paket.tempat}
                  </Text>
                  <Text mb="20px" fontSize="25px" color="black" fontWeight="bold">
                    Rp. {paket.harga}/<span style={{ opacity: "0.4", fontWeight: "600", fontSize: "18px" }}>Person</span>
                  </Text>
                  <Flex justifyContent="space-between" pt="2%">
                    <Text fontWeight="600" fontSize="18px">{paket.batas_hari} Days</Text>
                    <Text p="6px" bg="blue" color="white" borderRadius="20px">Book Now</Text>
                  </Flex>
                </Box>
              </Box>
            ))}
          </Flex>
        </Box>
      </Box>

      <Box w="100%" h="100vh">
        <Box textAlign="center">
          <Text>Lets Checkin</Text>
          <Heading>Affordable Pricing plans</Heading>
        </Box>
      </Box>
    </Box>
  );
};

export default Service;
