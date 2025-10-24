'use client';

import React, { useState } from 'react';
import { Eye, Code } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

type CodeBlockProps = {
  code: string;
  language: 'css' | 'javascript' | 'html' | 'bash';
  preview?: React.ReactNode;
};

export const CodeBlock = ({ code, language, preview }: CodeBlockProps) => {
  const [view, setView] = useState<'code' | 'preview'>(preview ? 'preview' : 'code');

  return (
    <div className="bg-gray-900 dark:bg-black/50 rounded-lg shadow-lg my-6">
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-700">
        <div className="flex items-center gap-4">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-xs text-gray-400 font-mono uppercase">{language}</span>
        </div>
        {preview && (
          <div className="flex items-center gap-1">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setView('code')}
              className={cn(
                'h-7 w-7 text-gray-400 hover:bg-gray-700 hover:text-white',
                view === 'code' && 'bg-gray-700 text-white'
              )}
            >
              <Code className="h-4 w-4" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setView('preview')}
              className={cn(
                'h-7 w-7 text-gray-400 hover:bg-gray-700 hover:text-white',
                view === 'preview' && 'bg-gray-700 text-white'
              )}
            >
              <Eye className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
      {view === 'code' ? (
        <pre className="p-4 overflow-x-auto">
          <code className="font-mono text-sm text-green-400 whitespace-pre-wrap">
            {code}
          </code>
        </pre>
      ) : (
        <div className="p-4 flex justify-center items-center bg-white dark:bg-transparent rounded-b-lg min-h-[150px]">
          {preview}
        </div>
      )}
    </div>
  );
};
