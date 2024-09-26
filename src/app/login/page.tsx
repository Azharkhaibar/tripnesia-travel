import { Box, Heading, Input, Button, Text } from "@chakra-ui/react";

const Login = () => {
    return (
        <Box
            w="100%"
            h="100vh"
            bgImage="url('public/image/testing.jpg')" // Adjust image path if needed
            bgRepeat="no-repeat"
            bgSize="cover"
            bgPosition="center"
            display="flex"
            justifyContent="center"
            alignItems="center"
            position="relative"
        >
            {/* Overlay for better text visibility */}
            <Box
                position="absolute"
                top="0"
                left="0"
                w="100%"
                h="100%"
                bg="rgba(0, 0, 0, 0.5)" // Dark overlay
            />

            <Box
                position="relative"
                bg="white"
                p={8}
                ml="60%"
                borderRadius="15px"
                boxShadow="lg"
                w="400px"
                maxW="90%"
                opacity={0.95}
            >
                <Heading as="h2" mb={6} textAlign="center">
                    Login
                </Heading>
                <Text fontSize="20px">
                    Sign in to your account
                </Text>
                <form style={{ paddingTop: "15px" }}>
                    <Box mb={4}>
                        <label htmlFor="username" style={{ fontWeight: "bold", marginBottom: "8px", display: "block" }}>
                            Username or Email
                        </label>
                        <Input id="usernameoremail" placeholder="Enter username" type="text" />
                    </Box>
                    <Box mb={4}>
                        <label htmlFor="password" style={{ fontWeight: "bold", marginBottom: "8px", display: "block" }}>
                            Password
                        </label>
                        <Input id="password" placeholder="Enter firstname" type="text" />
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
}

export default Login;
