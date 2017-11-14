<?php


// Compsoer Autoload
require('vendor/autoload.php');


$config = array(
	'site_name' => 'digthrough.tech'
);


$loader = new Twig_Loader_Filesystem('./templates/');
$twig = new Twig_Environment($loader, array(

    ));



$template = $twig->load('index.twig.html');


echo $template->render(array(
     'config' => $config // all site settings

));
