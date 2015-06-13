#pragma strict

function Clicked () 
{
  if(SpawnManager.Connection == true)
  {
      if(SpawnManager.CurTeam == "Blue")
      {
          Destroy(GameObject.FindGameObjectWithTag("PlayerBlue"));
          SpawnManager.NDisconnectB.SetActive(false);
          SpawnManager.ConnectingButtons.SetActive(true);
          SpawnManager.Connection = false;
          SpawnManager.CurTeam = "";
      }
      if(SpawnManager.CurTeam == "Red")
      {
          Destroy(GameObject.FindGameObjectWithTag("PlayerRed"));
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
