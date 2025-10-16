import React from 'react';

type CodeBlockProps = {
  code: string;
  language: 'css' | 'javascript' | 'html' | 'bash';
};

export const CodeBlock = ({ code, language }: CodeBlockProps) => {
  return (
    <div className="bg-gray-900 dark:bg-black/50 rounded-lg shadow-lg my-6">
      <div className="flex items-center px-4 py-2 border-b border-gray-700">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <span className="ml-4 text-xs text-gray-400 font-mono uppercase">{language}</span>
      </div>
      <pre className="p-4 overflow-x-auto">
        <code className="font-mono text-sm text-green-400 whitespace-pre-wrap">
          {code}
        </code>
      </pre>
    </div>
  );
};

    