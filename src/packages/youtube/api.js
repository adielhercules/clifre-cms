export default class YoutubeAPI {
  constructor(domelement, onReady, onChange, onCall) {
    let scope = this;

    let tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    let firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    this.player;


    window.onYouTubeIframeAPIReady = function () {
      scope.player = new YT.Player(domelement, {
        height: '200',
        width: '328',
        videoId: 'M7lc1UVf-VE',
        playerVars: {
          rel: 0,
          controls: 0,
          showinfo: 0
        },
        events: {
          'onReady': function(event) {
            onReady.call(null, event);
          },
          'onStateChange': function(event) {
            onChange.call(null, event);
          }
        }
      });

      if ( typeof onCall === "function" ) {
        onCall.call(null, scope.player);
      }
    }


  }
}
