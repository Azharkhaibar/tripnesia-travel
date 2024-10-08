import React from "react";
import { useReviews } from "../libs/hooks/reviews";
import {
    Box,
    Heading,
    Text,
    Flex,
    Icon
} from "@chakra-ui/react";
import { FaComments } from "react-icons/fa";

const ReviewsComponent = () => {
    const { HighRatingReviews, err } = useReviews(); // Using `err` here

    return (
        <Box w="100%" h="80vh">
            <Box textAlign="center" pt="3%">
                <Icon as={FaComments} boxSize="40px" color="teal.500" mb="0px" />
                <Heading>What travellers say</Heading>
                {err && <Text color="red.500">{err}</Text>} {/* Use `err` instead of `error` */}
            </Box>
            <Box pt="4%">
                {HighRatingReviews.length > 0 ? (
                    HighRatingReviews.map((review) => (
                        <Box key={review.id} p="5" shadow="md" borderWidth="1px">
                            <Heading fontSize="xl">{review.name_reviewer}</Heading>
                            <Text mt={4}>{review.review_text}</Text>
                            <Text color="gray.500">Rating: {review.rating}</Text>
                            <Text color="gray.500">Location: {review.location_traveller}</Text>
                        </Box>
                    ))
                ) : (
                    <Text>No reviews available</Text>
                )}
            </Box>
        </Box>
    );
}

export default ReviewsComponent;
