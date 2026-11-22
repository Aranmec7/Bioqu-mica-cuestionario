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

    var listLeft4;
    var listLeftHtml4;
    var listRight4;
    var orderLeft4;
    var orderRight4;



$(document).ready(function ()
{
	const questionIndex = 4;
	const questionTime = 0;

	PageLoad(questionIndex, questionTime);

	    listLeft4 = new CreateListLeft4();
    listLeftHtml4 = new CreateListLeftHtml4();
    listRight4 = new CreateListRight4();
    orderLeft4 = new ShuffleMatchingOrder(listLeft4.length);
    orderRight4 = new ShuffleMatchingOrder(listRight4.length);
    var hideLeftDropdown = false;
    var textHtml = CreateMatchingLists(listLeft4, listLeftHtml4, listRight4, orderLeft4, orderRight4, "idDD4", textSelect, hideLeftDropdown);
    $('#matching4').html(textHtml);
    var maxLeftSize = GetMaxSizeLeftColumn(listLeft4);
    var maxRightSize = GetMaxSizeRightColumn(listRight4);
    var leftWidth = maxLeftSize * 10;
    var rightWidth = maxRightSize * 10;
    ManageMatchingEvents(listLeft4, "idDD4", leftWidth, rightWidth, options.matchingLockLeftCol);
    SetDefaultLeftColumn(listLeft4, "idDD4", hideLeftDropdown);


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
function InitQuestion5()
{
    const type = QMAKE_MATCHING;
    const questionIndex = 4;
    var weight = DecodeNumber('lMd7tZ99SxI=', 186, 0, 99999);
    var numOfAnswers = 48;
    var i, j;
    var answer;
    var choice, valuation;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('lMd7tZ99SxI=', 186, -1000, 1000),DecodeDecimal('CBJqenQI7o4=', 186, -1000, 1000),DecodeDecimal('CBJqenQI7o4=', 186, -1000, 1000));
    question.num = 5;
    question.answers.length = 0;
    question.shortTextQuestion = "Relacione cada analito con su valor de referencia en hombre";
    question.noChoice = false;
    for (i = 0; i < orderLeft4.length; i++)
    {
        choice = new Array(2);;
        choice[0] = GetSelectedItemLeft("idDD4", i);
        choice[1] = GetSelextedItemRight("idDD4", i);
        if (choice[1]==='') question.noChoice=true;
        valuation = new Array();
        for (j = 0; j < listLeft4.length; j++)
        {
            if (listLeft4[j] === choice[0])
            {
                valuation.push(listRight4[j]);
            }
        }
        answer = new Answer(choice, valuation, 1, 0, '');
        question.answers.push(answer);
    }
    return question;

}


/* Code generated function */
function ClearQuestion5()
{
    ClearMatching("idDD4", 0);
    ClearMatching("idDD4", 1);
    ClearMatching("idDD4", 2);
    ClearMatching("idDD4", 3);
    ClearMatching("idDD4", 4);
    ClearMatching("idDD4", 5);
    ClearMatching("idDD4", 6);
    ClearMatching("idDD4", 7);
    ClearMatching("idDD4", 8);
    ClearMatching("idDD4", 9);
    ClearMatching("idDD4", 10);
    ClearMatching("idDD4", 11);
    ClearMatching("idDD4", 12);
    ClearMatching("idDD4", 13);
    ClearMatching("idDD4", 14);
    ClearMatching("idDD4", 15);
    ClearMatching("idDD4", 16);
    ClearMatching("idDD4", 17);
    ClearMatching("idDD4", 18);
    ClearMatching("idDD4", 19);
    ClearMatching("idDD4", 20);
    ClearMatching("idDD4", 21);
    ClearMatching("idDD4", 22);
    ClearMatching("idDD4", 23);
    ClearMatching("idDD4", 24);
    ClearMatching("idDD4", 25);
    ClearMatching("idDD4", 26);
    ClearMatching("idDD4", 27);
    ClearMatching("idDD4", 28);
    ClearMatching("idDD4", 29);
    ClearMatching("idDD4", 30);
    ClearMatching("idDD4", 31);
    ClearMatching("idDD4", 32);
    ClearMatching("idDD4", 33);
    ClearMatching("idDD4", 34);
    ClearMatching("idDD4", 35);
    ClearMatching("idDD4", 36);
    ClearMatching("idDD4", 37);
    ClearMatching("idDD4", 38);
    ClearMatching("idDD4", 39);
    ClearMatching("idDD4", 40);
    ClearMatching("idDD4", 41);
    ClearMatching("idDD4", 42);
    ClearMatching("idDD4", 43);
    ClearMatching("idDD4", 44);
    ClearMatching("idDD4", 45);
    ClearMatching("idDD4", 46);
    ClearMatching("idDD4", 47);

}


/* Code generated function */
function CreateListLeft4()
{
    this.length = 48;
    this[0] = unescape(DecodeString("rfN/ryaMQas="));
    this[1] = unescape(DecodeString("/eKrRWDxUqg="));
    this[2] = unescape(DecodeString("9n8hPDHXMSA="));
    this[3] = unescape(DecodeString("SfuWmwqUIOU="));
    this[4] = unescape(DecodeString("k/rTHm94254="));
    this[5] = unescape(DecodeString("DEVIR06HESY="));
    this[6] = unescape(DecodeString("+avY4WSfndE="));
    this[7] = unescape(DecodeString("ZOiEjIfd9wY="));
    this[8] = unescape(DecodeString("hdPjaulSapw="));
    this[9] = unescape(DecodeString("8BTYRoj572w="));
    this[10] = unescape(DecodeString("ckk4mg5lT8tqv9Y9"));
    this[11] = unescape(DecodeString("mekC/O7DeVY="));
    this[12] = unescape(DecodeString("D6JccmGS9msC9BlF"));
    this[13] = unescape(DecodeString("JsOxrZZxpvY="));
    this[14] = unescape(DecodeString("Xdy5rbkL1gKtKWRj"));
    this[15] = unescape(DecodeString("xa4pNDA0oBa4IOC2"));
    this[16] = unescape(DecodeString("/PtaXajTlWA="));
    this[17] = unescape(DecodeString("2NNYRPqqO1awe1bdZ84Jsg=="));
    this[18] = unescape(DecodeString("5+k+p62kScLbKE9F"));
    this[19] = unescape(DecodeString("DYAlhyfNvy5TcLHB"));
    this[20] = unescape(DecodeString("uubALNMkd9M="));
    this[21] = unescape(DecodeString("JgOuVxbK/mGBGegf"));
    this[22] = unescape(DecodeString("rRYA+FwMWX0="));
    this[23] = unescape(DecodeString("+TvCAK1/Bw8="));
    this[24] = unescape(DecodeString("s4kRz0XfUY8="));
    this[25] = unescape(DecodeString("mVdSQTpcjYg="));
    this[26] = unescape(DecodeString("QbuawydkC8Q="));
    this[27] = unescape(DecodeString("56yO9Ipuh0k="));
    this[28] = unescape(DecodeString("cJx6dV0fMDI="));
    this[29] = unescape(DecodeString("yhcR1g2sjhU="));
    this[30] = unescape(DecodeString("PM/CGtVRq0o="));
    this[31] = unescape(DecodeString("J5dw5T+bD6w="));
    this[32] = unescape(DecodeString("IJTFpFYxmjU="));
    this[33] = unescape(DecodeString("FEd+sDV4AeM="));
    this[34] = unescape(DecodeString("0GPmMjhmHJI="));
    this[35] = unescape(DecodeString("EP/SCYIaSbs="));
    this[36] = unescape(DecodeString("thphpM+2LTA="));
    this[37] = unescape(DecodeString("1Len4xN8v4M="));
    this[38] = unescape(DecodeString("YpX+KfUdD6I="));
    this[39] = unescape(DecodeString("A77+IL3cLgu+UOZ3sTd9mw=="));
    this[40] = unescape(DecodeString("Dz8TiqahHN1Ir+zKF6DcjQ=="));
    this[41] = unescape(DecodeString("/Z6P4RDOc3A="));
    this[42] = unescape(DecodeString("5XUcAT/AS8HR+CnN"));
    this[43] = unescape(DecodeString("aXg1Hu3z3JQlgHsy"));
    this[44] = unescape(DecodeString("FDQ3LASZITKEvxfI"));
    this[45] = unescape(DecodeString("gMkGpVuHtMxL0lFlkwXp1A=="));
    this[46] = unescape(DecodeString("N7ngGbrMEIQ8FS5l"));
    this[47] = unescape(DecodeString("7blrSHzoS/o7No9CRJ/B4g=="));

}

/* Code generated function */
function CreateListRight4()
{
    this.length = 48;
    this[0] = unescape(DecodeString("irZwN/uUg1A="));
    this[1] = unescape(DecodeString("6YHgdfFvjZU="));
    this[2] = unescape(DecodeString("lp2bLwDTk3z8TQdD"));
    this[3] = unescape(DecodeString("MupACAn/2jigwC2K"));
    this[4] = unescape(DecodeString("MlNFjBR3TiIX4GeM"));
    this[5] = unescape(DecodeString("FIgDTbLRuveYtvoU"));
    this[6] = unescape(DecodeString("EE+5pjQj1QDpFD8rWJMJI7WIE8pzow8y"));
    this[7] = unescape(DecodeString("1wKBwF76/FrB47TE"));
    this[8] = unescape(DecodeString("ljuzg1X2sr8="));
    this[9] = unescape(DecodeString("I0qPNsqCTui1tg4l"));
    this[10] = unescape(DecodeString("3el9Gy7SGFAMQpt9"));
    this[11] = unescape(DecodeString("D6N1R9CyhFMkWtDeLUWoE/wtgPAbAWrcrg9WTT7QebA="));
    this[12] = unescape(DecodeString("MwZFeHRWt69JGAuz"));
    this[13] = unescape(DecodeString("om0TtMhmxNbTe07EmTRkCWWbCG8ztk1wMgVGUjre31rQGBvn"));
    this[14] = unescape(DecodeString("M/iAG9u1T/owMkgG"));
    this[15] = unescape(DecodeString("cKrWSzBK98Ah1iH7gLwFsQ=="));
    this[16] = unescape(DecodeString("gtxY7LLodYYGfYUb"));
    this[17] = unescape(DecodeString("WDLYSMk8WNRj0gf/UlFqQw=="));
    this[18] = unescape(DecodeString("y4yIIi8RIWhhlG9tPgSsaA=="));
    this[19] = unescape(DecodeString("2Bb/8JNNGlzFbp9jd44C6HjkNLsDBrNam4NnLlKljQP98urp2aT8GgeC6ck5rSxP"));
    this[20] = unescape(DecodeString("sCEUmnezb6teWJjCOR4HVLRU+4cztNUqnwHIA7W33r/WHgOLj4d/zLEe/T6npb4A"));
    this[21] = unescape(DecodeString("BM34tk/Iha7iPqEqL1yYiw=="));
    this[22] = unescape(DecodeString("xDKM1U+iMlFvvoeMPAyisw=="));
    this[23] = unescape(DecodeString("8DfrDJEyDhA8ewp7"));
    this[24] = unescape(DecodeString("m/jcufCLMY0="));
    this[25] = unescape(DecodeString("sCxnitJuTDUUN7iP"));
    this[26] = unescape(DecodeString("NXQ8CfT92p9+qx4t"));
    this[27] = unescape(DecodeString("G+mmxYyyaLua9tzh"));
    this[28] = unescape(DecodeString("7DjAE7V0THSkrZyLOoduag=="));
    this[29] = unescape(DecodeString("X3FLHqB9UGuWPqbZjoYW3g=="));
    this[30] = unescape(DecodeString("7EUbA+Pna8+Tv5riHlt0EQ=="));
    this[31] = unescape(DecodeString("XfKXaivFj9B8yGUgNAyZqYOxWks="));
    this[32] = unescape(DecodeString("PJhPFE6AOIRR5wVAK1jwAaeWGZ8="));
    this[33] = unescape(DecodeString("UzUE1C7ghH4OXuR3"));
    this[34] = unescape(DecodeString("6ZqB0/8WmsBbG/l7"));
    this[35] = unescape(DecodeString("UzUE1C7ghH4OXuR3"));
    this[36] = unescape(DecodeString("pG2u6BdQHV4T3ONl6g2kI+0GjCiNCEgDFr3KmgEDI+MCNzWRKPAyNQ=="));
    this[37] = unescape(DecodeString("taAgK9xdz0/wp5xigtEK2w=="));
    this[38] = unescape(DecodeString("Zn5p2TahcTGWkAbr"));
    this[39] = unescape(DecodeString("m/h2EbT/fIaHzIps"));
    this[40] = unescape(DecodeString("qZG9PX/zqYQ="));
    this[41] = unescape(DecodeString("pHfZt7xVBwDyfO5PyxeZWnGATXBeZ6IeUo799tr3MbMZ8mpLASJD0iRdio6WUtRmUDXgNh/uB8c="));
    this[42] = unescape(DecodeString("oH2FAAiVM3GQe6NDNW8VPPGnIWHk/FCu"));
    this[43] = unescape(DecodeString("9H4I1PAui1RW93wOP2mcX82ac+Yn6TkP"));
    this[44] = unescape(DecodeString("eM1Ing5nVuxcfU6hvotyerS+eP8RIz2u"));
    this[45] = unescape(DecodeString("spmeDIhRsjhtCN6EopwiTQ=="));
    this[46] = unescape(DecodeString("teiLWZO4r9Sj8RU8"));
    this[47] = unescape(DecodeString("FGhIb9Zh0l1EEan2fJyQLw=="));

}

/* Code generated function */
function CreateListLeftHtml4()
{
    this.length = 48;

}





