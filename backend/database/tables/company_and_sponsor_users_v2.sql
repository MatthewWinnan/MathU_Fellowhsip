-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 05, 2021 at 02:57 PM
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
-- Table structure for table `company`
--

CREATE TABLE `company` (
  `id` int(11) NOT NULL,
  `company_id` varchar(225) NOT NULL,
  `company_name` varchar(225) NOT NULL,
  `company_logo` blob NOT NULL,
  `company_industry` varchar(225) NOT NULL,
  `company_description` text NOT NULL,
  `company_URL` varchar(225) NOT NULL,
  `date_created` date NOT NULL,
  `number_of_reports` int(11) NOT NULL
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
-- Indexes for dumped tables
--

--
-- Indexes for table `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sponsor_users`
--
ALTER TABLE `sponsor_users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `company_id` (`company_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `company`
--
ALTER TABLE `company`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sponsor_users`
--
ALTER TABLE `sponsor_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
