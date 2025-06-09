import OpenAI from 'openai';
import type { ChatMessage } from '../types/chat';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export const generateId = (): string => {
  return Math.random().toString(36).substring(2, 9);
};

export const generateResponse = async (messages: ChatMessage[]): Promise<string> => {
  try {
    const formattedMessages = messages.map(msg => ({
      role: msg.isUser ? 'user' as const : 'assistant' as const,
      content: msg.text,
    }));

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are an occupational therapy assistant chatbot. Provide helpful, professional, and empathetic responses to users' questions about occupational therapy, rehabilitation, and related topics."
        },
        ...formattedMessages
      ],
      temperature: 0.7,
      max_tokens: 150,
    });

    return completion.choices[0]?.message?.content || "I apologize, but I couldn't generate a response.";
  } catch (error) {
    console.error('Error generating response:', error);
    return "I apologize, but I encountered an error. Please try again.";
  }
};

let speechSynthesisUtterance: SpeechSynthesisUtterance | null = null;

export const speakText = (text: string) => {
  if ('speechSynthesis' in window) {
    stopSpeaking(); // Stop any ongoing speech
    speechSynthesisUtterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speechSynthesisUtterance);
  } else {
    console.warn('Speech synthesis not supported in this browser.');
  }
};

export const stopSpeaking = () => {
  if (speechSynthesisUtterance && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    speechSynthesisUtterance = null;
  }
}; 