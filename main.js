var vids = videos.data.children.slice(0,3); // Top 3 objs

var newVids = _.map(vids, function(el) {
  return {
    title: el.data.title,
    thumbnail: el.data.thumbnail_url,
    url: el.data.url,
    html: el.data.html,
  }
})

var videoTmpl = _.template($('#videoTmpl').html());

_.each(newVids, function (el) {
  console.log(videoTmpl(el));
  $('.goHere').append(videoTmpl(el));
});
