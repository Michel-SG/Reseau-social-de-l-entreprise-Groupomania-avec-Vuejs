SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";
SET NAMES utf8;


-- create database of the project 
CREATE DATABASE IF NOT EXISTS `GROUPOMANIADATABASES`;
USE `GROUPOMANIADATABASES`;

-- create different tables in the database


-- here we define the fonction table
CREATE TABLE `user_function` (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `metier` varchar(30) NOT NULL,
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
(1, 'Franck', 'franck@groupomania.fr', '$2a$10$IwbFvoD5nC5v.jvbE0torOceCPQycJzBRaU/ygieSnshWwxmviF66', 4, 'Chargé.e de communication', 1);


-- we can fill the wall table 
INSERT INTO `wall` (`id`, `userId`, `userPseudo`, `title`, `content`, `urlImage`, `admin`) VALUES
(1, 1, 'Franck', 'premier post sur le forum de Groupomania ', 'Bienvenue dans le wall de Groupomania !', 'data:image/png;base64,
iVBORw0KGgoAAAANSUhEUgAAAPoAAAD6CAYAAACI7Fo9AAAABGdBTUEAALGPC/
xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAhGVY
SWZNTQAqAAAACAAFARIAAwAAAAEAAQAAARoABQAAAAEAAABKARsABQAAAAEAAABSASgAAwAAA
AEAAgAAh2kABAAAAAEAAABaAAAAAAAAAEgAAAABAAAASAAAAAEAA6ABAAMAAAABAAEAAKAC
AAQAAAABAAAA+qADAAQAAAABAAAA+gAAAABeToAwAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC
aGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpu
czptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZ
GY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgIC
A8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJ
odHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZXhpZj0i
aHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdG
lvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pd
D4yPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAgICA8ZXhpZjpDb2xvclNwYWNlPjE8
L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjkwMDw
vZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj
45MDA8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KI
CAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4K551lEgAAQABJREFUeAHtfQmcFMX1/2uQGzxQ
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', 1);