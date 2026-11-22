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

    var listLeft22;
    var listLeftHtml22;
    var listRight22;
    var orderLeft22;
    var orderRight22;



$(document).ready(function ()
{
	const questionIndex = 22;
	const questionTime = 0;

	PageLoad(questionIndex, questionTime);

	    listLeft22 = new CreateListLeft22();
    listLeftHtml22 = new CreateListLeftHtml22();
    listRight22 = new CreateListRight22();
    orderLeft22 = new ShuffleMatchingOrder(listLeft22.length);
    orderRight22 = new ShuffleMatchingOrder(listRight22.length);
    var hideLeftDropdown = true;
    var textHtml = CreateMatchingLists(listLeft22, listLeftHtml22, listRight22, orderLeft22, orderRight22, "idDD22", textSelect, hideLeftDropdown);
    $('#matching22').html(textHtml);
    var maxLeftSize = GetMaxSizeLeftColumn(listLeft22);
    var maxRightSize = GetMaxSizeRightColumn(listRight22);
    var leftWidth = maxLeftSize * 10;
    var rightWidth = maxRightSize * 10;
    ManageMatchingEvents(listLeft22, "idDD22", leftWidth, rightWidth, options.matchingLockLeftCol);
    SetDefaultLeftColumn(listLeft22, "idDD22", hideLeftDropdown);


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
function ClearQuestion23()
{
    ClearMatching("idDD22", 0);
    ClearMatching("idDD22", 1);
    ClearMatching("idDD22", 2);

}


/* Code generated function */
function CreateListLeft22()
{
    this.length = 3;
    this[0] = 'Match 1';
    this[1] = 'Match 2';
    this[2] = 'Match 3';

}

/* Code generated function */
function CreateListRight22()
{
    this.length = 3;
    this[0] = unescape(DecodeString("V79q9gAEdUdfH6jogV1WXXXie+qxbICvDwZNiVbDVSQi8zDH9V3qLQ=="));
    this[1] = unescape(DecodeString("Cj1nZtdf/Gg="));
    this[2] = unescape(DecodeString("iPdhyud4Fg/gmhZVhHmb/aNpqa1q+k65eNE08w=="));

}

/* Code generated function */
function CreateListLeftHtml22()
{
    this.length = 3;
    this[0] = '<span class=\"quiz_answer_class\">Hexagono con T en medio </span>';
    this[1] = '<span class=\"quiz_answer_class\">contaminación de kk pañal ropa. Diferenciar de cilindro hialino y céreo quienes ti borde fino centro grueso y apolarizan </span>';
    this[2] = '<span class=\"quiz_answer_class\">Alargados/delgados  Borde regular  Tranparentes Pueden tener estriación longitudinal   Indican inflamación </span>';

}





