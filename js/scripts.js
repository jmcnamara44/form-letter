$(document).ready(function() {
  $("#formOne").submit(function(event) {
      var firstNameInput = $("input#fistName").val();
      var lastNameInput = $("input#lastName").val();

      $(".firstName").text(firstNameInput);
      $(".lastName").text(lastNameInput);

      $("#letter").show();

      event.preventDefault();
  });
});
