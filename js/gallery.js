let folders = ["Free_Art_Education", "Seedling_Exhibition_2013", "Singing_Workshop"];
let numImg = [127, 29, 6];
let imgs = {};
let imageItems = [];
let dir = "img/gallery/large/";
let i=0, j=0;

for(j=0; j<folders.length; j++)
    imgs[folders[j]] = [];

function getImages() {
    let imageUrl = window.location.href;
    let filename = imageUrl.split("/");
    filename = filename[filename.length-1];
    imageUrl = imageUrl.replace(filename, dir + folders[i] + "/" + folders[i] + "%20("+ 1 +").jpg");
    for(i=0; i<folders.length; i++){
        if(i>0) {
            imageUrl = imageUrl.replace(folders[i - 1], folders[i]);
            imageUrl = imageUrl.replace(folders[i - 1], folders[i]);
        }
        //console.log(imageUrl.indexOf("(1)"));
        for(j=1; j<=numImg[i]; j++){
            if(j===1 && imageUrl.indexOf("(1)")===-1)
                imageUrl = imageUrl.replace("(" + numImg[i-1] + ")", "(" + j + ")");
            else
                imageUrl = imageUrl.replace("(" + (j-1) + ")", "(" + j + ")");
            let imgObj = {
                'title': folders[i] + " " + j,
                'url': imageUrl
            };
            imgs[folders[i]].push(imgObj);
        }
    }
    console.log(imgs);
   for(let directory in imgs){
        let n = imgs[directory].length;  // number of images in directory
        //console.log(directory);
        let large= [];
        let thumbnails = [];
        let titles = [];
        // collect all urls and titles of the directory
        for(j=0; j<n; j++){
            large.push(imgs[directory][j].url);
            thumbnails.push(imgs[directory][j].url.replace("large", "small"));
            titles.push(imgs[directory][j].title);
        }
        for(j=0; j<n; j++){
            let ctitles = titles;
            let clarge = large;
            let cthumbnails = thumbnails;

            //console.log(ctitles);
            let temp = ctitles[j];
            ctitles = ctitles.filter(item => item !== temp);
            ctitles.unshift(temp);

            temp = clarge[j];
            clarge = clarge.filter(item => item !== temp);
            clarge.unshift(temp);

            temp = cthumbnails[j];
            cthumbnails = cthumbnails.filter(item => item !== temp);
            cthumbnails.unshift(temp);
            //console.log(ctitles);

            let imageObj = {
                'title': imgs[directory][j].title,
                'thumbnail': cthumbnails,
                'large': clarge,
                'img_title': ctitles,
                'button_list': [],
                'tags': [directory]
            };
            imageItems.push(imageObj);
        }
    }
    console.log(imageItems);

    //////// -Preloader- /////////
    $('.loading').hide(); // Hide preloader when document is fully loaded

    makeGrid();
}

function makeGrid() {
    $("#gallery-container").elastic_grid({
        'showAllText': 'All',
        'filterEffect': 'scaleup', // moveup, scaleup, fallperspective, fly, flip, helix , popup
        'hoverDirection': true,
        'hoverDelay': 0,
        'hoverInverse': false,
        'expandingSpeed': 500,
        'expandingHeight': 500,
        'items': imageItems
    });
}

function equalizeHeight(){
    var images = $("#og-grid").find("img");
    var heights = {};
    var max;
    for(var idx=0; idx<images.length; idx++){
        var h = images[idx].height;
        if(h in heights)
            heights[h]++;
        else
            heights[h]=1;
        if(max === undefined || heights[h] > heights[max])
            max = h;
    }
    console.log(heights);
    images.css("height", max);
}

$(document).ready(function () {
    getImages(0);
    equalizeHeight();
});
