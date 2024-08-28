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
  Select
} from '@chakra-ui/react'
import { SearchIcon } from "@chakra-ui/icons";
import { Banner } from '../components/banner';
import NextLink from "next/link";
import { DestinationInterface } from '../interface/destination';
import { dataDestinasi } from '../data/datadestinasi';
import axios from 'axios';

const Destinasi = () => {
  const [fetchDestination, setFetchDestination] = useState<DestinationInterface[]>([]);
  const [dataDestinasi, setDataDestinasi] = useState<DestinationInterface[]>([]); // Initialize dataDestinasi if needed

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
            rating: item.rating || 0,
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
        <Box w="100%" h="20vh" display="flex" justifyContent="space-around" px="5%" alignItems="center">
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
        <Box w="100%" h="300vh" bg="pink">
          {fetchDestination.map((dataCombined, index) => (
            <Box key={index} w="100%">
              <Box w="400px" h="400px">
                <Image src={dataCombined.urlImg} alt={dataCombined.place} />
                <Box>
                  <Heading>{dataCombined.place}</Heading>
                  <Text>{dataCombined.rating}</Text>
                  <Box display="flex" alignItems="center">
                    <Text>{dataCombined.price}</Text>
                    <Text>/person</Text>
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

export default Destinasi