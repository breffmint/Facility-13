#pragma strict
var strength : int;
var reflexes : int;
var vitality : int;
var hp : int;
var skill : int;
var resistance : int;
var luck : int;
var growthRate : int;

function Start () {
	//make stats persistent between scene changes
	DontDestroyOnLoad(transform.gameObject);
	//setting to arbitrary values for now
 	vitality = 25;
	hp = 4 * vitality;
	strength = 20;
}

function Update () {

}