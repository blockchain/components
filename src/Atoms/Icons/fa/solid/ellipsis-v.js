// @flow strict
import React from 'react';
import withStyle from "../../withStyle";

const SvgFasEllipsisV = props => <svg viewBox="0 0 192 512" {...props}><path d="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z" /></svg>;

export const FasEllipsisV = withStyle(SvgFasEllipsisV, "FasEllipsisV", false);