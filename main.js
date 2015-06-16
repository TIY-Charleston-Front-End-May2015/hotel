var vids = videos.data.children.slice(0,3); // Top 3 objs

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

var videoTmpl = _.template($('#videoTmpl').html());

_.each(newVids, function (el) {
  console.log(videoTmpl(el));
  $('.goHere').append(videoTmpl(el));
});
