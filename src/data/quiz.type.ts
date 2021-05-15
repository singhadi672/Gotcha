export type AllQuiz = {
    total:number;
    quiz: Quiz[];
}

export type Quiz = {
    gameName:string;
    gameId:number;
    gameType:'question'|'image';
    questions:Question[];
}

export type Question = {
    questionNum:number;
    question:string;
    options:Option[];
}

export type Option = {
    value:string;
    isCorrect:boolean;
}

