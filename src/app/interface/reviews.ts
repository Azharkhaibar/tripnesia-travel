export interface ReviewsInterface {
    id?: number,
    review_text: string,
    rating: "1"| "2" | "3" | "4" | "5",
    name_reviewer: string,
    location_traveller: string
}