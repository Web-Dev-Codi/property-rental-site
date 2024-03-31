import connectDB from "@/config/database.js";
import Property from "@/models/Property";
import { getServerSession } from "next-auth/next";

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
      .filter((image) => image.name !== "");

    // Create Property object for database
    const propertyData = {
      type: formData.get("type"),
      name: formData.get("name"),
      description: formData.get("description"),
      location: {
        street: formData.get("location.street"),
        city: formData.get("location.city"),
        state: formData.get("location.state"),
        zipcode: formData.get("location.zipcode"),
      },
      beds: formData.get("beds"),
      baths: formData.get("baths"),
      square_feet: formData.get("square_feet"),
      amentities,
      rates: {
        weekly: formData.get("rates.weekly"),
        monthly: formData.get("rates.monthly"),
        nightly: formData.get("rates.nightly"),
      },
      seller_info: {
        name: formData.get("seller_info.name"),
        email: formData.get("seller_info.email"),
        phone: formData.get("seller_info.phone"),
      },
      images,
    };

    console.log(propertyData);

    return new Response(JSON.stringify({ message: "Success" }));
  } catch (error) {
    return new Response("Failed to add property", { status: 500 });
  }
};
