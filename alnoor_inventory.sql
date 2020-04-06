-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 06, 2020 at 05:15 AM
-- Server version: 5.7.26
-- PHP Version: 7.3.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `alnoor_inventory`
--

-- --------------------------------------------------------

--
-- Table structure for table `cables_entry`
--

DROP TABLE IF EXISTS `cables_entry`;
CREATE TABLE IF NOT EXISTS `cables_entry` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `is_barcoded` varchar(10) NOT NULL,
  `barcode_no` varchar(50) NOT NULL,
  `size_mm` varchar(10) NOT NULL,
  `company` varchar(50) NOT NULL,
  `color` varchar(50) NOT NULL,
  `core` varchar(50) NOT NULL,
  `timestamp` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=41 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cables_entry`
--

INSERT INTO `cables_entry` (`id`, `is_barcoded`, `barcode_no`, `size_mm`, `company`, `color`, `core`, `timestamp`) VALUES
(1, '1', '10001', '3mm', 'fast', 'white', '1core', '1574142911403'),
(2, '1', '10002', '1.5mm', 'fast', 'white', '1core', '1574142911403'),
(3, '1', '10002', '5mm', 'fast', 'white', '1core', '1574142911403'),
(4, '1', '10004', '5mm', 'pakistan', 'white', '1core', '1574142911403'),
(5, '1', '10004', '2mm', 'pakistan', 'white', '1core', '1574142911403'),
(6, '1', '10006', '1mm', 'pakistan', 'white', '1core', '1574142911403'),
(7, '1', '10006', '1mm', 'pakistan', 'yellow', '1core', '1574142911403'),
(8, '1', '10006', '1mm', 'pakistan', 'red', '1core', '1574142911403'),
(9, '1', '10006', '1mm', 'pakistan', 'black', '1core', '1574142911403'),
(10, '1', '10006', '1mm', 'pakistan', 'black', '2core', '1574142911403'),
(11, '1', '10006', '1mm', 'pakistan', 'black', '3core', '1574142911403'),
(12, '1', '10006', '1mm', 'pakistan', 'black', '3core', '1574142911403'),
(13, '1', '10006', '1mm', 'pakistan', 'black', '3core', '1574142911403'),
(14, '1', '10006', '3mm', 'goodman', 'white', '3core', '1574142911403'),
(15, '1', '10006', '3mm', 'goodman', 'white', '2core', '1574142911403'),
(16, '1', '10006', '3mm', 'goodman', 'white', '2core', '1574142911403'),
(17, '1', '10009', '3mm', 'goodman', 'white', '2core', '1574142911403'),
(18, '1', '10009', '3mm', 'bestways', 'white', '2core', '1574142911403'),
(19, '1', '10009', '3mm', 'imported', 'yellow', '3core', '1574142911403'),
(20, '1', '10009', '3mm', 'imported', 'white', '3core', '1574142911403'),
(21, '1', '10009', '3mm', 'imported', 'green', '3core', '1574142911403'),
(22, '1', '10009', '3mm', 'imported', 'green', '2core', '1574142911403'),
(23, '1', '10009', '3mm', 'imported', 'green', '2core', '1574142911403'),
(24, '1', '10009', '3mm', 'imported', 'green', '2core', '1574142911403'),
(25, '1', '10009', '6mm', 'imported', 'green', '2core', '1574142911403'),
(26, '1', '10010', '6mm', 'imported', 'green', '2core', '1574142911403'),
(27, '0', '0', '5mm', 'goodman', 'red', '2core', '1574143306114'),
(28, '0', '0', '5mm', 'goodman', 'red', '1core', '1574143306114'),
(29, '0', '0', '5mm', 'goodman', 'black', '1core', '1574143306114'),
(30, '0', '0', '5mm', 'goodman', 'green', '1core', '1574143306114'),
(31, '0', '0', '5mm', 'bestways', 'green', '1core', '1574143306114'),
(32, '0', '0', '2mm', 'bestways', 'green', '1core', '1574143306114'),
(33, '0', '0', '2mm', 'imported', 'green', '1core', '1574143306114'),
(34, '0', '0', '8mm', 'imported', 'green', '1core', '1574143306114'),
(35, '0', '0', '8mm', 'goodman', 'green', '1core', '1574143306114'),
(36, '0', '0', '8mm', 'goodman', 'green', '1core', '1574143306114'),
(37, '1', '100001', '56mm', 'fast', 'black', '4core', '1574260587007'),
(38, '1', '1008', '33mm', 'pak', 'black', '3core', '1574268324452'),
(39, '0', '0', '89mm', 'bestways', 'yellow', '3core', '1574268427964'),
(40, '0', '0', '67mm', 'bestways', 'yellow', '3core', '1574268475070');

-- --------------------------------------------------------

--
-- Table structure for table `cables_transaction`
--

DROP TABLE IF EXISTS `cables_transaction`;
CREATE TABLE IF NOT EXISTS `cables_transaction` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `is_barcoded` varchar(10) NOT NULL,
  `barcode_no` varchar(50) NOT NULL,
  `size_mm` varchar(10) NOT NULL,
  `company` varchar(50) NOT NULL,
  `color` varchar(50) NOT NULL,
  `core` varchar(50) NOT NULL,
  `timestamp` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cables_transaction`
