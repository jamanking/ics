<?php 
require_once 'Zend/Controller/Front.php';
require_once 'Zend/Layout.php';
require_once 'Zend/Config/Ini.php';
require_once 'Zend/Db.php';
require_once 'Zend/Db/Table.php';
require_once 'Zend/Registry.php';

//define('ROOT', dirname(__FILE__));
//define('APPLICATION_PATH', ROOT . '/application');
//define('MODELS_PATH', ROOT . APPLICATION_PATH . '/models');

$register = Zend_Registry::getInstance();
$register->set('ROOT',  dirname(__FILE__));
$register->set('APPLICATION_PATH', $register->get('ROOT') . '/application');
$register->set('MODELS_PATH', $register->get('APPLICATION_PATH') . '/models');
$register->set('IMG_PATH', $register->get('ROOT') . '/public/img');
$register->set('COOKIE_EXPIRATION_SECONDS', 864000);
date_default_timezone_set('Asia/ShangHai');

//get configuration
$dbconfig = new Zend_Config_Ini($register->get('APPLICATION_PATH').'/configs/config.ini','dbconfig');

//set fronter
$frontController = Zend_Controller_Front::getInstance();
$frontController->setControllerDirectory($register->get('APPLICATION_PATH').'/controllers');

$frontController->throwExceptions(true);

Zend_Layout::startMvc(array('layoutPath'=>$register->get('APPLICATION_PATH').'/layouts'));

$db = zend_db::factory($dbconfig->db->adapter,$dbconfig->db->config->toArray());


zend_db_table::setDefaultAdapter($db);
$register->set('db', $db);

//run
$frontController->dispatch();