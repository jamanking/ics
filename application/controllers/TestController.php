<?php
class TestController extends Zend_Controller_Action
{
	public function testAction(){
	    $user = Array('name'=>'luxiaoqing',
	    		'password'=>'123'
	    );
	   $this->view->ajax = true;
	 echo json_encode($user);
	}
}
