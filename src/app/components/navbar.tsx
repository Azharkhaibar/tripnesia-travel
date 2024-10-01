"use client";
import React, { useState } from "react";
import { Box, Flex, Text, Heading, Input } from "@chakra-ui/react";
import NextLink from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import path from "path";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = ["Home", "Services", "About", "Contact"];

  const toggleMenu = () => setIsOpen(!isOpen);
  const menuItemsNavbar = [
    { menu: "Beranda", path: "/landpage" },
    { menu: "Destination", path: "/destinasi" },
    { menu: "Services", path: "/service" },
    { menu: "blog", path: "/blog" },
    { menu: "Contact", path: "/contact" },
  ];

  const authItemsMenu = [
    { menu: "register", path: "/register" },
    { menu: "login", path: "/login" }
  ]

  const subItemsMenu = [
    { menu: "FAQ", path: "/faq" },
    { menu: "Package", path: "/package" },
    { menu: "Tour Guider", path: "/tourguide" },
  ]

  return (
    <Box w="100%" h="auto" bg="blue.900">
      <Box
        w="100%"
        bg="white"
        py={{ base: "15px", md: "20px" }}
        zIndex="999"
        pos="relative"
      >
        <Box
          w="100%"
          px={{ base: "10px", md: "40px" }} // Responsive padding
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mt="10px"
          borderBottom="1px solid lightgray"
          pb="15px"
        >
          {/* Search Bar */}
          <Input
            placeholder="Search Destinations, Hotels, etc."
            size="md"
            bg="gray.100"
            width={{ base: "100%", md: "400px" }} // Lebih lebar pada mobile, fix pada desktop
            borderRadius="8px"
            boxShadow="sm"
            _focus={{ borderColor: "blue.600", boxShadow: "outline" }}
            transition="all 0.2s ease-in-out"
          />

          {/* Sub Menu Links */}
          <Flex
            alignItems="center"
            gap="20px"
            fontWeight="600"
            color="gray.700"
            display={{ base: "none", md: "flex" }} // Sembunyikan di mobile
          >
            {subItemsMenu.map((item, index) => (
              <NextLink key={index} href={item.path}>
                <Text
                  fontSize="16px"
                  cursor="pointer"
                  transition="color 0.2s"
                  _hover={{ color: "blue.600", textDecoration: "underline" }}
                >
                  {item.menu}
                </Text>
              </NextLink>
            ))}
          </Flex>
        </Box>

        {/* Main Navigation Section */}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          px={{ base: "10px", md: "40px" }}
          pt={{ base: "10px", md: "20px" }}
          pb={{ base: "10px", md: "6px" }}
        >
          {/* Logo */}
          <Heading fontSize={{ base: "24px", md: "36px" }} fontWeight="bold" color="blue.700">
            Keezars
          </Heading>

          {/* Navigation Links */}
          <Flex gap={{ base: "15px", md: "30px" }} display={{ base: "none", md: "flex" }}>
            {menuItemsNavbar.map((listItem, index) => (
              <NextLink key={index} href={listItem.path} passHref>
                <Text
                  fontSize="18px"
                  fontWeight="600"
                  color="gray.700"
                  cursor="pointer"
                  transition="color 0.2s"
                  _hover={{ color: "blue.600", textDecoration: "underline" }}
                >
                  {listItem.menu}
                </Text>
              </NextLink>
            ))}
          </Flex>

          {/* Auth Links */}
          <Flex alignItems="center" gap="20px">
            <NextLink href={authItemsMenu[0].path}>
              <Text
                fontSize="18px"
                color="gray.600"
                cursor="pointer"
                _hover={{ color: "blue.600", textDecoration: "underline" }}
                transition="color 0.2s"
              >
                {authItemsMenu[0].menu}
              </Text>
            </NextLink>
            <NextLink href={authItemsMenu[1].path}>
              <Text
                p={3}
                bg="blue.600"
                borderRadius="25px"
                color="white"
                fontWeight="600"
                w="120px"
                textAlign="center"
                cursor="pointer"
                _hover={{ bg: "blue.500" }}
                transition="background-color 0.2s"
              >
                {authItemsMenu[1].menu}
              </Text>
            </NextLink>
          </Flex>
        </Box>
      </Box>
    </Box>

  );
};
