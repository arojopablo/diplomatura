-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 19-04-2022 a las 01:01:34
-- Versión del servidor: 5.7.36
-- Versión de PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `redinformatica`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

DROP TABLE IF EXISTS `categorias`;
CREATE TABLE IF NOT EXISTS `categorias` (
  `id_categoria` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(250) NOT NULL,
  `descripcion` varchar(250) NOT NULL,
  PRIMARY KEY (`id_categoria`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id_categoria`, `nombre`, `descripcion`) VALUES
(1, 'informatica', 'productos de informatica'),
(2, 'celulares', 'accesorios para celulares');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

DROP TABLE IF EXISTS `clientes`;
CREATE TABLE IF NOT EXISTS `clientes` (
  `id_cliente` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(250) NOT NULL,
  `apellido` varchar(250) NOT NULL,
  `mail` varchar(250) NOT NULL,
  `direccion` varchar(250) NOT NULL,
  `telefono` varchar(30) NOT NULL,
  PRIMARY KEY (`id_cliente`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`id_cliente`, `nombre`, `apellido`, `mail`, `direccion`, `telefono`) VALUES
(1, 'Juan', 'Perez', 'jua', 'Av. España 1520', '2664444444'),
(2, 'Norma', 'Carletti', 'normacarle@hotmail.com', 'Av. Sucre 1252', '2664858585'),
(3, 'Pablo', 'Rojo', 'arojopablo@gmail.com', 'M. de Loyola 195 ', '2664372195');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` text NOT NULL,
  `cuerpo` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`) VALUES
(1, 'La inflación de marzo fue de 6,7% y es la cifra más alta en los últimos 20 años\r\n', 'En lo que va del año acumula 16,1% y en los últimos 12 meses registra un 55,1% de incremento. La cifra igualó al máximo registrado en el comienzo del gobierno de Mauricio Macri, medido por el IPC Congreso. Prevén un 5% para abril y el Gobierno busca evitar que el dato anual supere el 60 por ciento\r\n', 'La cifra dada a conocer este miércoles por el organismo estadístico ubica así a marzo entre las inflaciones mensuales más altas del siglo. La más elevada fue la de abril de 2002 (10,4%) como efecto de la crisis desatada un mes antes y el inicio de la salida de la convertibilidad que incluyó una devaluación del peso.\r\n\r\nMás atrás se registran el 6,7% de abril de 2016, de acuerdo al IPC Congreso, confeccionado por las principales consultoras económicas del país y tomado como referencia por todos los actores económicos. El Indec aún no había reestablecido la medición del IPC nacional tras el fin de la intervención del organismo durante el kirchnerismo y eligió publicar como indicadores alternativos el IPC de la Ciudad de Buenos Aires (6,5%) y de San Luis (3,4 por ciento). El IPC actual se reanudó en mayo de 2016. También se destacó el 6,5% de septiembre de 2018, luego de un fuerte episodio devaluatorio el mes anterior.\r\n\r\nEl Gobierno ya admitía para marzo una cifra por encima del 6 por ciento. El Poder Ejecutivo atribuye el salto de los precios de los últimos dos meses a la crisis en los valores internacionales de los alimentos y la energía como consecuencia de la guerra en Ucrania, y enumera otras economías desarrolladas que también experimentan sus números de inflación más altos en décadas. La Argentina, de todas formas, ya registra un problema de inflación creciente hace al menos 15 años al considerar solo este siglo.'),
(2, ' alta en los últimos 20 años\r\n', 'La cifra igualó al máximo registrado en el comienzo del gobierno de Mauricio Macri, medido por el IPC Congreso. Prevén un 5% para abril y el Gobierno busca evitar que el dato anual supere el 60 por ciento\r\n', 'organismo estadístico ubica así a marzo entre las inflaciones mensuales más altas del siglo. La más elevada fue la de abril de 2002 (10,4%) como efecto de la crisis desatada un mes antes y el inicio de la salida de la convertibilidad que incluyó una devaluación del peso.\r\n\r\nMás atrás se registran el 6,7% de abril de 2016, de acuerdo al IPC Congreso, confeccionado por las principales consultoras económicas del país y tomado como referencia por todos los actores económicos. El Indec aún no había reestablecido la medición del IPC nacional tras el fin de la intervención del organismo durante el kirchnerismo y eligió publicar como indicadores alternativos el IPC de la Ciudad de Buenos Aires (6,5%) y de San Luis (3,4 por ciento). El IPC actual se reanudó en mayo de 2016. También se destacó el 6,5% de septiembre de 2018, luego de un fuerte episodio devaluatorio el mes anterior.\r\n\r\nEl Gobierno ya admitía para marzo una cifra por encima del 6 por ciento. El Poder Ejecutivo atribuye el salto de los precios de los últimos dos meses a la crisis en los valores internacionales de los alimentos y la energía como consecuencia de la guerra en Ucrania, y enumera otras economías desarrolladas que también experimentan sus números de inflación más altos en décadas. La Argentina, de todas formas, ya registra un problema de inflación creciente hace al menos 15 años al considerar solo este siglo.'),
(3, 'SDFASDF', 'ASDF', 'ASDF'),
(4, 'dsf', 'sdf', 'sdf'),
(5, 'sdf', 'SSAAA', 'SS');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ofertas`
--

DROP TABLE IF EXISTS `ofertas`;
CREATE TABLE IF NOT EXISTS `ofertas` (
  `id_oferta` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(150) DEFAULT NULL,
  `cuerpo` varchar(250) NOT NULL,
  `tipo` varchar(30) NOT NULL,
  PRIMARY KEY (`id_oferta`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `ofertas`
--

INSERT INTO `ofertas` (`id_oferta`, `titulo`, `cuerpo`, `tipo`) VALUES
(1, 'SUPER OFERTAS', 'Del 01 al 31 de Marzo', 'principal'),
(2, '', 'Disfruta de nuestras Promociones hasta el 31 de Marzo\r\n', 'secundaria');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

DROP TABLE IF EXISTS `productos`;
CREATE TABLE IF NOT EXISTS `productos` (
  `id_producto` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(150) NOT NULL,
  `descripcion` varchar(250) NOT NULL,
  `imagen` varchar(250) NOT NULL,
  `precio` int(6) NOT NULL,
  `marca` varchar(250) NOT NULL,
  `status` varchar(10) NOT NULL DEFAULT 'active',
  `observaciones` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id_producto`)
) ENGINE=MyISAM AUTO_INCREMENT=73 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id_producto`, `nombre`, `descripcion`, `imagen`, `precio`, `marca`, `status`, `observaciones`) VALUES
(1, 'Cargador celulares', 'Cargador carga rapida', 'image/imagen', 1000, '', 'active', 'Carga rapida'),
(2, 'Pendrive', '64 GB 3.0', 'image/imagen', 1500, 'VERBATIM', 'active', ''),
(3, 'Pendrive 16 gb', 'Pendrive 3.0', 'images/imagen', 1500, 'Kingston', 'active', ''),
(4, 'Pendrive 32 gb', 'Pendrive 3.0', 'image/imagen', 1800, 'Kingston', 'removed', 'Producto en promocion hasta agotar stdoc'),
(5, 'Pendrive 64 gb', 'Pendrive 3.0', 'images/imagen', 2500, 'Kingston', 'active', ''),
(6, 'Pendrive 128 gb', 'Pendrive 3.0', 'image/imagen', 3800, 'Kingston', 'removed', 'Se pueden cargar muchas peliculas'),
(7, 'Micro SD 16 gb', 'Clase 10 A1', 'images/imagen', 1500, 'Kingston', 'active', ''),
(8, 'Micro SD 32 gb', 'Clase 10 A1', 'image/imagen', 1900, 'Kingston', 'active', 'Para celulares y tablets'),
(9, 'Micro SD 64 gb', 'Clase 10 A1', 'image/imagen', 1990, 'Kingston', 'active', 'aaa'),
(10, 'Cargador Celular', '2.1 A carga rapida', 'images/imagen', 700, 'IgluFive', 'removed', ''),
(11, 'Cargador Tipo C', 'carga rapida', 'image/imagen', 900, 'Samsung', 'active', ''),
(12, 'Cargador Iphone', 'turbo', 'images/imagen', 900, 'Generico', 'active', ''),
(13, 'Auricular Genius', 'Cable 1 metro, con microfono', 'images/imagen', 1200, 'Genius', 'active', ''),
(14, 'Auricular Generico', 'con micofono', 'images/imagen', 500, 'Generico', 'active', ''),
(15, 'Auricular Bluetooth', 'Bateria alta duracion incluye cable', 'images/imagen', 3800, 'Iglufive', 'active', ''),
(16, 'Router TPLINK', '4 antenas', 'images/imagen', 5200, 'TP-LINK', 'removed', ''),
(17, 'Teclado', 'Genius mecanico', 'image/imagen', 2000, 'Genius', 'active', 'Sirve como gamer (teclas luminosas)'),
(18, 'Producto X', 'Descripcion X', 'images/x', 100, 'Marca X', 'active', ''),
(19, 'Producto X1', 'Descripcion X1', 'images/x1', 100, 'Marca X', 'active', ''),
(20, 'Producto X2', 'Descripcion X2', 'images/x2', 100, 'Marca X', 'active', ''),
(21, 'Producto X3', 'Descripcion X3', 'images/x3', 100, 'Marca X', 'active', ''),
(22, 'Producto X4', 'Descripcion X4', 'images/x4', 100, 'Marca X', 'active', ''),
(23, 'Producto X5', 'Descripcion X5', 'images/x5', 100, 'Marca X', 'active', ''),
(24, 'Producto X6', 'Descripcion X6', 'images/x6', 100, 'Marca X', 'active', ''),
(25, 'TECLADO', '101 TECLAS', 'image/imagen', 1200, 'GENIUS', 'active', ''),
(26, 'TECLADO', '101 TECLAS', 'image/imagen', 1200, 'GENIUS', 'active', ''),
(27, 'Carpeta', 'A4', 'image/imagen', 30, 'Generico', 'removed', ''),
(28, 'Papel fotografico', 'a4 200 g', 'image/imagen', 40, 'generico', 'active', 'Obseravcioens papel'),
(29, 'Papel gruso', '150 g cartulina', 'image/imagen', 35, 'LEDESMA', 'active', 'Pepel liso no brillante'),
(30, 'Papel gruso', '150 g cartulina', 'image/imagen', 35, 'LEDESMA', 'active', 'Pepel liso no brillante'),
(31, 'Papel fotografico', 'a6 200 g', 'image/imagen', 20, 'generico', 'active', '13x18'),
(32, 'Papel fotografico', 'a6 200 g', 'image/imagen', 20, 'generico', 'active', '13x18'),
(33, 'Papel fotografico', 'a6 200 g', 'image/imagen', 20, 'generico', 'active', '13x18'),
(34, 'Papel fotografico', 'a6 200 g', 'image/imagen', 20, 'generico', 'active', '13x18'),
(35, 'ProductoNuevo', 'DescripcionProductoNuevo', 'images/imagenNueva.jps', 38, 'NuevaMarca X', 'removed', NULL),
(36, 'ProductoNuevo', 'DescripcionProductoNuevo', 'images/imagenNueva.jps', 38, 'NuevaMarca X', 'removed', NULL),
(37, 'producto Y', 'Decricion produycto Y', '/images/imagenY.jpg', 100, 'Y MARCA', 'active', NULL),
(38, 'producto Y', 'Decricion produycto Y', '/images/imagenY.jpg', 100, 'Y MARCA', 'active', NULL),
(39, 'producto Y', 'Decricion produycto Y', '/images/imagenY.jpg', 100, 'Y MARCA', 'active', NULL),
(40, 'producto Y', 'Decricion produycto Y', '/images/imagenY.jpg', 100, 'Y MARCA', 'active', NULL),
(41, 'producto Y', 'Decricion produycto Y', '/images/imagenY.jpg', 100, 'Y MARCA', 'active', NULL),
(42, 'producto Y', 'Decricion produycto Y', '/images/imagenY.jpg', 100, 'Y MARCA', 'active', NULL),
(43, 'producto Y', 'Decricion produycto Y', '/images/imagenY.jpg', 100, 'Y MARCA', 'active', NULL),
(44, 'producto Z', 'Decricion produycto Y', '/images/imagenY.jpg', 100, 'Y MARCA', 'active', NULL),
(45, 'producto Z', 'Decricion produycto Y', '/images/imagenY.jpg', 100, 'Y MARCA', 'active', NULL),
(46, 'producto Z', 'Decricion produycto Y', '/images/imagenY.jpg', 100, 'Y MARCA', 'active', NULL),
(47, 'producto Z', 'Decricion produycto Y', '/images/imagenY.jpg', 100, 'Y MARCA', 'active', NULL),
(48, 'producto Z', 'Decricion produycto Y', '/images/imagenY.jpg', 100, 'Y MARCA', 'active', NULL),
(49, 'producto Z', 'Decricion produycto Y', '/images/imagenY.jpg', 100, 'Y MARCA', 'active', NULL),
(50, 'producto Z', 'Decricion produycto Y', '/images/imagenY.jpg', 100, 'Y MARCA', 'active', NULL),
(51, 'producto Z', 'Decricion produycto Y', '/images/imagenY.jpg', 100, 'Y MARCA', 'active', NULL),
(52, 'producto Z', 'Decricion produycto Y', '/images/imagenY.jpg', 100, 'Y MARCA', 'active', NULL),
(53, 'producto Z', 'Decricion produycto Y', '/images/imagenY.jpg', 100, 'Y MARCA', 'active', NULL),
(54, 'producto Z', 'Decricion produycto Y', '/images/imagenY.jpg', 100, 'Y MARCA', 'active', NULL),
(55, 'producto Z', 'Decricion produycto Y', '/images/imagenY.jpg', 100, 'Y MARCA', 'active', NULL),
(56, 'producto Z', 'Decricion produycto Y', '/images/imagenY.jpg', 100, 'Y MARCA', 'active', NULL),
(57, 'producto Z', 'Decricion produycto Y', '/images/imagenY.jpg', 100, 'Y MARCA', 'active', NULL),
(58, 'producto Z', 'Decricion produycto Y', '/images/imagenY.jpg', 100, 'Y MARCA', 'active', NULL),
(59, 'producto Z', 'Decricion produycto Y', '/images/imagenY.jpg', 100, 'Y MARCA', 'active', NULL),
(60, 'producto Z', 'Decricion produycto Y', '/images/imagenY.jpg', 100, 'Y MARCA', 'active', NULL),
(61, 'producto Z', 'Decricion produycto Y', '/images/imagenY.jpg', 100, 'Y MARCA', 'active', NULL),
(62, 'producto Z', 'Decricion produycto Y', '/images/imagenY.jpg', 100, 'Y MARCA', 'active', NULL),
(63, 'producto Z', 'Decricion produycto Y', '/images/imagenY.jpg', 100, 'Y MARCA', 'active', NULL),
(64, 'producto Z', 'Decricion produycto Y', '/images/imagenY.jpg', 100, 'Y MARCA', 'active', NULL),
(65, 'real madrid', 'Decricion produycto Y', '/images/imagenY.jpg', 100, 'Y MARCA', 'active', NULL),
(66, 'real madrid', 'Decricion produycto Y', '/images/imagenY.jpg', 100, 'Y MARCA', 'active', NULL),
(67, 'real madrid', 'Decricion produycto Y', '/images/imagenY.jpg', 100, 'Y MARCA', 'active', NULL),
(68, 'Guanchope \"offside\" Avila', 'banderin arriba', 'public/images/imagen.jpg', 959595, 'GENIUS', 'active', NULL),
(69, 'Papel fotografico', 'banderin arriba', 'public/images/imagen.jpg', 39, 'generico', 'active', NULL),
(70, 'Producto de tarde', 'descrip tarde', 'public/images/imagen.jpg', 1111, 'tarde', 'active', NULL),
(71, 'Guanchope \"offside\" Avila', 'banderin arriba', 'public/images/imagen.jpg', 404040, 'LEDESMA', 'active', NULL),
(72, 'IPHONE X', 'Celular de 128 GB', 'public/images/imagen.jpg', 125000, 'APPLE', 'active', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto_categoria`
--

DROP TABLE IF EXISTS `producto_categoria`;
CREATE TABLE IF NOT EXISTS `producto_categoria` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_producto` int(11) NOT NULL,
  `id_categoria` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_producto` (`id_producto`),
  KEY `FK_categoria` (`id_categoria`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `producto_categoria`
--

INSERT INTO `producto_categoria` (`id`, `id_producto`, `id_categoria`) VALUES
(1, 1, 1),
(2, 1, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `servicios`
--

DROP TABLE IF EXISTS `servicios`;
CREATE TABLE IF NOT EXISTS `servicios` (
  `id_servicio` int(11) NOT NULL AUTO_INCREMENT,
  `servicio` text NOT NULL,
  `titulo` varchar(250) NOT NULL,
  PRIMARY KEY (`id_servicio`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `servicios`
--

INSERT INTO `servicios` (`id_servicio`, `servicio`, `titulo`) VALUES
(1, 'Servicio Tecnico de Pc', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga tempora, quaerat, quam iusto veritatis animi eos repudiandae neque maiores quo quas doloremque eius, officiis placeat! Vero dolorum necessitatibus saepe laudantium!\r\n'),
(2, 'Actualizacion de Antivirus', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga tempora, quaerat, quam iusto veritatis animi eos repudiandae neque maiores quo quas doloremque eius, officiis placeat! Vero dolorum necessitatibus saepe laudantium!'),
(3, 'agrego sevicio por primera vfez', 'Agergando serivio'),
(4, 'Coordinamos horarios y podemos ir hasta tu lugar de trabajo a realizar el servicio que haga falta.', 'Servicio tecnico a oficinas');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(60) NOT NULL,
  `password` varchar(80) NOT NULL,
  `rol` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`, `rol`) VALUES
(1, 'flavia', '81dc9bdb52d04dc20036dbd8313ed055', 'root'),
(2, 'laura', '81dc9bdb52d04dc20036dbd8313ed055', 'lectura'),
(9, 'invitado', '81dc9bdb52d04dc20036dbd8313ed055', 'lectura'),
(8, 'pablo', 'e10adc3949ba59abbe56e057f20f883e', 'root'),
(10, 'ROJOH', 'fbc71ce36cc20790f2eeed2197898e71', 'lectura');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ventas`
--

DROP TABLE IF EXISTS `ventas`;
CREATE TABLE IF NOT EXISTS `ventas` (
  `id_venta` int(11) NOT NULL AUTO_INCREMENT,
  `cantidad` int(3) NOT NULL,
  `fecha` datetime NOT NULL,
  `id_producto` int(11) NOT NULL,
  `id_cliente` int(11) NOT NULL,
  PRIMARY KEY (`id_venta`),
  KEY `FK_id_producto` (`id_producto`),
  KEY `FK_id_cliente` (`id_cliente`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `ventas`
--

INSERT INTO `ventas` (`id_venta`, `cantidad`, `fecha`, `id_producto`, `id_cliente`) VALUES
(1, 122, '2022-04-17 12:34:52', 1, 1),
(2, 1, '2022-04-17 12:39:50', 18, 1),
(3, 22, '2022-04-17 12:47:44', 1, 1),
(4, 1, '2022-04-17 12:51:06', 7, 2),
(5, 43, '2022-04-17 15:51:42', 1, 1),
(6, 1, '2022-04-17 15:54:08', 15, 1),
(7, 33, '2022-04-17 15:56:14', 23, 2),
(8, 21, '2022-04-17 15:57:26', 68, 1),
(9, 21, '2022-04-17 15:57:30', 68, 1),
(10, 1, '2022-04-17 16:11:42', 58, 1),
(11, 2, '2022-04-17 16:12:52', 17, 2);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
