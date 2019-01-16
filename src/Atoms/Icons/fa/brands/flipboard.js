// @flow strict
import React from 'react';
import withStyle from "../../withStyle";

const SvgFabFlipboard = props => <svg viewBox="0 0 448 512" {...props}><path d="M0 32v448h448V32H0zm358.4 179.2h-89.6v89.6h-89.6v89.6H89.6V121.6h268.8v89.6z" /></svg>;

export const FabFlipboard = withStyle(SvgFabFlipboard, "FabFlipboard", false);