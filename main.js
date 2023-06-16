function setup(){
    canvas = createCanvas(640,480);
    canvas.position(430,200);
    video= createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,640,480);
    fill(0,0,130);
 rect(0, 75, 55, 340);
 rect(585, 75, 55, 340);
 rect(75, 0, 510, 55);
 rect(75, 425, 510, 55);
    fill(254,0,0);
 circle(30,30,100);
 circle(610,30,100);
 circle(30,450,100);
 circle(610,450,100);

}

function takesnapshot(){
    save("birthdayimage.png");
}
