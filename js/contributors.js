/* Used to get randomize repositories by using the Github API */
function shuffle(o) {
  for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
};

/* Used to get contributions from the Github API */
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
    shuffle(data)
    data.forEach(function(repos){
      var html = '<div class="card hvr-hang revealOnScroll single-mentor aos-all aos-item" data-aos="flip-left">';
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

  $.getJSON("https://api.github.com/repos/fossasia/gci17.fossasia.org/issues?state=open", function (allIssues) {
    if(allIssues==""||!allIssues||allIssues==0||allIssues=="undefined"){
      $(".issue-container").append("<li class='mi'>Sorry there are no issues labeled feature currently opened at gci17.fossasia.org</li>");
    }

    $(".issue-container").append("<a href='https://github.com/fossasia/gci17.fossasia.org/issues' class='btn totalIssue'>" + allIssues.length + " activities on <i class='fa fa-github'></i> Github");

    $.each(allIssues, function (i, issue) {
      issueArr.push([issue.number, issue]);
      issueHref = "https://github.com/fossasia/gci17.fossasia.org/issues/";
      issueHref += issue.number
      issueAppend = "<li class='issue' data-aos='flip-up'>" + "<span class='issueNum'>#" + issue.number + "</span> <a href='" + issueHref + "'>" + issue.title + "</a> ";
      issueAppend += "<span class='open'>Opened by " + "<a href='" + issue.user.html_url + "'>" + issue.user.login + "</a></span>";
      issueAppend += "<span class='comments'><i class='fa fa-comment' aria-hidden='true'></i> " + issue.comments + "</span>" ;
      issueAppend += "</li>";
      $(".issue-container").append(issueAppend);
    });
  });
});
