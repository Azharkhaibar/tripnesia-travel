"use client"
import React, { useState, useEffect } from 'react'
import {
  Box,
  Image,
  Container,
  Text,
  Heading,
  InputGroup, InputLeftElement, Icon,
  Input,
  Select,
  Button,
  IconButton
} from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { SearchIcon } from "@chakra-ui/icons";
import { Banner } from '../components/banner';
import NextLink from "next/link";
import { Navbar } from '../components/navbar';
import { DestinationInterface } from '../interface/destination';
import { dataDestinasi } from '../data/datadestinasi';
import axios from 'axios';

const Destinasi = () => {
  const [fetchDestination, setFetchDestination] = useState<DestinationInterface[]>([]);
  const [dataDestinasi, setDataDestinasi] = useState<DestinationInterface[]>([]);
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(fetchDestination.length / itemsPerPage);

  const currentItems = fetchDestination.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const getResponse = await axios.get("http://localhost:4000/api/axios/fetch");
        const { data, message } = getResponse.data;
        console.log('Message:', message);
        console.log('Data dari API:', data);

        if (Array.isArray(data)) {
          const formattedDatabaseData = data.map((item: any) => ({
            id: item.id,
            urlImg: item.urlImg || '/image/banner/pictbanner.avif',
            place: item.destinasi,
            rating: item.rating || Math.floor(Math.random() * 5) + 1,
            price: item.price,
            deskripsi: item.deskripsi,
            start_date: item.start_date,
            end_date: item.end_date,
            availability: item.availability,
          }));

          const combinedData = [...formattedDatabaseData, ...dataDestinasi];
          setFetchDestination(combinedData);
          console.log('State set to:', combinedData);
        } else {
          console.error('Expected array in data property but got:', data);
        }
      } catch (error) {
        console.error('Fetching data failed:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <Box>
      <Banner
        bgImage="/image/banner/banner4.jpg"
        title="Destinations"
        breadcrumbs={["Home", "Destinations"]}
      />
      <Container maxW="95%" h="300vh">
        <Box w="100%" h="20vh" display="flex" justifyContent="space-around" px="3%" alignItems="center">
          <Box w="100%" maxW="700px" mx="auto" alignItems="center" zIndex="1">
            {/* Search Input */}
            <InputGroup flex="1" mr={4}>
              <InputLeftElement pointerEvents="none" height="100%" pl={3}>
                <Icon
                  as={SearchIcon}
                  color="gray.300"
                  boxSize={6}
                  zIndex="10"
                  borderRadius="40px"
                />
              </InputLeftElement>
              <Input
                type="search"
                placeholder="Search..."
                borderRadius="30px"
                p="7"
                pl="12"
                borderColor="gray.300"
                focusBorderColor="teal.500"
              />
            </InputGroup>
          </Box>
          {/* Sorting Options */}
          <Box display="flex" alignItems="center" ml="40%">
            {/* Select for Place */}
            <Box borderRadius="30px" textAlign="center" mr={4} w="180px">
              <Select placeholder="Place" borderRadius="20px" h="50px" fontSize="lg">
                <option value="jawa">Jawa</option>
                <option value="sulawesi">Sulawesi</option>
                <option value="bali">Bali</option>
                <option value="ntt">NTT</option>
                <option value="kalimantan">Kalimantan</option>
                <option value="sumatra">Sumatra</option>
                <option value="papua">Papua</option>
                <option value="maluku">Maluku</option>
              </Select>
            </Box>

            {/* Select for Default Sorting */}
            <Box borderRadius="30px" textAlign="center" w="230px">
              <Select placeholder="Default sorting" borderRadius="20px" h="50px" fontSize="lg">
                <option value="low-price">Sort by price: low</option>
                <option value="high-price">Sort by price: high</option>
                <option value="average-rating">Sort by average rating</option>
              </Select>
            </Box>
          </Box>
        </Box>
        <Box w="100%" h="300vh" display="flex" ml="3.5%">
          <Box w="70%" h="100%">
            <Box display="flex" flexWrap="wrap" gap="30px">
              {currentItems.map((dataCombined, index) => (
                <Box key={index}>
                  <Box w="340px" h="400px">
                    <Image src={dataCombined.urlImg} alt={dataCombined.place} />
                    <Box>
                      <Heading fontSize="25" pt="2">{dataCombined.place}</Heading>
                      <Text pt="2">Rating / {dataCombined.rating}</Text>
                      <Box display="flex" alignItems="center">
                        <Text fontWeight="600" fontSize="24px">${dataCombined.price}</Text>
                        <Text fontSize="18" fontWeight="500" opacity="0.6">/person</Text>
                      </Box>
                      <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Text>7days</Text>
                        <Text p="2" px="7" bg="whitesmoke" borderRadius="20">Book now</Text>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center" mt="4" p="2" borderRadius="md" m="auto">
              <IconButton
                onClick={handlePreviousPage}
                isDisabled={currentPage === 1}
                icon={<ChevronLeftIcon />}
                aria-label="Previous page"
                colorScheme="teal"
                variant="outline"
                size="lg"
                borderRadius="full"
                mx="2"
              />
              <Text mx="4" color="black" fontSize="lg" fontWeight="bold">
                Page {currentPage} of {totalPages}
              </Text>
              <IconButton
                onClick={handleNextPage}
                isDisabled={currentPage === totalPages}
                icon={<ChevronRightIcon />}
                aria-label="Next page"
                colorScheme="teal"
                variant="outline"
                size="lg"
                borderRadius="full"
                mx="2"
              />
            </Box>

          </Box>
          <Box maxW="20%" h="100%" m="auto">
            <Box
              maxW="280px"
              mr="4"
              h="auto"
              bg="transparent"
              p="5"
              borderRadius="10px"
              border="1px solid black"
            >
              <Heading fontSize="24px" mb="3">
                Popular Tags
              </Heading>
              <Box w="100%" h="2px" bg="black" opacity="0.3" mt="3" mb="4"></Box>
              <Box display="flex" flexWrap="wrap" gap="2">
                {["Tour", "Adventure", "Travel", "Innovate", "Modern", "Luxury"].map(
                  (popTag, index) => (
                    <Box
                      key={index}
                      bg="pink.200"
                      color="gray.700"
                      p="2"
                      borderRadius="md"
                      fontSize="sm"
                      textAlign="center"
                      boxShadow="sm"
                      
                    >
                      <Text fontSize="15px" fontWeight="500" color="blue">{popTag}</Text>
                    </Box>
                  )
                )}
              </Box>
            </Box>
          </Box>

        </Box>
      </Container>
    </Box>
  )
}

export default Destinasi