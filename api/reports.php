<?php

    global $__data;
    global $__type;
    if($__data === "stock-report" && $__type === "all"){
        require("./reports/stock-reports.php");
    } else if($__type === "dues_reports"){
        require("./reports/dues_reports.php");
    } else if($__type === "dues-report-all"){
        require("./reports/dues_reports_all.php");
    }



?>