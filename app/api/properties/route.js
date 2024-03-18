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
