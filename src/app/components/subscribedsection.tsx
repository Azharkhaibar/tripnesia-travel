import { Box, Heading, Text, Input, Button, Flex } from '@chakra-ui/react';

const SubscriptionSection = () => {
    return (
        <Box w="100%" h="60vh" bg="blue.100" p={5} borderRadius="md" boxShadow="md">
            <Box w="100%" h="100%">
                <Heading as="h2" size="xl" textAlign="center" mb={4}>
                    Travel inspiration delivered<br /> directly to your inbox
                </Heading>
                <Flex direction="column" alignItems="center" justifyContent="center" mb={4}>
                    <Input
                        placeholder="Enter your email"
                        size="lg"
                        width={{ base: "90%", md: "50%" }}
                        mb={2}
                        borderColor="blue.400"
                        _focus={{ borderColor: "blue.500" }}
                    />
                    <Button
                        colorScheme="blue"
                        size="lg"
                        width={{ base: "90%", md: "50%" }}
                    >
                        Subscribe Now
                    </Button>
                </Flex>
                <Text textAlign="center" color="gray.600" fontSize="sm">
                    Subscribe to our newsletters and promotions. Read our
                    <Text as="span" color="blue.500" textDecoration="underline"> Privacy Policy.</Text>
                </Text>
            </Box>
        </Box>
    );
};

export default SubscriptionSection;
