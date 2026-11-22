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

    var listLeft5;
    var listLeftHtml5;
    var listRight5;
    var orderLeft5;
    var orderRight5;



$(document).ready(function ()
{
	const questionIndex = 5;
	const questionTime = 0;

	PageLoad(questionIndex, questionTime);

	    listLeft5 = new CreateListLeft5();
    listLeftHtml5 = new CreateListLeftHtml5();
    listRight5 = new CreateListRight5();
    orderLeft5 = new ShuffleMatchingOrder(listLeft5.length);
    orderRight5 = new ShuffleMatchingOrder(listRight5.length);
    var hideLeftDropdown = true;
    var textHtml = CreateMatchingLists(listLeft5, listLeftHtml5, listRight5, orderLeft5, orderRight5, "idDD5", textSelect, hideLeftDropdown);
    $('#matching5').html(textHtml);
    var maxLeftSize = GetMaxSizeLeftColumn(listLeft5);
    var maxRightSize = GetMaxSizeRightColumn(listRight5);
    var leftWidth = maxLeftSize * 10;
    var rightWidth = maxRightSize * 10;
    ManageMatchingEvents(listLeft5, "idDD5", leftWidth, rightWidth, options.matchingLockLeftCol);
    SetDefaultLeftColumn(listLeft5, "idDD5", hideLeftDropdown);


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
function InitQuestion6()
{
    const type = QMAKE_MATCHING;
    const questionIndex = 5;
    var weight = DecodeNumber('3u7UI5jhiD0=', 140, 0, 99999);
    var numOfAnswers = 34;
    var i, j;
    var answer;
    var choice, valuation;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('3u7UI5jhiD0=', 140, -1000, 1000),DecodeDecimal('gG69LBEUZ/E=', 140, -1000, 1000),DecodeDecimal('gG69LBEUZ/E=', 140, -1000, 1000));
    question.num = 6;
    question.answers.length = 0;
    question.shortTextQuestion = "Relaciona cada determinacion con su correcto fundamento quimico ";
    question.noChoice = false;
    for (i = 0; i < orderLeft5.length; i++)
    {
        choice = new Array(2);;
        choice[0] = GetSelectedItemLeft("idDD5", i);
        choice[1] = GetSelextedItemRight("idDD5", i);
        if (choice[1]==='') question.noChoice=true;
        valuation = new Array();
        for (j = 0; j < listLeft5.length; j++)
        {
            if (listLeft5[j] === choice[0])
            {
                valuation.push(listRight5[j]);
            }
        }
        answer = new Answer(choice, valuation, 1, 0, '');
        question.answers.push(answer);
    }
    return question;

}


/* Code generated function */
function ClearQuestion6()
{
    ClearMatching("idDD5", 0);
    ClearMatching("idDD5", 1);
    ClearMatching("idDD5", 2);
    ClearMatching("idDD5", 3);
    ClearMatching("idDD5", 4);
    ClearMatching("idDD5", 5);
    ClearMatching("idDD5", 6);
    ClearMatching("idDD5", 7);
    ClearMatching("idDD5", 8);
    ClearMatching("idDD5", 9);
    ClearMatching("idDD5", 10);
    ClearMatching("idDD5", 11);
    ClearMatching("idDD5", 12);
    ClearMatching("idDD5", 13);
    ClearMatching("idDD5", 14);
    ClearMatching("idDD5", 15);
    ClearMatching("idDD5", 16);
    ClearMatching("idDD5", 17);
    ClearMatching("idDD5", 18);
    ClearMatching("idDD5", 19);
    ClearMatching("idDD5", 20);
    ClearMatching("idDD5", 21);
    ClearMatching("idDD5", 22);
    ClearMatching("idDD5", 23);
    ClearMatching("idDD5", 24);
    ClearMatching("idDD5", 25);
    ClearMatching("idDD5", 26);
    ClearMatching("idDD5", 27);
    ClearMatching("idDD5", 28);
    ClearMatching("idDD5", 29);
    ClearMatching("idDD5", 30);
    ClearMatching("idDD5", 31);
    ClearMatching("idDD5", 32);
    ClearMatching("idDD5", 33);

}


/* Code generated function */
function CreateListLeft5()
{
    this.length = 34;
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

}

/* Code generated function */
function CreateListRight5()
{
    this.length = 34;
    this[0] = unescape(DecodeString("S4s86KDpy4JKL4GU"));
    this[1] = unescape(DecodeString("9n8hPDHXMSA="));
    this[2] = unescape(DecodeString("SfuWmwqUIOU="));
    this[3] = unescape(DecodeString("k/rTHm94254="));
    this[4] = unescape(DecodeString("DEVIR06HESY="));
    this[5] = unescape(DecodeString("+avY4WSfndE="));
    this[6] = unescape(DecodeString("ZOiEjIfd9wY="));
    this[7] = unescape(DecodeString("hdPjaulSapw="));
    this[8] = unescape(DecodeString("8BTYRoj572w="));
    this[9] = unescape(DecodeString("mekC/O7DeVY="));
    this[10] = unescape(DecodeString("JsOxrZZxpvY="));
    this[11] = unescape(DecodeString("09kT/2TRKb8="));
    this[12] = unescape(DecodeString("Zo/rqvtxtBPvJzJb"));
    this[13] = unescape(DecodeString("fZCFPBXuSus="));
    this[14] = unescape(DecodeString("5JK3I3g6Z31ABllj"));
    this[15] = unescape(DecodeString("QbuawydkC8Q="));
    this[16] = unescape(DecodeString("56yO9Ipuh0k="));
    this[17] = unescape(DecodeString("cJx6dV0fMDI="));
    this[18] = unescape(DecodeString("yhcR1g2sjhU="));
    this[19] = unescape(DecodeString("PM/CGtVRq0o="));
    this[20] = unescape(DecodeString("J5dw5T+bD6w="));
    this[21] = unescape(DecodeString("TOSk7pw/Jt+cTmqT"));
    this[22] = unescape(DecodeString("GsI3yP1PjkPuDVlY"));
    this[23] = unescape(DecodeString("EP/SCYIaSbs="));
    this[24] = unescape(DecodeString("uibNQmUKEr4="));
    this[25] = unescape(DecodeString("YpX+KfUdD6I="));
    this[26] = unescape(DecodeString("mqe2weu5p8M="));
    this[27] = unescape(DecodeString("/Z6P4RDOc3A="));
    this[28] = unescape(DecodeString("c5BzBK5ulSg="));
    this[29] = unescape(DecodeString("WJkPbjHKOtg="));
    this[30] = unescape(DecodeString("By5mLeZ+TJE="));
    this[31] = unescape(DecodeString("fsOJUAgGxuM="));
    this[32] = unescape(DecodeString("Ei78mTTqy1k="));
    this[33] = unescape(DecodeString("yL24+i7cvO4="));

}

/* Code generated function */
function CreateListLeftHtml5()
{
    this.length = 34;
    this[0] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">Aspartato o Alanina pasan amino a fosfato de piridoxal que con la ayuda de .........lo ceden al </span><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">a-cetoglutarato)</span><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\"> &gt;</span><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\"> </span><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\"> glutamato + OAA o piruvato &gt;   NADH+H  en M&#225;lico o lactato DH &gt;</span><span style=\"background-color:#FFFFFF;font-family:Wingdings;font-size:12pt;\"> </span><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">malato o lactato + NAD+. </span><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">?A340 nm de NADH +H = AE</span></p></span>';
    this[1] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">p-nitrofenilfosfato (incoloro)  desfosforilacion por......... p-nitrofenol (amarillo) cuya A405 =AE</span></p></span>';
    this[2] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">........</span><span style=\"font-family:Times New Roman;font-size:12pt;\"> </span><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">e</span><span style=\"font-family:Times New Roman;font-size:12pt;\">n medio alcalino transfiere el </span><span style=\"font-family:Times New Roman;font-size:12pt;\">?-glutamilo de ?-glutamil-3-carboxi-4-nitroanilida  a la glicilglicina dando L-?-glutamil-glicilglicina y 5-amino-2-nitrobenzoato cuyo  </span><span style=\"font-family:Times New Roman;font-size:12pt;\">^ A405 =AE</span></p></span>';
    this[3] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">=BT-BD</span></p></span>';
    this[4] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">M&#233;todo de Jendrasik-Grof &#225;cido sulfan&#237;lico + nitrito de sodio &gt; &#225;cido sulfan&#237;lico diazotado (diazorreactivo  reactivo de Ehrlich) quien reaciona con ..... &gt; azobilirrubinas verdes   A546= .......</span></p></span>';
    this[5] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">M&#233;todo de Jendrasik-Grof modificado: Aceleradores de reacci&#243;n cafe&#237;na y benzoato de Na que compiten por SA de BI en alb  &gt; alb +BI;  diazorreactivo (obtenido igual  que en BD)  reacciona con BD y BI &gt; azobilirrubinas rosadas   A578= ......</span></p></span>';
    this[6] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">Creatina + ATP +glucosa  &gt;hexoquinasa &gt; ADP + glucosa 6- fosfato &gt; en su DH y NADP+  &gt;gluconato +  NADPH+H  cuyo </span><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">^</span><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">A340 mm=AE</span></p></span>';
    this[7] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">inmunoinhibici&#243;n: Ac vs subunidad M de all isoenzimas cuantificar parte B igual que CK</span></p></span>';
    this[8] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">Piruvato + NADH+H &gt; ..........&gt; lactato + NAD+ </span><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">?</span><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\"> A340 nm de NADH+H =AE.</span></p></span>';
    this[9] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">Etilideno-7 glucosas- p-nitrofenol (pNP) &gt; .........&gt;  etilideno + pNP unidos a cierto n&#250;mero glucosas &gt; </span><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">a-glucosidasa </span><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">&gt;glucosas + pNP cuya A 405 =AE</span></p></span>';
    this[10] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">a -naftil-fosfato rojo claro </span><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">&gt; desfosforilacion por...... &gt; </span><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">a 1- naftol  reacciona con TR Fast Red en HCl </span><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">&gt; diazocompuesto rojo oscuro cuya A405=AE  Tartrato inhibe la prost&#225;tica dejando la total y la no prost&#225;tica (TRAP  tartrato resistente)</span></p></span>';
    this[11] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">...... &gt;Ureasa  &gt; CO2 +amoniaco quien reacciona con  </span><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">a-cetoglutarato + NADH + H+</span><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\"> &gt;Glutamato DH  &gt;glutamato + NAD+  cuya </span><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">?</span><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">A340 =cn amoniaco = cn......</span></p></span>';
    this[12] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">...........+ &#225;cido p&#237;crico  en NaOH &gt; complejo rojo de Janovsky cuyo </span><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">^</span><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\"> A520 =cn .... ...</span></p></span>';
    this[13] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">.........+H2O + O2 &gt;uricasa&gt; alatonina + H2O2 quien reacciona con acido 3-dimetilaminobenzoico + 4-aminofenazona +O2  &gt;peroxidasa &gt; qu&#237;noneimina roja cuyo </span><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">^</span><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">A520 = cn  .........</span></p></span>';
    this[14] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">Orina 1ra de la ma&#241;ana o de 24 hrs  Medir A de c inm  ....-Ac</span></p></span>';
    this[15] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">Colorimetrico verde de bromocresol es ani&#243;nico (Q+) + ......(Q-) &gt;complejo verde  cuya A604 o A625 = cn.......</span></p></span>';
    this[16] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">Reacci&#243;n de Biuret modificada por Henry: Pares e- libres  de N de 2 p&#233;ptidos + reactivo Biuret (CuSO4/NaOH) &gt; complejo de coordinaci&#243;n violeta Cuya A540= E-pept&#237;dicos (....)</span></p></span>';
    this[17] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">A pH 4.8 TRF libera f&#233;rrico quien forma un complejo amarillo con Ferene-S cuyo color = ....</span></p></span>';
    this[18] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">TIBC</span></p></span>';
    this[19] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">Abs de cinm ....-Ac</span></p></span>';
    this[20] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">.........:Saturar totalmente a TRF con F&#233;rrico para ver cu&#225;nto F&#233;rrico  puede fijar. = UIBC+ Fe-S</span></p>    <p>&nbsp;</p></span>';
    this[21] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">.....: mide el TRF no saturada con Ferrico =TIBC-FeS</span></p></span>';
    this[22] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">Lipoprote&#237;na &gt; detergente vs FL &gt; T.... o C .... &gt; oxidasa &gt; varios pasos &gt; dihidroxiacetona-fosfato (si es T....) </span><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">? 4-colestenona (si es C...) + H2O2 </span><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\"> quien  reacciona en Trinder con el 4 amino-fenazona  4-clorofeno y peroxidasa &gt; quinoneimina roja cuya  A500  = cn....</span></p></span>';
    this[23] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">=(C no HDL)- (TAG/5) </span></p></span>';
    this[24] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">Surfactante vs c- no HDL dejando C-HDL libre&gt; oxidasa &gt;  </span><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">? 4-colestenona + H2O2 quien reacciona en Trindrer </span></p></span>';
    this[25] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">=(CT)-(C-HDL)</span></p></span>';
    this[26] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">......Oxidasa (GOD) &gt;gluconato +  per&#243;xido de hidr&#243;geno &gt;peroxidasa &gt;H2O + O2 quien reacciona con la 4-amino-antipirina  y el 2,4 diclorofenol &gt; quinoneimina roja cuya A510 = cn..... </span></p></span>';
    this[27] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">Afinidad al boronato borato-colorante azul se une configuraciones cis-diol de .....&gt;lavado para eliminar lo no unido &gt; pp azul de ....  y pp rojo de Hb total</span></p></span>';
    this[28] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">ONPG incoloro &gt;</span><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">ß-galactosidasa dependiente de </span><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">.......</span><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\"> </span><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">&gt;galactosa + o-nitrofenol amarillo cuya A405 = cn ....</span></p></span>';
    this[29] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">......desplaza tiocianato de sal merc&#250;rica dando el perclorato y tiocianato quien reacciona con f&#233;rrico  &gt; tiocianato f&#233;rrico rojo cuya A436 = cn ....</span></p></span>';
    this[30] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">....+  tetrafenilborato de Na en NaOH &gt;complejo turbio cuya A578 = cn.....</span></p></span>';
    this[31] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">Carboxilatos de O-Cresolftaleina interaccionan i&#243;nicamente con ..... &gt;complejo violeta cuya A578 = cn .... </span></p></span>';
    this[32] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">......+ molibdato en &#225;cido sulf&#250;rico &gt; pol&#237;mero de fosfomolibdato  quien reacciona con el &#225;cido 1-amino-2-naftol-4-sulf&#243;nico &gt;complejo azul cuya A340 = cn ....</span></p></span>';
    this[33] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">....+ calmagita en NaOH &gt; complejo colorido cuya A520 = cn ....</span></p></span>';

}





