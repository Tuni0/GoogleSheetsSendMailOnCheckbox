//set the sheet atributes
function onDateEdit(e) {
  const triggerValues = {
    sheet: e.source.getActiveSheet(),
    range: e.range,
    row: e.range.getRow(),
    column: e.range.getColumn(),
  };
  /**console.log("column::",column); column check test*/

  var targetRange = triggerValues.sheet.getRange(triggerValues.row,1,1,10); /**choose data range*/
  var targetValues = targetRange.getValues();
  /**console.log("targetRange::",targetValues); range test*/

  const mailData = {
    recipient: "//Mail",
    subject: "//Title" + " " + targetValues[0][4].toString(),
    body:
      "//Data" +
      targetValues[0][14].toString() +
     };


  if ((triggerValues.column = 3 && checkboxValue == "TAK/YES")) {
    console.log("Checkbox was marked true");
    console.log(`Sending email to ${mailData.recipient}`);
    GmailApp.sendEmail(mailData.recipient, mailData.subject, mailData.body, {
      cc: "ccmails",
    });
    //Mail delivery check test
  } else if ((triggerValues.column = 3 && checkboxValue == "NIE/NO")) {
    console.log("Checkbox was marked false");
  } else {
    console.log("Something unexpected happened");
  }

}
