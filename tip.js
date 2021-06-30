function tipcalculate()
{
	var billamt=document.getElementById("Billamt").value;
	var servicequal=document.getElementById("Servicequal").value;
	var noofpeoples=document.getElementById("Peopleamt").value;
	if(noofpeoples<=1||noofpeoples==="")
	{
		alert("please enter the ungiven value");
		return;
	}
	if(noofpeoples===""||noofpeoples<=1)
	{
		noofpeoples=1;
		document.getElementById("each").style.display="none";
	}
    //else if()
    //{
	//	document.getElementById("each").style.display="block";
    //}  	
	else
	{
		var total=(billamt*servicequal)/noofpeoples;
		total=Math.round(total);
		console.log(total);	

		    document.getElementById("totaltip").style.display="block";
			document.getElementById("tip").innerHTML=total; 

	}




	
	
	
}
document.getElementById("totaltip").style.display="block";
document.getElementById("each").style.display="block";
   
   //function call
   document.getElementById("Calculate").onclick=function()
   {
	   tipcalculate();
   }
   