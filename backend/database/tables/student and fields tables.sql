-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 05, 2021 at 02:06 PM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 8.0.8

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
-- Table structure for table `field/s of interest`
--

CREATE TABLE `field/s of interest` (
  `ID` int(225) NOT NULL,
  `Student_ID` varchar(225) NOT NULL,
  `Field_name` varchar(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `ID` int(225) NOT NULL,
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
  `Grade` int(50) DEFAULT NULL,
  `Syllabus` varchar(225) DEFAULT NULL,
  `Average` int(50) DEFAULT NULL,
  `Currently_studying` varchar(225) DEFAULT NULL,
  `Year_of_study` varchar(225) DEFAULT NULL,
  `Study_institution` varchar(225) DEFAULT NULL,
  `Continue_studies` tinyint(1) DEFAULT NULL,
  `GPA` int(50) DEFAULT NULL,
  `Description_of_student` varchar(500) NOT NULL,
  `Registerred_date` date NOT NULL,
  `Bursarred` tinyint(1) NOT NULL,
  `Current_bursary/ies` varchar(225) DEFAULT NULL,
  `Workback` tinyint(1) NOT NULL,
  `Filters` varchar(500) NOT NULL,
  `Website` varchar(225) NOT NULL,
  `Last_login` date NOT NULL,
  `Number_of_reports` int(50) NOT NULL,
  `Banned` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `field/s of interest`
--
ALTER TABLE `field/s of interest`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `field/s of interest`
--
ALTER TABLE `field/s of interest`
  MODIFY `ID` int(225) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `ID` int(225) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
