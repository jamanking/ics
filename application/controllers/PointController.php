<?php
require_once Zend_Registry::get('MODELS_PATH') . "/MainPoint.php";
require_once Zend_Registry::get('MODELS_PATH') . "/MainRoom.php";
class PointController extends Zend_Controller_Action
{
	public function changepositionAction(){
	    $this->view->ajax = true;
	    $data= array(	          
	            "POINT_X"=>$this->getRequest()->getParam('point_x'),
	            "POINT_Y"=>$this->getRequest()->getParam('point_y')
	            );
	    $where = "POINT_ID='".$this->getRequest()->getParam('pointId')."'";
		 $point = new MainPoint();
		 $point->update($data, $where);
	}
	
	public function deleteAction(){
	    $this->view->ajax = true;
	    $where = "POINT_ID='".$this->getRequest()->getParam('pointId')."'";
	    $point = new MainPoint();
	    $point->delete($where);
	   echo  json_encode(true);
	}
	
	public function addAction(){
	    $this->view->ajax = true; 
	   
	    $room = new MainRoom();
	    $addType = $this->getRequest()->getParam('addType');
	    
	    if($addType == 0){
	    	 $floorId = $this->getRequest()->getParam('floorId');
	  		// $roomCode = $this->getRequest()->getParam('roomCode');
	  		$roomId = $this->getRequest()->getParam('roomId');
	  		 //用roomCode和floorID 取到对应的roomId
	  		// $where = "FLOOR_ID='".$floorId."' AND ROOM_CODE='".$roomCode."'";
	  		// $row = $room->fetchRow($where);
	  		 $data = array(
	  		      
	  		         "ROOM_ID"=>$roomId,
	  		         "POINT_CODE"=>$this->getRequest()->getParam("pointCode"),
	  		         "POINT_IP"=>$this->getRequest()->getParam("pointIp"),
	  		         "POINT_PERSON"=>$this->getRequest()->getParam("pointPerson"),
	  		         "POINT_TYPE"=>1,
	  		         "POINT_PHONE"=>$this->getRequest()->getParam("pointPhone"),
	  		         "POINT_X"=>$this->getRequest()->getParam("point_x"),
	  		         "POINT_Y"=>$this->getRequest()->getParam("point_y"),
	  		         "COMMENT"=>$this->getRequest()->getParam("pointComment")
	  		    
	  		         );
	  		 $point = new MainPoint();
	  		 $point->insert($data);
	  		 
	  		 $db = Zend_Registry::get("db");
	  		 $sql = $db->quoteInto("select MAX(POINT_ID) from 06_main_point",null);
	  		 
	  		 $result = $db->query($sql);
	  		 $result = $result->fetchAll();
	  		 
	  		 $newPointId = $result[0]['MAX(POINT_ID)'];
	  		 echo json_encode($newPointId);
	    }
	    else if($addType == 1){
	    	//插入房间
	    	$roomData = array(
	    	        "ROOM_CODE"=> $this->getRequest()->getParam('roomCode'),
	    	        "FLOOR_ID"=> $this->getRequest()->getParam('floorId'),
	    	        "ROOM_NAME"=> $this->getRequest()->getParam('roomName'),
	    	        "ROOM_TYPE"=>1,
	    	        "COMMENT"=>$this->getRequest()->getParam('roomComment')
	    	        );
	    	$room->insert($roomData);
	    	
	    	$db = Zend_Registry::get("db");
	    	$sql = $db->quoteInto("select MAX(ROOM_ID) from 03_main_room",null);
	    	
	    	$result = $db->query($sql);
	    	$result = $result->fetchAll();
	    	
	    	$newRoomId = $result[0]['MAX(ROOM_ID)'];
	    	
	    	$pointData = array(
	    		
	    			"ROOM_ID"=>$newRoomId ,
	    			"POINT_CODE"=>$this->getRequest()->getParam("pointCode"),
	    			"POINT_IP"=>$this->getRequest()->getParam("pointIp"),
	    			"POINT_PERSON"=>$this->getRequest()->getParam("pointPerson"),
	    			"POINT_TYPE"=>1,
	    			"POINT_PHONE"=>$this->getRequest()->getParam("pointPhone"),
	    			"POINT_X"=>$this->getRequest()->getParam("point_x"),
	    			"POINT_Y"=>$this->getRequest()->getParam("point_y"),
	    			"COMMENT"=>$this->getRequest()->getParam("pointComment")
	    				
	    	);
	    	
	    	$point = new MainPoint();
	    	$point->insert($pointData);
	    	
	    	$sql = $db->quoteInto("select MAX(POINT_ID) from 06_main_point",null);
	    	
	    	$result = $db->query($sql);
	    	$result = $result->fetchAll();
	    	
	    	$newPointId = $result[0]['MAX(POINT_ID)'];
	    	echo json_encode($newPointId);
	    }
	   
	
	}
	
	//同一间房间内信息点编号不能相同
	public function checkexistAction(){
	    $this->view->ajax = true;

	   // $s	   // $sql = $db->quoteInto("select * from (select * from 02_main_floor,03_main_room,06_main_point where 02_main_floor.FLOOR_ID=03_main_room.FLOOR_ID  and 03_main_room.ROOM_ID=06_main_point.ROOM_ID) where BUILDING_ID='".$this->getRequest()->getParam('buildingId')."' and FLOOR_ID='".$this->getRequest()->getParam('floorId')."'  and POINT_CODE='".$this->getRequest()->getParam('pointId')."'",null);
	
	    $where = "ROOM_ID='".$this->getRequest()->getParam('roomId')."'  and POINT_CODE='".$this->getRequest()->getParam('pointCode')."'";
	    $point = new MainPoint();
	 	$count = $point->fetchAll($where)->count();
	 //   print_r($result);

	 //echo $count;
	 if($count < 1){
	 	echo json_encode(false);
	 }
	  else if($count == 1){
	  	echo json_encode(true);
	  }
	  else{
	  	echo json_encode(null);
	  }
	    
	}
	
	public function updateAction(){
	    $this->view->ajax = true;
	    $point = new MainPoint();
	    $where = "POINT_ID='".$this->getRequest()->getParam('pointId')."'";
	    $data = array(
	            "POINT_IP"=>$this->getRequest()->getParam('pointIp'),
	            "POINT_PERSON"=>$this->getRequest()->getParam('pointPerson'),
	            "POINT_PHONE"=>$this->getRequest()->getParam("pointPhone"),
	            "COMMENT"=>$this->getRequest()->getParam("pointComment")
	            );
	    
			$point->update($data, $where);
	    	echo json_encode(true);
	   
	}
}
