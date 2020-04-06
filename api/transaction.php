<?php



$__data = $rest_json->_data;

if($rest_json->_type === "cables"){

    require("./transaction/cables.php");


} else if($rest_json->_type === "others"){

    require("./transaction/others.php");

}









?>