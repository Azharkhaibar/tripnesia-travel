"use client"
import React, { useState, useEffect } from 'react'
import { Navbar } from '../components/navbar'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box, Container, Text, Heading, Image, Flex, Button } from '@chakra-ui/react'
import NextLink from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { dataDestinations } from '../data/metadata1'
import '../design/reactslider.css'
import axios from 'axios';
const Landpage = () => {
  const [popularDestinations, setPopularDestinations] = useState([])
     const settings = {
       dots: true,
       infinite: true,
       centerMode: false,
       slidesToShow: 4,
       slidesToScroll: 1,
       autoplay: true,
       autoplaySpeed: 2500,
       pauseOnHover: true,
       arrows: true,
       nextArrow: <ChevronRightIcon w={8} h={8} color="gray.500" />,
       prevArrow: <ChevronLeftIcon w={8} h={8} color="gray.500" />,
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
      <Box px="0px" bgImage="url('/image/beautiful-girl-standing-viewpoint-koh-nangyuan-island-near-koh-tao-island-surat-thani-thailand.jpg')" h="100vh" bgSize="cover" bgRepeat="no-repeat">
        <Navbar />
        <Box textAlign="center" pt="15%">
          <Heading fontSize="65px" color="white">
            Lets Make Your Best
            <br /> Trip Ever
            <Text fontSize="18px" fontWeight="400">
              Plan and book your perfect trip with expert advice, travel tips, destination information and inspiration from us.
            </Text>
            <Box mt="4%">
              <Text color="white" p="15px" bg="#3FA2F6" w="170px" textAlign="center" m="auto" fontSize="18px" borderRadius="10px" cursor="pointer">
                Discover Now
              </Text>
            </Box>
          </Heading>
        </Box>
      </Box>
      <Box w="100%" h="48vh" display="flex">
        <Box w="50%" h="100%" px="6%">
          <Box pt="3%" mb="0">
            <Heading fontSize="75px" display="flex" alignItems="center" mb="0">
              Indonesia
              <Text fontSize="25px" ml="10px" mt="38">
                Asia
              </Text>
            </Heading>
          </Box>
          <Text mb="20px" mt="28" fontSize="20px">
            This beguiling nation of over 17,000 islands is home to a huge diversity of adventures to choose from – Indonesia's sheer range of experiences is hard to beat.
          </Text>
          <Box display="flex" gap="20px">
            <Text p="12px" bg="blue" color="white" borderRadius="md" cursor="pointer">
              Best Time for Visit
            </Text>
            <Text p="12px" bg="blue" color="white" borderRadius="md" cursor="pointer">
              Best Places to Visit
            </Text>
          </Box>
        </Box>
        <Box w="50%" h="100%">
          <Box m="auto" mt="13%" bg="#D1E9F6" h="auto" p="20px" textAlign="center" w="450px">
            <Heading fontSize="28px">
              Plan your trip with Guide, an AI travel planner!
              <Text fontSize="16px" fontWeight="400">
                Create a personalized trip itinerary in seconds using artificial intelligence.
              </Text>
              <NextLink href="/destinasi">
                <Text bg="#3FA2F6" w="400px" m="auto" fontSize="18px" p="10px" color="white" mt="11%">
                  Create a Trip
                </Text>
              </NextLink>
            </Heading>
          </Box>
        </Box>
      </Box>
      <Box w="100%" h="100vh">
        <Box w="90%" m="auto">
          <Box display="flex" justifyContent="space-between" px="13px" alignItems="center">
            <Box display="flex" flexDirection="column" w="400px">
              <Heading mb="0" fontSize="35px" pl="1%">
                Popular Destination
                <Text mt="15" fontSize="18px" fontWeight="400" opacity="">
                  Let's enjoy this heaven on earth
                </Text>
              </Heading>
            </Box>
            <Text p="15px" fontSize="17px" fontWeight="400" mb="0" bg="grey">
              See all
            </Text>
          </Box>
          <Box width="100%" maxW="1460px" mx="auto" mt="1%">
            <Slider {...settings}>
              {dataDestinations.map((destination, index) => (
                <Box key={index}>
                  <Box
                    maxW="400px"
                    maxH="500px"
                    borderRadius="md"
                    boxShadow="md"
                    overflow="hidden"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    textAlign="left"
                    mt="0"
                    m="auto"
                  >
                    <Image src={destination.img} alt="foto-dummy" w="100%" h="auto" />
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
        </Box>
      </Box>
    </Box>
  );
}

export default Landpage