<?php

// Composer Autoload
require('../vendor/autoload.php');
require('../config.php');

$config['page_name'] = 'Sign Up for Notifications';


$loader = new Twig_Loader_Filesystem('../templates/');
$twig = new Twig_Environment($loader, array(

    ));



$template = $twig->load('signup/index.twig.html');


echo $template->render(array(
     'config' => $config // all site settings

));
