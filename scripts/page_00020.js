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

    var listLeft19;
    var listLeftHtml19;
    var listRight19;
    var orderLeft19;
    var orderRight19;



$(document).ready(function ()
{
	const questionIndex = 19;
	const questionTime = 0;

	PageLoad(questionIndex, questionTime);

	    listLeft19 = new CreateListLeft19();
    listLeftHtml19 = new CreateListLeftHtml19();
    listRight19 = new CreateListRight19();
    orderLeft19 = new ShuffleMatchingOrder(listLeft19.length);
    orderRight19 = new ShuffleMatchingOrder(listRight19.length);
    var hideLeftDropdown = true;
    var textHtml = CreateMatchingLists(listLeft19, listLeftHtml19, listRight19, orderLeft19, orderRight19, "idDD19", textSelect, hideLeftDropdown);
    $('#matching19').html(textHtml);
    var maxLeftSize = GetMaxSizeLeftColumn(listLeft19);
    var maxRightSize = GetMaxSizeRightColumn(listRight19);
    var leftWidth = maxLeftSize * 10;
    var rightWidth = maxRightSize * 10;
    ManageMatchingEvents(listLeft19, "idDD19", leftWidth, rightWidth, options.matchingLockLeftCol);
    SetDefaultLeftColumn(listLeft19, "idDD19", hideLeftDropdown);


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
function ClearQuestion20()
{
    ClearMatching("idDD19", 0);
    ClearMatching("idDD19", 1);
    ClearMatching("idDD19", 2);
    ClearMatching("idDD19", 3);
    ClearMatching("idDD19", 4);
    ClearMatching("idDD19", 5);
    ClearMatching("idDD19", 6);
    ClearMatching("idDD19", 7);
    ClearMatching("idDD19", 8);

}


/* Code generated function */
function CreateListLeft19()
{
    this.length = 9;
    this[0] = 'Match 1';
    this[1] = 'Match 2';
    this[2] = 'Match 3';
    this[3] = 'Match 4';
    this[4] = 'Match 5';
    this[5] = 'Match 6';
    this[6] = 'Match 7';
    this[7] = 'Match 8';
    this[8] = 'Match 9';

}

/* Code generated function */
function CreateListRight19()
{
    this.length = 9;
    this[0] = unescape(DecodeString("xZ5FNEshgBY="));
    this[1] = unescape(DecodeString("OnloT41hPI4="));
    this[2] = unescape(DecodeString("TMKNUcSZkBU="));
    this[3] = unescape(DecodeString("SNYNRG8MLsJALKUxxOIQx1O1xbc="));
    this[4] = unescape(DecodeString("BLYh8hHYQdK9NtuZITBRvw=="));
    this[5] = unescape(DecodeString("3rk0UmbIf15FnfPS"));
    this[6] = unescape(DecodeString("KzYlwvKMTNfFYQud"));
    this[7] = unescape(DecodeString("s2kquPmsODfL7ou2"));
    this[8] = unescape(DecodeString("qt8fTTixz/c="));

}

/* Code generated function */
function CreateListLeftHtml19()
{
    this.length = 9;
    this[0] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">Incoloro</span></p></span>';
    this[1] = '<span class=\"quiz_answer_class\">Puntitos amarillo- Café</span>';
    this[2] = '<span class=\"quiz_answer_class\">Intestino tortuoso con uña alrededor (borde) Uno o ambos extremos rectos o uno redondo Son amarillos, grises  incoloros </span>';
    this[3] = '<span class=\"quiz_answer_class\">ordenadas o desordenadas</span>';
    this[4] = '<span class=\"quiz_answer_class\">Puntos cafe o rojos </span>';
    this[5] = '<span class=\"quiz_answer_class\">Si se degrada  MS los GL se verán como gránulos  </span>';
    this[6] = '<span class=\"quiz_answer_class\">Bac en su interior</span>';
    this[7] = '<span class=\"quiz_answer_class\">no se </span>';
    this[8] = '<span class=\"quiz_answer_class\">Puntos amarillo verde Polarizan se tiñen con sudan </span>';

}





