//Send email from sheets custom HTML Template 1 Custom font email
function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('send email').addItem('Approve', 'approver').addToUi()
}

function approver() {
  const ui = SpreadsheetApp.getUi();
  const row = SpreadsheetApp.getActiveSheet().getActiveCell().getRow();
  Logger.log(row);
  const data = SpreadsheetApp.getActiveSheet().getRange(row, 1, 1, 3).getValues()[0];


  const user = {
    first: data[0],
    last: data[1],
    email: data[2],
    row: row
  };
  Logger.log(user);
  const res = ui.alert('Send to ' + user.first + '(' + user.email + ')?', ui.ButtonSet.YES_NO);
  if (res == ui.Button.YES) {
    sendUser(user)
  }
  Logger.log(res);
}

function sendUser(user) {
  const message = '<h1>Hello World</h1>';
  MailApp.sendEmail({
    to: user.email,
    subject: 'Tester',
    htmlBody: message
  })
}