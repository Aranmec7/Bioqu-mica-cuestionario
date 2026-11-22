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

    var listLeft23;
    var listLeftHtml23;
    var listRight23;
    var orderLeft23;
    var orderRight23;



$(document).ready(function ()
{
	const questionIndex = 23;
	const questionTime = 0;

	PageLoad(questionIndex, questionTime);

	    listLeft23 = new CreateListLeft23();
    listLeftHtml23 = new CreateListLeftHtml23();
    listRight23 = new CreateListRight23();
    orderLeft23 = new ShuffleMatchingOrder(listLeft23.length);
    orderRight23 = new ShuffleMatchingOrder(listRight23.length);
    var hideLeftDropdown = true;
    var textHtml = CreateMatchingLists(listLeft23, listLeftHtml23, listRight23, orderLeft23, orderRight23, "idDD23", textSelect, hideLeftDropdown);
    $('#matching23').html(textHtml);
    var maxLeftSize = GetMaxSizeLeftColumn(listLeft23);
    var maxRightSize = GetMaxSizeRightColumn(listRight23);
    var leftWidth = maxLeftSize * 10;
    var rightWidth = maxRightSize * 10;
    ManageMatchingEvents(listLeft23, "idDD23", leftWidth, rightWidth, options.matchingLockLeftCol);
    SetDefaultLeftColumn(listLeft23, "idDD23", hideLeftDropdown);


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
function InitQuestion24()
{
    const type = QMAKE_MATCHING;
    const questionIndex = 23;
    var weight = DecodeNumber('xQdG16TCQtE=', 1212, 0, 99999);
    var numOfAnswers = 35;
    var i, j;
    var answer;
    var choice, valuation;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('xQdG16TCQtE=', 1212, -1000, 1000),DecodeDecimal('BsRz5rBFVJU=', 1212, -1000, 1000),DecodeDecimal('BsRz5rBFVJU=', 1212, -1000, 1000));
    question.num = 24;
    question.answers.length = 0;
    question.shortTextQuestion = "La siguiente seccion corresponde a SCC relacione el concepto con su definicion. ";
    question.noChoice = false;
    for (i = 0; i < orderLeft23.length; i++)
    {
        choice = new Array(2);;
        choice[0] = GetSelectedItemLeft("idDD23", i);
        choice[1] = GetSelextedItemRight("idDD23", i);
        if (choice[1]==='') question.noChoice=true;
        valuation = new Array();
        for (j = 0; j < listLeft23.length; j++)
        {
            if (listLeft23[j] === choice[0])
            {
                valuation.push(listRight23[j]);
            }
        }
        answer = new Answer(choice, valuation, 1, 0, '');
        question.answers.push(answer);
    }
    return question;

}


/* Code generated function */
function ClearQuestion24()
{
    ClearMatching("idDD23", 0);
    ClearMatching("idDD23", 1);
    ClearMatching("idDD23", 2);
    ClearMatching("idDD23", 3);
    ClearMatching("idDD23", 4);
    ClearMatching("idDD23", 5);
    ClearMatching("idDD23", 6);
    ClearMatching("idDD23", 7);
    ClearMatching("idDD23", 8);
    ClearMatching("idDD23", 9);
    ClearMatching("idDD23", 10);
    ClearMatching("idDD23", 11);
    ClearMatching("idDD23", 12);
    ClearMatching("idDD23", 13);
    ClearMatching("idDD23", 14);
    ClearMatching("idDD23", 15);
    ClearMatching("idDD23", 16);
    ClearMatching("idDD23", 17);
    ClearMatching("idDD23", 18);
    ClearMatching("idDD23", 19);
    ClearMatching("idDD23", 20);
    ClearMatching("idDD23", 21);
    ClearMatching("idDD23", 22);
    ClearMatching("idDD23", 23);
    ClearMatching("idDD23", 24);
    ClearMatching("idDD23", 25);
    ClearMatching("idDD23", 26);
    ClearMatching("idDD23", 27);
    ClearMatching("idDD23", 28);
    ClearMatching("idDD23", 29);
    ClearMatching("idDD23", 30);
    ClearMatching("idDD23", 31);
    ClearMatching("idDD23", 32);
    ClearMatching("idDD23", 33);
    ClearMatching("idDD23", 34);

}


/* Code generated function */
function CreateListLeft23()
{
    this.length = 35;
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
    this[27] = 'Match 28';
    this[28] = 'Match 29';
    this[29] = 'Match 30';
    this[30] = 'Match 31';
    this[31] = 'Match 32';
    this[32] = 'Match 33';
    this[33] = 'Match 34';
    this[34] = 'Match 35';

}

/* Code generated function */
function CreateListRight23()
{
    this.length = 35;
    this[0] = unescape(DecodeString("yImhWUaCQNfTfHGtK/7Gm21nU0I="));
    this[1] = unescape(DecodeString("ik5zJXACglHRaseq"));
    this[2] = unescape(DecodeString("WVq4FBZKf+lEVhq6"));
    this[3] = unescape(DecodeString("Y3KP6cdTjpI="));
    this[4] = unescape(DecodeString("SxlFsWEjaeXhl7aF5aaNyImeJto="));
    this[5] = unescape(DecodeString("Lduo9Mpgw2bSjTplFMt4KWKdkSUqgYyR"));
    this[6] = unescape(DecodeString("xoSLvUT4LcdYGqQs8Lpx95xcA8b3QpgMp2Kdgroln/k="));
    this[7] = unescape(DecodeString("vqjY4Chh3ZQEuHOj305QYFE3RSVuMNyL"));
    this[8] = unescape(DecodeString("Ct86uOlSNtQOMgOI/eBtZCRlGnHCvgeY"));
    this[9] = unescape(DecodeString("EaNwAFnY5/7Rcy1yxaotOS9hQBlwqhNp"));
    this[10] = unescape(DecodeString("t/+3n81Y7HyfnVwc7kfk8A=="));
    this[11] = unescape(DecodeString("HAaeTcdP1GlupQuE"));
    this[12] = unescape(DecodeString("Njv9dAJzr26BDCGBsdxco3OKXqjbVMPB5TKgUw=="));
    this[13] = unescape(DecodeString("EGNYwjpT4GhkMAp956CXTxIr4zD7uCIAilOuOoocK6QwyxA9b3p285oL5F4="));
    this[14] = unescape(DecodeString("3L+SLE9nBHEUpaATp/U6dYABhKBwnLXdu3nOfOYRxsQ="));
    this[15] = unescape(DecodeString("eKE/on1DWv6BpjPCWKaK9R1QA7MLmKWdV/wRXMFbh0w="));
    this[16] = unescape(DecodeString("zOZN3q9bQXQtU/fbc8D3oq4bZxz6BUDX"));
    this[17] = unescape(DecodeString("nNWyerz8fRqFGiH8"));
    this[18] = unescape(DecodeString("LUQCv6bOvjCZoVSX5935fsBcDh4="));
    this[19] = unescape(DecodeString("VqD9uLQwPt6/+ECm"));
    this[20] = unescape(DecodeString("JLfZeyKIGWCeDVq/uWawMg=="));
    this[21] = unescape(DecodeString("yJORBTnisweRAzzXVUt9pbLboCzIBUUJVL+JoQ=="));
    this[22] = unescape(DecodeString("Bw8YvzzGDgjKhWXX"));
    this[23] = unescape(DecodeString("pgZs+X5otr0XW+P/OzbZFfBXzMEeuE9v"));
    this[24] = unescape(DecodeString("oGraaDCqHt48hazAZgfKktr50WvHk/14"));
    this[25] = unescape(DecodeString("grGCwBzbpCf7UU+7u8aRoKG6dTkAaTuqSMm6+mIUj+OdBz5H"));
    this[26] = unescape(DecodeString("ZXzlireOhqlfX+O+XtDGe11tlsE="));
    this[27] = unescape(DecodeString("6Gl3wJfpGDzowPQQD51JN9UhgjzFzoflMubKcoumUcQmoEeo"));
    this[28] = unescape(DecodeString("FDqdQ/gibtkcxjKC3RZ5sgCZOLM="));
    this[29] = unescape(DecodeString("0rtG8i1pNXkEUIuVC9mJYyrl2KbkugruGchYpr3JgDjFStOlGutF6SIdAqk="));
    this[30] = unescape(DecodeString("G4o/AdcwET062loVsBbx5A=="));
    this[31] = unescape(DecodeString("kEHgWQOOA/k="));
    this[32] = unescape(DecodeString("6c16UIIKQBc="));
    this[33] = unescape(DecodeString("ueF/hnpQ2r+LE02C"));
    this[34] = unescape(DecodeString("mFx+OC1d6rYEOSc2jAVRdw=="));

}

/* Code generated function */
function CreateListLeftHtml23()
{
    this.length = 35;
    this[0] = '<span class=\"quiz_answer_class\">garantizan funcionalidad desde su fabricación hasta U: Monitorear y registrar tem diariamente. Descongelar y limpiar de ves en cuando. No dejar abierta puerta. Primeras entradas primeras salidas (los que caducan 1ro van adelante</span>';
    this[1] = '<span class=\"quiz_answer_class\">Es determinar la exactitud  de mediciones del equipo o intrumento para asegurar res confiables(bajo CV &#37; EE; si son igual o cercanas  al valor indicado  esta calibrado </span>';
    this[2] = '<span class=\"quiz_answer_class\">Sln que ti al Ao para hacer calibración car alta pureza com conocida/homogénea,estable  multicalibrador (tiene varios Ao) </span>';
    this[3] = '<span class=\"quiz_answer_class\">Matriz similar a M ti Ao para hacer CCI, tratar igual que M</span>';
    this[4] = '<span class=\"quiz_answer_class\">Acciones sobre SA para verificar/controlar su buen funcionamiento e id/ minimizar o eliminar errores > asegurar res confiables. NOM 007 SSA3 2011 dice que do: CCI: El personal diario con gf de ctl  CCE: programa externo da controles semiciegos entre diff laboratorios  </span>';
    this[5] = '<span class=\"quiz_answer_class\">capacidad de meta para distinguir Ao de interferentes</span>';
    this[6] = '<span class=\"quiz_answer_class\">Es la determinación del grado de cumplimiento de las normas obligatoria NOM voluntaria NMX ISO </span>';
    this[7] = '<span class=\"quiz_answer_class\">Describe las 3 fases de análisis clínico y req min  de calidad </span>';
    this[8] = '<span class=\"quiz_answer_class\">Req minimos de SGC </span>';
    this[9] = '<span class=\"quiz_answer_class\">Fundamentos y vocabulario de SGC</span>';
    this[10] = '<span class=\"quiz_answer_class\">Req mínimos para la certificación (es garantizar cumplimiento de especificaciones) </span>';
    this[11] = '<span class=\"quiz_answer_class\">Req mínimos para la acreditación (es reconocer competencia técnica) </span>';
    this[12] = '<span class=\"quiz_answer_class\">Ti 95&#37; de los valores de cierto Ao de pb sana </span>';
    this[13] = '<span class=\"quiz_answer_class\">int donde equipo da res confiables  de equipo: expresado en int de A de meta (en int de cn) Si A esta arriba de int diluya M </span>';
    this[14] = '<span class=\"quiz_answer_class\">Cn mínima de Ao detectada y diferenciada de interferencias, sin precisión ni exactitud su valor es menor al LoQ </span>';
    this[15] = '<span class=\"quiz_answer_class\">Cn  minima de Ao cuantificada con precisión y exactitud, es igual al límite inferior de linealidad</span>';
    this[16] = '<span class=\"quiz_answer_class\">Instrucciones detalladas para determinar Ao</span>';
    this[17] = '<span class=\"quiz_answer_class\">Determinan cn exacta  mide  directamente de Ao  Unidad de medida</span>';
    this[18] = '<span class=\"quiz_answer_class\">Determinan cn aproximada, mide indirectamente al Ao Se transforma unidad cualitativa a cuantitativo</span>';
    this[19] = '<span class=\"quiz_answer_class\">Adimensional, solo dicen si esta+ o no esta- presente</span>';
    this[20] = '<span class=\"quiz_answer_class\">Es obtener mm res en mm condiciones reproducibilidad es obtenlo en diff condiciones  </span>';
    this[21] = '<span class=\"quiz_answer_class\">Habla de los RPBI (Residuos peligrosos biológicos infecciosos)</span>';
    this[22] = '<span class=\"quiz_answer_class\">Capacidad de meta para detectar Ao con exactitud y especificidad</span>';
    this[23] = '<span class=\"quiz_answer_class\">Cn mas baja de Ao  capaz de ser detectada por meta</span>';
    this[24] = '<span class=\"quiz_answer_class\">Conjunto analista corrida (cal control M) equipo, instrumento, meta res.</span>';
    this[25] = '<span class=\"quiz_answer_class\">Actividades aplicadas sobre un conjunto de elementos (como SA, Recursos,) para asegurar calidad (es el cumplimiento de especificaciones Do en cada etapa) Incluye  acción preventiva correctiva  auditorias internas </span>';
    this[26] = '<span class=\"quiz_answer_class\">Se hacen para saber si SGC  se implementa, mantiene y funciona eficazmente, es obligatorio por lo menos una vez al año</span>';
    this[27] = '<span class=\"quiz_answer_class\">Cn de control vs días  Leer de  izq a derecha   µ ±s / (verde) µ ±2s (amarillo)  Si estas dentro  SA funciona bien  res confiables. Si caes = ±3S elc  reprocese control    </span>';
    this[28] = '<span class=\"quiz_answer_class\">Se alejan hacia mm lado de media ej 7_1T</span>';
    this[29] = '<span class=\"quiz_answer_class\">hacer un ajuste de medias: obt promedio de valores y usarlo como nuevo valor, ej  7_1D </span>';
    this[30] = '<span class=\"quiz_answer_class\">2 datos consecutivos uno arriba y otro abajo separados entre si por 3 desv estandar. ej I_3s</span>';
    this[31] = '<span class=\"quiz_answer_class\">R_4s Dos niveles en mm dia uno debajo de  -2s y otri arriba de +2s    por intercalar controles</span>';
    this[32] = '<span class=\"quiz_answer_class\">Es el no de punto consecutivos después de ±n desviaciones estadar  </span>';
    this[33] = '<span class=\"quiz_answer_class\">1_2s 1_3s I_3s reprocese y si vuelve a salir parecido es error sistematico</span>';
    this[34] = '<span class=\"quiz_answer_class\">2_2s 3_1s 7_1T 7_1D</span>';

}





