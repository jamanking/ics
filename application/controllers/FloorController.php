<?php
require_once Zend_Registry::get('MODELS_PATH') . "/MainFloor.php";
require_once Zend_Registry::get('MODELS_PATH') . "/MainPoint.php";
require_once Zend_Registry::get('MODELS_PATH') . "/MainRoom.php";
require_once 'Zend/Registry.php';

class FloorController extends Zend_Controller_Action
{
	public function floorAction(){
	   $this->view->ajax = true;
		
			$floorId = $this->getRequest()->getParam("floorId");
			$floorName = $this->getRequest()->getParam("floorName");
			//$rowset = array("floorId"=>$floorId,"floorName"=>$floorName);
			$room = new MainRoom();
			$point = new MainPoint();
			
			$db = Zend_Registry::get("db");
			$where = $db->quoteInto('FLOOR_ID=?',$floorId);
			//获得楼层所有的房间
			$roomset = $room->fetchAll($where)->toArray();
	
			
			$ret = array();
			//取出每个房间的信息点
			foreach($roomset as $room){
			    $where = $db->quoteInto('ROOM_ID=?',$room['ROOM_ID']);
			    $pointset = $point->fetchAll($where)->toArray();
			    array_push($ret, $pointset);
			}
			
		


	 echo json_encode($ret);
	  
	
	}
	
	public function changepositionAction(){
	    $this->view->ajax = true;
		$data = array(
		        "FLOOR_X"=>$this->getRequest()->getParam('floor_x'),
		        "FLOOR_Y"=>$this->getRequest()->getParam('floor_y'));
		$where = "FLOOR_ID='".$this->getRequest()->getParam('floorId')."'";
	    $floor = new MainFloor();
		$floor->update($data, $where);
	}
	
	public function deleteAction(){
	    $this->view->ajax = true;
	    $floorId = $this->getRequest()->getParam('floorId');
	    //检测楼层能否被删除
	    $db = Zend_Registry::get("db");
	    $sql = $db->quoteInto("select * from 06_main_point where ROOM_ID in(select ROOM_ID from 03_main_room where FLOOR_ID='".$floorId."')",null);
	  
	    $result =  $db->query($sql);
	
	    
	 	$count = count($result->fetchAll());

	    //不能删
	    if($count > 0){
	        echo json_encode(false);
	    }
	    else{
	        //从数据库中删除
	        $floor = new MainFloor();
	   	 $where = "FLOOR_ID='".$floorId."'";
	       $floor->delete($where);
	       echo json_encode(true);
	    }
	}
	
	public function addAction(){
	    $this->view->ajax = true;
	    $data = array(
	            'BUILDING_ID'=>$this->getRequest()->getParam('buildingId'),
	            'FLOOR_CODE'=>$this->getRequest()->getParam('floorCode'),
	            'FLOOR_NAME'=>$this->getRequest()->getParam('floorName'),
	            'COMMENT'=>$this->getRequest()->getParam('floorComment'),
	            'FLOOR_X'=>$this->getRequest()->getParam('floor_x'),
	            'FLOOR_Y'=>$this->getRequest()->getParam('floor_y')
	            );
	    $floor = new MainFloor();
	    $floor->insert($data);
	    
	    $db = Zend_Registry::get("db");
	    $sql = $db->quoteInto("select MAX(FLOOR_ID) from 02_main_floor",null);
	     
	    $result = $db->query($sql);
	    $result = $result->fetchAll();
	     
	    echo json_encode($result[0]['MAX(FLOOR_ID)']);
	}
	
	public function checkexistAction(){
	    $this->view->ajax = true;
	    $where = "FLOOR_CODE='".$this->getRequest()->getParam('floorCode')."' AND BUILDING_ID='".$this->getRequest()->getParam('buildingId')."'";
	    $floor = new MainFloor();
	    $count = $floor->fetchAll($where)->count();
	    //可用
	    if($count < 1)
	    {
	        echo json_encode(false);
	    }
	    else if($count == 1){
	    	echo json_encode(true);
	    }
	    //有重复记录在数据库
	    else {
	    	echo json_encode(null);
	    }
	}
	
	public function updateAction(){
	    $this->view->ajax = true;
	    $floor = new MainFloor();
	    $data =  array(
	            "FLOOR_NAME"=>$this->getRequest()->getParam('floorName'),
	            "COMMENT"=>$this->getRequest()->getParam('floorComment')
	            );
	    $where = "FLOOR_CODE='".$this->getRequest()->getParam('floorCode')."' and BUILDING_ID='".$this->getRequest()->getParam('buildingId')."'";
	  $floor->update($data, $where);
	echo json_encode(true);
	 
	}
}
