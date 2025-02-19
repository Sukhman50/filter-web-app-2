nose_x = 0;
nose_y = 0;
function preload()
{
    
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    image(video, 0, 0, 300, 300);
}

function take_snapshot()
{
    save('myphoto.png');
}

function modelLoaded()
{
    console.log("The model is ready sir!!!!!!!!!!!!!");
}

function gotPoses(results) 
{
     if (results.length > 0) {
        console.log(results);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        console.log("nose x = " + nose_x);
        console.log("nose y = " + nose_y);
     }  
}