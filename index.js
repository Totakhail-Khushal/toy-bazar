// var cip = $(".video").hover( hoverVideo, hideVideo );

// function hoverVideo(e) {  
//     $('video', this).get(0).play(); 
// }

// function hideVideo(e) {
//     $('video', this).get(0).pause(); 
// }



<script>
var frame = document.getElementById('myFrame');
    frame.onload = function () {
        var body = frame.contentWindow.document.querySelector('body');
        body.style.color = 'red';
        body.style.fontSize = '20px';
        body.style.lineHeight = '20px';
    };
</script>



