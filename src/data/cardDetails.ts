export type CardDetail = {
    cardId:number;
    cardName:string;
    cardDescription:string;
    accentPrimary:string;
    accentSecondary:string;
}

export type CardDetailData = {
    total:number;
    cards:CardDetail[];
}

export const GameData:CardDetailData = {
    total:4,
    cards:[
        {
            cardId:1,
            cardName:'True Avenger',
            cardDescription:'This game consists of well-curated Marvel Cinematic Universe Questionnaire for all the Marvel-Geeks out there! The Game consists of 1 Round containing 10 Questions. Each correct answer will give you 5 points, each wrong answer will take 2 points! At the end of the quiz the Person with highest score wins!! ',
            accentPrimary:'#3c096c',
            accentSecondary:'#9d79bc'
        },
        {
            cardId:2,
            cardName:"That's What She Said!",
            cardDescription:"Who Haven't Watched 'The Office'? Presenting you 'The Office Trivia' where you will answer what exactly the Characters said in the picture shown to you!!.. The Game consists of 1 Round containing 10 Questions. Each correct answer will give you 5 points, each wrong answer will take 2 points! At the end of the quiz the Person with highest score wins!!",
            accentPrimary:'#f3722c',
            accentSecondary:'#880512'
        },
        {
            cardId:3,
            cardName:'Travel Kiya Kya?',
            cardDescription:"Calling all Travel-Geeks out there! Put up your Travel Shoes and come aboard! Presenting you 'Guess the Place'... Identify the places by the hints given in the Questions! The Game consists of 1 Round containing 10 Questions. Each correct answer will give you 5 points, each wrong answer will take 2 points! At the end of the quiz the Person with highest score wins!!",
            accentPrimary:'#38b000',
            accentSecondary:'#006400'
        },
        {
            cardId:4,
            cardName:"Kya Aap Panchvi Pass se Tez Hai?",
            cardDescription:"Do not undersetimate the power of a panchvi pass! The quiz consists of some 'Common-sense' questions to judge you against a 10 years old kid! The Game consists of 1 Round containing 10 Questions. Each correct answer will give you 5 points, each wrong answer will take 2 points! At the end of the quiz the Person with highest score wins!!",
            accentPrimary:'#6e1423',
            accentSecondary:'#da1e37'
        }
    ]
}