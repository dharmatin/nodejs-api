import listingService from "../services/ListingService";

export const getAllListings = async (req, res, next) => {
  const data = await listingService.getAllListings();
  res
    .status(200)
    .json({code: 200, data:data, message: "SUCCESS"})
    .end();
}

export const getListingById = async (req, res, next) => {
  const data = await listingService.getListingById(req.params.id);
  res
    .status(200)
    .json({code: 200, data: data, message: "SUCCESS"})
    .end();
}