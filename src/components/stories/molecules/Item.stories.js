import Item from 'components/atomic/molecules/Item'

export default {
    title: 'Molecules/Item',
    component: Item
}

export const Primary = () => <Item>Soy item</Item>
Primary.storyName = 'Primary'
