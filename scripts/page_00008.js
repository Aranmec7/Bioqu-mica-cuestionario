//=========================================
// File name: page_NNNNN.js
//-----------------------------------------
// Project : QuizFaber 4.1.9
// Licence : GNU General Public License v3.0
// Author  : Luca Galli
// Email   : info@quizfaber.com
//-----------------------------------------
// Script for NNNNN-th question
//=========================================



$(document).ready(function ()
{
	const questionIndex = 7;
	const questionTime = 0;

	PageLoad(questionIndex, questionTime);

	
});

$(window).on("beforeunload", function ()
{
	PageUnload();
	window.scrollTo(0, 0);
});

$(window).on("scroll", function ()
{
	PageOnScroll();
});


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
function ClearQuestion8()
{
    const questionIndex = 7;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);
    ClearMultipleAnswerChoice(questionIndex,4);
    ClearMultipleAnswerChoice(questionIndex,5);
    ClearMultipleAnswerChoice(questionIndex,6);
    ClearMultipleAnswerChoice(questionIndex,7);
    ClearMultipleAnswerChoice(questionIndex,8);
    ClearMultipleAnswerChoice(questionIndex,9);
    ClearMultipleAnswerChoice(questionIndex,10);
    ClearMultipleAnswerChoice(questionIndex,11);
    ClearMultipleAnswerChoice(questionIndex,12);
    ClearMultipleAnswerChoice(questionIndex,13);
    ClearMultipleAnswerChoice(questionIndex,14);
    ClearMultipleAnswerChoice(questionIndex,15);

}






