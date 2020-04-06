<?php
class CablesTransaction{

    public $isBarcoded;
    public $_last_id;
    public $cable_transaction;
    public $local_cable_transaction;
    public $imported_cable_transaction;

    function __construct(){
        global $__data;
        global $conn;

        if($__data->barcode !== ""){
            $this->isBarcoded = 1;
        } else{
            $this->isBarcoded = 0;
        }

        $sql = "INSERT INTO `cables_transaction`(`is_barcoded`, `barcode_no`, `size_mm`, `company`, `color`, `core`, `timestamp`) 
                VALUES ('".$this->isBarcoded."','".$__data->barcode."','".$__data->size."','".$__data->company_sel."','".$__data->color_sel."','".$__data->core_sel."','".$__data->timestamp."')";
        
        if($conn->query($sql)){
            $this->_last_id = $conn->insert_id;
            $this->cable_transaction = array(
                "success" => true,
                "message" => "Cables transaction made successfully.",
                "error" => null
            );
        } else{
            $this->cable_transaction = array(
                "success" => false,
                "message" => "",
                "error" => array(
                    "type" => "Cables transaction Error !",
                    "message" => $conn->error
                )
            );
        }

        

    }

    function localCablesTransacton($cb){
        global $__data;
        global $conn;

        $sql = "INSERT INTO `local_cables_transaction`(`cables_id`, `packs_transact`, `sales_price_per_meter`, `timestamp`) 
                VALUES ('".$this->_last_id."', '".$__data->packs."', '".$__data->price_meter."', '".$__data->timestamp."')";
        
        if($conn->query($sql)){
            $this->local_cable_transaction = array(
                "success" => true,
                "message" => "Transaction made in Local Cables",
                "error" => null
            );
        } else{
            $this->local_cable_transaction = array(
                "success" => false,
                "message" => "",
                "error" => array(
                    "type" => "Local Cables Transaction Error !",
                    "message" => $conn->error
                )
            );
        }
        $cb($this->local_cable_transaction, $this->cable_transaction);
    }

    function importedCablesTransaction($cb){
        global $__data;
        global $conn;

        $sql = "INSERT INTO `imported_cables_transaction`(`cables_id`, `bundles_transact`, `unit_price_per_kg`, `kgs_trans`, `timestamp`) 
                VALUES ('".$this->_last_id."','".$__data->bundles."','".$__data->price_kg."','".$__data->total_kgs."','".$__data->timestamp."')";
        
        if($conn->query($sql)){
            $this->imported_cable_transaction = array(
                "success" => true,
                "message" => "Transaction made in Imported Cables !",
                "error" => null
            );
        } else{
            $this->imported_cable_transaction = array(
                "success" => false,
                "message" => "",
                "error" => array(
                    "type" => "Imported Cables Transaction Error !",
                    "message" => $conn->error
                )
            );
        }

        $cb($this->imported_cable_transaction, $this->cable_transaction);
    }

}


function results($cable_type_entry, $cable_transaction){
    if($cable_type_entry['success'] === true && $cable_transaction['success'] === true){
        echo json_encode(array("success"=>true, "sub_t" => $cable_type_entry, "main_t" => $cable_transaction));
    } else{
        echo json_encode(array("success"=>false, "sub_t" => $cable_type_entry, "main_t" => $cable_transaction));
    }
}

$transaction = new CablesTransaction();

if($__data->isImported === true){
    $transaction->importedCablesTransaction('results');    
} else if($__data->isImported === false){
    $transaction->localCablesTransacton('results');
}





















?>