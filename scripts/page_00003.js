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

    var listLeft2;
    var listLeftHtml2;
    var listRight2;
    var orderLeft2;
    var orderRight2;



$(document).ready(function ()
{
	const questionIndex = 2;
	const questionTime = 0;

	PageLoad(questionIndex, questionTime);

	    listLeft2 = new CreateListLeft2();
    listLeftHtml2 = new CreateListLeftHtml2();
    listRight2 = new CreateListRight2();
    orderLeft2 = new ShuffleMatchingOrder(listLeft2.length);
    orderRight2 = new ShuffleMatchingOrder(listRight2.length);
    var hideLeftDropdown = false;
    var textHtml = CreateMatchingLists(listLeft2, listLeftHtml2, listRight2, orderLeft2, orderRight2, "idDD2", textSelect, hideLeftDropdown);
    $('#matching2').html(textHtml);
    var maxLeftSize = GetMaxSizeLeftColumn(listLeft2);
    var maxRightSize = GetMaxSizeRightColumn(listRight2);
    var leftWidth = maxLeftSize * 10;
    var rightWidth = maxRightSize * 10;
    ManageMatchingEvents(listLeft2, "idDD2", leftWidth, rightWidth, options.matchingLockLeftCol);
    SetDefaultLeftColumn(listLeft2, "idDD2", hideLeftDropdown);


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
function InitQuestion3()
{
    const type = QMAKE_MATCHING;
    const questionIndex = 2;
    var weight = DecodeNumber('JTQp9QK5nIQ=', 58, 0, 99999);
    var numOfAnswers = 18;
    var i, j;
    var answer;
    var choice, valuation;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('JTQp9QK5nIQ=', 58, -1000, 1000),DecodeDecimal('g8n4aWrGJBU=', 417, -1000, 1000),DecodeDecimal('g8n4aWrGJBU=', 417, -1000, 1000));
    question.num = 3;
    question.answers.length = 0;
    question.shortTextQuestion = "Relacione cada analito con su organo principal ";
    question.noChoice = false;
    for (i = 0; i < orderLeft2.length; i++)
    {
        choice = new Array(2);;
        choice[0] = GetSelectedItemLeft("idDD2", i);
        choice[1] = GetSelextedItemRight("idDD2", i);
        if (choice[1]==='') question.noChoice=true;
        valuation = new Array();
        for (j = 0; j < listLeft2.length; j++)
        {
            if (listLeft2[j] === choice[0])
            {
                valuation.push(listRight2[j]);
            }
        }
        answer = new Answer(choice, valuation, 1, 0, '');
        question.answers.push(answer);
    }
    return question;

}


/* Code generated function */
function ClearQuestion3()
{
    ClearMatching("idDD2", 0);
    ClearMatching("idDD2", 1);
    ClearMatching("idDD2", 2);
    ClearMatching("idDD2", 3);
    ClearMatching("idDD2", 4);
    ClearMatching("idDD2", 5);
    ClearMatching("idDD2", 6);
    ClearMatching("idDD2", 7);
    ClearMatching("idDD2", 8);
    ClearMatching("idDD2", 9);
    ClearMatching("idDD2", 10);
    ClearMatching("idDD2", 11);
    ClearMatching("idDD2", 12);
    ClearMatching("idDD2", 13);
    ClearMatching("idDD2", 14);
    ClearMatching("idDD2", 15);
    ClearMatching("idDD2", 16);
    ClearMatching("idDD2", 17);

}


/* Code generated function */
function CreateListLeft2()
{
    this.length = 18;
    this[0] = unescape(DecodeString("ktGjrPOSLEDtYQee"));
    this[1] = unescape(DecodeString("SgYR6bfNQ7c="));
    this[2] = unescape(DecodeString("k/rTHm94254="));
    this[3] = unescape(DecodeString("DEVIR06HESY="));
    this[4] = unescape(DecodeString("yqfnDF7fJbuYlBeBgMHz1fpGWKbFnfAl"));
    this[5] = unescape(DecodeString("8BTYRoj572w="));
    this[6] = unescape(DecodeString("mekC/O7DeVY="));
    this[7] = unescape(DecodeString("JsOxrZZxpvY="));
    this[8] = unescape(DecodeString("09kT/2TRKb8="));
    this[9] = unescape(DecodeString("Zo/rqvtxtBPvJzJb"));
    this[10] = unescape(DecodeString("JgOuVxbK/mGBGegf"));
    this[11] = unescape(DecodeString("fZCFPBXuSus="));
    this[12] = unescape(DecodeString("CoRKm0JIU6/Msisd"));
    this[13] = unescape(DecodeString("2nB7W5XOF9c="));
    this[14] = unescape(DecodeString("ReFte1micUw="));
    this[15] = unescape(DecodeString("WJkPbjHKOtg="));
    this[16] = unescape(DecodeString("By5mLeZ+TJE="));
    this[17] = unescape(DecodeString("dXbbhr+tyUqPm6KmpcOpjg=="));

}

/* Code generated function */
function CreateListRight2()
{
    this.length = 18;
    this[0] = unescape(DecodeString("LBO3Vt7+TQJNSY0OdH65LRq3oYo52orBFPOYFctkwuc="));
    this[1] = unescape(DecodeString("WZ83OtU9YicESAn2jqIq0twqN90zTBzR3khR7gRGlt1czcuoQm2l0Q=="));
    this[2] = unescape(DecodeString("QV1hJ4lOTP/Bri+8/oTpbgvNyZcmfns9+zNMcOisW+V7J3gA"));
    this[3] = unescape(DecodeString("JeS4VDkvPQjSKmXT"));
    this[4] = unescape(DecodeString("F1NI67vZ1tsvZjc6vdMP+g=="));
    this[5] = unescape(DecodeString("X3hj9glhCKSiojyAiYdttcQObOVrtOcyVNSrzwxuUD0="));
    this[6] = unescape(DecodeString("YbsCXSY92g5iphlqfPrSdqMstlqJRvtbHUZ+zgHqIMQ="));
    this[7] = unescape(DecodeString("I9LSb/voyB+RkBxK"));
    this[8] = unescape(DecodeString("s5JuOUPqeLE="));
    this[9] = unescape(DecodeString("JiA4/OgSj50n75uDW3tt4Q7VAFk="));
    this[10] = unescape(DecodeString("nCn9Wks3q6Lc+gy4ZLUuXftahVNsrg4XwP2FCwS0LykzxSYacyQ63RUNFeOrLoq/BErFjDv8rNmc2VxLIeKnUjnvUQxsruwqvA/L8EkDZSs="));
    this[11] = unescape(DecodeString("RQ5bYMRervymTsNoo4FnC049lAQKxUan2kf3/537bAKIT0MmBnpe08P1pCDUCYIIT/vlUbNfSMrDxJdm95n6uOGstMAoR8nUBTuL2BrFBSpz1VX2"));
    this[12] = unescape(DecodeString("20ZekzIdZkXHJAEJN5h+QsCXWaMoL51wRSE1fnBIWXg="));
    this[13] = unescape(DecodeString("psiytu0OiVijtVSsdFtSsw=="));
    this[14] = unescape(DecodeString("dqViOEfIQtMd3u5ScqRwHtPoVeyPKPkNw6dNaokNNmF/ZUz4"));
    this[15] = unescape(DecodeString("XU3+fDgdEE+ZX7PmDWFsfi504MhcbvjiSj4aUg=="));
    this[16] = unescape(DecodeString("stiVjAcZ5ecnPXLfyGfwUi63z7HZAb6Xyq1bCStOZEAqg9e+PJYy2sTCghNi+iR0chhSEA=="));
    this[17] = unescape(DecodeString("iBaM+oioTzo="));

}

/* Code generated function */
function CreateListLeftHtml2()
{
    this.length = 18;

}





