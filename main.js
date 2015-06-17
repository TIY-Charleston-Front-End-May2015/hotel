$(document).ready(function () {
  page.init();
});


var json =  "/.json";
var subredditURL = ["video","pics","funny"]

var page = {

url: 'https://www.reddit.com/r/' + subredditURL[2],


  init: function () {
    page.initStyling();
    page.initEvents();
  },

  initStyling: function () {
    $('.search').on('change', function(e) {
      e.preventDefault();
      page.addSubReddits()
      page.getSubReddits();
      page.getSubNames();
    });

  },

  initEvents: function () {


  },

  addSubReddits: function(event) {
      // event.preventDefault();
      subredditURL.push($('.search').val());


  },

  getSubReddits: function () {

    //  var eachOne = _.each(subredditURL, function(el,value){
    //    console.log(el,value)
    //    if (value === )
    // })

    $.ajax({
    url: page.url + json,
    method: 'GET',
    success: function (videos) {
      console.log(videos);
    var vids = videos.data.children.slice(0,3);
    // console.log(vids);
    var newVids = _.map(vids, function(el) {
      return {
        title: el.data.title,
        thumbnail: el.data.thumbnail,
        url: el.data.url,
        score: el.data.score,
        over18: el.data.over_18,
        author: el.data.author,
        ups: el.data.ups,
        downs: el.data.downs,
        subreddit: el.data.subreddit,
      }
    })



    // console.log(newVids);
    var videoTmpl = _.template($('#videoTmpl').html());

    _.each(newVids, function (el) {
      // console.log(videoTmpl(el));
      $('.goHere').append(videoTmpl(el));
    });
    },
    error: function (err) {
      console.log("subreddit error:", err);
    }
  });

},

 getSubNames: function () {

   $.ajax({
   url: page.url + json,
   method: 'GET',
   success: function (videos) {
     console.log(videos);
   var vids = videos.data.children.slice(0,1);
   // console.log(vids);
   var newVids = _.map(vids, function(el) {
     return {
       subreddit: el.data.subreddit,
     }
   })

   // console.log(newVids);
   var subTmpl = _.template($('#subTmpl').html());

   _.each(newVids, function (el) {
     // console.log(videoTmpl(el));
     $('.goHere').append(subTmpl(el));
   });
   },
   error: function (err) {
     console.log("subreddit error:", err);
   }
 });

}

};
