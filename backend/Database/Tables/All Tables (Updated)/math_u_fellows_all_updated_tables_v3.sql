-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 11, 2021 at 10:52 AM
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

--
-- Dumping data for table `all_users`
--

INSERT INTO `all_users` (`Id`, `User_ID`, `Email_address`) VALUES
(1, 'U001', 'weare@theflash.com'),
(2, 'S001', 'augustnoheart@godspeed.com'),
(21, 'U027', 'joyoara@gmail.com'),
(22, 'U028', 'yes@no.com');

-- --------------------------------------------------------

--
-- Table structure for table `bursaries`
--

CREATE TABLE `bursaries` (
  `Bursary_ID` int(11) NOT NULL COMMENT 'This field simply stores the entry number, for instance entry 1 will be ID:1',
  `Company_ID` int(225) NOT NULL COMMENT 'Used to reference the company table.',
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
  `company_id` int(11) NOT NULL,
  `company_name` varchar(225) NOT NULL,
  `company_logo` blob NOT NULL,
  `company_industry` varchar(225) NOT NULL,
  `company_description` text NOT NULL,
  `company_URL` text NOT NULL,
  `date_created` date NOT NULL,
  `number_of_reports` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`company_id`, `company_name`, `company_logo`, `company_industry`, `company_description`, `company_URL`, `date_created`, `number_of_reports`) VALUES
(1, 'Star Labs', '', 'Technology', 'The home of the flash', 'www.theflash.com', '2021-08-06', 0);

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
  `company_id` int(225) NOT NULL,
  `isSuperAdmin` tinyint(1) NOT NULL,
  `manageBursaries` tinyint(1) NOT NULL,
  `manageApplications` tinyint(1) NOT NULL,
  `inactive` tinyint(1) NOT NULL,
  `isVerified` tinyint(1) NOT NULL,
  `regisered_date` date NOT NULL,
  `last_login` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `sponsor_users`
--

INSERT INTO `sponsor_users` (`id`, `sponsor_id`, `first_name_of_user`, `last_name_of_user`, `email_address`, `password`, `company_id`, `isSuperAdmin`, `manageBursaries`, `manageApplications`, `inactive`, `isVerified`, `regisered_date`, `last_login`) VALUES
(1, 'S001', 'August', 'Heart', 'augustnoheart@godspeed.com', '$2y$10$LKor.xi5QFlpJ2.EtkwCl.qI6nu1pkhG43FDJ84zFC/ZV3/DG6uQC', 1, 1, 1, 1, 1, 1, '2021-08-06', '2021-08-06');

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
  `password` varchar(225) NOT NULL,
  `Validated` tinyint(1) NOT NULL,
  `Nationality` tinyint(1) NOT NULL,
  `Contact_number` text NOT NULL,
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
  `Current_bursaries` varchar(225) DEFAULT NULL,
  `Workback` tinyint(1) NOT NULL,
  `Filters` text NOT NULL,
  `Website` varchar(225) NOT NULL,
  `Last_login` date NOT NULL,
  `Number_of_reports` int(50) NOT NULL,
  `Banned` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`ID`, `Student_ID`, `First_name`, `Last_name`, `Date_of_birth`, `Email_address`, `password`, `Validated`, `Nationality`, `Contact_number`, `City`, `Province`, `Disability`, `Current_academic_level`, `Grade`, `Syllabus`, `Average`, `Currently_studying`, `Year_of_study`, `Study_institution`, `Continue_studies`, `GPA`, `Description_of_student`, `Registerred_date`, `Bursarred`, `Current_bursaries`, `Workback`, `Filters`, `Website`, `Last_login`, `Number_of_reports`, `Banned`) VALUES
(1, 'U001', 'Iris', 'West-Allen', '2021-08-06', 'weare@theflash.com', '$2y$10$HsplMddLzv1Q9goXhyGnieAhuKJK3TW8siBk.7Ul8oXfhCzPB.FPy', 1, 0, '+1 555 555 270', 'Central City', '', 0, 'PostGrad', NULL, NULL, 75, NULL, NULL, NULL, NULL, NULL, '', '0000-00-00', 0, NULL, 0, '', 'flash4fast.com', '0000-00-00', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `student_bursaries`
--

CREATE TABLE `student_bursaries` (
  `ID` int(11) NOT NULL,
  `Bursary_ID` int(11) NOT NULL COMMENT 'Connected to Bursary Table',
  `Student_ID` int(225) NOT NULL COMMENT 'Connected to students Table ',
  `Application_Date` date NOT NULL,
  `ShortListed` tinyint(1) NOT NULL COMMENT 'If student has made the shortlist or not ',
  `Status` varchar(225) NOT NULL DEFAULT 'Pending ' COMMENT 'Radio group: Pending, Accepted, Denied'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `subjects`
--

CREATE TABLE `subjects` (
  `SubjectID` int(11) NOT NULL,
  `Subject_Name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `subjects_marks`
--

CREATE TABLE `subjects_marks` (
  `ID` int(11) NOT NULL,
  `Student_ID` int(225) NOT NULL,
  `Subject_name` varchar(225) NOT NULL,
  `Mark` double NOT NULL
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
  ADD PRIMARY KEY (`Bursary_ID`),
  ADD KEY `FKcompany` (`Company_ID`);

--
-- Indexes for table `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`company_id`);

--
-- Indexes for table `sponsor_users`
--
ALTER TABLE `sponsor_users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Constraint` (`company_id`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `student_bursaries`
--
ALTER TABLE `student_bursaries`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `FKbursary` (`Bursary_ID`),
  ADD KEY `FKstudent` (`Student_ID`);

--
-- Indexes for table `subjects`
--
ALTER TABLE `subjects`
  ADD PRIMARY KEY (`SubjectID`);

--
-- Indexes for table `subjects_marks`
--
ALTER TABLE `subjects_marks`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `all_users`
--
ALTER TABLE `all_users`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `bursaries`
--
ALTER TABLE `bursaries`
  MODIFY `Bursary_ID` int(11) NOT NULL AUTO_INCREMENT COMMENT 'This field simply stores the entry number, for instance entry 1 will be ID:1';

--
-- AUTO_INCREMENT for table `company`
--
ALTER TABLE `company`
  MODIFY `company_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `sponsor_users`
--
ALTER TABLE `sponsor_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `ID` int(225) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `student_bursaries`
--
ALTER TABLE `student_bursaries`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `subjects`
--
ALTER TABLE `subjects`
  MODIFY `SubjectID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `subjects_marks`
--
ALTER TABLE `subjects_marks`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bursaries`
--
ALTER TABLE `bursaries`
  ADD CONSTRAINT `FKcompany` FOREIGN KEY (`Company_ID`) REFERENCES `company` (`company_id`);

--
-- Constraints for table `sponsor_users`
--
ALTER TABLE `sponsor_users`
  ADD CONSTRAINT `Constraint` FOREIGN KEY (`company_id`) REFERENCES `company` (`company_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `student_bursaries`
--
ALTER TABLE `student_bursaries`
  ADD CONSTRAINT `FKbursary` FOREIGN KEY (`Bursary_ID`) REFERENCES `bursaries` (`Bursary_ID`),
  ADD CONSTRAINT `FKstudent` FOREIGN KEY (`Student_ID`) REFERENCES `student` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
