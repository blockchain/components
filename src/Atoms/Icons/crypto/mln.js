// @flow strict
import React from 'react';
import withStyle from "../withStyle";

const SvgCryptoMln = props => <svg viewBox="0 0 32 32" {...props}><g fill="none" fillRule="evenodd"><circle cx={16} cy={16} r={16} fill="#0B1529" /><path fill="#FFF" d="M8.627 20.124l5.272 3.092v1.729L7 20.885v-10.59L16 5l9 5.295v10.59l-6.899 4.06v-1.73l5.271-3.091-1.36-.786.178-.309 1.343.776v-7.852l-6.82 4.042v11.56L16 28l-.714-.445v-11.56l-6.819-4.042v7.851l1.342-.775.178.31-1.36.785zm7.175-13.31L9.18 10.699 16 14.742l6.82-4.043-6.661-3.908v1.604h-.357V6.814zm0 2.592h.357v1.657h-.357V9.406zm0 2.668h.357v1.657l-.179.081-.178-.08v-1.658zm5.56 6.45l-.178.31-1.436-.83.179-.309 1.435.83zm-2.265-1.334l-.179.31-1.435-.83.02-.194.158-.114 1.436.828zm-8.46 1.334l1.435-.829.179.31-1.435.828-.179-.309zm2.266-1.334l1.435-.828.16.114.018.195-1.435.828-.178-.309z" /></g></svg>;

export const CryptoMln = withStyle(SvgCryptoMln, "CryptoMln", true);