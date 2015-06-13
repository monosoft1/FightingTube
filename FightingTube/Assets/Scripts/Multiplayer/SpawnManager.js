#pragma strict

public static var control : SpawnManager;

public static var RedPlayer : GameObject;
public static var BluePlayer : GameObject;

var RedPlayerStatus : GameObject;
var BluePlayerStatus : GameObject;

public static var Dead : boolean = true;
var DeadStatus : boolean = true;

public static var Connection : boolean = false;
var ConnectionStatus : boolean = false;

public static var CurTeam : String = "";
var CurTeamStatus : String = SpawnManager.CurTeam;

public static var RespawnB : GameObject;
var RespawnBStatus : GameObject;

public static var NDisconnectB : GameObject;
var NDisconnectBStatus : GameObject;

public static var TSCanvasO : GameObject;
var TSCanvasOStatus : GameObject;

public static var TSButtons : GameObject;
var TSButtonsStatus : GameObject;

public static var PlayerStatus : GameObject;
var PlayerStatusS : GameObject;

public static var ConnectingButtons : GameObject;
var ConnectingButtonsStatus : GameObject;



public static var SpawnPointRed : GameObject;
public static var SpawnPointBlue : GameObject; 

var SpawnPointRedStatus : GameObject;
var SpawnPointBlueStatus : GameObject; 

function Awake ()
{
   SpawnManager.BluePlayer = BluePlayerStatus;
   SpawnManager.RedPlayer = RedPlayerStatus;
   
   SpawnManager.SpawnPointBlue = SpawnPointBlueStatus;
   SpawnManager.SpawnPointRed = SpawnPointRedStatus;
   
   SpawnManager.Connection = ConnectionStatus;
   
   SpawnManager.Dead = DeadStatus;
   
   SpawnManager.RespawnB = RespawnBStatus;
   
   SpawnManager.NDisconnectB = NDisconnectBStatus;
   
   SpawnManager.TSCanvasO = TSCanvasOStatus;
   
   SpawnManager.TSButtons = TSButtonsStatus;
   
   SpawnManager.PlayerStatus = PlayerStatusS;

   SpawnManager.ConnectingButtons = ConnectingButtonsStatus;
}

function Update () 
{
    CurTeamStatus = SpawnManager.CurTeam;
    
    SpawnManager.BluePlayer = BluePlayerStatus;
    SpawnManager.RedPlayer = RedPlayerStatus;
    
    SpawnManager.SpawnPointBlue = SpawnPointBlueStatus;
    SpawnManager.SpawnPointRed = SpawnPointRedStatus;
    
    ConnectionStatus = SpawnManager.Connection;
    
    DeadStatus = SpawnManager.Dead;
    
    SpawnManager.RespawnB = RespawnBStatus;
    
    SpawnManager.NDisconnectB = NDisconnectBStatus;
    
    SpawnManager.TSCanvasO = TSCanvasOStatus;
   
    SpawnManager.TSButtons = TSButtonsStatus;
    
    SpawnManager.PlayerStatus = PlayerStatusS;
    
    SpawnManager.ConnectingButtons = ConnectingButtonsStatus;
    if(ConnectionStatus == true && DeadStatus == false && CurTeamStatus != "")
    {
        SpawnManager.PlayerStatus.SetActive(true);
    }
    if(ConnectionStatus == true && DeadStatus == true && SpawnManager.CurTeam != "")
    {
        SpawnManager.TSCanvasO.SetActive(true);
        SpawnManager.TSButtons.SetActive(false);
        SpawnManager.RespawnB.SetActive(true);
        SpawnManager.PlayerStatus.SetActive(false);
    }
   if(ConnectionStatus == true && DeadStatus == true && SpawnManager.CurTeam == "")
    {
        SpawnManager.TSCanvasO.SetActive(true);
        SpawnManager.TSButtons.SetActive(true);
       SpawnManager.RespawnB.SetActive(false);
       SpawnManager.PlayerStatus.SetActive(false);
    }

    if(Network.peerType == NetworkPeerType.Disconnected)
    {
        if(ConnectionStatus == false && DeadStatus == true && SpawnManager.CurTeam == "")
        {
            SpawnManager.ConnectingButtons.SetActive(true);
            SpawnManager.TSCanvasO.SetActive(false);
            SpawnManager.PlayerStatus.SetActive(false);
        }
    }
}
