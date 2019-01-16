// @flow strict
import React from 'react';
import withStyle from "../../withStyle";

const SvgFabGoogleDrive = props => <svg viewBox="0 0 512 512" {...props}><path d="M339 314.9L175.4 32h161.2l163.6 282.9H339zm-137.5 23.6L120.9 480h310.5L512 338.5H201.5zM154.1 67.4L0 338.5 80.6 480 237 208.8 154.1 67.4z" /></svg>;

export const FabGoogleDrive = withStyle(SvgFabGoogleDrive, "FabGoogleDrive", false);