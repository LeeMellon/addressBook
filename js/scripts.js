function Contact(first, last, number, email) {
  this.first = first;
  this.last = last;
  this.number = number;
  this.email = email;
  // this.pic = pic;
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
    contacts[last] = new Contact(first, last, number, email);

    $("#contact").clone().prependTo("#contactsList");
    $("#contact").children("#name").text("Name: " + first + " " + last);
    $("#moreInfo").children("#number").text("Number: " + number);
    $("#moreInfo").children("#email").text("Email: " + email);

    $("#name").unbind().click(function() {
      $(this).siblings('span').toggle();
    });

    $("#delete").click(function() {
      console.log("deleted");
      $(this).closest("#contact").remove();
    })

    // contacts.forEach(function(contact) {
    //   console.log(contacts[last]);
    //   $(".contact").clone().appendTo("#contactsList");
    //   // document.getElementById("name").innerHTML = contacts[last].f + " " + last;
    //   // $("#name").innerHTML(" " + contact.first + " " + contact.last);
    // });
  });


});
