$(document).ready(function () {
  page.init();
});

var json =  "/.json";

var page = {

url: 'https://www.reddit.com/r/videos/',


  init: function () {
    page.initStyling();
    page.initEvents();
  },

  initStyling: function () {

    page.getSubReddits();

  },

  initEvents: function () {


  },

  getSubReddits: function () {

  $.ajax({
    url: page.url + json,
    method: 'GET',
    success: function (videos) {
      console.log(videos);
    var vids = videos.data.children.slice(0,3);
    console.log(vids);
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
    console.log(newVids);
    var videoTmpl = _.template($('#videoTmpl').html());

    _.each(newVids, function (el) {
      console.log(videoTmpl(el));
      $('.goHere').append(videoTmpl(el));
    });
    },
    error: function (err) {
      console.log("subreddit error:", err);
    }
  });
 }
};
