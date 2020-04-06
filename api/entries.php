<?php

$__data = $rest_json->_data;

if($rest_json->_type === "cables"){

    require("./entries/cables.php");


} else if($rest_json->_type === "others"){

    require("./entries/others.php");

}





?>