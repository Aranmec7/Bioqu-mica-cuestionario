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

    var listLeft1;
    var listLeftHtml1;
    var listRight1;
    var orderLeft1;
    var orderRight1;



$(document).ready(function ()
{
	const questionIndex = 1;
	const questionTime = 0;

	PageLoad(questionIndex, questionTime);

	    listLeft1 = new CreateListLeft1();
    listLeftHtml1 = new CreateListLeftHtml1();
    listRight1 = new CreateListRight1();
    orderLeft1 = new ShuffleMatchingOrder(listLeft1.length);
    orderRight1 = new ShuffleMatchingOrder(listRight1.length);
    var hideLeftDropdown = true;
    var textHtml = CreateMatchingLists(listLeft1, listLeftHtml1, listRight1, orderLeft1, orderRight1, "idDD1", textSelect, hideLeftDropdown);
    $('#matching1').html(textHtml);
    var maxLeftSize = GetMaxSizeLeftColumn(listLeft1);
    var maxRightSize = GetMaxSizeRightColumn(listRight1);
    var leftWidth = maxLeftSize * 10;
    var rightWidth = maxRightSize * 10;
    ManageMatchingEvents(listLeft1, "idDD1", leftWidth, rightWidth, options.matchingLockLeftCol);
    SetDefaultLeftColumn(listLeft1, "idDD1", hideLeftDropdown);


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
function InitQuestion2()
{
    const type = QMAKE_MATCHING;
    const questionIndex = 1;
    var weight = DecodeNumber('A/wZ0TnAlzU=', 550, 0, 99999);
    var numOfAnswers = 43;
    var i, j;
    var answer;
    var choice, valuation;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('A/wZ0TnAlzU=', 550, -1000, 1000),DecodeDecimal('j7Djr6fxx9k=', 550, -1000, 1000),DecodeDecimal('j7Djr6fxx9k=', 550, -1000, 1000));
    question.num = 2;
    question.answers.length = 0;
    question.shortTextQuestion = "Relacione cada abreviación con su nombre ";
    question.noChoice = false;
    for (i = 0; i < orderLeft1.length; i++)
    {
        choice = new Array(2);;
        choice[0] = GetSelectedItemLeft("idDD1", i);
        choice[1] = GetSelextedItemRight("idDD1", i);
        if (choice[1]==='') question.noChoice=true;
        valuation = new Array();
        for (j = 0; j < listLeft1.length; j++)
        {
            if (listLeft1[j] === choice[0])
            {
                valuation.push(listRight1[j]);
            }
        }
        answer = new Answer(choice, valuation, 1, 0, '');
        question.answers.push(answer);
    }
    return question;

}


/* Code generated function */
function ClearQuestion2()
{
    ClearMatching("idDD1", 0);
    ClearMatching("idDD1", 1);
    ClearMatching("idDD1", 2);
    ClearMatching("idDD1", 3);
    ClearMatching("idDD1", 4);
    ClearMatching("idDD1", 5);
    ClearMatching("idDD1", 6);
    ClearMatching("idDD1", 7);
    ClearMatching("idDD1", 8);
    ClearMatching("idDD1", 9);
    ClearMatching("idDD1", 10);
    ClearMatching("idDD1", 11);
    ClearMatching("idDD1", 12);
    ClearMatching("idDD1", 13);
    ClearMatching("idDD1", 14);
    ClearMatching("idDD1", 15);
    ClearMatching("idDD1", 16);
    ClearMatching("idDD1", 17);
    ClearMatching("idDD1", 18);
    ClearMatching("idDD1", 19);
    ClearMatching("idDD1", 20);
    ClearMatching("idDD1", 21);
    ClearMatching("idDD1", 22);
    ClearMatching("idDD1", 23);
    ClearMatching("idDD1", 24);
    ClearMatching("idDD1", 25);
    ClearMatching("idDD1", 26);
    ClearMatching("idDD1", 27);
    ClearMatching("idDD1", 28);
    ClearMatching("idDD1", 29);
    ClearMatching("idDD1", 30);
    ClearMatching("idDD1", 31);
    ClearMatching("idDD1", 32);
    ClearMatching("idDD1", 33);
    ClearMatching("idDD1", 34);
    ClearMatching("idDD1", 35);
    ClearMatching("idDD1", 36);
    ClearMatching("idDD1", 37);
    ClearMatching("idDD1", 38);
    ClearMatching("idDD1", 39);
    ClearMatching("idDD1", 40);
    ClearMatching("idDD1", 41);
    ClearMatching("idDD1", 42);

}


/* Code generated function */
function CreateListLeft1()
{
    this.length = 43;
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
    this[35] = 'Match 36';
    this[36] = 'Match 37';
    this[37] = 'Match 38';
    this[38] = 'Match 39';
    this[39] = 'Match 40';
    this[40] = 'Match 41';
    this[41] = 'Match 42';
    this[42] = 'Match 43';

}

/* Code generated function */
function CreateListRight1()
{
    this.length = 43;
    this[0] = unescape(DecodeString("i18IJs42UESOT+WWaUkxzw=="));
    this[1] = unescape(DecodeString("g2P36wUvHxCJ+n4h"));
    this[2] = unescape(DecodeString("DsqsVmYHFZABDILAusiXE3ED84c="));
    this[3] = unescape(DecodeString("omRA7OEcJQDdD4oD"));
    this[4] = unescape(DecodeString("k/rTHm94254="));
    this[5] = unescape(DecodeString("DEVIR06HESY="));
    this[6] = unescape(DecodeString("+avY4WSfndE="));
    this[7] = unescape(DecodeString("VlnjuPWSBCI="));
    this[8] = unescape(DecodeString("S3SF2H7xN9U="));
    this[9] = unescape(DecodeString("o0EIG3uWlOQ9mNs/B103bQ=="));
    this[10] = unescape(DecodeString("mekC/O7DeVY="));
    this[11] = unescape(DecodeString("JsOxrZZxpvY="));
    this[12] = unescape(DecodeString("5XSIrTmI89o="));
    this[13] = unescape(DecodeString("Az0kZYH562U="));
    this[14] = unescape(DecodeString("/PtaXajTlWA="));
    this[15] = unescape(DecodeString("vnlFO0SgA+g="));
    this[16] = unescape(DecodeString("fZCFPBXuSus="));
    this[17] = unescape(DecodeString("uhLVISrf1xw="));
    this[18] = unescape(DecodeString("mVdSQTpcjYg="));
    this[19] = unescape(DecodeString("a09OqsOXpyg="));
    this[20] = unescape(DecodeString("CgE+fC8HQ+5X2AXN"));
    this[21] = unescape(DecodeString("cJx6dV0fMDI="));
    this[22] = unescape(DecodeString("yhcR1g2sjhU="));
    this[23] = unescape(DecodeString("PM/CGtVRq0o="));
    this[24] = unescape(DecodeString("J5dw5T+bD6w="));
    this[25] = unescape(DecodeString("AMl3yNVSAzCWKfaO"));
    this[26] = unescape(DecodeString("FEd+sDV4AeM="));
    this[27] = unescape(DecodeString("1JuC0ixj3tBRpvpa"));
    this[28] = unescape(DecodeString("EP/SCYIaSbs="));
    this[29] = unescape(DecodeString("thphpM+2LTA="));
    this[30] = unescape(DecodeString("uGj4OSbJeLI="));
    this[31] = unescape(DecodeString("ho+DyZhlfEE="));
    this[32] = unescape(DecodeString("iNBFEMHVY+o="));
    this[33] = unescape(DecodeString("qubgkcVIWpg="));
    this[34] = unescape(DecodeString("/7sx8C5+gEM="));
    this[35] = unescape(DecodeString("/Z6P4RDOc3A="));
    this[36] = unescape(DecodeString("AFVHo5ehekc="));
    this[37] = unescape(DecodeString("ZQMQb0WzNdA="));
    this[38] = unescape(DecodeString("NLklUS9ExZo="));
    this[39] = unescape(DecodeString("Xr3z3Bk85L4fs9S2"));
    this[40] = unescape(DecodeString("a4vRdT/inuaVdBDIJV+wJQ=="));
    this[41] = unescape(DecodeString("xz13fL5hRDA="));
    this[42] = unescape(DecodeString("bytT3w/M3kE="));

}

/* Code generated function */
function CreateListLeftHtml1()
{
    this.length = 43;
    this[0] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">Aspartato aminotransferasa o glut&#225;mico oxalac&#233;tico transaminasa</span></p></span>';
    this[1] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">A</span><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">lanina aminotransferasa </span><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">o </span><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">glut</span><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">&#225;mico pir&#250;vico transaminasa</span></p></span>';
    this[2] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">Fosfatasa alcalina </span></p></span>';
    this[3] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">? glutamil transferasa o transpeptidasa </span></p></span>';
    this[4] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">Bilirrubina indirecta o no conjugada </span></p></span>';
    this[5] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">Bilirrubina directa o conjugada </span></p></span>';
    this[6] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">Bilirrubina</span><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">s totales</span></p></span>';
    this[7] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">Creatina fosfocinasa </span><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">o </span><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">cinasa </span></p></span>';
    this[8] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">Lactato deshidrogenasa o deshidrogenasa l</span><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">&#225;ctica</span></p></span>';
    this[9] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">Troponinas </span></p></span>';
    this[10] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">a-amilasa </span></p></span>';
    this[11] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">Fosfatasa acida </span></p></span>';
    this[12] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">Urea</span></p></span>';
    this[13] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">Creatinina</span></p></span>';
    this[14] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">Nitr</span><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">&#243;geno ureico sangu&#237;neo </span></p></span>';
    this[15] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">Taza de filtraci</span><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">&#243;n glomerular(acaramiento-depuraci&#243;n purificacion)</span></p></span>';
    this[16] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">Acido urico </span></p></span>';
    this[17] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">Microalbumina</span></p></span>';
    this[18] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">Proteinas en orina </span></p></span>';
    this[19] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">Albumina</span></p></span>';
    this[20] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">Proteinas totales- Globulinas </span></p></span>';
    this[21] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">Hierro s</span><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">&#233;rico </span></p></span>';
    this[22] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">Ferrritina</span></p></span>';
    this[23] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">Transferrina o siderofilina </span></p></span>';
    this[24] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">Capacidad total de uni</span><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">&#243;n-fijacion al hierro </span></p></span>';
    this[25] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">Capacidad de uni</span><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">&#243;n de hierro insaturado o residual </span></p></span>';
    this[26] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">Trigliceridos</span></p></span>';
    this[27] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">Colesterol total </span></p></span>';
    this[28] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">lipoprote</span><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">&#237;nas de baja densidad -colesterol malo- lipoprote&#237;na B   </span></p></span>';
    this[29] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">lipoprote</span><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">&#237;nas de alta densidad-colesterol bueno - lipoprote&#237;na alfa</span></p></span>';
    this[30] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">Quilomicron</span></p></span>';
    this[31] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">Apolipoproteina </span></p></span>';
    this[32] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">lipoprote</span><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">&#237;nas de muy baja densidad </span></p></span>';
    this[33] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">lipoprote</span><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">&#237;nas de densidad intermedia</span></p></span>';
    this[34] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">Glucosa</span></p></span>';
    this[35] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">Hemoglobina glicada o glicosilada</span></p></span>';
    this[36] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">Prueba oral de tolerancia a la glucosa</span></p></span>';
    this[37] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">Gl</span><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">ucosa pospandrial</span></p></span>';
    this[38] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">Glucosa oxidasa</span></p></span>';
    this[39] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">Sodio cloro potasio </span></p></span>';
    this[40] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">Calcio fosforo magnesio</span></p></span>';
    this[41] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">Ex&#225;men general de orina</span></p></span>';
    this[42] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">S</span><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">olidos anormales abundantes </span></p></span>';

}





