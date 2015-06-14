#pragma strict

function Clicked () 
{
  if(SpawnManager.Connection == true)
  {
      if(SpawnManager.CurTeam == "Blue")
      {
          Destroy(GameObject.FindGameObjectWithTag("PlayerBlue"));
          var BlueBullet : GameObject[] = GameObject.FindGameObjectsWithTag("BlueBullet");
          for (var targetBlue : GameObject in BlueBullet)
            GameObject.Destroy(targetBlue);

          SpawnManager.NDisconnectB.SetActive(false);
          SpawnManager.ConnectingButtons.SetActive(true);
          SpawnManager.Connection = false;
          SpawnManager.CurTeam = "";
      }
      if(SpawnManager.CurTeam == "Red")
      {
          Destroy(GameObject.FindGameObjectWithTag("PlayerRed"));
          var RedBullet : GameObject[] = GameObject.FindGameObjectsWithTag("RedBullet");
          for (var targetRed : GameObject in RedBullet)
            GameObject.Destroy(targetRed);

          SpawnManager.NDisconnectB.SetActive(false);
          SpawnManager.ConnectingButtons.SetActive(true);
          SpawnManager.Connection = false;
          SpawnManager.CurTeam = "";
      }
      if(SpawnManager.CurTeam != "")
      {
          SpawnManager.Dead = true;
          SpawnManager.NDisconnectB.SetActive(false);
          SpawnManager.ConnectingButtons.SetActive(true);
          SpawnManager.Connection = false;
          SpawnManager.CurTeam = "";
          Network.Disconnect(200);
      }
      if(SpawnManager.CurTeam == "")
      {
          SpawnManager.Dead = true;
          SpawnManager.NDisconnectB.SetActive(false);
          SpawnManager.ConnectingButtons.SetActive(true);
          SpawnManager.Connection = false;
          SpawnManager.CurTeam = "";
          Network.Disconnect(200);
      }
  }
}
