// @flow strict
import React from 'react';
import withStyle from "../../withStyle";

const SvgFasChair = props => <svg viewBox="0 0 448 512" {...props}><path d="M446.33 341.88l-10.67-32A31.996 31.996 0 0 0 405.3 288H42.69c-13.77 0-26 8.81-30.36 21.88l-10.67 32C-5.24 362.6 10.18 384 32.03 384H32v112c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V384h256v112c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V384h-.03c21.85 0 37.27-21.4 30.36-42.12zM112 128c0-29.48 16.2-54.99 40-68.87V256h48V48h48v208h48V59.13c23.8 13.88 40 39.39 40 68.87v128h48V128C384 57.31 326.69 0 256 0h-64C121.31 0 64 57.31 64 128v128h48V128z" /></svg>;

export const FasChair = withStyle(SvgFasChair, "FasChair", false);