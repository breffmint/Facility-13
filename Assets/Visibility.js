#pragma strict

function Start () {

}

function Update () {
	/**NOTE:  This code is implemented in enemyCollision.js.  It is only here for reference.
	var player = GameObject.Find("smug af");
	var playerPos = new Vector2(player.transform.position.x, player.transform.position.y); //player position in 2D
	//create array of all colliders in radius
	var cols : Collider2D[] = Physics2D.OverlapCircleAll(playerPos, 2); //second argument is visibility radius
	for (var col: Collider2D in cols){ //run for each detected collider
		var hit : RaycastHit2D[];
		var colPos = new Vector2(col.transform.position.x, col.transform.position.y);//position of detected enemy
		Physics2D.LinecastNonAlloc(playerPos, colPos, hit);//casts line to see what's within visible range
		if(col.gameObject != player){
			col.gameObject.GetComponent(Renderer).enabled = true;
			Debug.Log("enemy sighted " + col.gameObject);
		}
		
	}**/
	
}