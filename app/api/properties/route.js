import connectDB from "@/config/database.js";
import Property from "@/models/Property";

// Get /api/properties
export const GET = async (request) => {
  try {
    connectDB();

    const properties = await Property.find({});
    return new Response(JSON.stringify(properties));
  } catch (error) {
    console.log(error);
    return new Response("Something Ain' right bro", { status: 500 });
  }
};

// POST request to api/properties endpoint
export const POST = async (request) => {
  try {
    const formData = await request.formData();

    // Access all amentities and images
    const amentities = formData.getAll("amenities");
    const images = formData
      .getAll("images")
      .filter((image) => images.name !== "");

    console.log(amentities, images);
    return new Response(JSON.stringify({ message: "Success" }));
  } catch (error) {
    return new Response("Failed to add property", { status: 500 });
  }
};
