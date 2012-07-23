<?php
require_once Zend_Registry::get('MODELS_PATH') . "/LoginForm.php";
require_once Zend_Registry::get('MODELS_PATH') . "/User.php";
require_once Zend_Registry::get('MODELS_PATH') . "/ImageLoader.php";
require_once Zend_Registry::get('MODELS_PATH') . "/Building.php";
require_once Zend_Registry::get('MODELS_PATH') . "/MainFloor.php";
require_once Zend_Registry::get('MODELS_PATH') . "/MainRoom.php";
require_once 'Zend/Session/Namespace.php';
class IndexController extends Zend_Controller_Action
{

    public function init()
    {
        /* Initialize action controller here */
        
    
    }

    public function indexAction()
    {
        // action body
         $useInfo = new Zend_Session_Namespace('userInfo');
        if(isset($useInfo->name)){
        	$this->view->userName = $useInfo->name;	   
        	$this->view->title = "智能布线管理系统";
        	//用来构建树形结构
        	//读取大楼
        	$building  = new Building();
        	$rowset = $building->fetchAll();
        	$this->view->buildings = $rowset->toArray();
        	
        	//读取楼层
        	$floor = new MainFloor();
        	$rowset = $floor->fetchAll();
        	$this->view->floors = $rowset->toArray();
        	
        	//取房间
        	$room = new MainRoom();
        	$rowset = $room->fetchAll();
        	$this->view->rooms = $rowset->toArray();
        	
        }
        else{
        	$this->_forward('login');
        }
        
    }
    
    public function loginAction()
    {
    	$this->view->title = "登录";
    	$loginForm = new LoginForm();
    	$info = $loginForm->getElements();
    	$this->view->loginForm = $loginForm;
    //	$this->view->tt =  $info;
    	//login
    	if($this->getRequest()->isPost()){
    		$formData = $this->getRequest()->getPost();
    		if($loginForm->isValid($formData)){
    			$userName = $this->getRequest()->getParam('userName');
    		//	$userName = $userName['name'];
    		//	$userName = $userName['n'];
    		
    			$password = $this->getRequest()->getParam("password");	
    			$info = $this->getRequest()->getParams();
    			
    			$rememberMe = $this->getRequest()->getParam('rememberMe');

    			$user = new User();
    		    $db = Zend_Registry::get('db');
    		    $where = $db->quoteInto('USER_NAME=?',$userName);
    		 	 $userInfo = $user->fetchRow($where);
    		   	 $this->view->userName = $userName;
    		  //	$this->view->info  = $userInfo->toArray();
    		  if($userInfo->USER_PWD != $password){
    		    	$this->view->tips = '密码错误';
    		    	
    		    }
    		    else {
    		        
    		        $userInfoSession = new Zend_Session_Namespace('userInfo');   //创建用户session
    		        if($rememberMe == 1 && !isset($userInfoSession->name) ){
    		        	Zend_Session::rememberMe(Zend_Registry::get('COOKIE_EXPIRATION_SECONDS'));
    		        } 
    		       else if ($rememberMe == 0 ){
    		        	Zend_Session::forgetMe();
    		        }
    		         $userInfoSession->name = $userInfo->USER_NAME;   		         		  
    		    	$this->_forward('index');
    		    }
    		}
    		
    	}
    	
    }

    public function logoutAction(){
        $userInfoSession = new Zend_Session_Namespace('userInfo');
        
        if(isset($userInfoSession->name)){
        	unset($userInfoSession->name);
        }
      //  Zend_Session::forgetMe();
    		//$this->_forward('login');
    		$this->_redirect('index');
    }

}

