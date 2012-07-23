<?php
require_once Zend_Registry::get('MODELS_PATH') . "/Building.php";
require_once Zend_Registry::get('MODELS_PATH') . "/MainFloor.php";

class BuildingController extends Zend_Controller_Action
{
	public function buildingAction(){
	   $this->view->ajax = true;
	    $building  = new Building();
	   $rowset = $building->fetchAll();
	   // $user = Array('name'=>'luxiaoqing',
	  //  		'password'=>'123'
	 //   );
//	$bun = $rowset->toArray();
	//	$bun = $bun[4];
	//	print_r($bun);
		
	//  $a = iconv('UTF-8', 'UTF-8',$bun[BUILDING_NAME] );
	
	//  print_r($a);
//	$insert = array("BUILDING_ID"=>"7",'BUILDING_NAME'=>'我',"BUILDING_FLOOR"=>"1","BUILDING_PIC"=>null);
	//$building->insert($insert);
	   $rowset = $rowset->toArray();
	 //  $rowset[7] = array("BUILDING_ID"=>"7",'BUILDING_NAME'=>'我');
	 echo json_encode($rowset);
	  
	  // echo json_encode($user);
	}
	
	public function getfloorAction(){
	    $this->view->ajax = true;
	    $buildingId = $this->getRequest()->getParam('buildingId');
	    $where = "BUILDING_ID='".$buildingId."'";
	    $floor = new MainFloor();
	   $result =  $floor->fetchAll($where)->toArray();
	    echo json_encode($result);
	}
	
	public function changepositionAction(){
	    $this->view->ajax = true;
	    $buildingId = $this->getRequest()->getParam('buildingId');
	    $building = new Building();
	    $where = "BUILDING_ID='".$buildingId."'";
	    $data = array(
	            "BUILDING_X"=>$this->getRequest()->getParam('building_x'),
	            "BUILDING_Y"=>$this->getRequest()->getParam('building_y')
	            );
	    $building->update($data, $where);
	}
	
	//删除楼宇
	public function deleteAction(){
	    $this->view->ajax = true;
	    $buildingId = $this->getRequest()->getParam('buildingId');
	    //检验是否能删
	    $floor = new MainFloor();
	    $where = "BUILDING_ID='".$buildingId."'";
	    $count = $floor->fetchAll($where)->count();
	    //不能删
	    if($count > 0){
	    	echo json_encode(false);
	    }
	    //能删
	    else{
	        //从数据库中删除
	        $building = new Building();
	        $building->delete($where);
	    	echo json_encode(true);
	    }
		
	}
	
	//添加楼宇
	public function addAction(){
	    $this->view->ajax = true;
	    $building = new Building();
	    $data = array(
	            'BUILDING_CODE'=>$this->getRequest()->getParam('buildingId'),
	            'BUILDING_NAME'=>$this->getRequest()->getParam('buildingName'),
	            'BUILDING_X'=>$this->getRequest()->getParam('building_x'),
	            'BUILDING_Y'=>$this->getRequest()->getParam('building_y'),
	            'BUILDING_FLOOR'=>0,
	            'COMMENT'=>$this->getRequest()->getParam('buildingComment')
	            
	            );
	    
	    $building->insert($data);
	      $db = Zend_Registry::get("db");
	   $sql = $db->quoteInto("select MAX(BUILDING_ID) from 01_main_building",null);
	  
	    $result = $db->query($sql);
	    $result = $result->fetchAll();
	  
	    echo json_encode($result[0]['MAX(BUILDING_ID)']);
	    
	}
	
	public function checkexistAction(){
	    $this->view->ajax = true;
		$building = new Building();
		$where = "BUILDING_CODE='".$this->getRequest()->getParam('buildingCode')."'";
		$count = $building->fetchAll($where)->count();
		//不存在
		if($count < 1){
			echo json_encode(false);
		}
		else{
			echo json_encode(true);
		}
	}

	public function updateAction(){
	    $this->view->ajax = true;
		$building = new Building();
		$data = array(
		        "BUILDING_NAME"=>$this->getRequest()->getParam('buildingName'),
		        "COMMENT"=>$this->getRequest()->getParam('buildingComment')
		        );
		$where = "BUILDING_ID='".$this->getRequest()->getParam('buildingId')."'";
		$building->update($data, $where) ;
	
		    echo json_encode(true);
	
		
		
	}
}