--

INSERT INTO `cables_transaction` (`id`, `is_barcoded`, `barcode_no`, `size_mm`, `company`, `color`, `core`, `timestamp`) VALUES
(1, '1', '1001', '22', 'fast', 'yellow', '1core', '1574228683241'),
(2, '1', '1001', '22', 'fast', 'yellow', '1core', '1574228744531'),
(3, '1', '11', '22', 'fast', 'yellow', '2core', '1574228856194'),
(4, '1', '11', '1221', 'fast', 'yellow', '3core', '1574229138308'),
(5, '1', '10009', '33mm', 'pakistan', 'yellow', '2core', '1574267578795'),
(6, '1', '100009', '3mm', 'imported', 'red', '3core', '1574268224106'),
(7, '1', '10009', '34m', 'imported', 'yellow', '3core', '1574268302554'),
(8, '0', '', '33mm', 'pak', 'yellow', '3core', '1574268389472');

-- --------------------------------------------------------

--
-- Table structure for table `dues`
--

DROP TABLE IF EXISTS `dues`;
CREATE TABLE IF NOT EXISTS `dues` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `due_by` varchar(500) NOT NULL,
  `due_amount` bigint(200) NOT NULL,
  `due_start_date` varchar(50) NOT NULL,
  `due_end_date` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `dues`
--

INSERT INTO `dues` (`id`, `due_by`, `due_amount`, `due_start_date`, `due_end_date`) VALUES
(1, '1', 10000, '2019-11-23', '2019-11-30'),
(2, '2', 1340, '2019-11-28', '2019-11-30'),
(3, '1', 78000, '2019-11-23', '2019-11-30'),
(4, '3', 8800, '2019-11-23', '2019-11-30'),
(5, '4', 90000, '2019-11-30', '2019-12-31'),
(6, '1', 10000, '2019-11-23', '2019-11-30'),
(7, '14', 15000, '2019-11-23', '2019-11-30'),
(8, '2', 100, '2019-11-24', '2019-11-26');

-- --------------------------------------------------------

--
-- Table structure for table `dues_paid`
--

