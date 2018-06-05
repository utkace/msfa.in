const wrapper = document.querySelector('.wrap');
for (var i = 1; i <= 107; i++) {
  let a = document.createElement('a');
  a.setAttribute("data-fancybox", "gallery");
  a.setAttribute("href", "img/gallery/large/Classroom/Classroom ("+i+").jpg");
  a.setAttribute("data-caption", "Artist wants to convey..");
  let img = document.createElement("img");
  img.src = "img/gallery/small/Classroom/Classroom ("+i+").jpg";
  a.appendChild(img);
  wrapper.appendChild(a);
}

/*if we click on button 2017 */
/*
      $('.ima2').click(function (){
        console.log("hello");
        cont="";
        for (var i = 1; i <= 10; i++) {
  cont += '<a data-fancybox="gallery" href="img/gallery/2017/'+i+'.jpg" data-caption="Artist wants to convey..">'+'<img src="img/gallery/2017/'+i+'.jpg"></a>' ;
  console.log(cont);
}
document.querySelector('.wrap').innerHTML = cont;

      });

      $('.ima3').click(function (){
        cont="";
        for (var i = 11; i <= 26; i++) {
  cont += '<a data-fancybox="gallery" href="img/gallery/2018/'+i+'.jpg" data-caption="Artist wants to convey..">'+'<img src="img/gallery/2018/'+i+'.jpg"></a>' ;
  console.log(cont);
}
document.querySelector('.wrap').innerHTML = cont;

      });
*/
$('.ima1').click(function(){
  location.reload();
});

$(document).ready(function () {
    // Stop Preloader
    $('.loading').hide(); // Hide preloader when document is fully loaded
});
