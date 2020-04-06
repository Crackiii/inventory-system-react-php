<?php


global $__type;
global $__data;

if($__type === "products-search"){
    require("./search/products.php");
} else if($__type === "cables-search"){
    require("./search/cables.php");
}














?>