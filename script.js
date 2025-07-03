function beforesubmit()
{
    debugger;
    let inputDate= document.querySelector(".inputdate");
    let outputdate= document.querySelector(".outputdate");
    console.log("Input Date ::", inputDate.value); // The type is String we have to convert to Date form acco to users's locale which is en_US
    let formattedDate = new Date(inputDate.value).toLocaleDateString("en-US", { timeZone: "UTC" });
    outputdate.value = formattedDate;
    console.log("output Date",outputdate.value);
}