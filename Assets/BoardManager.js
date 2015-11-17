//This script handles map generation and enemy spawning.

#pragma strict
import System.Collections.Generic;
var coordsList : List.<Vector3>; //list of floor tile coords
var enemyList : List.<Object>; //list of enemies
var mapXMin : int; //map min X value
var mapXMax : int; //map max X value
var mapYMin : int; //map min Y value
var mapYMax : int; //map max Y value
var spawnPosition : Vector3;

function Start () {
	mapXMin = -4;
	mapXMax = 4;
	mapYMin = -4;
	mapYMax = 4;
	//generates a basic rectangle of floor tiles from(i, j) to defined max/min
	for(var i = mapXMin; i <= mapXMax; i++){
		for(var j = mapYMin; j <= mapYMax; j++){
			//generates a floor tile at position (i, j) and no rotation(Quaternion.identity means no rotation)
			Instantiate(Resources.Load("Floor1"), new Vector3(i, j, 2), Quaternion.identity);
			//adds coords of each floor tile to coordsList for reference later
			coordsList.Add(new Vector3(i, j, 2));
		}
	}
	//Debug.Log(coordsList[0].x); this is how you reference one of the coords
	
	//enemy spawn function - for now just spawns 1-3 enemies in random places on tiles
	EnemySpawn();
}

function Update () {

}

//enemy spawn function
function EnemySpawn(){
	//generate number 1-3
	var numEnemies = Random.Range(1, 3);
	Debug.Log(numEnemies + " enemies spawned");
	//spawn an enemy prefab for each, on a random valid tile from coordsList
	for(var i = 1; i <= numEnemies; i++){
		//determine spawn coordinates
		 spawnPosition.x = Random.Range (mapXMin, mapXMax);
         spawnPosition.y = Random.Range (mapYMin, mapYMax);
         spawnPosition.z = 2;
         Debug.Log("spawning at " + spawnPosition.x + "," + spawnPosition.y);
		//instantiate enemy prefab
		Instantiate(Resources.Load("Enemy"), spawnPosition, Quaternion.identity);
		//sets a name for the enemy so we can reference it later (Enemy1, Enemy2, and so on);
		this.name = "Enemy" + i;
		//add enemy name to list for easy access
		//enemyList.Add(this.name);
		
	}
}