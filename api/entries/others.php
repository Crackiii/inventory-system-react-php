<?php 


class OthersEntry{

    public $_isBarocoded;
    public $_last_id;


    function __construct(){

        global $__data;
        global $conn;

        if($__data->activeRoute === "barcodeEntry"){
            $this->_isBarcoded = 1;
        } else {
            $this->_isBarcoded = 0;
        }

        $sql = "INSERT INTO `others_entry`(`is_barcoded`, `barcode_no`, `product_name`, `product_category`, `company_name`, `stock_supplied`, `unit_price`, `sales_price`, `comment`, `timestamp`) 
                VALUES ('".$this->_isBarcoded."','".$__data->barcode."','".$__data->name."','".$__data->category."','".$__data->company."','".$__data->stock."','".$__data->unit_price."','".$__data->sales_price."','".$__data->comment."','".$__data->timestamp."')";

        if($conn->query($sql)){
            echo json_encode(array(
                "success" => true,
                "message" => "Product added Successfully !",
                "error" => null
            ));
        } else{
            echo json_encode(array(
                "success" => false,
                "message" => "",
                "error" => array(
                    "title" => "Product Adding Error !",
                    "message" => $conn->error
                )
            ));
        }

    }


}


new OthersEntry();














?>