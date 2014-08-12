(function($, io, ss) {

  var video;
  var ssvideo;

  function prepareSocketIo() {
    video = io('/video'); 
    ssvideo = ss(video);
    console.log(video);

    video
      .on('connect', function(data) {
        console.log('client connected');
        video.emit('msg', 'client response');
      })

      .on('msg', function(msg) {
        console.log(msg);
      });
  }

  function prepareVideoUpload() {
    $('#video').change(function() {
      console.log('selected');
      var file = this.files[0];
      var stream = ss.createStream();

      ssvideo.emit('upload', stream);
      ss.createBlobReadStream(file).pipe(stream);
    });
  }

  $(function() {
    prepareSocketIo();
    prepareVideoUpload();
  });
})(window.jQuery, io, ss);