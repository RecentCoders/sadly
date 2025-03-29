
import { Groq } from 'groq';
import cohere from 'cohere-ai';

// Initialize GROQ client
export const initGroq = () => {
  const apiKey = import.meta.env.VITE_GROQ_API_KEY || 
                localStorage.getItem('groq_api_key');
  
  if (!apiKey) {
    console.error('GROQ API key is not available');
    return null;
  }

  return new Groq({ apiKey });
};

// Initialize Cohere client
export const initCohere = () => {
  const apiKey = import.meta.env.VITE_COHERE_API_KEY || 
                localStorage.getItem('cohere_api_key');
  
  if (!apiKey) {
    console.error('Cohere API key is not available');
    return null;
  }

  cohere.init(apiKey);
  return cohere;
};

// Generate code using GROQ
export const generateCodeWithGroq = async (prompt: string) => {
  const groq = initGroq();
  
  if (!groq) {
    throw new Error('Failed to initialize GROQ client');
  }

  try {
    const response = await groq.chat.completions.create({
      messages: [
        { role: "user", content: prompt }
      ],
      model: "llama3-70b-8192",
      temperature: 0.5,
      max_tokens: 8192,
      top_p: 0.9
    });
    
    return response.choices[0].message.content;
  } catch (error) {
    console.error('Error generating code with GROQ:', error);
    throw error;
  }
};

// Generate embeddings using Cohere
export const generateEmbeddingsWithCohere = async (text: string) => {
  const cohereClient = initCohere();
  
  if (!cohereClient) {
    throw new Error('Failed to initialize Cohere client');
  }

  try {
    const response = await cohereClient.embed({
      texts: [text],
      model: 'embed-english-v3.0'
    });
    
    return response.body.embeddings;
  } catch (error) {
    console.error('Error generating embeddings with Cohere:', error);
    throw error;
  }
};
