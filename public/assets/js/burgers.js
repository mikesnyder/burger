$(function() {
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
      let burgerName = $("#burger-name")
        .val()
        .trim();
      console.log(burger_name);
      if (burgerName === "") {
        return;
      }
      $.ajax("/", {
        type: "POST",
        data: { burger: burger_name }
      }).then(function() {
        location.reload();
      });
    });
  
    $(".burgerAvailable").on("click", function(event) {
      event.preventDefault();
      let burgerID = $(this)
        .val()
        .trim();
  
      $.ajax("/", {
        type: "PUT",
        data: { burger: burgerID }
      }).then(function() {
        location.reload();
      });
    });
  });