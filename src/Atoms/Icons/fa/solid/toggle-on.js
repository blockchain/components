// @flow strict
import React from 'react';
import withStyle from "../../withStyle";

const SvgFasToggleOn = props => <svg viewBox="0 0 576 512" {...props}><path d="M576 256c0 106.039-85.961 192-192 192H192C85.961 448 0 362.039 0 256S85.961 64 192 64h192c106.039 0 192 85.961 192 192zM384 128c-70.741 0-128 57.249-128 128 0 70.741 57.249 128 128 128 70.741 0 128-57.249 128-128 0-70.741-57.249-128-128-128" /></svg>;

export const FasToggleOn = withStyle(SvgFasToggleOn, "FasToggleOn", false);