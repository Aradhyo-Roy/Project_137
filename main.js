video="";
object=[];
status="";
function preload(){
    video=createVideo("video.mp4");
    video.hide();
}
function setup(){
    canvas=createCanvas(480,380);
    canvas.center();
}
function draw(){
    image(video,0,0,480,380);
    if(status != ""){
        objectDetector.detect(video, gotResult);
        for (i = 0; i < object.length; i++) {
            document.getElementById("status"),innerHTML=status + "Object detcted";
            document.getElementById("number_of_objects").innerHTML="Number of objects detected are : "+ object.length;

            fill("#FFd700");
            percent=floor(object[i].confidence * 100);
            text(object[i].label+" "+percent+"%", objects[i].x + 15, object[i].y+15);
            nofill();
            stroke("FFd700");
            rect(object[i].x, object[i].y,object[i].width,object[i].height);
        }
    }
}
function gotResult(error, result){
    if(error){
        console.log(error);
    }
    console.log(result);
    object=result;
}
function start(){
    if (object[i].label == object_name) {
        document.getElementById("object_staus").innerHTML=object_name+"Found";
    }
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting object";
}
function modelLoaded(){
    console.log("Model Loaded!");
    status=true;
    video.loop();
    video.speed(1);
    video.volume(0);
}