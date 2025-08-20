import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config({ path: '.env.local', override: true });// Add your own .env.local

const client = new GoogleGenAI({
    apiKey: process.env.GOOGLE_API_KEY, // Add your own GOOGLE_API_KEY
});

const response = await client.models.embedContent({
    model: "gemini-embedding-001",
    contents: "What is the meaning of life?",
});

console.log(response.embeddings);