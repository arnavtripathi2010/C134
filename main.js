img = "";
status = "";
objects = [];

function preload(){
    img = loadImage('dog_cat.jpg');
}


function draw() {
    image(video, 0, 0, 380, 380);

    if(status != "")
    {
        r = random(255);
        g = random(255);
        b = random(255);
        objectDetector.detect(video, gotResult);
        for (i = 0; i < objects.length; i++)
        {
            document.getElementById("status").innerHTMl = "Status : Object Detected";
            document.getElementById("number_of_objects").innerHTML = "Number of objects detected are : " + object.length;
    fill(r,g,b);
    precent = floor(objects[i].confidence * 100);
    text(objects[i].lable + " " + percent + "%", objects[i].x, objects[i].y);
    noFill();
    stroke(r,g,b);
    rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);  
    
        }
    }
}

function setup() {
   canvas = createCanvas(380, 380);
   canvas.center();
   video = createCapture(VIDEO);
   video.size(380,380);
   video.hide();
   objectDetector = ml5.objectDetector('cocossd', modelLoaded);
   document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    console.log("model Loaded!")
    status = true;
    objectDetector.detect(video, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results); 
    object = results;
}