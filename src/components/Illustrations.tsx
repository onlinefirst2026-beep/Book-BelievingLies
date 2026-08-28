import React from 'react';
import { ChapterRealisticImage } from './ChapterThemeImage';

interface IllustrationProps {
  type?: string;
  chapterId?: string;
  className?: string;
}

export const BookIllustration: React.FC<IllustrationProps> = ({ 
  type, 
  chapterId,
  className = "w-full max-w-md mx-auto" 
}) => {
  return (
    <ChapterRealisticImage 
      illustrationType={type} 
      chapterId={chapterId}
      className={className} 
    />
  );
};
