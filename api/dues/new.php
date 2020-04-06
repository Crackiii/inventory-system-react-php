<?php

class NewDue{

    function __construct(){
        global $__data;
        if($__data->payer_type === 'existing'){

        }
    }

    function insertNewDue($id){

        global $conn;
        global $__data;

        $sql = "INSERT INTO `dues`(`due_by`, `due_amount`, `due_start_date`, `due_end_date`) 
                VALUES ('".$id."','".$__data->amount."','".$__data->start_date."','".$__data->end_date."')";
    
        if($conn->query($sql)){
            echo "Due Added";
        } else{
            echo "Error - ".$conn->error;
        }
        
    }

    function insertDuePayer(){
        global $conn;
        global $__data;

        $sql = "INSERT INTO `dues_payers`(`person_name`, `person_address`, `person_phone`, `person_nic`) 
                VALUES ('".$__data->name."','".$__data->address."','".$__data->phone."','".$__data->nic."')";
        
        if($__data->payer_type === "existing"){
            $this->insertNewDue($__data->selected_person->id);
        } else{
            if($conn->query($sql)){
                $this->insertNewDue($conn->insert_id);
            } else{
                echo $conn->error;
            }
        }
        
    }

}

$newDue = new NewDue();
$newDue->insertDuePayer();


?>