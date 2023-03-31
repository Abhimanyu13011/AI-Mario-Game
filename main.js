noseX="";
noseY="";
function preload() {
	world_start = loadSound("world_start.wav");
	game_over = loadSound("gameover.wav");
	mario_kick = loadSound("kick.wav");
    mario_coin = loadSound("coin.wav");
	mario_jump = loadSound("jump.wav");
	mario_die = loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);
	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent('game_console');
    posenet=ml5.poseNet(video,model_loaded);
	posenet.on("pose",gotposses);
}

function model_loaded(){
	console.log(" model_loaded");
}

function gotposses(results){

	if(results.length > 0){
		console.log(results);

		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
	}
}

function draw() {
	game()
}








