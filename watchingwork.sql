/*
Navicat MySQL Data Transfer

Source Server         : Houn
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : watchingwork

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2016-09-09 10:00:09
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for guestbook
-- ----------------------------
DROP TABLE IF EXISTS `guestbook`;
CREATE TABLE `guestbook` (
  `guestId` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) DEFAULT NULL,
  `guestTime` datetime DEFAULT NULL,
  `guestTitle` varchar(255) DEFAULT NULL,
  `guestContent` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`guestId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for invite
-- ----------------------------
DROP TABLE IF EXISTS `invite`;
CREATE TABLE `invite` (
  `inviteId` int(11) NOT NULL AUTO_INCREMENT,
  `inviteCode` varchar(32) DEFAULT NULL,
  `inviteSta` int(11) DEFAULT '0',
  PRIMARY KEY (`inviteId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for mytask
-- ----------------------------
DROP TABLE IF EXISTS `mytask`;
CREATE TABLE `mytask` (
  `taskId` int(11) NOT NULL AUTO_INCREMENT,
  `taskTitle` varchar(255) DEFAULT NULL,
  `taskDes` varchar(255) DEFAULT NULL,
  `taskKind` varchar(20) DEFAULT NULL,
  `taskAddTime` datetime DEFAULT NULL,
  `taskStartTime` datetime DEFAULT NULL,
  `taskEndTime` datetime DEFAULT NULL,
  `whetherIndex` int(1) NOT NULL DEFAULT '0',
  `whetherDone` int(1) DEFAULT '0',
  `taskProgress` int(10) DEFAULT '0',
  PRIMARY KEY (`taskId`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for mytaskmore
-- ----------------------------
DROP TABLE IF EXISTS `mytaskmore`;
CREATE TABLE `mytaskmore` (
  `taskMoreId` int(11) NOT NULL AUTO_INCREMENT,
  `taskId` int(11) DEFAULT NULL,
  `taskCommitTime` datetime DEFAULT NULL,
  `taskContent` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`taskMoreId`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `userId` int(11) NOT NULL AUTO_INCREMENT,
  `userName` varchar(50) NOT NULL,
  `userPassword` varchar(50) NOT NULL,
  `inviteCode` varchar(32) NOT NULL,
  `userImg` varchar(255) NOT NULL,
  `userPhone` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`userId`,`userName`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;
