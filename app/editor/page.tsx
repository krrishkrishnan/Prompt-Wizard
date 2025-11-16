'use client';

import { useState } from 'react';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { Sidebar } from '@/components/Sidebar';

export default function EditorPage() {
  const [prompt, setPrompt] = useState('');
  const [title, setTitle] = useState('');
  const [isScoring, setIsScoring] = useState(false);
  const [score, setScore] = useState<number | null>(null);

  const handleScore = async () => {
    if (!prompt.trim()) {
      alert('Please enter a prompt');
      return;
    }

    setIsScoring(true);
    try {
      const response = await fetch('/api/score', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, title }),
      });

      const data = await response.json();
      if (data.success) {
        setScore(data.data?.score || 0);
      }
    } catch (error) {
      console.error('Error scoring prompt:', error);
      alert('Failed to score prompt');
    } finally {
      setIsScoring(false);
    }
  };

  const handleSave = async () => {
    if (!prompt.trim() || !title.trim()) {
      alert('Please fill in all fields');
      return;
    }

    try {
      const response = await fetch('/api/prompts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, title }),
      });

      const data = await response.json();
      if (data.success) {
        alert('Prompt saved successfully!');
      }
    } catch (error) {
      console.error('Error saving prompt:', error);
      alert('Failed to save prompt');
    }
  };

  return (
    <ProtectedRoute>
      <div className="flex h-screen">
        <Sidebar />
        <main className="flex-1 overflow-auto p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="mb-8">Prompt Editor</h1>

            {/* Input Section */}
            <div className="space-y-6 mb-8">
              <div>
                <label className="block text-sm font-medium mb-2">Prompt Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Give your prompt a descriptive title"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Prompt Content</label>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Enter your prompt here..."
                  className="w-full h-64 px-4 py-2 border border-gray-300 rounded-lg font-mono text-sm focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                />
                <p className="text-xs text-gray-500 mt-2">
                  {prompt.length} characters
                </p>
              </div>
            </div>

            {/* Score Display */}
            {score !== null && (
              <div className="mb-8 p-4 bg-brand-50 border border-brand-200 rounded-lg">
                <p className="text-sm font-medium mb-2">Prompt Score</p>
                <div className="text-4xl font-bold text-brand-600">{score.toFixed(1)}/100</div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button
                onClick={handleScore}
                disabled={isScoring}
                className="px-6 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700 disabled:opacity-50 font-medium"
              >
                {isScoring ? 'Scoring...' : 'Score Prompt'}
              </button>
              <button
                onClick={handleSave}
                className="px-6 py-2 border-2 border-brand-600 text-brand-600 rounded-lg hover:bg-brand-50 font-medium"
              >
                Save Prompt
              </button>
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}
