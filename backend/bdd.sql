SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


-- create database of the project 
CREATE DATABASE IF NOT EXISTS `GROUPOMANIA`;
USE `GROUPOMANIA`;

-- create different tables in the database


-- here we define the fonction table
CREATE TABLE `user_function` (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `metier` varchar(25) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- here we define the User table
CREATE TABLE `membre` (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `pseudo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `level` int(3) NOT NULL,
  `metier` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `admin` int(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- here we have the table structure for the deferent posts on the wall
CREATE TABLE `wall` (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `userPseudo` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `urlImage` text COLLATE utf8mb4_unicode_ci,
  `admin` int(2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- we can fill the fonction table 
INSERT INTO `user_function` (`id`, `metier`) VALUES
(1, 'Technicien.ne'),
(2, 'Chef.e de centre'),
(3, 'Responsable de secteur'),
(4, 'Chargé.e de communication');


-- we can fill the Membre table 
INSERT INTO `membre` (`id`, `pseudo`, `email`, `password`,
 `level`, `metier`, `admin`) VALUES
(1, 'Franck', 'francl@groupomania.fr', '$2a$10$DqjGM0eDwPSTogCdZDqdJukOCtPofhkwmTD4rcqZs5w1WNWbcL8Ji', 4, 'Chargé.e de communication', 1);


-- we can fill the wall table 
INSERT INTO `wall` (`id`, `userId`, `userPseudo`, `title`, `content`, `urlImage`, `admin`) VALUES
(1, 1, 'Franck', 'first post on the Groupomania wall ', 'Welcome to the Groupomania wall !', 'http://localhost:3000/images/initPhotoProfile.jpg', 1);