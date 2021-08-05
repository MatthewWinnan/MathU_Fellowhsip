-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3308
-- Generation Time: Aug 05, 2021 at 12:44 PM
-- Server version: 8.0.21
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `math_u_fellows`
--

-- --------------------------------------------------------

--
-- Table structure for table `all_users`
--

DROP TABLE IF EXISTS `all_users`;
CREATE TABLE IF NOT EXISTS `all_users` (
  `Id` int NOT NULL,
  `User_id` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Email_address` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `field/s of interest`
--

DROP TABLE IF EXISTS `field/s of interest`;
CREATE TABLE IF NOT EXISTS `field/s of interest` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Student_ID` varchar(225) NOT NULL,
  `Field_name` varchar(225) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

DROP TABLE IF EXISTS `student`;
CREATE TABLE IF NOT EXISTS `student` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Student_ID` varchar(225) NOT NULL,
  `First_name` varchar(225) NOT NULL,
  `Last_name` varchar(225) NOT NULL,
  `Date_of_birth` date NOT NULL,
  `Email_address` varchar(225) NOT NULL,
  `Password` varchar(225) NOT NULL,
  `Validated` tinyint(1) NOT NULL,
  `Nationality` tinyint(1) NOT NULL,
  `Contact_number` tinyint(1) NOT NULL,
  `City` varchar(225) NOT NULL,
  `Province` varchar(225) NOT NULL,
  `Disability` tinyint(1) NOT NULL,
  `Current_academic_level` varchar(225) NOT NULL,
  `Grade` int DEFAULT NULL,
  `Syllabus` varchar(225) DEFAULT NULL,
  `Average` int DEFAULT NULL,
  `Currently_studying` varchar(225) DEFAULT NULL,
  `Year_of_study` varchar(225) DEFAULT NULL,
  `Study_institution` varchar(225) DEFAULT NULL,
  `Continue_studies` tinyint(1) DEFAULT NULL,
  `GPA` int DEFAULT NULL,
  `Description_of_student` varchar(500) NOT NULL,
  `Registerred_date` date NOT NULL,
  `Bursarred` tinyint(1) NOT NULL,
  `Current_bursary/ies` varchar(225) DEFAULT NULL,
  `Workback` tinyint(1) NOT NULL,
  `Filters` varchar(500) NOT NULL,
  `Website` varchar(225) NOT NULL,
  `Last_login` date NOT NULL,
  `Number_of_reports` int NOT NULL,
  `Banned` tinyint(1) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `student_bursary`
--

DROP TABLE IF EXISTS `student_bursary`;
CREATE TABLE IF NOT EXISTS `student_bursary` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Bursary_ID` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Student_ID` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Application_date` datetime NOT NULL,
  `Shortlisted` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `subjects+marks`
--

DROP TABLE IF EXISTS `subjects+marks`;
CREATE TABLE IF NOT EXISTS `subjects+marks` (
  `Sub_mark` int NOT NULL,
  `Student_ID` int NOT NULL,
  `Subject_name` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Mark` int NOT NULL,
  PRIMARY KEY (`Sub_mark`),
  KEY `Student_ID` (`Student_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `subjects+marks`
--
ALTER TABLE `subjects+marks`
  ADD CONSTRAINT `subjects+marks_ibfk_1` FOREIGN KEY (`Student_ID`) REFERENCES `student` (`ID`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
