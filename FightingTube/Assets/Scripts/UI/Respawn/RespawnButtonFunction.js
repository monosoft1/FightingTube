#pragma strict



function RBFunction () 
{
   if(SpawnManager.Dead == true && SpawnManager.Connection == true)
   {
      if(SpawnManager.CurTeam == "Red")
      {
        Network.Instantiate(SpawnManager.RedPlayer, SpawnManager.SpawnPointRed.transform.position, SpawnManager.SpawnPointRed.transform.rotation, 0);
        SpawnManager.Dead = false;
        SpawnManager.TSCanvasO.SetActive(false);
        SpawnManager.RespawnB.SetActive(false);
        Gun.Ammo = 30;
        Health.HealthV = 100;
      }
      if(SpawnManager.CurTeam == "Blue")
      {
        Network.Instantiate(SpawnManager.BluePlayer, SpawnManager.SpawnPointBlue.transform.position, SpawnManager.SpawnPointBlue.transform.rotation, 0);
        SpawnManager.Dead = false;
        SpawnManager.TSCanvasO.SetActive(false);
        SpawnManager.RespawnB.SetActive(false);
        Gun.Ammo = 30;
        Health.HealthV = 100;
      }
      else
      {
         
      }
   }
}
