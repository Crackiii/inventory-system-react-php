<?php

class CablesEntries{

    public $_sql;
    public $_isBarocoded;
    public $_last_id;
    public $cable_entry;
    public $local_cable_entry;
    public $imported_cable_entry;
    

    function __construct(){
        
        global $__data;
        global $conn;

        if($__data->activeRoute === "barcodeEntry"){
            $this->_isBarcoded = 1;
        } else {
            $this->_isBarcoded = 0;
        }

        $this->sql = "INSERT INTO `cables_entry`(`is_barcoded`, `barcode_no`, `size_mm`, `company`, `color`, `core`, `timestamp`) 
                VALUES (".$this->_isBarcoded.",'".$__data->barcode."','".$__data->size."','".$__data->company_sel."','".$__data->color_sel."','".$__data->core_sel."','".$__data->timestamp."')";
        
        if($conn->query($this->sql)){
            $this->_last_id = $conn->insert_id;
            $this->cable_entry = array(
                "success" => true,
                "message" => "Cables entry made successfully.",
                "error" => null
            );
        } else{
            $this->cable_entry = array(
                "success" => false,
                "message" => "",
                "error" => array(
                    "type" => "Cables entry Error !",
                    "message" => $conn->error
                )
            );
        }

    }

    function localCables($cb){

        global $__data;
        global $conn;
        
        $sql = "INSERT INTO `local_cables_entry`(`cables_id`, `packs_recieved`, `unit_price_per_meter`, `sales_price_per_meter`, `timestamp`) 
                VALUES ('".$this->_last_id."','".$__data->packs."','".$__data->price_meter."','".$__data->sprice_meter."','".$__data->timestamp."')";

        if($conn->query($sql)){
            $this->local_cable_entry = array(
                "success" => true,
                "message" => "Entry made in Local Cables",
                "error" => null
            );
        } else{
            $this->local_cable_entry = array(
                "success" => false,
                "message" => "",
                "error" => array(
                    "type" => "Local Cables Entry Error !",
                    "message" => $conn->error
                )
            );
        }

        $cb($this->local_cable_entry, $this->cable_entry);

    }

    function importedCables($cb){
        
        global $__data;
        global $conn;

        $sql = "INSERT INTO `imported_cables_entry`(`cables_id`, `bundles_received`, `unit_price_per_kg`, `kgs_per_bundle`, `sales_price_per_kg`, `timestamp`) 
        VALUES ('".$this->_last_id."','".$__data->bundles."','".$__data->price_kg."','".$__data->total_kgs."','".$__data->sprice_kg."','".$__data->timestamp."')";
        
        if($conn->query($sql)){
            $this->imported_cable_entry = array(
                "success" => true,
                "message" => "Entry made in Imported Cables !",
                "error" => null
            );
        } else {
            $this->imported_cable_entry = array(
                "success" => false,
                "message" => "",
                "error" => array(
                    "type" => "Imported Cables Entry Error !",
                    "message" => $conn->error
                )
            );
        }
        
        $cb($this->imported_cable_entry, $this->cable_entry);

    }





}

function results($cable_type_entry, $cable_entry){
    if($cable_type_entry['success'] === true && $cable_entry['success'] === true){
        echo json_encode(array("success"=>true, "sub_t" => $cable_type_entry, "main_t" => $cable_entry));
    } else{
        echo json_encode(array("success"=>false, "sub_t" => $cable_type_entry, "main_t" => $cable_entry));
    }
}

$entries = new CablesEntries('results');

if($__data->isImported === true){
    $entries->importedCables('results');    
} else if($__data->isImported === false){
    $entries->localCables('results');
}
























?>