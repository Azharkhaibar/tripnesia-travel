import { useState, useEffect } from "react";
import { 
    Box,
    Heading
} from "@chakra-ui/react";

const CounterTime = ({ targetCount }) => {
    const [ countNum, setCountNum ] = useState(0);
    useEffect(() => {
        let start = 0;
        const incrementNum = targetCount / 100;
        const timer = setInterval(() => {
            start += incrementNum;
            if (start >= targetCount) {
                setCountNum(targetCount);
                clearInterval(timer);
            } else {
                setCountNum(Math.floor(start));
            }
        }, 30);

        return () => clearInterval(timer);
    }, [targetCount]);

    return(
        <Heading fontSize="48px" fontWeight="bold" color="black">
            {countNum}
        </Heading>   
    );
};

export default CounterTime;