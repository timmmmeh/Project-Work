var timerIDTrackingInfo = undefined;
/* var Dcounter = 0;
var Scounter = 0;
var Tcounter = 0;
var Checked = 0; */

arel.sceneReady(function()
{
	//set a listener to tracking to get information about when the image is tracked
	arel.Events.setListener(arel.Scene, function(type, param){trackingHandler(type, param);});
});

function trackingHandler(type, param)
{
	//check if there is tracking information available
	if(param[0] !== undefined)
	{	
		//if the pattern is found, trigger a website, movie or sound depending on the image found
		if(type && type == arel.Events.Scene.ONTRACKING && param[0].getState() == arel.Tracking.STATE_TRACKING)
		{
			if(param[0].getCoordinateSystemID() == 1) //Deer
			{
				document.getElementById("myCheckD").checked = true;
				$('#checks').hide();			
				checkDeer();
				checkAll();
			}
			
			if(param[0].getCoordinateSystemID() == 2) //Sheep
			{
				document.getElementById("myCheckS").checked = true;
				$('#checks').hide();				
				checkSheep();
				checkAll();
			}
			
			if(param[0].getCoordinateSystemID() == 3) //Tricycle
			{
				document.getElementById("myCheckT").checked = true;
				$('#checks').hide();				
				checkTricycle();
				checkAll();
			}	
		}  
	}
};

/* function hide(){
	$('#info').hide();		
	$('#worldC').hide();
	$('#worldA').hide();
	$('#worldE').hide();
	$('#worldAC').hide();
	$('#worldAE').hide();
	$('#worldACE').hide();
	$('#worldEC').hide();
} */

function checkDeer(){
	if(document.getElementById("myCheckD").checked == true && document.getElementById("myCheckS").checked == false && document.getElementById("myCheckT").checked == false){
	$('#worldC').show();}
	if(document.getElementById("myCheckD").checked == true && document.getElementById("myCheckS").checked == false && document.getElementById("myCheckT").checked == true){
	$('#worldEC').show();}
	if(document.getElementById("myCheckD").checked == true && document.getElementById("myCheckS").checked == true && document.getElementById("myCheckT").checked == false){
	$('#worldAC').show();}
} 

function checkSheep(){
	if(document.getElementById("myCheckS").checked == true && document.getElementById("myCheckD").checked == false && document.getElementById("myCheckT").checked == false){
	$('#worldA').show();}	
	if(document.getElementById("myCheckS").checked == true && document.getElementById("myCheckD").checked == false && document.getElementById("myCheckT").checked == true){
	$('#worldAE').show();}	
	if(document.getElementById("myCheckS").checked == true && document.getElementById("myCheckD").checked == true && document.getElementById("myCheckT").checked == false){
	$('#worldAC').show();}	
}

function checkTricycle(){
	if(document.getElementById("myCheckT").checked == true && document.getElementById("myCheckD").checked == false && document.getElementById("myCheckS").checked == false){
	$('#worldE').show();}
	if(document.getElementById("myCheckT").checked == true && document.getElementById("myCheckD").checked == false && document.getElementById("myCheckS").checked == true){
	$('#worldAE').show();}
	if(document.getElementById("myCheckT").checked == true && document.getElementById("myCheckD").checked == true && document.getElementById("myCheckS").checked == false){
	$('#worldEC').show();}				
}

function checkAll(){	
	if(document.getElementById("myCheckS").checked == true && document.getElementById("myCheckD").checked == true && document.getElementById("myCheckT").checked == true)
	{ 		
		$('#worldACE').show();
		$('#checks').hide();
		 
	}	
}