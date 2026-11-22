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

    var listLeft9;
    var listLeftHtml9;
    var listRight9;
    var orderLeft9;
    var orderRight9;



$(document).ready(function ()
{
	const questionIndex = 9;
	const questionTime = 0;

	PageLoad(questionIndex, questionTime);

	    listLeft9 = new CreateListLeft9();
    listLeftHtml9 = new CreateListLeftHtml9();
    listRight9 = new CreateListRight9();
    orderLeft9 = new ShuffleMatchingOrder(listLeft9.length);
    orderRight9 = new ShuffleMatchingOrder(listRight9.length);
    var hideLeftDropdown = true;
    var textHtml = CreateMatchingLists(listLeft9, listLeftHtml9, listRight9, orderLeft9, orderRight9, "idDD9", textSelect, hideLeftDropdown);
    $('#matching9').html(textHtml);
    var maxLeftSize = GetMaxSizeLeftColumn(listLeft9);
    var maxRightSize = GetMaxSizeRightColumn(listRight9);
    var leftWidth = maxLeftSize * 10;
    var rightWidth = maxRightSize * 10;
    ManageMatchingEvents(listLeft9, "idDD9", leftWidth, rightWidth, options.matchingLockLeftCol);
    SetDefaultLeftColumn(listLeft9, "idDD9", hideLeftDropdown);


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
function InitQuestion10()
{
    const type = QMAKE_MATCHING;
    const questionIndex = 9;
    var weight = DecodeNumber('auuClP7kMps=', 1090, 0, 99999);
    var numOfAnswers = 27;
    var i, j;
    var answer;
    var choice, valuation;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('auuClP7kMps=', 1090, -1000, 1000),DecodeDecimal('j98KAJXZU4Q=', 1090, -1000, 1000),DecodeDecimal('j98KAJXZU4Q=', 1090, -1000, 1000));
    question.num = 10;
    question.answers.length = 0;
    question.shortTextQuestion = "Seleccione la respuesta correcta para  cada concepto ";
    question.noChoice = false;
    for (i = 0; i < orderLeft9.length; i++)
    {
        choice = new Array(2);;
        choice[0] = GetSelectedItemLeft("idDD9", i);
        choice[1] = GetSelextedItemRight("idDD9", i);
        if (choice[1]==='') question.noChoice=true;
        valuation = new Array();
        for (j = 0; j < listLeft9.length; j++)
        {
            if (listLeft9[j] === choice[0])
            {
                valuation.push(listRight9[j]);
            }
        }
        answer = new Answer(choice, valuation, 1, 0, '');
        question.answers.push(answer);
    }
    return question;

}


/* Code generated function */
function ClearQuestion10()
{
    ClearMatching("idDD9", 0);
    ClearMatching("idDD9", 1);
    ClearMatching("idDD9", 2);
    ClearMatching("idDD9", 3);
    ClearMatching("idDD9", 4);
    ClearMatching("idDD9", 5);
    ClearMatching("idDD9", 6);
    ClearMatching("idDD9", 7);
    ClearMatching("idDD9", 8);
    ClearMatching("idDD9", 9);
    ClearMatching("idDD9", 10);
    ClearMatching("idDD9", 11);
    ClearMatching("idDD9", 12);
    ClearMatching("idDD9", 13);
    ClearMatching("idDD9", 14);
    ClearMatching("idDD9", 15);
    ClearMatching("idDD9", 16);
    ClearMatching("idDD9", 17);
    ClearMatching("idDD9", 18);
    ClearMatching("idDD9", 19);
    ClearMatching("idDD9", 20);
    ClearMatching("idDD9", 21);
    ClearMatching("idDD9", 22);
    ClearMatching("idDD9", 23);
    ClearMatching("idDD9", 24);
    ClearMatching("idDD9", 25);
    ClearMatching("idDD9", 26);

}


/* Code generated function */
function CreateListLeft9()
{
    this.length = 27;
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
    this[21] = 'Match 22';
    this[22] = 'Match 23';
    this[23] = 'Match 24';
    this[24] = 'Match 25';
    this[25] = 'Match 26';
    this[26] = 'Match 27';

}

/* Code generated function */
function CreateListRight9()
{
    this.length = 27;
    this[0] = unescape(DecodeString("SfuWmwqUIOU="));
    this[1] = unescape(DecodeString("ZOiEjIfd9wY="));
    this[2] = unescape(DecodeString("ckk4mg5lT8tqv9Y9"));
    this[3] = unescape(DecodeString("TIP59c6BO3M="));
    this[4] = unescape(DecodeString("ZEbEbQ3w2ABHhKySFUtRmA=="));
    this[5] = unescape(DecodeString("/PtaXajTlWA="));
    this[6] = unescape(DecodeString("RkUfXgqOBOon6YvEdCt7y6duGKY7v1Mk"));
    this[7] = unescape(DecodeString("t8MGWN0FNw9kcE1LIcferG0RAXiEFh4hPB3LhA=="));
    this[8] = unescape(DecodeString("//oqsDsRNNto3lhV+FwYn5sKGSCTYGcAT4ecFw=="));
    this[9] = unescape(DecodeString("2RH0vNJHt5fteLxBuA22un0uwcbBW+B5"));
    this[10] = unescape(DecodeString("vnlFO0SgA+g="));
    this[11] = unescape(DecodeString("uKveg3HyOp2Qrj/i"));
    this[12] = unescape(DecodeString("fZCFPBXuSus="));
    this[13] = unescape(DecodeString("s4kRz0XfUY8="));
    this[14] = unescape(DecodeString("T7SP2EH0Uzb5IJHhuicSHqpp+TBeabvwVuh3rXQP+5A="));
    this[15] = unescape(DecodeString("cJx6dV0fMDI="));
    this[16] = unescape(DecodeString("yhcR1g2sjhU="));
    this[17] = unescape(DecodeString("PM/CGtVRq0o="));
    this[18] = unescape(DecodeString("JFU9qGKyOEUspm5vp2kF7bRzqzY="));
    this[19] = unescape(DecodeString("FEd+sDV4AeM="));
    this[20] = unescape(DecodeString("0GPmMjhmHJI="));
    this[21] = unescape(DecodeString("EP/SCYIaSbs="));
    this[22] = unescape(DecodeString("thphpM+2LTA="));
    this[23] = unescape(DecodeString("YpX+KfUdD6I="));
    this[24] = unescape(DecodeString("/7sx8C5+gEM="));
    this[25] = unescape(DecodeString("/Z6P4RDOc3A="));
    this[26] = unescape(DecodeString("PeM8l0bPUzwhcxKv6/LWBNB5oWQTbgVvhVJSKhIZnkOSTaQjdmnBZg=="));

}

/* Code generated function */
function CreateListLeftHtml9()
{
    this.length = 27;
    this[0] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">En su lugar se puede usar 5 nucleotidasa</span></p></span>';
    this[1] = '<span class=\"quiz_answer_class\">Sus isoenzimas ti Subunidad B cerebral M muscular y son CKBB (rara ves en sangre) CKMB CKMM  (están en mitocondrias  citoplasma)</span>';
    this[2] = '<span class=\"quiz_answer_class\">Regulan contraccion de musculo y corazon</span>';
    this[3] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">es m&#225;s espec&#237;fica para dx de pancreatitis aguda </span></p></span>';
    this[4] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">= ACP total </span><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\"> ACP no prost</span><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">&#225;tica</span></p></span>';
    this[5] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\"> =Urea/2.14 o urea*0.46</span></p></span>';
    this[6] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">catabolismso de Orn/Arg &gt;  NH3 en h&#237;gado &gt;...... se va por orina  </span></p></span>';
    this[7] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">Amonio (NH4+) acides &gt; amoniaco (NH3) alcalinidad  </span></p></span>';
    this[8] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">Su valor  es inverso a nefropat&#237;a</span></p></span>';
    this[9] = '<span class=\"quiz_answer_class\">Fosfocreatina > desfosforilacion espontanea (reversible x CK)>creatina + ATP para actividad de musculo > ciclación espontanea  >creatinina se va por orina</span>';
    this[10] = '<span class=\"quiz_answer_class\">Es la cantidad de x sustancia eliminada por riñon de cierto vol de plasma por unidad de tiempo = (creatinina de orina de 24h x mL orina) /( creatinina de suero x 1400) </span>';
    this[11] = '<span class=\"quiz_answer_class\">Det si TFGcreatinina varia por ch de masa muscular x obesas vejes  veganas</span>';
    this[12] = '<span class=\"quiz_answer_class\">Viene de degradación de puricas (purinas)</span>';
    this[13] = '<span class=\"quiz_answer_class\">Es la baja o nula cn de alb que pasa por el glomérulo hacia orina en nefropatías </span>';
    this[14] = '<span class=\"quiz_answer_class\">indica  nivel de daño renal   corrige variación de cn de ualb uPro por concentración o dil de orina  </span>';
    this[15] = '<span class=\"quiz_answer_class\">conforma Hb mioglobina ez de citocromos y eritropoyesis</span>';
    this[16] = '<span class=\"quiz_answer_class\">principal almacenador de Fe3</span>';
    this[17] = '<span class=\"quiz_answer_class\">Transporta Fe3 desde FERR a MO</span>';
    this[18] = '<span class=\"quiz_answer_class\">=ApoB/ApoA1</span>';
    this[19] = '<span class=\"quiz_answer_class\">Transportado por quilomicrón (CM) desde enterocito a adipos hepatos miocitos</span>';
    this[20] = '<span class=\"quiz_answer_class\">Precursor de aldosterona /cortisol/estradiol progesterona /testosterona/vitamina D</span>';
    this[21] = '<span class=\"quiz_answer_class\">transportan CHOL de hígado a tejidos ti Apo B (B100) quien tambien esta en sus precursores (partículas aterogenicas): lipoproteínas de muy baja densidad“VLDL” y las de densidad intermedia IDL</span>';
    this[22] = '<span class=\"quiz_answer_class\">transporte reverso CHOL de tejidos  a hígado se auxilia de Apo A (A1) quien activa LCAT</span>';
    this[23] = '<span class=\"quiz_answer_class\">Incluye CM VLDL, LDL</span>';
    this[24] = '<span class=\"quiz_answer_class\">Indica glicemia solo al momento de tomar M </span>';
    this[25] = '<span class=\"quiz_answer_class\">indica glicemia promedio en las últimas 12 sem (4 meses) aun si se mata de hambre 3 días antes Varia por anemia enf hemolíticas </span>';
    this[26] = '<span class=\"quiz_answer_class\">Hiperglucemia activa cel beta > preINSulina (ti peptido C)> insulina libre  se u a receptores en adipos hepatos miocitos >  glucolisis y glucogénesis (glu a glucogeno)</span>';

}





