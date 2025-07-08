let isCaptchaChecked = false;

function beforesubmit(event)
{
    if(isCaptchaChecked)
    {
        // do the below steps only when reCaptcha is checked
        let inputDate= document.querySelector(".inputdate");
        let outputdate= document.querySelector(".outputdate");
        console.log("Input Date ::", inputDate.value); // The type is String we have to convert to Date form acco to users's locale which is en_US
        let formattedDate = new Date(inputDate.value).toLocaleDateString("en-US", { timeZone: "UTC" });
        outputdate.value = formattedDate;
        console.log("output Date",outputdate.value);
    }
    else{
        alert("Please check the reCaptcha before clicking submit");
        event.preventDefault(); // to prevent form submission
    }
  
}

function timestamp() 
{ 
    var response = document.getElementById("g-recaptcha-response"); 
    if (response == null || response.value.trim() == "")
         {
            var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);
            elems["ts"] = JSON.stringify(new Date().getTime());
            document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems);
         } 
} 
setInterval(timestamp, 500);

function onCaptchaSuccess()
{
    isCaptchaChecked = true;
}