#pragma strict

public static var HealthV : int = 100;
var HealthVStatus : int;
private var bullet : GameObject;
var damage : int;

var Team : String = "";

function Start ()
{
   HealthVStatus = Health.HealthV;
   Team = SpawnManager.CurTeam;
   
   if(GetComponent.<NetworkView>().isMine == true)
   {
      enabled = true;
   }
}

public static var control : Health;

function Update () 
{
   
   Health.HealthV = HealthVStatus;

   if(HealthVStatus <= 0)
   {
      DIE();
   }
}

function OnGUI ()
{
   
}

function OnTriggerEnter (hit : Collider) 
{
    if(GetComponent.<NetworkView>().isMine == true) 
    {
        if(hit.gameObject.tag == "RedBullet" && Team == "Blue")
        {
            bullet = hit.gameObject;
            TakeDamage();
        }
        if(hit.gameObject.tag == "BlueBullet" && Team == "Red")
        { 
            bullet = hit.gameObject;
            TakeDamage();
        }
    }
}

function TakeDamage()
{
    if(GetComponent.<NetworkView>().isMine == true) 
    {
        damage = Bullet.Damage;
        HealthVStatus -= damage;
    }
}

function DIE()
{
    if(GetComponent.<NetworkView>().isMine == true) 
    {
        Network.Destroy(gameObject);
        SpawnManager.Dead = true;
    }
}
