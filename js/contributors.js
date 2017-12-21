/* Used to get contributions from the Github API */
function Shuffle(o) {
  for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
};
$(document).ready(function(){
  $.ajax({
    url: "https://api.github.com/repos/fossasia/gci17.fossasia.org/contributors"
  }).done(function(data){
    data.forEach(function(contributors){
      var html = '<div class="card hvr-hang single-mentor">';
      html += '<img src="https://github.com/'+contributors.login+'.png?size=240x240" height="240" width="240">';
      html += '<br>';
      html += '<p class="person-name">'+contributors.login+' ('+contributors.contributions;
      if (contributors.contributions === 1) {
        html += ' contribution)</p><br>';
      } else {
        html += ' contributions)</p><br>';
      }
      html += '<ul class="list-inline social-list social-overlay-list">';
      html += '<a href="'+contributors.html_url+'" class="icon-a">';
      html += '<i class="icon-i fa fa-github fa-2x" aria-hidden="true"></i>';
      html += '</a></ul></div>';
      $("#contributors").append(html);
    });
  });

  $.ajax({
    url: "https://api.github.com/users/fossasia/repos"
  }).done(function(data) {
    Shuffle(data)
    data.forEach(function(repos){
      var html = '<div class="card hvr-hang revealOnScroll single-mentor" data-animation="pulse">';
      html += '<img src="https://github.com/'+repos.owner.login+'.png?size=240x240" height="240" width="240">';
      html += '<br>';
      html += '<p class="person-name">'+repos.name+' ('+repos.open_issues;
      if (repos.open_issues === 1) {
        html += ' Issue)</p><br>';
      } else {
        html += ' Issues)</p><br>';
      }
      html += '<p class="person-name">watchers: '+repos.watchers+'</p><br>';
      html += '<ul class="list-inline social-list social-overlay-list">';
      html += '<a href="'+repos.html_url+'" class="icon-a">';
      html += '<i class="icon-i fa fa-github fa-2x" aria-hidden="true"></i>';
      html += '</a></ul></div>';
      $("#repos").append(html);
    });
  });
});
