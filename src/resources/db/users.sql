DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (

  `id`                                          int(12) unsigned NOT NULL AUTO_INCREMENT,
  `email_id`                                    varchar(80) NOT NULL,
  `username`                                    varchar(30) DEFAULT NULL,
  `password`                                    varchar(30) DEFAULT NULL,
  `api_token`                                   varchar(100) DEFAULT NULL,
  `created_at`        				                  timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at`        				                  timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

  PRIMARY KEY (`id`),
  UNIQUE KEY `uniqueItems` (`email_id`,`username`, `api_token`),
  INDEX `idx_email_id` (`email_id`)

) ENGINE=InnoDB DEFAULT CHARSET=utf8;
