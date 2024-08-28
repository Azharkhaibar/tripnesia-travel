export const dataDestinasi = [
    {
        id: 2,
        urlImg: '/image/banner/pictbanner.avif',
        place: 'Bali',
        rating: 4
    },
    {
        id: 3,
        urlImg: '/image/banner/pictbanner.avif',
        place: 'Jawa',
        rating: 5
    },
    {
        id: 4,
        urlImg: '/image/banner/pictbanner.avif',
        place: 'Bali',
        rating: 3
    },
    {
        id: 5,
        urlImg: '/image/banner/pictbanner.avif',
        place: 'Jawa',
        rating: 2
    },
    {
        id: 6,
        urlImg: '/image/banner/pictbanner.avif',
        place: 'Jawa',
        rating: 4
    },
    {
        id: 7,
        urlImg: '/image/banner/pictbanner.avif',
        place: 'Papua',
        rating: 5
    },
    {
        id: 8,
        urlImg: '/image/banner/pictbanner.avif',
        place: 'NTT',
        rating: 3
    },
    {
        id: 9,
        urlImg: '/image/banner/pictbanner.avif',
        place: 'Jawa',
        rating: 4
    },
    {
        id: 10,
        urlImg: '/image/banner/pictbanner.avif',
        place: 'Sumatra',
        rating: 2
    },
    {
        id: 11,
        urlImg: '/image/banner/pictbanner.avif',
        place: 'Lombok',
        rating: 5
    },
    {
        id: 12,
        urlImg: '/image/banner/pictbanner.avif',
        place: 'Sulawesi',
        rating: 3
    },
    {
        id: 13,
        urlImg: '/image/banner/pictbanner.avif',
        place: 'Bali',
        rating: 4
    },
    {
        id: 14,
        urlImg: '/image/banner/pictbanner.avif',
        place: 'Sulawesi',
        rating: 2
    },
    {
        id: 15,
        urlImg: '/image/banner/pictbanner.avif',
        place: 'Jawa',
        rating: 3
    },
    {
        id: 16,
        urlImg: '/image/banner/pictbanner.avif',
        place: 'NTT',
        rating: 5
    },
    {
        id: 17,
        urlImg: '/image/banner/pictbanner.avif',
        place: 'Lombok',
        rating: 4
    },
    {
        id: 18,
        urlImg: '/image/banner/pictbanner.avif',
        place: 'Jawa',
        rating: 3
    },
    {
        id: 19,
        urlImg: '/image/banner/pictbanner.avif',
        place: 'Bali',
        rating: 5
    },
    {
        id: 20,
        urlImg: '/image/banner/pictbanner.avif',
        place: 'Sumatra',
        rating: 2
    },
    {
        id: 21,
        urlImg: '/image/banner/pictbanner.avif',
        place: 'Papua',
        rating: 4
    },
    {
        id: 22,
        urlImg: '/image/banner/pictbanner.avif',
        place: 'Maluku',
        rating: 3
    },
    {
        id: 23,
        urlImg: '/image/banner/pictbanner.avif',
        place: 'Jawa',
        rating: 4
    },
    {
        id: 24,
        urlImg: '/image/banner/pictbanner.avif',
        place: 'NTT',
        rating: 5
    },
    {
        id: 25,
        urlImg: '/image/banner/pictbanner.avif',
        place: 'Jawa',
        rating: 2
    },
    {
        id: 26,
        urlImg: '/image/banner/pictbanner.avif',
        place: 'Bali',
        rating: 3
    }
];



// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const MyComponent = () => {
//     const [data, setData] = useState([]);
//     const dummyData = [
//         { id: 1, name: "Item Dummy 1" },
//         { id: 2, name: "Item Dummy 2" },
//         { id: 3, name: "Item Dummy 3" },
//     ];

//     useEffect(() => {
//         // Fetch data from the database (using axios or fetch API)
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get("/api/data"); // Gantilah dengan endpoint API Anda
//                 const dbData = response.data;

//                 // Gabungkan data dari database dan data dummy
//                 const combinedData = [...dbData, ...dummyData];
//                 setData(combinedData);
//             } catch (error) {
//                 console.error("Error fetching data:", error);
//             }
//         };

//         fetchData();
//     }, []);

//     return (
//         <div>
//             {data.map((item) => (
//                 <div key={item.id}>
//                     <h3>{item.name}</h3>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default MyComponent;
