<?php
require_once Zend_Registry::get('MODELS_PATH') . "/MainCabinets.php";
require_once Zend_Registry::get('MODELS_PATH') . "/MainDevice.php";
require_once Zend_Registry::get('MODELS_PATH') . "/MainRoom.php";

class CabinetsController extends Zend_Controller_Action
{
	public function cabinetsAction(){
	    
	   $this->view->ajax = true; 
	    $db = Zend_Registry::get("db");
	   if($this->getRequest()->isGet()){
	       //获取指定房间所有机柜，只有机柜房间才有机柜
		$roomId = $this->getRequest()->getParam('roomId');
	   $cabinets = new MainCabinets();
	 
		$where = $db->quoteInto('ROOM_ID=?',$roomId);
	   $rowset = $cabinets->fetchAll($where)->toArray();
 		echo json_encode($rowset);
	   }
		else if($this->getRequest()->isPost()){
		    //房间号
		//	$roomId = $this->getRequest()->getParam("roomId");
			//设备号
			$cabinetsId = $this->getRequest()->getParam('cabinetsId');
			$x = $this->getRequest()->getParam('left');
			$y = $this->getRequest()->getParam('top');
			$deviceName = $this->getRequest()->getParam('name');
			$device = new MainDevice();
			//插入设备记录
			$insert_item = array(
			        "CABINETS_ID"=>$cabinetsId,
					"DEVICE_CODE"=>$this->getRequest()->getParam("code"),
			        "DEVICE_X"=>$x,
					"DEVICE_Y"=>$y,
			        "DEVICE_NAME"=>$deviceName,
					"DEVICE_TYPE"=>$this->getRequest()->getParam('type'),
					"COMMENT"=>$this->getRequest()->getParam("comment")
			        
			        );
			$device->insert($insert_item);

			//获取插入记录的ID
			$sql = $db->quoteInto("select MAX(DEVICE_ID) from 05_main_device",null);
			$result = $db->query($sql);
			$r_a = $result->fetchAll();
			$result = array("id"=>$r_a[0]["MAX(DEVICE_ID)"]);
			
		
			 echo json_encode($result);
		
		}
	
	  
	 
	}

	public function getcabinetsAction(){
	    $this->view->ajax = true;
		$cabinets = new MainCabinets();
		$device = new MainDevice();
		$room = new MainRoom();
		//获取所有机柜
		$rowset = $cabinets->fetchAll()->toArray();
		
		foreach ($rowset as $index=>$row){
			$where = "CABINETS_ID='".$row['CABINETS_ID']."'";
		    $count = $device->fetchAll($where)->count();
		    array_push( $rowset[$index],$count);
		}
		
		foreach ($rowset as $index=>$row){
			$where = "ROOM_ID='".$row['ROOM_ID']."'";
			$roomName = $room->fetchRow($where);
			array_push( $rowset[$index],$roomName['ROOM_NAME']);
		}
		
		echo json_encode($rowset);
		
	}
	
	public function deletecabinetsAction(){
	    $this->view->ajax = true;
	    $cabinetsId = $this->getRequest()->getParam("cabinetsId");
	    $device = new MainDevice();
	    $where = "CABINETS_ID='".$cabinetsId."'";
	    $count = $device->fetchAll($where)->count();
	    if($count > 0)
	       //不可删
	        echo json_encode(false);
	    else {
	        //删除机柜
	        $cabinets = new MainCabinets();
	        $cabinets->delete($where);
	        echo json_encode(true);
	    }
	}
	
	public function updateAction(){
	    $this->view->ajax = true;
	    $cabinets = new MainCabinets();
	    $data = array(
	            'CABINETS_NAME'=>$this->getRequest()->getParam("cabinetsName"),
	            'CABINETS_CODE'=>$this->getRequest()->getParam('cabinetsCode')
	            );
	    $where  = "CABINETS_ID='".$this->getRequest()->getParam('cabinetsId')."'";
	    $cabinets->update($data, $where);
	}
	
	public function saveAction(){
	    $this->view->ajax = true;
	    
	   $data = array(
	           'CABINETS_NAME'=>$this->getRequest()->getParam('cabinetsName'),
	           'CABINETS_CODE'=>$this->getRequest()->getParam('cabinetsCode'),
	           'ROOM_ID'=>$this->getRequest()->getParam('roomId'));
		$cabinets = new MainCabinets();
		$cabinets->insert($data);
		
		//获取插入记录的ID
		$db = Zend_Registry::get("db");
		$sql = $db->quoteInto("select MAX(CABINETS_ID) from 04_main_cabinets",null);
		$result = $db->query($sql);
		$r_a = $result->fetchAll();
		//$result = array("id"=>$r_a[0]["MAX(CABINETS_ID)"]);
			
		
		echo json_encode($r_a[0]["MAX(CABINETS_ID)"]);
		
	}
}
