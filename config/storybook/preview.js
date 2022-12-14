import { addDecorator } from '@storybook/react';
import { Theme } from '../../src/shared/contexts/themeContext/ThemeContext';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator';
import { TranslationDecorator } from '../../src/shared/config/storybook/TranslationDecorator';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

addDecorator(StyleDecorator);
addDecorator(TranslationDecorator);
addDecorator(RouterDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
