import listingService from "../services/ListingService";

export const getAllListings = async (req, res, next) => {
  const data = await listingService.getAllListings();
  res
    .status(200)
    .json({code: 200, data:data, message: "GET ALL LISTINGS"})
    .end();
}