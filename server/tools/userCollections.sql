-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: 2018-02-02 08:47:47
-- 服务器版本： 5.7.18
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cAuth`
--

-- --------------------------------------------------------

--
-- 表的结构 `userCollections`
--

CREATE TABLE `userCollections` (
  `open_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `collections` varchar(2048) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='用户集福信息';

--
-- 转存表中的数据 `userCollections`
--

INSERT INTO `userCollections` (`open_id`, `collections`) VALUES
('ozuYV0SaHLbOdcf6XWeQWtITVgis', '\"{\"open_id\": \"ozuYV0SaHLbOdcf6XWeQWtITVgis\",\"count\": 5,\"collection\": [\"身体健康\",\"事业有成\",\"平平安安\",\"益寿延年\",\"鸿运当头\"]}\"');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `userCollections`
--
ALTER TABLE `userCollections`
  ADD PRIMARY KEY (`open_id`),
  ADD KEY `openid` (`open_id`) USING BTREE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
