#pragma strict

function BTFunction () 
{
     if(SpawnManager.CurTeam == "")
     {
         SpawnManager.PlayerStatus.SetActive(true);
         SpawnManager.TSCanvasO.SetActive(false);
         Network.Instantiate(SpawnManager.BluePlayer, SpawnManager.SpawnPointBlue.transform.position, SpawnManager.SpawnPointBlue.transform.rotation, 0); //GameObject.FindGameObjectWithTag("SpawnM").transform.rotation, 0);
         SpawnManager.CurTeam = "Blue";
         SpawnManager.Dead = false;
         Gun.Ammo = 30;
         Health.HealthV = 100;
     }
}
