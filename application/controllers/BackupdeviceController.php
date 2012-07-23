<?php 
require_once Zend_Registry::get('MODELS_PATH') . "/Backupdevice.php";
class BackupdeviceController extends Zend_Controller_Action
{
	public function backupdeviceAction(){
	   $this->view->ajax = true;
		$bkdevice = new Backupdevice();
		$rowset = $bkdevice->fetchAll()->toArray();
	 echo json_encode($rowset);
	  
	
	}
}