import { Theme } from '../../../../models/Theme';
import { ThemeActionTypes as types } from './types';


export interface SetTheme {
    type: types.SET_THEME;
    theme: Theme;
}

export const setTheme = (theme: Theme): SetTheme => {
    return {
        theme,
        type: types.SET_THEME,
    };
};

export type ThemeActions = SetTheme;