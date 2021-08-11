-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 11, 2021 at 01:38 PM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 7.4.22

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

--
-- Indexes for dumped tables
--

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
-- AUTO_INCREMENT for dumped tables
--

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
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
