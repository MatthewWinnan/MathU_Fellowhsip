-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 16, 2021 at 05:17 PM
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
(26, 'U034', 'tellme@why.com'),
(28, 'U036', 'barry@allen.com'),
(29, 'U037', 'reverse@flash.com'),
(31, 'S005', 'killer@frost.com'),
(38, 'U045', 'godspeed@villian.com'),
(47, 'U054', 'queen@elsa.com'),
(56, 'U063', 'dunder@mifflin.com'),
(57, 'S006', 'pam@jim.com'),
(58, 'S007', 'pam@office.com'),
(59, 'S008', 'pam@dunder.com'),
(60, 'S009', 'pam@me.com'),
(66, 'S015', 'michael@scoott.com'),
(67, 'U064', 'jim@dunder.com'),
(68, 'U065', 'vibe@flash.com');

-- --------------------------------------------------------

--
-- Table structure for table `bursaries`
--

CREATE TABLE `bursaries` (
  `Bursary_ID` int(11) NOT NULL COMMENT 'This field simply stores the entry number, for instance entry 1 will be ID:1',
  `Company_ID` int(225) NOT NULL COMMENT 'Used to reference the company table.',
  `Bursary_Name` varchar(225) NOT NULL COMMENT 'Name of Bursary',
  `Date_Created` date NOT NULL COMMENT 'Automatic',
  `Bursary_Type` varchar(225) NOT NULL COMMENT 'Dropdown List(Bursary, WorkBack, full, Partial)',
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
  `Email_Address` varchar(225) NOT NULL COMMENT 'The email address to contact for more information',
  `Shortlist_Date` date NOT NULL COMMENT 'Date for further communication',
  `isVisible` tinyint(1) NOT NULL COMMENT 'Can the Bursary be seen or not',
  `Description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `bursary_covers`
--

CREATE TABLE `bursary_covers` (
  `id` int(11) NOT NULL,
  `Bursary_ID` int(11) NOT NULL COMMENT 'Linked to Bursary',
  `Bursary Covers` varchar(225) NOT NULL
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
(1, 'Star Labs', '', 'Technology', 'The home of the flash', 'www.theflash.com', '2021-08-06', 0),
(6, 'Dev Labs', '', 'Engineering', '', '', '2021-08-12', 0),
(7, 'Dunder Mifflin', '', 'Engineering', '', '', '2021-08-13', 0),
(8, 'Dunder Mifflin', '', 'Engineering', '', '', '2021-08-13', 0),
(9, 'Dunder Mifflin', '', 'Engineering', '', '', '2021-08-13', 0),
(10, 'Dunder Mifflin', '', 'Engineering', '', '', '2021-08-13', 0),
(11, 'Dunder Mifflin', '', 'Engineering', '', '', '2021-08-13', 0),
(12, 'Dunder Mifflin', '', 'Engineering', '', '', '2021-08-13', 0),
(13, 'Dunder Mifflin', '', 'Engineering', '', '', '2021-08-13', 0),
(14, 'Dunder Mifflin', '', 'Engineering', '', '', '2021-08-13', 0),
(15, 'Dunder Mifflin', '', 'Engineering', '', '', '2021-08-13', 0),
(16, 'Dunder Mifflin', '', 'Engineering', '', '', '2021-08-13', 0);

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
(1, 'S001', 'August', 'Heart', 'augustnoheart@godspeed.com', '$2y$10$LKor.xi5QFlpJ2.EtkwCl.qI6nu1pkhG43FDJ84zFC/ZV3/DG6uQC', 1, 1, 1, 1, 1, 1, '2021-08-06', '2021-08-12'),
(5, 'S005', 'Caitlin', 'Snow', 'killer@frost.com', '$2y$10$CDQcC/BK89R7kd8CvLrwWuR.WizOlM3EjcBo2Rdu/T8XRmeKc2Hd2', 6, 1, 1, 1, 0, 0, '2021-08-12', '0000-00-00'),
(6, 'S006', 'Pam', 'Halpert', 'pam@jim.com', '$2y$10$h3.JJMKIaYZZO1BOjlyCfO5c2frvbZyjm6E1U26/Jcco.RlMa5SOO', 7, 1, 1, 1, 0, 0, '2021-08-13', '0000-00-00'),
(7, 'S007', 'Pam', 'Halpert', 'pam@office.com', '$2y$10$.aZir0BiiDekf7Xc.4KdUukw1rNaKII1cgR.ca9OzyepmQNryTB4O', 8, 1, 1, 1, 0, 0, '2021-08-13', '0000-00-00'),
(8, 'S008', 'Pam', 'Halpert', 'pam@dunder.com', '$2y$10$Zk7UiTjg9QYtufv659L/guJiiMd2BVQRg6V3pZO2/MkR0bLtEX2De', 9, 1, 1, 1, 0, 0, '2021-08-13', '0000-00-00'),
(9, 'S009', 'Pam', 'Halpert', 'pam@me.com', '$2y$10$TmkwldJjwuRPbQKki6FFFu3TW3/ZzHc4pZnv.hhFtrXBU5fCmy/kW', 10, 1, 1, 1, 0, 0, '2021-08-13', '0000-00-00'),
(15, 'S015', 'Michael', 'Scott', 'michael@scoott.com', '$2y$10$hZF62uPj75mVoxgF2rfa1.jPou7bv0uGtRzjAvU6doYOEwBQ0dl7y', 16, 1, 1, 1, 0, 0, '2021-08-13', '0000-00-00');

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `ID` int(225) NOT NULL COMMENT 'auto increment',
  `Student_ID` varchar(225) NOT NULL COMMENT 'string\r\nfrom all_users table',
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
  `Grade` varchar(225) DEFAULT NULL COMMENT 'NULL if Current_academic_level = ''Undergraduate'' or ''Postgraduate''\r\n\r\ndropdown (10, 11, 12, A Level, AS Level)',
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
(34, 'U034', 'Backstreet', 'Boys', '2021-08-05', 'tellme@why.com', '$2y$10$RslGWkaR..SmRFqfOzPCueCyD6vBPP4SRBKiIwqo6EOD02BBnpOwC', 1, 0, '0714401984', 'Pretoria', 'Western Cape', 1, 'Postgraduate', NULL, NULL, NULL, 'Heartache', '2nd Year', 'University of the Witwatersrand', 0, 85, 'I want it that way', '2021-08-11', 0, 'All', 0, 'www.google.comhttps://localhost/MathU_Fellowhsip/backend/Coding%20files/Student/student_input_test_page1.html', '0000-00-00', 0, 0),
(36, 'U036', 'Barry', 'Allen', '2021-07-29', 'barry@allen.com', '$2y$10$iLYn4nAoFsx/kE3zem.wkeDynQxcQyYR5tFn50s.0Uje5/tQxFc/2', 1, 0, '+155 65847 123', 'Central City', 'Western Cape', 0, '', NULL, NULL, NULL, 'Chemical Engineering', 'Masters', '', 1, 95, 'My name is Barry Allen and Im the fastest man alive', '2021-08-12', 0, NULL, 1, '', '0000-00-00', 0, 0),
(37, 'U037', 'Harrison', 'Wells', '2021-07-26', 'reverse@flash.com', '$2y$10$YtvBEZUN6eicPI3HWLkLqeFtWVBzVqNGD0pWLuZE7dBY4OILC.zk6', 1, 0, '+155 65847 123', 'Central City', 'Gauteng', 0, '', '0', 'IEB', 78.42857142857143, NULL, NULL, NULL, NULL, NULL, 'I want to kill the flash', '2021-08-12', 0, NULL, 1, '', '0000-00-00', 0, 0),
(45, 'U045', 'August', 'Heart', '2021-07-27', 'godspeed@villian.com', '$2y$10$XgzqL5L5WXLnrEsp1SDxjOKdjsDLvUirxgoYHnA/lgaDG6b2QEgke', 1, 0, '+155 65847 123', 'Central City', 'Free State', 1, '', '0', 'Cambridge', 0, NULL, NULL, NULL, NULL, NULL, 'I am godspeed', '2021-08-12', 0, NULL, 1, '', '0000-00-00', 0, 0),
(54, 'U054', 'Elsa', 'Martin', '2021-07-28', 'queen@elsa.com', '$2y$10$JXDepIzyki1Byc6vU54jm.mKaaRCvrhW5yC7GV9rNcRDmrjTgFF22', 1, 0, '+155 65847 123', 'Pretoria', 'Free State', 0, 'High School', 'A Level', 'Cambridge', 84.86, NULL, NULL, NULL, NULL, NULL, 'i am the fifth spirit', '2021-08-12', 0, NULL, 1, '', '2021-08-12', 0, 0),
(63, 'U063', 'Michael ', 'Scott', '2021-07-28', 'dunder@mifflin.com', '$2y$10$SZGbEKKNizDEyTt0AiIkQ.He7nvkhOMToxOuKS/VfaTDAUW1bL1sK', 1, 0, '+225 426 789', 'Scranton', 'Eastern Cape', 0, 'Postgraduate', NULL, NULL, NULL, 'Paper', 'Honours', '', 1, 85, 'Best boss ever', '2021-08-12', 0, NULL, 1, '', '2021-08-12', 0, 0),
(64, 'U064', 'Jim', 'Halpert', '1999-10-13', 'jim@dunder.com', '$2y$10$b8xPvfCzN2ZqzOrALbtLTO9vNSkjJC2F88zIms7axJ6ADEfwlmrTu', 1, 0, '+225 426 789', 'Scranton', 'Western Cape', 0, 'Postgraduate', NULL, NULL, NULL, 'Chemical Engineering', 'Honours', '', 1, 85, 'My name is Jim and I sell paper', '2021-08-13', 0, NULL, 1, '', '0000-00-00', 0, 0),
(65, 'U065', 'Cisco', 'Ramone', '2003-06-13', 'vibe@flash.com', '$2y$10$Y.iSZ98zYpra.TznO/q4HuoWkPV375spmuTlX3Z2vTUNSB/Q4bbda', 1, 0, '+225 426 789', 'Central City', 'Western Cape', 1, 'High School', 'AS Level', 'Cambridge', 91, NULL, NULL, NULL, NULL, NULL, 'feeling vibey asf', '2021-08-13', 0, NULL, 1, '', '0000-00-00', 0, 0);

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
-- Table structure for table `subjects_marks`
--

CREATE TABLE `subjects_marks` (
  `ID` int(11) NOT NULL,
  `Student_ID` int(225) NOT NULL,
  `Subject_name` varchar(225) NOT NULL,
  `Mark` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `subjects_marks`
--

INSERT INTO `subjects_marks` (`ID`, `Student_ID`, `Subject_name`, `Mark`) VALUES
(1, 1, 'Maths', 82),
(2, 1, 'Physics', 82),
(3, 1, 'IT', 92),
(4, 1, 'Geography', 78),
(5, 2, 'History', 76),
(6, 3, 'Afrikaans', 82),
(261, 54, 'Afrikaans Second Additional Language', 84),
(262, 54, 'Afrikaans First Additional Language', 89),
(263, 54, 'Advanced Programme Physics', 78),
(264, 54, 'Arabic Second Additional Language', 85),
(265, 54, 'Agricultural Science', 89),
(266, 54, 'Agricultural Management Practice', 87),
(267, 54, 'Engineering Graphics and Design', 82),
(268, 65, 'Advanced Programme Mathematics', 82),
(269, 65, 'Advanced Programme Physics', 92),
(270, 65, 'Engineering Graphics and Design', 80),
(271, 65, 'Mathematics', 99),
(272, 65, 'Physical Sciences', 93),
(273, 65, 'English Home Language', 95),
(274, 65, 'Mandarin Second Additional Language', 96);

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
-- Indexes for table `bursary_covers`
--
ALTER TABLE `bursary_covers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Bursary` (`Bursary_ID`);

--
-- Indexes for table `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`company_id`);

