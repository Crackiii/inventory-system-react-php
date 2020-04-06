<?php

class DuesReports{
    
    function __construct(){

        global $__data;
        global $conn;

        $result = $this->selectData("SELECT * FROM `dues_payers` WHERE `dues_payers`.`person_name` LIKE '%".json_decode($__data)->_value."%'");

        echo json_encode($result);



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
}

new DuesReports();

?>