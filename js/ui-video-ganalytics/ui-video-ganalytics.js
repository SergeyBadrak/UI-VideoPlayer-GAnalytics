(function ( $ ) {

$.fn.uiPlayVideoGAnalytics = function( options ) {
	
//	----------------- Variables ------------------------
    var settings = $.extend({
        
        //  Set Default Setting
            playBtn: "play_video",
            hideBtn: "hide_video_btn",
            sentToAnalytics: true
        
        }, options );
    
    
    
        
//  ******** Main Code for Video Player Start ********
    
    $(document).on('click', "." + settings.playBtn, function(e) {
        e.preventDefault();
        
      //  Pause all videos on the page before played selected video
      $('body').find("video").each(function () {
          this.pause();
          $(this).attr('controls',false);
      });
      $('body').find("." + settings.hideBtn).removeClass(settings.hideBtn);
        
        
        // Hide Play Button for cuurent video
        $(this).addClass(settings.hideBtn);
        
        // Find video source
        var videoid = $(this).attr('data-video-source');
        var video = $(videoid).get(0);
        
        video.play();
        $(video).attr('controls',true);
        
//  ******** Main Code for Video Plaer End ********   
        
     
        
        
              
        
        
// If we wont to send data to Google Analitics
        if (settings.sentToAnalytics) {  
            gAnalyticsEventListener();
        } 
        
   
        
        
        
//   ********   Google Analitics Event Listener Start ******** 
        
        
        
    //  set the name of event category for Analytics Report       
        var category = 'Videos';
    //  set the name of event label for Analytics Report         
        var action_label = '';
        var timePlayback = ''; 
        var videoTitle = $(video).attr("title");
        
        
        
        function gAnalyticsEventListener() {    
        
        var a = true;
        var b = true;
        var c = true;
        

        
    /* Start Video Play */
    $(videoid).bind("play", function() {
        console.log("Start Video Play");
        sendToAnalitics(category, 'video played', videoTitle, timePlayback);
    });
     
    /* Video Paused */    
    $(videoid).bind("pause", function() {  
        sendToAnalitics(category, 'video paused', videoTitle, timePlayback);
//        console.log("paused");    
    }); 
        
    /* Video Finished, Thanks */
    $(videoid).bind("ended", function() {
        sendToAnalitics(category, 'watched 100%', videoTitle, timePlayback);
        console.log("watched 100%");
    });
        
    /* Video Play Progress  */
    $(videoid).bind("timeupdate", function() {
        var currentTime = this.currentTime;
        
                if (currentTime > (0.75 * (this.duration))) {
                    if (c) {
                        console.log("watched 75%");
                        sendToAnalitics(category, 'watched 75%', videoTitle, timePlayback);
                        c = false; 
                    }
                } 
        else if (currentTime > (0.50 * (this.duration))) {
                    if (b) {
                        console.log("watched 50%");
                        sendToAnalitics(category, 'watched 50%', videoTitle, timePlayback);
                        b = false; 
                    }
                } 
        else if (currentTime > (0.25 * (this.duration))) {
                    if (a) {
                        console.log("watched 25%");
                        sendToAnalitics(category, 'watched 25%', videoTitle, timePlayback); 
                        a = false;    
                    }
                }
    }); 
            
    }        
        
//   ********   Google Analitics Event Listener End ********        
        
     
            
            
        
//   *************   Send To Google Analytics Start *************
        
        function sendToAnalitics(category, action_label, fullName, timePlayback) {
            
            gtag('event', action_label, {
              'event_category': category,
              'event_label': videoTitle,
              'time_playback': timePlayback  
            });
            
        }
        
//   *************   Send To Google Analytics End *************
        
        
        
     
        
        
        return false;
    });

    
};
    
}( jQuery ));
