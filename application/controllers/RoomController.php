<?php
require_once Zend_Registry::get('MODELS_PATH') . "/MainRoom.php";
class RoomController extends Zend_Controller_Action
{
	public function getAction(){
	    $this->view->ajax = true;
	    $room = new MainRoom();
	    //类型2为配线间，即存放机柜的房间
	    $where = "ROOM_TYPE='2'";
	    $roomset = $room->fetchAll($where)->toArray();
	    echo json_encode($roomset);
	}
	
	public function getroombyflooridAction(){
	    $this->view->ajax = true;
	    $room = new MainRoom();
	    $where = "FLOOR_ID='".$this->getRequest()->getParam('floorId')."'";
	    $roomset = new MainRoom();
	    $roomset = $roomset->fetchAll($where)->toArray();
	    
	    echo json_encode($roomset);
	}
	
	public function  checkexistAction(){
	    $this->view->ajax = true;
	    $room = new MainRoom();
	    $where = "FLOOR_ID='".$this->getRequest()->getParam('floorId')."' AND ROOM_CODE='".$this->getRequest()->getParam('roomCode')."'";
	    $roomset = new MainRoom();
	
	    $count = $roomset->fetchAll($where)->count();
		if($count < 1){
			echo json_encode(false);
		}
		else if($count == 1){
			echo json_encode(true);
		}
		else {
			echo json_encode(null);
		}
	}
}
