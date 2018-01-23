function Contact(first, last, number, email) {
  this.first = first;
  this.last = last;
  this.number = number;
  this.email = email;


}

contacts = [];

$(function() {

  $("#new-contact").submit(function(event) {
    event.preventDefault();
    var first = $("#new-first-name").val();
    var last = $("#new-last-name").val();
    var number = $("#new-number").val();
    var email = $("#new-email").val();

    var newContact = new Contact(first, last, number, email);
      contacts.push(newContact);


    $("#name").unbind().click(function() {
      $(this).siblings('span').toggle();
    });

    $("#delete").click(function() {
      var number = this.getElementById("number").innerText;
      console.log(typeof number);
      var isolate = number.replace(/Number: /, "");
      console.log(isolate);
      for (var i=0; i<contacts.length; i++) {
        var compare = "Number: " + contacts[i].number
        if (compare === number) {
          var removed = contacts.splice(i,1);
        }
        console.log(removed);

      }
    });


    });

    $("button#show").click(function() {
      console.log("show");
      $("#contactsList").text("");
      for(var contactIndex = 0; contactIndex < contacts.length; contactIndex ++){
        firstName = contacts[contactIndex].first;
        lastName = contacts[contactIndex].last;
        phoneNumber = contacts[contactIndex].number;
        eMail = contacts[contactIndex].email;

        $("#contact").clone().prependTo("#contactsList");
        $("#contact").children("#name").text("Name: " + firstName + " " + lastName);
        $("#moreInfo").children("#number").text("Number: " + phoneNumber);
        $("#moreInfo").children("#email").text("Email: " + eMail);
      }
      });

    // contacts.forEach(function(contact) {
    //   console.log(contacts[last]);
    //   $(".contact").clone().appendTo("#contactsList");
    //   // document.getElementById("name").innerHTML = contacts[last].f + " " + last;
    //   // $("#name").innerHTML(" " + contact.first + " " + contact.last);
    // });
  });
