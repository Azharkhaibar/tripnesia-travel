const { type } = require('os');
const ReviewsModels = require('../models/reviewer')

const GetAllReviews = async (req, res) => {
    try {
        const GetResponseReviews = await ReviewsModels.findAll({});
        res.status(200).json({
            success: true,
            message: GetResponseReviews,
        });
    } catch (error) {
        console.error(error.message);
        res.status(400).send("Gagal Fetch");
    }
};

const GetIdReviews = async (req, res) => {
    try {
        const id = req.params.id;
        const GetId = await ReviewsModels.findOne({
            where: { id: id },
        });

        if (!GetId) {
            return res.status(404).json({
                success: false,
                message: "Gagal fetch ID",
                data: null,
            });
        }

        res.status(200).json({
            success: true,
            data: GetId,
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("gagal fetch")
    }
}

const GetHighReviewsRating = async (req, res) => {
    try {
        const GetHighRatings = await ReviewsModels.sequelize.query(
            "SELECT id, review_text, rating, name_reviewer, location_traveller FROM reviews WHERE rating = 5",
            { type: ReviewsModels.sequelize.QueryTypes.SELECT }
        );
        res.status(200).json({
            success: true,
            data: GetHighRatings,
        })
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Gagal Fetch Rating Tinggi")
    }
};

const DeleteReviewsById = async (req, res) => {
    try {
        const id = req.params.id;
        const DeleteId = await ReviewsModels.destroy({
            where: { id },
        });

        if (!DeleteId) {
            return res.status(404).json({
                message: `Data tidak ditemukan untuk Id ${id}`,
            });
        }

        res.status(200).json({
            message: `Id ${id} telah dihapus`,
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Failed to delete Reviews");
    }
};


module.exports = {
    GetAllReviews,
    GetIdReviews,
    GetHighReviewsRating,
    DeleteReviewsById
}
