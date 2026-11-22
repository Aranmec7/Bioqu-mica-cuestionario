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

    var listLeft21;
    var listLeftHtml21;
    var listRight21;
    var orderLeft21;
    var orderRight21;



$(document).ready(function ()
{
	const questionIndex = 21;
	const questionTime = 0;

	PageLoad(questionIndex, questionTime);

	    listLeft21 = new CreateListLeft21();
    listLeftHtml21 = new CreateListLeftHtml21();
    listRight21 = new CreateListRight21();
    orderLeft21 = new ShuffleMatchingOrder(listLeft21.length);
    orderRight21 = new ShuffleMatchingOrder(listRight21.length);
    var hideLeftDropdown = true;
    var textHtml = CreateMatchingLists(listLeft21, listLeftHtml21, listRight21, orderLeft21, orderRight21, "idDD21", textSelect, hideLeftDropdown);
    $('#matching21').html(textHtml);
    var maxLeftSize = GetMaxSizeLeftColumn(listLeft21);
    var maxRightSize = GetMaxSizeRightColumn(listRight21);
    var leftWidth = maxLeftSize * 10;
    var rightWidth = maxRightSize * 10;
    ManageMatchingEvents(listLeft21, "idDD21", leftWidth, rightWidth, options.matchingLockLeftCol);
    SetDefaultLeftColumn(listLeft21, "idDD21", hideLeftDropdown);


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
function ClearQuestion22()
{
    ClearMatching("idDD21", 0);
    ClearMatching("idDD21", 1);
    ClearMatching("idDD21", 2);
    ClearMatching("idDD21", 3);
    ClearMatching("idDD21", 4);

}


/* Code generated function */
function CreateListLeft21()
{
    this.length = 5;
    this[0] = 'Match 1';
    this[1] = 'Match 2';
    this[2] = 'Match 3';
    this[3] = 'Match 4';
    this[4] = 'Match 5';

}

/* Code generated function */
function CreateListRight21()
{
    this.length = 5;
    this[0] = unescape(DecodeString("BmmnCLR6UB6+mn0R4f2Tt1uyk68="));
    this[1] = unescape(DecodeString("bRoxh1q5TQ36xQV4TzB7SP4MdLc="));
    this[2] = unescape(DecodeString("0LV6kh3D5Qb4kk+IDZb7kx5oY3Ubg51yzPE9s4TSKWsN58R+97fVWY3YOQU="));
    this[3] = unescape(DecodeString("pl/J6GCRzxKENy3A2reVnPsX6Qk="));
    this[4] = unescape(DecodeString("v+euRbgQ/kJcbLu5aPVvsKErhMjkUXSF"));

}

/* Code generated function */
function CreateListLeftHtml21()
{
    this.length = 5;
    this[0] = '<span class=\"quiz_answer_class\">esfera iregular espícula larga Amarillo-castaño apatol en orina vieja</span>';
    this[1] = '<span class=\"quiz_answer_class\">Prisma un extremo  recto y otro puntiagudo  </span>';
    this[2] = '<span class=\"quiz_answer_class\">ataúd </span>';
    this[3] = '<span class=\"quiz_answer_class\">Gránulos amarillo-negro aislados o en cumulo grande </span>';
    this[4] = '<span class=\"quiz_answer_class\">Agregados cafes </span>';

}





