<?php 
//require_once "Zend/Session/Namespace.php";
require_once "Zend/Registry.php";
class ChangeBackgroundController extends Zend_Controller_Action
{
    function init(){
      //  $useInfo = new Zend_Session_Namespace('userInfo');
        //
    //    if(!isset($useInfo->name)){
      //  	$this->_redirect("/index");
     //   }
        
    }
	public function changebgAction(){
		if($this->getRequest()->isPost()){
			$file = $_FILES['img'];
			$this->view->fileType = $file['type'];
			if($file['type'] == "image/png" || $file['type'] == "image/jpeg" ){
				//do upload
				$fileName = $file['name'];
				$fileTempName = $file['tmp_name'];
				$dest = Zend_Registry::get("IMG_PATH") . '/upload/'. $fileName;
				
			
				move_uploaded_file($fileTempName, $dest);
		
				$this->view->tips =  '涓婁紶鎴愬姛'.$dest;
			}
			else{
				//invalid upload
				$this->view->tips = "鏃犳晥鐨勪笂浼犳枃浠讹紝涓婁紶鍥剧墖鍙兘鏄痡pg鎴栬�png鏍煎紡銆�";
			}
		
		}
	}
}