<?php

$__data = $rest_json->_data;

if($rest_json->_type === "all"){
    require("./dues/all.php");
} else if($rest_json->_type === "new"){
    require("./dues/new.php");
} else if($rest_json->_type === "pay"){
    require("./dues/pay.php");
} else if($rest_json->_type === "old"){
    require("./dues/old.php");
} else if($rest_json->_type === "history"){
    require("./dues/history.php");
}



?>