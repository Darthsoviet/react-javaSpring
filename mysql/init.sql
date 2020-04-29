CREATE SCHEMA IF NOT EXISTS test; 
USE test;
CREATE TABLE IF NOT EXISTS item (
  `id_item` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `nombre` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `descripcion` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `precio` double NOT NULL,
  `cantidad` int NOT NULL,
  PRIMARY KEY (`id_item`),
  UNIQUE KEY `id_item_UNIQUE` (`id_item`),
  UNIQUE KEY `nombre_UNIQUE` (`nombre`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;