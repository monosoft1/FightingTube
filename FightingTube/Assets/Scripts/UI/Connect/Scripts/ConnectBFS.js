#pragma strict

function Clicked () 
{
    if(Network.peerType == NetworkPeerType.Disconnected)
    {
        SpawnManager.Connection = true;
        Network.useNat = DirectConnection.useNAT;
        SpawnManager.TSCanvasO.SetActive(true);
        SpawnManager.ConnectingButtons.SetActive(false);
        SpawnManager.NDisconnectB.SetActive(true);
        Network.Connect(DirectConnection.remoteIPadress, DirectConnection.remotePort);
       
    }
}
