<?php

class CablesSearch{

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

        $sql = "SELECT ce.*, ice.*, lce.* FROM cables_entry ce LEFT JOIN imported_cables_entry ice ON ice.cables_id = ce.id LEFT JOIN local_cables_entry lce ON lce.cables_id = ce.id ";

        if($this->params->barcode !== "" || 
           $this->params->size !== "" || 
           $this->params->company_sel !== "" || 
           $this->params->color_sel !== "" ||
           $this->params->core_sel !== ""
        ){
            $sql .= " WHERE ";
            if($this->params->barcode !== ""){
                $sql .= " ce.`barcode_no` LIKE '%".$this->params->barcode."%' AND ";
            }
            if($this->params->size !== ""){
                $sql .= " ce.`size_mm` LIKE '%".$this->params->size."%' AND ";
            }
            if($this->params->company_sel !== ""){
                // if($this->params->company_sel === "imported"){}
                $sql .= " ce.`company` LIKE '%".$this->params->company_sel."%' AND ";
            }
            if($this->params->color_sel !== ""){
                $sql .= " ce.`color` LIKE '%".$this->params->color_sel."%' AND ";
            }
            if($this->params->core_sel !== ""){
                $sql .= " ce.`core` LIKE '%".$this->params->core_sel."%' ";
            }

            
        }

        $explodedStringArr = explode("AND", $sql);

        if(strlen($explodedStringArr[sizeof($explodedStringArr) - 1]) === 1){
            $sql = preg_replace('/\W\w+\s*(\W*)$/', '', $sql);
        }
        // print_r($sql);
        echo json_encode($this->selectData($sql));

    }


}

$cables_search = new CablesSearch();

$cables_search->queryData();







?>