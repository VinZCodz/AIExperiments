import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const client = new GoogleGenAI({
    apiKey: process.env.GOOGLE_API_KEY, // Add your own GOOGLE_API_KEY in .env variable
});

const response = await client.models.embedContent({
    model: "gemini-embedding-001",
    contents: "What is the meaning of life?",
});

console.log(response.embeddings);

