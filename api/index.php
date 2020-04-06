<?php

require('./headers.php');
//Database Connection
require('./connection.php');


//POST REQUESTS
$rest_json = json_decode(file_get_contents("php://input"), false);

if(isset($rest_json->_action)){
    switch($rest_json->_action){
        case "entry":{
            require('./entries.php');
            break;
        }
        case "transaction":{
            require('./transaction.php');
            break;
        }
        case "dues":{
            require('./dues.php');
        }
    }
}


//GET REQUESTS
if(isset($_GET['_action'])){

    $__type = $_GET["_type"];
    $__data = $_GET["_data"];

    switch($_GET['_action']){

        case ("reports"):{
            require('./reports.php');
            break;
        }

        case "search":{
            require("./search.php");
            break;                                          
        }

    }
}






















?>