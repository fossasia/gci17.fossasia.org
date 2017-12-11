/* Used to get contributions from the Github API */
$(function(){
  $.ajax({
    url: "https://api.github.com/repos/fossasia/gci17.fossasia.org/contributors"
  }).done(function(data){
    data.forEach(function(contributors){
      var html = '<div class="card hvr-hang">';
      html += '<img src="https://github.com/'+contributors.login+'.png?size=240x240" height="240" width="240">';
      html += '<br>';
      html += '<p class="person-name">'+contributors.login+' ('+contributors.contributions;
      if (contributors.contributions === 1) {
        html += ' contribution)</p><br>';
      } else {
        html += ' contributions)</p><br>';
      }
      html += '<ul class="list-inline social-list">';
      html += '<a href="'+contributors.html_url+'" class="icon-a">';
      html += '<i class="ti-github icon-i"></i>';
      html += '</a></ul></div>';
      $("#contributors").append(html);
    });
  });
});
