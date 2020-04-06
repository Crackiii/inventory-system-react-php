<?php

class Select{


    function __construct($query){
        global $conn;


        $sql = $query;
        
        if($conn->query($sql)){

            $result = $conn->query($sql);
            $data = array();
            if($result->num_rows > 0){
                
                while($row = $result->fetch_assoc()) { 
                    $data[] = $row;
                }

                print_r($data);
                
            }
            
        } else{
            echo $conn->error;
        }
    }


}










?>