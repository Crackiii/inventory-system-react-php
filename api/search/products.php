<?php

class ProductSearch{

    public $params = "";

    function __construct(){
        global  $__data;

        if(gettype(json_decode($__data)) === "object"){
            $this->params = json_decode($__data);
        }
        
    }

    function selectData($sql){
        global $conn;
        if($conn->query($sql)){

            $result = $conn->query($sql);
            $data = array();
            if($result->num_rows > 0){
                
                while($row = $result->fetch_assoc()) { 
                    $data[] = $row;
                }

                return $data;
                
            } else{
                return array(0);
            }
            
        } else{
            return $conn->error;
        }
    }

    function queryData(){


        $sql = "SELECT * FROM `others_entry`";

        if($this->params->barcode !== "" || 
           $this->params->name !== "" || 
           $this->params->category !== "" || 
           $this->params->company !== ""
        ){
            $sql .= " WHERE ";
            if($this->params->barcode !== ""){
                $sql .= "`others_entry`.`barcode_no` LIKE '%".$this->params->barcode."%' AND ";
            }
            if($this->params->name !== ""){
                $sql .= " `others_entry`.`product_name` LIKE '%".$this->params->name."%' AND ";
            }
            if($this->params->category !== ""){
                $sql .= " `others_entry`.`product_category` LIKE '%".$this->params->category."%' AND ";
            }
            if($this->params->company !== ""){
                $sql .= " `others_entry`.`company_name` LIKE '%".$this->params->company."%' ";
            }
        }


        
        $explodedStringArr = explode("AND", $sql);

        if(strlen($explodedStringArr[sizeof($explodedStringArr) - 1]) === 1){
            $sql = preg_replace('/\W\w+\s*(\W*)$/', '', $sql);
        }

        echo json_encode($this->selectData($sql));

    }


}

$product_search = new ProductSearch();

$product_search->queryData();




?>