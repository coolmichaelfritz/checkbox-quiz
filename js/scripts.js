$(document).ready(function() {
  $("form#ghostQuiz").submit(function(event) {
    event.preventDefault();
    $("#haunting").show();
    $("input:checkbox[name=ghost-question]:checked").each(function() {
      var hauntedQuiz = $(this).val();
      $("#haunting").append(hauntedQuiz + "<br>");
    });
    $("#ghostQuiz").hide();
  });
});
