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

    var listLeft18;
    var listLeftHtml18;
    var listRight18;
    var orderLeft18;
    var orderRight18;



$(document).ready(function ()
{
	const questionIndex = 18;
	const questionTime = 0;

	PageLoad(questionIndex, questionTime);

	    listLeft18 = new CreateListLeft18();
    listLeftHtml18 = new CreateListLeftHtml18();
    listRight18 = new CreateListRight18();
    orderLeft18 = new ShuffleMatchingOrder(listLeft18.length);
    orderRight18 = new ShuffleMatchingOrder(listRight18.length);
    var hideLeftDropdown = true;
    var textHtml = CreateMatchingLists(listLeft18, listLeftHtml18, listRight18, orderLeft18, orderRight18, "idDD18", textSelect, hideLeftDropdown);
    $('#matching18').html(textHtml);
    var maxLeftSize = GetMaxSizeLeftColumn(listLeft18);
    var maxRightSize = GetMaxSizeRightColumn(listRight18);
    var leftWidth = maxLeftSize * 10;
    var rightWidth = maxRightSize * 10;
    ManageMatchingEvents(listLeft18, "idDD18", leftWidth, rightWidth, options.matchingLockLeftCol);
    SetDefaultLeftColumn(listLeft18, "idDD18", hideLeftDropdown);


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
function InitQuestion19()
{
    const type = QMAKE_MATCHING;
    const questionIndex = 18;
    var weight = DecodeNumber('J1NQ6i0xrsg=', 751, 0, 99999);
    var numOfAnswers = 9;
    var i, j;
    var answer;
    var choice, valuation;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('J1NQ6i0xrsg=', 751, -1000, 1000),DecodeDecimal('AWt2GKQD0+0=', 751, -1000, 1000),DecodeDecimal('AWt2GKQD0+0=', 751, -1000, 1000));
    question.num = 19;
    question.answers.length = 0;
    question.shortTextQuestion = "El siguiente aparatado es de EXAMEN DE SEDIMENTO selecicione CELULA y su descripcion correcta ";
    question.noChoice = false;
    for (i = 0; i < orderLeft18.length; i++)
    {
        choice = new Array(2);;
        choice[0] = GetSelectedItemLeft("idDD18", i);
        choice[1] = GetSelextedItemRight("idDD18", i);
        if (choice[1]==='') question.noChoice=true;
        valuation = new Array();
        for (j = 0; j < listLeft18.length; j++)
        {
            if (listLeft18[j] === choice[0])
            {
                valuation.push(listRight18[j]);
            }
        }
        answer = new Answer(choice, valuation, 1, 0, '');
        question.answers.push(answer);
    }
    return question;

}


/* Code generated function */
function ClearQuestion19()
{
    ClearMatching("idDD18", 0);
    ClearMatching("idDD18", 1);
    ClearMatching("idDD18", 2);
    ClearMatching("idDD18", 3);
    ClearMatching("idDD18", 4);
    ClearMatching("idDD18", 5);
    ClearMatching("idDD18", 6);
    ClearMatching("idDD18", 7);
    ClearMatching("idDD18", 8);

}


/* Code generated function */
function CreateListLeft18()
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
function CreateListRight18()
{
    this.length = 9;
    this[0] = unescape(DecodeString("k0K8gMMJ8vI="));
    this[1] = unescape(DecodeString("GpTuYgLa6jQ="));
    this[2] = unescape(DecodeString("h8JrQdWHGRJOAZaZ9pG7dV8220yHmMJ5ksW0v/gqq3pwDRMO"));
    this[3] = unescape(DecodeString("9+Fehy0SH8zJbeJAH088/IA3t5KgjFsQhoBBBbULQHs="));
    this[4] = unescape(DecodeString("WFen4QQmh1vY0pKI476kuEhZSYUL95k/d5rVDC6+waUep4I2c+G2dyKm7X0Epqd7U//KmHQp9iU="));
    this[5] = unescape(DecodeString("qLMXsBnmfZ0QM6LaXMpJWihIPqFcUcWgcuObIF+9kYeaU0jX01sKJz1tjEE="));
    this[6] = unescape(DecodeString("07fwvbG1IpCBDuUW"));
    this[7] = unescape(DecodeString("S02RReM4/BAxGDC1"));
    this[8] = unescape(DecodeString("jlgVc3mcE57WXjjd"));

}

/* Code generated function */
function CreateListLeftHtml18()
{
    this.length = 9;
    this[0] = '<span class=\"quiz_answer_class\">Ref <3/40x. Reportar osmolaridad de orina según morfo de GRorina  diluida (hipotónica),Acromicos- fantasma-vacio (son GR lisados se ve como dona)fresca isotónicaEumorficos (son GR normales)concentrada (hipertónica) Crenocitos parecen corcholata -Dismórficos (GR con heterogeneidad en tamaño color, forma los isomorficos elc ); si salen dismórficos reportar su &#37; del total de GR que contaste si son mas de 40&#37;  indican IVU alta -Como diferenciar de GL: ti borde mas grueso y muy refringente lisis por Ac acético </span>';
    this[1] = '<span class=\"quiz_answer_class\">Ref <10/40x. Circulo gris oscuro o amarillo verdoso más peq que cell epiteliales. Piocitos son más pálidos que GL interior gris con gránulos móviles indica IVU alta</span>';
    this[2] = '<span class=\"quiz_answer_class\">Cubicas  N=C nuc central o excéntrico  nucleolo   bajo descamación normal</span>';
    this[3] = '<span class=\"quiz_answer_class\">pera raqueta N<c 2=\"\" nucleolos=\"\"></c></span>';
    this[4] = '<span class=\"quiz_answer_class\">muy grandes/irregulares, núcleo muy pequeño  si ^ en mujeres es x mala colección de orina </span>';
    this[5] = '<span class=\"quiz_answer_class\">cetonuria polariza luz </span>';
    this[6] = '<span class=\"quiz_answer_class\">Pseudohias (bastones) aceptadas blastoconidios (ovales-lagrima PC gruesa de doble refringencia con gemación) IVU por C albicans debido a inmunosupresión o por baja biota x abos prolongado. Hongos hifa septada conidios</span>';
    this[7] = '<span class=\"quiz_answer_class\">Contaminacion vaginal si hay Trichomonas vaginalis, fecal si hay huevos de Enterobius vermicularis </span>';
    this[8] = '<span class=\"quiz_answer_class\">sin  GL ind mala colección de M</span>';

}





