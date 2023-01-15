window.onload = fadeIn;

     function fadeIn() {
         var fade = document.getElementById("body");
         var opacity = 0;
         var intervalID = setInterval(function() {

             if (opacity < 1) {
                 opacity = opacity + 0.25
                 fade.style.opacity = opacity;
             } else {
                 clearInterval(intervalID);
             }
         }, 70);
     }
