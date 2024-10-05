"use client";
import {
    Box,
    Heading,
    Input,
    Button,
    Text,
    Checkbox,
    Flex,
    Link,
    FormControl,
    FormLabel,
} from "@chakra-ui/react";
import NextLink from "next/link";
import axios from "axios";
import React, { useState } from "react";

const Register: React.FC = () => {
    const [registerForm, setRegisterForm] = useState({
        username: "",
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        agreement: false,
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setRegisterForm((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRegisterForm((prevData) => ({
            ...prevData,
            agreement: e.target.checked,
        }));
    };

    const handleSubmitRegisterBtn = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!registerForm.agreement) {
            alert("You must agree to the terms and conditions.");
            return;
        }

        try {
            const response = await axios.post(
                "http://localhost:3001/auth/register",
                registerForm,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            console.log("Data successfully sent:", response.data);
            alert("Successfully registered!");

            // Reset form
            setRegisterForm({
                username: "",
                firstname: "",
                lastname: "",
                email: "",
                password: "",
                agreement: false,
            });
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const status = error.response?.status;
                alert(
                    `Failed to register. Status ${status || "unknown"}. Please try again.`
                );
            } else {
                alert("An unexpected error occurred. Please try again.");
            }
        }
    };

    const authItemsMenu = [
        { menu: "Sign In", path: "/login" },
        { menu: "Sign Up", path: "/register" },
    ];

    return (
        <Box
            w="100%"
            h="100vh"
            bgImage="url('/image/testing.jpg')" // Fixed the image path
            bgRepeat="no-repeat"
            bgSize="cover"
            bgPosition="center"
            display="flex"
            justifyContent="center"
            alignItems="center"
            position="relative"
        >
            <Box
                position="absolute"
                top="0"
                left="0"
                w="100%"
                h="100%"
                bg="rgba(0, 0, 0, 0.5)"
            />
            <Box
                position="relative"
                bg="white"
                p={8}
                borderRadius="15px"
                boxShadow="lg"
                w="400px"
                maxW="90%"
                opacity={0.95}
            >
                <Heading as="h2" mb={6} textAlign="center">
                    Register
                </Heading>
                <Text fontSize="20px">Create your account</Text>
                <form onSubmit={handleSubmitRegisterBtn}>
                    <FormControl mb={4}>
                        <FormLabel htmlFor="username">Username</FormLabel>
                        <Input
                            id="username"
                            value={registerForm.username}
                            onChange={handleInputChange}
                            placeholder="Enter username"
                            type="text"
                            required
                        />
                    </FormControl>

                    <FormControl mb={4}>
                        <FormLabel htmlFor="firstname">Firstname</FormLabel>
                        <Input
                            id="firstname"
                            value={registerForm.firstname}
                            onChange={handleInputChange}
                            placeholder="Enter firstname"
                            type="text"
                            required
                        />
                    </FormControl>

                    <FormControl mb={4}>
                        <FormLabel htmlFor="lastname">Lastname</FormLabel>
                        <Input
                            id="lastname"
                            value={registerForm.lastname}
                            onChange={handleInputChange}
                            placeholder="Enter your lastname"
                            type="text"
                            required
                        />
                    </FormControl>

                    <FormControl mb={4}>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <Input
                            id="email"
                            value={registerForm.email}
                            onChange={handleInputChange}
                            placeholder="Enter your email"
                            type="email"
                            required
                        />
                    </FormControl>

                    <FormControl mb={4}>
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <Input
                            id="password"
                            value={registerForm.password}
                            onChange={handleInputChange}
                            placeholder="Enter your password"
                            type="password"
                            required
                        />
                    </FormControl>

                    <Flex mb={4}>
                        <Checkbox
                            id="agreement"
                            isChecked={registerForm.agreement}
                            onChange={handleCheckboxChange}
                        />
                        <Text fontSize="sm" ml={2}>
                            I agree to the{" "}
                            <Link href="#" color="orange.500" textDecoration="underline">
                                Privacy Policy
                            </Link>{" "}
                            &{" "}
                            <Link href="#" color="orange.500" textDecoration="underline">
                                Terms
                            </Link>
                        </Text>
                    </Flex>

                    <Button type="submit" colorScheme="blue" w="full" mt={4}>
                        Register
                    </Button>
                    <Text pt="4%" textAlign="center">
                        Already have an account?{" "}
                        <NextLink href={authItemsMenu[0].path} passHref>
                            <Link color="blue.500">{authItemsMenu[0].menu}</Link>
                        </NextLink>
                    </Text>
                </form>
            </Box>
        </Box>
    );
};

export default Register;
