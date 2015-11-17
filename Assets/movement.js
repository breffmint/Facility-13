#pragma strict
var speed : float = 1.0;
var instance : GameManager;
var moving = false;
var pos : Vector2;
var spotlight : Light;
var grid : Projector;
var canMove;
function Start () {
	instance = FindObjectOfType(GameManager);
	spotlight = FindObjectOfType(Light);
	grid = FindObjectOfType(Projector);
	canMove = true;
}

function Update () {
	if(canMove == true){
	if (instance.inBattle === false){ //non grid-based movement if not in battle
	spotlight.enabled = true;//light on out of battle
	grid.enabled = false; //no grid out of battle
     var move = Vector3(Input.GetAxis("Horizontal"), Input.GetAxis("Vertical"), 0); //on keyboard input is -1 to 1 for each axis
     transform.position += 5 * move * speed * Time.deltaTime;
 } else{ //grid-based movement when in battle
	//spotlight.enabled = false; //light off in battle
	grid.enabled = true; //grid on in battle
	transform.position.x = Mathf.Floor(transform.position.x);
	transform.position.y = Mathf.Floor(transform.position.y);
	/**pos = transform.position;
	 checkInput();
	 if(moving){
		 transform.position = pos;
		 moving = false;
	 }**/
	 if(Input.GetKeyDown(KeyCode.V)){ //temp way to end battle by pressing V.
		 instance.inBattle = false;
	 }
	}
	}
}

//WASD and arrow key movement
var checkInput = function(){
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


