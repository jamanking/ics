<?php
require_once Zend_Registry::get('MODELS_PATH') . "/MainDevice.php";
require_once Zend_Registry::get('MODELS_PATH') . "/MainPortPort.php";


class DeviceController extends Zend_Controller_Action
{
	public function deviceAction(){
	   $this->view->ajax = true;
		if($this->getRequest()->isGet()){
		    switch($this->getRequest()->getParam("requestType")){
		    	//取机柜设备
		        case '0': 
		            $cabinetsId = $this->getRequest()->getParam("cabinetsId");
		            if($cabinetsId != null){
		            	 $device  = new MainDevice();  
		            	 $db = Zend_Registry::get("db");
		            	 $where = $db->quoteInto("CABINETS_ID=?",$cabinetsId);
		            	$device =  $device->fetchAll($where)->toArray();
		           
			 			 echo json_encode($device);
		            }
		    	 
			  break;
			
		      
		    }
			
		}
		else if($this->getRequest()->isPost()){
		  
			switch($this->getRequest()->getParam("requestType")){
				//0号POST请求为调整设备
			    case '0':
			         $newX = $this->getRequest()->getParam("x");
			         $newY = $this->getRequest()->getParam("y");
			         $deviceId = $this->getRequest()->getParam("deviceId");
			         $device  = new MainDevice();
			            $db = Zend_Registry::get('db');
			         $where = $db->quoteInto("DEVICE_ID=?",$deviceId);
			        $data = array("DEVICE_X"=>$newX,"DEVICE_Y"=>$newY);
			         $device->update($data, $where);
			    
			        
			        break;
				
			}
		}
	 

	

	}
	public function deleteAction(){
	    $this->view->ajax = true;
	    $deviceId =  $this->getRequest()->getParam("deviceId");
	    $mainPortPort = new MainPortPort();
	    $where =  "DEVICE_A_ID='".$deviceId."' OR DEVICE_B_ID='".$deviceId."'";
	    $result = $mainPortPort->fetchRow($where) ;
	    //有连接，不可删
	    if($result != NULL){
	    	echo json_encode(false);
	    	
	    }	    
	    //无连接，可删
	    else{
	        //删除设备
	        $device = new MainDevice();
	        $where = "DEVICE_ID='".$deviceId."'";
	        $device->delete($where);
	        //发送可删标志
	    	echo json_encode(true);
	    }
	  
	    
	}
	
	public function updateAction(){
		$this->view->ajax = true;
		$data = array(
				"DEVICE_NAME"=>$this->getRequest()->getParam('deviceName'),
				"COMMENT"=>$this->getRequest()->getParam('deviceComment')
				);
		$where = "DEVICE_ID='".$this->getRequest()->getParam('deviceId')."'";
		$device = new MainDevice();
		$device->update($data, $where);
		
		echo json_encode(true);
	}
	
	public function checkexistAction(){
		$this->view->ajax = true;
		$where = "CABINETS_ID='".$this->getRequest()->getParam('cabinetsId')."' AND DEVICE_CODE='".$this->getRequest()->getParam('deviceCode')."'";
		$device = new MainDevice();
		$count = $device->fetchAll($where)->count();
		if($count == 1){
			echo json_encode(false);
		}
		else if($count < 1){
			echo json_encode(true);
		}
	}
}
