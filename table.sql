DROP TABLE IF EXISTS `prod_alb_logs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `prod_alb_logs` (
  `event_id` int(11) NOT NULL AUTO_INCREMENT,
  `method` varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
  `timestamp` timestamp NULL DEFAULT NULL,
  `albIdentity` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Clinetip` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Tragetip` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `request_processing_time` decimal(10,0) DEFAULT NULL,
  `target_processing_time` decimal(10,0) DEFAULT NULL,
  `response_processing_time` decimal(10,0) DEFAULT NULL,
  `elb_status_code` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `target_status_code` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `request` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `target_group_arn` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `request_creation_time` date DEFAULT NULL,
  PRIMARY KEY (`event_id`)
) ENGINE=InnoDB AUTO_INCREMENT=213201 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
