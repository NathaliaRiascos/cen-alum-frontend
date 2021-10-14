import Icon from '.'

export default {
    title: 'Atoms/Icon',
    component: Icon
}
/*
export const Primary = () => <Icon type='more' />
Primary.storyName = 'Primary'
*/
const Template = args => <Icon {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  type: 'more'
};
  