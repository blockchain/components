// @flow strict
import React from 'react';
import withStyle from "../withStyle";

const SvgCryptoXvc = props => <svg viewBox="0 0 32 32" {...props}><g fill="none" fillRule="evenodd"><circle cx={16} cy={16} fill="#b50126" r={16} /><path d="M10.118 10.743H8L9.664 8h4.134v10.717L21.714 8H26L14.857 24h-4.739z" fill="#fff" /></g></svg>;

export const CryptoXvc = withStyle(SvgCryptoXvc, "CryptoXvc", true);