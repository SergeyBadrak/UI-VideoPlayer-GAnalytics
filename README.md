# UI-VideoPlayer-GAnalytics
HTML 5 Video Player with Google Analytics event tracking


<h4>Demo</h4> 
https://artium.com.ua/projects/demo/UI-VideoPlayer-GAnalytics/


<h4>Installation</h4>

1. Add CSS style in head
``` 
<link href="js/ui-video-ganalytics/ui-video-ganalytics.css" rel="stylesheet" type="text/css">
```
2. Add jQuery library
``` 
 <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
 ``` 
 
3. Add JS after jQuery
``` 
 <script src="js/ui-video-ganalytics/ui-video-ganalytics.js"></script> 
```  
4. Initialise script
``` 
<script>
	$(document).ready(function() { 
  	$().uiPlayVideoGAnalytics(
        {
            playBtn: "play_video",
            hideBtn: "hide_video_btn",
            sentToAnalytics: true
        }
    );
	});
  </script>
  ``` 

<h4>HTML structure for video player</h4>
```
<div class="col-12 col-lg-6 videos">
     <a class="play_btn play_video" data-video-source="#video_1" href="#"></a>

     <video id="video_1" title="video 1" preload="none" poster="images/poster-1.jpg">
     <source src="video/1.mp4" type="video/mp4">
     </video>
     <h4>Video 1</h4>
</div>
```
