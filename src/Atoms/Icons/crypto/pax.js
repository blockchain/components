// @flow strict
import React from 'react';
import withStyle from "../withStyle";

const SvgCryptoPax = props => <svg viewBox="0 0 32 32" {...props}><g fill="none"><circle cx={16} cy={16} r={16} fill="#EDE708" /><path d="M26.88 13.35l.5.75c1-2.52.77-4.49-.13-5.35-1.62-1.56-4-.69-6.58-1.77-2.15-1.58-3.45-2-5.24-2a6.22 6.22 0 0 0-3.25 1.64 5 5 0 0 0-3.9 1.53c-1.06 1.25-1.3 4.68-1.46 5.55-.16.87-2 4.38-1.81 6.3.19 1.92 1.6 4 5.59 4.49a7.58 7.58 0 0 0 6 2.63c2.09-.22 5-3.42 6.69-4.69 1.69-1.27 7.71-2.37 4.12-8.28a8.89 8.89 0 0 0-.5-.75l-.03-.05zm-9.13 8.8a6.66 6.66 0 0 1-7.45-4.06c-.22-.86-.65-5.24 3-7.41 2.72-1.54 6.55-1.75 8.16 1.84 1.61 3.59 1.02 8.62-3.71 9.63z" fill="#FFF" /></g></svg>;

export const CryptoPax = withStyle(SvgCryptoPax, "CryptoPax", true);