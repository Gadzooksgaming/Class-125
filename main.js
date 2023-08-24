noseX=0;
noseY=0;
difference=0;
leftwrist=0;
rightwrist=0;



function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
   

function draw(){
    
    fill("grey");
    stroke("yellow");
    square(noseX,noseY,difference);
}
}

function modelLoaded(){
    console.log("initialized")
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("x is"+noseX+"y is"+noseY);


        leftwristX=results[0].pose.leftWrist.x;
        rightwristX=results[0].pose.rightWrist.x;
        difference=leftwristX-rightwristX;
        document.getElementById("square_side").innerHTML="width and height of square will be="+difference+"px";
    }
}