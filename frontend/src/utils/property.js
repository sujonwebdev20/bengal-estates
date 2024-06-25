import axios from "axios";

export const getAllPropertiesData = async () => {
  try {
    return await axios.get("http://localhost:5000/api/property/all");
  } catch (error) {
    console.log(error);
  }
};
