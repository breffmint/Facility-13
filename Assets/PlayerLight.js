#pragma strict
var instance : GameManager;

function Start () {
	instance = FindObjectOfType(GameManager);
}

function Update () {

if(instance.inBattle == true){
	gameObject.SetActive(false);
	Debug.Log("lights off");
}
if(instance.inBattle == false){
	gameObject.SetActive(true);
	Debug.Log("lights on");
}
}