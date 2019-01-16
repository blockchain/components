// @flow strict
import React from 'react';
import withStyle from "../withStyle";

const SvgCryptoChain = props => <svg viewBox="0 0 32 32" {...props}><g fill="none" fillRule="evenodd"><circle cx={16} cy={16} r={16} fill="#00ACED" fillRule="nonzero" /><g fill="#FFF"><path d="M6 9.714v4.076l9.895 5.715 6.42-3.715v3.315l3.456 2.038V9.714l-9.885 5.715z" /><path opacity={0.7} d="M15.886 4L6 9.714v11.429l9.886 5.714 9.857-5.714-3.495-2.038-6.362 3.676-6.39-3.676v-7.353l6.39-3.676 6.362 3.676 3.495-2.038z" /></g></g></svg>;

export const CryptoChain = withStyle(SvgCryptoChain, "CryptoChain", true);