export interface FontWeights {
  weight1: number;
  weight2: number;
  weight3: number;
  weight4: number;
  weight5: number;
  weight6: number;
  weight7: number;
  weight8: number;
  weight9: number;
}

export type FontWeightType = keyof FontWeights;

export const defaultFontWeights: FontWeights = {
  weight1: 100,
  weight2: 200,
  weight3: 300,
  weight4: 400,
  weight5: 500,
  weight6: 600,
  weight7: 700,
  weight8: 800,
  weight9: 900,
};
