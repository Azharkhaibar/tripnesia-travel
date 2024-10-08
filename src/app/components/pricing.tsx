import { HooksPricingPlans } from "../libs/hooks/pricinghandlefetch";
import React from "react";
import { Box, Heading, Text, Flex, VStack } from "@chakra-ui/react";

const PricingPlan = () => {
    const { PricingPlans, error: PricingError } = HooksPricingPlans();

    return (
        <Box w="100%" h="100vh">
            <Box textAlign="center">
                <Text>Let's Check In</Text>
                <Heading>Affordable Pricing Plans</Heading>
            </Box>

            {PricingError && <Text color="red.500">{PricingError}</Text>}

            <Flex justify="center">
                {Array.isArray(PricingPlans) && PricingPlans.length > 0 ? (
                    PricingPlans.map((plan) => (
                        <Box key={plan.id} w="350px" p="15px" borderRadius="md" overflow="hidden">
                            <Box display="flex">
                                <Heading>{plan.kategori_pricing}</Heading>
                            </Box>
                            <Box>
                                <Heading fontSize="24px" fontWeight="600">
                                    Rp.{plan.harga_pricing}
                                    <span style={{ fontWeight: "500", opacity: "0.5", fontSize: "18px" }}>
                                        /Per Night
                                    </span>
                                </Heading>
                                <Text>{plan.deskripsi}</Text>
                                <VStack spacing={2} align="start">
                                    {Array.isArray(plan.benefit) && plan.benefit.length > 0 ? (
                                        plan.benefit.map((benefit, index) => (
                                            <Text key={index} fontSize="sm">
                                                • {benefit}
                                            </Text>
                                        ))
                                    ) : (
                                        <Text>No benefits available.</Text> // Fallback message
                                    )}
                                </VStack>
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
