// @flow strict
import React from 'react';
import withStyle from "../withStyle";

const SvgCryptoOmg = props => <svg viewBox="0 0 32 32" {...props}><g fill="none" fillRule="evenodd"><circle cx={16} cy={16} r={16} fill="#1A53F0" /><path fill="#FFF" fillRule="nonzero" d="M11.856 17.29a4.353 4.353 0 0 0-4.35 4.355A4.353 4.353 0 0 0 11.855 26a4.353 4.353 0 0 0 4.352-4.355 4.353 4.353 0 0 0-4.351-4.355zm0 7.393a3.035 3.035 0 0 1-3.033-3.036 3.035 3.035 0 0 1 3.033-3.037 3.035 3.035 0 0 1 3.034 3.037 3.04 3.04 0 0 1-3.034 3.036zM21.15 8a4.353 4.353 0 0 0-4.351 4.355 4.353 4.353 0 0 0 4.35 4.355 4.353 4.353 0 0 0 4.352-4.355A4.353 4.353 0 0 0 21.149 8zm0 7.393a3.035 3.035 0 0 1-3.034-3.036A3.035 3.035 0 0 1 21.15 9.32a3.035 3.035 0 0 1 3.033 3.037 3.04 3.04 0 0 1-3.033 3.036zM11.856 8a4.358 4.358 0 0 0-1.696 8.37 4.351 4.351 0 0 0 5.288-1.556 4.36 4.36 0 0 0-.475-5.497h1.233V8h-4.35zm3.034 4.355a3.035 3.035 0 0 1-3.034 3.036 3.035 3.035 0 0 1-3.033-3.036 3.035 3.035 0 0 1 3.033-3.036 3.04 3.04 0 0 1 3.035 3.036h-.001z" /></g></svg>;

export const CryptoOmg = withStyle(SvgCryptoOmg, "CryptoOmg", true);