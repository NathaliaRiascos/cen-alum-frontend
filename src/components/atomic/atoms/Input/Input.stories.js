import Input from '.'

export default {
    title: 'Atoms/Input',
    component: Input
}

/*

export const Default = () => <Input handleChange={() => {}} />
Default.storyName = 'Default'

export const Disable = () => <Input handleChange={() => {}} disable/>
Disable.storyName = 'Disable'
*/
const Template = args => <Input {...args} />;

export const Default = Template.bind({});

Default.args = {
    value: 'Soy text',
    label: 'Soy label'
};
