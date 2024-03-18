import connectDB from "@/config/database.js";
import Property from "@/models/Property";

// Get /api/properties/:id
export const GET = async (request, { params }) => {
  try {
    connectDB();

    const property = await Property.findById(params.id);

    if (!property) {
      return new Response("No property found", { status: 404 });
    }

    return new Response(JSON.stringify(property));
  } catch (error) {
    console.log(error);
    return new Response("Something Ain' right bro", { status: 500 });
  }
};
