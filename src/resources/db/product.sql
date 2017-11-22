DROP TABLE IF EXISTS `product`;

CREATE TABLE `product` (

  `id`                                          int(12) unsigned NOT NULL AUTO_INCREMENT,
  `name`                                    		varchar(100) NOT NULL,
  `description`                                 varchar(255) DEFAULT NULL,
  `supplier_name`                               varchar(50) DEFAULT NULL,
  `status`                                   		tinyint(1) DEFAULT 1,
  `created_at`        				                  timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at`        				                  timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
