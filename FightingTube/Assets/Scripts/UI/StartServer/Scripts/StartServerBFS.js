#pragma strict


function Clicked () 
{
    SpawnManager.Connection = true;
    Network.useNat = DirectConnection.useNAT;
    Network.InitializeServer(DirectConnection.MaxPlayers, DirectConnection.listenPort);
    SpawnManager.TSCanvasO.SetActive(true);
    SpawnManager.NDisconnectB.SetActive(true);
    SpawnManager.ConnectingButtons.SetActive(false);
    SpawnManager.RespawnB.SetActive(false);
}
