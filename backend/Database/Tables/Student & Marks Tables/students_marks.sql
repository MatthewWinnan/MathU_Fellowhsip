-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 05, 2021 at 06:10 PM
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
-- Table structure for table `students+marks`
--

CREATE TABLE `students+marks` (
  `Sub_mark` int(225) NOT NULL,
  `Student_ID` int(225) NOT NULL,
  `Subject_name` varchar(225) NOT NULL,
  `Mark` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `students+marks`
--
ALTER TABLE `students+marks`
  ADD PRIMARY KEY (`Sub_mark`),
  ADD KEY `Student_ID` (`Student_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `students+marks`
--
ALTER TABLE `students+marks`
  MODIFY `Sub_mark` int(225) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `students+marks`
--
ALTER TABLE `students+marks`
  ADD CONSTRAINT `students+marks_ibfk_1` FOREIGN KEY (`Student_ID`) REFERENCES `student` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
