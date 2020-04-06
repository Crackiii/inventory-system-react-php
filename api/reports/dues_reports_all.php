<?php


class DuesAllReports{


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

    function getAllDuesReports(){
        global $conn;
        global $__data;

        $result = $this->selectData("SELECT dpay.*, SUM(d.due_amount), SUM(dpaid.paid_amount) 
                                    FROM dues_payers dpay 
                                    LEFT JOIN dues d ON d.due_by = dpay.id 
                                    LEFT JOIN dues_paid dpaid ON dpaid.paid_for = d.due_by 
                                    GROUP BY dpay.person_name
                                    ORDER BY dpay.id ");

        echo json_encode($result);
    }


}

// SELECT dpay.*,  
//        SUM(d.due_amount),
//        dpaid.paid_by, dpaid.paid_for, dpaid.paid_by_refere,
//        SUM(dpaid.paid_amount) 
// FROM dues_payers dpay 
// LEFT JOIN dues d ON d.due_by = dpay.id 
// LEFT JOIN dues_paid dpaid ON dpaid.paid_for = d.due_by WHERE dpaid.paid_by_refere = "1"
// 						 AND dpaid.paid_by = d.due_by WHERE dpaid.paid_by_refere = "0"
// GROUP BY dpay.person_name
// ORDER BY dpay.id


// SELECT dpay.*,  
//        d.due_start_date, d.due_end_date, SUM(d.due_amount),
//        dpaid.paid_by, dpaid.paid_for, dpaid.paid_by_refere, SUM(dpaid.paid_amount) 
// FROM dues_payers dpay 
// LEFT JOIN dues d ON d.due_by = dpay.id 
// LEFT JOIN dues_paid dpaid ON dpaid.paid_for = d.due_by OR dpaid.paid_by = d.due_by 
// 					   WHERE dpaid.paid_by_refere = 1 OR dpaid.paid_by_refere = 0
						
// GROUP BY dpay.person_name
// ORDER BY dpay.id


// SELECT dpay.*,  
//        d.due_start_date, d.due_end_date, SUM(d.due_amount),
//        SUM(dpaid.paid_amount)
// FROM dues d 
// LEFT JOIN dues_payers dpay ON dpay.id = d.due_by 
// LEFT JOIN dues_paid dpaid ON dpaid.paid_for = d.due_by
// GROUP BY dpay.person_name
// ORDER BY dpay.id

//FROM ALL
SELECT dpay.*,  
       d.due_start_date, d.due_end_date, SUM(d.due_amount),
       SUM(dpaid.paid_amount)
FROM dues d
LEFT JOIN dues_payers dpay ON dpay.id = d.due_by
LEFT JOIN dues_paid dpaid ON dpaid.paid_for = dpay.id AND dpaid.paid_by_refere='1' OR
                             dpaid.paid_by = dpay.id AND dpaid.paid_by_refere='0'
GROUP BY dpay.person_name
ORDER BY dpay.id

//FROM DUES PAID
SELECT dpay.*, dpaid.paid_amount, SUM(dpaid.paid_amount)
FROM dues_payers dpay
LEFT JOIN dues_paid dpaid ON dpaid.paid_for = dpay.id AND dpaid.paid_by_refere='1' OR
							 dpaid.paid_by = dpay.id AND dpaid.paid_by_refere='0'
GROUP BY dpay.person_name
ORDER BY dpay.id

//FROM DUES
SELECT dpay.*, SUM(d.due_amount)
FROM dues d
LEFT JOIN dues_payers dpay ON dpay.id = d.due_by
GROUP BY dpay.person_name
ORDER BY dpay.id





$duesAllReports = new DuesAllReports();
$duesAllReports->getAllDuesReports();
























?>