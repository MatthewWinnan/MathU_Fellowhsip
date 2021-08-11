-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 11, 2021 at 02:06 PM
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
-- Table structure for table `filters`
--

CREATE TABLE `filters` (
  `ID` int(11) NOT NULL,
  `Student_ID` int(225) NOT NULL COMMENT 'auto increment id form student table\r\n',
  `Filter` varchar(225) NOT NULL COMMENT 'string \r\n'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `ID` int(225) NOT NULL COMMENT 'auto increment',
  `Student_ID` varchar(225) NOT NULL COMMENT 'string\r\nfrol all_users table',
  `First_name` varchar(225) NOT NULL COMMENT 'string',
  `Last_name` varchar(225) NOT NULL COMMENT 'string',
  `Date_of_birth` date NOT NULL COMMENT 'date (YYYY-MM-DD)',
  `Email_address` varchar(225) NOT NULL COMMENT 'string',
  `password` varchar(225) NOT NULL COMMENT 'hashed password',
  `Validated` tinyint(1) NOT NULL COMMENT '1 = Yes 0 = No',
  `Nationality` tinyint(1) NOT NULL COMMENT '1 = SA 0 = Non SA',
  `Contact_number` text NOT NULL COMMENT 'string',
  `City` varchar(225) NOT NULL COMMENT 'string',
  `Province` varchar(225) NOT NULL COMMENT 'dropdown (list of provinces)',
  `Disability` tinyint(1) NOT NULL COMMENT '1 = Yes, 0 = No',
  `Current_academic_level` varchar(225) NOT NULL COMMENT 'dropdown (High School, Undergraduate, Postgraduate)',
  `Grade` double DEFAULT NULL COMMENT 'NULL if Current_academic_level = ''Undergraduate'' or ''Postgraduate''\r\n\r\ndropdown (10, 11, 12, A Level, AS Level)',
  `Syllabus` varchar(225) DEFAULT NULL COMMENT 'NULL if Current_academic_level = ''Undergraduate'' or ''Postgraduate''\r\n\r\ndropdown (Cambridge, CAPS, IEB)',
  `Average` double DEFAULT NULL COMMENT 'NULL if Current_academic_level = ''Undergraduate'' or ''Postgraduate''\r\n\r\ncalucated from marks in subjects_marks\r\n\r\nfloat',
  `Currently_studying` varchar(225) DEFAULT NULL COMMENT 'NULL if Current_academic_level = ''High School''\r\n\r\nstring',
  `Year_of_study` varchar(225) DEFAULT NULL COMMENT 'NULL if Current_academic_level = ''High School''\r\n\r\ndropdown (1st, 2nd, 3rd, 4th Year, Honours, Masters, PhD)',
  `Study_institution` varchar(225) DEFAULT NULL COMMENT 'NULL if Current_academic_level = ''High School''\r\n\r\ndropdown (refer to Backend Tables for list)',
  `Continue_studies` tinyint(1) DEFAULT NULL COMMENT 'NULL if Current_academic_level = ''High School''\r\n\r\n1 = Yes, 0 = No',
  `GPA` double DEFAULT NULL COMMENT 'NULL if Current_academic_level = ''High School''\r\n\r\nfloat',
  `Description_of_student` text NOT NULL COMMENT 'string',
  `Registerred_date` date NOT NULL COMMENT 'date',
  `Bursarred` tinyint(1) NOT NULL COMMENT '1 = Yes, 0 = No',
  `Current_bursaries` varchar(225) DEFAULT NULL COMMENT 'NULL if Bursarred = ''0''\r\n\r\nstring',
  `Workback` tinyint(1) NOT NULL COMMENT '1 = Yes, 0 = No',
  `Website` varchar(225) NOT NULL COMMENT 'url',
  `Last_login` date NOT NULL COMMENT 'date',
  `Number_of_reports` int(50) NOT NULL COMMENT 'float',
  `Banned` tinyint(1) NOT NULL COMMENT '1 = Yes, 0 = No'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`ID`, `Student_ID`, `First_name`, `Last_name`, `Date_of_birth`, `Email_address`, `password`, `Validated`, `Nationality`, `Contact_number`, `City`, `Province`, `Disability`, `Current_academic_level`, `Grade`, `Syllabus`, `Average`, `Currently_studying`, `Year_of_study`, `Study_institution`, `Continue_studies`, `GPA`, `Description_of_student`, `Registerred_date`, `Bursarred`, `Current_bursaries`, `Workback`, `Website`, `Last_login`, `Number_of_reports`, `Banned`) VALUES
(1, 'U001', 'Iris', 'West-Allen', '2021-08-06', 'weare@theflash.com', '$2y$10$HsplMddLzv1Q9goXhyGnieAhuKJK3TW8siBk.7Ul8oXfhCzPB.FPy', 1, 0, '+1 555 555 270', 'Central City', '', 0, 'PostGrad', NULL, NULL, 75, NULL, NULL, NULL, NULL, NULL, '', '0000-00-00', 0, NULL, 0, 'flash4fast.com', '0000-00-00', 0, 0),
(34, 'U034', 'Backstreet', 'Boys', '2021-08-05', 'tellme@why.com', '$2y$10$RslGWkaR..SmRFqfOzPCueCyD6vBPP4SRBKiIwqo6EOD02BBnpOwC', 0, 0, '0714401984', 'Pretoria', 'Western Cape', 1, 'Postgraduate', NULL, NULL, NULL, 'Heartache', '2nd Year', 'University of the Witwatersrand', 0, 85, 'I want it that way', '2021-08-11', 0, 'All', 0, 'www.google.comhttps://localhost/MathU_Fellowhsip/backend/Coding%20files/Student/student_input_test_page1.html', '0000-00-00', 0, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `filters`
--
ALTER TABLE `filters`
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
-- AUTO_INCREMENT for table `filters`
--
ALTER TABLE `filters`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `ID` int(225) NOT NULL AUTO_INCREMENT COMMENT 'auto increment', AUTO_INCREMENT=35;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
