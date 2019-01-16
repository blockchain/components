// @flow strict
import React from 'react';
import withStyle from "../../withStyle";

const SvgFabHouzz = props => <svg viewBox="0 0 414.6 512" {...props}><path d="M258.9 330.7H154.3V480H0V32h109.5v104.5l305.1 85.6V480H258.9V330.7z" /></svg>;

export const FabHouzz = withStyle(SvgFabHouzz, "FabHouzz", false);