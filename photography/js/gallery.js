var slideIndeximages = 0;
showSlidesimages();

function showSlidesimages() {
  var i;
  var slidesimages = document.getElementsByClassName("mySlidesimages");
  var dotsimages = document.getElementsByClassName("dotimage");
  for (i = 0; i < slidesimages.length; i++) {
    slidesimages[i].style.display = "none";  
  }
slideIndeximages++;
  if (slideIndeximages > slidesimages.length) {slideIndeximages = 1}    
  for (i = 0; i < dotsimages.length; i++) {
    dotsimages[i].className = dotsimages[i].className.replace(" active", "");
  }
  slidesimages[slideIndeximages-1].style.display = "block";  
  setTimeout(showSlidesimages, 2000); // Change image every 3 seconds
}