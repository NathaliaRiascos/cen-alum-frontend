import Button from '.'

export default {
    title: 'Atoms/Button',
    component: Button
}

/*
export const Primary = () => <Button>Primary</Button>
Primary.storyName = 'Primary'

export const Secondary = () => <Button type='secondary'>Secondary</Button>
Secondary.storyName = 'Secondary'

export const Tertiary = () => <Button type='tertiary'>Secondary</Button>
Tertiary.storyName = 'Tertiary'

export const Fourth = () => <Button type='fourth'>Fourth</Button>
Fourth.storyName = 'Fourth'*/

const Template = args => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    type: 'primary',
    children: 'Button',
  };
  