--
-- Indexes for table `filters`
--
ALTER TABLE `filters`
  ADD PRIMARY KEY (`ID`);

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
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;

--
-- AUTO_INCREMENT for table `bursaries`
--
ALTER TABLE `bursaries`
  MODIFY `Bursary_ID` int(11) NOT NULL AUTO_INCREMENT COMMENT 'This field simply stores the entry number, for instance entry 1 will be ID:1';

--
-- AUTO_INCREMENT for table `bursary_covers`
--
ALTER TABLE `bursary_covers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `company`
--
ALTER TABLE `company`
  MODIFY `company_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `filters`
--
ALTER TABLE `filters`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sponsor_users`
--
ALTER TABLE `sponsor_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `ID` int(225) NOT NULL AUTO_INCREMENT COMMENT 'auto increment', AUTO_INCREMENT=66;

--
-- AUTO_INCREMENT for table `student_bursaries`
--
ALTER TABLE `student_bursaries`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `subjects_marks`
--
ALTER TABLE `subjects_marks`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=275;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bursaries`
--
ALTER TABLE `bursaries`
  ADD CONSTRAINT `FKcompany` FOREIGN KEY (`Company_ID`) REFERENCES `company` (`company_id`);

--
-- Constraints for table `bursary_covers`
--
ALTER TABLE `bursary_covers`
  ADD CONSTRAINT `Bursary` FOREIGN KEY (`Bursary_ID`) REFERENCES `bursaries` (`Bursary_ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `sponsor_users`
--
ALTER TABLE `sponsor_users`
  ADD CONSTRAINT `Constraint` FOREIGN KEY (`company_id`) REFERENCES `company` (`company_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `student_bursaries`
--
ALTER TABLE `student_bursaries`
  ADD CONSTRAINT `FKstudent` FOREIGN KEY (`Student_ID`) REFERENCES `student` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
