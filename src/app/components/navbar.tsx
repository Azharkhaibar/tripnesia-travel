"use client";
import React, { useState } from "react";
import { Box, Flex, Text, Heading } from "@chakra-ui/react";
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
    { menu: "login", path: "/login"}
  ]

  return (
    <Box w="90%" h="10vh" left="85" bg="white" mt={38} alignItems="center" pos="absolute" p="10px" borderRadius="15px" zIndex="999">
      <Box display="flex" alignItems="center" px="30px" pt={2}>
        <Box>
          <Heading fontSize="34" fontWeight="bold">
            Keezars
          </Heading>
        </Box>
        <Flex gap="20px" textAlign="center" m="auto">
          {menuItemsNavbar.map((listItem, index) => (
            <NextLink key={index} href={listItem.path} passHref>
              <Box _hover={{ textDecoration: "none" }}>
                <Text textDecoration="none" fontSize="18px" color="black" gap="40px" textAlign="center">
                  {listItem.menu}
                </Text>
              </Box>
            </NextLink>
          ))}
        </Flex>
        <Box display="flex" alignItems="center" pr={4} gap={4}>
          <NextLink href={authItemsMenu[0].path}>
            <Text>{authItemsMenu[0].menu}</Text>
          </NextLink>
          <NextLink href={authItemsMenu[1].path}>
            <Text p={4} bg="#3FA2F6" borderRadius={20} color="white">
              {authItemsMenu[1].menu}
            </Text>
          </NextLink>
        </Box>
      </Box>
    </Box>
  );
};
