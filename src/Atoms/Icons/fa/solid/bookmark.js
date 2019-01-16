// @flow strict
import React from 'react';
import withStyle from "../../withStyle";

const SvgFasBookmark = props => <svg viewBox="0 0 384 512" {...props}><path d="M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z" /></svg>;

export const FasBookmark = withStyle(SvgFasBookmark, "FasBookmark", false);