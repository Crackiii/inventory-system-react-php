<?php 

class OthersTransactions{

    public $_isBarocoded;
    public $_last_id;


    function __construct(){

        global $__data;
        global $conn;

        if($__data->barcode !== ""){
            $this->_isBarcoded = 1;
        } else{
            $this->_isBarcoded = 0;
        }

        $sql = "INSERT INTO `others_transaction`(`is_barcoded`, `barcode_no`, `product_name`, `product_category`, `company_name`, `stock_transact`, `sales_price`, `timestamp`)
                VALUES ('".$this->_isBarcoded."','".$__data->barcode."','".$__data->name."','".$__data->category."','".$__data->company."','".$__data->stock."','".$__data->sales_price."','".$__data->timestamp."')";

        if($conn->query($sql)){
            echo json_encode(array(
                "success" => true,
                "message" => "Product transacted Successfully !",
                "error" => null
            ));
        } else{
            echo json_encode(array(
                "success" => false,
                "message" => "",
                "error" => array(
                    "title" => "Product transaction Error !",
                    "message" => $conn->error
                )
            ));
        }

    }


}


new OthersTransactions();














?>