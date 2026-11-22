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

    var listLeft20;
    var listLeftHtml20;
    var listRight20;
    var orderLeft20;
    var orderRight20;



$(document).ready(function ()
{
	const questionIndex = 20;
	const questionTime = 0;

	PageLoad(questionIndex, questionTime);

	    listLeft20 = new CreateListLeft20();
    listLeftHtml20 = new CreateListLeftHtml20();
    listRight20 = new CreateListRight20();
    orderLeft20 = new ShuffleMatchingOrder(listLeft20.length);
    orderRight20 = new ShuffleMatchingOrder(listRight20.length);
    var hideLeftDropdown = true;
    var textHtml = CreateMatchingLists(listLeft20, listLeftHtml20, listRight20, orderLeft20, orderRight20, "idDD20", textSelect, hideLeftDropdown);
    $('#matching20').html(textHtml);
    var maxLeftSize = GetMaxSizeLeftColumn(listLeft20);
    var maxRightSize = GetMaxSizeRightColumn(listRight20);
    var leftWidth = maxLeftSize * 10;
    var rightWidth = maxRightSize * 10;
    ManageMatchingEvents(listLeft20, "idDD20", leftWidth, rightWidth, options.matchingLockLeftCol);
    SetDefaultLeftColumn(listLeft20, "idDD20", hideLeftDropdown);


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
function ClearQuestion21()
{
    ClearMatching("idDD20", 0);
    ClearMatching("idDD20", 1);
    ClearMatching("idDD20", 2);
    ClearMatching("idDD20", 3);
    ClearMatching("idDD20", 4);
    ClearMatching("idDD20", 5);
    ClearMatching("idDD20", 6);
    ClearMatching("idDD20", 7);
    ClearMatching("idDD20", 8);
    ClearMatching("idDD20", 9);
    ClearMatching("idDD20", 10);
    ClearMatching("idDD20", 11);

}


/* Code generated function */
function CreateListLeft20()
{
    this.length = 12;
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

}

/* Code generated function */
function CreateListRight20()
{
    this.length = 12;
    this[0] = unescape(DecodeString("I/rrGSs+ciQ="));
    this[1] = unescape(DecodeString("fZCFPBXuSus="));
    this[2] = unescape(DecodeString("O67BRVbojpGcAly36FTHmg=="));
    this[3] = unescape(DecodeString("Ow6TEKYMolY="));
    this[4] = unescape(DecodeString("+znK9Fv3ZZs="));
    this[5] = unescape(DecodeString("l0rJgfu00dEhJVnL"));
    this[6] = unescape(DecodeString("JTfxjVE3g1v8Fbi/"));
    this[7] = unescape(DecodeString("U2k0gPvXQGuuxuBfSxLHRvq39VUCj+vh"));
    this[8] = unescape(DecodeString("UF4hghNAwDnAhNjCQPnIyq55obU160I4QpDYwg=="));
    this[9] = unescape(DecodeString("xJxKoMathDOFTFUXJs2ekdvUPIs="));
    this[10] = unescape(DecodeString("mmVnOCd/LdVAM8+f"));
    this[11] = unescape(DecodeString("ku1tscrSzstZ94fpVU38xw=="));

}

/* Code generated function */
function CreateListLeftHtml20()
{
    this.length = 12;
    this[0] = '<span class=\"quiz_answer_class\">Hexagono apolariza</span>';
    this[1] = '<span class=\"quiz_answer_class\">Diamantes rombo amarillo  Polariza la luz</span>';
    this[2] = '<span class=\"quiz_answer_class\">Prismas amarillo-café o incoloro </span>';
    this[3] = '<span class=\"quiz_answer_class\">Esfera amarillo-café  estrías concéntricas</span>';
    this[4] = '<span class=\"quiz_answer_class\">agujas finas solas o agrupadas </span>';
    this[5] = '<span class=\"quiz_answer_class\">Agujas peq amarillo-cafe </span>';
    this[6] = '<span class=\"quiz_answer_class\">Placa regular - irregular </span>';
    this[7] = '<span class=\"quiz_answer_class\">ajugas gruesas café-incolora solas o agrupadas apatol</span>';
    this[8] = '<span class=\"quiz_answer_class\">agujas alargadas  gris-negra  apatol</span>';
    this[9] = '<span class=\"quiz_answer_class\">Son litogenossobre, rombo con X refringente Formas atípicas: oxalato de calcio monohidratado se ve como pesas de gimnasio</span>';
    this[10] = '<span class=\"quiz_answer_class\">Varilla</span>';
    this[11] = '<span class=\"quiz_answer_class\">Prismas</span>';

}





