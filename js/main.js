function displayInfo(){
 var nameIn = document.getElementById("name").value; //stores the value of the Name form field
 var messageIn = document.getElementById("message").value; //stores the value of the Message form field

 var userNameText = document.createTextNode("Username: " + nameIn); //creates the text that goes inside the H2 tag
 var commentText = document.createTextNode("Comment: " + messageIn); //creates the text that goes inside the P tag
 var commentImage = document.createElement('IMG'); //Creates the img tag

 var commentWrapper = document.getElementById('comments'); //calling the section where we are going to display the elements

//Each comment block
 var newElem = document.createElement('DIV'); //Creates the DIV tag
     newElem.className = "newClass"; //includes a class to the element that is affected by our css file
     commentImage.className = 'image'; //gives IMG style attributes

 var textArea = document.createElement('DIV'); //Creates the DIV tag
     textArea.className = "textArea"; //includes a class to the element that is affected by our css file

 var userName = document.createElement('H2'); //Creates the H2 tag
     userName.appendChild(userNameText); //includes the text (NAME) to our H2

 var newComment = document.createElement("P"); //Creates the P tag
	 newComment.appendChild(commentText); //includes the text (COMMENT) to our P
     commentImage.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png'); //Sets the attribute to the image


//APPENDS
  document.getElementById("comments").appendChild(newElem);
  newElem.appendChild(commentImage);
  newElem.appendChild(textArea);
  textArea.appendChild(userName);
  textArea.appendChild(newComment);

//FORM RESET
  document.getElementById("form").reset();
}
