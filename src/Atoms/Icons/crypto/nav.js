// @flow strict
import React from 'react';
import withStyle from "../withStyle";

const SvgCryptoNav = props => <svg viewBox="0 0 32 32" {...props}><g fill="none" fillRule="evenodd"><circle cx={16} cy={16} r={16} fill="#7D59B5" /><path fill="#FFF" d="M21.32 22h-4.796l-3.798-7.005L9.797 22H5l5.018-12h4.797l3.945 7.276L22.203 10H27l-5.68 12z" /></g></svg>;

export const CryptoNav = withStyle(SvgCryptoNav, "CryptoNav", true);