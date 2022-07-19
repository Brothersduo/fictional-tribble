
lol_X = 0;
lol_Y = 0;
function preload()
{
    lol_thing = loadImage('https://i.postimg.cc/KcBJhBMJ/the-one.png');
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide()

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        nose_X = results[0].pose.nose.x - 30;
        nose_Y = results[0].pose.nose.y - 68;
        lol_X = results[0].pose.nose.x - 15;
        lol_Y = results[0].pose.nose.y - 15;
        console.log("nose x  = " + results[0].pose.nose.x);
        console.log("nose y  = " + results[0].pose.nose.y);
        
    }
}

function modelLoaded()
{
    console.log('PoseNet is Initialized');
}

function draw()
{ image(video, 0, 0,300, 300);
    image(lol_thing, lol_X, lol_Y, 40, 40);
}

function take_snapshot()
{
    save('Filterified_Image.png')
}

