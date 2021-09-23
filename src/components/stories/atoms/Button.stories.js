import Button from 'components/atomic/atoms/Button'

export default {
    title: 'Atoms/Button',
    component: Button
}

export const Primary = () => <Button>Primary</Button>
Primary.storyName = 'Primary'

export const Secondary = () => <Button type='secondary'>Secondary</Button>
Secondary.storyName = 'Secondary'

export const Tertiary = () => <Button type='tertiary'>Secondary</Button>
Tertiary.storyName = 'Tertiary'

export const Fourth = () => <Button type='fourth'>Fourth</Button>
Fourth.storyName = 'Fourth'