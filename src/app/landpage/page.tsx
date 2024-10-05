"use client"
import React, { useState, useEffect } from 'react'
import { Navbar } from '../components/navbar'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaGlobe, FaMapMarkerAlt } from "react-icons/fa";
import { EmailIcon } from '@chakra-ui/icons';
import {
  Box,
  Text,
  Heading,
  Image,
  Flex,
  Button,
  Card,
  Input,
  Icon,
} from '@chakra-ui/react'
import NextLink from "next/link";
import { useNewsletterSubscription } from '../libs/hooks/fetchsubcriber';
import { SpotlightDestination } from '../data/spotlightlandpage';
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { dataDestinations } from '../data/metadata1'
import { guider } from '../data/dataguider';
import '../design/reactslider.css'
import axios from 'axios';
const Landpage = () => {
  const [emailForm, setEmailForm] = useState({ email: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEmailForm({ email: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "http://localhost:3001/subcriber/user",
        emailForm,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true
        }
      );

      console.log("Data successfully sent:", response.data);
      alert("Successfully registered!");

      // Reset form
      setEmailForm({ email: "" });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const status = error.response?.status;
        alert(
          `Failed to subscribe. Status ${status || "unknown"}. Please try again.`
        );
      } else {
        alert("An unexpected error occurred. Please try again.");
      }
      setError("There was an error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  
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

  return (
    <Box maxW="100%" h="250vh">
      <Box px="0px" bgImage="url('/image/panorama/yunani.png')"
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
                  <Box maxW="410px" h="470px" borderRadius="15px" boxShadow="md" overflow="hidden" display="flex" flexDirection="column" textAlign="left" mt="0" m="auto">
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

          {/* SPOTLIGHT DESTINATION */}

          <Box w="100%"
            h="75vh"
          >
            <Box textAlign="center" display="flex" flexDirection="column" alignItems="center" justifyContent="center"
              pt="3%"
            >
              <Icon as={FaGlobe} boxSize="40px" color="teal.500" mb="0px" />
              <Heading pt="1%">
                Spotlight Destinations
              </Heading>
            </Box>
            <Box w="100%" h="100%" display="flex"
              justifyContent="center"
              gap="22px"
              pt="2%"
            >
              {SpotlightDestination.map((spotlight, index) => (
                <Box key={index}>
                  <Box
                    w="350px"
                    h="460px"
                    bgImage={`url(${spotlight.imgUrl})`}
                    bgSize="cover"
                    bgPosition="center"
                    pos="relative"
                    borderRadius="15px"
                    p="10px"
                    cursor="pointer"
                  >
                    <Box
                      pos="absolute"
                      display="flex"
                      w="190px"
                      h="30px"
                      justifyContent="center"
                      alignItems="center"
                      bg="white"
                      borderRadius="15px"
                      backdropFilter="blur(10px)"
                      gap="8px"
                      px="10px"
                      textAlign="center"
                    >
                      <Icon as={FaMapMarkerAlt} boxSize="20px" color="blue" />
                      <Text>{spotlight.namePlace}</Text>
                    </Box>

                    <Box pos="absolute" bottom="20px" display="flex" alignItems="center" gap="10px">
                      <Text
                        w="40px"
                        h="40px"
                        borderRadius="100px"
                        bg="white"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        fontWeight="bold"
                        boxShadow="md"
                      >
                        {spotlight.available}
                      </Text>
                      <Text color="white" fontWeight="600" fontSize="18px">Tours Available</Text>
                    </Box>

                  </Box>
                </Box>
              ))}
            </Box>
          </Box>

          {/* SEASON SALE */}
          <Box w="100%" h="60vh" display="flex" justifyContent="center" alignItems="center">
            <Box
              w="88%"
              h="100%"
              pos="relative"
              bgImage="url(/image/panorama/jekardah.png)"
              bgRepeat="no-repeat"
              bgSize="cover"
              bgPosition="center"
              borderRadius="20px"
              p="10px"
            >
              <Box
                w="40%"
                h="auto"
                bg="rgba(255, 255, 255, 0.8)"
                borderRadius="15px"
                pos="absolute"
                top="20px"
                left="20px"
                backdropFilter="blur(20px)"
                overflow="hidden"
                p="20px"
              >
                <Heading fontSize="28px">Holiday Season Sale</Heading>
                <Text pt="2%" fontSize="18px">ave 25% or more with Member Prices. Book by Oct 13 for travel before Mar 31.</Text>
                <Text
                  mt="2%"
                  w="190px"
                  h="35px"
                  cursor="pointer"
                  borderRadius="20px"
                  bg="blue"
                  p="6px"
                  color="white"
                  textAlign="center"
                >Unlock Holidays Deals</Text>
              </Box>
            </Box>
          </Box>


          <Box pos="relative" w="100%" h="50%" bg="grey" right="0" top="1985"></Box>
          <Box w="100%" h="70vh" pt="6%" pos="relative" px='6%'>
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
            overflow="hidden"
          >
            <Box
              w="100%"
              h="100%"

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

            >
              <Heading
                fontSize={{ base: "24px", md: "52px" }}
                fontWeight="bold"
                lineHeight="1.2"
                mb="10px"
                pt="10%"
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

            <Box display="flex"
              bg="rgba(255, 255, 255, 0.3)"
              w="52%"
              m="auto"
              mt="5%"
              h="26%"
              p="10px"
              borderRadius="100px"
              justifyContent="center"
              gap="75px"
              alignItems="center"
              boxShadow="xl"
              flexWrap="wrap"
              zIndex="999"
              backdropFilter="blur(10px)"
              border="1px solid rgba(255, 255, 255, 0.2)"
            >
              {["Traveller served", "Destinations visited", "Tours organized", "Happy customers"].map((text, index) => (
                <Box key={index}
                  w="150px"
                  h="150px"
                  borderRadius="full"
                  bg="white"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  boxShadow="lg"
                  transition="transform 0.3s ease"
                  _hover={{ transform: 'scale(1.05)', boxShadow: '2xl' }}
                >
                  <Box display="flex" flexDirection="column" textAlign="center" >
                    <Heading fontSize="48px" fontWeight="bold" color="black">400</Heading>
                    <Text fontSize="15px" fontWeight="medium">{text}</Text>
                  </Box>
                </Box>
              ))}
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

                {/* Email Subscription Form */}
                <form onSubmit={handleSubmit}>
                  <Box display="flex" alignItems="center" justifyContent="center" mb={4}>
                    <Input
                      placeholder="Enter your email"
                      size="lg"
                      width="500px"
                      value={emailForm.email}
                      onChange={handleEmailChange} // Update email state
                      borderColor="blue.400"
                      borderRadius="25px"
                      _focus={{ borderColor: "blue.500" }}
                      mr={2}
                      required // Make email input required
                    />
                    <Button
                      colorScheme="blue"
                      size="lg"
                      borderRadius="25px"
                      type="submit" // Ensure the button is a submit type
                      isLoading={loading} // Show loading spinner when subscribing
                      isDisabled={loading} // Disable the button while loading
                    >
                      Subscribe Now
                    </Button>
                  </Box>

                  {error && <Text color="red.500" mt={2}>{error}</Text>} {/* Display error message */}

                  <Text textAlign="center" color="gray.600" fontSize="sm">
                    Subscribe to our newsletters and promotions. Read our
                    <Text as="span" color="blue.500" textDecoration="underline"> Privacy Policy.</Text>
                  </Text>
                </form>
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