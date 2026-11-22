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

    var listLeft17;
    var listLeftHtml17;
    var listRight17;
    var orderLeft17;
    var orderRight17;



$(document).ready(function ()
{
	const questionIndex = 17;
	const questionTime = 0;

	PageLoad(questionIndex, questionTime);

	    listLeft17 = new CreateListLeft17();
    listLeftHtml17 = new CreateListLeftHtml17();
    listRight17 = new CreateListRight17();
    orderLeft17 = new ShuffleMatchingOrder(listLeft17.length);
    orderRight17 = new ShuffleMatchingOrder(listRight17.length);
    var hideLeftDropdown = true;
    var textHtml = CreateMatchingLists(listLeft17, listLeftHtml17, listRight17, orderLeft17, orderRight17, "idDD17", textSelect, hideLeftDropdown);
    $('#matching17').html(textHtml);
    var maxLeftSize = GetMaxSizeLeftColumn(listLeft17);
    var maxRightSize = GetMaxSizeRightColumn(listRight17);
    var leftWidth = maxLeftSize * 10;
    var rightWidth = maxRightSize * 10;
    ManageMatchingEvents(listLeft17, "idDD17", leftWidth, rightWidth, options.matchingLockLeftCol);
    SetDefaultLeftColumn(listLeft17, "idDD17", hideLeftDropdown);


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
function InitQuestion18()
{
    const type = QMAKE_MATCHING;
    const questionIndex = 17;
    var weight = DecodeNumber('n+GRA9B3OOo=', 546, 0, 99999);
    var numOfAnswers = 10;
    var i, j;
    var answer;
    var choice, valuation;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('n+GRA9B3OOo=', 546, -1000, 1000),DecodeDecimal('CBsSrsasVPI=', 546, -1000, 1000),DecodeDecimal('CBsSrsasVPI=', 546, -1000, 1000));
    question.num = 18;
    question.answers.length = 0;
    question.shortTextQuestion = "El siguiente aparatado es de EXAMEN BIOQUIMICO seleccione la det y su descripcion correcta ";
    question.noChoice = false;
    for (i = 0; i < orderLeft17.length; i++)
    {
        choice = new Array(2);;
        choice[0] = GetSelectedItemLeft("idDD17", i);
        choice[1] = GetSelextedItemRight("idDD17", i);
        if (choice[1]==='') question.noChoice=true;
        valuation = new Array();
        for (j = 0; j < listLeft17.length; j++)
        {
            if (listLeft17[j] === choice[0])
            {
                valuation.push(listRight17[j]);
            }
        }
        answer = new Answer(choice, valuation, 1, 0, '');
        question.answers.push(answer);
    }
    return question;

}


/* Code generated function */
function ClearQuestion18()
{
    ClearMatching("idDD17", 0);
    ClearMatching("idDD17", 1);
    ClearMatching("idDD17", 2);
    ClearMatching("idDD17", 3);
    ClearMatching("idDD17", 4);
    ClearMatching("idDD17", 5);
    ClearMatching("idDD17", 6);
    ClearMatching("idDD17", 7);
    ClearMatching("idDD17", 8);
    ClearMatching("idDD17", 9);

}


/* Code generated function */
function CreateListLeft17()
{
    this.length = 10;
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

}

/* Code generated function */
function CreateListRight17()
{
    this.length = 10;
    this[0] = unescape(DecodeString("S91szHGKw/olrsRT"));
    this[1] = unescape(DecodeString("mqe2weu5p8M="));
    this[2] = unescape(DecodeString("+4Ll5Bj5FxYoT5UdqD3NKPWXcyYOb+AsTlbwqQ=="));
    this[3] = unescape(DecodeString("O6t33H3ZIp/lgV3zEofmFw=="));
    this[4] = unescape(DecodeString("rUWTkVcNCD0UHjLC"));
    this[5] = unescape(DecodeString("hYBTB0jadzs="));
    this[6] = unescape(DecodeString("rHi2HTj8Ue0="));
    this[7] = unescape(DecodeString("EYjUp7mMcvs="));
    this[8] = unescape(DecodeString("+avY4WSfndE="));
    this[9] = unescape(DecodeString("I1CYNHLRGouWY4EPHNwL6g=="));

}

/* Code generated function */
function CreateListLeftHtml17()
{
    this.length = 10;
    this[0] = '<span class=\"quiz_answer_class\">Error proteico el indicador vira a pH inusual por prot (aniones). TODAS LAS PRUBAS deven dar Neg.  Patol : Proteinuria</span>';
    this[1] = '<span class=\"quiz_answer_class\">GOD. bajo MOs lo comio Patol: Glucosuria</span>';
    this[2] = '<span class=\"quiz_answer_class\">ácido acetoacético o acetona  reaciona con nitroprusiato de Na y glicina en NaOH >  complejo violeta. Bajo se volatilizo Patol: Cetonuria por hiperlipidemia o ayuno prolongado </span>';
    this[3] = '<span class=\"quiz_answer_class\">Fenólico o guayacol > oxidación por peroxidasa de Hb y mioglobina >quinonico color azul-verde. Patol:  Hematuria </span>';
    this[4] = '<span class=\"quiz_answer_class\">ácido indoxilcarbónico >  leucocito esterasa intracell>   indoxilo  reaciona con sal de diazonio > complejo violeta..  Patol: Leucocituria o piuria  Inflamación por IVU (se acompaña de ABUNDANTES GL-bac o leva  y cilin,) no infeccioso (solo hay cilin)</span>';
    this[5] = '<span class=\"quiz_answer_class\">prueba de Griess NO3 red por bac patógenas>  NO2 reacciona con ácido p- arsanilico >diazocompuesto  rojo.  Patol:  Bacteuria </span>';
    this[6] = '<span class=\"quiz_answer_class\">pH</span>';
    this[7] = '<span class=\"quiz_answer_class\">Si hay cationes urinarios el polielectrolito libera protones </span>';
    this[8] = '<span class=\"quiz_answer_class\">+sal diazonio > azocom rosa. </span>';
    this[9] = '<span class=\"quiz_answer_class\">+sal de diazonio > azocom rojo. Ref (1mg/dL) Patol: Hepáticas hemolíticas</span>';

}





