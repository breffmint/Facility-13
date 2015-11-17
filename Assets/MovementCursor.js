#pragma strict
var boardManager : BoardManager;
var gameManager : GameManager;
var moving = false;
var pos : Vector2;
var battleTurns : BattleTurns;
var player : GameObject;
var playerSpeed: float;
var currentPosX : float;
var currentPosY : float;
player = GameObject.Find("smug af");
boardManager = FindObjectOfType(BoardManager);
gameManager = FindObjectOfType(GameManager);
battleTurns = FindObjectOfType(BattleTurns);

function Start () {

  gameObject.SetActive(false);
	playerSpeed = 3;
}

function Update () {
	if(gameManager.inBattle == true && battleTurns.playerMove == true){
		//Debug.Log("Switching to movement cursor");
		pos = transform.position;
		

		checkInput();
		if(moving){
			transform.position = pos;
			moving = false;
		}
			currentPosX = player.transform.position.x;
	currentPosY = player.transform.position.y;
		
		if(battleTurns.playerMove == true){//movement cursor IS within range
		if(Input.GetKeyDown(KeyCode.Z)){
		//player chooses to move with Z
		if((Mathf.Abs(transform.position.x - currentPosX) + Mathf.Abs(transform.position.y - currentPosY)) <= playerSpeed){
		print("moving");
		 player.transform.position = transform.position;
		 battleTurns.playerMove = false;
		 
	 }
	 else{
	 print("can't move " + (Mathf.Abs(transform.position.x - currentPosX) + Mathf.Abs(transform.position.y - currentPosY)) + " " + playerSpeed);
	}
	}
}
}
}
//WASD / arrow key movement
function checkInput(){
	if(Input.GetKeyDown(KeyCode.D) || Input.GetKeyDown(KeyCode.RightArrow)){ //move right with D or right arrow
		pos += Vector2.right;
		moving = true;
	}else if(Input.GetKeyDown(KeyCode.A) || Input.GetKeyDown(KeyCode.LeftArrow)){ //move left with A or left arrow
		pos -= Vector2.right;
		moving = true;
	}else if(Input.GetKeyDown(KeyCode.W) || Input.GetKeyDown(KeyCode.UpArrow)){ //move up with W or up arrow
		pos += Vector2.up;
		moving = true;
	}else if(Input.GetKeyDown(KeyCode.S) || Input.GetKeyDown(KeyCode.DownArrow)){ //move down with S or down arrow
		pos -= Vector2.up;
		moving = true;
	}
};
