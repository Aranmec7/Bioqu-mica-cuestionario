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
	const questionIndex = 27;
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
function ClearQuestion28()
{
    const questionIndex = 27;
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
    ClearMultipleAnswerChoice(questionIndex,16);
    ClearMultipleAnswerChoice(questionIndex,17);
    ClearMultipleAnswerChoice(questionIndex,18);
    ClearMultipleAnswerChoice(questionIndex,19);

}






