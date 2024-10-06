const PricingPlanModels = require('../models/pricingmodels');
const pricingPlanModels = require('../models/pricingmodels')

const FetchingDataPricing = async (req, res) => {
  try {
    const Pricing = await pricingPlanModels.findAll({});
    console.log(Pricing);
    res.status(200).json({
      message: "Data berhasil di-fetch",
      data: Pricing,
    });
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(500).send("Failed to fetch Pricing Plan data");
  }
};

const FetchPricingDataById = async (req, res) => {
  try {
    const id = req.params.id;
    const FetchPricingId = await PricingPlanModels.findOne({
      where: { id },
    });
    if (!FetchPricingId) {
      return res.status(404).json({
        message: "Data tidak ditemukan",
      });
    }
    res.status(200).json({
      message: "Id and data found",
      data: FetchPricingId,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Fetch data tidak berhasil");
  }
};

const CreatePricingData = async (req, res) => {
  try {
    const { kategori_pricing, harga_pricing, deskripsi, benefit } = req.body;
    const newPricing = await PricingPlanModels.create({
      kategori_pricing,
      harga_pricing,
      deskripsi,
      benefit,
    });
    res.status(201).json({
      message: "Pricing plan created successfully",
      data: newPricing,
    });
  } catch (error) {
    console.error("Error creating pricing plan:", error.message);
    res.status(500).send("Failed to create Pricing Plan");
  }
};

const DeletePricingData = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedPricing = await PricingPlanModels.destroy({
      where: { id },
    });
    if (!deletedPricing) {
      return res.status(404).json({
        message: "Data tidak ditemukan untuk dihapus",
      });
    }
    res.status(200).json({
      message: "Pricing plan deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting pricing plan:", error.message);
    res.status(500).send("Failed to delete Pricing Plan");
  }
};

module.exports = {
  FetchingDataPricing,
  FetchPricingDataById,
  CreatePricingData,
  DeletePricingData,
};
