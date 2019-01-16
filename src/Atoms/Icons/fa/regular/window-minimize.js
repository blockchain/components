// @flow strict
import React from 'react';
import withStyle from "../../withStyle";

const SvgFarWindowMinimize = props => <svg viewBox="0 0 512 512" {...props}><path d="M480 480H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h448c17.7 0 32 14.3 32 32s-14.3 32-32 32z" /></svg>;

export const FarWindowMinimize = withStyle(SvgFarWindowMinimize, "FarWindowMinimize", false);