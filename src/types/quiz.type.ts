export type QuizDetail = {
    themeAccentPrimary: string | null;
    themeAccentSecondary: string| null;
    themeDescription: string| null;
    themeImage:string| null;
    themeName: string| null;
    _id: string| null;
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

export type PlayAreaProp = {
  accentPrimary: string;
  accentSecondary: string;
};

export type InitialReducer = {
  totalScore: number;
};

export type SINGLE_PLAYER_ACTION =
  | { type: "CORRECT_ANSWER"; payload: 5 }
  | { type: "WRONG_ANSWER"; payload: 2 };

  export type MULTI_PLAYER_ACTION =
  | { type: "CORRECT_ANSWER"; payload: { user: string; score: 5 } }
  | { type: "WRONG_ANSWER"; payload: { user: string; score: 2 } }
  | { type: "UPDATE_STATE"; payload: any }
  | { type: "UPDATE_ISANSWERED_STATE"; payload: any };