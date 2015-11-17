var action : String;
var active : String;
var displayGui = false;
var playerMove = false;
var gameManager : GameManager;
gameManager = FindObjectOfType(GameManager);
var boardManager : BoardManager;
boardManager = FindObjectOfType(BoardManager);
var enemyList;
var movementCursor : GameObject;
movementCursor = GameObject.Find("Movement Cursor");
var playerStats : PlayerStats;
playerStats = FindObjectOfType(PlayerStats);
var cursorPos : Vector2;
var currentPosX : float;
var currentPosY : float;
var playerSpeed = 3;
var player : GameObject;
player = GameObject.Find("smug af");
var battleReady = true;


function Start(){
enemyList = boardManager.enemyList; //list of spawned enemies
}

function Update(){
if(gameManager.inBattle == true && battleReady == true){
Battle();
}
}
function Battle () 
{
	battleReady = false;
    while (gameManager.inBattle == true)
    {
		yield PlayerMovement();//player movement
        yield PlayerChoice();//player chooses action
        yield BattlePhase();//player attack is applied
        yield TurnEnd();//player turn ends
		//ADD enemy movement
         yield EnemyChoice();//enemy chooses attack/action
         yield BattlePhase(); //applies enemy choice
         yield TurnEnd();//enemy turn ends
     }


}

function PlayerMovement(){
	print("human moves");
	//cursor and player movement happens in MovementCursor.js
	currentPosX = player.transform.position.x;
	currentPosY = player.transform.position.y;
	playerMove = true;
	 movementCursor.SetActive(true);
	yield;
}

function PlayerChoice()
{
    print("human makes a decision");
    active = "human";
    displayGui = true;

     while (displayGui)
         yield;        
		//function pauses while player chooses attack

}

function BattlePhase()
{
	//applies player and enemy choices (damage)
	//need to add checking for death (HP <= 0)
    print("battle rages on");
    yield new WaitForSeconds(1);
    print(active + " " + action);
    yield new WaitForSeconds(1);
}

function EnemyChoice()
{
	//enemy chooses attack/defend
    print("enemy makes a decision");
	//put enemy AI code here
    yield new WaitForSeconds(1);
    active = "enemy";
    action = "attacks";
}

function TurnEnd()
{
    print("turn ends");
    yield new WaitForSeconds(1);
}

function OnGUI()
{
    if (!displayGui) return;
	if(gameManager.inBattle == true && playerMove == false){
     GUI.Box (Rect (10,10,100,90), "Battle Menu");
	 //melee attack function
     if (GUI.Button (Rect (20,40,80,20), "Melee(1)") || Input.GetKeyDown(KeyCode.Alpha1))
     {
     	//need to add target selection: use arrow keys left/right or up/down to choose an enemy to hit
     	chooseTargetFunc();
     	//need to add range detection: can only use melee if target is in an adjancent square
     	//need to add damage calculation
         action = "does a melee attack";
         displayGui = false;
     } 
	 //ranged function
     if (GUI.Button (Rect (20,70,80,20), "Ranged(2)") || Input.GetKeyDown(KeyCode.Alpha2))
     {
         action = "does a ranged attack";
         displayGui = false;
     }
}
}
//WASD / arrow key movement
var checkInput = function(){
	if(Input.GetKeyDown(KeyCode.D) || Input.GetKeyDown(KeyCode.RightArrow)){ //move right with D or right arrow
		cursorPos += Vector2.right;
		moving = true;
	}else if(Input.GetKeyDown(KeyCode.A) || Input.GetKeyDown(KeyCode.LeftArrow)){ //move left with A or left arrow
		cursorPos -= Vector2.right;
		moving = true;
	}else if(Input.GetKeyDown(KeyCode.W) || Input.GetKeyDown(KeyCode.UpArrow)){ //move up with W or up arrow
		cursorPos += Vector2.up;
		moving = true;
	}else if(Input.GetKeyDown(KeyCode.S) || Input.GetKeyDown(KeyCode.DownArrow)){ //move down with S or down arrow
		cursorPos -= Vector2.up;
		moving = true;
	}
};

function chooseTargetFunc(){
//yield chooseTarget;
yield new WaitForSeconds(1);
}

/**function chooseTarget(){
	var selected : int = 1; //Index of selected enemy. Default to first enemy in enemy array.  0 is always the player so skip it!
	var playerPos = new Vector2(player.transform.position.x, player.transform.position.y); //player position in 2D
	var visibleEnemies : Collider2D[] = Physics2D.OverlapCircleAll(transform.position, 3); //Array of visible enemies.  Change second argument based on range/melee
	var rend = visibleEnemies[selected].gameObject.GetComponent(SpriteRenderer); //sprite renderer of selected object
	rend.color = Color.blue;
	if(Input.GetKeyDown(KeyCode.RightArrow)){
		selected++;
	}
	if(Input.GetKeyDown(KeyCode.LeftArrow)){
		selected--;
	}
	/**for (var enemy: Collider2D in visibleEnemies){ //run for each detected collider (each visible enemy)
		var hit : RaycastHit2D[];
		var enemyPos = new Vector2(enemy.transform.position.x, enemy.transform.position.y); //position of detected enemy
		Physics2D.LinecastNonAlloc(playerPos, enemyPos, hit) ;//casts line to see what's within visible range
		if(enemy.gameObject == player){
			
			//Debug.Log("I see you");
			//Debug.Log(visibleEnemies[0]);

		}
		
	}**/
	
	//cycle through visible targets by hitting left and right
	//targets should light up or change color when selected
/**	yield new WaitForSeconds(1);
}**/
