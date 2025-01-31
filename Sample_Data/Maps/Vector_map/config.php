<?php

/* --------- PROJECT CONFIG DATA ----------- */


$prefix = '';
$logger = 'xml';  // mysql OR xml cokoliv jiného = demo mod
$debug = 0; // 0=nezobrazí se debugovací patička ani se do ní nic nevypisuje; 1=zobrazeno a vypisuje se

// INSERT GOOGLE MAPS API KEY
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();
define('GOOGLE_MAPS_KEY', $_ENV['GOOGLE_MAPS_KEY']);

?>