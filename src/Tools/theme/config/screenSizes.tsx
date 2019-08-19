export interface ScreenSizes {
  sm: string;
  md: string;
  lg: string;
}

export type ScreenSizeType = keyof ScreenSizes;

export const defaultScreenSizes: ScreenSizes = {
  sm: '48rem',
  md: '62rem',
  lg: '75rem',
};
