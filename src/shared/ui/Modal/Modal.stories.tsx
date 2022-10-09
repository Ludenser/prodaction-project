import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'shared/contexts';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Dolor laudantium provident totam iusto nemo veritatis architecto? Repellat doloremque praesentium blanditiis quidem, placeat cum sed quo quaerat aspernatur soluta ipsam odit.',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Dolor laudantium provident totam iusto nemo veritatis architecto? Repellat doloremque praesentium blanditiis quidem, placeat cum sed quo quaerat aspernatur soluta ipsam odit.',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
