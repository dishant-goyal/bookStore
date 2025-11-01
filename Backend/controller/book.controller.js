import { Book } from "../model/Book.js";

export const addBook = async (req, res) => {
  try {
    const { name, title, price, category } = req.body || {};

    // 1️⃣ Validate Input
    if (!name || !title || !price || !category) {
      return res.status(400).json({
        success: false,
        message: "All fields (name, title, price, category) are required.",
      });
    }

    // 2️⃣ Create New Book
    const book = new Book({
      name: name.trim(),
      title: title.trim(),
      price: parseFloat(price),
      category: category.trim(),
    });


    // 3️⃣ Save to Database
    const savedBook = await book.save();

    // 4️⃣ Return Success Response
    return res.status(201).json({
      success: true,
      message: "Book added successfully.",
      data: savedBook,
    });
  } catch (error) {
    console.error("Error in addBook controller:", error);

    // 5️⃣ Send Error Response
    return res.status(500).json({
      success: false,
      message: "Server error while adding book.",
      error: error.message,
    });
  }
};

export const getAllBooks=async(req,res)=>{
  try {

    const books=await Book.find()
    if(!books){
      return res.status(500).json({
        success: false,
        message: "Server error while fetching book.",
        error: error.message,
      });
    }

    return res.status(200).json({
      success: true,
      message: "Books get successfully",
      data:books
    });

  } catch (error) {
    console.log("Error is getting all books",error)
    return res.status(500).json({
      success: false,
      message: "Server error while getting books.",
      error: error.message,
    });

  }
}
