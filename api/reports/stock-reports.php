<?php 

class StockReports {

    function __construct(){
        
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

    //company wise filtering
    function filterCablesData($parent, $child, $company){
        return $this->selectData("SELECT * FROM `".$parent."`,`".$child."` WHERE `".$parent."`.`company`='".$company."' 
                                  AND `".$parent."`.`id`=`".$child."`.`cables_id`");
    }

    //calculate data
    function calcActions($array, $item){
        if($array === 0) return;
        $amount = 0;
        for ($i=0; $i < sizeof($array); $i++) { 
            $amount += (int)$array[$i][$item];
        }
        return $amount;
    }

}

$stockReports = new StockReports();

$fast_cables_entries = $stockReports->filterCablesData( "cables_entry", "local_cables_entry", "fast");
$fast_cables_transactions = $stockReports->filterCablesData( "cables_transaction", "local_cables_transaction", "fast");

$pakistan_cables_entries = $stockReports->filterCablesData( "cables_entry", "local_cables_entry", "pakistan");
$pakistan_cables_transactions = $stockReports->filterCablesData( "cables_transaction", "local_cables_transaction", "pakistan");

$pak_cables_entries = $stockReports->filterCablesData( "cables_entry", "local_cables_entry", "pak");
$pak_cables_transactions = $stockReports->filterCablesData( "cables_transaction", "local_cables_transaction", "pak");

$goodman_cables_entries = $stockReports->filterCablesData( "cables_entry", "local_cables_entry", "goodman");
$goodman_cables_transactions = $stockReports->filterCablesData( "cables_transaction", "local_cables_transaction", "goodman");

$bestway_cables_entries = $stockReports->filterCablesData( "cables_entry", "local_cables_entry", "bestways");
$bestway_cables_transactions = $stockReports->filterCablesData( "cables_transaction", "local_cables_transaction", "bestways");

$imported_cables_entries = $stockReports->filterCablesData( "cables_entry", "imported_cables_entry", "imported");
$imported_cables_transactions = $stockReports->filterCablesData( "cables_transaction", "imported_cables_transaction", "imported");



echo json_encode(array(
    array(
        "entries" => $stockReports->calcActions($fast_cables_entries, 'packs_recieved'),
        "transactions" => $stockReports->calcActions($fast_cables_transactions, 'packs_transact'),
        "last_entry" => $fast_cables_entries[sizeof($fast_cables_entries) - 1]['timestamp'],
        "name" => "Fast Cables",
        "color" => "btn btn-danger"
    ),
    array(
        "entries" => $stockReports->calcActions($pakistan_cables_entries, 'packs_recieved'),
        "transactions" => $stockReports->calcActions($pakistan_cables_transactions, 'packs_transact'),
        "last_entry" => $pakistan_cables_entries[sizeof($pakistan_cables_entries) - 1]['timestamp'],
        "name" => "Pakistan Cables",
        "color" => "btn btn-primary"
    ),
    array(
        "entries" => $stockReports->calcActions($goodman_cables_entries, 'packs_recieved'),
        "transactions" => $stockReports->calcActions($goodman_cables_transactions, 'packs_transact'),
        "last_entry" => $goodman_cables_entries[sizeof($goodman_cables_entries) - 1]['timestamp'],
        "name" => "Goodman Cables",
        "color" => "btn btn-secondary"
    ),
    array(
        "entries" => $stockReports->calcActions($bestway_cables_entries, 'packs_recieved'),
        "transactions" => $stockReports->calcActions($bestway_cables_transactions, 'packs_transact'),
        "last_entry" => $bestway_cables_entries[sizeof($bestway_cables_entries) - 1]['timestamp'],
        "name" => "Bestway Cables",
        "color" => "btn btn-info"
    ),
    array(
        "entries" => $stockReports->calcActions($pak_cables_entries, 'packs_recieved'),
        "transactions" => $stockReports->calcActions($pak_cables_transactions, 'packs_transact'),
        "last_entry" => $pak_cables_entries[sizeof($pak_cables_entries) - 1]['timestamp'],
        "name" => "Pak Cables",
        "color" => "btn btn-success"
    ),
    array(
        "entries" => $stockReports->calcActions($imported_cables_entries, 'bundles_received'),
        "transactions" => $stockReports->calcActions($imported_cables_transactions, 'bundles_transact'),
        "last_entry" => $imported_cables_entries[sizeof($imported_cables_entries) - 1]['timestamp'],
        "name" => "Imported Cables",
        "color" => "btn btn-warning"
    ),
), false);

?>