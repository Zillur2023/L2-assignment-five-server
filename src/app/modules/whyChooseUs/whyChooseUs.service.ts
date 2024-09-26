import WhyChooseUs from "./whyChooseUs.model"


const getAllWhyChooseUsFromDB = async () => {
    const result = await WhyChooseUs.find()

    return result
}

 export const WhyChooseUsServices = {
    getAllWhyChooseUsFromDB
}
  