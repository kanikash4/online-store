DROP TABLE IF EXISTS `api_auth`;

CREATE TABLE `api_auth` (

  `id`                                          int(12) unsigned NOT NULL AUTO_INCREMENT,
  `auth_token`                                  varchar(100) DEFAULT NULL,
  `created_at`        				                  timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at`        				                  timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
