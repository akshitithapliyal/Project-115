lipstick_x=0;
lipstick_y=0;

function preload(){
lips=loadImage('https://i.postimg.cc/PxFvYgkv/l1.png');
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotposes);
}

function modelLoaded(){
    console.log('poseNet is on and intialized');
}

function draw(){
image(video,0,0,300,300);
image(lips,lipstick_x,lipstick_y,50,20);
}

function take_snapshot(){
    save('mylipstick.png');
}

function gotposes(results){
if(results.length>0){
    console.log(results);
    lipstick_x=results[0].pose.nose.x-15;
    lipstick_y=results[0].pose.nose.y+15;
}
}
