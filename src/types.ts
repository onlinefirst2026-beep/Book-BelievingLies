export type ThemeMode = 'natural' | 'parchment' | 'cream' | 'sage' | 'sepia' | 'dark' | 'slate';
export type FontFamily = 'cormorant' | 'merriweather' | 'sans' | 'mono';
export type LineHeight = 'normal' | 'relaxed' | 'loose';
export type ReadingLayout = 'spread' | 'single' | 'scroll';
export type AmbientSoundType = 'none' | 'rain' | 'fireplace' | 'sanctuary';

export interface BookContentBlock {
  type: 'paragraph' | 'bullet' | 'quote' | 'heading' | 'subheading' | 'callout' | 'scripture' | 'divider';
  text?: string;
  items?: string[];
  author?: string;
  reference?: string;
}

export interface BookChapter {
  id: string;
  chapterNumber?: number;
  type: 'intro' | 'chapter' | 'conclusion' | 'prayer';
  title: string;
  subtitle?: string;
  themeSummary?: string;
  illustrationType?: 'altar' | 'lion' | 'prophet' | 'tree' | 'scripture' | 'deception' | 'armor' | 'mercy' | 'voices' | 'prayer';
  pdfPages: number[];
  blocks: BookContentBlock[];
}

export interface BookPage {
  pageNumber: number; // 1-based PDF original page or logical page
  title: string;
  subtitle?: string;
  chapterId: string;
  isChapterStart?: boolean;
  illustrationType?: string;
  blocks: BookContentBlock[];
}

export interface ReaderSettings {
  theme: ThemeMode;
  fontFamily: FontFamily;
  fontSize: number; // in px, e.g. 17
  lineHeight: LineHeight;
  layout: ReadingLayout;
  soundEffects: boolean;
  ambientSound: AmbientSoundType;
  ambientVolume: number;
  bionicReading: boolean;
  readingRuler: boolean;
  showPageNumbers: boolean;
  brightness: number; // 50 to 100%
  autoFlip: boolean;
  autoFlipSpeed: number; // seconds
}

export interface Bookmark {
  id: string;
  pageNumber: number;
  chapterTitle: string;
  snippet: string;
  createdAt: number;
  color?: string;
}

export interface NoteHighlight {
  id: string;
  pageNumber: number;
  chapterTitle: string;
  text: string;
  note?: string;
  color: string;
  createdAt: number;
}

export interface SearchResult {
  pageNumber: number;
  chapterId: string;
  chapterTitle: string;
  snippet: string;
  matchIndex: number;
}
