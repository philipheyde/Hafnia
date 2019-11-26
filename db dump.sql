-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: eu-cdbr-west-02.cleardb.net    Database: heroku_e61eacb6b3466f3
-- ------------------------------------------------------
-- Server version	5.6.45-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `divisions`
--

DROP TABLE IF EXISTS `divisions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `divisions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `season_id` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `divisions`
--

LOCK TABLES `divisions` WRITE;
/*!40000 ALTER TABLE `divisions` DISABLE KEYS */;
INSERT INTO `divisions` VALUES (1,'Division 1',1),(11,'Division 2',1),(21,'Division 3',1),(31,'Division 4',1);
/*!40000 ALTER TABLE `divisions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `games`
--

DROP TABLE IF EXISTS `games`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `games` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `season_id` int(11) DEFAULT NULL,
  `home_team_id` int(11) DEFAULT NULL,
  `away_team_id` int(11) DEFAULT NULL,
  `home_team_score` int(11) DEFAULT NULL,
  `away_team_score` int(11) DEFAULT NULL,
  `fans` int(11) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `home_team_cas_bh` int(11) DEFAULT NULL,
  `away_team_cas_bh` int(11) DEFAULT NULL,
  `home_team_cas_si` int(11) DEFAULT NULL,
  `away_team_cas_si` int(11) DEFAULT NULL,
  `home_team_cas_kills` int(11) DEFAULT NULL,
  `away_team_cas_kills` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `season_id` (`season_id`),
  KEY `home_team_id` (`home_team_id`),
  KEY `away_team_id` (`away_team_id`),
  CONSTRAINT `games_ibfk_1` FOREIGN KEY (`season_id`) REFERENCES `seasons` (`id`),
  CONSTRAINT `games_ibfk_2` FOREIGN KEY (`home_team_id`) REFERENCES `teams` (`id`),
  CONSTRAINT `games_ibfk_3` FOREIGN KEY (`away_team_id`) REFERENCES `teams` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `games`
--

LOCK TABLES `games` WRITE;
/*!40000 ALTER TABLE `games` DISABLE KEYS */;
/*!40000 ALTER TABLE `games` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `races`
--

DROP TABLE IF EXISTS `races`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `races` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=201 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `races`
--

LOCK TABLES `races` WRITE;
/*!40000 ALTER TABLE `races` DISABLE KEYS */;
INSERT INTO `races` VALUES (1,'Amazon'),(11,'Chaos Dwarf'),(21,'Chaos Renegades'),(31,'Chaos Chosen'),(41,'Dark Elf'),(51,'Dwarf'),(61,'Elven Union'),(71,'Goblin'),(81,'Halfling'),(91,'High Elf'),(101,'Human'),(111,'Khemri'),(121,'Lizardmen'),(131,'Necromantic'),(141,'Norse'),(151,'Nurgle'),(161,'Ogre'),(171,'Orc'),(181,'Skaven'),(191,'Undead');
/*!40000 ALTER TABLE `races` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `seasons`
--

DROP TABLE IF EXISTS `seasons`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `seasons` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seasons`
--

LOCK TABLES `seasons` WRITE;
/*!40000 ALTER TABLE `seasons` DISABLE KEYS */;
INSERT INTO `seasons` VALUES (1,'Season 6');
/*!40000 ALTER TABLE `seasons` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teams`
--

DROP TABLE IF EXISTS `teams`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teams` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `race_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `race_id` (`race_id`),
  CONSTRAINT `teams_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `teams_ibfk_2` FOREIGN KEY (`race_id`) REFERENCES `races` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teams`
--

LOCK TABLES `teams` WRITE;
/*!40000 ALTER TABLE `teams` DISABLE KEYS */;
INSERT INTO `teams` VALUES (1,'The Black Plague',1,181),(11,'Darkland Demolitioners',11,11),(21,'Frantic Ferrets',21,61),(31,'Gnavne Gnallinger',31,11),(41,'Zuvassin Zealots',41,21),(51,'Vermintown Ratskins',51,181);
/*!40000 ALTER TABLE `teams` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teams_in_divisions`
--

DROP TABLE IF EXISTS `teams_in_divisions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teams_in_divisions` (
  `season_id` int(11) DEFAULT NULL,
  `team_id` int(11) DEFAULT NULL,
  `division_id` int(11) DEFAULT NULL,
  KEY `season_id` (`season_id`),
  KEY `team_id` (`team_id`),
  KEY `division_id` (`division_id`),
  CONSTRAINT `teams_in_divisions_ibfk_1` FOREIGN KEY (`season_id`) REFERENCES `seasons` (`id`),
  CONSTRAINT `teams_in_divisions_ibfk_2` FOREIGN KEY (`team_id`) REFERENCES `teams` (`id`),
  CONSTRAINT `teams_in_divisions_ibfk_3` FOREIGN KEY (`division_id`) REFERENCES `divisions` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teams_in_divisions`
--

LOCK TABLES `teams_in_divisions` WRITE;
/*!40000 ALTER TABLE `teams_in_divisions` DISABLE KEYS */;
/*!40000 ALTER TABLE `teams_in_divisions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teamsindivisions`
--

DROP TABLE IF EXISTS `teamsindivisions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teamsindivisions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `season_id` int(11) NOT NULL,
  `team_id` int(11) NOT NULL,
  `division_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teamsindivisions`
--

LOCK TABLES `teamsindivisions` WRITE;
/*!40000 ALTER TABLE `teamsindivisions` DISABLE KEYS */;
/*!40000 ALTER TABLE `teamsindivisions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'krolben','$2a$08$roba.U95xvq9hAM/jCWR4O1j/UJMn4xFVZiGRf.rkX1DFixTguMO.','heyde.philip@gmail.com'),(11,'Mads_Rasmussen','$2a$08$9tPVUa4jwix2Lv8G125dueLoLo9XC5TPfXE3zw7TFuSkM9MsyuWFa','madsrasmussenn85@gmail.com'),(21,'ElHeffe','$2a$08$cT9zqrAyR4ExdVOnXPMqA.0rxZlptyXEUzi1BRS6QUx0g4ZogvlVW','bastiansk1@gmail.com'),(31,'Sumpemanden','$2a$08$mAamNlLMcR468Jlyec0hxuaYf8gelW2P4iRXaSmuHLE63gdZzYBLS','alex.holck@gmail.com'),(41,'Nuffle','$2a$08$.R1FSrIGq/aN9LDIQfIMjusYCF8eJsE9FrKFXtFnjNt2ZH0R7x5Zq','machurto@gmail.com'),(51,'Kasper Engmann','$2a$08$t2Lscr7d6X2xC5G9EAzj8uzNPxiL5wbzRi9lyzx5ADp/8iuXs6oA6','kasparclopin@gmail.com');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-11-26 23:55:51
