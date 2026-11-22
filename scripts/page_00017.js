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

    var listLeft16;
    var listLeftHtml16;
    var listRight16;
    var orderLeft16;
    var orderRight16;



$(document).ready(function ()
{
	const questionIndex = 16;
	const questionTime = 0;

	PageLoad(questionIndex, questionTime);

	    listLeft16 = new CreateListLeft16();
    listLeftHtml16 = new CreateListLeftHtml16();
    listRight16 = new CreateListRight16();
    orderLeft16 = new ShuffleMatchingOrder(listLeft16.length);
    orderRight16 = new ShuffleMatchingOrder(listRight16.length);
    var hideLeftDropdown = true;
    var textHtml = CreateMatchingLists(listLeft16, listLeftHtml16, listRight16, orderLeft16, orderRight16, "idDD16", textSelect, hideLeftDropdown);
    $('#matching16').html(textHtml);
    var maxLeftSize = GetMaxSizeLeftColumn(listLeft16);
    var maxRightSize = GetMaxSizeRightColumn(listRight16);
    var leftWidth = maxLeftSize * 10;
    var rightWidth = maxRightSize * 10;
    ManageMatchingEvents(listLeft16, "idDD16", leftWidth, rightWidth, options.matchingLockLeftCol);
    SetDefaultLeftColumn(listLeft16, "idDD16", hideLeftDropdown);


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
function ClearQuestion17()
{
    ClearMatching("idDD16", 0);
    ClearMatching("idDD16", 1);
    ClearMatching("idDD16", 2);
    ClearMatching("idDD16", 3);
    ClearMatching("idDD16", 4);
    ClearMatching("idDD16", 5);

}


/* Code generated function */
function CreateListLeft16()
{
    this.length = 6;
    this[0] = 'Match 1';
    this[1] = 'Match 2';
    this[2] = 'Match 3';
    this[3] = 'Match 4';
    this[4] = 'Match 5';
    this[5] = 'Match 6';

}

/* Code generated function */
function CreateListRight16()
{
    this.length = 6;
    this[0] = unescape(DecodeString("xjuVKGQDzGrj3RQz4jbnnfKG8UA="));
    this[1] = unescape(DecodeString("WxJqOG7yw1o="));
    this[2] = unescape(DecodeString("rvNrefFGo+S4E7C8viVwY5+QKHkBwY4bsN9GMs7r9I8="));
    this[3] = unescape(DecodeString("EYjUp7mMcvs="));
    this[4] = unescape(DecodeString("ubCnsfDWKeF183lG"));
    this[5] = unescape(DecodeString("rHi2HTj8Ue0="));

}

/* Code generated function */
function CreateListLeftHtml16()
{
    this.length = 6;
    this[0] = '<span class=\"quiz_answer_class\">ref: Ambar  patol: lechosa (GL lip) naranja (BT) roja (GR</span>';
    this[1] = '<span class=\"quiz_answer_class\">ref: sui generis pq urea >bac biota >amoniaco Patologico: amoniaco fuerte (bac patog) dulce (cetonuria </span>';
    this[2] = '<span class=\"quiz_answer_class\">ref: Cristalina Turbio patológico por  SAA como:  cualquier elemento de exam microscópico, o BQ (prot lip) linfa</span>';
    this[3] = '<span class=\"quiz_answer_class\">1.01-1.03 g/mL  Patologico:? híper hidratación o cálculos que retienen iones urinarios ^ deshidratación,  SAA</span>';
    this[4] = '<span class=\"quiz_answer_class\">800 -1,500 mL  Patologico: ? cálculos deshidratación SAA ^ DM</span>';
    this[5] = '<span class=\"quiz_answer_class\"> 5-7 Patologico: ?acidocis cetonuria ^ amoniaco CO2  de bac patógenas </span>';

}





