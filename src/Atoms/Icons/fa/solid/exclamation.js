// @flow strict
import React from 'react';
import withStyle from "../../withStyle";

const SvgFasExclamation = props => <svg viewBox="0 0 192 512" {...props}><path d="M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z" /></svg>;

export const FasExclamation = withStyle(SvgFasExclamation, "FasExclamation", false);