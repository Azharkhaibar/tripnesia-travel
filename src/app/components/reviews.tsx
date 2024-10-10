import React, { useState } from "react";
import { useReviews } from "../libs/hooks/reviews";
import { FaStar } from "react-icons/fa";
import {
    Box,
    Heading,
    Text,
    Flex,
    Icon,
    Button,
} from "@chakra-ui/react";
import { FaComments } from "react-icons/fa";
import StarRating from "../libs/utils/starrating";

const ReviewsComponent = () => {
    const { HighRatingReviews, err } = useReviews();
    const [currentIndex, setCurrentIndex] = useState(0);
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
        <Box w="100%" h="70vh" bg="gray.50" p="4">
            <Box textAlign="center" pt="3%">
                <Icon as={FaComments} boxSize="50px" color="teal.500" mb="0px" />
                <Heading fontSize="3xl" color="gray.700" textShadow="0px 1px 3px rgba(0,0,0,0.1)">What travellers say</Heading>
                {err && <Text color="red.500" mt="2">{err}</Text>}
            </Box>
            <Box pt="2%">
                {HighRatingReviews.length > 0 ? (
                    <>
                        <Flex justifyContent="center">
                            {HighRatingReviews.slice(currentIndex, currentIndex + slidesToShow).map((review) => (
                                <Box key={review.id} mx="10px" w="400px" h="auto">
                                    <Box p="6" boxShadow="lg" borderWidth="1px" borderColor="gray.200" borderRadius="20px" bg="white">
                                        <Box textAlign="center">
                                            <Heading fontSize="6xl" color="teal.500" fontWeight="light" textShadow="0px 2px 4px rgba(0,0,0,0.1)">,,</Heading>
                                            <Text mt={4} fontSize="lg" fontWeight="500" opacity="0.7" fontStyle="italic" color="gray.600">
                                                {review.review_text}
                                            </Text>
                                            <StarRating rating= {review.rating} />
                                            <Heading fontSize="lg" pt="4%" color="gray.800">{review.name_reviewer}</Heading>
                                            <Text color="gray.500" fontStyle="italic">Location: {review.location_traveller}</Text>
                                        </Box>
                                    </Box>
                                </Box>
                            ))}
                        </Flex>
                        <Flex justifyContent="center" mt="6">
                            <Button onClick={prevSlide} isDisabled={currentIndex === 0} colorScheme="teal" variant="outline" mr="4">
                                Previous
                            </Button>
                            <Button onClick={nextSlide} isDisabled={currentIndex + slidesToShow >= totalReviews} colorScheme="teal" variant="solid">
                                Next
                            </Button>
                        </Flex>
                    </>
                ) : (
                    <Text textAlign="center" color="gray.600">No reviews available</Text>
                )}
            </Box>
        </Box>
    );
}

export default ReviewsComponent;
