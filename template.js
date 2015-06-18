

var templates = {};

templates.redditVideo = [
'<div class ="col-md-4 columnOne">'

'<a class="viUrl" href = "<%= url %>">'
'<div style=
"background-image: url(<%= thumbnail %>);
 background-size: 280px 280px;
 height:24em;
 background-repeat:no-repeat;
 background-position: center center;
 padding-top: 22em;"'
 '</div>'
 '</a>'

 '<button type="button" id="" class="btn btn-default" data-container="body" data-toggle="popover" data-placement="left" data-content="<!--JSON data goes    here-->The Odd Couple of the Marvel Universe, Cable is a soldier from the future,
             fighting for peace today while Deadpool is the wisecracking, gun-for-hire
             by-product of the military’s Weapon X program.">
             info
         </button>'

 '<div>'
   '<i class="fa fa-user cool center-text"> <%= author %></i><i class="fa fa-chevron-up cool center-text"><%= ups %></i><i class="fa fa-chevron-down cool center-text"><%= downs %></i>'

' </div>'
 '</div>'
].join("");
