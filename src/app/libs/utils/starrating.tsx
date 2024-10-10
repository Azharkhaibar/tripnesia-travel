"use client"
import React from "react"
import { 
    Box,
    Flex,
    Icon
} from "@chakra-ui/react"
import { FaStar } from "react-icons/fa"
const StarRating: React.FC = ({ rating }) => {
    const TotalStar = 5;
    return (
        <Flex justifyContent="center" mt={2}>
            {Array.from({ length: TotalStar}, (_, i) => (
                <Icon
                    key={i}
                    as={FaStar}
                    color={i < rating ? "orange" : "gray"}
                    boxSize="20px"
                />    
            ))}
        </Flex>
    )
}

export default StarRating;