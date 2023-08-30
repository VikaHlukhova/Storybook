import Statistic from "../components/Statistic";
import {array, arrayOf} from "prop-types";


export default {
    title: "Components/Statistic",
    component: Statistic,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    tags: ['autodocs'],
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    argTypes: {
        colorFirst: {
            control: {type: 'color'}
        },
        colorSecond: {
            control: {type: 'color'}
        },
    }

}

const Template = args => <Statistic {...args} />

export const Line = Template.bind({})
Line.args = {
    parameter: "Yellow cards",
    firstTeamInfo: 2,
    secondTeamInfo: 5,
    colorFirst: '#111111',
    colorSecond: '#ee1e1e',
    type: "line"

}


export const Circle = Template.bind({})
Circle.args = {
    parameter: "Yellow cards",
    firstTeamInfo: 2,
    secondTeamInfo: 5,
    colorFirst: '#111111',
    colorSecond: '#ee1e1e',
    type: "circle"

}
