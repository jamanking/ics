<?php 
class ImageLoader{
	protected  $_imgs;
	protected $_loadDir;
	public function ImageLoader($dir){
	    	$this->_imgs = null;
			$this->_loadDir = $dir;
	}
	
	public function load(){
	   
	  // $imgDir = opendir(Zend_Registry::get('APPLICATION_PATH')."public/img") or die("couldn't open directory");
	   
		$this->_imgs = scandir($this->_loadDir);
	   	
	}
	
	public function getImgs(){
		return $this->_imgs;
	}
}