DROP TABLE IF EXISTS `dues_paid`;
CREATE TABLE IF NOT EXISTS `dues_paid` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `paid_amount` bigint(200) NOT NULL,
  `paid_date` varchar(50) NOT NULL,
  `paid_by` varchar(500) NOT NULL,
  `paid_for` varchar(100) NOT NULL,
  `paid_by_refere` int(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `dues_paid`
--

INSERT INTO `dues_paid` (`id`, `paid_amount`, `paid_date`, `paid_by`, `paid_for`, `paid_by_refere`) VALUES
(1, 111, '1574494281679', '1', '4', 1),
(2, 2229, '1574494364491', '9', '1', 1),
(3, 32000, '1574494669264', '9', '10', 1),
(4, 89000, '1574494824919', '11', '12', 1),
(5, 6700, '1574494898448', '4', '12', 1),
(6, 10000, '1574495543168', '13', '0', 0),
(7, 8000, '1574506094263', '1', '3', 1),
(8, 40, '1574577221750', '1', '2', 1),
(9, 100, '1574577284558', '2', '0', 0),
(10, 100, '1574577343082', '2', '0', 0);

-- --------------------------------------------------------

--
-- Table structure for table `dues_payers`
--

DROP TABLE IF EXISTS `dues_payers`;
CREATE TABLE IF NOT EXISTS `dues_payers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `person_name` varchar(50) NOT NULL,
  `person_address` varchar(500) NOT NULL,
  `person_phone` varchar(50) NOT NULL,
  `person_nic` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `dues_payers`
--

INSERT INTO `dues_payers` (`id`, `person_name`, `person_address`, `person_phone`, `person_nic`) VALUES
(1, 'Nadeem Ahmad', 'Sirsini, Tehsil : Kabal, City : Mingora, District Swat, KP, Pakistan', '+923471920264', '15604-0358342-1'),
(2, 'Adnan Khan', 'Hazara, Kabal, Swat, KP, Pakistan', '+923159551213', '15604-08812122-1'),
(3, 'Amir Sohail', 'Galoch, Kabal Swat KP Pakistan', '03409557858', '15604-88934527-1'),
(4, 'Sulieman Kuzaizan', 'Some, Place in Lebnon', '+00971508586272', '18009-67492093-1'),
(9, 'Saleem Khan', 'Fazal Abad, Kanju Swat, KP, Pakistan', '+934567894562', '15604`9807638`4'),
(10, 'Nawaz Ullah', 'Kotlai Kabal, Swat KP, Pakistan', '+92 3457863434', '15602-0346749-3'),
(11, 'Inzamam ul Haq', 'Mingora Swat, KP, Pakistan', '021 645788', '18096-5683949-5'),
(12, 'Ayaz Ahmad', 'Blue Area, Islamabad Punjab, Pakistan', '+923337778899', '15602-7820485-6'),
(13, 'Mark Zuckerberg', 'Some, Place in Lebnon', '+923471920264', '18009-67492093-1'),
(14, 'Ihsan ullah', 'Zyarhy Baba Sirsinai, Kabal, Swat, KP, Pakistan', '03408005329', '15604-08812122-1');

-- --------------------------------------------------------

--
-- Table structure for table `imported_cables_entry`
--

DROP TABLE IF EXISTS `imported_cables_entry`;
CREATE TABLE IF NOT EXISTS `imported_cables_entry` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cables_id` int(11) NOT NULL,
  `bundles_received` varchar(50) NOT NULL,
  `unit_price_per_kg` varchar(50) NOT NULL,
  `kgs_per_bundle` varchar(50) NOT NULL,
  `sales_price_per_kg` varchar(50) NOT NULL,
  `timestamp` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `imported_cables_entry`
--

INSERT INTO `imported_cables_entry` (`id`, `cables_id`, `bundles_received`, `unit_price_per_kg`, `kgs_per_bundle`, `sales_price_per_kg`, `timestamp`) VALUES
(1, 19, '10', '100', '15', '120', '1574142911403'),
(2, 20, '10', '100', '15', '120', '1574142911403'),
(3, 21, '10', '100', '15', '120', '1574142911403'),
(4, 22, '10', '100', '15', '120', '1574142911403'),
(5, 23, '10', '10', '15', '120', '1574142911403'),
(6, 24, '10', '10', '12', '120', '1574142911403'),
(7, 25, '10', '10', '12', '120', '1574142911403'),
(8, 26, '10', '10', '12', '120', '1574142911403'),
(9, 33, '90', '77', '85', '100', '1574143306114'),
(10, 34, '90', '77', '85', '100', '1574143306114');

-- --------------------------------------------------------

--
-- Table structure for table `imported_cables_transaction`
--

DROP TABLE IF EXISTS `imported_cables_transaction`;
CREATE TABLE IF NOT EXISTS `imported_cables_transaction` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cables_id` int(11) NOT NULL,
  `bundles_transact` varchar(50) NOT NULL,
  `unit_price_per_kg` varchar(50) NOT NULL,
  `kgs_trans` varchar(50) NOT NULL,
  `timestamp` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `imported_cables_transaction`
--

INSERT INTO `imported_cables_transaction` (`id`, `cables_id`, `bundles_transact`, `unit_price_per_kg`, `kgs_trans`, `timestamp`) VALUES
(1, 6, '10', '345', '123', '1574268224106'),
(2, 7, '46', '789', '231', '1574268302554');

-- --------------------------------------------------------

--
-- Table structure for table `local_cables_entry`
--

DROP TABLE IF EXISTS `local_cables_entry`;
CREATE TABLE IF NOT EXISTS `local_cables_entry` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cables_id` int(11) NOT NULL,
  `packs_recieved` varchar(50) NOT NULL,
  `unit_price_per_meter` varchar(50) NOT NULL,
  `sales_price_per_meter` varchar(50) NOT NULL,
  `timestamp` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=31 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `local_cables_entry`
--

INSERT INTO `local_cables_entry` (`id`, `cables_id`, `packs_recieved`, `unit_price_per_meter`, `sales_price_per_meter`, `timestamp`) VALUES
(1, 1, '10', '1032', '121', '1574142911403'),
(2, 2, '10', '1032', '121', '1574142911403'),
(3, 3, '10', '1032', '121', '1574142911403'),
(4, 4, '10', '1032', '121', '1574142911403'),
(5, 5, '10', '1032', '121', '1574142911403'),
(6, 6, '10', '1032', '121', '1574142911403'),
(7, 7, '10', '1032', '121', '1574142911403'),
(8, 8, '10', '1032', '121', '1574142911403'),
(9, 9, '10', '1032', '121', '1574142911403'),
(10, 10, '10', '1032', '121', '1574142911403'),
(11, 11, '10', '1032', '121', '1574142911403'),
(12, 12, '19', '1032', '121', '1574142911403'),
(13, 13, '19', '102', '190', '1574142911403'),
(14, 14, '19', '102', '190', '1574142911403'),
(15, 15, '19', '102', '190', '1574142911403'),
(16, 16, '80', '109', '200', '1574142911403'),
(17, 17, '80', '109', '200', '1574142911403'),
(18, 18, '80', '109', '200', '1574142911403'),
(19, 27, '190', '50', '80', '1574143306114'),
(20, 28, '190', '50', '80', '1574143306114'),
(21, 29, '190', '50', '80', '1574143306114'),
(22, 30, '190', '50', '80', '1574143306114'),
(23, 31, '190', '50', '80', '1574143306114'),
(24, 32, '190', '50', '80', '1574143306114'),
(25, 35, '190', '50', '80', '1574143306114'),
(26, 36, '190', '120', '80', '1574143306114'),
(27, 37, '54', '134', '342', '1574260587007'),
(28, 38, '100', '189', '456', '1574268324452'),
(29, 39, '64', '19', '90', '1574268427964'),
(30, 40, '89', '189', '189', '1574268475070');

-- --------------------------------------------------------

--
-- Table structure for table `local_cables_transaction`
--

DROP TABLE IF EXISTS `local_cables_transaction`;
CREATE TABLE IF NOT EXISTS `local_cables_transaction` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cables_id` int(11) NOT NULL,
  `packs_transact` varchar(50) NOT NULL,
  `sales_price_per_meter` varchar(50) NOT NULL,
  `timestamp` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `local_cables_transaction`
--

INSERT INTO `local_cables_transaction` (`id`, `cables_id`, `packs_transact`, `sales_price_per_meter`, `timestamp`) VALUES
(1, 1, '10', '20', '1574228683241'),
(2, 2, '10', '20', '1574228744531'),
(3, 3, '10', '20', '1574228856194'),
(4, 4, '11', '123', '1574229138308'),
(5, 5, '10', '190', '1574267578795'),
(6, 8, '27', '100', '1574268389472');

-- --------------------------------------------------------

--
-- Table structure for table `others_entry`
--

DROP TABLE IF EXISTS `others_entry`;
CREATE TABLE IF NOT EXISTS `others_entry` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `is_barcoded` varchar(10) NOT NULL,
  `barcode_no` varchar(50) NOT NULL,
  `product_name` varchar(100) NOT NULL,
  `product_category` varchar(100) NOT NULL,
  `company_name` varchar(100) NOT NULL,
  `stock_supplied` varchar(100) NOT NULL,
  `unit_price` varchar(50) NOT NULL,
  `sales_price` varchar(50) NOT NULL,
  `comment` varchar(1000) NOT NULL,
  `timestamp` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `others_entry`
--

INSERT INTO `others_entry` (`id`, `is_barcoded`, `barcode_no`, `product_name`, `product_category`, `company_name`, `stock_supplied`, `unit_price`, `sales_price`, `comment`, `timestamp`) VALUES
(1, '1', '20001', 'Solar Panels', 'Solar Energy', 'Ahmad Electric Store', 'Stocks', '9500', '10000', 'Solar Panels', '1574143679727'),
(2, '1', '20001', 'Solar Panels', 'Solar Energy', 'Ahmad Electric Store', '100', '9500', '10000', 'Solar Panels', '1574143749613'),
(3, '1', '20001', 'Sockets', 'Socket1.io', 'Socketer Mingora', '850', '75', '100', 'Sockets', '1574143853179'),
(4, '1', '20004', 'Bulbs', 'Energy Savor', 'Bhai Jan Supplies', '900', '145', '170', 'Energy Savors', '1574143900257'),
(5, '1', '20004', 'Buttons', 'Electric Buttons', 'Bhai Jan Supplies', '1020', '200', '220', 'Electric Buttons', '1574144115653'),
(6, '0', '0', 'Product Name', 'solar ', 'Ahmad', '100', '777', '888', '89898', '1574149469288');

-- --------------------------------------------------------

--
-- Table structure for table `others_transaction`
--

DROP TABLE IF EXISTS `others_transaction`;
CREATE TABLE IF NOT EXISTS `others_transaction` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `is_barcoded` varchar(10) NOT NULL,
  `barcode_no` varchar(50) NOT NULL,
  `product_name` varchar(100) NOT NULL,
  `product_category` varchar(100) NOT NULL,
  `company_name` varchar(100) NOT NULL,
  `stock_transact` varchar(100) NOT NULL,
  `sales_price` varchar(50) NOT NULL,
  `timestamp` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
