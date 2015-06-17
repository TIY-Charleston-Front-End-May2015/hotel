$(document).ready(function () {
  page.init();
});

var json =  "/.json";
var subredditURL = ["video","pics","funny"]

var page = {

url: 'https://www.reddit.com/r/' + subredditURL[0],
urlWithoutInitialSubreddit: "https://www.reddit.com/r/",


  init: function () {
    page.initStyling();
    page.initEvents();
  },

  initStyling: function () {
    $('.search').on('change', function(e) {
      e.preventDefault();
      page.addSubReddits()
      page.getSubReddits();
    });

    page.getSubReddits();

  },

  initEvents: function () {
    $('.toggle').on('click', 'a', page.togglePages);


  },

  togglePages: function (event) {
    event.preventDefault();
    var clickedPage = $(this).attr('rel');
    $(clickedPage).siblings().removeClass('active');
    $(clickedPage).addClass('active');
  },

  addSubReddits: function(event) {
      // event.preventDefault();
      subredditURL.push($('.search').val());

  },



  getSubReddits: function () {
    var newEarl
    _.each(subredditURL, function(el,idx){
      if($('.search').val() === el) {
      //  page.getSubReddits;
        newEarl = idx
      }
   })
   console.log("NewEarl: ", newEarl)
   console.log("ITEM: ", subredditURL[newEarl])


    $.ajax({
    url: page.urlWithoutInitialSubreddit + subredditURL[newEarl] + json,
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
      subredditName = el.data.subreddit;
    })



    // console.log(newVids);
    var videoTmpl = _.template($('#videoTmpl').html());

    _.each(newVids, function (el) {
      // console.log(videoTmpl(el));
      $('.goHere').prepend(videoTmpl(el));
    });
    },
    error: function (err) {
      console.log("subreddit error:", err);
    }
  });


},



};
