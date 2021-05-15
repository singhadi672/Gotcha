export type CardData = {
    id:number;
    image:string;
    themeName:string;
}

export type HomeCard = {
    dataName : string;
    cardsData :CardData[];
}

export const HomeCardData:HomeCard = {
    dataName: 'homeThemes',
    cardsData :[
        {
            id:1,
            image:'https://i.pinimg.com/736x/3c/7e/dc/3c7edc978a89bb36232058c58da83667.jpg',
            themeName:'True Avenger'
        },
        {
            id:2,
            image:'https://i.pinimg.com/originals/7b/34/35/7b34351a53445203271113a3773b68fb.jpg',
            themeName:"That's What.."
        },
        {
            id:3,
            image:'https://i.pinimg.com/originals/c4/8e/67/c48e6716d05381d26cec2cf7b356e86f.png',
            themeName:"Travel kiya kya?"
        },
        {
            id:4,
            image:'https://resizing.flixster.com/kXYlKTUX9-8qeDQF5rvAH37sFZE=/206x305/v1.dDs1MDkwMTA7ajsxODc3MDsxMjAwOzE1MzY7MjA0OA',
            themeName:"Are you?"
        }
    ]
}