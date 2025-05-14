import { API_PATHS } from "./apiPath";
import axiosInstance from "./axiosInstance"; // Import the axios instance

const uploadImage = async (imageFile) => {
  const formData = new FormData();
  // Append the image file to the form data
  formData.append("image", imageFile);

  try {
    const response = await axiosInstance.post(API_PATHS.IMAGE.UPLOAD_IMAGE, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data; // Assuming the response contains the image URL
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error; // Rethrow the error for further handling if needed
  }
};
export default uploadImage;