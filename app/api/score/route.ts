import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

// Mock scoring function - will be replaced with OpenAI integration
async function scorePrompt(prompt: string) {
  // Simulated scoring logic
  const baseScore = 50;
  const lengthBonus = Math.min(prompt.length / 100, 20);
  const clarityBonus = prompt.includes('?') ? 10 : 0;
  const structureBonus = prompt.includes('\n') ? 10 : 0;

  const score = baseScore + lengthBonus + clarityBonus + structureBonus;

  return {
    score: Math.min(Math.round(score), 100),
    criteria: {
      clarity: Math.random() * 100,
      specificity: Math.random() * 100,
      structure: Math.random() * 100,
      completeness: Math.random() * 100,
    },
    suggestions: [
      'Consider being more specific about the desired output format',
      'Add examples to clarify your intent',
      'Include context about the domain or task',
    ],
    clarifyingQuestions: [
      'What is the intended use case for this prompt?',
      'Do you need the output in a specific format?',
      'What is your target audience for this prompt?',
    ],
  };
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { prompt } = await request.json();

    if (!prompt) {
      return NextResponse.json(
        { success: false, error: 'Prompt is required' },
        { status: 400 }
      );
    }

    const result = await scorePrompt(prompt);

    return NextResponse.json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error('Error scoring prompt:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
