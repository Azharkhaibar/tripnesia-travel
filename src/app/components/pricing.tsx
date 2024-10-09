import { HooksPricingPlans } from "../libs/hooks/pricinghandlefetch";
import React from "react";
import { Box, Heading, Text, Flex, VStack, Icon } from "@chakra-ui/react";
import { FaRoute, FaPlane, FaGlobe } from "react-icons/fa";

const PricingPlan = () => {
    const { PricingPlans, error: PricingError } = HooksPricingPlans();

    
    const IconReact = [
        FaRoute, 
        FaPlane,
        FaGlobe  
    ];

    return (
        <Box w="100%" h="100vh" bg="white" pt="1"> {/* Ubah latar belakang menjadi putih */}
            <Box textAlign="center" mb="2%">
                <Text color="gray.600">Let's Check In</Text> {/* Ubah warna teks menjadi lebih gelap untuk kontras */}
                <Heading color="black">Affordable Pricing Plans</Heading> {/* Warna judul yang kontras */}
            </Box>

            {PricingError && <Text color="red.500">{PricingError}</Text>}

            <Flex justify="center" gap="20px">
                {Array.isArray(PricingPlans) && PricingPlans.length > 0 ? (
                    PricingPlans.map((plan, index) => (
                        <Box
                            key={plan.id}
                            w="455px"
                            maxH="auto"
                            gap="20px"
                            bg="gray.100"
                            borderRadius="22px"
                            overflow="hidden"
                        >
                            <Box
                                display="flex"
                                w="100%"
                                h="90px"
                                p="25px"
                                bg="blue.500" 
                                borderBottomLeftRadius="20px"
                                borderBottomRightRadius="20px"
                                alignItems="center"
                                pl="16%"
                            >
                                {/* Mengambil icon yang sesuai dari array IconReact */}
                                <Box p="12px" bg="white" borderRadius="50%" display="flex" alignItems="center" justifyContent="center">
                                    <Icon as={IconReact[index % IconReact.length]} boxSize={8} />
                                </Box>
                                <Heading fontSize="30px" color="white" ml="4"> {/* Menambahkan margin left untuk jarak dari ikon */}
                                    {plan.kategori_pricing}
                                </Heading>
                            </Box>
                            <Box p="30px" bg="#fdfcfb" 
                                w="100%"
                                h="100%"
                                mt="1%"
                                borderTopLeftRadius="20px"
                                borderTopRightRadius="20px"
                            >
                                <Heading fontSize="32px" fontWeight="600" color="black" pl="15%">
                                    Rp.{plan.harga_pricing}
                                    <span
                                        style={{
                                            fontWeight: "500",
                                            opacity: "0.8", 
                                            fontSize: "18px",
                                            
                                        }}
                                    >
                                        /Per Night
                                    </span>
                                </Heading>
                                <Text color="black" pl="15%" pt="3%">{plan.deskripsi}</Text> {/* Warna teks menjadi putih */}
                                <VStack spacing={2} align="start" pt="4%" pl="15%">
                                    {/* Parse benefit dari string ke array*/}
                                    {plan.benefit &&
                                        Array.isArray(JSON.parse(plan.benefit)) ? (
                                        JSON.parse(plan.benefit).map(
                                            (benefit, benefitIndex) => (
                                                <Text
                                                    key={benefitIndex}
                                                    fontSize="25px"
                                                    fontWeight="500"
                                                    color="black" 
                                                    opacity="0.6"
                                                >
                                                    • {benefit}
                                                </Text>
                                            )
                                        )
                                    ) : (
                                        <Text color="white">No benefits available.</Text> 
                                    )}
                                </VStack>
                                <Text
                                    textAlign="center"
                                    fontSize="20px"
                                    p="10px"
                                    borderRadius="25px"
                                    bg="blue.500" 
                                    mt="5%"
                                    color="white" 
                                >Get Started</Text>
                            </Box>
                        </Box>
                    ))
                ) : (
                    <Text>No pricing plans available.</Text>
                )}
            </Flex>
        </Box>
    );
};

export default PricingPlan;
