/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function ($, Edge, compId) {
	
	var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function (symbolName) {
	   	Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
        sym.$("Stage").css({"box-shadow":"0 0 10px 3px"});
        
        sym.getSymbol("Slide_00").play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();
         sym.getSymbol("Slide_01").stop(0);
         sym.getSymbol("Slide_00").play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         sym.getSymbol("Slide_01").play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${goToHome}", "click", function(sym, e) {
         sym.getComposition().getStage().playReverse(749);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${GSK}", "click", function(sym, e) {
         sym.$("References").animate({top:0},500);

      });
      //Edge binding end

      

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
	
	
   //Edge symbol: 'Slide_00'
   (function(symbolName) {   
   
      

      Symbol.bindElementAction(compId, symbolName, "${goToNext}", "click", function(sym, e) {
         sym.getParentSymbol().play();

      });
      //Edge binding end

   })("Slide_00");
   //Edge symbol end:'Slide_00'

   //=========================================================
   
   //Edge symbol: 'Slide_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${backToWelcome}", "click", function(sym, e) {
         sym.getParentSymbol().playReverse();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${S1_pic1}", "click", function(sym, e) {
         sym.play("about");
         sym.getSymbol("Slide_02").play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${S1_pic2}", "click", function(sym, e) {
         sym.play("burden");
         sym.getSymbol("Slide_03").play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${S1_pic3}", "click", function(sym, e) {
         sym.play("symptoms");
         sym.getSymbol("Slide_04").play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${S1_pic4}", "click", function(sym, e) {
         sym.play("diag");
         sym.getSymbol("Slide_05").play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${S1_pic5}", "click", function(sym, e) {
         sym.play("how");
         sym.getSymbol("Slide_06").play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${S1_pic6}", "click", function(sym, e) {
         sym.play("management");
         sym.getSymbol("Slide_08").play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Assessment_Btn}", "click", function(sym, e) {
         sym.play("how");
         var Slide_07 = sym.getSymbol("Slide_06").$("Slide_07").show();
         Slide_07.animate({left:0},500);
         var Slide_07_1 = sym.getSymbol("Slide_06").getSymbol("Slide_07").$("Slide_07_1");
         Slide_07_1.show(500);

      });
      //Edge binding end

      })("Slide_01");
   //Edge symbol end:'Slide_01'

   //=========================================================
   
   //Edge symbol: 'Slide_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${backToWelcome}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("Slide_01").play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Assessment_Btn}", "click", function(sym, e) {
         sym.getParentSymbol().play("how");
         var Slide_07 = sym.getParentSymbol().getSymbol("Slide_06").$("Slide_07").show();
         Slide_07.animate({left:0},500);
         var Slide_07_1 = sym.getParentSymbol().getSymbol("Slide_06").getSymbol("Slide_07").$("Slide_07_1");
         Slide_07_1.show(500);
         

      });
      //Edge binding end

      })("Slide_02");
   //Edge symbol end:'Slide_02'

   //=========================================================
   
   //Edge symbol: 'Slide_1'
   (function(symbolName){   
   
      Symbol.bindElementAction(compId, symbolName, "${backToWelcome}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("Slide_01").play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Assessment_Btn}", "click", function(sym, e) {
         sym.getParentSymbol().play("how");
         var Slide_07 = sym.getParentSymbol().getSymbol("Slide_06").$("Slide_07").show();
         Slide_07.animate({left:0},500);
         var Slide_07_1 = sym.getParentSymbol().getSymbol("Slide_06").getSymbol("Slide_07").$("Slide_07_1");
         Slide_07_1.show(500);

      });
      //Edge binding end

         })("Slide_03");
   //Edge symbol end:'Slide_03'

   //=========================================================
   
   //Edge symbol: 'Slide_1'
   (function (symbolName){   
      Symbol.bindElementAction(compId, symbolName, "${backToWelcome}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("Slide_01").play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${S4_01}", "click", function(sym, e) {
         sym.$("Slide_04_1").show(500);
         sym.getSymbol("Slide_04_1").play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text4}", "click", function(sym, e) {
         sym.$("Slide_04_1").show(500);
         sym.getSymbol("Slide_04_1").play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${S4_02}", "click", function(sym, e) {
         sym.$("Slide_04_2").show(500);
         sym.getSymbol("Slide_04_2").play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${S4_03}", "click", function(sym, e) {
         sym.$("Slide_04_3").show(500);
         sym.getSymbol("Slide_04_3").play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${S4_04}", "click", function(sym, e) {
         sym.$("Slide_04_4").show(500);
         sym.getSymbol("Slide_04_4").play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text4Copy}", "click", function(sym, e) {
         sym.$("Slide_04_2").show(500);
         sym.getSymbol("Slide_04_2").play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text4Copy2}", "click", function(sym, e) {
         sym.$("Slide_04_3").show(500);
         sym.getSymbol("Slide_04_3").play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text4Copy3}", "click", function(sym, e) {
         sym.$("Slide_04_4").show(500);
         sym.getSymbol("Slide_04_4").play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Assessment_Btn}", "click", function(sym, e) {
         sym.getParentSymbol().play("how");
         var Slide_07 = sym.getParentSymbol().getSymbol("Slide_06").$("Slide_07").show();
         Slide_07.animate({left:0},500);
         var Slide_07_1 = sym.getParentSymbol().getSymbol("Slide_06").getSymbol("Slide_07").$("Slide_07_1");
         Slide_07_1.show(500);

      });
      //Edge binding end

         })("Slide_04");
   //Edge symbol end:'Slide_04'

   //=========================================================
   
   //Edge symbol: 'Slide_1'
   (function(symbolName){   
   
      Symbol.bindElementAction(compId, symbolName, "${backToSymptoms}", "click", function(sym, e) {
         sym.getParentSymbol().$("Slide_04_1").hide(500);

      });
      //Edge binding end

         })("Slide_04_1");
   //Edge symbol end:'Slide_04_1'

   //=========================================================
   
   //Edge symbol: 'Slide_1'
   (function(symbolName){   
   
      Symbol.bindElementAction(compId, symbolName, "${backToSymptoms}", "click", function(sym, e) {
         sym.getParentSymbol().$("Slide_04_2").hide(500);

      });
      //Edge binding end

            })("Slide_04_2");
   //Edge symbol end:'Slide_04_2'

   //=========================================================
   
   //Edge symbol: 'Slide_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${backToSymptoms}", "click", function(sym, e) {
         sym.getParentSymbol().$("Slide_04_3").hide(500);

      });
      //Edge binding end

            })("Slide_04_3");
   //Edge symbol end:'Slide_04_3'

   //=========================================================
   
   //Edge symbol: 'Slide_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${backToSymptoms}", "click", function(sym, e) {
         sym.getParentSymbol().$("Slide_04_4").hide(500);

      });
      //Edge binding end

            })("Slide_04_4");
   //Edge symbol end:'Slide_04_4'

   //=========================================================
   
   //Edge symbol: 'Slide_04_5'
   (function(symbolName) {   
   
      

      Symbol.bindElementAction(compId, symbolName, "${backToWelcome}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("Slide_01").play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${S9_01}", "click", function(sym, e) {
         sym.$("Slide_05_1").show(500);
         sym.getSymbol("Slide_05_1").play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${S9_02}", "click", function(sym, e) {
         sym.$("Slide_05_2").show(500);
         sym.getSymbol("Slide_05_2").play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${S9_03}", "click", function(sym, e) {
         sym.$("Slide_05_3").show(500);
         sym.getSymbol("Slide_05_3").play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Assessment_Btn}", "click", function(sym, e) {
         sym.getParentSymbol().play("how");
         var Slide_07 = sym.getParentSymbol().getSymbol("Slide_06").$("Slide_07").show();
         Slide_07.animate({left:0},500);
         var Slide_07_1 = sym.getParentSymbol().getSymbol("Slide_06").getSymbol("Slide_07").$("Slide_07_1");
         Slide_07_1.show(500);

      });
      //Edge binding end

            })("Slide_05");
   //Edge symbol end:'Slide_05'

   //=========================================================
   
   //Edge symbol: 'Slide_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${backToDiagnosis}", "click", function(sym, e) {
         sym.getParentSymbol().$("Slide_05_1").hide(500);

      });
      //Edge binding end

            })("Slide_05_1");
   //Edge symbol end:'Slide_05_1'

   //=========================================================
   
   //Edge symbol: 'Slide_05_2'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${backToDiagnosis}", "click", function(sym, e) {
         sym.getParentSymbol().$("Slide_05_2").hide(500);

      });
      //Edge binding end

            })("Slide_05_2");
   //Edge symbol end:'Slide_05_2'

   //=========================================================
   
   //Edge symbol: 'Slide_05_3'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${backToDiagnosis}", "click", function(sym, e) {
         sym.getParentSymbol().$("Slide_05_3").hide(500);

      });
      //Edge binding end

            })("Slide_05_3");
   //Edge symbol end:'Slide_05_3'

   //=========================================================
   
   //Edge symbol: 'Slide_05_4'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${backToWelcome}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("Slide_01").play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${goTohow2}", "click", function(sym, e) {
         sym.$("Slide_07").show().animate({left:0},500);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${goTohow2_txtBtn}", "click", function(sym, e) {
         sym.$("Slide_07").show().animate({left:0},500);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Assessment_Btn}", "click", function(sym, e) {
         sym.$("Slide_07").show().animate({left:0},500);
         var Slide_07_1 = sym.getSymbol("Slide_07").$("Slide_07_1");
         Slide_07_1.show(500);
         
         

      });
      //Edge binding end

            })("Slide_06");
   //Edge symbol end:'Slide_06'

   //=========================================================
   
   //Edge symbol: 'Slide_06_A'
   (function(symbolName) {   
   
   })("Slide_06_A");
   //Edge symbol end:'Slide_06_A'

   //=========================================================
   
   //Edge symbol: 'Slide_06_A_1'
   (function(symbolName) {   
   
   })("Slide_06_B");
   //Edge symbol end:'Slide_06_B'

   //=========================================================
   
   //Edge symbol: 'Slide_06_B_1'
   (function(symbolName) {   
   
   })("Slide_06_C");
   //Edge symbol end:'Slide_06_C'

   //=========================================================
   
   //Edge symbol: 'Slide_06_C_1'
   (function(symbolName) {   
   
   })("Slide_06_D");
   //Edge symbol end:'Slide_06_D'

   //=========================================================
   
   //Edge symbol: 'Slide_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${goToBack}", "click", function(sym, e) {
         sym.getParentSymbol().$("Slide_07").hide().animate({left:800},500);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${S14_01}", "click", function(sym, e) {
         sym.$("Slide_07_1").show(500);
         sym.getSymbol("Slide_07_1").play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${S14_02}", "click", function(sym, e) {
         sym.$("Slide_07_2").show(500);
         sym.getSymbol("Slide_07_2").play(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${S14_03}", "click", function(sym, e) {
         sym.$("Slide_07_3").show(500);
         sym.getSymbol("Slide_07_3").play(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${S14_04}", "click", function(sym, e) {
         sym.$("Slide_07_4").show(500);
         sym.getSymbol("Slide_07_4").play(0);
         

      });
      //Edge binding end

            })("Slide_07");
   //Edge symbol end:'Slide_07'

   //=========================================================
   
   //Edge symbol: 'Slide_1'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {

