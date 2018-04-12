var folders = ["folder1", "folder2", "folder3", "folder4"];
var imageItems = [];
var dir = "gallery/large/";
var tdir = "gallery/small/";
var i=0;

function getImages(i) {
    $.ajax({
        url:dir+folders[i]+"/",
        //async: false,
        success: function (data) {
            // document.write(data);
            $(data).find("a:contains(.png)").each(function () {
                // create object
                var imageUrl = this.href;
                var filename = imageUrl.split("/");
                filename = filename[filename.length-1];
                var imageTitle = filename.split(".");
                imageTitle = imageTitle[0];
                imageUrl = imageUrl.replace(filename, dir+folders[i]+"/"+filename);
                var imageObj = {
                    'title': imageTitle,
                    'thumbnail': imageUrl.replace("large", "small"), //['images/small/4.jpg', 'images/small/5.jpg', 'images/small/6.jpg', 'images/small/7.jpg'],
                    'large': imageUrl, //['images/large/4.jpg', 'images/large/5.jpg', 'images/large/6.jpg', 'images/large/7.jpg'],
                    'img_title': ['jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid'],
                    'button_list': [],
                    'tags': [folders[i]]
                }
                //console.log(imageObj);
                imageItems.push(imageObj);
                // $("#gallery-container").append("<img src='" + dir + folders[i] + "/" + filename + "'>");
            });
        },
        error: function(e){
            console.log(e);
        },
        complete: function(d) {
            if(i<folders.length-1)
                getImages(i+1);
        }
    });
    // console.log("Found " + images.length + " images in " + folders[i] + ".");
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

function fakeImages() {
    tags = ['portrait', 'landscape', 'hulalala'];
    for(var i=0; i<10; i++){
        var imageObj = {
            'title'         : 'Swiss chard pumpkin',
            'description'   : 'description',
            'thumbnail'     : ['gallery/small/folder1/3.png', 'gallery/small/folder1/3.png'],
            'large'         : ['gallery/large/folder1/3.png', 'gallery/large/folder1/3.png'],
            'img_title'     : ['title1', 'title', 'ftitle'],
            'button_list'   : [ { 'title':'Demo', 'url' : 'http://bonchen.net/' }, { 'title':'Download', 'url':'http://porfolio.bonchen.net/'}],
            'tags'          : [tags[Math.floor(Math.random()*3)]]
        }
        imageItems.push(imageObj);
    }
}

$(document).ready(function () {
    //getImages(0);
    fakeImages();
    console.log(imageItems);
    makeGrid();
});