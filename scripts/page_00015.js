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
	const questionIndex = 14;
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
function ClearQuestion15()
{
    const questionIndex = 14;
    ClearBooleanChoice(questionIndex,0);
    ClearBooleanChoice(questionIndex,1);
    ClearBooleanChoice(questionIndex,2);
    ClearBooleanChoice(questionIndex,3);
    ClearBooleanChoice(questionIndex,4);
    ClearBooleanChoice(questionIndex,5);
    ClearBooleanChoice(questionIndex,6);
    ClearBooleanChoice(questionIndex,7);
    ClearBooleanChoice(questionIndex,8);
    ClearBooleanChoice(questionIndex,9);
    ClearBooleanChoice(questionIndex,10);
    ClearBooleanChoice(questionIndex,11);
    ClearBooleanChoice(questionIndex,12);
    ClearBooleanChoice(questionIndex,13);
    ClearBooleanChoice(questionIndex,14);
    ClearBooleanChoice(questionIndex,15);
    ClearBooleanChoice(questionIndex,16);
    ClearBooleanChoice(questionIndex,17);
    ClearBooleanChoice(questionIndex,18);

}