// Patients Names and date&time
sym.$("yourNameBox").html('<input type="text" id="patientName" placeholder="type your name..." class="patientBox">');

sym.$("todaysDateBox").html('<input type="date" id="todayDate" value="check date..." class="patientBox"></input>');

		  // question 1
sym.$("ques1").html('<p id="ques1" style=\"font-family:Oswald-Light;font-size:15px;line-height:40px;color:gray;margin-left:20px;margin-right:20px;\">' +
         '<span>I never cough</span>'+
         '<span style=\"float:right;\">I cough all the time</span></p>');

         // question 2
sym.$("ques2").html('<p id="ques2" style=\"font-family:Oswald-Light;font-size:15px;line-height:18px;color:gray;margin-left:20px;margin-right:20px;margin-top:2px;\">' +
         '<span>I have no phlegm (mucus)<br>'+
         'in my chest at all</span>'+
         '<span style=\"float:right;margin-top:-18px;\">My chest is completely<br>'+
         'full of phlegm (mucus)</span></p>');

         // question 3
sym.$("ques3").html('<p id="ques3" style=\"font-family:Oswald-Light;font-size:15px;line-height:18px;color:gray;margin-left:20px;margin-right:20px;margin-top:2px;\">' +
         '<span>My chest does not<br>'+
         'feel tight at all</span>'+
         '<span style=\"float:right;margin-top:-10px;\">My chest feels very tight'+
         '</span></p>');

         // question 4
sym.$("ques4").html('<p id="ques4" style=\"font-family:Oswald-Light;font-size:12px;line-height:15px;color:gray;margin-left:20px;margin-right:20px;margin-top:7px;\">' +
         '<span>When i walk up a hill or one flight<br>'+
         'of stairs i am not breathless</span>'+
         '<span style=\"float:right;margin-top:-18px;font-size:11px;\">When i walk up a hill or one flight<br>'+
         'of stairs i am very breathless</span></p>');

         // question 5
sym.$("ques5").html('<p id="ques5" style=\"font-family:Oswald-Light;font-size:15px;line-height:18px;color:gray;margin-left:20px;margin-right:20px;margin-top:2px;\">' +
         '<span>I am not limited doing any<br>'+
         'activities at home</span>'+
         '<span style=\"float:right;margin-top:-18px;\">I am very limited doing<br>'+
         'activities at home</span></p>');

         // question 6
sym.$("ques6").html('<p id="ques6" style=\"font-family:Oswald-Light;font-size:11px;line-height:15px;color:gray;margin-left:20px;margin-right:20px;margin-top:7px;\">' +
         '<span>I am confident leaving my home<br>'+
         'despite my lung condition</span>'+
         '<span style=\"float:right;margin-top:-18px;\">I am confident leaving my home<br>'+
         'because of my lung condition</span></p>');

         // question 7
sym.$("ques7").html('<p id="ques7" style=\"font-family:Oswald-Light;font-size:15px;line-height:40px;color:gray;margin-left:20px;margin-right:20px;margin-top:0px;\">' +
         '<span>I sleep soundly'+
         '</span>'+
         '<span style=\"float:right;margin-top:5px;font-size:12px;line-height:15px;\">I don’t sleep soundly<br>'+
         'because of my lung condition</span></p>');

         // question 8
         sym.$("ques8").html('<p id="ques8" style=\"font-family:Oswald-Light;font-size:15px;line-height:40px;color:gray;margin-left:20px;margin-right:20px;margin-top:0px;\">' +
         '<span>I have lots of energy'+
         '</span>'+
         '<span style=\"float:right;margin-top:0px;\">I have no energy at all'+
         '</span></p>');


         // IDs for scores elements
sym.$("score1").html('<p id="A1" class="scoreShap1"></p>');
sym.$("score2").html('<p id="A2" class="scoreShap2"></p>');
sym.$("score3").html('<p id="A3" class="scoreShap1"></p>');
sym.$("score4").html('<p id="A4" class="scoreShap2"></p>');
sym.$("score5").html('<p id="A5" class="scoreShap1"></p>');
sym.$("score6").html('<p id="A6" class="scoreShap2"></p>');
sym.$("score7").html('<p id="A7" class="scoreShap1"></p>');
sym.$("score8").html('<p id="A8" class="scoreShap2"></p>');
         // total scores
