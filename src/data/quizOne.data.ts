import {Quiz} from './quiz.type';

export const quizOne:Quiz = {
    gameId:1,
    gameName:"True Avenger",
    gameType:'question',
    questions:[
        {
            questionNum:1,
            question:'What does S.H.I.E.L.D. stand for?',
            options:[
                {
                    value:'Strategic Homeland Intervention, Enforcement and Logistics Division',
                    isCorrect:true
                },
                {
                    value:'Strategic HomeScience Intervention, Enforcement and Logical Division',
                    isCorrect:false
                },
                {
                    value:'Strategic Homeland Invention, Elimination and Logistics Division',
                    isCorrect:false
                },
                {
                    value:'Scientific Homeland Intervention, Evolvement and Logistics Division',
                    isCorrect:false
                },
            ]
        },
        {
            questionNum:2,
            question:'In which movie did Spider-Man make his first appearance in the MCU?',
            options:[
                {
                    value:'Spiderman Homecoming',
                    isCorrect:false
                },
                {
                    value:'Avengers: Age of Ultron',
                    isCorrect:false
                },
                {
                    value:'Captain America: Civil War',
                    isCorrect:true
                },
                {
                    value:'X-Men: Origins',
                    isCorrect:false
                },
            ]
        },
        {
            questionNum:3,
            question:'What’s the name of the amulet Doctor Strange wears around his neck?',
            options:[
                {
                    value:'The Staff of Dormamu',
                    isCorrect:false
                },
                {
                    value:'The Heart of Sanctum',
                    isCorrect:false
                },
                {
                    value:'The Soul of Sorcer Supreme',
                    isCorrect:false
                },
                {
                    value:'The Eye of Agamotto',
                    isCorrect:true
                },
            ]
        },
        {
            questionNum:4,
            question:'Mark Ruffalo Replaced Which Actor When He Was Cast as Bruce Banner?',
            options:[
                {
                    value:'Bruce Banner',
                    isCorrect:false
                },
                {
                    value:'Caroll Steven',
                    isCorrect:false
                },
                {
                    value:'Kevin Hart',
                    isCorrect:false
                },
                {
                    value:'Edward Norton',
                    isCorrect:true
                },
            ]
        },
        {
            questionNum:5,
            question:'What Is the Real Name of the Red Skull?',
            options:[
                {
                    value:'Ealdwine Färberg',
                    isCorrect:false
                },
                {
                    value:'Johann Schmidt',
                    isCorrect:true
                },
                {
                    value:'Hrafn Engbergs',
                    isCorrect:false
                },
                {
                    value:'Erwin Brauneg',
                    isCorrect:false
                },
            ]
        },
        {
            questionNum:6,
            question:'Which Phase 3 MCU Movie Does Not Feature a Cameo From Stan Lee?',
            options:[
                {
                    value:'Thor Ragnarok',
                    isCorrect:false
                },
                {
                    value:'Avengers Endgame',
                    isCorrect:false
                },
                {
                    value:'Spider-Man: Far From Home',
                    isCorrect:true
                },
                {
                    value:'Ant-Man and The Wasp',
                    isCorrect:false
                },
            ]
        },
        {
            questionNum:7,
            question:'In Which MCU Movie Does Thanos First Appear?',
            options:[
                {
                    value:'The Avengers',
                    isCorrect:true
                },
                {
                    value:'Dr. Strange',
                    isCorrect:false
                },
                {
                    value:'Avengers Infinity war',
                    isCorrect:false
                },
                {
                    value:'Captain America: The First Avenger',
                    isCorrect:false
                },
            ]
        },
        {
            questionNum:8,
            question:'What Is the Name of the Super Soldier Project That Created Captain America?',
            options:[
                {
                    value:'Project Super',
                    isCorrect:false
                },
                {
                    value:'Project Rebirth',
                    isCorrect:true
                },
                {
                    value:'Project Frontline',
                    isCorrect:false
                },
                {
                    value:'Avengers Initiative',
                    isCorrect:false
                },
            ]
        },
        {
            questionNum:9,
            question:'Where do Sif and Volstagg hide the Reality Stone at the end of the movie?',
            options:[
                {
                    value:"Inside Sif's Sword",
                    isCorrect:false
                },
                {
                    value:'In a vault in Asgard',
                    isCorrect:false
                },
                {
                    value:'On Vormir',
                    isCorrect:false
                },
                {
                    value:'They give it to the Collector',
                    isCorrect:true
                },
            ]
        },
        {
            questionNum:10,
            question:'What is the first line of "Agatha All Along" in Wandavision?',
            options:[
                {
                    value:`"Who's been pulling every evil string?"`,
                    isCorrect:false
                },
                {
                    value:`"It's been Agatha All Along"`,
                    isCorrect:false
                },
                {
                    value:`"Who's been messin' up everything?"`,
                    isCorrect:true
                },
                {
                    value:`"Who's been controllin' this whole thing?"`,
                    isCorrect:false
                },
            ]
        },
    ]
}