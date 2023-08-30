import GameCard from "../components/GameCard";
import {options} from "../components/GameCard";
import formatDateTime from "../assets/functions";

export default {
    title: "Components/GameCard",
    component: GameCard,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    argTypes: { dateTime: { control: 'date' }}

}

const Template = args=> <GameCard {...args} />

export const Dark = Template.bind({})
Dark.args = {
    theme: 'dark',
    firstTeamInfo: 'LNZ',
    secondTeamInfo: 'Zorya',
    score: '2:2',
    dateTime:formatDateTime(new Date(2024,3,23,17,0))

}

export const Light = Template.bind({})
Light.args = {
    theme: 'light',
    firstTeamInfo: 'Mynai',
    secondTeamInfo: 'Dynamo',
    score: '1:5',
    dateTime: formatDateTime(new Date(2023,12,28,12,30))

}