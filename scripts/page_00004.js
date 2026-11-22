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

    var listLeft3;
    var listLeftHtml3;
    var listRight3;
    var orderLeft3;
    var orderRight3;



$(document).ready(function ()
{
	const questionIndex = 3;
	const questionTime = 0;

	PageLoad(questionIndex, questionTime);

	    listLeft3 = new CreateListLeft3();
    listLeftHtml3 = new CreateListLeftHtml3();
    listRight3 = new CreateListRight3();
    orderLeft3 = new ShuffleMatchingOrder(listLeft3.length);
    orderRight3 = new ShuffleMatchingOrder(listRight3.length);
    var hideLeftDropdown = true;
    var textHtml = CreateMatchingLists(listLeft3, listLeftHtml3, listRight3, orderLeft3, orderRight3, "idDD3", textSelect, hideLeftDropdown);
    $('#matching3').html(textHtml);
    var maxLeftSize = GetMaxSizeLeftColumn(listLeft3);
    var maxRightSize = GetMaxSizeRightColumn(listRight3);
    var leftWidth = maxLeftSize * 10;
    var rightWidth = maxRightSize * 10;
    ManageMatchingEvents(listLeft3, "idDD3", leftWidth, rightWidth, options.matchingLockLeftCol);
    SetDefaultLeftColumn(listLeft3, "idDD3", hideLeftDropdown);


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
function InitQuestion4()
{
    const type = QMAKE_MATCHING;
    const questionIndex = 3;
    var weight = DecodeNumber('5yKJDaBincI=', 981, 0, 99999);
    var numOfAnswers = 18;
    var i, j;
    var answer;
    var choice, valuation;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('5yKJDaBincI=', 981, -1000, 1000),DecodeDecimal('BIVq/YqP0Ag=', 981, -1000, 1000),DecodeDecimal('BIVq/YqP0Ag=', 981, -1000, 1000));
    question.num = 4;
    question.answers.length = 0;
    question.shortTextQuestion = "Relacione cada analito con su enfermedad principal (y otras si es que aplica)";
    question.noChoice = false;
    for (i = 0; i < orderLeft3.length; i++)
    {
        choice = new Array(2);;
        choice[0] = GetSelectedItemLeft("idDD3", i);
        choice[1] = GetSelextedItemRight("idDD3", i);
        if (choice[1]==='') question.noChoice=true;
        valuation = new Array();
        for (j = 0; j < listLeft3.length; j++)
        {
            if (listLeft3[j] === choice[0])
            {
                valuation.push(listRight3[j]);
            }
        }
        answer = new Answer(choice, valuation, 1, 0, '');
        question.answers.push(answer);
    }
    return question;

}


/* Code generated function */
function ClearQuestion4()
{
    ClearMatching("idDD3", 0);
    ClearMatching("idDD3", 1);
    ClearMatching("idDD3", 2);
    ClearMatching("idDD3", 3);
    ClearMatching("idDD3", 4);
    ClearMatching("idDD3", 5);
    ClearMatching("idDD3", 6);
    ClearMatching("idDD3", 7);
    ClearMatching("idDD3", 8);
    ClearMatching("idDD3", 9);
    ClearMatching("idDD3", 10);
    ClearMatching("idDD3", 11);
    ClearMatching("idDD3", 12);
    ClearMatching("idDD3", 13);
    ClearMatching("idDD3", 14);
    ClearMatching("idDD3", 15);
    ClearMatching("idDD3", 16);
    ClearMatching("idDD3", 17);

}


/* Code generated function */
function CreateListLeft3()
{
    this.length = 18;
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

}

/* Code generated function */
function CreateListRight3()
{
    this.length = 18;
    this[0] = unescape(DecodeString("S2LgWyhqTI8="));
    this[1] = unescape(DecodeString("4WR/wx0FdpU="));
    this[2] = unescape(DecodeString("SfuWmwqUIOU="));
    this[3] = unescape(DecodeString("PPVjEHCuyvi4PKbj"));
    this[4] = unescape(DecodeString("2ic2m+iGCMXhXjN0ECo7KORpYHPT7/V6"));
    this[5] = unescape(DecodeString("mekC/O7DeVY="));
    this[6] = unescape(DecodeString("JsOxrZZxpvY="));
    this[7] = unescape(DecodeString("Juuqf3/MvZzbEeol"));
    this[8] = unescape(DecodeString("fZCFPBXuSus="));
    this[9] = unescape(DecodeString("y4XdxFIC63VGJokZ"));
    this[10] = unescape(DecodeString("2nB7W5XOF9c="));
    this[11] = unescape(DecodeString("FGovvfHpyH2RI+mq"));
    this[12] = unescape(DecodeString("PM/CGtVRq0o="));
    this[13] = unescape(DecodeString("atvGBbB0HDcE3QpYtiw5uQ=="));
    this[14] = unescape(DecodeString("thphpM+2LTA="));
    this[15] = unescape(DecodeString("FFJIAy4dgnNEU2tOn683Bw=="));
    this[16] = unescape(DecodeString("m1yGG7jVF3Q="));
    this[17] = unescape(DecodeString("dXbbhr+tyUqPm6KmpcOpjg=="));

}

/* Code generated function */
function CreateListLeftHtml3()
{
    this.length = 18;
    this[0] = '<span class=\"quiz_answer_class\">Daño hepatocelular  x Hepatitis alcohólica autoinmune viral o paracetamol Otros: cardiopatías </span>';
    this[1] = '<span class=\"quiz_answer_class\">Colestasis intrahepática/extrahepatica otras Osteopatías Crecimiento oseo</span>';
    this[2] = '<span class=\"quiz_answer_class\">Confirma si el aumento de FA es por colestasis </span>';
    this[3] = '<span class=\"quiz_answer_class\">Ictericia x  anemia hemolítica enf hemolítica autoinmune (BI)   colestasis hepatopatías (BD)</span>';
    this[4] = '<span class=\"quiz_answer_class\">infartos agudo al miocardio otros  miocarditis necrosis miocardia</span>';
    this[5] = '<span class=\"quiz_answer_class\">pancreatitis aguda, (Lipasa es más específica para su dx) </span>';
    this[6] = '<span class=\"quiz_answer_class\">prostatitis cáncer de próstata, F+ por actividad sexual y exámenes de próstata reciente (espere un mes)  </span>';
    this[7] = '<span class=\"quiz_answer_class\">Evalúa fx reanal  (glomerulonefritis necrosis tubular)  otras: Azoemia (aumentan en plasma por incremento del catabolismo de prot (x dieta carnica estrés fiebre hemorragias quemaduras) deshidratación obstrucción de tracto urinario )</span>';
    this[8] = '<span class=\"quiz_answer_class\">Gota (ajugas intra o extra Mf) Litiasis </span>';
    this[9] = '<span class=\"quiz_answer_class\">Dx temprano de nefropatia por DM hipertensión</span>';
    this[10] = '<span class=\"quiz_answer_class\">Su disminución es mas imp: anemia hepatonefropatía + :Deshidratación gamapatias mono o poli clonales </span>';
    this[11] = '<span class=\"quiz_answer_class\">-Ane carencial  + Hemolíticas Hepatonefropatias Tranfusion sangre  Suplementos de hierro</span>';
    this[12] = '<span class=\"quiz_answer_class\">- alto Fe  inflamacion   + bajo Fe</span>';
    this[13] = '<span class=\"quiz_answer_class\">Evaluar riesgo de evento cerebro o cardiovascular x ateroesclerosis dislipidemia, enf cardiaca coronaria  riesgo aterogenico = ApoB / ApoA1</span>';
    this[14] = '<span class=\"quiz_answer_class\">elevación no  patológica</span>';
    this[15] = '<span class=\"quiz_answer_class\">Dx de DM hay hiperglucemia >126 mg/dL  en mas de una ocasión, HbA1c alterada; prueba oral de tolerancia a la glucosa PTOG ( ep dx de DM gestacional medir GluC antes de tomar sln de glucosa luego a 60 y 120 min) y glucosa pospandrial GP ( similar a PTOG pero de comida azucarada ) > 140 mg/dL  despues de las 2 hrs. Polifagia-uria-dipsia</span>';
    this[16] = '<span class=\"quiz_answer_class\">Mantienen P osmótica pH electroneutralidad Evaluar su disminución en acidosis metabolica (hay muchos cationes se pierden aniones) alcalosis metabolica (hay muchos aniones se pierden cationes) por diarrea diuréticos nefropatia vomito</span>';
    this[17] = '<span class=\"quiz_answer_class\">Osteo-nefropatías </span>';

}





