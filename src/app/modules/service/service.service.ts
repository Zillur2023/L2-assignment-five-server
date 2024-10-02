import httpStatus from "http-status";
import QueryBuilder from "../../builder/QueryBuilder";
import AppError from "../../errors/AppError";
import { IService } from "./service.interface";
import Service from "./service.model";

const createServiceIntoDB = async (payload: IService) => {
  const result = await Service.create(payload);

  return result;
};

// const getAllServicesIntoDB = async ( ) => {
//     const result = await Service.find({ isDeleted: { $ne: true } })
//     // const result = await Service.find()

//     return result
// }
const getAllServicesIntoDB = async (query: Record<string, unknown>) => {
  // Initialize QueryBuilder with the base query
  const allServiceQuery = new QueryBuilder(
    Service.find({ isDeleted: { $ne: true } }),
    query
  )
    .search(["name"])
    .filter()
    .sort()
    .fields();

  // Check if pagination parameters are provided
  if (query.page && query.limit) {
    allServiceQuery.paginate(); // Apply pagination only if page and limit exist
  }

  // Execute the query
  const result = await allServiceQuery.modelQuery;
  const meta = await allServiceQuery.countTotal(); // Get meta info (total count, etc.)

  return {
    meta,
    result,
  };
};

const getSingleServiceIntoDB = async (id: string) => {
  const result = await Service.findOne({
    $and: [{ _id: id }, { isDeleted: { $ne: true } }],
  });

  return result;
};

const updateSingleServiceIntoDB = async (id: string, payload: IService) => {
  const result = await Service.findByIdAndUpdate(id, payload, { new: true });

  return result;
};

const updateServiceIntoDB = async (payload: Record<string, unknown>) => {
  const service = await Service.findById(payload._id);
  if (!service) {
    throw new AppError(httpStatus.NOT_FOUND, "Service not found");
  }

  service.set(payload);
  await service.save();

  return service;
};

const deleteSingleServiceIntoDB = async (id: string) => {
  const result = await Service.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true }
  );

  return result;
};

const getMaxPriceFromDB = async () => {
  const services = await Service.find({ isDeleted: { $ne: true } });
  // console.log('serviceData',services)

  const result = Math.max(...services.map((product) => product.price));

  return result;
};

export const ServiceServices = {
  createServiceIntoDB,
  getAllServicesIntoDB,
  getSingleServiceIntoDB,
  updateSingleServiceIntoDB,
  updateServiceIntoDB,
  deleteSingleServiceIntoDB,
  getMaxPriceFromDB,
};
