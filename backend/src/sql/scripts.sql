CREATE TABLE `jwt`.`usuario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(100) NULL,
  `password` VARCHAR(30) NULL,
  `nombre` VARCHAR(100) NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `jwt`.`contacto` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NULL,
  `telefono` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));

