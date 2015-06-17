var templates = {};

templates.redditVideo = [

  '<div class ="col-md-4 columnOne">'

  '<a class="viUrl" href = "<%= url %>">'
  '<img class="redditPicture" src="<%= thumbnail %>">'
  '</a>'


  '<i class="fa fa-user cool"> <%= author %></i><i class="fa fa-chevron-up cool"><%= ups %></i><i class="fa fa-chevron-down cool"><%= downs %></i>'
  '</div>'


  '<div class= "dropdown">'
  '<button class="info-button"><span><i class="fa fa-reddit"></i></span>'
     '<ul class="dropdown-menu">'
       '<li class="dropdown-content"><p class="listItemTitle"><%= title %></p>'
         '<p class="descrip">'
           'Score: <%= score %> <br>'
           'Adult Content?: <%= over18 %>'
         '</p>'
       '</li>'
     '</ul>'
  '</div>'
  '</button>'

  '</div>'



].join("");
