export interface FontSizes {
  size1: string;
  size2: string;
  size3: string;
  size4: string;
  size5: string;
  size6: string;
  size7: string;
  size8: string;
  size9: string;
  size10: string;
}

export type FontSizeType = keyof FontSizes;

export const defaultFontSizes: FontSizes = {
  size1: '0.6rem',
  size2: '0.7rem',
  size3: '0.8rem',
  size4: '0.9rem',
  size5: '1rem',
  size6: '1.1rem',
  size7: '1.2rem',
  size8: '1.3rem',
  size9: '1.5rem',
  size10: '2rem',
};
