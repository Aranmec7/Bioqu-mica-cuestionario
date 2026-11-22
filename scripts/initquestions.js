var allInitQuestionFunctions = new Array (
    InitQuestion1,
    InitQuestion2,
    InitQuestion3,
    InitQuestion4,
    InitQuestion5,
    InitQuestion6,
    InitQuestion7,
    InitQuestion8,
    InitQuestion9,
    InitQuestion10,
    InitQuestion11,
    InitQuestion12,
    InitQuestion13,
    InitQuestion14,
    InitQuestion15,
    InitQuestion16,
    InitQuestion17,
    InitQuestion18,
    InitQuestion19,
    InitQuestion20,
    InitQuestion21,
    InitQuestion22,
    InitQuestion23,
    InitQuestion24,
    InitQuestion25,
    InitQuestion26,
    InitQuestion27,
    InitQuestion28,
    InitQuestion29,
    InitQuestion30,
);

/* Code generated function */
function InitQuestion1()
{
    const type = QMAKE_MATCHING;
    const questionIndex = 0;
    var weight = DecodeNumber('jhrsrR5gsf4=', 470, 0, 99999);
    var numOfAnswers = 13;
    var i, j;
    var answer;
    var choice, valuation;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('F8Oe0r7r3GM=', 665, -1000, 1000),DecodeDecimal('9WbuYPxcvVw=', 665, -1000, 1000),DecodeDecimal('9WbuYPxcvVw=', 665, -1000, 1000));
    question.num = 1;
    question.answers.length = 0;
    question.shortTextQuestion = "Relacione cada perfil químico con sus elementos que incluye ";
    question.noChoice = false;
    for (i = 0; i < orderLeft0.length; i++)
    {
        choice = new Array(2);;
        choice[0] = GetSelectedItemLeft("idDD0", i);
        choice[1] = GetSelextedItemRight("idDD0", i);
        if (choice[1]==='') question.noChoice=true;
        valuation = new Array();
        for (j = 0; j < listLeft0.length; j++)
        {
            if (listLeft0[j] === choice[0])
            {
                valuation.push(listRight0[j]);
            }
        }
        answer = new Answer(choice, valuation, 1, 0, '');
        question.answers.push(answer);
    }
    return question;

}
/* Code generated function */
function InitQuestion2()
{
    const type = QMAKE_MATCHING;
    const questionIndex = 1;
    var weight = DecodeNumber('A/wZ0TnAlzU=', 550, 0, 99999);
    var numOfAnswers = 43;
    var i, j;
    var answer;
    var choice, valuation;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('A/wZ0TnAlzU=', 550, -1000, 1000),DecodeDecimal('j7Djr6fxx9k=', 550, -1000, 1000),DecodeDecimal('j7Djr6fxx9k=', 550, -1000, 1000));
    question.num = 2;
    question.answers.length = 0;
    question.shortTextQuestion = "Relacione cada abreviación con su nombre ";
    question.noChoice = false;
    for (i = 0; i < orderLeft1.length; i++)
    {
        choice = new Array(2);;
        choice[0] = GetSelectedItemLeft("idDD1", i);
        choice[1] = GetSelextedItemRight("idDD1", i);
        if (choice[1]==='') question.noChoice=true;
        valuation = new Array();
        for (j = 0; j < listLeft1.length; j++)
        {
            if (listLeft1[j] === choice[0])
            {
                valuation.push(listRight1[j]);
            }
        }
        answer = new Answer(choice, valuation, 1, 0, '');
        question.answers.push(answer);
    }
    return question;

}
/* Code generated function */
function InitQuestion3()
{
    const type = QMAKE_MATCHING;
    const questionIndex = 2;
    var weight = DecodeNumber('JTQp9QK5nIQ=', 58, 0, 99999);
    var numOfAnswers = 18;
    var i, j;
    var answer;
    var choice, valuation;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('JTQp9QK5nIQ=', 58, -1000, 1000),DecodeDecimal('g8n4aWrGJBU=', 417, -1000, 1000),DecodeDecimal('g8n4aWrGJBU=', 417, -1000, 1000));
    question.num = 3;
    question.answers.length = 0;
    question.shortTextQuestion = "Relacione cada analito con su organo principal ";
    question.noChoice = false;
    for (i = 0; i < orderLeft2.length; i++)
    {
        choice = new Array(2);;
        choice[0] = GetSelectedItemLeft("idDD2", i);
        choice[1] = GetSelextedItemRight("idDD2", i);
        if (choice[1]==='') question.noChoice=true;
        valuation = new Array();
        for (j = 0; j < listLeft2.length; j++)
        {
            if (listLeft2[j] === choice[0])
            {
                valuation.push(listRight2[j]);
            }
        }
        answer = new Answer(choice, valuation, 1, 0, '');
        question.answers.push(answer);
    }
    return question;

}
/* Code generated function */
function InitQuestion4()
{
    const type = QMAKE_MATCHING;
    const questionIndex = 3;
    var weight = DecodeNumber('5yKJDaBincI=', 981, 0, 99999);
    var numOfAnswers = 18;
    var i, j;
    var answer;
    var choice, valuation;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('5yKJDaBincI=', 981, -1000, 1000),DecodeDecimal('BIVq/YqP0Ag=', 981, -1000, 1000),DecodeDecimal('BIVq/YqP0Ag=', 981, -1000, 1000));
    question.num = 4;
    question.answers.length = 0;
    question.shortTextQuestion = "Relacione cada analito con su enfermedad principal (y otras si es que aplica)";
    question.noChoice = false;
    for (i = 0; i < orderLeft3.length; i++)
    {
        choice = new Array(2);;
        choice[0] = GetSelectedItemLeft("idDD3", i);
        choice[1] = GetSelextedItemRight("idDD3", i);
        if (choice[1]==='') question.noChoice=true;
        valuation = new Array();
        for (j = 0; j < listLeft3.length; j++)
        {
            if (listLeft3[j] === choice[0])
            {
                valuation.push(listRight3[j]);
            }
        }
        answer = new Answer(choice, valuation, 1, 0, '');
        question.answers.push(answer);
    }
    return question;

}
/* Code generated function */
function InitQuestion5()
{
    const type = QMAKE_MATCHING;
    const questionIndex = 4;
    var weight = DecodeNumber('lMd7tZ99SxI=', 186, 0, 99999);
    var numOfAnswers = 48;
    var i, j;
    var answer;
    var choice, valuation;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('lMd7tZ99SxI=', 186, -1000, 1000),DecodeDecimal('CBJqenQI7o4=', 186, -1000, 1000),DecodeDecimal('CBJqenQI7o4=', 186, -1000, 1000));
    question.num = 5;
    question.answers.length = 0;
    question.shortTextQuestion = "Relacione cada analito con su valor de referencia en hombre";
    question.noChoice = false;
    for (i = 0; i < orderLeft4.length; i++)
    {
        choice = new Array(2);;
        choice[0] = GetSelectedItemLeft("idDD4", i);
        choice[1] = GetSelextedItemRight("idDD4", i);
        if (choice[1]==='') question.noChoice=true;
        valuation = new Array();
        for (j = 0; j < listLeft4.length; j++)
        {
            if (listLeft4[j] === choice[0])
            {
                valuation.push(listRight4[j]);
            }
        }
        answer = new Answer(choice, valuation, 1, 0, '');
        question.answers.push(answer);
    }
    return question;

}
/* Code generated function */
function InitQuestion6()
{
    const type = QMAKE_MATCHING;
    const questionIndex = 5;
    var weight = DecodeNumber('3u7UI5jhiD0=', 140, 0, 99999);
    var numOfAnswers = 34;
    var i, j;
    var answer;
    var choice, valuation;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('3u7UI5jhiD0=', 140, -1000, 1000),DecodeDecimal('gG69LBEUZ/E=', 140, -1000, 1000),DecodeDecimal('gG69LBEUZ/E=', 140, -1000, 1000));
    question.num = 6;
    question.answers.length = 0;
    question.shortTextQuestion = "Relaciona cada determinacion con su correcto fundamento quimico ";
    question.noChoice = false;
    for (i = 0; i < orderLeft5.length; i++)
    {
        choice = new Array(2);;
        choice[0] = GetSelectedItemLeft("idDD5", i);
        choice[1] = GetSelextedItemRight("idDD5", i);
        if (choice[1]==='') question.noChoice=true;
        valuation = new Array();
        for (j = 0; j < listLeft5.length; j++)
        {
            if (listLeft5[j] === choice[0])
            {
                valuation.push(listRight5[j]);
            }
        }
        answer = new Answer(choice, valuation, 1, 0, '');
        question.answers.push(answer);
    }
    return question;

}
/* Code generated function */
function InitQuestion7()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 6;
    var weight = DecodeNumber('+KF5n8eWMdY=', 617, 0, 99999);
    var numOfAnswers = 16;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('+KF5n8eWMdY=', 617, -1000, 1000),DecodeDecimal('s+v0EXUNkfQ=', 617, -1000, 1000),DecodeDecimal('s+v0EXUNkfQ=', 617, -1000, 1000));
    question.answers.length = 0;
    question.num = 7;
    question.isSingleAns = false;
    question.shortTextQuestion = "Seleccione las respuestas correctas para  AST ALT";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('+KF5n8eWMdY=', 619, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "indica  nivel de daño renal   corrige variación de cn de ualb uPro por concentración o dil de orina  ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('1oKZEORCny4=', 621, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Sus isoenzimas ti Subunidad B cerebral M muscular y son CKBB (rara ves en sangre) CKMB CKMM y están en mitocondrias  citoplasma";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('C59sBYR9B+E=', 460, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Muy toxica a alta cn";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('TfdUdyhuOTE=', 462, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Det si TFGcreatinina varia por ch de masa muscular x obesas vejes  veganas";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('9Ue9seP6vbY=', 464, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var choice5 = GetMultipleAnswerChoice(questionIndex, 4);
    if (choice5 === 1) question.noChoice = false;
    var answer5 = new Answer(choice5, valuation5, 1, 0, '');
    answer5.shortTextAnswer = "Requiere acelerador para reaccionar con diazoreactivo ";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    var valuation6 = DecodeNumber('rXCtMn0siw8=', 466, -1, 1);
    if (valuation6 === -2) PrintWrongKeyword(questionIndex);
    var choice6 = GetMultipleAnswerChoice(questionIndex, 5);
    if (choice6 === 1) question.noChoice = false;
    var answer6 = new Answer(choice6, valuation6, 1, 0, '');
    answer6.shortTextAnswer = "Es amarilla ";
    answer6.shortTextRemark = "";
    question.answers.push(answer6);
    var valuation7 = DecodeNumber('9NYSI0PQccs=', 468, -1, 1);
    if (valuation7 === -2) PrintWrongKeyword(questionIndex);
    var choice7 = GetMultipleAnswerChoice(questionIndex, 6);
    if (choice7 === 1) question.noChoice = false;
    var answer7 = new Answer(choice7, valuation7, 1, 0, '');
    answer7.shortTextAnswer = "Es la baja o nula cn de alb que pasa por el glomerulo ";
    answer7.shortTextRemark = "";
    question.answers.push(answer7);
    var valuation8 = DecodeNumber('dejmz2/r+Ps=', 470, -1, 1);
    if (valuation8 === -2) PrintWrongKeyword(questionIndex);
    var choice8 = GetMultipleAnswerChoice(questionIndex, 7);
    if (choice8 === 1) question.noChoice = false;
    var answer8 = new Answer(choice8, valuation8, 1, 0, '');
    answer8.shortTextAnswer = "Unida a alb  ";
    answer8.shortTextRemark = "";
    question.answers.push(answer8);
    var valuation9 = DecodeNumber('jhrsrR5gsf4=', 472, -1, 1);
    if (valuation9 === -2) PrintWrongKeyword(questionIndex);
    var choice9 = GetMultipleAnswerChoice(questionIndex, 8);
    if (choice9 === 1) question.noChoice = false;
    var answer9 = new Answer(choice9, valuation9, 1, 0, '');
    answer9.shortTextAnswer = "Hidrófoba";
    answer9.shortTextRemark = "";
    question.answers.push(answer9);
    var valuation10 = DecodeNumber('Mu0LDlauh2s=', 474, -1, 1);
    if (valuation10 === -2) PrintWrongKeyword(questionIndex);
    var choice10 = GetMultipleAnswerChoice(questionIndex, 9);
    if (choice10 === 1) question.noChoice = false;
    var answer10 = new Answer(choice10, valuation10, 1, 0, '');
    answer10.shortTextAnswer = "fotosensible por su doble enlace";
    answer10.shortTextRemark = "";
    question.answers.push(answer10);
    var valuation11 = DecodeNumber('5UdbERrZiOE=', 476, -1, 1);
    if (valuation11 === -2) PrintWrongKeyword(questionIndex);
    var choice11 = GetMultipleAnswerChoice(questionIndex, 10);
    if (choice11 === 1) question.noChoice = false;
    var answer11 = new Answer(choice11, valuation11, 1, 0, '');
    answer11.shortTextAnswer = "Viene de degradación de puricas (purinas)";
    answer11.shortTextRemark = "";
    question.answers.push(answer11);
    var valuation12 = DecodeNumber('z2VsdpNTcPU=', 478, -1, 1);
    if (valuation12 === -2) PrintWrongKeyword(questionIndex);
    var choice12 = GetMultipleAnswerChoice(questionIndex, 11);
    if (choice12 === 1) question.noChoice = false;
    var answer12 = new Answer(choice12, valuation12, 1, 0, '');
    answer12.shortTextAnswer = "Fosfocreatina > desfosforilacion espontanea (reversible x CK) >creatina + ATP para actividad de musculo > ciclación espontanea >creatinina se va por orina";
    answer12.shortTextRemark = "";
    question.answers.push(answer12);
    var valuation13 = DecodeNumber('rIuNmHZ4ApY=', 480, -1, 1);
    if (valuation13 === -2) PrintWrongKeyword(questionIndex);
    var choice13 = GetMultipleAnswerChoice(questionIndex, 12);
    if (choice13 === 1) question.noChoice = false;
    var answer13 = new Answer(choice13, valuation13, 1, 0, '');
    answer13.shortTextAnswer = "En su lugar se puede usar 5 nucleotidasa";
    answer13.shortTextRemark = "";
    question.answers.push(answer13);
    var valuation14 = DecodeNumber('uBJ+L8Kn9wk=', 482, -1, 1);
    if (valuation14 === -2) PrintWrongKeyword(questionIndex);
    var choice14 = GetMultipleAnswerChoice(questionIndex, 13);
    if (choice14 === 1) question.noChoice = false;
    var answer14 = new Answer(choice14, valuation14, 1, 0, '');
    answer14.shortTextAnswer = "No pasa glomérulo  >no esta en orina";
    answer14.shortTextRemark = "";
    question.answers.push(answer14);
    var valuation15 = DecodeNumber('FUH6u3dN6wo=', 484, -1, 1);
    if (valuation15 === -2) PrintWrongKeyword(questionIndex);
    var choice15 = GetMultipleAnswerChoice(questionIndex, 14);
    if (choice15 === 1) question.noChoice = false;
    var answer15 = new Answer(choice15, valuation15, 1, 0, '');
    answer15.shortTextAnswer = "Liposoluble ";
    answer15.shortTextRemark = "";
    question.answers.push(answer15);
    var valuation16 = DecodeNumber('f/vHpOln9Ag=', 486, -1, 1);
    if (valuation16 === -2) PrintWrongKeyword(questionIndex);
    var choice16 = GetMultipleAnswerChoice(questionIndex, 15);
    if (choice16 === 1) question.noChoice = false;
    var answer16 = new Answer(choice16, valuation16, 1, 0, '');
    answer16.shortTextAnswer = "Se elevan muy poco en colestasis";
    answer16.shortTextRemark = "";
    question.answers.push(answer16);
    return question;

}
/* Code generated function */
function InitQuestion8()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 7;
    var weight = DecodeNumber('rCG6Cm9b2BY=', 571, 0, 99999);
    var numOfAnswers = 16;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('rCG6Cm9b2BY=', 571, -1000, 1000),DecodeDecimal('0lYO5wwFjRA=', 571, -1000, 1000),DecodeDecimal('0lYO5wwFjRA=', 571, -1000, 1000));
    question.answers.length = 0;
    question.num = 8;
    question.isSingleAns = false;
    question.shortTextQuestion = "Seleccione lo que corresponda a BI";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('LNpz/JpIEqI=', 573, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "No pasa glomérulo no esta en orina ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('LNpz/JpIEqI=', 575, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Hidrofilica";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('7PQCjigklgc=', 577, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "fotosensible por su doble enlace";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('MgIVUAoE68c=', 579, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Requiere acelerador para reaccionar con diazoreactivo ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('MgIVUAoE68c=', 581, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var choice5 = GetMultipleAnswerChoice(questionIndex, 4);
    if (choice5 === 1) question.noChoice = false;
    var answer5 = new Answer(choice5, valuation5, 1, 0, '');
    answer5.shortTextAnswer = "Pasa glomérulo esta en orina ";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    var valuation6 = DecodeNumber('rCm0aREM3pI=', 583, -1, 1);
    if (valuation6 === -2) PrintWrongKeyword(questionIndex);
    var choice6 = GetMultipleAnswerChoice(questionIndex, 5);
    if (choice6 === 1) question.noChoice = false;
    var answer6 = new Answer(choice6, valuation6, 1, 0, '');
    answer6.shortTextAnswer = "Es verde";
    answer6.shortTextRemark = "";
    question.answers.push(answer6);
    var valuation7 = DecodeNumber('4uF6DKEL9so=', 585, -1, 1);
    if (valuation7 === -2) PrintWrongKeyword(questionIndex);
    var choice7 = GetMultipleAnswerChoice(questionIndex, 6);
    if (choice7 === 1) question.noChoice = false;
    var answer7 = new Answer(choice7, valuation7, 1, 0, '');
    answer7.shortTextAnswer = "unido a Ac glucuronico ";
    answer7.shortTextRemark = "";
    question.answers.push(answer7);
    var valuation8 = DecodeNumber('zYM/0XCINPY=', 587, -1, 1);
    if (valuation8 === -2) PrintWrongKeyword(questionIndex);
    var choice8 = GetMultipleAnswerChoice(questionIndex, 7);
    if (choice8 === 1) question.noChoice = false;
    var answer8 = new Answer(choice8, valuation8, 1, 0, '');
    answer8.shortTextAnswer = "Es amarilla ";
    answer8.shortTextRemark = "";
    question.answers.push(answer8);
    var valuation9 = DecodeNumber('HYLcMujvMGo=', 589, -1, 1);
    if (valuation9 === -2) PrintWrongKeyword(questionIndex);
    var choice9 = GetMultipleAnswerChoice(questionIndex, 8);
    if (choice9 === 1) question.noChoice = false;
    var answer9 = new Answer(choice9, valuation9, 1, 0, '');
    answer9.shortTextAnswer = "Liposoluble";
    answer9.shortTextRemark = "";
    question.answers.push(answer9);
    var valuation10 = DecodeNumber('wVHIpuJRmkI=', 591, -1, 1);
    if (valuation10 === -2) PrintWrongKeyword(questionIndex);
    var choice10 = GetMultipleAnswerChoice(questionIndex, 9);
    if (choice10 === 1) question.noChoice = false;
    var answer10 = new Answer(choice10, valuation10, 1, 0, '');
    answer10.shortTextAnswer = "Muy toxica a alta cny se deposita en piel mucosa";
    answer10.shortTextRemark = "";
    question.answers.push(answer10);
    var valuation11 = DecodeNumber('C4jnssx28vs=', 593, -1, 1);
    if (valuation11 === -2) PrintWrongKeyword(questionIndex);
    var choice11 = GetMultipleAnswerChoice(questionIndex, 10);
    if (choice11 === 1) question.noChoice = false;
    var answer11 = new Answer(choice11, valuation11, 1, 0, '');
    answer11.shortTextAnswer = "unido a Alb";
    answer11.shortTextRemark = "";
    question.answers.push(answer11);
    var valuation12 = DecodeNumber('C4jnssx28vs=', 595, -1, 1);
    if (valuation12 === -2) PrintWrongKeyword(questionIndex);
    var choice12 = GetMultipleAnswerChoice(questionIndex, 11);
    if (choice12 === 1) question.noChoice = false;
    var answer12 = new Answer(choice12, valuation12, 1, 0, '');
    answer12.shortTextAnswer = "No requiere acelerador para reaccionar con diazoreactivo ";
    answer12.shortTextRemark = "";
    question.answers.push(answer12);
    var valuation13 = DecodeNumber('RYOQHHI+kmc=', 597, -1, 1);
    if (valuation13 === -2) PrintWrongKeyword(questionIndex);
    var choice13 = GetMultipleAnswerChoice(questionIndex, 12);
    if (choice13 === 1) question.noChoice = false;
    var answer13 = new Answer(choice13, valuation13, 1, 0, '');
    answer13.shortTextAnswer = "Hidrófoba";
    answer13.shortTextRemark = "";
    question.answers.push(answer13);
    var valuation14 = DecodeNumber('RYOQHHI+kmc=', 599, -1, 1);
    if (valuation14 === -2) PrintWrongKeyword(questionIndex);
    var choice14 = GetMultipleAnswerChoice(questionIndex, 13);
    if (choice14 === 1) question.noChoice = false;
    var answer14 = new Answer(choice14, valuation14, 1, 0, '');
    answer14.shortTextAnswer = "No es toxica solo a baja cn";
    answer14.shortTextRemark = "";
    question.answers.push(answer14);
    var valuation15 = DecodeNumber('siJEjPmIRYI=', 601, -1, 1);
    if (valuation15 === -2) PrintWrongKeyword(questionIndex);
    var choice15 = GetMultipleAnswerChoice(questionIndex, 14);
    if (choice15 === 1) question.noChoice = false;
    var answer15 = new Answer(choice15, valuation15, 1, 0, '');
    answer15.shortTextAnswer = "No fotosencible";
    answer15.shortTextRemark = "";
    question.answers.push(answer15);
    var valuation16 = DecodeNumber('oWngNwKCUeQ=', 603, -1, 1);
    if (valuation16 === -2) PrintWrongKeyword(questionIndex);
    var choice16 = GetMultipleAnswerChoice(questionIndex, 15);
    if (choice16 === 1) question.noChoice = false;
    var answer16 = new Answer(choice16, valuation16, 1, 0, '');
    answer16.shortTextAnswer = "no liposoluble";
    answer16.shortTextRemark = "";
    question.answers.push(answer16);
    return question;

}
/* Code generated function */
function InitQuestion9()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 8;
    var weight = DecodeNumber('+m+6vsUaEhM=', 689, 0, 99999);
    var numOfAnswers = 16;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('+m+6vsUaEhM=', 689, -1000, 1000),DecodeDecimal('c312XA/Kt7Y=', 689, -1000, 1000),DecodeDecimal('c312XA/Kt7Y=', 689, -1000, 1000));
    question.answers.length = 0;
    question.num = 9;
    question.isSingleAns = false;
    question.shortTextQuestion = "Seleccione lo que corresponda a BD";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('+m+6vsUaEhM=', 691, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Requiere acelerador para reaccionar con diazoreactivo ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('3NYVwS6db7c=', 693, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "No es toxica solo a baja cn";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('oZonqEsiYsw=', 695, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Hidrofilica";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('oZonqEsiYsw=', 697, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "unido a Alb";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('4iBuSsynOp4=', 699, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var choice5 = GetMultipleAnswerChoice(questionIndex, 4);
    if (choice5 === 1) question.noChoice = false;
    var answer5 = new Answer(choice5, valuation5, 1, 0, '');
    answer5.shortTextAnswer = "Liposoluble";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    var valuation6 = DecodeNumber('Yudylv7G3Uk=', 701, -1, 1);
    if (valuation6 === -2) PrintWrongKeyword(questionIndex);
    var choice6 = GetMultipleAnswerChoice(questionIndex, 5);
    if (choice6 === 1) question.noChoice = false;
    var answer6 = new Answer(choice6, valuation6, 1, 0, '');
    answer6.shortTextAnswer = "unido a Ac glucuronico ";
    answer6.shortTextRemark = "";
    question.answers.push(answer6);
    var valuation7 = DecodeNumber('Yudylv7G3Uk=', 703, -1, 1);
    if (valuation7 === -2) PrintWrongKeyword(questionIndex);
    var choice7 = GetMultipleAnswerChoice(questionIndex, 6);
    if (choice7 === 1) question.noChoice = false;
    var answer7 = new Answer(choice7, valuation7, 1, 0, '');
    answer7.shortTextAnswer = "Es amarilla ";
    answer7.shortTextRemark = "";
    question.answers.push(answer7);
    var valuation8 = DecodeNumber('H2C8IMnVVU0=', 705, -1, 1);
    if (valuation8 === -2) PrintWrongKeyword(questionIndex);
    var choice8 = GetMultipleAnswerChoice(questionIndex, 7);
    if (choice8 === 1) question.noChoice = false;
    var answer8 = new Answer(choice8, valuation8, 1, 0, '');
    answer8.shortTextAnswer = "Pasa glomérulo esta en orina ";
    answer8.shortTextRemark = "";
    question.answers.push(answer8);
    var valuation9 = DecodeNumber('lknJNi+QcI0=', 707, -1, 1);
    if (valuation9 === -2) PrintWrongKeyword(questionIndex);
    var choice9 = GetMultipleAnswerChoice(questionIndex, 8);
    if (choice9 === 1) question.noChoice = false;
    var answer9 = new Answer(choice9, valuation9, 1, 0, '');
    answer9.shortTextAnswer = "No requiere acelerador para reaccionar con diazoreactivo ";
    answer9.shortTextRemark = "";
    question.answers.push(answer9);
    var valuation10 = DecodeNumber('W32eFDdMYAY=', 709, -1, 1);
    if (valuation10 === -2) PrintWrongKeyword(questionIndex);
    var choice10 = GetMultipleAnswerChoice(questionIndex, 9);
    if (choice10 === 1) question.noChoice = false;
    var answer10 = new Answer(choice10, valuation10, 1, 0, '');
    answer10.shortTextAnswer = "Es verde";
    answer10.shortTextRemark = "";
    question.answers.push(answer10);
    var valuation11 = DecodeNumber('W32eFDdMYAY=', 711, -1, 1);
    if (valuation11 === -2) PrintWrongKeyword(questionIndex);
    var choice11 = GetMultipleAnswerChoice(questionIndex, 10);
    if (choice11 === 1) question.noChoice = false;
    var answer11 = new Answer(choice11, valuation11, 1, 0, '');
    answer11.shortTextAnswer = "No pasa glomérulo no esta en orina ";
    answer11.shortTextRemark = "";
    question.answers.push(answer11);
    var valuation12 = DecodeNumber('pClWjdQgIsY=', 713, -1, 1);
    if (valuation12 === -2) PrintWrongKeyword(questionIndex);
    var choice12 = GetMultipleAnswerChoice(questionIndex, 11);
    if (choice12 === 1) question.noChoice = false;
    var answer12 = new Answer(choice12, valuation12, 1, 0, '');
    answer12.shortTextAnswer = "No fotosencible";
    answer12.shortTextRemark = "";
    question.answers.push(answer12);
    var valuation13 = DecodeNumber('aGFSCaUfRD4=', 715, -1, 1);
    if (valuation13 === -2) PrintWrongKeyword(questionIndex);
    var choice13 = GetMultipleAnswerChoice(questionIndex, 12);
    if (choice13 === 1) question.noChoice = false;
    var answer13 = new Answer(choice13, valuation13, 1, 0, '');
    answer13.shortTextAnswer = "no liposoluble";
    answer13.shortTextRemark = "";
    question.answers.push(answer13);
    var valuation14 = DecodeNumber('aGFSCaUfRD4=', 717, -1, 1);
    if (valuation14 === -2) PrintWrongKeyword(questionIndex);
    var choice14 = GetMultipleAnswerChoice(questionIndex, 13);
    if (choice14 === 1) question.noChoice = false;
    var answer14 = new Answer(choice14, valuation14, 1, 0, '');
    answer14.shortTextAnswer = "Hidrófoba";
    answer14.shortTextRemark = "";
    question.answers.push(answer14);
    var valuation15 = DecodeNumber('SFJ17i+0s2c=', 719, -1, 1);
    if (valuation15 === -2) PrintWrongKeyword(questionIndex);
    var choice15 = GetMultipleAnswerChoice(questionIndex, 14);
    if (choice15 === 1) question.noChoice = false;
    var answer15 = new Answer(choice15, valuation15, 1, 0, '');
    answer15.shortTextAnswer = "Muy toxica a alta cny se deposita en piel mucosa";
    answer15.shortTextRemark = "";
    question.answers.push(answer15);
    var valuation16 = DecodeNumber('88Z26YiC+gI=', 721, -1, 1);
    if (valuation16 === -2) PrintWrongKeyword(questionIndex);
    var choice16 = GetMultipleAnswerChoice(questionIndex, 15);
    if (choice16 === 1) question.noChoice = false;
    var answer16 = new Answer(choice16, valuation16, 1, 0, '');
    answer16.shortTextAnswer = "fotosensible por su doble enlace";
    answer16.shortTextRemark = "";
    question.answers.push(answer16);
    return question;

}
/* Code generated function */
function InitQuestion10()
{
    const type = QMAKE_MATCHING;
    const questionIndex = 9;
    var weight = DecodeNumber('auuClP7kMps=', 1090, 0, 99999);
    var numOfAnswers = 27;
    var i, j;
    var answer;
    var choice, valuation;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('auuClP7kMps=', 1090, -1000, 1000),DecodeDecimal('j98KAJXZU4Q=', 1090, -1000, 1000),DecodeDecimal('j98KAJXZU4Q=', 1090, -1000, 1000));
    question.num = 10;
    question.answers.length = 0;
    question.shortTextQuestion = "Seleccione la respuesta correcta para  cada concepto ";
    question.noChoice = false;
    for (i = 0; i < orderLeft9.length; i++)
    {
        choice = new Array(2);;
        choice[0] = GetSelectedItemLeft("idDD9", i);
        choice[1] = GetSelextedItemRight("idDD9", i);
        if (choice[1]==='') question.noChoice=true;
        valuation = new Array();
        for (j = 0; j < listLeft9.length; j++)
        {
            if (listLeft9[j] === choice[0])
            {
                valuation.push(listRight9[j]);
            }
        }
        answer = new Answer(choice, valuation, 1, 0, '');
        question.answers.push(answer);
    }
    return question;

}
/* Code generated function */
function InitQuestion11()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 10;
    var weight = DecodeNumber('wyV56qEV2o4=', 654, 0, 99999);
    var numOfAnswers = 9;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('wyV56qEV2o4=', 654, -1000, 1000),DecodeDecimal('KQSx1i47dlk=', 654, -1000, 1000),DecodeDecimal('KQSx1i47dlk=', 654, -1000, 1000));
    question.answers.length = 0;
    question.num = 11;
    question.isSingleAns = false;
    question.shortTextQuestion = "Seleccione los conceptos que corresponden a Alb";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('uCXfH8FQZzA=', 656, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "60% 40%";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('uCXfH8FQZzA=', 658, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Alfa1: Antitripsina (AAT) Antiquimiotripsina (ACT) Alfa-fetoproteína (AFP) Glucoproteína acida (AAG) ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('2JmdPX2+4Ws=', 660, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "fija y transporta moléculas útiles/desecho";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('K1U5m9E0pgc=', 662, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Regula presión oncótica del plasma para que agua no salga de capilares";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('K1U5m9E0pgc=', 664, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var choice5 = GetMultipleAnswerChoice(questionIndex, 4);
    if (choice5 === 1) question.noChoice = false;
    var answer5 = new Answer(choice5, valuation5, 1, 0, '');
    answer5.shortTextAnswer = "Alfa 2: Antiplasmina (AP) Haptoglobina (HA) Macroglobulina  (AMG) ";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    var valuation6 = DecodeNumber('c2Sl8p+0teE=', 666, -1, 1);
    if (valuation6 === -2) PrintWrongKeyword(questionIndex);
    var choice6 = GetMultipleAnswerChoice(questionIndex, 5);
    if (choice6 === 1) question.noChoice = false;
    var answer6 = new Answer(choice6, valuation6, 1, 0, '');
    answer6.shortTextAnswer = "Precursor de PT";
    answer6.shortTextRemark = "";
    question.answers.push(answer6);
    var valuation7 = DecodeNumber('c2Sl8p+0teE=', 668, -1, 1);
    if (valuation7 === -2) PrintWrongKeyword(questionIndex);
    var choice7 = GetMultipleAnswerChoice(questionIndex, 6);
    if (choice7 === 1) question.noChoice = false;
    var answer7 = new Answer(choice7, valuation7, 1, 0, '');
    answer7.shortTextAnswer = "Gama  GAMDE";
    answer7.shortTextRemark = "";
    question.answers.push(answer7);
    var valuation8 = DecodeNumber('W/39Ko49TwE=', 670, -1, 1);
    if (valuation8 === -2) PrintWrongKeyword(questionIndex);
    var choice8 = GetMultipleAnswerChoice(questionIndex, 7);
    if (choice8 === 1) question.noChoice = false;
    var answer8 = new Answer(choice8, valuation8, 1, 0, '');
    answer8.shortTextAnswer = "Beta 1: Hemopexina TRF";
    answer8.shortTextRemark = "";
    question.answers.push(answer8);
    var valuation9 = DecodeNumber('NXtN3hUC1Pc=', 672, -1, 1);
    if (valuation9 === -2) PrintWrongKeyword(questionIndex);
    var choice9 = GetMultipleAnswerChoice(questionIndex, 8);
    if (choice9 === 1) question.noChoice = false;
    var answer9 = new Answer(choice9, valuation9, 1, 0, '');
    answer9.shortTextAnswer = "Beta 2 Complemento PCR ";
    answer9.shortTextRemark = "";
    question.answers.push(answer9);
    return question;

}
/* Code generated function */
function InitQuestion12()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 11;
    var weight = DecodeNumber('7PQCjigklgc=', 577, 0, 99999);
    var numOfAnswers = 9;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('7PQCjigklgc=', 577, -1000, 1000),DecodeDecimal('N/SxMKqfa3U=', 577, -1000, 1000),DecodeDecimal('N/SxMKqfa3U=', 577, -1000, 1000));
    question.answers.length = 0;
    question.num = 12;
    question.isSingleAns = false;
    question.shortTextQuestion = "Seleccione los conceptos que corresponden a PT ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('MgIVUAoE68c=', 579, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Beta 1:  Hemopexina TRF";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('MgIVUAoE68c=', 581, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Regula presión oncótica del plasma para que agua no salga de capilares";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('4uF6DKEL9so=', 583, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Alfa 2: Antiplasmina (AP) Haptoglobina (HA) Macroglobulina  (AMG";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('IjnYZ2iFpdQ=', 585, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Gama  GAMDE";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('IjnYZ2iFpdQ=', 587, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var choice5 = GetMultipleAnswerChoice(questionIndex, 4);
    if (choice5 === 1) question.noChoice = false;
    var answer5 = new Answer(choice5, valuation5, 1, 0, '');
    answer5.shortTextAnswer = "Precursor de PT";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    var valuation6 = DecodeNumber('HYLcMujvMGo=', 589, -1, 1);
    if (valuation6 === -2) PrintWrongKeyword(questionIndex);
    var choice6 = GetMultipleAnswerChoice(questionIndex, 5);
    if (choice6 === 1) question.noChoice = false;
    var answer6 = new Answer(choice6, valuation6, 1, 0, '');
    answer6.shortTextAnswer = "Beta 2 Complemento PCR ";
    answer6.shortTextRemark = "";
    question.answers.push(answer6);
    var valuation7 = DecodeNumber('HYLcMujvMGo=', 591, -1, 1);
    if (valuation7 === -2) PrintWrongKeyword(questionIndex);
    var choice7 = GetMultipleAnswerChoice(questionIndex, 6);
    if (choice7 === 1) question.noChoice = false;
    var answer7 = new Answer(choice7, valuation7, 1, 0, '');
    answer7.shortTextAnswer = "60% 40%";
    answer7.shortTextRemark = "";
    question.answers.push(answer7);
    var valuation8 = DecodeNumber('C4jnssx28vs=', 593, -1, 1);
    if (valuation8 === -2) PrintWrongKeyword(questionIndex);
    var choice8 = GetMultipleAnswerChoice(questionIndex, 7);
    if (choice8 === 1) question.noChoice = false;
    var answer8 = new Answer(choice8, valuation8, 1, 0, '');
    answer8.shortTextAnswer = "Alfa1: antitripsina (AAT) antiquimiotripsina (ACT)  alfa-fetoproteína (AFP) Glucoproteína acida (AAG)  ";
    answer8.shortTextRemark = "";
    question.answers.push(answer8);
    var valuation9 = DecodeNumber('C4jnssx28vs=', 595, -1, 1);
    if (valuation9 === -2) PrintWrongKeyword(questionIndex);
    var choice9 = GetMultipleAnswerChoice(questionIndex, 8);
    if (choice9 === 1) question.noChoice = false;
    var answer9 = new Answer(choice9, valuation9, 1, 0, '');
    answer9.shortTextAnswer = "fija y transporta moléculas útiles/desecho";
    answer9.shortTextRemark = "";
    question.answers.push(answer9);
    return question;

}
/* Code generated function */
function InitQuestion13()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 12;
    var weight = DecodeNumber('NLCdAjqZHt4=', 618, 0, 99999);
    var numOfAnswers = 6;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('NLCdAjqZHt4=', 618, -1000, 1000),DecodeDecimal('+KF5n8eWMdY=', 618, -1000, 1000),DecodeDecimal('+KF5n8eWMdY=', 618, -1000, 1000));
    question.answers.length = 0;
    question.num = 13;
    question.isSingleAns = false;
    question.shortTextQuestion = "Seleccione lo que corresponda a DM tipo 1";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('NLCdAjqZHt4=', 620, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Resistencia a insulina con  HOMA >1.64   HOMA= (insulina microU/mL x GluC mmol/L)/22.5";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('8sdwMb8pDE8=', 622, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "nivel de insulina bajo ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('8ZUvbv4/FA4=', 624, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Afecta mas a menores de 30, delgados. Hay varios síntomas de DM  y cetonuria (cetoacidosis marcada) ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('8ZUvbv4/FA4=', 626, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "nivel de insulina normal o elevada pero puede bajar con el tiempo  ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('F6NOedrasCM=', 628, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var choice5 = GetMultipleAnswerChoice(questionIndex, 4);
    if (choice5 === 1) question.noChoice = false;
    var answer5 = new Answer(choice5, valuation5, 1, 0, '');
    answer5.shortTextAnswer = "Destrucción de cel Beta por autoinmunidad ez golpes ";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    var valuation6 = DecodeNumber('F6NOedrasCM=', 630, -1, 1);
    if (valuation6 === -2) PrintWrongKeyword(questionIndex);
    var choice6 = GetMultipleAnswerChoice(questionIndex, 5);
    if (choice6 === 1) question.noChoice = false;
    var answer6 = new Answer(choice6, valuation6, 1, 0, '');
    answer6.shortTextAnswer = "elc ";
    answer6.shortTextRemark = "";
    question.answers.push(answer6);
    return question;

}
/* Code generated function */
function InitQuestion14()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 13;
    var weight = DecodeNumber('3Afy8vi/KU0=', 346, 0, 99999);
    var numOfAnswers = 6;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('3Afy8vi/KU0=', 346, -1000, 1000),DecodeDecimal('NFiuoGQ/lRE=', 346, -1000, 1000),DecodeDecimal('NFiuoGQ/lRE=', 346, -1000, 1000));
    question.answers.length = 0;
    question.num = 14;
    question.isSingleAns = false;
    question.shortTextQuestion = "Seleccione lo que corresponda a DM tipo 2";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('3Afy8vi/KU0=', 348, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Destrucción de cel Beta por autoinmunidad ez golpes ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('aLpgbXwxb0E=', 350, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "nivel de insulina normal o elevada pero puede bajar con el tiempo  ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('fFFuEBTJ+Uw=', 352, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Resistencia a insulina con  HOMA >1.64   HOMA= (insulina microU/mL x GluC mmol/L)/22.5";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('qf14H4qRYng=', 354, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "elc ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('qf14H4qRYng=', 356, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var choice5 = GetMultipleAnswerChoice(questionIndex, 4);
    if (choice5 === 1) question.noChoice = false;
    var answer5 = new Answer(choice5, valuation5, 1, 0, '');
    answer5.shortTextAnswer = "nivel de insulina bajo";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    var valuation6 = DecodeNumber('2Yo3pOYoN0M=', 358, -1, 1);
    if (valuation6 === -2) PrintWrongKeyword(questionIndex);
    var choice6 = GetMultipleAnswerChoice(questionIndex, 5);
    if (choice6 === 1) question.noChoice = false;
    var answer6 = new Answer(choice6, valuation6, 1, 0, '');
    answer6.shortTextAnswer = "Afecta mas a menores de 30, delgados. Hay varios síntomas de DM  y cetonuria (cetoacidosis) marcada";
    answer6.shortTextRemark = "";
    question.answers.push(answer6);
    return question;

}
/* Code generated function */
function InitQuestion15()
{
    const type = QMAKE_BOOLEAN;
    const questionIndex = 14;
    var choice, valuation, noChoice = false;;
    var weight = DecodeNumber('dzqOGrVw2T8=', 941, 0, 99999);
    var numOfAnswers = 19;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('dzqOGrVw2T8=', 941, -1000, 1000),DecodeDecimal('y3hRVwBALJ8=', 941, -1000, 1000),DecodeDecimal('y3hRVwBALJ8=', 941, -1000, 1000));
    question.num = 15;
    question.answers.length = 0;
    question.shortTextQuestion = "Conteste verdadero o falso para las siguientes preguntas";
    choice = GetBooleanChoice(questionIndex,0);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 0);
    valuation = DecodeNumber('dzqOGrVw2T8=', 941, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer0 = new Answer(choice, valuation, 1, 0, '');
    answer0.shortTextAnswer = "La disminucion de Na+ es por híper hidratación o Síndrome de secreción inadecuada de ADH  y es aumentado por sis. Renina -angiotensina –Aldosterona";
    question.answers.push(answer0);
    choice = GetBooleanChoice(questionIndex,1);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 1);
    valuation = DecodeNumber('P7ay3kMPVZ0=', 943, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer(choice, valuation, 1, 0, '');
    answer1.shortTextAnswer = "El aumento de Na+ es por deshidratación y es disminuido por Péptido natriurético atrial si no lo hace habrá hipertensión ";
    question.answers.push(answer1);
    choice = GetBooleanChoice(questionIndex,2);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 2);
    valuation = DecodeNumber('UgEULounwVM=', 945, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer(choice, valuation, 1, 0, '');
    answer2.shortTextAnswer = "La reabsorcion renal regulada por PTH es asi: ?Ca^P > ^PTH > ^Ca?P)´";
    question.answers.push(answer2);
    choice = GetBooleanChoice(questionIndex,3);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 3);
    valuation = DecodeNumber('s9zvRS4FwLE=', 947, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer(choice, valuation, 1, 0, '');
    answer3.shortTextAnswer = "La reabsorción intestinal regulada por vitamina D es asi: ?Ca/P >^ vitamina D > ^Ca/P)´";
    question.answers.push(answer3);
    choice = GetBooleanChoice(questionIndex,4);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 4);
    valuation = DecodeNumber('azTVXbABXRM=', 949, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer(choice, valuation, 1, 0, '');
    answer4.shortTextAnswer = "El Mg++ regula PTH: ?Mg> ^PTH)´ ";
    question.answers.push(answer4);
    choice = GetBooleanChoice(questionIndex,5);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 5);
    valuation = DecodeNumber('hYVGO2dxR0o=', 951, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer(choice, valuation, 1, 0, '');
    answer5.shortTextAnswer = "Las enzimas no son organo específicas por eso se acompañan de otras determinaciones";
    question.answers.push(answer5);
    choice = GetBooleanChoice(questionIndex,6);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 6);
    valuation = DecodeNumber('JsPZqS/0E5g=', 953, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer6 = new Answer(choice, valuation, 1, 0, '');
    answer6.shortTextAnswer = "la AE es la cantidad de Ez que cataliza la conversión de un micromol de S por minuto bajo condiciones optimas de cn Ez/S pH, temperatura ,  (si no son optimos  se alterna E3/km y baja AE),  sus unidades son en unidades internacionales por litro (U/I) o katales por litro (K/L)";
    question.answers.push(answer6);
    choice = GetBooleanChoice(questionIndex,7);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 7);
    valuation = DecodeNumber('epnBzit4RHI=', 955, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer7 = new Answer(choice, valuation, 1, 0, '');
    answer7.shortTextAnswer = "Para las determinaciones enzimaticas el reactivo ti a S una cn  10 veces mayor a la Km para llevar toda la reacción  ";
    question.answers.push(answer7);
    choice = GetBooleanChoice(questionIndex,8);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 8);
    valuation = DecodeNumber('Jegr3qi5yQA=', 316, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer8 = new Answer(choice, valuation, 1, 0, '');
    answer8.shortTextAnswer = "Para las determinaciones enzimaticas  se recomnienda no agregar en paredes de tubo ni reactivo recién refrigerado (pre incubación ambiente) para no afectar las primeras lecturas por baja AE ";
    question.answers.push(answer8);
    choice = GetBooleanChoice(questionIndex,9);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 9);
    valuation = DecodeNumber('5EmeKijyf0w=', 318, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer9 = new Answer(choice, valuation, 1, 0, '');
    answer9.shortTextAnswer = "Sanos las enzimas están bajas en suero, tienen aumento fisiologico (recambio de tejido)  o patologíco (daño a  órgano productor)";
    question.answers.push(answer9);
    choice = GetBooleanChoice(questionIndex,10);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 10);
    valuation = DecodeNumber('+VZ64HA5WSc=', 320, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer10 = new Answer(choice, valuation, 1, 0, '');
    answer10.shortTextAnswer = "El EGO se hace para ver el estado renal pues nefropatia altera integridad de nefrona >habrá solidos anormales abundantes (SAA) en orina  si son escaso es x causa fisiológica  (ejercicio fiebre)";
    question.answers.push(answer10);
    choice = GetBooleanChoice(questionIndex,11);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 11);
    valuation = DecodeNumber('uN/b6W0myaU=', 322, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer11 = new Answer(choice, valuation, 1, 0, '');
    answer11.shortTextAnswer = "para EGO se puede usar orina de primera de la mañana o Al azar-chorro medio ( do 1ro urocultivo luego EGO) ";
    question.answers.push(answer11);
    choice = GetBooleanChoice(questionIndex,12);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 12);
    valuation = DecodeNumber('I1ZXNWqJhFc=', 324, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer12 = new Answer(choice, valuation, 1, 0, '');
    answer12.shortTextAnswer = "Rotular en envase no en tapa ";
    question.answers.push(answer12);
    choice = GetBooleanChoice(questionIndex,13);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 13);
    valuation = DecodeNumber('9HLMqepEoNk=', 326, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer13 = new Answer(choice, valuation, 1, 0, '');
    answer13.shortTextAnswer = "El examen fisico de EGO es solo orientativo no es diagnostico ";
    question.answers.push(answer13);
    choice = GetBooleanChoice(questionIndex,14);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 14);
    valuation = DecodeNumber('k3rhnyY5oYE=', 328, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer14 = new Answer(choice, valuation, 1, 0, '');
    answer14.shortTextAnswer = "El examen bioquimico de EGO es semicuantitativo";
    question.answers.push(answer14);
    choice = GetBooleanChoice(questionIndex,15);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 15);
    valuation = DecodeNumber('67+IsfhP2MM=', 330, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer15 = new Answer(choice, valuation, 1, 0, '');
    answer15.shortTextAnswer = "almohadas de tira reactiva ti rojo de metilo/azul de bromotimol/reactivo x det  ";
    question.answers.push(answer15);
    choice = GetBooleanChoice(questionIndex,16);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 16);
    valuation = DecodeNumber('HxPX77fY5cY=', 332, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer16 = new Answer(choice, valuation, 1, 0, '');
    answer16.shortTextAnswer = "Para concervar tira reactiva se recomienda desecante en bolsa, lugar fresco,  tapar inmediatamente ";
    question.answers.push(answer16);
    choice = GetBooleanChoice(questionIndex,17);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 17);
    valuation = DecodeNumber('qOYe/jKcVQ0=', 334, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer17 = new Answer(choice, valuation, 1, 0, '');
    answer17.shortTextAnswer = "Para la tira reactiva no se recomienda exponerla a calor, emanaciones ácidas-alcalis, humedad, tocar almoadas ";
    question.answers.push(answer17);
    choice = GetBooleanChoice(questionIndex,18);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 18);
    valuation = DecodeNumber('RFO+F8rkg94=', 336, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer18 = new Answer(choice, valuation, 1, 0, '');
    answer18.shortTextAnswer = "Formacion de los cilindros es por: deshidratacion  ?flujo de orina /pH ^ prot cationes ? se acumulan com-cell en luz de tubulos";
    question.answers.push(answer18);
    question.noChoice = noChoice;
    return question;

}
/* Code generated function */
function InitQuestion16()
{
    const type = QMAKE_MATCHING;
    const questionIndex = 15;
    var weight = DecodeNumber('+CirpPwfd1k=', 255, 0, 99999);
    var numOfAnswers = 21;
    var i, j;
    var answer;
    var choice, valuation;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('+CirpPwfd1k=', 255, -1000, 1000),DecodeDecimal('H9Ck51iMD/U=', 255, -1000, 1000),DecodeDecimal('H9Ck51iMD/U=', 255, -1000, 1000));
    question.num = 16;
    question.answers.length = 0;
    question.shortTextQuestion = "Ordene cronologicamente los pasos para hacer el EGO ";
    question.noChoice = false;
    for (i = 0; i < orderLeft15.length; i++)
    {
        choice = new Array(2);;
        choice[0] = GetSelectedItemLeft("idDD15", i);
        choice[1] = GetSelextedItemRight("idDD15", i);
        if (choice[1]==='') question.noChoice=true;
        valuation = new Array();
        for (j = 0; j < listLeft15.length; j++)
        {
            if (listLeft15[j] === choice[0])
            {
                valuation.push(listRight15[j]);
            }
        }
        answer = new Answer(choice, valuation, 1, 0, '');
        question.answers.push(answer);
    }
    return question;

}
/* Code generated function */
function InitQuestion17()
{
    const type = QMAKE_MATCHING;
    const questionIndex = 16;
    var weight = DecodeNumber('ocdlM7ThMaY=', 982, 0, 99999);
    var numOfAnswers = 6;
    var i, j;
    var answer;
    var choice, valuation;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ocdlM7ThMaY=', 982, -1000, 1000),DecodeDecimal('5yKJDaBincI=', 982, -1000, 1000),DecodeDecimal('5yKJDaBincI=', 982, -1000, 1000));
    question.num = 17;
    question.answers.length = 0;
    question.shortTextQuestion = "Seleccione la determinacion del  EXAMEN FISICO y su respectivo valor de referencia y patologico";
    question.noChoice = false;
    for (i = 0; i < orderLeft16.length; i++)
    {
        choice = new Array(2);;
        choice[0] = GetSelectedItemLeft("idDD16", i);
        choice[1] = GetSelextedItemRight("idDD16", i);
        if (choice[1]==='') question.noChoice=true;
        valuation = new Array();
        for (j = 0; j < listLeft16.length; j++)
        {
            if (listLeft16[j] === choice[0])
            {
                valuation.push(listRight16[j]);
            }
        }
        answer = new Answer(choice, valuation, 1, 0, '');
        question.answers.push(answer);
    }
    return question;

}
/* Code generated function */
function InitQuestion18()
{
    const type = QMAKE_MATCHING;
    const questionIndex = 17;
    var weight = DecodeNumber('n+GRA9B3OOo=', 546, 0, 99999);
    var numOfAnswers = 10;
    var i, j;
    var answer;
    var choice, valuation;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('n+GRA9B3OOo=', 546, -1000, 1000),DecodeDecimal('CBsSrsasVPI=', 546, -1000, 1000),DecodeDecimal('CBsSrsasVPI=', 546, -1000, 1000));
    question.num = 18;
    question.answers.length = 0;
    question.shortTextQuestion = "El siguiente aparatado es de EXAMEN BIOQUIMICO seleccione la det y su descripcion correcta ";
    question.noChoice = false;
    for (i = 0; i < orderLeft17.length; i++)
    {
        choice = new Array(2);;
        choice[0] = GetSelectedItemLeft("idDD17", i);
        choice[1] = GetSelextedItemRight("idDD17", i);
        if (choice[1]==='') question.noChoice=true;
        valuation = new Array();
        for (j = 0; j < listLeft17.length; j++)
        {
            if (listLeft17[j] === choice[0])
            {
                valuation.push(listRight17[j]);
            }
        }
        answer = new Answer(choice, valuation, 1, 0, '');
        question.answers.push(answer);
    }
    return question;

}
/* Code generated function */
function InitQuestion19()
{
    const type = QMAKE_MATCHING;
    const questionIndex = 18;
    var weight = DecodeNumber('J1NQ6i0xrsg=', 751, 0, 99999);
    var numOfAnswers = 9;
    var i, j;
    var answer;
    var choice, valuation;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('J1NQ6i0xrsg=', 751, -1000, 1000),DecodeDecimal('AWt2GKQD0+0=', 751, -1000, 1000),DecodeDecimal('AWt2GKQD0+0=', 751, -1000, 1000));
    question.num = 19;
    question.answers.length = 0;
    question.shortTextQuestion = "El siguiente aparatado es de EXAMEN DE SEDIMENTO selecicione CELULA y su descripcion correcta ";
    question.noChoice = false;
    for (i = 0; i < orderLeft18.length; i++)
    {
        choice = new Array(2);;
        choice[0] = GetSelectedItemLeft("idDD18", i);
        choice[1] = GetSelextedItemRight("idDD18", i);
        if (choice[1]==='') question.noChoice=true;
        valuation = new Array();
        for (j = 0; j < listLeft18.length; j++)
        {
            if (listLeft18[j] === choice[0])
            {
                valuation.push(listRight18[j]);
            }
        }
        answer = new Answer(choice, valuation, 1, 0, '');
        question.answers.push(answer);
    }
    return question;

}
/* Code generated function */
function InitQuestion20()
{
    const type = QMAKE_MATCHING;
    const questionIndex = 19;
    var weight = DecodeNumber('3Unye1w5jTw=', 956, 0, 99999);
    var numOfAnswers = 9;
    var i, j;
    var answer;
    var choice, valuation;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('3Unye1w5jTw=', 956, -1000, 1000),DecodeDecimal('epnBzit4RHI=', 956, -1000, 1000),DecodeDecimal('epnBzit4RHI=', 956, -1000, 1000));
    question.num = 20;
    question.answers.length = 0;
    question.shortTextQuestion = "Relacione el CILINDRO con su descripcion ";
    question.noChoice = false;
    for (i = 0; i < orderLeft19.length; i++)
    {
        choice = new Array(2);;
        choice[0] = GetSelectedItemLeft("idDD19", i);
        choice[1] = GetSelextedItemRight("idDD19", i);
        if (choice[1]==='') question.noChoice=true;
        valuation = new Array();
        for (j = 0; j < listLeft19.length; j++)
        {
            if (listLeft19[j] === choice[0])
            {
                valuation.push(listRight19[j]);
            }
        }
        answer = new Answer(choice, valuation, 1, 0, '');
        question.answers.push(answer);
    }
    return question;

}
/* Code generated function */
function InitQuestion21()
{
    const type = QMAKE_MATCHING;
    const questionIndex = 20;
    var weight = DecodeNumber('+hj/McvXoOE=', 520, 0, 99999);
    var numOfAnswers = 12;
    var i, j;
    var answer;
    var choice, valuation;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('+hj/McvXoOE=', 520, -1000, 1000),DecodeDecimal('Tc1Z5Tq9Xns=', 520, -1000, 1000),DecodeDecimal('Tc1Z5Tq9Xns=', 520, -1000, 1000));
    question.num = 21;
    question.answers.length = 0;
    question.shortTextQuestion = "Relaciones los CRISTALES de pH ACIDO con su descripcion";
    question.noChoice = false;
    for (i = 0; i < orderLeft20.length; i++)
    {
        choice = new Array(2);;
        choice[0] = GetSelectedItemLeft("idDD20", i);
        choice[1] = GetSelextedItemRight("idDD20", i);
        if (choice[1]==='') question.noChoice=true;
        valuation = new Array();
        for (j = 0; j < listLeft20.length; j++)
        {
            if (listLeft20[j] === choice[0])
            {
                valuation.push(listRight20[j]);
            }
        }
        answer = new Answer(choice, valuation, 1, 0, '');
        question.answers.push(answer);
    }
    return question;

}
/* Code generated function */
function InitQuestion22()
{
    const type = QMAKE_MATCHING;
    const questionIndex = 21;
    var weight = DecodeNumber('N3ue+Pxp8ec=', 1084, 0, 99999);
    var numOfAnswers = 5;
    var i, j;
    var answer;
    var choice, valuation;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('N3ue+Pxp8ec=', 1084, -1000, 1000),DecodeDecimal('Z3qsN9Wv+Zo=', 1084, -1000, 1000),DecodeDecimal('Z3qsN9Wv+Zo=', 1084, -1000, 1000));
    question.num = 22;
    question.answers.length = 0;
    question.shortTextQuestion = "Relaciones los CRISTALES de pH ALCALINO con su descripcion";
    question.noChoice = false;
    for (i = 0; i < orderLeft21.length; i++)
    {
        choice = new Array(2);;
        choice[0] = GetSelectedItemLeft("idDD21", i);
        choice[1] = GetSelextedItemRight("idDD21", i);
        if (choice[1]==='') question.noChoice=true;
        valuation = new Array();
        for (j = 0; j < listLeft21.length; j++)
        {
            if (listLeft21[j] === choice[0])
            {
                valuation.push(listRight21[j]);
            }
        }
        answer = new Answer(choice, valuation, 1, 0, '');
        question.answers.push(answer);
    }
    return question;

}
/* Code generated function */
function InitQuestion23()
{
    const type = QMAKE_MATCHING;
    const questionIndex = 22;
    var weight = DecodeNumber('YSORLe0sMic=', 290, 0, 99999);
    var numOfAnswers = 3;
    var i, j;
    var answer;
    var choice, valuation;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('YSORLe0sMic=', 290, -1000, 1000),DecodeDecimal('Uv7UdPkDTo0=', 290, -1000, 1000),DecodeDecimal('Uv7UdPkDTo0=', 290, -1000, 1000));
    question.num = 23;
    question.answers.length = 0;
    question.shortTextQuestion = "Relacione los ARTEFACTOS  con su descripcion";
    question.noChoice = false;
    for (i = 0; i < orderLeft22.length; i++)
    {
        choice = new Array(2);;
        choice[0] = GetSelectedItemLeft("idDD22", i);
        choice[1] = GetSelextedItemRight("idDD22", i);
        if (choice[1]==='') question.noChoice=true;
        valuation = new Array();
        for (j = 0; j < listLeft22.length; j++)
        {
            if (listLeft22[j] === choice[0])
            {
                valuation.push(listRight22[j]);
            }
        }
        answer = new Answer(choice, valuation, 1, 0, '');
        question.answers.push(answer);
    }
    return question;

}
/* Code generated function */
function InitQuestion24()
{
    const type = QMAKE_MATCHING;
    const questionIndex = 23;
    var weight = DecodeNumber('xQdG16TCQtE=', 1212, 0, 99999);
    var numOfAnswers = 35;
    var i, j;
    var answer;
    var choice, valuation;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('xQdG16TCQtE=', 1212, -1000, 1000),DecodeDecimal('BsRz5rBFVJU=', 1212, -1000, 1000),DecodeDecimal('BsRz5rBFVJU=', 1212, -1000, 1000));
    question.num = 24;
    question.answers.length = 0;
    question.shortTextQuestion = "La siguiente seccion corresponde a SCC relacione el concepto con su definicion. ";
    question.noChoice = false;
    for (i = 0; i < orderLeft23.length; i++)
    {
        choice = new Array(2);;
        choice[0] = GetSelectedItemLeft("idDD23", i);
        choice[1] = GetSelextedItemRight("idDD23", i);
        if (choice[1]==='') question.noChoice=true;
        valuation = new Array();
        for (j = 0; j < listLeft23.length; j++)
        {
            if (listLeft23[j] === choice[0])
            {
                valuation.push(listRight23[j]);
            }
        }
        answer = new Answer(choice, valuation, 1, 0, '');
        question.answers.push(answer);
    }
    return question;

}
/* Code generated function */
function InitQuestion25()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 24;
    var weight = DecodeNumber('H9Ck51iMD/U=', 254, 0, 99999);
    var numOfAnswers = 12;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('H9Ck51iMD/U=', 254, -1000, 1000),DecodeDecimal('yDfiDWqeteM=', 254, -1000, 1000),DecodeDecimal('yDfiDWqeteM=', 254, -1000, 1000));
    question.answers.length = 0;
    question.num = 25;
    question.isSingleAns = false;
    question.shortTextQuestion = "Seleccione  lo que corresponda al aumento de cn ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('w46haIqgGuY=', 256, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "% Erro es positivo";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('w46haIqgGuY=', 258, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Celdas rayada sucia >menor paso de luz  al detector ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('z0PuJLgS3uk=', 260, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Efecto acarreo (ensayo anterior, no quitar exceso de sustancia de la punta d micropipeta";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('z0PuJLgS3uk=', 262, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Menor cantidad de M R Tiempo";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('FCMH49bWTj0=', 264, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var choice5 = GetMultipleAnswerChoice(questionIndex, 4);
    if (choice5 === 1) question.noChoice = false;
    var answer5 = new Answer(choice5, valuation5, 1, 0, '');
    answer5.shortTextAnswer = "% Error es negativo";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    var valuation6 = DecodeNumber('tsAjdBMcrTA=', 266, -1, 1);
    if (valuation6 === -2) PrintWrongKeyword(questionIndex);
    var choice6 = GetMultipleAnswerChoice(questionIndex, 5);
    if (choice6 === 1) question.noChoice = false;
    var answer6 = new Answer(choice6, valuation6, 1, 0, '');
    answer6.shortTextAnswer = "Evaporación de sustancias ";
    answer6.shortTextRemark = "";
    question.answers.push(answer6);
    var valuation7 = DecodeNumber('/J+IW5MwPQk=', 268, -1, 1);
    if (valuation7 === -2) PrintWrongKeyword(questionIndex);
    var choice7 = GetMultipleAnswerChoice(questionIndex, 6);
    if (choice7 === 1) question.noChoice = false;
    var answer7 = new Answer(choice7, valuation7, 1, 0, '');
    answer7.shortTextAnswer = "Mal homogeneizado reactivos no reaccionan totalmente ";
    answer7.shortTextRemark = "";
    question.answers.push(answer7);
    var valuation8 = DecodeNumber('74ACg/psIgA=', 270, -1, 1);
    if (valuation8 === -2) PrintWrongKeyword(questionIndex);
    var choice8 = GetMultipleAnswerChoice(questionIndex, 7);
    if (choice8 === 1) question.noChoice = false;
    var answer8 = new Answer(choice8, valuation8, 1, 0, '');
    answer8.shortTextAnswer = "Fuentes de luz parasita antes del monocromador";
    answer8.shortTextRemark = "";
    question.answers.push(answer8);
    var valuation9 = DecodeNumber('74ACg/psIgA=', 272, -1, 1);
    if (valuation9 === -2) PrintWrongKeyword(questionIndex);
    var choice9 = GetMultipleAnswerChoice(questionIndex, 8);
    if (choice9 === 1) question.noChoice = false;
    var answer9 = new Answer(choice9, valuation9, 1, 0, '');
    answer9.shortTextAnswer = "Burbujas de aire por pipetear mezclar ";
    answer9.shortTextRemark = "";
    question.answers.push(answer9);
    var valuation10 = DecodeNumber('sfes9r90j3k=', 274, -1, 1);
    if (valuation10 === -2) PrintWrongKeyword(questionIndex);
    var choice10 = GetMultipleAnswerChoice(questionIndex, 9);
    if (choice10 === 1) question.noChoice = false;
    var answer10 = new Answer(choice10, valuation10, 1, 0, '');
    answer10.shortTextAnswer = "Mayor cantidad de M Reactivo o tiempo de reacción ";
    answer10.shortTextRemark = "";
    question.answers.push(answer10);
    var valuation11 = DecodeNumber('VweyEIjvmrw=', 635, -1, 1);
    if (valuation11 === -2) PrintWrongKeyword(questionIndex);
    var choice11 = GetMultipleAnswerChoice(questionIndex, 10);
    if (choice11 === 1) question.noChoice = false;
    var answer11 = new Answer(choice11, valuation11, 1, 0, '');
    answer11.shortTextAnswer = "Efecto menisco: aumenta A pq hay refracción de la luz del ef ";
    answer11.shortTextRemark = "";
    question.answers.push(answer11);
    var valuation12 = DecodeNumber('VweyEIjvmrw=', 637, -1, 1);
    if (valuation12 === -2) PrintWrongKeyword(questionIndex);
    var choice12 = GetMultipleAnswerChoice(questionIndex, 11);
    if (choice12 === 1) question.noChoice = false;
    var answer12 = new Answer(choice12, valuation12, 1, 0, '');
    answer12.shortTextAnswer = "Mucho diluyente ";
    answer12.shortTextRemark = "";
    question.answers.push(answer12);
    return question;

}
/* Code generated function */
function InitQuestion26()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 25;
    var weight = DecodeNumber('3U/44YZ+G9A=', 1177, 0, 99999);
    var numOfAnswers = 12;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('3U/44YZ+G9A=', 1177, -1000, 1000),DecodeDecimal('Z6LnbutuqRk=', 1177, -1000, 1000),DecodeDecimal('Z6LnbutuqRk=', 1177, -1000, 1000));
    question.answers.length = 0;
    question.num = 26;
    question.isSingleAns = false;
    question.shortTextQuestion = "Seleccione  lo que corresponda a disminucion de cn ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('3U/44YZ+G9A=', 1179, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Fuentes de luz parasita antes del monocromador";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('PMl2mvDimEc=', 1181, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Mucho diluyente ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('yPClaJ96G7E=', 1183, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Evaporación de sustancias ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('yPClaJ96G7E=', 1185, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Efecto acarreo (ensayo anterior, no quitar exceso de sustancia de la punta d micropipeta";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('lZ3SdcvUxhY=', 1187, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var choice5 = GetMultipleAnswerChoice(questionIndex, 4);
    if (choice5 === 1) question.noChoice = false;
    var answer5 = new Answer(choice5, valuation5, 1, 0, '');
    answer5.shortTextAnswer = "Efecto menisco: aumenta A pq hay refracción de la luz del ef ";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    var valuation6 = DecodeNumber('ZmVJiK0a34s=', 1189, -1, 1);
    if (valuation6 === -2) PrintWrongKeyword(questionIndex);
    var choice6 = GetMultipleAnswerChoice(questionIndex, 5);
    if (choice6 === 1) question.noChoice = false;
    var answer6 = new Answer(choice6, valuation6, 1, 0, '');
    answer6.shortTextAnswer = "Mal homogeneizado reactivos no reaccionan totalmente ";
    answer6.shortTextRemark = "";
    question.answers.push(answer6);
    var valuation7 = DecodeNumber('eGamapsc2gk=', 1191, -1, 1);
    if (valuation7 === -2) PrintWrongKeyword(questionIndex);
    var choice7 = GetMultipleAnswerChoice(questionIndex, 6);
    if (choice7 === 1) question.noChoice = false;
    var answer7 = new Answer(choice7, valuation7, 1, 0, '');
    answer7.shortTextAnswer = "Celdas rayada sucia >menor paso de luz  al detector ";
    answer7.shortTextRemark = "";
    question.answers.push(answer7);
    var valuation8 = DecodeNumber('cJj6AWg4Tqc=', 1193, -1, 1);
    if (valuation8 === -2) PrintWrongKeyword(questionIndex);
    var choice8 = GetMultipleAnswerChoice(questionIndex, 7);
    if (choice8 === 1) question.noChoice = false;
    var answer8 = new Answer(choice8, valuation8, 1, 0, '');
    answer8.shortTextAnswer = "Menor cantidad de M R T";
    answer8.shortTextRemark = "";
    question.answers.push(answer8);
    var valuation9 = DecodeNumber('cJj6AWg4Tqc=', 1195, -1, 1);
    if (valuation9 === -2) PrintWrongKeyword(questionIndex);
    var choice9 = GetMultipleAnswerChoice(questionIndex, 8);
    if (choice9 === 1) question.noChoice = false;
    var answer9 = new Answer(choice9, valuation9, 1, 0, '');
    answer9.shortTextAnswer = "Mayor cantidad de M Reactivo o tiempo de reacción ";
    answer9.shortTextRemark = "";
    question.answers.push(answer9);
    var valuation10 = DecodeNumber('rd26l92jQgQ=', 1197, -1, 1);
    if (valuation10 === -2) PrintWrongKeyword(questionIndex);
    var choice10 = GetMultipleAnswerChoice(questionIndex, 9);
    if (choice10 === 1) question.noChoice = false;
    var answer10 = new Answer(choice10, valuation10, 1, 0, '');
    answer10.shortTextAnswer = "Burbujas de aire por pipetear mezclar ";
    answer10.shortTextRemark = "";
    question.answers.push(answer10);
    var valuation11 = DecodeNumber('RdRbJKMwjXo=', 1199, -1, 1);
    if (valuation11 === -2) PrintWrongKeyword(questionIndex);
    var choice11 = GetMultipleAnswerChoice(questionIndex, 10);
    if (choice11 === 1) question.noChoice = false;
    var answer11 = new Answer(choice11, valuation11, 1, 0, '');
    answer11.shortTextAnswer = "% Error es negativo";
    answer11.shortTextRemark = "";
    question.answers.push(answer11);
    var valuation12 = DecodeNumber('RdRbJKMwjXo=', 1201, -1, 1);
    if (valuation12 === -2) PrintWrongKeyword(questionIndex);
    var choice12 = GetMultipleAnswerChoice(questionIndex, 11);
    if (choice12 === 1) question.noChoice = false;
    var answer12 = new Answer(choice12, valuation12, 1, 0, '');
    answer12.shortTextAnswer = "% Erro es positivo";
    answer12.shortTextRemark = "";
    question.answers.push(answer12);
    return question;

}
/* Code generated function */
function InitQuestion27()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 26;
    var weight = DecodeNumber('wkQyY7lP5Jg=', 741, 0, 99999);
    var numOfAnswers = 20;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('wkQyY7lP5Jg=', 741, -1000, 1000),DecodeDecimal('3rFMA/sTYac=', 741, -1000, 1000),DecodeDecimal('3rFMA/sTYac=', 741, -1000, 1000));
    question.answers.length = 0;
    question.num = 27;
    question.isSingleAns = false;
    question.shortTextQuestion = "Seleccione lo que corresponde a fase preanalitica ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('wkQyY7lP5Jg=', 743, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Análisis de la m en tiempo y forma ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('IVB/c5Gyt5Q=', 745, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "M insuficiente>  aditivo>  M afecta res  o no se det todo lo que piden";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('IVB/c5Gyt5Q=', 747, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Mal manejo de decimal";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('/nvJNRDcHl0=', 749, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Tomar-recepcion de  M  (cantidad recipiente condiciones especiales)";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('/nvJNRDcHl0=', 751, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var choice5 = GetMultipleAnswerChoice(questionIndex, 4);
    if (choice5 === 1) question.noChoice = false;
    var answer5 = new Answer(choice5, valuation5, 1, 0, '');
    answer5.shortTextAnswer = "Mal uso de equipo";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    var valuation6 = DecodeNumber('J1NQ6i0xrsg=', 753, -1, 1);
    if (valuation6 === -2) PrintWrongKeyword(questionIndex);
    var choice6 = GetMultipleAnswerChoice(questionIndex, 5);
    if (choice6 === 1) question.noChoice = false;
    var answer6 = new Answer(choice6, valuation6, 1, 0, '');
    answer6.shortTextAnswer = "Omitir dil";
    answer6.shortTextRemark = "";
    question.answers.push(answer6);
    var valuation7 = DecodeNumber('91sYz2vS4Go=', 755, -1, 1);
    if (valuation7 === -2) PrintWrongKeyword(questionIndex);
    var choice7 = GetMultipleAnswerChoice(questionIndex, 6);
    if (choice7 === 1) question.noChoice = false;
    var answer7 = new Answer(choice7, valuation7, 1, 0, '');
    answer7.shortTextAnswer = "Solicitud medica con all datos y mas con el dx presuntivo";
    answer7.shortTextRemark = "";
    question.answers.push(answer7);
    var valuation8 = DecodeNumber('b+c6FxButPU=', 757, -1, 1);
    if (valuation8 === -2) PrintWrongKeyword(questionIndex);
    var choice8 = GetMultipleAnswerChoice(questionIndex, 7);
    if (choice8 === 1) question.noChoice = false;
    var answer8 = new Answer(choice8, valuation8, 1, 0, '');
    answer8.shortTextAnswer = "Trasvasar sangre contamina cruzada de aditivos";
    answer8.shortTextRemark = "";
    question.answers.push(answer8);
    var valuation9 = DecodeNumber('b+c6FxButPU=', 759, -1, 1);
    if (valuation9 === -2) PrintWrongKeyword(questionIndex);
    var choice9 = GetMultipleAnswerChoice(questionIndex, 8);
    if (choice9 === 1) question.noChoice = false;
    var answer9 = new Answer(choice9, valuation9, 1, 0, '');
    answer9.shortTextAnswer = "Construir intervalos de referencia ";
    answer9.shortTextRemark = "";
    question.answers.push(answer9);
    var valuation10 = DecodeNumber('1z99y6Ose8A=', 761, -1, 1);
    if (valuation10 === -2) PrintWrongKeyword(questionIndex);
    var choice10 = GetMultipleAnswerChoice(questionIndex, 9);
    if (choice10 === 1) question.noChoice = false;
    var answer10 = new Answer(choice10, valuation10, 1, 0, '');
    answer10.shortTextAnswer = "Preprarar equipo meta ";
    answer10.shortTextRemark = "";
    question.answers.push(answer10);
    var valuation11 = DecodeNumber('6CAmbaIqsjY=', 763, -1, 1);
    if (valuation11 === -2) PrintWrongKeyword(questionIndex);
    var choice11 = GetMultipleAnswerChoice(questionIndex, 10);
    if (choice11 === 1) question.noChoice = false;
    var answer11 = new Answer(choice11, valuation11, 1, 0, '');
    answer11.shortTextAnswer = "Variabilidad del Ao entre frascos de mismo lote ";
    answer11.shortTextRemark = "";
    question.answers.push(answer11);
    var valuation12 = DecodeNumber('cL7YfX8uNB0=', 765, -1, 1);
    if (valuation12 === -2) PrintWrongKeyword(questionIndex);
    var choice12 = GetMultipleAnswerChoice(questionIndex, 11);
    if (choice12 === 1) question.noChoice = false;
    var answer12 = new Answer(choice12, valuation12, 1, 0, '');
    answer12.shortTextAnswer = "Transporte a diff áreas ";
    answer12.shortTextRemark = "";
    question.answers.push(answer12);
    var valuation13 = DecodeNumber('cL7YfX8uNB0=', 767, -1, 1);
    if (valuation13 === -2) PrintWrongKeyword(questionIndex);
    var choice13 = GetMultipleAnswerChoice(questionIndex, 12);
    if (choice13 === 1) question.noChoice = false;
    var answer13 = new Answer(choice13, valuation13, 1, 0, '');
    answer13.shortTextAnswer = "Tardar en procesar >celulas metabolizan unos Ao o liberan otros ";
    answer13.shortTextRemark = "";
    question.answers.push(answer13);
    var valuation14 = DecodeNumber('8kMruitwdaE=', 769, -1, 1);
    if (valuation14 === -2) PrintWrongKeyword(questionIndex);
    var choice14 = GetMultipleAnswerChoice(questionIndex, 13);
    if (choice14 === 1) question.noChoice = false;
    var answer14 = new Answer(choice14, valuation14, 1, 0, '');
    answer14.shortTextAnswer = "Medir Ao con diffs meta";
    answer14.shortTextRemark = "";
    question.answers.push(answer14);
    var valuation15 = DecodeNumber('ZMYhaWpvSG0=', 771, -1, 1);
    if (valuation15 === -2) PrintWrongKeyword(questionIndex);
    var choice15 = GetMultipleAnswerChoice(questionIndex, 14);
    if (choice15 === 1) question.noChoice = false;
    var answer15 = new Answer(choice15, valuation15, 1, 0, '');
    answer15.shortTextAnswer = "70 % de errores >afecta demas  fases> reproceso> mas gasto ";
    answer15.shortTextRemark = "";
    question.answers.push(answer15);
    var valuation16 = DecodeNumber('S9qdSryEXB8=', 773, -1, 1);
    if (valuation16 === -2) PrintWrongKeyword(questionIndex);
    var choice16 = GetMultipleAnswerChoice(questionIndex, 15);
    if (choice16 === 1) question.noChoice = false;
    var answer16 = new Answer(choice16, valuation16, 1, 0, '');
    answer16.shortTextAnswer = "Instrucciones claras (ayuno 8-12 hrs suspender medicamentos/ejercicio)";
    answer16.shortTextRemark = "";
    question.answers.push(answer16);
    var valuation17 = DecodeNumber('S9qdSryEXB8=', 775, -1, 1);
    if (valuation17 === -2) PrintWrongKeyword(questionIndex);
    var choice17 = GetMultipleAnswerChoice(questionIndex, 16);
    if (choice17 === 1) question.noChoice = false;
    var answer17 = new Answer(choice17, valuation17, 1, 0, '');
    answer17.shortTextAnswer = "CCI CCE ";
    answer17.shortTextRemark = "";
    question.answers.push(answer17);
    var valuation18 = DecodeNumber('q7O5f+8wMJk=', 777, -1, 1);
    if (valuation18 === -2) PrintWrongKeyword(questionIndex);
    var choice18 = GetMultipleAnswerChoice(questionIndex, 17);
    if (choice18 === 1) question.noChoice = false;
    var answer18 = new Answer(choice18, valuation18, 1, 0, '');
    answer18.shortTextAnswer = "Entrega de res ";
    answer18.shortTextRemark = "";
    question.answers.push(answer18);
    var valuation19 = DecodeNumber('xMTcq06GlJU=', 779, -1, 1);
    if (valuation19 === -2) PrintWrongKeyword(questionIndex);
    var choice19 = GetMultipleAnswerChoice(questionIndex, 18);
    if (choice19 === 1) question.noChoice = false;
    var answer19 = new Answer(choice19, valuation19, 1, 0, '');
    answer19.shortTextAnswer = "Mala venopuncion ";
    answer19.shortTextRemark = "";
    question.answers.push(answer19);
    var valuation20 = DecodeNumber('HvTsd+VkS2s=', 781, -1, 1);
    if (valuation20 === -2) PrintWrongKeyword(questionIndex);
    var choice20 = GetMultipleAnswerChoice(questionIndex, 19);
    if (choice20 === 1) question.noChoice = false;
    var answer20 = new Answer(choice20, valuation20, 1, 0, '');
    answer20.shortTextAnswer = "No respetar orden de tubos";
    answer20.shortTextRemark = "";
    question.answers.push(answer20);
    return question;

}
/* Code generated function */
function InitQuestion28()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 27;
    var weight = DecodeNumber('L0Wm6tLemzQ=', 305, 0, 99999);
    var numOfAnswers = 20;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('L0Wm6tLemzQ=', 305, -1000, 1000),DecodeDecimal('5Lq/aSAbsbo=', 305, -1000, 1000),DecodeDecimal('5Lq/aSAbsbo=', 305, -1000, 1000));
    question.answers.length = 0;
    question.num = 28;
    question.isSingleAns = false;
    question.shortTextQuestion = "Seleccione lo que corresponde a fase analitica ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('L0Wm6tLemzQ=', 307, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Tomar-recepcion de  M  (cantidad recipiente condiciones especiales)";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('GtSycle62O4=', 309, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "70 % de errores >afecta demas  fases> reproceso> mas gasto ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('KDKrBcqqJT0=', 311, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Mal manejo de decimal";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('5ozKEveVd+w=', 313, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Tardar en procesar >celulas metabolizan unos Ao o liberan otros ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('3k8/Bz5F6fs=', 315, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var choice5 = GetMultipleAnswerChoice(questionIndex, 4);
    if (choice5 === 1) question.noChoice = false;
    var answer5 = new Answer(choice5, valuation5, 1, 0, '');
    answer5.shortTextAnswer = "Análisis de la m en tiempo y forma ";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    var valuation6 = DecodeNumber('3k8/Bz5F6fs=', 317, -1, 1);
    if (valuation6 === -2) PrintWrongKeyword(questionIndex);
    var choice6 = GetMultipleAnswerChoice(questionIndex, 5);
    if (choice6 === 1) question.noChoice = false;
    var answer6 = new Answer(choice6, valuation6, 1, 0, '');
    answer6.shortTextAnswer = "Transporte a diff áreas ";
    answer6.shortTextRemark = "";
    question.answers.push(answer6);
    var valuation7 = DecodeNumber('zTIZmjKVr8s=', 319, -1, 1);
    if (valuation7 === -2) PrintWrongKeyword(questionIndex);
    var choice7 = GetMultipleAnswerChoice(questionIndex, 6);
    if (choice7 === 1) question.noChoice = false;
    var answer7 = new Answer(choice7, valuation7, 1, 0, '');
    answer7.shortTextAnswer = "Construir intervalos de referencia ";
    answer7.shortTextRemark = "";
    question.answers.push(answer7);
    var valuation8 = DecodeNumber('0BqdHejNJRo=', 321, -1, 1);
    if (valuation8 === -2) PrintWrongKeyword(questionIndex);
    var choice8 = GetMultipleAnswerChoice(questionIndex, 7);
    if (choice8 === 1) question.noChoice = false;
    var answer8 = new Answer(choice8, valuation8, 1, 0, '');
    answer8.shortTextAnswer = "Omitir dil";
    answer8.shortTextRemark = "";
    question.answers.push(answer8);
    var valuation9 = DecodeNumber('l1r/zVKWcXk=', 323, -1, 1);
    if (valuation9 === -2) PrintWrongKeyword(questionIndex);
    var choice9 = GetMultipleAnswerChoice(questionIndex, 8);
    if (choice9 === 1) question.noChoice = false;
    var answer9 = new Answer(choice9, valuation9, 1, 0, '');
    answer9.shortTextAnswer = "Instrucciones claras (ayuno 8-12 hrs suspender medicamentos/ejercicio)";
    answer9.shortTextRemark = "";
    question.answers.push(answer9);
    var valuation10 = DecodeNumber('2s+myNFyG1I=', 325, -1, 1);
    if (valuation10 === -2) PrintWrongKeyword(questionIndex);
    var choice10 = GetMultipleAnswerChoice(questionIndex, 9);
    if (choice10 === 1) question.noChoice = false;
    var answer10 = new Answer(choice10, valuation10, 1, 0, '');
    answer10.shortTextAnswer = "Solicitud medica con all datos y mas con el dx presuntivo";
    answer10.shortTextRemark = "";
    question.answers.push(answer10);
    var valuation11 = DecodeNumber('l1w+4htxsYQ=', 327, -1, 1);
    if (valuation11 === -2) PrintWrongKeyword(questionIndex);
    var choice11 = GetMultipleAnswerChoice(questionIndex, 10);
    if (choice11 === 1) question.noChoice = false;
    var answer11 = new Answer(choice11, valuation11, 1, 0, '');
    answer11.shortTextAnswer = "Mal uso de equipo";
    answer11.shortTextRemark = "";
    question.answers.push(answer11);
    var valuation12 = DecodeNumber('snmuOydHKkY=', 329, -1, 1);
    if (valuation12 === -2) PrintWrongKeyword(questionIndex);
    var choice12 = GetMultipleAnswerChoice(questionIndex, 11);
    if (choice12 === 1) question.noChoice = false;
    var answer12 = new Answer(choice12, valuation12, 1, 0, '');
    answer12.shortTextAnswer = "CCI CCE ";
    answer12.shortTextRemark = "";
    question.answers.push(answer12);
    var valuation13 = DecodeNumber('snmuOydHKkY=', 331, -1, 1);
    if (valuation13 === -2) PrintWrongKeyword(questionIndex);
    var choice13 = GetMultipleAnswerChoice(questionIndex, 12);
    if (choice13 === 1) question.noChoice = false;
    var answer13 = new Answer(choice13, valuation13, 1, 0, '');
    answer13.shortTextAnswer = "Entrega de res ";
    answer13.shortTextRemark = "";
    question.answers.push(answer13);
    var valuation14 = DecodeNumber('eLOVnW8OK9c=', 528, -1, 1);
    if (valuation14 === -2) PrintWrongKeyword(questionIndex);
    var choice14 = GetMultipleAnswerChoice(questionIndex, 13);
    if (choice14 === 1) question.noChoice = false;
    var answer14 = new Answer(choice14, valuation14, 1, 0, '');
    answer14.shortTextAnswer = "Variabilidad del Ao entre frascos de mismo lote ";
    answer14.shortTextRemark = "";
    question.answers.push(answer14);
    var valuation15 = DecodeNumber('eLOVnW8OK9c=', 530, -1, 1);
    if (valuation15 === -2) PrintWrongKeyword(questionIndex);
    var choice15 = GetMultipleAnswerChoice(questionIndex, 14);
    if (choice15 === 1) question.noChoice = false;
    var answer15 = new Answer(choice15, valuation15, 1, 0, '');
    answer15.shortTextAnswer = "Trasvasar sangre contamina cruzada de aditivos";
    answer15.shortTextRemark = "";
    question.answers.push(answer15);
    var valuation16 = DecodeNumber('aOZVKTFGBxM=', 532, -1, 1);
    if (valuation16 === -2) PrintWrongKeyword(questionIndex);
    var choice16 = GetMultipleAnswerChoice(questionIndex, 15);
    if (choice16 === 1) question.noChoice = false;
    var answer16 = new Answer(choice16, valuation16, 1, 0, '');
    answer16.shortTextAnswer = "M insuficiente>  aditivo>  M afecta res  o no se det todo lo que piden";
    answer16.shortTextRemark = "";
    question.answers.push(answer16);
    var valuation17 = DecodeNumber('ybAVwtPJKUo=', 534, -1, 1);
    if (valuation17 === -2) PrintWrongKeyword(questionIndex);
    var choice17 = GetMultipleAnswerChoice(questionIndex, 16);
    if (choice17 === 1) question.noChoice = false;
    var answer17 = new Answer(choice17, valuation17, 1, 0, '');
    answer17.shortTextAnswer = "Medir Ao con diffs meta";
    answer17.shortTextRemark = "";
    question.answers.push(answer17);
    var valuation18 = DecodeNumber('ybAVwtPJKUo=', 536, -1, 1);
    if (valuation18 === -2) PrintWrongKeyword(questionIndex);
    var choice18 = GetMultipleAnswerChoice(questionIndex, 17);
    if (choice18 === 1) question.noChoice = false;
    var answer18 = new Answer(choice18, valuation18, 1, 0, '');
    answer18.shortTextAnswer = "Mala venopuncion ";
    answer18.shortTextRemark = "";
    question.answers.push(answer18);
    var valuation19 = DecodeNumber('ZrCaEIjxYUc=', 538, -1, 1);
    if (valuation19 === -2) PrintWrongKeyword(questionIndex);
    var choice19 = GetMultipleAnswerChoice(questionIndex, 18);
    if (choice19 === 1) question.noChoice = false;
    var answer19 = new Answer(choice19, valuation19, 1, 0, '');
    answer19.shortTextAnswer = "Preprarar equipo meta ";
    answer19.shortTextRemark = "";
    question.answers.push(answer19);
    var valuation20 = DecodeNumber('ZrCaEIjxYUc=', 540, -1, 1);
    if (valuation20 === -2) PrintWrongKeyword(questionIndex);
    var choice20 = GetMultipleAnswerChoice(questionIndex, 19);
    if (choice20 === 1) question.noChoice = false;
    var answer20 = new Answer(choice20, valuation20, 1, 0, '');
    answer20.shortTextAnswer = "No respetar orden de tubos";
    answer20.shortTextRemark = "";
    question.answers.push(answer20);
    return question;

}
/* Code generated function */
function InitQuestion29()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 28;
    var weight = DecodeNumber('H2C8IMnVVU0=', 705, 0, 99999);
    var numOfAnswers = 20;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('H2C8IMnVVU0=', 705, -1000, 1000),DecodeDecimal('gEukwRlUMJo=', 705, -1000, 1000),DecodeDecimal('gEukwRlUMJo=', 705, -1000, 1000));
    question.answers.length = 0;
    question.num = 29;
    question.isSingleAns = false;
    question.shortTextQuestion = "Seleccione lo que corresponde a fase post analitica ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('H2C8IMnVVU0=', 707, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Mala venopuncion ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('lknJNi+QcI0=', 709, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Mal uso de equipo";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('i+ZNmm/k7d0=', 711, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Omitir dil";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('i+ZNmm/k7d0=', 713, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Medir Ao con diffs meta";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('pClWjdQgIsY=', 715, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var choice5 = GetMultipleAnswerChoice(questionIndex, 4);
    if (choice5 === 1) question.noChoice = false;
    var answer5 = new Answer(choice5, valuation5, 1, 0, '');
    answer5.shortTextAnswer = "Análisis de la m en tiempo y forma ";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    var valuation6 = DecodeNumber('SFJ17i+0s2c=', 717, -1, 1);
    if (valuation6 === -2) PrintWrongKeyword(questionIndex);
    var choice6 = GetMultipleAnswerChoice(questionIndex, 5);
    if (choice6 === 1) question.noChoice = false;
    var answer6 = new Answer(choice6, valuation6, 1, 0, '');
    answer6.shortTextAnswer = "Mal manejo de decimal";
    answer6.shortTextRemark = "";
    question.answers.push(answer6);
    var valuation7 = DecodeNumber('SFJ17i+0s2c=', 719, -1, 1);
    if (valuation7 === -2) PrintWrongKeyword(questionIndex);
    var choice7 = GetMultipleAnswerChoice(questionIndex, 6);
    if (choice7 === 1) question.noChoice = false;
    var answer7 = new Answer(choice7, valuation7, 1, 0, '');
    answer7.shortTextAnswer = "Tomar-recepcion de  M  (cantidad recipiente condiciones especiales)";
    answer7.shortTextRemark = "";
    question.answers.push(answer7);
    var valuation8 = DecodeNumber('88Z26YiC+gI=', 721, -1, 1);
    if (valuation8 === -2) PrintWrongKeyword(questionIndex);
    var choice8 = GetMultipleAnswerChoice(questionIndex, 7);
    if (choice8 === 1) question.noChoice = false;
    var answer8 = new Answer(choice8, valuation8, 1, 0, '');
    answer8.shortTextAnswer = "70 % de errores >afecta demas  fases> reproceso> mas gasto ";
    answer8.shortTextRemark = "";
    question.answers.push(answer8);
    var valuation9 = DecodeNumber('dIsKe3+MiqY=', 723, -1, 1);
    if (valuation9 === -2) PrintWrongKeyword(questionIndex);
    var choice9 = GetMultipleAnswerChoice(questionIndex, 8);
    if (choice9 === 1) question.noChoice = false;
    var answer9 = new Answer(choice9, valuation9, 1, 0, '');
    answer9.shortTextAnswer = "Variabilidad del Ao entre frascos de mismo lote ";
    answer9.shortTextRemark = "";
    question.answers.push(answer9);
    var valuation10 = DecodeNumber('kGmzyG+bX0s=', 725, -1, 1);
    if (valuation10 === -2) PrintWrongKeyword(questionIndex);
    var choice10 = GetMultipleAnswerChoice(questionIndex, 9);
    if (choice10 === 1) question.noChoice = false;
    var answer10 = new Answer(choice10, valuation10, 1, 0, '');
    answer10.shortTextAnswer = "Solicitud medica con all datos y mas con el dx presuntivo";
    answer10.shortTextRemark = "";
    question.answers.push(answer10);
    var valuation11 = DecodeNumber('T44eSInx4KM=', 727, -1, 1);
    if (valuation11 === -2) PrintWrongKeyword(questionIndex);
    var choice11 = GetMultipleAnswerChoice(questionIndex, 10);
    if (choice11 === 1) question.noChoice = false;
    var answer11 = new Answer(choice11, valuation11, 1, 0, '');
    answer11.shortTextAnswer = "M insuficiente>  aditivo>  M afecta res  o no se det todo lo que piden";
    answer11.shortTextRemark = "";
    question.answers.push(answer11);
    var valuation12 = DecodeNumber('2zUxapOimP8=', 1088, -1, 1);
    if (valuation12 === -2) PrintWrongKeyword(questionIndex);
    var choice12 = GetMultipleAnswerChoice(questionIndex, 11);
    if (choice12 === 1) question.noChoice = false;
    var answer12 = new Answer(choice12, valuation12, 1, 0, '');
    answer12.shortTextAnswer = "Transporte a diff áreas ";
    answer12.shortTextRemark = "";
    question.answers.push(answer12);
    var valuation13 = DecodeNumber('OEdjRSgsVDI=', 1090, -1, 1);
    if (valuation13 === -2) PrintWrongKeyword(questionIndex);
    var choice13 = GetMultipleAnswerChoice(questionIndex, 12);
    if (choice13 === 1) question.noChoice = false;
    var answer13 = new Answer(choice13, valuation13, 1, 0, '');
    answer13.shortTextAnswer = "Preprarar equipo meta ";
    answer13.shortTextRemark = "";
    question.answers.push(answer13);
    var valuation14 = DecodeNumber('Y7SHwSeURT4=', 1092, -1, 1);
    if (valuation14 === -2) PrintWrongKeyword(questionIndex);
    var choice14 = GetMultipleAnswerChoice(questionIndex, 13);
    if (choice14 === 1) question.noChoice = false;
    var answer14 = new Answer(choice14, valuation14, 1, 0, '');
    answer14.shortTextAnswer = "Entrega de res ";
    answer14.shortTextRemark = "";
    question.answers.push(answer14);
    var valuation15 = DecodeNumber('Y7SHwSeURT4=', 1094, -1, 1);
    if (valuation15 === -2) PrintWrongKeyword(questionIndex);
    var choice15 = GetMultipleAnswerChoice(questionIndex, 14);
    if (choice15 === 1) question.noChoice = false;
    var answer15 = new Answer(choice15, valuation15, 1, 0, '');
    answer15.shortTextAnswer = "Instrucciones claras (ayuno 8-12 hrs suspender medicamentos/ejercicio)";
    answer15.shortTextRemark = "";
    question.answers.push(answer15);
    var valuation16 = DecodeNumber('+Xzxw2ygugg=', 1096, -1, 1);
    if (valuation16 === -2) PrintWrongKeyword(questionIndex);
    var choice16 = GetMultipleAnswerChoice(questionIndex, 15);
    if (choice16 === 1) question.noChoice = false;
    var answer16 = new Answer(choice16, valuation16, 1, 0, '');
    answer16.shortTextAnswer = "Tardar en procesar >celulas metabolizan unos Ao o liberan otros ";
    answer16.shortTextRemark = "";
    question.answers.push(answer16);
    var valuation17 = DecodeNumber('NtZu7qLQazk=', 1098, -1, 1);
    if (valuation17 === -2) PrintWrongKeyword(questionIndex);
    var choice17 = GetMultipleAnswerChoice(questionIndex, 16);
    if (choice17 === 1) question.noChoice = false;
    var answer17 = new Answer(choice17, valuation17, 1, 0, '');
    answer17.shortTextAnswer = "No respetar orden de tubos";
    answer17.shortTextRemark = "";
    question.answers.push(answer17);
    var valuation18 = DecodeNumber('b0RDHnoioyU=', 1100, -1, 1);
    if (valuation18 === -2) PrintWrongKeyword(questionIndex);
    var choice18 = GetMultipleAnswerChoice(questionIndex, 17);
    if (choice18 === 1) question.noChoice = false;
    var answer18 = new Answer(choice18, valuation18, 1, 0, '');
    answer18.shortTextAnswer = "Construir intervalos de referencia ";
    answer18.shortTextRemark = "";
    question.answers.push(answer18);
    var valuation19 = DecodeNumber('b0RDHnoioyU=', 1102, -1, 1);
    if (valuation19 === -2) PrintWrongKeyword(questionIndex);
    var choice19 = GetMultipleAnswerChoice(questionIndex, 18);
    if (choice19 === 1) question.noChoice = false;
    var answer19 = new Answer(choice19, valuation19, 1, 0, '');
    answer19.shortTextAnswer = "CCI CCE ";
    answer19.shortTextRemark = "";
    question.answers.push(answer19);
    var valuation20 = DecodeNumber('X0LAyRiqFFc=', 1104, -1, 1);
    if (valuation20 === -2) PrintWrongKeyword(questionIndex);
    var choice20 = GetMultipleAnswerChoice(questionIndex, 19);
    if (choice20 === 1) question.noChoice = false;
    var answer20 = new Answer(choice20, valuation20, 1, 0, '');
    answer20.shortTextAnswer = "Trasvasar sangre contamina cruzada de aditivos";
    answer20.shortTextRemark = "";
    question.answers.push(answer20);
    return question;

}
/* Code generated function */
function InitQuestion30()
{
    const type = QMAKE_BOOLEAN;
    const questionIndex = 29;
    var choice, valuation, noChoice = false;;
    var weight = DecodeNumber('rXCtMn0siw8=', 464, 0, 99999);
    var numOfAnswers = 10;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('rXCtMn0siw8=', 464, -1000, 1000),DecodeDecimal('ywl7sRijVok=', 464, -1000, 1000),DecodeDecimal('ywl7sRijVok=', 464, -1000, 1000));
    question.num = 30;
    question.answers.length = 0;
    question.shortTextQuestion = "RPBI clasiicacion ";
    choice = GetBooleanChoice(questionIndex,0);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 0);
    valuation = DecodeNumber('rXCtMn0siw8=', 464, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer0 = new Answer(choice, valuation, 1, 0, '');
    answer0.shortTextAnswer = "Sangre total y hemoderivados  es liquido se usa recipiente rojo y bolsa roja";
    question.answers.push(answer0);
    choice = GetBooleanChoice(questionIndex,1);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 1);
    valuation = DecodeNumber('9NYSI0PQccs=', 466, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer(choice, valuation, 1, 0, '');
    answer1.shortTextAnswer = "Cultivos, cepas y medios, son solido van en bolsa roja";
    question.answers.push(answer1);
    choice = GetBooleanChoice(questionIndex,2);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 2);
    valuation = DecodeNumber('dejmz2/r+Ps=', 468, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer(choice, valuation, 1, 0, '');
    answer2.shortTextAnswer = "patológico: son órganos- tejidos que no estén en formol no incluye a orina y excremento, son solidos van en bolsa amarilla ";
    question.answers.push(answer2);
    choice = GetBooleanChoice(questionIndex,3);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 3);
    valuation = DecodeNumber('jhrsrR5gsf4=', 470, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer(choice, valuation, 1, 0, '');
    answer3.shortTextAnswer = "Derivados no anatómicos: todos los objetos que hayan estado en contacto o contengan al RPBI (tubos copas de reacción jeringas) las torundas gasas  hisopos vendas deben estar empapadas por completo del rpbi. Son solidos van en bolsa roja";
    question.answers.push(answer3);
    choice = GetBooleanChoice(questionIndex,4);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 4);
    valuation = DecodeNumber('Mu0LDlauh2s=', 472, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer(choice, valuation, 1, 0, '');
    answer4.shortTextAnswer = "Objetos punzocortantes: aguja  tubos con sangre usados no incluye vidrio roto. Son solidos van en bolsa roja";
    question.answers.push(answer4);
    choice = GetBooleanChoice(questionIndex,5);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 5);
    valuation = DecodeNumber('5UdbERrZiOE=', 474, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer(choice, valuation, 1, 0, '');
    answer5.shortTextAnswer = "Basura municipal carton capuchones papel torundas no empapadas, material de vidrio (previamente esterilizado). Son solidos van en bolsa gris o negra";
    question.answers.push(answer5);
    choice = GetBooleanChoice(questionIndex,6);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 6);
    valuation = DecodeNumber('z2VsdpNTcPU=', 476, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer6 = new Answer(choice, valuation, 1, 0, '');
    answer6.shortTextAnswer = "Almacenar menos de 7 días ";
    question.answers.push(answer6);
    choice = GetBooleanChoice(questionIndex,7);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 7);
    valuation = DecodeNumber('rIuNmHZ4ApY=', 478, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer7 = new Answer(choice, valuation, 1, 0, '');
    answer7.shortTextAnswer = "No llenar a más de 80 %";
    question.answers.push(answer7);
    choice = GetBooleanChoice(questionIndex,8);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 8);
    valuation = DecodeNumber('uBJ+L8Kn9wk=', 480, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer8 = new Answer(choice, valuation, 1, 0, '');
    answer8.shortTextAnswer = "No trasvasar bolsas llenas";
    question.answers.push(answer8);
    choice = GetBooleanChoice(questionIndex,9);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 9);
    valuation = DecodeNumber('FUH6u3dN6wo=', 482, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer9 = new Answer(choice, valuation, 1, 0, '');
    answer9.shortTextAnswer = "delimitar área";
    question.answers.push(answer9);
    question.noChoice = noChoice;
    return question;

}