sym.$("total_Scores").html('<p id="total_Scores" style=\"font-family:Oswald-Light;font-size:23px;color:darkblue;text-align:center;line-height:1.7em;\"></p>');



      });
      //Edge binding end
	   
	Symbol.bindElementAction(compId, symbolName, "${submitResult}", "click", function(sym, e) {
		sym.$("Patients_Sheet").show(500);
		
		
		sym.$('submitResult').fadeOut(200).fadeIn(200); 

      });
      //Edge binding end

	   
      

      Symbol.bindElementAction(compId, symbolName, "${backToHow}", "click", function(sym, e) {
         sym.getParentSymbol().$("Slide_07_1").hide(500);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${NEXT_Btn}", "click", function(sym, e) {
         var Slide_07_1 = sym.getParentSymbol().$("Slide_07_1");
         Slide_07_1.hide(200);
         var Slide_07_2 = sym.getParentSymbol().$("Slide_07_2");
         Slide_07_2.show(500);

      });
      //Edge binding end

            })("Slide_07_1");
   //Edge symbol end:'Slide_07_1'

   //=========================================================
   
   //Edge symbol: 'Slide_07_Numbers'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${choice0_box}", "click", function(sym, e) {
         sym.$("choice0_box").html('<p class="checkBox2">0</p>');
         sym.$("choice1_box").html('<p class="checkBox1">1</p>');
         sym.$("choice2_box").html('<p class="checkBox1">2</p>');
         sym.$("choice3_box").html('<p class="checkBox1">3</p>');
         sym.$("choice4_box").html('<p class="checkBox1">4</p>');
         sym.$("choice5_box").html('<p class="checkBox1">5</p>');
         
         $("#A1").html('0');
         
         var A1 = parseInt($("#A1").html());
         var A2 = parseInt($("#A2").html());
         var A3 = parseInt($("#A3").html());
         var A4 = parseInt($("#A4").html());
         var A5 = parseInt($("#A5").html());
         var A6 = parseInt($("#A6").html());
         var A7 = parseInt($("#A7").html());
         var A8 = parseInt($("#A8").html());
         
         var sum = A1 + A2 + A3 + A4 + A5 + A6 + A7 + A8;
         
         $("#total_Scores").html(sum);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${choice1_box}", "click", function(sym, e) {
         sym.$("choice0_box").html('<p class="checkBox1">0</p>');
         sym.$("choice1_box").html('<p class="checkBox2">1</p>');
         sym.$("choice2_box").html('<p class="checkBox1">2</p>');
         sym.$("choice3_box").html('<p class="checkBox1">3</p>');
         sym.$("choice4_box").html('<p class="checkBox1">4</p>');
         sym.$("choice5_box").html('<p class="checkBox1">5</p>');
         
         $("#A1").html('1');
         
         var A1 = parseInt($("#A1").html());
         var A2 = parseInt($("#A2").html());
         var A3 = parseInt($("#A3").html());
         var A4 = parseInt($("#A4").html());
         var A5 = parseInt($("#A5").html());
         var A6 = parseInt($("#A6").html());
         var A7 = parseInt($("#A7").html());
         var A8 = parseInt($("#A8").html());
         var sum = A1 + A2 + A3 + A4 + A5 + A6 + A7 + A8;
         $("#total_Scores").html(sum);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${choice2_box}", "click", function(sym, e) {
         sym.$("choice0_box").html('<p class="checkBox1">0</p>');
         sym.$("choice1_box").html('<p class="checkBox1">1</p>');
         sym.$("choice2_box").html('<p class="checkBox2">2</p>');
         sym.$("choice3_box").html('<p class="checkBox1">3</p>');
         sym.$("choice4_box").html('<p class="checkBox1">4</p>');
         sym.$("choice5_box").html('<p class="checkBox1">5</p>');
         
         $("#A1").html('2');
         
         var A1 = parseInt($("#A1").html());
         var A2 = parseInt($("#A2").html());
         var A3 = parseInt($("#A3").html());
         var A4 = parseInt($("#A4").html());
         var A5 = parseInt($("#A5").html());
         var A6 = parseInt($("#A6").html());
         var A7 = parseInt($("#A7").html());
         var A8 = parseInt($("#A8").html());
         var sum = A1 + A2 + A3 + A4 + A5 + A6 + A7 + A8;
         $("#total_Scores").html(sum);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${choice3_box}", "click", function(sym, e) {
         sym.$("choice0_box").html('<p class="checkBox1">0</p>');
         sym.$("choice1_box").html('<p class="checkBox1">1</p>');
         sym.$("choice2_box").html('<p class="checkBox1">2</p>');
         sym.$("choice3_box").html('<p class="checkBox2">3</p>');
         sym.$("choice4_box").html('<p class="checkBox1">4</p>');
         sym.$("choice5_box").html('<p class="checkBox1">5</p>');
         
         $("#A1").html('3');
         
         var A1 = parseInt($("#A1").html());
         var A2 = parseInt($("#A2").html());
         var A3 = parseInt($("#A3").html());
         var A4 = parseInt($("#A4").html());
         var A5 = parseInt($("#A5").html());
         var A6 = parseInt($("#A6").html());
         var A7 = parseInt($("#A7").html());
         var A8 = parseInt($("#A8").html());
         var sum = A1 + A2 + A3 + A4 + A5 + A6 + A7 + A8;
         $("#total_Scores").html(sum);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${choice4_box}", "click", function(sym, e) {
         sym.$("choice0_box").html('<p class="checkBox1">0</p>');
         sym.$("choice1_box").html('<p class="checkBox1">1</p>');
         sym.$("choice2_box").html('<p class="checkBox1">2</p>');
         sym.$("choice3_box").html('<p class="checkBox1">3</p>');
         sym.$("choice4_box").html('<p class="checkBox2">4</p>');
         sym.$("choice5_box").html('<p class="checkBox1">5</p>');
         
         $("#A1").html('4');
         
         var A1 = parseInt($("#A1").html());
         var A2 = parseInt($("#A2").html());
         var A3 = parseInt($("#A3").html());
         var A4 = parseInt($("#A4").html());
         var A5 = parseInt($("#A5").html());
         var A6 = parseInt($("#A6").html());
         var A7 = parseInt($("#A7").html());
         var A8 = parseInt($("#A8").html());
         var sum = A1 + A2 + A3 + A4 + A5 + A6 + A7 + A8;
         $("#total_Scores").html(sum);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${choice5_box}", "click", function(sym, e) {
         sym.$("choice0_box").html('<p class="checkBox1">0</p>');
         sym.$("choice1_box").html('<p class="checkBox1">1</p>');
         sym.$("choice2_box").html('<p class="checkBox1">2</p>');
         sym.$("choice3_box").html('<p class="checkBox1">3</p>');
         sym.$("choice4_box").html('<p class="checkBox1">4</p>');
         sym.$("choice5_box").html('<p class="checkBox2">5</p>');
         
         $("#A1").html('5');
         
         var A1 = parseInt($("#A1").html());
         var A2 = parseInt($("#A2").html());
         var A3 = parseInt($("#A3").html());
         var A4 = parseInt($("#A4").html());
         var A5 = parseInt($("#A5").html());
         var A6 = parseInt($("#A6").html());
         var A7 = parseInt($("#A7").html());
         var A8 = parseInt($("#A8").html());
         var sum = A1 + A2 + A3 + A4 + A5 + A6 + A7 + A8;
         $("#total_Scores").html(sum);

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.$("choice0_box").html('<p class="checkBox1">0</p>');
         sym.$("choice1_box").html('<p class="checkBox1">1</p>');
         sym.$("choice2_box").html('<p class="checkBox1">2</p>');
         sym.$("choice3_box").html('<p class="checkBox1">3</p>');
         sym.$("choice4_box").html('<p class="checkBox1">4</p>');
         sym.$("choice5_box").html('<p class="checkBox1">5</p>');

      });
      //Edge binding end

   })("Slide_07_Numbers");
   //Edge symbol end:'Slide_07_Numbers'

   //=========================================================
   
   //Edge symbol: 'Slide_07_Numbers_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${choice0_box}", "click", function(sym, e) {
         sym.$("choice0_box").html('<p class="checkBox2">0</p>');
         sym.$("choice1_box").html('<p class="checkBox1">1</p>');
         sym.$("choice2_box").html('<p class="checkBox1">2</p>');
         sym.$("choice3_box").html('<p class="checkBox1">3</p>');
         sym.$("choice4_box").html('<p class="checkBox1">4</p>');
         sym.$("choice5_box").html('<p class="checkBox1">5</p>');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${choice1_box}", "click", function(sym, e) {
         sym.$("choice0_box").html('<p class="checkBox1">0</p>');
         sym.$("choice1_box").html('<p class="checkBox2">1</p>');
         sym.$("choice2_box").html('<p class="checkBox1">2</p>');
         sym.$("choice3_box").html('<p class="checkBox1">3</p>');
         sym.$("choice4_box").html('<p class="checkBox1">4</p>');
         sym.$("choice5_box").html('<p class="checkBox1">5</p>');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${choice2_box}", "click", function(sym, e) {
         sym.$("choice0_box").html('<p class="checkBox1">0</p>');
         sym.$("choice1_box").html('<p class="checkBox1">1</p>');
         sym.$("choice2_box").html('<p class="checkBox2">2</p>');
         sym.$("choice3_box").html('<p class="checkBox1">3</p>');
         sym.$("choice4_box").html('<p class="checkBox1">4</p>');
         sym.$("choice5_box").html('<p class="checkBox1">5</p>');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${choice3_box}", "click", function(sym, e) {
         sym.$("choice0_box").html('<p class="checkBox1">0</p>');
         sym.$("choice1_box").html('<p class="checkBox1">1</p>');
         sym.$("choice2_box").html('<p class="checkBox1">2</p>');
         sym.$("choice3_box").html('<p class="checkBox2">3</p>');
         sym.$("choice4_box").html('<p class="checkBox1">4</p>');
         sym.$("choice5_box").html('<p class="checkBox1">5</p>');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${choice4_box}", "click", function(sym, e) {
         sym.$("choice0_box").html('<p class="checkBox1">0</p>');
         sym.$("choice1_box").html('<p class="checkBox1">1</p>');
         sym.$("choice2_box").html('<p class="checkBox1">2</p>');
         sym.$("choice3_box").html('<p class="checkBox1">3</p>');
         sym.$("choice4_box").html('<p class="checkBox2">4</p>');
         sym.$("choice5_box").html('<p class="checkBox1">5</p>');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${choice5_box}", "click", function(sym, e) {
         sym.$("choice0_box").html('<p class="checkBox1">0</p>');
         sym.$("choice1_box").html('<p class="checkBox1">1</p>');
         sym.$("choice2_box").html('<p class="checkBox1">2</p>');
         sym.$("choice3_box").html('<p class="checkBox1">3</p>');
         sym.$("choice4_box").html('<p class="checkBox1">4</p>');
         sym.$("choice5_box").html('<p class="checkBox2">5</p>');

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.$("choice0_box").html('<p class="checkBox1">0</p>');
         sym.$("choice1_box").html('<p class="checkBox2">1</p>');
         sym.$("choice2_box").html('<p class="checkBox1">2</p>');
         sym.$("choice3_box").html('<p class="checkBox1">3</p>');
         sym.$("choice4_box").html('<p class="checkBox1">4</p>');
         sym.$("choice5_box").html('<p class="checkBox1">5</p>');

      });
      //Edge binding end

   })("Slide_07_Numbers_0_example");
   //Edge symbol end:'Slide_07_Numbers_0_example'

   //=========================================================
   
   //Edge symbol: 'Slide_07_Numbers_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${choice0_box}", "click", function(sym, e) {
         sym.$("choice0_box").html('<p class="checkBox2">0</p>');
         sym.$("choice1_box").html('<p class="checkBox1">1</p>');
         sym.$("choice2_box").html('<p class="checkBox1">2</p>');
         sym.$("choice3_box").html('<p class="checkBox1">3</p>');
         sym.$("choice4_box").html('<p class="checkBox1">4</p>');
         sym.$("choice5_box").html('<p class="checkBox1">5</p>');
         
         $("#A2").html('0');
         
         var A1 = parseInt($("#A1").html());
         var A2 = parseInt($("#A2").html());
         var A3 = parseInt($("#A3").html());
         var A4 = parseInt($("#A4").html());
         var A5 = parseInt($("#A5").html());
         var A6 = parseInt($("#A6").html());
         var A7 = parseInt($("#A7").html());
         var A8 = parseInt($("#A8").html());
         var sum = A1 + A2 + A3 + A4 + A5 + A6 + A7 + A8;
         $("#total_Scores").html(sum);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${choice1_box}", "click", function(sym, e) {
         sym.$("choice0_box").html('<p class="checkBox1">0</p>');
         sym.$("choice1_box").html('<p class="checkBox2">1</p>');
         sym.$("choice2_box").html('<p class="checkBox1">2</p>');
         sym.$("choice3_box").html('<p class="checkBox1">3</p>');
         sym.$("choice4_box").html('<p class="checkBox1">4</p>');
         sym.$("choice5_box").html('<p class="checkBox1">5</p>');
         
         $("#A2").html('1');
         
         var A1 = parseInt($("#A1").html());
         var A2 = parseInt($("#A2").html());
         var A3 = parseInt($("#A3").html());
         var A4 = parseInt($("#A4").html());
         var A5 = parseInt($("#A5").html());
         var A6 = parseInt($("#A6").html());
         var A7 = parseInt($("#A7").html());
         var A8 = parseInt($("#A8").html());
         var sum = A1 + A2 + A3 + A4 + A5 + A6 + A7 + A8;
         $("#total_Scores").html(sum);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${choice2_box}", "click", function(sym, e) {
         sym.$("choice0_box").html('<p class="checkBox1">0</p>');
         sym.$("choice1_box").html('<p class="checkBox1">1</p>');
         sym.$("choice2_box").html('<p class="checkBox2">2</p>');
         sym.$("choice3_box").html('<p class="checkBox1">3</p>');
         sym.$("choice4_box").html('<p class="checkBox1">4</p>');
         sym.$("choice5_box").html('<p class="checkBox1">5</p>');
         
         $("#A2").html('2');
         
         var A1 = parseInt($("#A1").html());
         var A2 = parseInt($("#A2").html());
         var A3 = parseInt($("#A3").html());
         var A4 = parseInt($("#A4").html());
         var A5 = parseInt($("#A5").html());
         var A6 = parseInt($("#A6").html());
         var A7 = parseInt($("#A7").html());
         var A8 = parseInt($("#A8").html());
         var sum = A1 + A2 + A3 + A4 + A5 + A6 + A7 + A8;
         $("#total_Scores").html(sum);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${choice3_box}", "click", function(sym, e) {
         sym.$("choice0_box").html('<p class="checkBox1">0</p>');
         sym.$("choice1_box").html('<p class="checkBox1">1</p>');
         sym.$("choice2_box").html('<p class="checkBox1">2</p>');
         sym.$("choice3_box").html('<p class="checkBox2">3</p>');
         sym.$("choice4_box").html('<p class="checkBox1">4</p>');
         sym.$("choice5_box").html('<p class="checkBox1">5</p>');
         
         $("#A2").html('3');
         
         var A1 = parseInt($("#A1").html());
         var A2 = parseInt($("#A2").html());
         var A3 = parseInt($("#A3").html());
         var A4 = parseInt($("#A4").html());
         var A5 = parseInt($("#A5").html());
         var A6 = parseInt($("#A6").html());
         var A7 = parseInt($("#A7").html());
         var A8 = parseInt($("#A8").html());
         var sum = A1 + A2 + A3 + A4 + A5 + A6 + A7 + A8;
         $("#total_Scores").html(sum);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${choice4_box}", "click", function(sym, e) {
         sym.$("choice0_box").html('<p class="checkBox1">0</p>');
         sym.$("choice1_box").html('<p class="checkBox1">1</p>');
         sym.$("choice2_box").html('<p class="checkBox1">2</p>');
         sym.$("choice3_box").html('<p class="checkBox1">3</p>');
         sym.$("choice4_box").html('<p class="checkBox2">4</p>');
         sym.$("choice5_box").html('<p class="checkBox1">5</p>');
         
         $("#A2").html('4');
         
         var A1 = parseInt($("#A1").html());
         var A2 = parseInt($("#A2").html());
         var A3 = parseInt($("#A3").html());
         var A4 = parseInt($("#A4").html());
         var A5 = parseInt($("#A5").html());
         var A6 = parseInt($("#A6").html());
         var A7 = parseInt($("#A7").html());
         var A8 = parseInt($("#A8").html());
         var sum = A1 + A2 + A3 + A4 + A5 + A6 + A7 + A8;
         $("#total_Scores").html(sum);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${choice5_box}", "click", function(sym, e) {
         sym.$("choice0_box").html('<p class="checkBox1">0</p>');
         sym.$("choice1_box").html('<p class="checkBox1">1</p>');
         sym.$("choice2_box").html('<p class="checkBox1">2</p>');
         sym.$("choice3_box").html('<p class="checkBox1">3</p>');
         sym.$("choice4_box").html('<p class="checkBox1">4</p>');
         sym.$("choice5_box").html('<p class="checkBox2">5</p>');
         
         $("#A2").html('5');
         
         var A1 = parseInt($("#A1").html());
         var A2 = parseInt($("#A2").html());
         var A3 = parseInt($("#A3").html());
         var A4 = parseInt($("#A4").html());
         var A5 = parseInt($("#A5").html());
         var A6 = parseInt($("#A6").html());
         var A7 = parseInt($("#A7").html());
         var A8 = parseInt($("#A8").html());
         var sum = A1 + A2 + A3 + A4 + A5 + A6 + A7 + A8;
         $("#total_Scores").html(sum);

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.$("choice0_box").html('<p class="checkBox1">0</p>');
         sym.$("choice1_box").html('<p class="checkBox1">1</p>');
         sym.$("choice2_box").html('<p class="checkBox1">2</p>');
         sym.$("choice3_box").html('<p class="checkBox1">3</p>');
         sym.$("choice4_box").html('<p class="checkBox1">4</p>');
         sym.$("choice5_box").html('<p class="checkBox1">5</p>');

      });
      //Edge binding end

   })("Slide_07_Numbers_2");
   //Edge symbol end:'Slide_07_Numbers_2'

   //=========================================================
   
   //Edge symbol: 'Slide_07_Numbers_2'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${choice0_box}", "click", function(sym, e) {
         sym.$("choice0_box").html('<p class="checkBox2">0</p>');
         sym.$("choice1_box").html('<p class="checkBox1">1</p>');
         sym.$("choice2_box").html('<p class="checkBox1">2</p>');
         sym.$("choice3_box").html('<p class="checkBox1">3</p>');
         sym.$("choice4_box").html('<p class="checkBox1">4</p>');
         sym.$("choice5_box").html('<p class="checkBox1">5</p>');
         
         $("#A3").html('0');
         
         var A1 = parseInt($("#A1").html());
         var A2 = parseInt($("#A2").html());
         var A3 = parseInt($("#A3").html());
         var A4 = parseInt($("#A4").html());
         var A5 = parseInt($("#A5").html());
         var A6 = parseInt($("#A6").html());
         var A7 = parseInt($("#A7").html());
         var A8 = parseInt($("#A8").html());
         var sum = A1 + A2 + A3 + A4 + A5 + A6 + A7 + A8;
         $("#total_Scores").html(sum);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${choice1_box}", "click", function(sym, e) {
         sym.$("choice0_box").html('<p class="checkBox1">0</p>');
         sym.$("choice1_box").html('<p class="checkBox2">1</p>');
         sym.$("choice2_box").html('<p class="checkBox1">2</p>');
         sym.$("choice3_box").html('<p class="checkBox1">3</p>');
         sym.$("choice4_box").html('<p class="checkBox1">4</p>');
         sym.$("choice5_box").html('<p class="checkBox1">5</p>');
         
         $("#A3").html('1');
         
         var A1 = parseInt($("#A1").html());
         var A2 = parseInt($("#A2").html());
         var A3 = parseInt($("#A3").html());
         var A4 = parseInt($("#A4").html());
         var A5 = parseInt($("#A5").html());
         var A6 = parseInt($("#A6").html());
         var A7 = parseInt($("#A7").html());
         var A8 = parseInt($("#A8").html());
         var sum = A1 + A2 + A3 + A4 + A5 + A6 + A7 + A8;
         $("#total_Scores").html(sum);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${choice2_box}", "click", function(sym, e) {
         sym.$("choice0_box").html('<p class="checkBox1">0</p>');
         sym.$("choice1_box").html('<p class="checkBox1">1</p>');
         sym.$("choice2_box").html('<p class="checkBox2">2</p>');
         sym.$("choice3_box").html('<p class="checkBox1">3</p>');
         sym.$("choice4_box").html('<p class="checkBox1">4</p>');
         sym.$("choice5_box").html('<p class="checkBox1">5</p>');
         
         $("#A3").html('2');
         
         var A1 = parseInt($("#A1").html());
         var A2 = parseInt($("#A2").html());
         var A3 = parseInt($("#A3").html());
         var A4 = parseInt($("#A4").html());
         var A5 = parseInt($("#A5").html());
         var A6 = parseInt($("#A6").html());
         var A7 = parseInt($("#A7").html());
         var A8 = parseInt($("#A8").html());
         var sum = A1 + A2 + A3 + A4 + A5 + A6 + A7 + A8;
         $("#total_Scores").html(sum);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${choice3_box}", "click", function(sym, e) {
         sym.$("choice0_box").html('<p class="checkBox1">0</p>');
         sym.$("choice1_box").html('<p class="checkBox1">1</p>');
         sym.$("choice2_box").html('<p class="checkBox1">2</p>');
         sym.$("choice3_box").html('<p class="checkBox2">3</p>');
         sym.$("choice4_box").html('<p class="checkBox1">4</p>');
         sym.$("choice5_box").html('<p class="checkBox1">5</p>');
         
         $("#A3").html('3');
         
         var A1 = parseInt($("#A1").html());
         var A2 = parseInt($("#A2").html());
         var A3 = parseInt($("#A3").html());
         var A4 = parseInt($("#A4").html());
         var A5 = parseInt($("#A5").html());
         var A6 = parseInt($("#A6").html());
         var A7 = parseInt($("#A7").html());
         var A8 = parseInt($("#A8").html());
         var sum = A1 + A2 + A3 + A4 + A5 + A6 + A7 + A8;
         $("#total_Scores").html(sum);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${choice4_box}", "click", function(sym, e) {
         sym.$("choice0_box").html('<p class="checkBox1">0</p>');
         sym.$("choice1_box").html('<p class="checkBox1">1</p>');
         sym.$("choice2_box").html('<p class="checkBox1">2</p>');
         sym.$("choice3_box").html('<p class="checkBox1">3</p>');
         sym.$("choice4_box").html('<p class="checkBox2">4</p>');
         sym.$("choice5_box").html('<p class="checkBox1">5</p>');
         
         $("#A3").html('4');
         
         var A1 = parseInt($("#A1").html());
         var A2 = parseInt($("#A2").html());
         var A3 = parseInt($("#A3").html());
         var A4 = parseInt($("#A4").html());
         var A5 = parseInt($("#A5").html());
         var A6 = parseInt($("#A6").html());
         var A7 = parseInt($("#A7").html());
         var A8 = parseInt($("#A8").html());
         var sum = A1 + A2 + A3 + A4 + A5 + A6 + A7 + A8;
         $("#total_Scores").html(sum);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${choice5_box}", "click", function(sym, e) {
         sym.$("choice0_box").html('<p class="checkBox1">0</p>');
         sym.$("choice1_box").html('<p class="checkBox1">1</p>');
         sym.$("choice2_box").html('<p class="checkBox1">2</p>');
         sym.$("choice3_box").html('<p class="checkBox1">3</p>');
         sym.$("choice4_box").html('<p class="checkBox1">4</p>');
         sym.$("choice5_box").html('<p class="checkBox2">5</p>');
         
         $("#A3").html('5');
         
         var A1 = parseInt($("#A1").html());
         var A2 = parseInt($("#A2").html());
         var A3 = parseInt($("#A3").html());
         var A4 = parseInt($("#A4").html());
         var A5 = parseInt($("#A5").html());
         var A6 = parseInt($("#A6").html());
         var A7 = parseInt($("#A7").html());
         var A8 = parseInt($("#A8").html());
         var sum = A1 + A2 + A3 + A4 + A5 + A6 + A7 + A8;
         $("#total_Scores").html(sum);

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.$("choice0_box").html('<p class="checkBox1">0</p>');
         sym.$("choice1_box").html('<p class="checkBox1">1</p>');
         sym.$("choice2_box").html('<p class="checkBox1">2</p>');
         sym.$("choice3_box").html('<p class="checkBox1">3</p>');
         sym.$("choice4_box").html('<p class="checkBox1">4</p>');
         sym.$("choice5_box").html('<p class="checkBox1">5</p>');

      });
      //Edge binding end

   })("Slide_07_Numbers_3");
   //Edge symbol end:'Slide_07_Numbers_3'

   //=========================================================
   
   //Edge symbol: 'Slide_07_Numbers_3'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${choice0_box}", "click", function(sym, e) {
         sym.$("choice0_box").html('<p class="checkBox2">0</p>');
         sym.$("choice1_box").html('<p class="checkBox1">1</p>');
         sym.$("choice2_box").html('<p class="checkBox1">2</p>');
         sym.$("choice3_box").html('<p class="checkBox1">3</p>');
         sym.$("choice4_box").html('<p class="checkBox1">4</p>');
         sym.$("choice5_box").html('<p class="checkBox1">5</p>');
         
         $("#A4").html('0');
         
         var A1 = parseInt($("#A1").html());
         var A2 = parseInt($("#A2").html());
         var A3 = parseInt($("#A3").html());
         var A4 = parseInt($("#A4").html());
         var A5 = parseInt($("#A5").html());
         var A6 = parseInt($("#A6").html());
         var A7 = parseInt($("#A7").html());
         var A8 = parseInt($("#A8").html());
         var sum = A1 + A2 + A3 + A4 + A5 + A6 + A7 + A8;
         $("#total_Scores").html(sum);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${choice1_box}", "click", function(sym, e) {
         sym.$("choice0_box").html('<p class="checkBox1">0</p>');
         sym.$("choice1_box").html('<p class="checkBox2">1</p>');
         sym.$("choice2_box").html('<p class="checkBox1">2</p>');
         sym.$("choice3_box").html('<p class="checkBox1">3</p>');
         sym.$("choice4_box").html('<p class="checkBox1">4</p>');
         sym.$("choice5_box").html('<p class="checkBox1">5</p>');
         
         $("#A4").html('1');
         
         var A1 = parseInt($("#A1").html());
         var A2 = parseInt($("#A2").html());
         var A3 = parseInt($("#A3").html());
         var A4 = parseInt($("#A4").html());
         var A5 = parseInt($("#A5").html());
         var A6 = parseInt($("#A6").html());
         var A7 = parseInt($("#A7").html());
         var A8 = parseInt($("#A8").html());
         var sum = A1 + A2 + A3 + A4 + A5 + A6 + A7 + A8;
         $("#total_Scores").html(sum);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${choice2_box}", "click", function(sym, e) {
         sym.$("choice0_box").html('<p class="checkBox1">0</p>');
         sym.$("choice1_box").html('<p class="checkBox1">1</p>');
         sym.$("choice2_box").html('<p class="checkBox2">2</p>');
         sym.$("choice3_box").html('<p class="checkBox1">3</p>');
         sym.$("choice4_box").html('<p class="checkBox1">4</p>');
         sym.$("choice5_box").html('<p class="checkBox1">5</p>');
         
         $("#A4").html('2');
         
         var A1 = parseInt($("#A1").html());
         var A2 = parseInt($("#A2").html());
         var A3 = parseInt($("#A3").html());
         var A4 = parseInt($("#A4").html());
         var A5 = parseInt($("#A5").html());
         var A6 = parseInt($("#A6").html());
         var A7 = parseInt($("#A7").html());
         var A8 = parseInt($("#A8").html());
         var sum = A1 + A2 + A3 + A4 + A5 + A6 + A7 + A8;
         $("#total_Scores").html(sum);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${choice3_box}", "click", function(sym, e) {
         sym.$("choice0_box").html('<p class="checkBox1">0</p>');
         sym.$("choice1_box").html('<p class="checkBox1">1</p>');
         sym.$("choice2_box").html('<p class="checkBox1">2</p>');
         sym.$("choice3_box").html('<p class="checkBox2">3</p>');
         sym.$("choice4_box").html('<p class="checkBox1">4</p>');
         sym.$("choice5_box").html('<p class="checkBox1">5</p>');
         
         $("#A4").html('3');
         
         var A1 = parseInt($("#A1").html());
         var A2 = parseInt($("#A2").html());
         var A3 = parseInt($("#A3").html());
         var A4 = parseInt($("#A4").html());
         var A5 = parseInt($("#A5").html());
         var A6 = parseInt($("#A6").html());
         var A7 = parseInt($("#A7").html());
         var A8 = parseInt($("#A8").html());
         var sum = A1 + A2 + A3 + A4 + A5 + A6 + A7 + A8;
         $("#total_Scores").html(sum);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${choice4_box}", "click", function(sym, e) {
         sym.$("choice0_box").html('<p class="checkBox1">0</p>');
         sym.$("choice1_box").html('<p class="checkBox1">1</p>');
         sym.$("choice2_box").html('<p class="checkBox1">2</p>');
         sym.$("choice3_box").html('<p class="checkBox1">3</p>');
         sym.$("choice4_box").html('<p class="checkBox2">4</p>');
         sym.$("choice5_box").html('<p class="checkBox1">5</p>');
         
         $("#A4").html('4');
         
         var A1 = parseInt($("#A1").html());
         var A2 = parseInt($("#A2").html());
         var A3 = parseInt($("#A3").html());
         var A4 = parseInt($("#A4").html());
         var A5 = parseInt($("#A5").html());
         var A6 = parseInt($("#A6").html());
         var A7 = parseInt($("#A7").html());
         var A8 = parseInt($("#A8").html());
         var sum = A1 + A2 + A3 + A4 + A5 + A6 + A7 + A8;
         $("#total_Scores").html(sum);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${choice5_box}", "click", function(sym, e) {
         sym.$("choice0_box").html('<p class="checkBox1">0</p>');
         sym.$("choice1_box").html('<p class="checkBox1">1</p>');
         sym.$("choice2_box").html('<p class="checkBox1">2</p>');
         sym.$("choice3_box").html('<p class="checkBox1">3</p>');
         sym.$("choice4_box").html('<p class="checkBox1">4</p>');
         sym.$("choice5_box").html('<p class="checkBox2">5</p>');
         
         $("#A4").html('5');
         
         var A1 = parseInt($("#A1").html());
         var A2 = parseInt($("#A2").html());
         var A3 = parseInt($("#A3").html());
         var A4 = parseInt($("#A4").html());
         var A5 = parseInt($("#A5").html());
         var A6 = parseInt($("#A6").html());
         var A7 = parseInt($("#A7").html());
         var A8 = parseInt($("#A8").html());
         var sum = A1 + A2 + A3 + A4 + A5 + A6 + A7 + A8;
         $("#total_Scores").html(sum);

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.$("choice0_box").html('<p class="checkBox1">0</p>');
         sym.$("choice1_box").html('<p class="checkBox1">1</p>');
         sym.$("choice2_box").html('<p class="checkBox1">2</p>');
         sym.$("choice3_box").html('<p class="checkBox1">3</p>');
         sym.$("choice4_box").html('<p class="checkBox1">4</p>');
         sym.$("choice5_box").html('<p class="checkBox1">5</p>');

      });
      //Edge binding end

   })("Slide_07_Numbers_4");
   //Edge symbol end:'Slide_07_Numbers_4'

   //=========================================================
   
   //Edge symbol: 'Slide_07_Numbers_4'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${choice0_box}", "click", function(sym, e) {
         sym.$("choice0_box").html('<p class="checkBox2">0</p>');
         sym.$("choice1_box").html('<p class="checkBox1">1</p>');
         sym.$("choice2_box").html('<p class="checkBox1">2</p>');
         sym.$("choice3_box").html('<p class="checkBox1">3</p>');
         sym.$("choice4_box").html('<p class="checkBox1">4</p>');
         sym.$("choice5_box").html('<p class="checkBox1">5</p>');
         
         $("#A5").html('0');
         
         var A1 = parseInt($("#A1").html());
         var A2 = parseInt($("#A2").html());
         var A3 = parseInt($("#A3").html());
         var A4 = parseInt($("#A4").html());
         var A5 = parseInt($("#A5").html());
         var A6 = parseInt($("#A6").html());
         var A7 = parseInt($("#A7").html());
         var A8 = parseInt($("#A8").html());
         var sum = A1 + A2 + A3 + A4 + A5 + A6 + A7 + A8;
         $("#total_Scores").html(sum);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${choice1_box}", "click", function(sym, e) {
         sym.$("choice0_box").html('<p class="checkBox1">0</p>');
         sym.$("choice1_box").html('<p class="checkBox2">1</p>');
         sym.$("choice2_box").html('<p class="checkBox1">2</p>');
         sym.$("choice3_box").html('<p class="checkBox1">3</p>');
         sym.$("choice4_box").html('<p class="checkBox1">4</p>');
         sym.$("choice5_box").html('<p class="checkBox1">5</p>');
         
         $("#A5").html('1');
         
         var A1 = parseInt($("#A1").html());
         var A2 = parseInt($("#A2").html());
         var A3 = parseInt($("#A3").html());
         var A4 = parseInt($("#A4").html());
         var A5 = parseInt($("#A5").html());
         var A6 = parseInt($("#A6").html());
         var A7 = parseInt($("#A7").html());
         var A8 = parseInt($("#A8").html());
         var sum = A1 + A2 + A3 + A4 + A5 + A6 + A7 + A8;
         $("#total_Scores").html(sum);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${choice2_box}", "click", function(sym, e) {
         sym.$("choice0_box").html('<p class="checkBox1">0</p>');
         sym.$("choice1_box").html('<p class="checkBox1">1</p>');
         sym.$("choice2_box").html('<p class="checkBox2">2</p>');
         sym.$("choice3_box").html('<p class="checkBox1">3</p>');
         sym.$("choice4_box").html('<p class="checkBox1">4</p>');
         sym.$("choice5_box").html('<p class="checkBox1">5</p>');
         
         $("#A5").html('2');
         
         var A1 = parseInt($("#A1").html());
         var A2 = parseInt($("#A2").html());
         var A3 = parseInt($("#A3").html());
         var A4 = parseInt($("#A4").html());
         var A5 = parseInt($("#A5").html());
         var A6 = parseInt($("#A6").html());
         var A7 = parseInt($("#A7").html());
         var A8 = parseInt($("#A8").html());
         var sum = A1 + A2 + A3 + A4 + A5 + A6 + A7 + A8;
         $("#total_Scores").html(sum);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${choice3_box}", "click", function(sym, e) {
         sym.$("choice0_box").html('<p class="checkBox1">0</p>');
         sym.$("choice1_box").html('<p class="checkBox1">1</p>');
         sym.$("choice2_box").html('<p class="checkBox1">2</p>');
         sym.$("choice3_box").html('<p class="checkBox2">3</p>');
         sym.$("choice4_box").html('<p class="checkBox1">4</p>');
         sym.$("choice5_box").html('<p class="checkBox1">5</p>');
         
         $("#A5").html('3');
         
         var A1 = parseInt($("#A1").html());
         var A2 = parseInt($("#A2").html());
         var A3 = parseInt($("#A3").html());
         var A4 = parseInt($("#A4").html());
         var A5 = parseInt($("#A5").html());
         var A6 = parseInt($("#A6").html());
         var A7 = parseInt($("#A7").html());
         var A8 = parseInt($("#A8").html());
         var sum = A1 + A2 + A3 + A4 + A5 + A6 + A7 + A8;
         $("#total_Scores").html(sum);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${choice4_box}", "click", function(sym, e) {
         sym.$("choice0_box").html('<p class="checkBox1">0</p>');
         sym.$("choice1_box").html('<p class="checkBox1">1</p>');
         sym.$("choice2_box").html('<p class="checkBox1">2</p>');
         sym.$("choice3_box").html('<p class="checkBox1">3</p>');
         sym.$("choice4_box").html('<p class="checkBox2">4</p>');
         sym.$("choice5_box").html('<p class="checkBox1">5</p>');
         
         $("#A5").html('4');
         
         var A1 = parseInt($("#A1").html());
         var A2 = parseInt($("#A2").html());
         var A3 = parseInt($("#A3").html());
         var A4 = parseInt($("#A4").html());
         var A5 = parseInt($("#A5").html());
         var A6 = parseInt($("#A6").html());
         var A7 = parseInt($("#A7").html());
         var A8 = parseInt($("#A8").html());
         var sum = A1 + A2 + A3 + A4 + A5 + A6 + A7 + A8;
         $("#total_Scores").html(sum);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${choice5_box}", "click", function(sym, e) {
         sym.$("choice0_box").html('<p class="checkBox1">0</p>');
         sym.$("choice1_box").html('<p class="checkBox1">1</p>');
         sym.$("choice2_box").html('<p class="checkBox1">2</p>');
         sym.$("choice3_box").html('<p class="checkBox1">3</p>');
         sym.$("choice4_box").html('<p class="checkBox1">4</p>');
         sym.$("choice5_box").html('<p class="checkBox2">5</p>');
         
         $("#A5").html('5');
         
         var A1 = parseInt($("#A1").html());
         var A2 = parseInt($("#A2").html());
         var A3 = parseInt($("#A3").html());
         var A4 = parseInt($("#A4").html());
         var A5 = parseInt($("#A5").html());
         var A6 = parseInt($("#A6").html());
         var A7 = parseInt($("#A7").html());
         var A8 = parseInt($("#A8").html());
         var sum = A1 + A2 + A3 + A4 + A5 + A6 + A7 + A8;
         $("#total_Scores").html(sum);

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.$("choice0_box").html('<p class="checkBox1">0</p>');
         sym.$("choice1_box").html('<p class="checkBox1">1</p>');
         sym.$("choice2_box").html('<p class="checkBox1">2</p>');
         sym.$("choice3_box").html('<p class="checkBox1">3</p>');
         sym.$("choice4_box").html('<p class="checkBox1">4</p>');
         sym.$("choice5_box").html('<p class="checkBox1">5</p>');

      });
      //Edge binding end

   })("Slide_07_Numbers_5");
   //Edge symbol end:'Slide_07_Numbers_5'

   //=========================================================
   
   //Edge symbol: 'Slide_07_Numbers_5'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${choice0_box}", "click", function(sym, e) {
         sym.$("choice0_box").html('<p class="checkBox2">0</p>');
         sym.$("choice1_box").html('<p class="checkBox1">1</p>');
         sym.$("choice2_box").html('<p class="checkBox1">2</p>');
         sym.$("choice3_box").html('<p class="checkBox1">3</p>');
         sym.$("choice4_box").html('<p class="checkBox1">4</p>');
         sym.$("choice5_box").html('<p class="checkBox1">5</p>');
         
         $("#A6").html('0');
         
         var A1 = parseInt($("#A1").html());
         var A2 = parseInt($("#A2").html());
         var A3 = parseInt($("#A3").html());
         var A4 = parseInt($("#A4").html());
         var A5 = parseInt($("#A5").html());
         var A6 = parseInt($("#A6").html());
         var A7 = parseInt($("#A7").html());
         var A8 = parseInt($("#A8").html());
         var sum = A1 + A2 + A3 + A4 + A5 + A6 + A7 + A8;
         $("#total_Scores").html(sum);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${choice1_box}", "click", function(sym, e) {
         sym.$("choice0_box").html('<p class="checkBox1">0</p>');
         sym.$("choice1_box").html('<p class="checkBox2">1</p>');
         sym.$("choice2_box").html('<p class="checkBox1">2</p>');
         sym.$("choice3_box").html('<p class="checkBox1">3</p>');
         sym.$("choice4_box").html('<p class="checkBox1">4</p>');
         sym.$("choice5_box").html('<p class="checkBox1">5</p>');
         
         $("#A6").html('1');
         
         var A1 = parseInt($("#A1").html());
         var A2 = parseInt($("#A2").html());
         var A3 = parseInt($("#A3").html());
         var A4 = parseInt($("#A4").html());
         var A5 = parseInt($("#A5").html());
         var A6 = parseInt($("#A6").html());
         var A7 = parseInt($("#A7").html());
         var A8 = parseInt($("#A8").html());
         var sum = A1 + A2 + A3 + A4 + A5 + A6 + A7 + A8;
         $("#total_Scores").html(sum);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${choice2_box}", "click", function(sym, e) {
         sym.$("choice0_box").html('<p class="checkBox1">0</p>');
         sym.$("choice1_box").html('<p class="checkBox1">1</p>');
         sym.$("choice2_box").html('<p class="checkBox2">2</p>');
         sym.$("choice3_box").html('<p class="checkBox1">3</p>');
         sym.$("choice4_box").html('<p class="checkBox1">4</p>');
         sym.$("choice5_box").html('<p class="checkBox1">5</p>');
         
         $("#A6").html('2');
         
         var A1 = parseInt($("#A1").html());
         var A2 = parseInt($("#A2").html());
         var A3 = parseInt($("#A3").html());
         var A4 = parseInt($("#A4").html());
         var A5 = parseInt($("#A5").html());
         var A6 = parseInt($("#A6").html());
         var A7 = parseInt($("#A7").html());
         var A8 = parseInt($("#A8").html());
         var sum = A1 + A2 + A3 + A4 + A5 + A6 + A7 + A8;
         $("#total_Scores").html(sum);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${choice3_box}", "click", function(sym, e) {
         sym.$("choice0_box").html('<p class="checkBox1">0</p>');
         sym.$("choice1_box").html('<p class="checkBox1">1</p>');
         sym.$("choice2_box").html('<p class="checkBox1">2</p>');
         sym.$("choice3_box").html('<p class="checkBox2">3</p>');
         sym.$("choice4_box").html('<p class="checkBox1">4</p>');
         sym.$("choice5_box").html('<p class="checkBox1">5</p>');
         
         $("#A6").html('3');
         
         var A1 = parseInt($("#A1").html());
         var A2 = parseInt($("#A2").html());
         var A3 = parseInt($("#A3").html());
         var A4 = parseInt($("#A4").html());
         var A5 = parseInt($("#A5").html());
         var A6 = parseInt($("#A6").html());
         var A7 = parseInt($("#A7").html());
         var A8 = parseInt($("#A8").html());
         var sum = A1 + A2 + A3 + A4 + A5 + A6 + A7 + A8;
         $("#total_Scores").html(sum);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${choice4_box}", "click", function(sym, e) {
         sym.$("choice0_box").html('<p class="checkBox1">0</p>');
         sym.$("choice1_box").html('<p class="checkBox1">1</p>');
         sym.$("choice2_box").html('<p class="checkBox1">2</p>');
         sym.$("choice3_box").html('<p class="checkBox1">3</p>');
         sym.$("choice4_box").html('<p class="checkBox2">4</p>');
         sym.$("choice5_box").html('<p class="checkBox1">5</p>');
         
         $("#A6").html('4');
         
         var A1 = parseInt($("#A1").html());
         var A2 = parseInt($("#A2").html());
         var A3 = parseInt($("#A3").html());
         var A4 = parseInt($("#A4").html());
         var A5 = parseInt($("#A5").html());
         var A6 = parseInt($("#A6").html());
         var A7 = parseInt($("#A7").html());
         var A8 = parseInt($("#A8").html());
         var sum = A1 + A2 + A3 + A4 + A5 + A6 + A7 + A8;
         $("#total_Scores").html(sum);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${choice5_box}", "click", function(sym, e) {
         sym.$("choice0_box").html('<p class="checkBox1">0</p>');
         sym.$("choice1_box").html('<p class="checkBox1">1</p>');
         sym.$("choice2_box").html('<p class="checkBox1">2</p>');
         sym.$("choice3_box").html('<p class="checkBox1">3</p>');
         sym.$("choice4_box").html('<p class="checkBox1">4</p>');
         sym.$("choice5_box").html('<p class="checkBox2">5</p>');
         
         $("#A6").html('5');
         
         var A1 = parseInt($("#A1").html());
         var A2 = parseInt($("#A2").html());
         var A3 = parseInt($("#A3").html());
         var A4 = parseInt($("#A4").html());
         var A5 = parseInt($("#A5").html());
         var A6 = parseInt($("#A6").html());
         var A7 = parseInt($("#A7").html());
         var A8 = parseInt($("#A8").html());
         var sum = A1 + A2 + A3 + A4 + A5 + A6 + A7 + A8;
         $("#total_Scores").html(sum);

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.$("choice0_box").html('<p class="checkBox1">0</p>');
         sym.$("choice1_box").html('<p class="checkBox1">1</p>');
         sym.$("choice2_box").html('<p class="checkBox1">2</p>');
         sym.$("choice3_box").html('<p class="checkBox1">3</p>');
         sym.$("choice4_box").html('<p class="checkBox1">4</p>');
         sym.$("choice5_box").html('<p class="checkBox1">5</p>');

      });
      //Edge binding end

   })("Slide_07_Numbers_6");
   //Edge symbol end:'Slide_07_Numbers_6'

   //=========================================================
   
   //Edge symbol: 'Slide_07_Numbers_6'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${choice0_box}", "click", function(sym, e) {
         sym.$("choice0_box").html('<p class="checkBox2">0</p>');
         sym.$("choice1_box").html('<p class="checkBox1">1</p>');
         sym.$("choice2_box").html('<p class="checkBox1">2</p>');
         sym.$("choice3_box").html('<p class="checkBox1">3</p>');
         sym.$("choice4_box").html('<p class="checkBox1">4</p>');
         sym.$("choice5_box").html('<p class="checkBox1">5</p>');
         
         $("#A7").html('0');
         
         var A1 = parseInt($("#A1").html());
         var A2 = parseInt($("#A2").html());
         var A3 = parseInt($("#A3").html());
         var A4 = parseInt($("#A4").html());
         var A5 = parseInt($("#A5").html());
         var A6 = parseInt($("#A6").html());
         var A7 = parseInt($("#A7").html());
         var A8 = parseInt($("#A8").html());
         var sum = A1 + A2 + A3 + A4 + A5 + A6 + A7 + A8;
         $("#total_Scores").html(sum);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${choice1_box}", "click", function(sym, e) {
         sym.$("choice0_box").html('<p class="checkBox1">0</p>');
         sym.$("choice1_box").html('<p class="checkBox2">1</p>');
         sym.$("choice2_box").html('<p class="checkBox1">2</p>');
         sym.$("choice3_box").html('<p class="checkBox1">3</p>');
         sym.$("choice4_box").html('<p class="checkBox1">4</p>');
         sym.$("choice5_box").html('<p class="checkBox1">5</p>');
         
         $("#A7").html('1');
         
         var A1 = parseInt($("#A1").html());
         var A2 = parseInt($("#A2").html());
         var A3 = parseInt($("#A3").html());
         var A4 = parseInt($("#A4").html());
         var A5 = parseInt($("#A5").html());
         var A6 = parseInt($("#A6").html());
         var A7 = parseInt($("#A7").html());
         var A8 = parseInt($("#A8").html());
         var sum = A1 + A2 + A3 + A4 + A5 + A6 + A7 + A8;
         $("#total_Scores").html(sum);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${choice2_box}", "click", function(sym, e) {
         sym.$("choice0_box").html('<p class="checkBox1">0</p>');
         sym.$("choice1_box").html('<p class="checkBox1">1</p>');
         sym.$("choice2_box").html('<p class="checkBox2">2</p>');
         sym.$("choice3_box").html('<p class="checkBox1">3</p>');
         sym.$("choice4_box").html('<p class="checkBox1">4</p>');
         sym.$("choice5_box").html('<p class="checkBox1">5</p>');
         
         $("#A7").html('2');
         
         var A1 = parseInt($("#A1").html());
         var A2 = parseInt($("#A2").html());
         var A3 = parseInt($("#A3").html());
         var A4 = parseInt($("#A4").html());
         var A5 = parseInt($("#A5").html());
         var A6 = parseInt($("#A6").html());
         var A7 = parseInt($("#A7").html());
         var A8 = parseInt($("#A8").html());
         var sum = A1 + A2 + A3 + A4 + A5 + A6 + A7 + A8;
         $("#total_Scores").html(sum);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${choice3_box}", "click", function(sym, e) {
         sym.$("choice0_box").html('<p class="checkBox1">0</p>');
         sym.$("choice1_box").html('<p class="checkBox1">1</p>');
         sym.$("choice2_box").html('<p class="checkBox1">2</p>');
         sym.$("choice3_box").html('<p class="checkBox2">3</p>');
         sym.$("choice4_box").html('<p class="checkBox1">4</p>');
         sym.$("choice5_box").html('<p class="checkBox1">5</p>');
         
         $("#A7").html('3');
         
         var A1 = parseInt($("#A1").html());
         var A2 = parseInt($("#A2").html());
         var A3 = parseInt($("#A3").html());
         var A4 = parseInt($("#A4").html());
         var A5 = parseInt($("#A5").html());
         var A6 = parseInt($("#A6").html());
         var A7 = parseInt($("#A7").html());
         var A8 = parseInt($("#A8").html());
         var sum = A1 + A2 + A3 + A4 + A5 + A6 + A7 + A8;
         $("#total_Scores").html(sum);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${choice4_box}", "click", function(sym, e) {
         sym.$("choice0_box").html('<p class="checkBox1">0</p>');
         sym.$("choice1_box").html('<p class="checkBox1">1</p>');
         sym.$("choice2_box").html('<p class="checkBox1">2</p>');
         sym.$("choice3_box").html('<p class="checkBox1">3</p>');
         sym.$("choice4_box").html('<p class="checkBox2">4</p>');
         sym.$("choice5_box").html('<p class="checkBox1">5</p>');
         
         $("#A7").html('4');
         
         var A1 = parseInt($("#A1").html());
         var A2 = parseInt($("#A2").html());
         var A3 = parseInt($("#A3").html());
         var A4 = parseInt($("#A4").html());
         var A5 = parseInt($("#A5").html());
         var A6 = parseInt($("#A6").html());
         var A7 = parseInt($("#A7").html());
         var A8 = parseInt($("#A8").html());
         var sum = A1 + A2 + A3 + A4 + A5 + A6 + A7 + A8;
         $("#total_Scores").html(sum);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${choice5_box}", "click", function(sym, e) {
         sym.$("choice0_box").html('<p class="checkBox1">0</p>');
         sym.$("choice1_box").html('<p class="checkBox1">1</p>');
         sym.$("choice2_box").html('<p class="checkBox1">2</p>');
         sym.$("choice3_box").html('<p class="checkBox1">3</p>');
         sym.$("choice4_box").html('<p class="checkBox1">4</p>');
         sym.$("choice5_box").html('<p class="checkBox2">5</p>');
         
         $("#A7").html('5');
         
         var A1 = parseInt($("#A1").html());
         var A2 = parseInt($("#A2").html());
         var A3 = parseInt($("#A3").html());
         var A4 = parseInt($("#A4").html());
         var A5 = parseInt($("#A5").html());
         var A6 = parseInt($("#A6").html());
         var A7 = parseInt($("#A7").html());
         var A8 = parseInt($("#A8").html());
         var sum = A1 + A2 + A3 + A4 + A5 + A6 + A7 + A8;
         $("#total_Scores").html(sum);

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.$("choice0_box").html('<p class="checkBox1">0</p>');
         sym.$("choice1_box").html('<p class="checkBox1">1</p>');
         sym.$("choice2_box").html('<p class="checkBox1">2</p>');
         sym.$("choice3_box").html('<p class="checkBox1">3</p>');
         sym.$("choice4_box").html('<p class="checkBox1">4</p>');
         sym.$("choice5_box").html('<p class="checkBox1">5</p>');

      });
      //Edge binding end

   })("Slide_07_Numbers_7");
   //Edge symbol end:'Slide_07_Numbers_7'

   //=========================================================
   
   //Edge symbol: 'Slide_07_Numbers_7'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${choice0_box}", "click", function(sym, e) {
         sym.$("choice0_box").html('<p class="checkBox2">0</p>');
         sym.$("choice1_box").html('<p class="checkBox1">1</p>');
         sym.$("choice2_box").html('<p class="checkBox1">2</p>');
         sym.$("choice3_box").html('<p class="checkBox1">3</p>');
         sym.$("choice4_box").html('<p class="checkBox1">4</p>');
         sym.$("choice5_box").html('<p class="checkBox1">5</p>');
         
         $("#A8").html('0');
         
         var A1 = parseInt($("#A1").html());
         var A2 = parseInt($("#A2").html());
         var A3 = parseInt($("#A3").html());
         var A4 = parseInt($("#A4").html());
         var A5 = parseInt($("#A5").html());
         var A6 = parseInt($("#A6").html());
         var A7 = parseInt($("#A7").html());
         var A8 = parseInt($("#A8").html());
         var sum = A1 + A2 + A3 + A4 + A5 + A6 + A7 + A8;
         $("#total_Scores").html(sum);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${choice1_box}", "click", function(sym, e) {
         sym.$("choice0_box").html('<p class="checkBox1">0</p>');
         sym.$("choice1_box").html('<p class="checkBox2">1</p>');
         sym.$("choice2_box").html('<p class="checkBox1">2</p>');
         sym.$("choice3_box").html('<p class="checkBox1">3</p>');
         sym.$("choice4_box").html('<p class="checkBox1">4</p>');
         sym.$("choice5_box").html('<p class="checkBox1">5</p>');
         
         $("#A8").html('1');
         
         var A1 = parseInt($("#A1").html());
         var A2 = parseInt($("#A2").html());
         var A3 = parseInt($("#A3").html());
         var A4 = parseInt($("#A4").html());
         var A5 = parseInt($("#A5").html());
         var A6 = parseInt($("#A6").html());
         var A7 = parseInt($("#A7").html());
         var A8 = parseInt($("#A8").html());
         var sum = A1 + A2 + A3 + A4 + A5 + A6 + A7 + A8;
         $("#total_Scores").html(sum);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${choice2_box}", "click", function(sym, e) {
         sym.$("choice0_box").html('<p class="checkBox1">0</p>');
         sym.$("choice1_box").html('<p class="checkBox1">1</p>');
         sym.$("choice2_box").html('<p class="checkBox2">2</p>');
         sym.$("choice3_box").html('<p class="checkBox1">3</p>');
         sym.$("choice4_box").html('<p class="checkBox1">4</p>');
         sym.$("choice5_box").html('<p class="checkBox1">5</p>');
         
         $("#A8").html('2');
         
         var A1 = parseInt($("#A1").html());
         var A2 = parseInt($("#A2").html());
         var A3 = parseInt($("#A3").html());
         var A4 = parseInt($("#A4").html());
         var A5 = parseInt($("#A5").html());
         var A6 = parseInt($("#A6").html());
         var A7 = parseInt($("#A7").html());
         var A8 = parseInt($("#A8").html());
         var sum = A1 + A2 + A3 + A4 + A5 + A6 + A7 + A8;
         $("#total_Scores").html(sum);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${choice3_box}", "click", function(sym, e) {
         sym.$("choice0_box").html('<p class="checkBox1">0</p>');
         sym.$("choice1_box").html('<p class="checkBox1">1</p>');
         sym.$("choice2_box").html('<p class="checkBox1">2</p>');
         sym.$("choice3_box").html('<p class="checkBox2">3</p>');
         sym.$("choice4_box").html('<p class="checkBox1">4</p>');
         sym.$("choice5_box").html('<p class="checkBox1">5</p>');
         
         $("#A8").html('3');
         
         var A1 = parseInt($("#A1").html());
         var A2 = parseInt($("#A2").html());
         var A3 = parseInt($("#A3").html());
         var A4 = parseInt($("#A4").html());
         var A5 = parseInt($("#A5").html());
         var A6 = parseInt($("#A6").html());
         var A7 = parseInt($("#A7").html());
         var A8 = parseInt($("#A8").html());
         var sum = A1 + A2 + A3 + A4 + A5 + A6 + A7 + A8;
         $("#total_Scores").html(sum);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${choice4_box}", "click", function(sym, e) {
         sym.$("choice0_box").html('<p class="checkBox1">0</p>');
         sym.$("choice1_box").html('<p class="checkBox1">1</p>');
         sym.$("choice2_box").html('<p class="checkBox1">2</p>');
         sym.$("choice3_box").html('<p class="checkBox1">3</p>');
         sym.$("choice4_box").html('<p class="checkBox2">4</p>');
         sym.$("choice5_box").html('<p class="checkBox1">5</p>');
         
         $("#A8").html('4');
         
         var A1 = parseInt($("#A1").html());
         var A2 = parseInt($("#A2").html());
         var A3 = parseInt($("#A3").html());
         var A4 = parseInt($("#A4").html());
         var A5 = parseInt($("#A5").html());
         var A6 = parseInt($("#A6").html());
         var A7 = parseInt($("#A7").html());
         var A8 = parseInt($("#A8").html());
         var sum = A1 + A2 + A3 + A4 + A5 + A6 + A7 + A8;
         $("#total_Scores").html(sum);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${choice5_box}", "click", function(sym, e) {
         sym.$("choice0_box").html('<p class="checkBox1">0</p>');
         sym.$("choice1_box").html('<p class="checkBox1">1</p>');
         sym.$("choice2_box").html('<p class="checkBox1">2</p>');
         sym.$("choice3_box").html('<p class="checkBox1">3</p>');
         sym.$("choice4_box").html('<p class="checkBox1">4</p>');
         sym.$("choice5_box").html('<p class="checkBox2">5</p>');
         
         $("#A8").html('5');
         
         var A1 = parseInt($("#A1").html());
         var A2 = parseInt($("#A2").html());
         var A3 = parseInt($("#A3").html());
         var A4 = parseInt($("#A4").html());
         var A5 = parseInt($("#A5").html());
         var A6 = parseInt($("#A6").html());
         var A7 = parseInt($("#A7").html());
         var A8 = parseInt($("#A8").html());
         var sum = A1 + A2 + A3 + A4 + A5 + A6 + A7 + A8;
         $("#total_Scores").html(sum);

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.$("choice0_box").html('<p class="checkBox1">0</p>');
         sym.$("choice1_box").html('<p class="checkBox1">1</p>');
         sym.$("choice2_box").html('<p class="checkBox1">2</p>');
         sym.$("choice3_box").html('<p class="checkBox1">3</p>');
         sym.$("choice4_box").html('<p class="checkBox1">4</p>');
         sym.$("choice5_box").html('<p class="checkBox1">5</p>');

      });
      //Edge binding end

   })("Slide_07_Numbers_8");
   //Edge symbol end:'Slide_07_Numbers_8'

   //=========================================================
   
   //Edge symbol: 'Patients_Sheet'
   (function(symbolName) {   
   
      

      

      Symbol.bindElementAction(compId, symbolName, "${Arrow}", "click", function(sym, e) {
         sym.getParentSymbol().$("Patients_Sheet").hide(500);

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // insert code to be run when the symbol is created here
         /*
         var pName = document.getElementById('patientName').value;
         var tDate = document.getElementById("todayDate").value;
         var tScore = $('#total_Scores').html();
         
         var All_info = "The Name: "+pName + '<br>' + "The Date: " +tDate + '<br>' + "Final Scores: "+ tScore;
         
         //alert("Patients Info: " + All_info);
         
         var storeData = sym.getSymbol("Patients_Sheet").$("data_sheet");
         storeData.html(All_info);
         
         */
         
         var pName = document.getElementById('patientName');
         var tDate = document.getElementById('todayDate');
         var tScore = $('#total_Scores').html();
         
         sym.$("data_sheet").html('<form action="MAILTO:mohamedg@cat.com.eg" method="post" enctype="text/plain">'+
         'Name:<br>'+
         '<input type="text" name="name" value="patientName.value"><br>'+
         'Date:<br>'+
         '<input type="date" name="date" value="todayDate.value"><br>'+
         'Score:<br>'+
         '<input type="text" name="total_scores" value="tScore"><br><br>'+
         '<input type="submit" value="Send">'+
         '</form>');
         

      });
      //Edge binding end

   })("Patients_Sheet");
   //Edge symbol end:'Patients_Sheet'

   //=========================================================
   
   //Edge symbol: 'Slide_07_2'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.$("table").html('<div class="container">'+
           '<table style=\"height:200px;'+
           //'column-rule-width:medium;'+
           'margin-left:-5px;'+
           'margin-top:5px;'+
           'column-gap: 20px;'+
           'border-radius: 11px;'+
           'justify-content: center;'+
           'table-layout: fixed;'+
           'vertical-align: middle;'+
           'text-indent:10px;'+
           'font-family:Oswald-light;'+
           'font-size:21px;'+
           'text-align:left;\">'+
         
             '<tbody>'+
               '<tr>'+
                 '<td style=\"width: 150px;\">GOLD 1:</td>'+
                 '<td style=\"width: 150px;\">Mild</td>'+
                 '<td style=\"width: 330px;\">FEV<sub>1</sub> ≥ 80% predicted</td>'+
               '</tr>'+
               '<tr style=\"background-color:orange;color:white;border-radius:15px;\">'+
                 '<td style=\"width: 150px;border-top-left-radius:7px;\">GOLD 2:</td>'+
                 '<td style=\"width: 150px;\">Moderate</td>'+
                 '<td style=\"width: 330px;border-bottom-right-radius:7px;\">50% £ FEV<sub>1</sub> < 80% predicted</td>'+
               '</tr>'+
               '<tr>'+
                 '<td style=\"width: 150px;\">GOLD 3:</td>'+
                 '<td style=\"width: 150px;\">Severe</td>'+
                 '<td style=\"width: 330px;\">30% £ FEV<sub>1</sub> < 50% predicted</td>'+
               '</tr>'+
               '<tr style=\"background-color:orange;color:white;border-radius:15px;\">'+
                 '<td style=\"width: 150px;border-bottom-left-radius:7px;\">GOLD 4:</td>'+
                 '<td style=\"width: 150px;\">Very Servere</td>'+
                 '<td style=\"width: 330px;border-top-right-radius:7px;\">FEV<sub>1</sub> < 30% predicted</td>'+
               '</tr>'+
             '</tbody>'+
           '</table>'+
         '</div>');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${goToBackSlide7}", "click", function(sym, e) {
         sym.getParentSymbol().$("Slide_07_2").hide(500);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${NEXT_Btn}", "click", function(sym, e) {
         var Slide_07_2 = sym.getParentSymbol().$("Slide_07_2");
         Slide_07_2.hide(200);
         var Slide_07_3 = sym.getParentSymbol().$("Slide_07_3");
         Slide_07_3.show(500);

      });
      //Edge binding end

               })("Slide_07_2");
   //Edge symbol end:'Slide_07_2'

   //=========================================================
   
   //Edge symbol: 'Slide_07_3'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.$("table").html('<div class="container">'+
           '<table class="table" style=\"height:250px;width:600px;'+
           //'column-rule-width:medium;'+
           'margin-left:-5px;'+
           'margin-top:5px;'+
           //'column-gap: 20px;'+
           'border-radius: 11px;'+
           'justify-content: center;'+
           //'table-layout: fixed;'+
           'vertical-align: middle;'+
           'font-family:Oswald-light;'+
           'font-size:19px;'+
           'text-align:left;\">'+
         
         '<thead>'+
         '<tr>'+
             '<th>Grade of Despnoea</th>'+
             '<th>Description</th>'+
             '</tr>'+
             '</thead>'+
         
             '<tbody>'+
         
               '<tr>'+
                 '<td style=\"text-indent:10px;\">0</td>'+
                 '<td>Not troubled by breathlessness except on strenuous exercise</td>'+
               '</tr>'+
               '<tr style=\"background-color:orange;color:white;\">'+
                 '<td style=\"text-indent:10px;\">1</td>'+
                 '<td>Shortness of breath when hurrying on the level or walking up a slight hill</td>'+
               '</tr>'+
               '<tr>'+
                 '<td style=\"text-indent:10px;\">2</td>'+
                 '<td>Walks slower than people of the same age on the level because of breathlessness or has to stop for breath when walking at own pace on the level</td>'+
               '</tr>'+
               '<tr style=\"background-color:orange;color:white;\">'+
                 '<td style=\"text-indent:10px;\">3</td>'+
                 '<td>Stops for breath after walking about 100 m or after a few minutes on the level</td>'+
               '</tr>'+
                '<tr>'+
                 '<td style=\"text-indent:10px;\">4</td>'+
                 '<td>Too breathless to leave the house or breathless when dressing or undressing</td>'+
               '</tr>'+
         
             '</tbody>'+
           '</table>'+
         '</div>');

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${goToBackSlide7}", "click", function(sym, e) {
         sym.getParentSymbol().$("Slide_07_3").hide(500);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${NEXT_Btn}", "click", function(sym, e) {
         var Slide_07_3 = sym.getParentSymbol().$("Slide_07_3");
         Slide_07_3.hide(200);
         var Slide_07_4 = sym.getParentSymbol().$("Slide_07_4");
         Slide_07_4.show(500);

      });
      //Edge binding end

                  })("Slide_07_3");
   //Edge symbol end:'Slide_07_3'

   //=========================================================
   
   //Edge symbol: 'Slide_07_4'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.$("Text4").html('<div style=\"font-family:Oswald-light;'+
           'font-size:19px;'+
           'text-align:left;'+
           'margin-top:5px;\">'+
           '<p>An exacerbation of <COPD>COPD</COPD> is an acute event characterized by a worsening of the patient’s respiratory symptoms that is beyond normal day–to–day variations and leads to a change in medication.</p>'+
         
           '<p>Exacerbations of respiratory symptoms often occur in patients with COPD, triggered by infection with bacteria or viruses (which may coexist), environmental pollutants, or unknown factors.</p>'+
         
           '<p>Conditions that may mimic and/or aggravate exacerbations, including pneumonia, pulmonary embolism, congestive heart failure, cardiac arrhythmia, pneumothorax, and pleural effusion, need to be considered in the differential diagnosis and treated if present.</p>'+
         
           '<p>Interruption of maintenance therapy has also been shown to lead to exacerbations.</p>'+
         
           '<p>Exacerbations of <COPD>COPD</COPD> are important events in the course of the disease because they:</p>'+
         '<ul>'+
           '<li>Negatively affect a patient D5s quality of life.</li>'+
           '<li>Have effects on symptoms and lung function that take several weeks to recover from.</li>'+
           '<li>Accelerate the rate of decline of lung function.</li>'+
           '<li>Are associated with significant mortality, particularly in those requiring hospitalization.</li>'+
           '<li>Have high socioeconomic costs.</li>'+
         '</ul>'+
           '<p>An analyzed data from 25,857 patients with <COPD>COPD</COPD> entered in The Health Improvement Network database over a 2-year period revealed that.<sup>8</sup></p>'+
           '<p><COPD>COPD</COPD> is associated with a statistically significant, 2.27-fold increased risk of myocardial infarction 1 to 5 days after exacerbation, and a 1.26-fold increased risk of stroke 1 to 49 days after exacerbation.</p>'+
         
           '</div>');

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${goToBackSlide7}", "click", function(sym, e) {
         sym.getParentSymbol().$("Slide_07_4").hide(500);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${NEXT_Btn}", "click", function(sym, e) {
         var Slide_07_4 = sym.getParentSymbol().$("Slide_07_4");
         Slide_07_4.hide(200);
         var Slide_07_3 = sym.getParentSymbol().$("Slide_07_3");
         Slide_07_3.show(500);

      });
      //Edge binding end

                  })("Slide_07_4");
   //Edge symbol end:'Slide_07_4'

   //=========================================================
   
   //Edge symbol: 'Slide_1'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.$("Text9").html('<p style="margin: 0px;">​Management of <span style="color: rgb(233, 143, 44);">COPD</span> according to the GOLD'+
         ' report 2014 (First Choices)<sup>5</sup></p>');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${backToWelcome}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("Slide_01").play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Assessment_Btn}", "click", function(sym, e) {
         sym.getParentSymbol().play("how");
         var Slide_07 = sym.getParentSymbol().getSymbol("Slide_06").$("Slide_07").show();
         Slide_07.animate({left:0},500);
         var Slide_07_1 = sym.getParentSymbol().getSymbol("Slide_06").getSymbol("Slide_07").$("Slide_07_1");
         Slide_07_1.show(500);

      });
      //Edge binding end

               })("Slide_08");
   //Edge symbol end:'Slide_08'

   //=========================================================
   
   //Edge symbol: 'References'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.$("back_Ref").html('<div class="ref">'+
         '<h1>References</h1>'+
         '<ol>'+
         '<li>Epidemiology, management and burden of COPD in the Middle East and North Africa: the BREATHE study.</li>'+
         '<li>World Health Organization. Chronic respiratory diseases. Chronic obstructive pulmonary disease (COPD). Available on: http://www.who.int/respiratory/copd/burden/en/</li>'+
         '<li>World Health Organization. Chronic respiratory diseases. Chronic obstructive pulmonary disease (COPD). Available on: http://www.who.int/gard/news_events/World_Health_Statistics_2008/en/</li>'+
         '<li>World Health Organization. Chronic respiratory diseases. Chronic obstructive pulmonary disease (COPD). Available on: http://www.who.int/respiratory/copd/causes/en/</li>'+
         '<li>GLOBAL INITIATIVE FOR CHRONIC OBSTRUCTIVE LUNG DISEASE. GLOBAL STRATEGY FOR THE DIAGNOSIS, MANAGEMENT, AND PREVENTION OF CHRONIC OBSTRUCTIVE PULMONARY DISEASE (UPDATED 2015).</li>'+
         '<li>Whittle.K. Chapter 18: Interpretation of Pulmonary Function Tests. 301-304. In: Internal Medicine Essentials for Clerkship Students 2. Edited by: Karen C. Nolan. 2009. Available on: http://freemedebooks.files.wordpress.com/2014/01/internalmedicineessentials.pdf</li>'+
         '<li>Alex J. Mackay, et al. Usefulness of the Chronic Obstructive Pulmonary Disease Assessment Test to Evaluate Severity of COPD Exacerbations. Am J Respir Crit Care Med. 2012; 185(11): 1218–D01224.</li>'+
         '<li>Increased Risk of Myocardial Infarction and Stroke Following Exacerbation of COPD.Gavin C. Donaldson, PhD, John R. Hurst, PhD, Christopher J. Smith, BA, Richard B. Hubbard, DM, Jadwiga A. Wedzicha, MD. CHEST. 2010;137(5):1091-1097</li>'+
         '</ol></div>');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Arrow2}", "click", function(sym, e) {
         sym.getParentSymbol().$("References").animate({top:-1280},500);

      });
      //Edge binding end

   })("References");
   //Edge symbol end:'References'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-61576914");