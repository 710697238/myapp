/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : hrm

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2017-03-25 19:59:02
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for roles
-- ----------------------------
DROP TABLE IF EXISTS `roles`;
CREATE TABLE `roles` (
  `RoleID` int(11) NOT NULL,
  `RoleName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`RoleID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of roles
-- ----------------------------
INSERT INTO `roles` VALUES ('1', 'administrator');
INSERT INTO `roles` VALUES ('2', 'hr');
INSERT INTO `roles` VALUES ('3', 'depl');

-- ----------------------------
-- Table structure for userinfo
-- ----------------------------
DROP TABLE IF EXISTS `userinfo`;
CREATE TABLE `userinfo` (
  `UserID` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sex` int(255) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `dep` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `job` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `onjob` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`UserID`)
) ENGINE=InnoDB AUTO_INCREMENT=10025 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of userinfo
-- ----------------------------
INSERT INTO `userinfo` VALUES ('10001', 'Romennts', '1', '22', '董事', 'CEO', '1');
INSERT INTO `userinfo` VALUES ('10002', 'Rebecca', '2', '26', '董事', 'HRM', '-1');
INSERT INTO `userinfo` VALUES ('10003', 'Alice', '2', '30', 'CEO', 'CEO', '1');
INSERT INTO `userinfo` VALUES ('10004', 'Ben', '1', '43', 'CFO', 'CFO', '-1');
INSERT INTO `userinfo` VALUES ('10005', 'Li', '1', '22', '信息技术部', '程序员', '1');
INSERT INTO `userinfo` VALUES ('10006', '王小明', '1', '22', '财务部', '费用收支', '-1');
INSERT INTO `userinfo` VALUES ('10007', '江泽民', '1', '22', '工会办公室', '工会主席', '1');
INSERT INTO `userinfo` VALUES ('10008', '李义山', '1', '22', '后勤部', '后勤', '1');
INSERT INTO `userinfo` VALUES ('10009', '邯郸', '1', '22', '信息技术部', '程序员', '-1');
INSERT INTO `userinfo` VALUES ('10010', '余小锋', '1', '22', '信息技术部', '程序员', '1');
INSERT INTO `userinfo` VALUES ('10011', '赵一曼', '1', '22', '信息技术部', '程序员', '-1');
INSERT INTO `userinfo` VALUES ('10012', '梁皓', '1', '22', '信息技术部', '程序员', '1');
INSERT INTO `userinfo` VALUES ('10013', '张小珏', '2', '22', '信息技术部', '程序员', '1');
INSERT INTO `userinfo` VALUES ('10014', '王小明', '1', '22', '安全监察部', '监督 ', '-1');
INSERT INTO `userinfo` VALUES ('10015', '李泽', '1', '22', '信息技术部', '程序员', '1');
INSERT INTO `userinfo` VALUES ('10016', '王小明', '1', '22', '信息技术部', '程序员', '1');
INSERT INTO `userinfo` VALUES ('10017', '沪金大叔', '1', '22', '信息技术部', '程序员', '1');
INSERT INTO `userinfo` VALUES ('10018', '王小明', '1', '22', '信息技术部', '程序员', '-1');
INSERT INTO `userinfo` VALUES ('10019', 'ike', '1', '22', '宣传部', '运营', '1');
INSERT INTO `userinfo` VALUES ('10020', '王小明2', '1', '22', '信息技术部', '程序员', '1');
INSERT INTO `userinfo` VALUES ('10021', '菲姬', '1', '22', '信息技术部', '程序员', '1');
INSERT INTO `userinfo` VALUES ('10022', '王小明3', '1', '22', '信息技术部', '程序员', '1');
INSERT INTO `userinfo` VALUES ('10023', '罗斯', '2', '23', '信息技术', 'java', '-1');
INSERT INTO `userinfo` VALUES ('10024', 'Abel', '1', '22', 'IT', 'php', '1');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `UserID` int(11) NOT NULL AUTO_INCREMENT,
  `RoleID` int(11) NOT NULL,
  `Password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `UserName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`UserID`)
) ENGINE=InnoDB AUTO_INCREMENT=10004 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('10001', '1', 'b2ca678b4c936f905fb82f2733f5297f', 'Romennts');
INSERT INTO `users` VALUES ('10002', '2', 'b2ca678b4c936f905fb82f2733f5297f', 'masterCherry');
INSERT INTO `users` VALUES ('10003', '1', '698d51a19d8a121ce581499d7b701668', 'masterRe1');
