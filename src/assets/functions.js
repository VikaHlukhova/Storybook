export const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',

};

export default function formatDateTime(dateTime){
    console.log('hello')
    dateTime.setMonth(dateTime.getMonth()-1)
    return new Date(dateTime)
}

export function getPercent(first,second){
    const total = first+second;
    return {
        'firstPercent': first*100/total,
        'secondPercent': second*100/total,

        }
}

export function getDeg(first,second){
    const total = first+second;
    return {
        'firstPercent': first*360/total,
        'secondPercent': second*360/total,

    }
}