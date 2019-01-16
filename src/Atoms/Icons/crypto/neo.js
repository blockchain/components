// @flow strict
import React from 'react';
import withStyle from "../withStyle";

const SvgCryptoNeo = props => <svg viewBox="0 0 32 32" {...props}><g fill="none" fillRule="evenodd"><circle cx={16} cy={16} r={16} fill="#58BF00" /><path fill="#FFF" fillRule="nonzero" d="M25 22.58l-6.99-3.258v-7.22L25 9.623V22.58zM14.823 26L8 22.821V9.958l6.823 3.18V26zm10.01-16.843l-.113.04-6.71 2.381-.168.06-2.843 1.008-6.73-3.136 9.573-3.396.084-.03.177-.063.062-.021 6.73 3.136-.063.021z" /></g></svg>;

export const CryptoNeo = withStyle(SvgCryptoNeo, "CryptoNeo", true);