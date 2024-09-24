import Review from "./review.model"


const getAllReviewsFromDB = async () => {
    const result = await Review.find()
    
    return result
}

export const ReviewServices = {
    getAllReviews
}