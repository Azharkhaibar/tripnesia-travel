"use client";
import React, { useState } from "react";
import { Box, Flex, Text, Heading } from "@chakra-ui/react";
import NextLink from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = ["Home", "Services", "About", "Contact"];

  const toggleMenu = () => setIsOpen(!isOpen);
  const menuItemsNavbar = [
    { menu: "Beranda", path: "/" },
    { menu: "Destination", path: "/destinasi" },
    { menu: "Hotels", path: "/hotel" },
    { menu: "Cars", path: "/cars" },
    { menu: "blog", path: "/blog" },
  ];

  return (
    <Box w="90%" h="7vh" left="85" bg="white" mt={48} alignItems="center" pos="absolute" p="10px" borderRadius="15px">
      <Box display="flex" alignItems="center" px="20px">
        <Box>
          <Heading fontSize="24" fontWeight="bold">
            Keezars
          </Heading>
        </Box>
        <Flex gap="20px" textAlign="center" m="auto">
          {menuItemsNavbar.map((listItem, index) => (
            <NextLink key={index} href={listItem.path} passHref>
              <Box _hover={{ textDecoration: "none" }}>
                <Text textDecoration="none" fontSize="18px" color="black" gap="25px" textAlign="center">
                  {listItem.menu}
                </Text>
              </Box>
            </NextLink>
          ))}
        </Flex>
        <Box display="flex" alignItems="center" pr={28} gap={12}>
          <Text>Login</Text>
          <Text p={10} bg="#3FA2F6" borderRadius={20} color="white">
            Register
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
