# UI-VideoPlayer-GAnalytics
HTML 5 Video Player with Google Analytics event tracking


<h4>Demo</h4> 
https://artium.com.ua/projects/demo/UI-VideoPlayer-GAnalytics/


<h2>Requirements: </h2>
<ul>
<li>Google Analytics</li>
</ul>


<h2>Installation</h2>

1. Add CSS style in head
```HTML 
<link href="js/ui-video-ganalytics/ui-video-ganalytics.css" rel="stylesheet" type="text/css">
```
2. Add jQuery library
```HTML 
 <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
 ``` 
 
3. Add JS after jQuery
```HTML 
 <script src="js/ui-video-ganalytics/ui-video-ganalytics.js"></script> 
```  
4. Initialise script
```JS 
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
<p></p>

<h2>How to use</h2>

<h4>Для отслеживания действий по просмотру видео необходимо подключить код глобального тега Google Analytics <b>gtag</b>. </h4>
Подробнее https://developers.google.com/analytics/devguides/collection/gtagjs/sending-data

Примерный код глобального тега выглядит так:
```html
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-116704025-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-116704025-1');
</script>
```




<h4>Video Player Example HTML code structure:</h4>

```html
 <div class="col-12 col-lg-6 videos">
     <a class="play_btn play_video" data-video-source="#video_1" href="#"></a>
     <video id="video_1" title="video 1" preload="none" poster="images/poster-1.jpg">
         <source src="video/1.mp4" type="video/mp4">
     </video>
     <h4>Video 1</h4>
 </div>
```

Set in <b>data-video-source</b> id of video to be played.


