"use client"
import React, { useState, useEffect } from 'react'
import { Navbar } from '../components/navbar'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { EmailIcon } from '@chakra-ui/icons';
import {
  Box,
  Text,
  Heading,
  Image,
  Flex,
  Button,
  Card,
  Input
} from '@chakra-ui/react'
import NextLink from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { dataDestinations } from '../data/metadata1'
import { guider } from '../data/dataguider';
import '../design/reactslider.css'
import axios from 'axios';
const Landpage = () => {
  const [popularDestinations, setPopularDestinations] = useState([])
  const commonSliderSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    arrows: true,
    nextArrow: <ChevronRightIcon w={8} h={8} color="gray.500" />,
    prevArrow: <ChevronLeftIcon w={8} h={8} color="gray.500" />,
  };

  const settings = {
    ...commonSliderSettings,
    autoplaySpeed: 2500,
    cssEase: "ease-in-out",
  };

  const sliderGuider = {
    ...commonSliderSettings,
    speed: 1500,
    autoplaySpeed: 4000,
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/axios/fetch")
      .then((response) => {
        setPopularDestinations(response.data.data);
      })
      .catch((error) => {
        console.error("terjadi error saat fetching data", error);
      });
  }, [])
  return (
    <Box maxW="100%" h="250vh">
      <Box px="0px" bgImage="url('/image/beautiful-girl-standing-viewpoint-koh-nangyuan-island-near-koh-tao-island-surat-thani-thailand.jpg')"
        h="95vh" bgSize="cover" bgRepeat="no-repeat"
      >
        <Navbar />
        <Box textAlign="center" pt="9%">
          <Heading fontSize="80px" color="white">
            Lets Make Your Best
            <br /> Trip Ever
            <Text fontSize="18px" fontWeight="400" pt="1%">
              Plan and book your perfect trip with expert advice, travel tips, destination information and inspiration from us.
            </Text>
            <Box mt="4%">
              <Text color="white" p="15px" bg="#3FA2F6" w="170px" textAlign="center" m="auto" fontSize="18px" borderRadius="25px" cursor="pointer">
                Discover Now
              </Text>
            </Box>
          </Heading>
        </Box>
      </Box>
      <Box w="100%" h="50vh" display="flex">
        <Box w="50%" h="100%" px="6%">
          <Box pt="3%" mb="0">
            <Heading fontSize="75px" display="flex" alignItems="center" pt={20}>
              Indonesia
              <Text fontSize="25px" ml="10px" mt="38">
                Asia
              </Text>
            </Heading>
          </Box>
          <Text mb="20px" mt="0" fontSize="20px">
            This beguiling nation of over 17,000 islands is home to a huge diversity of adventures to choose from – Indonesias sheer range of experiences is hard to beat.
          </Text>
          <Box display="flex" gap="20px">
            <Text p="12px" bg="blue" color="white" borderRadius="22px" cursor="pointer">
              Best Time for Visit
            </Text>
            <Text p="12px" bg="blue" color="white" borderRadius="23px" cursor="pointer">
              Best Places to Visit
            </Text>
          </Box>
        </Box>
        <Box w="50%" h="100%">
          <Box m="auto" mt="17%" bg="#D1E9F6" h="auto " borderRadius="12px" p="20px" textAlign="center" w="450px">
            <Heading fontSize="28px">
              Plan your trip with Guide, an AI travel planner!
              <Text fontSize="16px" fontWeight="400" mt={4}>
                Create a personalized trip itinerary in seconds using artificial intelligence.
              </Text>
              <NextLink href="/destinasi">
                <Text bg="#3FA2F6" w="400px" m="auto" borderRadius="23px" fontSize="18px" p="10px" color="white" mt="11%">
                  Create a Trip
                </Text>
              </NextLink>
            </Heading>
          </Box>
        </Box>
      </Box>

      {/* SLIDER  */}
      <Box w="100%" h="100vh">
        <Box w="100%" m="auto">
          <Box display="flex" justifyContent="space-between" px="6%" alignItems="center">
            <Box display="flex" flexDirection="column" w="400px">
              <Heading mb="0" fontSize="35px" pl="1%">
                Popular Destination
                <Text mt="15" fontSize="18px" fontWeight="400" opacity="">
                  Lets enjoy this heaven on earth
                </Text>
              </Heading>
            </Box>
            <Text p="12px" fontSize="17px" borderRadius="10px" fontWeight="400" mb="0" bg="grey">
              See all
            </Text>
          </Box>
          <Box width="100%" maxW="1480px" mx="auto" mt="2%" h="500px">
            <Slider {...settings}>
              {dataDestinations.map((destination, index) => (
                <Box key={index} h="520px">
                  <Box maxW="410px" h="470px" borderRadius="md" boxShadow="md" overflow="hidden" display="flex" flexDirection="column" textAlign="left" mt="0" m="auto">
                    <Image src={destination.img} alt="foto-dummy" w="100%" h="auto" mt="0" />
                    <Box p="4">
                      <Heading size="md">{destination.destinasi}</Heading>
                      <Text fontWeight="400" fontSize="18px" mt="2">
                        {destination.deskripsi}
                      </Text>
                      <Flex justifyContent="space-between" alignItems="center" mt="4">
                        <Text fontSize="14px" fontWeight="400">
                          {destination.lokasi}
                        </Text>
                        <Text fontSize="18px">
                          {destination.price} /{" "}
                          <Text as="span" fontSize="13px">
                            Person
                          </Text>
                        </Text>
                      </Flex>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Slider>
          </Box>

          <Box w="100%" h="90vh" mt="6%" borderRadius="20px" p="0"
            pos="relative"
          >
            <Heading
              fontSize="70px"
              fontWeight="700"
              textAlign="center"
              zIndex="999"
              color="white"
              pos="absolute"
              right="0"
              left="0"
              top="37%"
            >
              Discover story-worthy<br /> travel moments
            </Heading>
            <Box
              bg="black"
              w="100%"
              h="100%"
              opacity="0.1"
              pos="absolute"
            ></Box>
            <Box display="flex" alignItems="center" justifyContent="space-between" w="100%" h="100%" p="0" m="0">
              <Box
                w="33.33%"
                h="100%"
                bgImage="url('/image/panorama/baliwonderful.png')"
                bgSize="cover"
                bgPosition="center"
                pos="relative"
              >
                <Box pos="absolute" w="100%" h="100%" bg="black" opacity="0.2" _hover={{ bg: "transparent", transition: "0.3s ease-in-out" }}>
                </Box>
                <Heading
                  pos="absolute"
                  bottom="4%"
                  left="2%"
                  p="20px"
                  fontSize="32px"
                  color="white"
                >
                  top 5 vacation destination best to visit in summer
                </Heading>
              </Box>
              <Box
                w="33.33%"
                h="100%"
                bgImage="url('/image/panorama/ntt.png')"
                bgSize="cover"
                bgPosition="center"
                pos="relative"
              >
                <Box pos="absolute" w="100%" h="100%" bg="black" opacity="0.2" _hover={{ bg: "transparent", transition: "0.3s ease-in-out" }}>
                </Box>
                <Heading
                  pos="absolute"
                  bottom="4%"
                  left="2%"
                  p="20px"
                  fontSize="32px"
                  color="white"
                >
                  top 5 vacation destination best to visit in summer
                </Heading>
              </Box>
              <Box
                w="33.33%"
                h="100%"
                bgImage="url('/image/panorama/wowplace.png')"
                bgSize="cover"
                bgPosition="center"
                pos="relative"
              >
                <Box pos="absolute" w="100%" h="100%" bg="black" opacity="0.2" _hover={{ bg: "transparent", transition: "0.3s ease-in-out" }}>
                </Box>
                <Heading
                  pos="absolute"
                  bottom="4%"
                  left="2%"
                  p="20px"
                  fontSize="32px"
                  color="white"
                >
                  top 5 vacation destination best to visit in summer
                </Heading>
              </Box>
            </Box>
          </Box>



          <Box pos="relative" w="100%" h="50%" bg="grey" right="0" top="1985"></Box>
          <Box w="100%" h="70vh" pt="8%" pos="relative" px='6%'>
            <Box textAlign="center">
              <Text mb="0">
                Meet With Guide
                <Heading mt="0" fontSize="38px">
                  Tour Guide
                </Heading>
              </Text>
            </Box>
            <Box w="100%" h="100%" zIndex="1" mt="50px">
              <Slider {...sliderGuider}>
                {guider.map((guiderPerson, index) => (
                  <Box key={index} pos="relative" textAlign="center" pb="50px" zIndex="10">
                    <Image
                      src={guiderPerson.pictPerson}
                      w="150px"
                      h="150px"
                      borderRadius="50%"
                      objectFit="cover"
                      position="absolute"
                      top="0"
                      left="50%"
                      transform="translate(-50%, -30%)"
                      border="3px solid grey"
                      boxShadow="0 0 10px rgba(0, 0, 0, 0.1)"
                      zIndex="100"
                      alt="gambar-dummy"
                    />
                    <Card maxW="400px" h="300px" bg="white" pt="100px" zIndex="0" borderRadius="20px" boxShadow="lg" p="15px">
                      <Box p="40px" bg="pink" borderRadius="20px" mt="41%">
                        <Box textAlign="center" h="100%">
                          <Heading mb="0" size="md">
                            {guiderPerson.name}
                          </Heading>
                          <Text fontSize="18px" fontWeight="400" mt="0">
                            {guiderPerson.job}
                          </Text>
                        </Box>
                      </Box>
                    </Card>
                  </Box>
                ))}
              </Slider>
            </Box>
          </Box>

          <Box
            w="100%"
            h="70vh"
            bgImage="url(/image/panorama/travelguider.png)"
            bgRepeat="no-repeat"
            bgSize="cover"
            pos="relative"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Box
              w="100%"
              h="100%"
              bgGradient="linear(to-r, blackAlpha.600, blackAlpha.400)"
              pos="absolute"
              top="0"
              left="0"
              zIndex="1"
            />
            <Box
              pos="relative"
              zIndex="2"
              textAlign="center"
              color="white"
              maxW="800px"
              px="20px"
            >
              <Heading
                fontSize={{ base: "24px", md: "52px" }}
                fontWeight="bold"
                lineHeight="1.2"
                mb="10px"
              >
                We’re here to take you
              </Heading>
              <Heading
                fontSize={{ base: "24px", md: "52px" }}
                fontWeight="bold"
                lineHeight="1.2"
              >
                to the places youll love
              </Heading>
            </Box>
          </Box>


          <Box w="100%" h="40vh" bg="blue.100" p={5} borderRadius="md">
            <Box w="100%" h="100%">
              <Flex direction="column" alignItems="center" justifyContent="center" h="100%">
                <Box w="60px" h="60px" borderRadius="full" bg="white" display="flex" alignItems="center" justifyContent="center">
                  <EmailIcon boxSize={8} color="blue.500" />
                </Box>
                <Heading as="h2" size="xl" textAlign="center" mb={4}>
                  Travel inspiration delivered<br /> directly to your inbox
                </Heading>
                <Box display="flex" alignItems="center" justifyContent="center" mb={4}>
                  <Input
                    placeholder="Enter your email"
                    size="lg"
                    width="500px"
                    borderColor="blue.400"
                    borderRadius="25px"
                    _focus={{ borderColor: "blue.500" }}
                    mr={2}
                  />

                  <Button colorScheme="blue" size="lg"
                    borderRadius="25px"
                  >
                    Subscribe Now
                  </Button>
                </Box>
                <Text textAlign="center" color="gray.600" fontSize="sm">
                  Subscribe to our newsletters and promotions. Read our
                  <Text as="span" color="blue.500" textDecoration="underline"> Privacy Policy.</Text>
                </Text>
              </Flex>
            </Box>
          </Box>
          <Box w="100%" h="200vh">
            <Box></Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Landpage