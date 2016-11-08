$(document).ready(function() {
  $("#comment-form").on('submit', handleCommentPost);
});

function handleCommentPost(evt){
  evt.preventDefault();

  var form = $(this);
  var url = form.attr("action");

  $.ajax({
    url:    url,
    method: "POST",
    data:   form.serialize()
  }).done(function(response){
    // Create the comment DOM
    var header = $("<header>").text(response.author);
    var body = $("<p>").append(response.body);
    body.prepend(header);

    // Insert into the existing DOM
    $('#comments').prepend(body);
    $(form).trigger('reset')
  }).fail(function(response){
    console.log("Bad Request, 400")
  })
}
