import { Record } from 'immutable';
import { Theme } from '../../../../models/Theme';
import { ThemeActions } from './actions';
import { ThemeActionTypes as types } from './types';

import baseTheme from '../../../../views/themes/baseTheme';

export const ThemeStateRecord = Record({
    theme: baseTheme,
});

export class ThemeState extends ThemeStateRecord {
    public theme: Theme;
}

export const themeReducer = (state = new ThemeState(), action: ThemeActions) => {
    switch (action.type) {
        case (types.SET_THEME):
            return state.set('theme', action.theme);
        default:
            return state;
    }
};
