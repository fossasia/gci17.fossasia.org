
$(function(){
  $.ajax({
    url: "https://api.github.com/repos/fossasia/gci17.fossasia.org/contributors"
  }).done(function(data){
    data.forEach(function(contributors){
      var html = "<div class='col-md-3 col-sm-6'>";
      html += "<a href="+contributors.html_url+">";
      html += "<img src='icons/github.png'width='20' height='20'/>"
      html += "    "+contributors.login;
      html += "<div class='pic'></a>";
      html += "<img src="+contributors.avatar_url+"><div class='contribs'><p>";
      html += contributors.contributions;
      
      if (contributors.contributions === 1) {
        html += " contribution";
      }
      else {
        html += " contributions";
      }
      $("#contributors").append(html);
    });
    });
});
