// @flow strict
import React from 'react';
import withStyle from "../withStyle";

const SvgCryptoBat = props => <svg viewBox="0 0 32 32" {...props}><g fill="none"><circle cx={16} cy={16} r={16} fill="#FF5000" /><path fill="#FFF" d="M6 23.5l10.051-17L26 23.477 6 23.5zm10.027-10.12l-4.108 6.786h8.235l-4.127-6.786z" /></g></svg>;

export const CryptoBat = withStyle(SvgCryptoBat, "CryptoBat", true);