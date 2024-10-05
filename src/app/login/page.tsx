"use client";
import { Box, Heading, Input, Button, Text } from "@chakra-ui/react";
import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Optional: Trim whitespace from email and password
        const trimmedEmail = email.trim();
        const trimmedPassword = password.trim();

        try {
            const response = await fetch("http://localhost:3001/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: trimmedEmail, // Send email or username here
                    password: trimmedPassword,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                // Handle successful login (e.g., store token, navigate to dashboard)
                console.log("Login success", data);
                // Redirect to dashboard or another page here
            } else {
                // Handle errors
                setError(data.error || "Login failed");
            }
        } catch (err) {
            setError("Something went wrong. Please try again.");
        }
    };

    return (
        <Box
            w="100%"
            h="100vh"
            bgImage="url('public/image/testing.jpg')" // Ensure the image path is correct
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
                    Login
                </Heading>
                {error && <Text color="red" mb={4}>{error}</Text>}
                <form style={{ paddingTop: "15px" }} onSubmit={handleSubmit}>
                    <Box mb={4}>
                        <label
                            htmlFor="usernameoremail"
                            style={{ fontWeight: "bold", marginBottom: "8px", display: "block" }}
                        >
                            Username or Email
                        </label>
                        <Input
                            id="usernameoremail"
                            placeholder="Enter email"
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Box>
                    <Box mb={4}>
                        <label
                            htmlFor="password"
                            style={{ fontWeight: "bold", marginBottom: "8px", display: "block" }}
                        >
                            Password
                        </label>
                        <Input
                            id="password"
                            placeholder="Enter password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Box>

                    <Button
                        type="submit"
                        colorScheme="blue"
                        w="full"
                        mt={4}
                    >
                        Get Started
                    </Button>
                    <Text pt="4%" fontWeight="500" color="blue" cursor="pointer">
                        Forgot Password?
                    </Text>
                </form>
            </Box>
        </Box>
    );
};

export default Login;
