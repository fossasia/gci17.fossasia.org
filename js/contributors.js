$(function(){
  $.ajax({
    url: "https://api.github.com/repos/fossasia/gci17.fossasia.org/contributors"
  }).done(function(data){
    data.forEach(function(contributors){
      var html = "<div class= col-md-3 col-sm-6'>";
      html += "<a href="+contributors.html_url+">";
      html += "<img src='icons/github.png'width='20%' height='20%'/>"
      html += "    <hover>&nbsp&nbsp<font color='black'>"+contributors.login+"&nbsp&nbsp</font></hover>";
      html += "<div id='hoverpic'><img src="+contributors.avatar_url+"></div></a>";
      html += contributors.contributions;
      if (contributors.contributions == 1) {
        html += " contribution";
      }
      else {
        html += " contributions";
      }
      $("#Contributors").append(html);
    });
    });
});
