import TextArea from '.'

export default {
    title: 'Atoms/TextArea',
    component: TextArea
}

/*

export const Default = () => <Input handleChange={() => {}} />
Default.storyName = 'Default'

export const Disable = () => <Input handleChange={() => {}} disable/>
Disable.storyName = 'Disable'
*/
const Template = args => <TextArea {...args} />;

export const Default = Template.bind({});

Default.args = {
    value: 'Soy text',
    label: 'Soy label'
};
