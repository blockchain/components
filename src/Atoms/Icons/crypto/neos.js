// @flow strict
import React from 'react';
import withStyle from "../withStyle";

const SvgCryptoNeos = props => <svg viewBox="0 0 32 32" {...props}><g fill="none" fillRule="evenodd"><circle cx={16} cy={16} fill="#e5f300" r={16} /><path d="M10.5 9.358l8.143 4.926v3.097l-5.714-3.433V26H10.5zm11 13.284l-8.143-4.926V14.62l5.714 3.433V6H21.5z" fill="#fff" /></g></svg>;

export const CryptoNeos = withStyle(SvgCryptoNeos, "CryptoNeos", true);