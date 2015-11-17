#pragma strict
var instance : GameManager;
var player : GameObject;
var inBattle : boolean;

function Start () {
instance = FindObjectOfType(GameManager);
inBattle = instance.inBattle;
GetComponent(Renderer).enabled = false;
player = GameObject.Find("smug af");
}

function Update () {
	//if(instance.inBattle == false){
	var playerSighted = false;
	
	var playerPos = new Vector2(player.transform.position.x, player.transform.position.y); //player position in 2D
	//create array of all colliders in radius (all visible enemies)
	var cols : Collider2D[] = Physics2D.OverlapCircleAll(transform.position, 3); //second argument is visibility radius
	for (var col: Collider2D in cols){ //run for each detected collider
		var hit : RaycastHit2D[];
		var colPos = new Vector2(col.transform.position.x, col.transform.position.y);//position of detected enemy
		Physics2D.LinecastNonAlloc(playerPos, colPos, hit);//casts line to see what's within visible range
		if(col.gameObject == player){
			GetComponent(Renderer).enabled = true; //becomes visible when player is in range
			//Debug.Log("I see you");
				//Debug.Log(cols[0]);
			playerSighted = true;
		}
		
	}
	//becomes invisible when player is out of range
	if(playerSighted == false){
		GetComponent(Renderer).enabled = false;
	}
	//}
}
function OnTriggerEnter2D(info : Collider2D){ //when something enters circle collider
	//Debug.Log("collision detected!!");
	instance.inBattle = true;
}