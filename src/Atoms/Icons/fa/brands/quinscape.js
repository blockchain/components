// @flow strict
import React from 'react';
import withStyle from "../../withStyle";

const SvgFabQuinscape = props => <svg viewBox="0 0 489.1 512" {...props}><path d="M301.9 474.6h-1.3c-87.3 0-158.1-70.8-158.1-158.1s70.8-158.1 158.1-158.1c94.9 0 168.2 83.1 157 176.6 4 5.1 8.2 9.6 11.2 15.3 13.4-30.3 20.3-62.4 20.3-97.7C489.1 117.5 379.6 8 244.5 8 109.5 8 0 117.5 0 252.6s109.5 244.6 244.5 244.6c24.8 0 47.8-3.2 70.4-10.1-5.2-3.5-9-8.2-13.4-12.6l.4.1zm-21.2-69.8c0-54.8 44.4-99.2 99.2-99.2 54.8 0 99.2 44.4 99.2 99.2 0 54.8-44.4 99.2-99.2 99.2-54.8 0-99.2-44.4-99.2-99.2" /></svg>;

export const FabQuinscape = withStyle(SvgFabQuinscape, "FabQuinscape", false);