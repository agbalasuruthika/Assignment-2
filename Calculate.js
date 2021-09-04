function cal() {
  var calls = document.forms["myForm"]["calls"].value;
  var sms = document.forms["myForm"]["sms"].value;
  var tcalls = calls; //200
  var call_amt=0;
  console.log(call_amt);
  if (calls >= 50) {
    tcalls= tcalls - 50;//150
    call_amt = 50 *  0.5;//25
    console.log(call_amt);
  }else {
    call_amt = calls * 0.5;
  }
  if(tcalls >= 100)
  {
    tcalls = tcalls - 100;//50
    call_amt = call_amt + 100*0.7;//70+25=95
  }else {
    call_amt = call_amt + tcalls * 0.7;//39
  }

  if(tcalls >= 150)
  {
    tcalls = tcalls - 150;//100
    call_amt = call_amt + 150 * 0.85;//222.5
    call_amt = call_amt + tcalls * 0.95;//317.5
  }else {
    call_amt = call_amt + tcalls * 0.85;//42.5+95 = 137.5
  }

  console.log(call_amt);


//  SMS SMS SMS SMS
var tsms = sms; //250
var sms_amt=0;
console.log(sms_amt);
if (sms >= 50) {
  tsms= tsms - 50;//200
  sms_amt = 0;//0
  //console.log(call_amt);
}else {
  sms_amt = 0;
}
if(tsms >= 150)
{
  tsms = tsms - 150;//50
  sms_amt = sms_amt + 150*0.25;//37.5
}else {
  sms_amt = sms_amt + tsms * 0.25;
}
if(tsms >= 200)
{
  tsms = tsms - 200;//100
  sms_amt = sms_amt + 200*0.40;//90+25=115
  sms_amt = sms_amt + tsms * 0.45; //
}else {
  sms_amt = sms_amt + tsms * 0.40; //20+37.5=57.5
}

alert("  Call Amount: "+ call_amt+"\n  SMS Amount: "+sms_amt+"\n  Total Charges:  "+(call_amt+sms_amt));
}
