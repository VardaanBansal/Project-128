music = "";
musics = "";
leftWristX = "";
leftWristY = "";
rightWristX = "";
rightWristY = "";


function preload()
{
loadSound();
}

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);


    canvas = createCanvas(500, 500);
    canvas.center()

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function draw()
{
    image(video, 0, 0, 300, 300);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " +leftWristX +"leftWristY = "+ leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = "+ rightWristX+ "rightWristY = "+ rightWristY);
    }
}