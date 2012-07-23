<?php
class Zend_View_Helper_SayHello
{
   
    public function sayHello($controller)
    {
    	return 'I am a zend view helper class used in ' . $controller ;
    }
} 
?>