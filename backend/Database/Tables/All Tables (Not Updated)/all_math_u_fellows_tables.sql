-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 06, 2021 at 11:12 AM
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
-- Table structure for table `all_users`
--

CREATE TABLE `all_users` (
  `Id` int(11) NOT NULL,
  `User_ID` varchar(225) NOT NULL,
  `Email_address` varchar(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `bursaries`
--

CREATE TABLE `bursaries` (
  `ID` int(11) NOT NULL COMMENT 'This field simply stores the entry number, for instance entry 1 will be ID:1',
  `Bursary_ID` varchar(225) NOT NULL COMMENT 'Used to identify a particular bursary (*)',
  `Company_ID` varchar(225) NOT NULL COMMENT 'Used to reference the company table.',
  `Bursary_Name` varchar(225) NOT NULL COMMENT 'Name of Bursary',
  `Date_Created` date NOT NULL COMMENT 'Automatic',
  `Bursary_Type` varchar(225) NOT NULL COMMENT 'Dropdown List(WorkBack, full, Partial)',
  `WB_Duration` varchar(11) NOT NULL COMMENT 'Workback duration, only needed if it is a workback bursary',
  `Closing_Date` date NOT NULL COMMENT 'Last day for applications',
  `Minimum_Age` int(11) NOT NULL COMMENT 'Min Age',
  `Maximum_Age` int(11) NOT NULL COMMENT 'Max Age',
  `Academic_Level` varchar(225) NOT NULL COMMENT 'Dropdown of academic level',
  `Study_field` varchar(225) NOT NULL COMMENT 'Dropdown',
  `Current_Year` int(11) NOT NULL COMMENT 'Dropdown for university students to specify the academic year',
  `Bursary_Duration` int(11) NOT NULL COMMENT 'How long will the bursary last',
  `Minimum_Average` float NOT NULL COMMENT 'This is the minimum average required by the student',
  `RSA_Citizen` tinyint(1) NOT NULL COMMENT 'SA Citizen or not',
  `Financial_Need` tinyint(1) NOT NULL COMMENT 'Is the student in dire financial need',
  `Study_Further` tinyint(1) NOT NULL COMMENT 'Does the student intend to study further',
  `Disability` tinyint(1) NOT NULL COMMENT 'Does the student have any form of disability',
  `Province` text NOT NULL COMMENT 'Dropdown of South African Provinces',
  `Bursary_Covers` varchar(225) NOT NULL COMMENT 'Dropdown list',
  `Email_Address` varchar(225) NOT NULL COMMENT 'The email address to contact for more information',
  `Shortlist_Date` date NOT NULL COMMENT 'Date for further communication',
  `isVisible` tinyint(1) NOT NULL COMMENT 'Can the Bursary be seen or not'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `company`
--

CREATE TABLE `company` (
  `id` int(11) NOT NULL,
  `company_id` varchar(225) NOT NULL,
  `company_name` varchar(225) NOT NULL,
  `company_logo` blob NOT NULL,
  `company_industry` varchar(225) NOT NULL,
  `company_description` text NOT NULL,
  `company_URL` text NOT NULL,
  `date_created` date NOT NULL,
  `number_of_reports` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
-- Table structure for table `sponsor_users`
--

CREATE TABLE `sponsor_users` (
  `id` int(11) NOT NULL,
  `sponsor_id` varchar(225) NOT NULL,
  `first_name_of_user` varchar(225) NOT NULL,
  `last_name_of_user` varchar(225) NOT NULL,
  `email_address` varchar(225) NOT NULL,
  `password` varchar(225) NOT NULL,
  `company_id` varchar(225) NOT NULL,
  `isSuperAdmin` tinyint(1) NOT NULL,
  `manageBursaries` tinyint(1) NOT NULL,
  `manageApplications` tinyint(1) NOT NULL,
  `inactive` tinyint(1) NOT NULL,
  `isVerified` tinyint(1) NOT NULL,
  `regisered_date` date NOT NULL,
  `last_login` date NOT NULL
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
  `Grade` double DEFAULT NULL,
  `Syllabus` varchar(225) DEFAULT NULL,
  `Average` double DEFAULT NULL,
  `Currently_studying` varchar(225) DEFAULT NULL,
  `Year_of_study` varchar(225) DEFAULT NULL,
  `Study_institution` varchar(225) DEFAULT NULL,
  `Continue_studies` tinyint(1) DEFAULT NULL,
  `GPA` double DEFAULT NULL,
  `Description_of_student` text NOT NULL,
  `Registerred_date` date NOT NULL,
  `Bursarred` tinyint(1) NOT NULL,
  `Current_bursary/ies` varchar(225) DEFAULT NULL,
  `Workback` tinyint(1) NOT NULL,
  `Filters` text NOT NULL,
  `Website` varchar(225) NOT NULL,
  `Last_login` date NOT NULL,
  `Number_of_reports` int(50) NOT NULL,
  `Banned` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `students+marks`
--

CREATE TABLE `students+marks` (
  `Sub_mark` int(225) NOT NULL,
  `Student_ID` int(225) NOT NULL,
  `Subject_name` varchar(225) NOT NULL,
  `Mark` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `subjects`
--

CREATE TABLE `subjects` (
  `SubjectID` int(11) NOT NULL,
  `Subject_Name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `all_users`
--
ALTER TABLE `all_users`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `bursaries`
--
ALTER TABLE `bursaries`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Connection` (`company_id`);

--
-- Indexes for table `field/s of interest`
--
ALTER TABLE `field/s of interest`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `sponsor_users`
--
ALTER TABLE `sponsor_users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `company_id` (`company_id`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `students+marks`
--
ALTER TABLE `students+marks`
  ADD PRIMARY KEY (`Sub_mark`),
  ADD KEY `Student_ID` (`Student_ID`);

--
-- Indexes for table `subjects`
--
ALTER TABLE `subjects`
  ADD PRIMARY KEY (`SubjectID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `all_users`
--
ALTER TABLE `all_users`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `bursaries`
--
ALTER TABLE `bursaries`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT COMMENT 'This field simply stores the entry number, for instance entry 1 will be ID:1';

--
-- AUTO_INCREMENT for table `company`
--
ALTER TABLE `company`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `field/s of interest`
--
ALTER TABLE `field/s of interest`
  MODIFY `ID` int(225) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sponsor_users`
--
ALTER TABLE `sponsor_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `ID` int(225) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `students+marks`
--
ALTER TABLE `students+marks`
  MODIFY `Sub_mark` int(225) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `subjects`
--
ALTER TABLE `subjects`
  MODIFY `SubjectID` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `company`
--
ALTER TABLE `company`
  ADD CONSTRAINT `Connection` FOREIGN KEY (`company_id`) REFERENCES `sponsor_users` (`company_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `sponsor_users`
--
ALTER TABLE `sponsor_users`
  ADD CONSTRAINT `Link 2` FOREIGN KEY (`company_id`) REFERENCES `company` (`company_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `students+marks`
--
ALTER TABLE `students+marks`
  ADD CONSTRAINT `students+marks_ibfk_1` FOREIGN KEY (`Student_ID`) REFERENCES `student` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
