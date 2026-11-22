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

    var listLeft15;
    var listLeftHtml15;
    var listRight15;
    var orderLeft15;
    var orderRight15;



$(document).ready(function ()
{
	const questionIndex = 15;
	const questionTime = 0;

	PageLoad(questionIndex, questionTime);

	    listLeft15 = new CreateListLeft15();
    listLeftHtml15 = new CreateListLeftHtml15();
    listRight15 = new CreateListRight15();
    orderLeft15 = new ShuffleMatchingOrder(listLeft15.length);
    orderRight15 = new ShuffleMatchingOrder(listRight15.length);
    var hideLeftDropdown = true;
    var textHtml = CreateMatchingLists(listLeft15, listLeftHtml15, listRight15, orderLeft15, orderRight15, "idDD15", textSelect, hideLeftDropdown);
    $('#matching15').html(textHtml);
    var maxLeftSize = GetMaxSizeLeftColumn(listLeft15);
    var maxRightSize = GetMaxSizeRightColumn(listRight15);
    var leftWidth = maxLeftSize * 10;
    var rightWidth = maxRightSize * 10;
    ManageMatchingEvents(listLeft15, "idDD15", leftWidth, rightWidth, options.matchingLockLeftCol);
    SetDefaultLeftColumn(listLeft15, "idDD15", hideLeftDropdown);


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
function ClearQuestion16()
{
    ClearMatching("idDD15", 0);
    ClearMatching("idDD15", 1);
    ClearMatching("idDD15", 2);
    ClearMatching("idDD15", 3);
    ClearMatching("idDD15", 4);
    ClearMatching("idDD15", 5);
    ClearMatching("idDD15", 6);
    ClearMatching("idDD15", 7);
    ClearMatching("idDD15", 8);
    ClearMatching("idDD15", 9);
    ClearMatching("idDD15", 10);
    ClearMatching("idDD15", 11);
    ClearMatching("idDD15", 12);
    ClearMatching("idDD15", 13);
    ClearMatching("idDD15", 14);
    ClearMatching("idDD15", 15);
    ClearMatching("idDD15", 16);
    ClearMatching("idDD15", 17);
    ClearMatching("idDD15", 18);
    ClearMatching("idDD15", 19);
    ClearMatching("idDD15", 20);

}


/* Code generated function */
function CreateListLeft15()
{
    this.length = 21;
    this[0] = 'Match 1';
    this[1] = 'Match 2';
    this[2] = 'Match 3';
    this[3] = 'Match 4';
    this[4] = 'Match 5';
    this[5] = 'Match 6';
    this[6] = 'Match 7';
    this[7] = 'Match 8';
    this[8] = 'Match 9';
    this[9] = 'Match 10';
    this[10] = 'Match 11';
    this[11] = 'Match 12';
    this[12] = 'Match 13';
    this[13] = 'Match 14';
    this[14] = 'Match 15';
    this[15] = 'Match 16';
    this[16] = 'Match 17';
    this[17] = 'Match 18';
    this[18] = 'Match 19';
    this[19] = 'Match 20';
    this[20] = 'Match 21';

}

/* Code generated function */
function CreateListRight15()
{
    this.length = 21;
    this[0] = unescape(DecodeString("OY0Lu9iJgF0="));
    this[1] = unescape(DecodeString("UQ+GwJH3jwA="));
    this[2] = unescape(DecodeString("vwcaWJIV4oQ="));
    this[3] = unescape(DecodeString("92Xyq2t2Gc4="));
    this[4] = unescape(DecodeString("idIVmYrcIHU="));
    this[5] = unescape(DecodeString("yIu6ZxeRmp4="));
    this[6] = unescape(DecodeString("kIPNkNMLgKk="));
    this[7] = unescape(DecodeString("qE9WIKYsuTM="));
    this[8] = unescape(DecodeString("+4YzrzmbQEk="));
    this[9] = unescape(DecodeString("cbXeiTtTnZY="));
    this[10] = unescape(DecodeString("5/dYjDVcvIQ="));
    this[11] = unescape(DecodeString("1sdARDtVhzo="));
    this[12] = unescape(DecodeString("KsMtv9gsH0k="));
    this[13] = unescape(DecodeString("BClq/89rS88="));
    this[14] = unescape(DecodeString("Bef88me4S4Y="));
    this[15] = unescape(DecodeString("M+YTw4KC0PI="));
    this[16] = unescape(DecodeString("WhgbHv5C3vU="));
    this[17] = unescape(DecodeString("89ulBhuXglU="));
    this[18] = unescape(DecodeString("k26BFCxFtXc="));
    this[19] = unescape(DecodeString("116Uc3aNjbg="));
    this[20] = unescape(DecodeString("LxFW03661bI="));

}

/* Code generated function */
function CreateListLeftHtml15()
{
    this.length = 21;
    this[0] = '<span class=\"quiz_answer_class\">procesar <2 horas (o refrigere/acidifique) </span>';
    this[1] = '<span class=\"quiz_answer_class\">foliarTubos 15 x 100 mm </span>';
    this[2] = '<span class=\"quiz_answer_class\">homogeneizar M por inversión</span>';
    this[3] = '<span class=\"quiz_answer_class\">decante hasta 1 cm debajo de boca de tuvo</span>';
    this[4] = '<span class=\"quiz_answer_class\">Examen físico </span>';
    this[5] = '<span class=\"quiz_answer_class\">Examen bioquimico (5)</span>';
    this[6] = '<span class=\"quiz_answer_class\">Sumergir tira completamente hasta burbujeo 2 segundos </span>';
    this[7] = '<span class=\"quiz_answer_class\">sacudir del lado sin almohada tocando boca</span>';
    this[8] = '<span class=\"quiz_answer_class\">espere 1 min-</span>';
    this[9] = '<span class=\"quiz_answer_class\">Compare con carta o U fotómetro</span>';
    this[10] = '<span class=\"quiz_answer_class\">reportar pos en cruces o neg</span>';
    this[11] = '<span class=\"quiz_answer_class\">Microscópico-sedimento (9)</span>';
    this[12] = '<span class=\"quiz_answer_class\">decante a tubo para centrifuga  </span>';
    this[13] = '<span class=\"quiz_answer_class\">1500 rpm 5 min</span>';
    this[14] = '<span class=\"quiz_answer_class\">tomar 1 ml de sobrenadante descartar el resto </span>';
    this[15] = '<span class=\"quiz_answer_class\">re suspender sedimento con el ml anterior</span>';
    this[16] = '<span class=\"quiz_answer_class\">dar golpecitos a base del tubo  para no romper estructuras</span>';
    this[17] = '<span class=\"quiz_answer_class\">este paso es opcional: 2 gotas de colorante supravital Sternheimer Malbin y esperar 2 min </span>';
    this[18] = '<span class=\"quiz_answer_class\">30 µL (1 gota) entre porta y cubre de 22 x 22 </span>';
    this[19] = '<span class=\"quiz_answer_class\">ver 10x ( cilindros) 40x  (demas) de 10 a 15 campos y obtenga el promedio de cada elemento</span>';
    this[20] = '<span class=\"quiz_answer_class\">reporte el tipo de cilindro/10X o µL)  no de GR GL/40x demas elementos use:  ausente (0) escaso (3-8) moderado (9-30) abundanrte (30-80) inontable (>80 empaquetados juntos) cruces 0,1,2,3,4 respectivamente </span>';

}





