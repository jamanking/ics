<?php
require_once Zend_Registry::get('MODELS_PATH') . "/MainPortPort.php";
class PortController extends Zend_Controller_Action
{
	public function portAction(){
	   $this->view->ajax = true;
	
	   if($this->getRequest()->isPost()){
	       $requestType = $this->getRequest()->getParam("requestType");
	       switch($requestType){
				//添加连接状态记录
	           case '0':
	       	       	$deviceId_A = $this->getRequest()->getParam("deviceId_A");
				   	$portId_A = $this->getRequest()->getParam("portId_A");
				   	$deviceId_B = $this->getRequest()->getParam("deviceId_B");
				   	$portId_B = $this->getRequest()->getParam("portId_B");
				   	$portPort = new MainPortPort();
				   	$portPort->insert(
				   	        	array(
				   	        	      	"DEVICE_A_ID"=>$deviceId_A,
				   	        	        "PORT_A_CODE"=>$portId_A,
				   	        	        "DEVICE_B_ID"=>$deviceId_B,
				   	        	        "PORT_B_CODE"=>$portId_B,
				   	        			"LINK_TYPE"=>$this->getRequest()->getParam('linkType')
				   	        	          )
				   	        );
				   	break;
				   	//删除连接状态记录
	       	case '1':
	       	    $deviceId = $this->getRequest()->getParam("deviceId");
	       	    $portId = $this->getRequest()->getParam("portId");
	       	    $portPort = new MainPortPort();
	       	    $db = Zend_Registry::get("db");
	       	    
	       	  //  $where = $db->quoteInto("DEVICE_A_ID=? AND PORT_A_CODE=?",$deviceId,$portId);
	       	   $where = "DEVICE_A_ID='".$deviceId."' AND PORT_A_CODE='".$portId."'";
	       	    if($portPort->fetchRow($where) == NULL){ 
	       	        echo 'aaa';  
	       	    	     $where = "DEVICE_B_ID='".$deviceId."' AND PORT_B_CODE='".$portId."'";
	       	    }
	       	        $portPort->delete($where);
	       	    
	       	    break;
	       }
	
	   	
	   }
	   else if($this->getRequest()->isGet()){
	       $cabinetsId = $this->getRequest()->getParam("cabinetsId");
	       $db = Zend_Registry::get("db");
	       $sql = $db->quoteInto("select * from 07_main_port_port where DEVICE_A_ID in (select DEVICE_ID from 05_main_device where CABINETS_ID = '".$cabinetsId."');",null);
	       $result = $db->query($sql);
	       $r_a = $result->fetchAll();
	       echo json_encode($r_a);
	   }
	}
}
