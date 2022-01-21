  

function setup() {
	canvas =  createCanvas(600, 500);
	canvas.center();

	video = createCapture(VIDEO);
	video.hide();

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
	if(results.length > 0)
	{
		console.log(results);

		leftWristX = results[0].pose.leftWrist.x;
		leftWristY = results[0].pose.leftWrist.y;
		difference = floor(leftWristX - rightWristX);
        
	}
}
function draw() {
	background('#6C91C2');
    textSize(10);
    fill('#FFE787');
    text('Peter', 50, 400);  
}

		

