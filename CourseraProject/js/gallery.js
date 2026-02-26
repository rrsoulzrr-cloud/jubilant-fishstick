/*Name this external file gallery.js*/

function upDate(previewPic){
    console.log("Mouse over!");
    console.log("Alt text:", previewPic.alt);
    console.log("Source:", previewPic.src);
  
    document.getElementById('image').innerHTML = previewPic.alt;
    document.getElementById('image').style.backgroundImage = "url(" + previewPic.src + ")";

}

function unDo(){
    document.getElementById('image').innerHTML = "Hover over an image below to display here.";
    document.getElementById('image').style.backgroundImage = "url('')";
		
}

function galleryLoad(){
    console.log("Gallery has been loaded.");

    let images = document.querySelectorAll(".preview");

    for (let i=0;i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
    }

}