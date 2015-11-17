 #pragma strict

    class GameManager extends UnityEngine.MonoBehaviour
    {  
        public var inBattle : boolean = false;
       
        // Constructor basically....I think
        function Start()
        {
            inBattle = false;
        }  
    }
     
    function Awake()
    {  
        GameObject.DontDestroyOnLoad(this);
    }
	