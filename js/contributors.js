var $root = $('html, body');
$('a').click(function() {
  $root.animate({
    scrollTop: $( $.attr(this, 'href') ).offset().top
  }, 1000);
  return false;
});
$(function(){
  $.ajax({
    url: "https://api.github.com/repos/fossasia/gci17.fossasia.org/contributors"
  }).done(function(data){
    data.forEach(function(contributors){
      
      var html = "<div class='col-xs-12 col-sm-6 col-md-4 col-lg-3'><div class='card'>";
      html += "<a href="+contributors.html_url+">";
      html += "<img src='icons/github.png' />"
      html += contributors.login;
      html += "<div class='pic'></a>";
      html += "<img src="+contributors.avatar_url+"><div class='contribs'><p>";
      html += contributors.contributions;
      
      if (contributors.contributions === 1) {
        html += " contribution";
      }
      else {
        html += " contributions";
      }
      $("#contribiii").append(html);
    });
    });
});