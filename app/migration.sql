DROP DATABASE IF EXISTS autoplacement;
CREATE DATABASE autoplacement CHARACTER SET utf8 COLLATE utf8_general_ci;

USE autoplacement;

DROP TABLE IF EXISTS `student`;
CREATE TABLE `student` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(150) NOT NULL,
  `lastname` varchar(150) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `student` (`id`, `firstname`, `lastname`) VALUES
(1,	'Loïc',	'Neyron'),
(2,	'Morgan',	'Vallicelli');
