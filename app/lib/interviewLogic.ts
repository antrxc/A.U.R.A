type Question = {
    id: number;
    text: string;
    context?: string;
  };
  
  type InterviewState = {
    currentQuestionIndex: number;
    questions: Question[];
    answers: string[];
  };
  
  export const initialQuestions: Question[] = [
    {
      id: 1,
      text: "Tell me about your experience with React and Next.js.",
      context: "The candidate should demonstrate knowledge of React hooks, components, and Next.js features like server-side rendering and API routes.",
    },
    {
      id: 2,
      text: "How do you approach state management in large-scale applications?",
      context: "Look for familiarity with solutions like Redux, MobX, or React Context API, and understanding of when to use each.",
    },
    {
      id: 3,
      text: "Describe a challenging project you've worked on and how you overcame the obstacles.",
      context: "Assess problem-solving skills, teamwork, and ability to handle complex situations.",
    },
    {
      id: 4,
      text: "How do you stay updated with the latest trends and technologies in web development?",
      context: "Evaluate the candidate's passion for learning and staying current in the field.",
    },
    {
      id: 5,
      text: "Thank you for your time. Do you have any questions for us about the role or the company?",
      context: "This is the final question. Assess the candidate's interest and preparation.",
    },
  ];
  
  export function createInitialState(): InterviewState {
    return {
      currentQuestionIndex: 0,
      questions: initialQuestions,
      answers: [],
    };
  }
  
  export function getNextQuestion(state: InterviewState): Question | null {
    if (state.currentQuestionIndex < state.questions.length) {
      return state.questions[state.currentQuestionIndex];
    }
    return null;
  }
  
  export function processAnswer(state: InterviewState, answer: string): InterviewState {
    const newState = {
      ...state,
      answers: [...state.answers, answer],
      currentQuestionIndex: state.currentQuestionIndex + 1,
    };
    return newState;
  }
  
  export function isInterviewComplete(state: InterviewState): boolean {
    return state.currentQuestionIndex >= state.questions.length;
  }
  
  export function generateResponse(question: Question, answer: string): string {
    // This is a placeholder for the actual AI response generation
    // In a real scenario, this would involve calling an AI service
    const context = question.context || "";
    return `Based on the context: "${context}", and your answer, here's my feedback: [AI-generated feedback would go here]. Let's move on to the next question.`;
  }