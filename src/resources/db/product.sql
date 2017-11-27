DROP TABLE IF EXISTS `product`;

CREATE TABLE `product` (

  `id`                                          int(12) unsigned NOT NULL AUTO_INCREMENT,
  `user_id`                                     int NOT NULL,
  `name`                                    		varchar(100) NOT NULL,
  `description`                                 varchar(255) DEFAULT NULL,
  `price` 																		  int NOT NULL,
  `product_sku` 																varchar(100) NOT NULL,
  `product_url` 																varchar(100) NOT NULL,
  `status`                                   		tinyint(1) DEFAULT 1,
  `created_at`        				                  timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at`        				                  timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`user_id`) REFERENCES users(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
