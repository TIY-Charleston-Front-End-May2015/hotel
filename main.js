var threeObjs = videos.data.children.slice(0,3);

var newVideoData = _.map(threeObjs, function(el) {
  return {
    title: el.data.title,
  }
})

var videoTmpl = _.template($('#videoTmpl').html());

_.each(newVids, function (el) {
  console.log(videoTmpl(el));
  $('.goHere').append(videoTmpl(el));
});
