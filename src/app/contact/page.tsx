"use client";
import axios, { AxiosError } from "axios";
import React, { useState } from "react";
import { Box, Heading, Text, Icon, Input, Select, Textarea, Button } from "@chakra-ui/react";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";
import { Banner } from "../components/banner";

const Contact = () => {
  const [firstnameClient, setFirstNameClient] = useState('');
  const [email, setEmail] = useState('');
  const [typedestination, setTypeDestination] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmitContact = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log('Sending data:', {
        firstnameClient,
        email,
        typedestination,
        message
      });

      const postResponse = await axios.post('http://localhost:4000/api/contact', {
        firstname: firstnameClient,  // Ensure this matches the model field name
        email,
        typedestination,
        message
      });

      console.log('Data successfully sent:', postResponse.data);
      alert('Message sent successfully!');
      setFirstNameClient('');
      setEmail('');
      setTypeDestination('');
      setMessage('');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const status = error.response?.status;
        const data = error.response?.data;
        console.error('Axios error occurred:', {
          status,
          data,
          message: error.message
        });
        alert(`Failed to send message. Status: ${status}. Please try again.`);
      } else {
        console.error('Unexpected error occurred:', error);
        alert('An unexpected error occurred. Please try again.');
      }
    }
  };

  return (
    <Box>
      <Banner />
      <Box w="100%" h="50vh" pt="5%">
        <Text textAlign="center" fontSize="2xl" fontWeight="400" mb={2}>
          Get In Touch
        </Text>
        <Heading textAlign="center" mb={10}>
          Our Contact Information
        </Heading>
        <Box display="flex" justifyContent="center" gap="40px" flexWrap="wrap" pt="2%">
          {/* Address */}
          <Box display="flex" alignItems="center" mb={8} bg="transparent" border="2px solid black" w="400px" p="10" h="120px" borderRadius="13px">
            <Icon
              as={MdLocationOn}
              w="70px"
              h="70px"
              p="10px"
              bg="blue.500"
              borderRadius="50%"
              color="white"
              mr={4}
            />
            <Box display="flex" flexDirection="column">
              <Heading fontSize="lg">Our Address</Heading>
              <Text>2690 Hiltona Street Victoria</Text>
              <Text>Road, New York, Canada</Text>
            </Box>
          </Box>

          {/* Phone Number */}
          <Box display="flex" alignItems="center" mb={8} bg="transparent" border="2px solid black" w="400px" p="10" h="120px" borderRadius="13px">
            <Icon as={MdPhone} w="70px"
              h="70px"
              p="10px"
              bg="green.500"
              borderRadius="50%"
              color="white"
              mr={4} />
            <Box display="flex" flexDirection="column">
              <Heading fontSize="lg">Phone Number</Heading>
              <Text>+6281317539390</Text>
              <Text>+6288019531094</Text>
            </Box>
          </Box>

          {/* Email Address */}
          <Box display="flex" alignItems="center" mb={8} bg="transparent" border="2px solid black" w="400px" p="10" h="120px" borderRadius="13px">
            <Icon as={MdEmail} w="70px"
              h="70px"
              p="10px"
              bg="red.500"
              borderRadius="50%"
              color="white"
              mr={4} />
            <Box display="flex" flexDirection="column">
              <Heading fontSize="lg">Email Address</Heading>
              <Text>mailinfo00@tourm.com</Text>
              <Text>azharkhai@gmail.com</Text>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* contact form */}
      <Box
        bgImage="url('/image/banner/bannerform.jpg')"
        pos="relative"
        bgRepeat="no-repeat"
        bgSize="cover"
        w="100%"
        h="78vh"
      >
        <Box pos="absolute" top="0" left="0" w="100%" h="100%" bg="black" opacity="0.4" zIndex="1"></Box>
        <Box display="flex" alignItems="center" justifyContent="center" h="100%" zIndex="2" pos="relative">
          {/* Left side content */}
          <Box w="30%" color="white" textAlign="center" display="flex" alignItems="center" justifyContent="center">
          </Box>

          {/* Contact form */}
          <Box w="50%" h="100%">
            <Box maxW="545px" maxH="660px" bg="white" p={10} ml="7%" boxShadow="xl" borderRadius="lg" mt="11%" marginLeft="28%">
              <Heading mb={6} textAlign="center" color="black">Book A Tour</Heading>
              <form onSubmit={handleSubmitContact}>
                {/* First Name */}
                <Box mb={5}>
                  <Input
                    placeholder="Enter your first name"
                    focusBorderColor="blue.500"
                    p={7}
                    fontSize="md"
                    value={firstnameClient}
                    onChange={(e) => setFirstNameClient(e.target.value)}
                  />
                </Box>

                {/* Email */}
                <Box mb={5}>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    focusBorderColor="blue.500"
                    p={7}
                    fontSize="md"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Box>
                <Box mb={5}>
                  <Select
                    placeholder="Select your destination"
                    focusBorderColor="blue.500"
                    p={1}
                    w="485px"
                    pl="0"
                    fontSize="md"
                    h="50px"
                    borderRadius="md"
                    value={typedestination}
                    onChange={(e) => setTypeDestination(e.target.value)}
                  >
                    <option value="Jawa">Jawa</option>
                    <option value="Sulawesi">Sulawesi</option>
                    <option value="Bali">Bali</option>
                    <option value="NTT">NTT</option>
                    <option value="Kalimantan">Kalimantan</option>
                    <option value="Sumatra">Sumatra</option>
                    <option value="Papua">Papua</option>
                    <option value="Maluku">Maluku</option>
                  </Select>
                </Box>
                <Box mb={6}>
                  <Textarea
                    placeholder="Enter your message"
                    focusBorderColor="blue.500"
                    p={5}
                    fontSize="md"
                    h="120px"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </Box>
                <Button
                  w="100%"
                  colorScheme="blue"
                  type="submit"
                  p={6}
                  fontSize="md"
                >
                  Send Message
                </Button>
              </form>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box w="100%" h="50vh" p={4} display="flex" alignItems="center" justifyContent="center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.8904984859446!2d106.93929392593107!3d-6.408104912673682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6994ef4d1be841%3A0xa025251f3bdd13d5!2sZona%20Picasso%2C%20Legenda%20Wisata!5e0!3m2!1sid!2sid!4v1724825164387!5m2!1sid!2sid"
          style={{ border: '0', width: '100%', height: '100%' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>


    </Box>
  );
};

export default Contact;
