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

    var listLeft0;
    var listLeftHtml0;
    var listRight0;
    var orderLeft0;
    var orderRight0;



$(document).ready(function ()
{
	const questionIndex = 0;
	const questionTime = 0;

	PageLoad(questionIndex, questionTime);

	    listLeft0 = new CreateListLeft0();
    listLeftHtml0 = new CreateListLeftHtml0();
    listRight0 = new CreateListRight0();
    orderLeft0 = new ShuffleMatchingOrder(listLeft0.length);
    orderRight0 = new ShuffleMatchingOrder(listRight0.length);
    var hideLeftDropdown = true;
    var textHtml = CreateMatchingLists(listLeft0, listLeftHtml0, listRight0, orderLeft0, orderRight0, "idDD0", textSelect, hideLeftDropdown);
    $('#matching0').html(textHtml);
    var maxLeftSize = GetMaxSizeLeftColumn(listLeft0);
    var maxRightSize = GetMaxSizeRightColumn(listRight0);
    var leftWidth = maxLeftSize * 10;
    var rightWidth = maxRightSize * 10;
    ManageMatchingEvents(listLeft0, "idDD0", leftWidth, rightWidth, options.matchingLockLeftCol);
    SetDefaultLeftColumn(listLeft0, "idDD0", hideLeftDropdown);


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
function ClearQuestion1()
{
    ClearMatching("idDD0", 0);
    ClearMatching("idDD0", 1);
    ClearMatching("idDD0", 2);
    ClearMatching("idDD0", 3);
    ClearMatching("idDD0", 4);
    ClearMatching("idDD0", 5);
    ClearMatching("idDD0", 6);
    ClearMatching("idDD0", 7);
    ClearMatching("idDD0", 8);
    ClearMatching("idDD0", 9);
    ClearMatching("idDD0", 10);
    ClearMatching("idDD0", 11);
    ClearMatching("idDD0", 12);

}


/* Code generated function */
function CreateListLeft0()
{
    this.length = 13;
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

}

/* Code generated function */
function CreateListRight0()
{
    this.length = 13;
    this[0] = unescape(DecodeString("R0C6v5GtdwqLHeZmC8F+u2/sT4aZNNqdsNpu7B/11AMzg/a7YCugdQ=="));
    this[1] = unescape(DecodeString("Lvs077vAjHS4pP/EAJTQPwJ3tuNUG8uwr5L8nzpfkgkfTgux"));
    this[2] = unescape(DecodeString("2fQwjgHmzdC0JP9kk6sbYQ8USpjcmcZhX5fRWA=="));
    this[3] = unescape(DecodeString("m3WQPespxqWvk6SzJyCLhz+4aKE="));
    this[4] = unescape(DecodeString("dljL5teIaMA="));
    this[5] = unescape(DecodeString("y19x4D+mWZrLrZ4rzj8GJRDEEfjgRaMsvnIPiw=="));
    this[6] = unescape(DecodeString("fi3fVTQi7QncAtVvNsBxuxJ40E0Jl0wv"));
    this[7] = unescape(DecodeString("SqGkWEvbDC6+wmrjguLDZQ=="));
    this[8] = unescape(DecodeString("H3Y2h0/iEx7ncojFH6jIp4G8YJc="));
    this[9] = unescape(DecodeString("bREAH9iBluEX6NbmXqyZVdSEtoI="));
    this[10] = unescape(DecodeString("wDJMaOFr3Z4="));
    this[11] = unescape(DecodeString("i+HHXHCs6OBQmSUY7jFQw6TU4x3ErkCt7itrSj7uBVHqP/Ow"));
    this[12] = unescape(DecodeString("b/ATP8bMG176n9Qe2O1zhZO7+52ZHsXAKadEeA=="));

}

/* Code generated function */
function CreateListLeftHtml0()
{
    this.length = 13;
    this[0] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">Urea Crea AU, GluC  TAG CHOL</span></p></span>';
    this[1] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">AST ALT ALk GGT BD BT LDH</span></p></span>';
    this[2] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">Lipasa Amy</span></p></span>';
    this[3] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">Aso RF PCR (CRP) AU BD</span></p></span>';
    this[4] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">LDH GluC Cl-C</span></p></span>';
    this[5] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">CK CKMB LDH Troponinas AST ALT</span></p></span>';
    this[6] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">ACP</span></p></span>';
    this[7] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">Urea  BUN Crea TFG crea Cistatina C  AU uAlb uPro </span></p></span>';
    this[8] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">Alb PT Fe-S FERR TRF TIBC UIBC</span></p></span>';
    this[9] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">TAG CHOL C-LDL C-HDL C-no HDL ApoB/ApoA1</span></p></span>';
    this[10] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">GluC HbA1c PTOG GP HOMA</span></p></span>';
    this[11] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">Na+ Cl- K+</span></p></span>';
    this[12] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">Ca++ P++ Mg++</span></p></span>';

}





