(function($, io) {

  function prepareSocketIo() {
    var socket = io('/video'); 
    socket.on('connect', function(data) {console.log('wow so connect');});
    socket.on('msg', function(data) {
      console.log(data);
      socket.emit('msg', 'reply from client');
    });
    setTimeout(function() {
      socket.emit('msg', 'message from client');
    }, 1000);
  }

  function prepareVideoUpload() {
    $('#video').change(function() {
      // file = this.files[0];
      // fReader = new FileReader();

      // var Content = "<span id='NameArea'>Uploading " + file.name + "</span>";
      // Content += '<div id="ProgressContainer"><div id="ProgressBar"></div></div><span id="percent">0%</span>';
      // Content += "<span id='Uploaded'> - <span id='MB'>0</span>/" + Math.round(file.size / 1048576) + "MB</span>";
      // $('#prog').html(Content);

      // FReader.onload = function(e){
      //   socket.emit('upload', e.target.result });
      // }
      // socket.emit('start', file.size });
    });
  }

  $(function() {
    prepareSocketIo();
    prepareVideoUpload();
  });
})(window.jQuery, io);