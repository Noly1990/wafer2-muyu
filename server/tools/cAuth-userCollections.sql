
SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `userCollections`
-- ----------------------------
DROP TABLE IF EXISTS `userCollections`;

CREATE TABLE `userCollections` (
  `open_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `collections` varchar(2048) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`open_id`),
  KEY `openid` (`open_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='用户集福信息';

SET FOREIGN_KEY_CHECKS = 1;
