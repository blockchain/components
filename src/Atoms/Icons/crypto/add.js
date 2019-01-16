// @flow strict
import React from 'react';
import withStyle from "../withStyle";

const SvgCryptoAdd = props => <svg viewBox="0 0 32 32" {...props}><g fill="none" fillRule="evenodd"><circle cx={16} cy={16} r={16} fill="#FEC807" fillRule="nonzero" /><path d="M24.984 17.631h-4.928l-.88-2.64h5.8a.748.748 0 1 0 0-1.496H18.7l-2.517-7.673a1.074 1.074 0 0 0-2.12-.07l-6.02 18.303c-.016.1-.016.2 0 .3a1.012 1.012 0 0 0 1.989.246l5.051-15.4 1.443 4.294h-1.25a.748.748 0 1 0 0 1.496h1.76l.88 2.64h-2.64a.748.748 0 1 0 0 1.496h3.16l1.425 4.224h-7.559a1.056 1.056 0 1 0 0 2.112h8.941c.554 0 1.003-.449 1.003-1.003a1.03 1.03 0 0 0-.097-.44l-1.61-4.893h4.4a.748.748 0 1 0 0-1.496h.044z" fill="#FFF" /></g></svg>;

export const CryptoAdd = withStyle(SvgCryptoAdd, "CryptoAdd", true);