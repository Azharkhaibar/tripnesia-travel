import React, { useState } from "react";
import { useReviews } from "../libs/hooks/reviews";
import {
    Box,
    Heading,
    Text,
    Flex,
    Icon,
    Button,
} from "@chakra-ui/react";
import { FaComments } from "react-icons/fa";

const ReviewsComponent = () => {
    const { HighRatingReviews, err } = useReviews();
    const [currentIndex, setCurrentIndex] = useState(0);

    // Define how many items to show at once
    const slidesToShow = 3;
    const totalReviews = HighRatingReviews.length;

    // Go to the previous slide
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - slidesToShow, 0));
    };

    // Go to the next slide
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => Math.min(prevIndex + slidesToShow, totalReviews - slidesToShow));
    };

    return (
        <Box w="100%" h="80vh">
            <Box textAlign="center" pt="3%">
                <Icon as={FaComments} boxSize="40px" color="teal.500" mb="0px" />
                <Heading>What travellers say</Heading>
                {err && <Text color="red.500">{err}</Text>}
            </Box>
            <Box pt="4%">
                {HighRatingReviews.length > 0 ? (
                    <>
                        <Flex justifyContent="center">
                            {HighRatingReviews.slice(currentIndex, currentIndex + slidesToShow).map((review) => (
                                <Box key={review.id}>
                                    <Box p="5" shadow="md" borderWidth="1px" mx="10px" maxW="1200px"
                                        w="400px"
                                        h="400px"
                                    >
                                        <Heading fontSize="xl">{review.name_reviewer}</Heading>
                                        <Text mt={4}>{review.review_text}</Text>
                                        <Text color="gray.500">Rating: {review.rating}</Text>
                                        <Text color="gray.500">Location: {review.location_traveller}</Text>
                                    </Box>
                                </Box>
                            ))}
                        </Flex>
                        <Flex justifyContent="center" mt="20px">
                            <Button onClick={prevSlide} isDisabled={currentIndex === 0} mr="10px">
                                Previous
                            </Button>
                            <Button onClick={nextSlide} isDisabled={currentIndex + slidesToShow >= totalReviews}>
                                Next
                            </Button>
                        </Flex>
                    </>
                ) : (
                    <Text>No reviews available</Text>
                )}
            </Box>
        </Box>
    );
}

export default ReviewsComponent;
