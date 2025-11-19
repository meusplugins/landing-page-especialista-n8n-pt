import React from 'react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}

export interface StatData {
  name: string;
  hours: number;
  tasks: number;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface UseCaseCategory {
  category: string;
  items: {
    title: string;
    description: string;
  }[];
  icon: React.ElementType;
}

export interface MethodologyStep {
  title: string;
  description: string;
}