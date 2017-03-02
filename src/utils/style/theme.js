import Color from 'tinycolor2';

const PRIMARY = '#FCBE44';
const INFO = '#1f93d9';
const SUCCESS = '#31993d';
const REJECT = '#993724';

//HEADER
const BG = '#F5F5F5';
const BORDER = '#fbd995';
const SHADOW = '#EDEDED';
const TAB_LINK_COLOR = '#fff';

//HEADER-SEARCH
const SEARCH_COLOR = '#FFF';
const SEARCH_ICON_COLOR = 'rgba(#fff, 0.8)';

//TYPOGRAPHY
const H1 = '#6A6A6A';
const DIVIDER_BORDER = '#E9E9E9';
const DIVIDER_TEXT_COLOR = '#BCBCBC';

export const COLORS = {
  PRIMARY,
  INFO,
  SUCCESS,
  REJECT,
  BG,
  BORDER,
  SHADOW,
  TAB_LINK_COLOR,
  SEARCH_COLOR,
  SEARCH_ICON_COLOR,
  H1,
  DIVIDER_BORDER,
  DIVIDER_TEXT_COLOR,
};

const ROBOTO = "'Roboto', sans-serif";
const OPEN_SANS = "'Open Sans', sans-serif";

export const FONTS = {
  ROBOTO,
  OPEN_SANS,
};

export const lighten = (col, amt) => {
  const color = Color(col).lighten(amt);
  return color.toString();
};

export const darken = (col, amt) => {
  const color = Color(col).darken(amt);
  return color.toString();
};
