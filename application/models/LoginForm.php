<?php 
require_once 'Zend/Form.php';
require_once 'Zend/Form/Element/Text.php';
require_once 'Zend/Form/Element/Submit.php';
require_once 'Zend/Form/Element/Password.php';
require_once 'Zend/Form/Element/Checkbox.php';
require_once 'Zend/Form/Element/Select.php';
require_once 'Zend/Registry.php';
require_once Zend_Registry::get('MODELS_PATH') . "/User.php";
class LoginForm extends Zend_Form
{
    public function __construct($options = null)
    {
        parent::__construct($options);
        $this->setName("login");
        $userName = new Zend_Form_Element_Select("userName");
		$userName->setLabel('用户名');
		
		$db = Zend_Registry::get("db");
		$sql = $db->quoteInto('select * from 23_sys_user',null);
		$users = $db->query($sql)->fetchAll();
		
		$userArray = array();
		foreach ($users as $user){
			$userArray[ $user['USER_NAME']] = $user['USER_NAME'];
			
		}
		
		$userName->addMultiOptions($userArray);
		
		
		$password = new Zend_Form_Element_Password("password");
		$password->setLabel('密码')
				->setRequired(true)
				->addFilter("StripTags")
				->addFilter("StringTrim")
				->addValidator("NotEmpty");
		
		$checkbox = new Zend_Form_Element_Checkbox("rememberMe");
		$checkbox->setLabel("自动登录")
				 ->setAttrib('checked', true);
		$submit = new Zend_Form_Element_Submit('登录');
		//$this->addElement($userName, 'list_name', array( 'required' => true, ));
	 	$this->addElements(array($userName,$password,$checkbox,$submit)); 
	 	
    }
}