import Heading from 'components/atomic/atoms/Heading'

export default {
    title: 'Atoms/Heading',
    component: Heading
}

export const Primary = () => <Heading typeHeading='h1'>Primary</Heading>
Primary.storyName = 'H1'

export const Secondary = () => <Heading typeHeading='h2'>Secondary</Heading>
Secondary.storyName = 'H2'
