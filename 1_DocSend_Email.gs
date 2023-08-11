//creating managing , and automating projects with script

function myFunction1() {
  //for creating new document file 
  const doc = DocumentApp.create('Test 1');
}

function myFunction2() {
  //for creating new document file 
  const doc = DocumentApp.create('Test 2');
  //targeting the body of document
  const body = doc.getBody();
  //for debugging 
  Logger.log(body);
  //if we want to write something in document 
  body.appendParagraph('Hello World');
}

//for targeting blank document with the help of url as a id
function myFunction3() {
  const id = '1EgmPMK1SwGzV49ClH1BnQ0QQOFGzGnXRWWcFnx1811U';
  const doc = DocumentApp.openById(id);
  const body = doc.getBody();
  //paragraph appending
  const para = body.appendParagraph('Hello World one more time');
  //new text append
  para.appendText('new text')
  Logger.log(para);
}

function myFunction4() {
  // Log the email address of the person running the script.
  var email = Session.getActiveUser().getEmail();
  Logger.log(email);
  const id = '1EgmPMK1SwGzV49ClH1BnQ0QQOFGzGnXRWWcFnx1811U';
  const doc = DocumentApp.openById(id);
  const body = doc.getBody();
  let emailContent = (body.editAsText().getText());
  Logger.log(doc.getName());
  doc.setName('my email doc');
  const subject = doc.getName();
  const url = doc.getUrl();
  emailContent += ' ' + url;
  GmailApp.sendEmail(email, subject, emailContent);
}
