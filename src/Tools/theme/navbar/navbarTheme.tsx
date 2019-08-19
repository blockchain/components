import { PaletteType } from '../config/palette';

export interface NavbarTheme {
  navbarBackgroundColor: PaletteType;
  navbarBrandZIndex: number;
  navbarTogglerZIndex: number;
  navbarDropdownContentBackgroundColor: PaletteType;
  navbarDropdownContentBorderColor: PaletteType;
  navbarDropdownContentShadowColor: PaletteType;
  navbarDropdownContentShadowColor2: PaletteType;
  navbarDropdownDescriptionColor: PaletteType;
  navbarDropdownDescriptionMobileColor: PaletteType;
  navbarDropdownHeaderColor: PaletteType;
  navbarDropdownTitleColor: PaletteType;
  navbarDropdownTitleMobileColor: PaletteType;
  navbarMenuBackgroundColor: PaletteType;
  navbarMenuZIndex: number;
  navbarTogglerColor: PaletteType;
}

export const defaultNavbarTheme: NavbarTheme = {
  navbarBackgroundColor: 'grey700',
  navbarBrandZIndex: 1001,
  navbarTogglerZIndex: 1001,
  navbarDropdownContentBackgroundColor: 'white',
  navbarDropdownContentBorderColor: 'grey400',
  navbarDropdownContentShadowColor: 'greyFade400',
  navbarDropdownContentShadowColor2: 'greyFade100',
  navbarDropdownDescriptionColor: 'grey400',
  navbarDropdownDescriptionMobileColor: 'whiteFade400',
  navbarDropdownHeaderColor: 'white',
  navbarDropdownTitleColor: 'blue600',
  navbarDropdownTitleMobileColor: 'white',
  navbarMenuBackgroundColor: 'blue900',
  navbarMenuZIndex: 1000,
  navbarTogglerColor: 'white',
};
