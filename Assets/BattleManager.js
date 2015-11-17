#pragma strict
var playerStrength = 10;
var playerVitality = 25;
var playerSpeed = 3;
var playerHP = 4 * playerVitality;
var gameManager : GameManager;
var player : GameObject;
var movement : movement;
var movementCursor : GameObject;
var playerMove = false; //player's turn to move

function Start () {
	gameManager = FindObjectOfType(GameManager);
	player = GameObject.Find("smug af");
	movementCursor = GameObject.Find("Movement Cursor");
}
/**NOTE: Currently working on implementing turns.  Turns do not progress as they should.**/
function Update () {
	//in battle
	if(gameManager.inBattle == true){
		Debug.Log("in battle");
		movementCursor.SetActive(true);
	}else{
		movementCursor.SetActive(false);
	
}
}


function playerTurn(){
	//movement
	playerMove = true;
	var currentPosX = player.transform.position.x;
	var currentPosY = player.transform.position.y;
	//taxicab method, determines if movement cursor is in movement range
	if(Mathf.Abs(movementCursor.transform.position.x - currentPosX) + Mathf.Abs(movementCursor.transform.position.y - currentPosY) > playerSpeed){
		Debug.Log("can't move");
	}else if(playerMove == true){//movement cursor IS within range
		if(Input.GetKeyDown(KeyCode.Z)){ //player chooses to move with Z
		 player.transform.position = movementCursor.transform.position;
		 playerMove = false;
	 }
	}
}
//player move
//player attack
//each enemy move
//each enemy attack