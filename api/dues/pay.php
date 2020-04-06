<?php 



class DuePay{

    public $id = "";
    public $_id = "";

    function __construct(){

    }

    function insertDuePayer(){
        global $conn;
        global $__data;

        $sql = "INSERT INTO `dues_payers` (`person_name`, `person_address`, `person_phone`, `person_nic`) 
                VALUES ('".$__data->name."','".$__data->address."','".$__data->phone."','".$__data->nic."')";
        if($conn->query($sql)){
            $this->id = $conn->insert_id;
            return true; 
        } else{
            echo $conn->error;
        }
    }
    function insertReferee(){
        global $conn;
        global $__data;

        $sql = "INSERT INTO `dues_payers` (`person_name`, `person_address`, `person_phone`, `person_nic`) 
                VALUES ('".$__data->paying_for_name."','".$__data->paying_for_address."','".$__data->paying_for_phone."','".$__data->paying_for_nic."')";
        if($conn->query($sql)){
            $this->_id = $conn->insert_id;
            return true; 
        } else{
            echo $conn->error;
        }
    }

    function insertDuePay(){

        global $conn;
        global $__data;

        $sql = "";
        
        if($__data->payer === "self"){
            if(!$__data->hide_name){
                $this->insertDuePayer();
            }
            if(strlen($this->id) === 0){
                $this->id = $__data->selected_person->id;
            }
            $sql = "INSERT INTO `dues_paid`(`paid_amount`, `paid_date`, `paid_by`, `paid_for`, `paid_by_refere`) 
                    VALUES('".$__data->amount."','".$__data->time."','".$this->id."', '0', '0')";

        } else if($__data->payer === "referee"){
            if(!$__data->hide_name){
                $this->insertDuePayer();
            }
            if(!$__data->paying_for_hide_name){
                $this->insertReferee();
            }
            if(strlen($this->id) === 0){
                $this->id = $__data->selected_person->id;
            }
            if(strlen($this->_id) === 0){
                $this->_id = $__data->paying_for_selected_person->id;
            }
            

            $sql = "INSERT INTO `dues_paid`(`paid_amount`, `paid_date`, `paid_by`, `paid_for`, `paid_by_refere`) 
            VALUES ('".$__data->amount."','".$__data->time."','".$this->id."','".$this->_id."','1')";
            
        }

        if($conn->query($sql)){
            echo "Due Paid Successfull !";
        } else {
            echo "Error - ".$conn->error;
        }

    }
}

$duePay = new DuePay();
$duePay->insertDuePay();
























?>