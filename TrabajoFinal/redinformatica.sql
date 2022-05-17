-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 17-05-2022 a las 00:46:26
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
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`id_cliente`, `nombre`, `apellido`, `mail`, `direccion`, `telefono`) VALUES
(1, 'Juan', 'Perez', 'jua_pe@live.com.ar', 'Av. España 1520', '2664444444'),
(2, 'Norma', 'Carletti', 'normacarle@gmail.com', 'Av. Sucre 1252', '2664858585'),
(3, 'Pablo', 'Rojo', 'arojopablo@gmail.com', 'M. de Loyola 195 ', '2664372195'),
(12, 'Pedro', 'Video Final', 'virginiaorueo@gmail.com', 'domicilio x ', '2664444444'),
(6, 'Orlando', 'Gomez Anello', 'orgoanello@gmail.com', 'Granaderos Puntanos 1541', '266666667'),
(11, 'Juan Carlos', 'Video', 'jua@gmail.com', 'Domicilio para video 124', '33333');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `notificaciones`
--

DROP TABLE IF EXISTS `notificaciones`;
CREATE TABLE IF NOT EXISTS `notificaciones` (
  `id_notificacion` int(11) NOT NULL AUTO_INCREMENT,
  `notificacion` varchar(250) NOT NULL,
  `estado` varchar(100) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  PRIMARY KEY (`id_notificacion`)
) ENGINE=MyISAM AUTO_INCREMENT=44 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `notificaciones`
--

INSERT INTO `notificaciones` (`id_notificacion`, `notificacion`, `estado`, `id_usuario`) VALUES
(1, 'Notifiacion de prueba', 'vista', 1),
(2, 'Notifiacion de prueba', 'vista', 1),
(28, 'comentario para el video', 'web', 1),
(5, 'Otra notificacion', 'vista', 2),
(21, 'Muy buena atencion', 'web', 1),
(9, 'La atencion estuvo bien, el tiempo acorde y el precio lo mejor!', 'web', 1),
(30, 'notificacion para laura en video', 'vista', 2),
(23, 'Notificacion para lorena', 'no_vista', 2),
(14, 'Probando notificacion', 'vista', 1),
(12, 'hola', 'vista', 1),
(42, 'notificacion para video', 'no_vista', 2),
(39, 'Notificacion de flavia usuario root a laura ', 'vista', 2),
(16, 'Probando notificacion nuevamente', 'vista', 1),
(43, 'Otra notificacion para laura', 'no_vista', 1),
(19, 'Nueva notificacion en video explicativo', 'no_vista', 8),
(20, 'notifiacion para laura', 'vista', 2),
(26, 'Notificacion pra laura', 'vista', 2),
(35, 'Notificacion de prueba para el video ', 'vista', 2),
(37, 'notificacion para otro usuario', 'vista', 2);

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
  `img_id` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`, `img_id`) VALUES
(10, 'ECONOMIA', 'Estadisticas de suba de precios', '. La más elevada fue la de abril de 2002 (10,4%) como efecto de la crisis desatada un mes antes y el inicio de la salida de la convertibilidad que incluyó una devaluación del peso. Más atrás se registran el 6,7% de abril de 2016, de acuerdo al IPC Congreso, confeccionado por las principales consultoras económicas del país y tomado como referencia por todos los actores económicos. El Indec aún no había reestablecido la medición del IPC nacional tras el fin de la intervención del organismo durante el kirchnerismo y eligió publicar como indicadores alternativos el IPC de la Ciudad de Buenos Aires (6,5%) y de San Luis (3,4 por ciento). El IPC actual se reanudó en mayo de 2016. También se destacó el 6,5% de septiembre de 2018, luego de un fuerte episodio devaluatorio el mes anterior. El Gobierno ya admitía para marzo una cifra por encima del 6 por ciento. El Poder Ejecutivo atribuye el salto de los precios de los últimos dos meses a la crisis en los valores internacionales de los alimentos y la energía como consecuencia de la guerra en Ucrania, y enumera otras economías desarrolladas que también experimentan sus números de inflación más altos en décadas. La Argentina, de todas formas, ya registra un problema de inflación creciente hace al menos 15 años al considerar solo este siglo.	', 'thxetrkxblcnoz5rozjb'),
(2, ' alta en los últimos 20 años', 'La cifra igualó al máximo registrado en el comienzo del gobierno de Mauricio Macri, medido por el IPC Congreso. Prevén un 5% para abril y el Gobierno busca evitar que el dato anual supere el 60 por ciento\r\n', 'organismo estadístico ubica así a marzo entre las inflaciones mensuales más altas del siglo. La más elevada fue la de abril de 2002 (10,4%) como efecto de la crisis desatada un mes antes y el inicio de la salida de la convertibilidad que incluyó una devaluación del peso.\r\n\r\nMás atrás se registran el 6,7% de abril de 2016, de acuerdo al IPC Congreso, confeccionado por las principales consultoras económicas del país y tomado como referencia por todos los actores económicos. El Indec aún no había reestablecido la medición del IPC nacional tras el fin de la intervención del organismo durante el kirchnerismo y eligió publicar como indicadores alternativos el IPC de la Ciudad de Buenos Aires (6,5%) y de San Luis (3,4 por ciento). El IPC actual se reanudó en mayo de 2016. También se destacó el 6,5% de septiembre de 2018, luego de un fuerte episodio devaluatorio el mes anterior.\r\n\r\nEl Gobierno ya admitía para marzo una cifra por encima del 6 por ciento. El Poder Ejecutivo atribuye el salto de los precios de los últimos dos meses a la crisis en los valores internacionales de los alimentos y la energía como consecuencia de la guerra en Ucrania, y enumera otras economías desarrolladas que también experimentan sus números de inflación más altos en décadas. La Argentina, de todas formas, ya registra un problema de inflación creciente hace al menos 15 años al considerar solo este siglo.', 'zcrpxzgy5tdun1cdlkn3'),
(7, 'Probando Novedad', 'Este es un subtitulo de prueba', 'Cuerpo de prueba de novedad (que estoy modificando) Modifico para el video', 'cpx1ajspdsxuvx5csb54'),
(11, 'El pryecto esta finalizando', 'Queda poco tiempo', 'Se chequea todo para que este OK', '');

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
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `ofertas`
--

INSERT INTO `ofertas` (`id_oferta`, `titulo`, `cuerpo`, `tipo`) VALUES
(1, 'SUPER OFERTAS', '                   Del 01 al 31 de Mayo hasta agotar stock', 'principal'),
(2, '', ' Disfruta de nuestras Promociones hasta el 30 de Abril \r\n', 'secundaria');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

DROP TABLE IF EXISTS `productos`;
CREATE TABLE IF NOT EXISTS `productos` (
  `id_producto` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(150) NOT NULL,
  `descripcion` varchar(250) NOT NULL,
  `imagen` varchar(250) DEFAULT NULL,
  `precio` int(6) NOT NULL,
  `marca` varchar(250) NOT NULL,
  `status` varchar(10) NOT NULL DEFAULT 'active',
  `observaciones` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id_producto`)
) ENGINE=MyISAM AUTO_INCREMENT=98 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id_producto`, `nombre`, `descripcion`, `imagen`, `precio`, `marca`, `status`, `observaciones`) VALUES
(1, 'Cargador celulares', 'Cargador carga rapida', 'ydceq5kqnolv5rizhefb', 1010, 'IGLU-FIVE', 'active', 'Carga rapida'),
(2, 'Pendrive', '64 GB 3.0', 'qovtkojmpoed5kksgq8m', 1500, 'VERBATIM', 'active', ''),
(3, 'Pendrive 16 gb', 'Pendrive 3.0', '', 1500, 'Kingston', 'active', 'Ideal para el auto'),
(4, 'Pendrive 32 gb', 'Pendrive 3.0', NULL, 1800, 'Kingston', 'removed', 'Producto en promocion hasta agotar stdoc'),
(5, 'Pendrive 64 gb', 'Pendrive 3.0', '', 2500, 'Kingston', 'active', 'Agrego observacion'),
(6, 'Pendrive 128 gb', 'Pendrive 3.0', NULL, 3800, 'Kingston', 'removed', 'Se pueden cargar muchas peliculas'),
(7, 'Micro SD 16 gb', 'Clase 10 A1', NULL, 1500, 'Kingston', 'active', 'Sirve para camaras GOPRO'),
(8, 'Micro SD 32 gb', 'Clase 10 A1', NULL, 1900, 'Kingston', 'active', 'Para celulares y tablets'),
(9, 'Micro SD 64 gb', 'Clase 10 A1', 'rgjelj08k2haeb4j1gnl', 1990, 'Kingston', 'active', 'Ideal para GOPRO'),
(10, 'Cargador Celular', '2.1 A carga rapida', NULL, 700, 'IgluFive', 'removed', ''),
(11, 'Cargador Tipo C', 'carga rapida', NULL, 900, 'Samsung', 'active', ''),
(12, 'Cargador Iphone', 'turbo', NULL, 900, 'Generico', 'active', ''),
(13, 'Auricular Genius', 'Cable 1 metro, con microfono', NULL, 1200, 'Genius', 'active', ''),
(14, 'Auricular Generico', 'con micofono', NULL, 500, 'Generico', 'active', ''),
(15, 'Auricular Bluetooth', 'Bateria alta duracion incluye cable', NULL, 3800, 'Iglufive', 'active', ''),
(16, 'Router TPLINK', '4 antenas', NULL, 5200, 'TP-LINK', 'removed', ''),
(17, 'Teclado', 'Genius mecanico', NULL, 2000, 'Genius', 'active', 'Sirve como gamer (teclas luminosas)'),
(18, 'FOTOCOPIADORA ', 'Color', 'qpg5f3afxnyepc3qcqhk', 365000, 'XEROX', 'active', 'Incluye set de toners de alta capacidad'),
(19, 'Notbook ', 'bateria alta duracion', 'xcwcwumuv8lj5pvpfbli', 153259, 'LENOVO', 'active', 'Ahora 6,12 y 18'),
(20, 'Producto X2', 'Descripcion X2', NULL, 100, 'Marca X', 'active', ''),
(21, 'Producto X3', 'Descripcion X3', NULL, 100, 'Marca X', 'active', ''),
(22, 'NOTEBOOK 15 pulgadas', 'En oferta', 'qilx1xyc1h26m0vbdafi', 98000, 'LENOVO', 'active', 'I9 ULTIMA GENERACION'),
(23, 'NOTEBOOK ASUS VX540', 'i5 8 GB RAM', 'e6kdk8anvxoox6wgmyqc', 259000, 'ASUS', 'active', 'Con disco solido'),
(24, 'Impresora', 'chorro de tinta con sistema continuo', 'ue9vqyokkc8rw6bamtxv', 100, 'EPSON', 'active', 'Soporta papel fotografico'),
(25, 'TECLADO', '101 TECLAS', NULL, 1200, 'GENIUS', 'active', ''),
(26, 'TECLADO', '101 TECLAS', NULL, 1200, 'GENIUS', 'active', ''),
(27, 'Carpeta', 'A4', NULL, 30, 'Generico', 'removed', ''),
(28, 'Papel fotografico', 'a4 200 g', 'pdnsmzyd7rczxmnidrq7', 40, 'generico', 'active', 'Obseravcioens papel'),
(29, 'Papel gruso', '150 g cartulina', 'dcgxg243wlbnj8rigbkf', 35, 'LEDESMA', 'active', 'Pepel liso no brillante'),
(30, 'Papel grueso mate', '150 g cartulina', 'frnlhddlgxcme5kgodmg', 35, 'LEDESMA', 'active', 'Pepel liso no brillante'),
(31, 'Papel fotografico', 'a6 200 g', NULL, 20, 'generico', 'active', '13x18'),
(32, 'Papel fotografico', 'a6 200 g', NULL, 20, 'generico', 'active', '13x18'),
(33, 'Papel fotografico', 'a6 200 g', NULL, 20, 'generico', 'active', '13x18'),
(34, 'Papel fotografico', 'a6 200 g', NULL, 20, 'generico', 'active', '13x18'),
(35, 'ProductoNuevo', 'DescripcionProductoNuevo', NULL, 38, 'NuevaMarca X', 'removed', NULL),
(36, 'ProductoNuevo', 'DescripcionProductoNuevo', NULL, 38, 'NuevaMarca X', 'removed', NULL),
(37, 'NOTEBOOK', 'AMD ', 'mvixzhhjmmltuv1tigfu', 175000, 'ACER', 'active', 'Incluye funda'),
(38, 'IMPRESORA LASER COLOR', 'Con doble faz automatico', 's1vu736mc9bmincuzv9d', 45960, 'SAMSUNG', 'active', 'Toner recargable rinde 3 mil copias'),
(39, 'producto Y', 'Decricion produycto Y', NULL, 100, 'Y MARCA', 'removed', NULL),
(40, 'producto Y', 'Decricion produycto Y', NULL, 100, 'Y MARCA', 'removed', NULL),
(41, 'producto Y', 'Decricion produycto Y', NULL, 100, 'Y MARCA', 'active', NULL),
(42, 'producto Y', 'Decricion produycto Y', NULL, 100, 'Y MARCA', 'active', NULL),
(43, 'producto Y', 'Decricion produycto Y', NULL, 100, 'Y MARCA', 'active', NULL),
(44, 'producto Z', 'Decricion produycto Y', NULL, 100, 'Y MARCA', 'active', NULL),
(45, 'producto Z', 'Decricion produycto Y', NULL, 100, 'Y MARCA', 'active', NULL),
(46, 'producto Z', 'Decricion produycto Y', NULL, 100, 'Y MARCA', 'removed', NULL),
(47, 'producto Z', 'Decricion produycto Y', NULL, 100, 'Y MARCA', 'removed', NULL),
(48, 'producto Z', 'Decricion produycto Y', NULL, 100, 'Y MARCA', 'active', NULL),
(49, 'producto Z', 'Decricion produycto Y', NULL, 100, 'Y MARCA', 'removed', NULL),
(50, 'producto Z', 'Decricion produycto Y', NULL, 100, 'Y MARCA', 'removed', NULL),
(51, 'producto Z', 'Decricion produycto Y', NULL, 100, 'Y MARCA', 'active', NULL),
(52, 'producto Z', 'Decricion produycto Y', NULL, 100, 'Y MARCA', 'active', NULL),
(53, 'producto Z', 'Decricion produycto Y', NULL, 100, 'Y MARCA', 'removed', NULL),
(54, 'producto Z', 'Decricion produycto Y', NULL, 100, 'Y MARCA', 'active', NULL),
(55, 'producto Z', 'Decricion produycto Y', NULL, 100, 'Y MARCA', 'active', NULL),
(56, 'producto Z', 'Decricion produycto Y', NULL, 100, 'Y MARCA', 'active', NULL),
(57, 'producto Z', 'Decricion produycto Y', NULL, 100, 'Y MARCA', 'active', NULL),
(58, 'producto Z', 'Decricion produycto Y', NULL, 100, 'Y MARCA', 'active', NULL),
(59, 'producto Z', 'Decricion produycto Y', NULL, 100, 'Y MARCA', 'removed', NULL),
(60, 'producto Z', 'Decricion produycto Y', NULL, 100, 'Y MARCA', 'removed', NULL),
(61, 'producto Z', 'Decricion produycto Y', NULL, 100, 'Y MARCA', 'removed', NULL),
(62, 'producto Z', 'Decricion produycto Y', NULL, 100, 'Y MARCA', 'removed', NULL),
(63, 'producto Z', 'Decricion produycto Y', NULL, 100, 'Y MARCA', 'removed', NULL),
(64, 'producto Z', 'Decricion produycto Y', NULL, 100, 'Y MARCA', 'removed', NULL),
(65, 'real madrid cambio', 'Decricion produycto Y', '', 100, 'Y MARCA', 'active', ''),
(66, 'real madrid', 'Decricion produycto Y', NULL, 100, 'Y MARCA', 'active', NULL),
(67, 'real madrid ', 'Decricion produycto Real madrid cambio (saco)', '', 100, 'Y MARCA', 'active', ''),
(68, 'Guanchope \"offside\" Avila', 'banderin arriba', NULL, 959595, 'GENIUS', 'active', NULL),
(69, 'Papel fotografico', 'banderin arriba', NULL, 39, 'generico', 'active', NULL),
(70, 'Producto de tarde', 'descrip tarde', NULL, 1111, 'tarde', 'active', NULL),
(71, 'Guanchope \"offside\" Avila', 'banderin arriba', NULL, 404040, 'LEDESMA', 'removed', NULL),
(72, 'IPHONE X', 'Celular de 128 GB', NULL, 125000, 'APPLE', 'active', NULL),
(73, 'ME VAN A BORRAR', 'ME QUEDA POCO TIEMPO DE VIDA', NULL, 151, 'MARC A BORRADA', 'removed', NULL),
(77, 'Producto Con imagen', 'Agrego imagen', NULL, 21212, 'marca con imagen', 'removed', 'fsdafsdfds'),
(78, 'Notebook', 'Disco Solido', 'dxc6odlrbygfcmyxue7d', 157000, 'ACER', 'active', 'i3 ultima generacion'),
(79, 'hola', 'nuevo', '', 1, 'producto', 'active', ''),
(80, 'Servicio Tecnico de PC', 'Reparaciones en general', 'i5rgaixbckelk78q1lhh', 1540, 'Generica', 'active', 'El precio es a convenir de acuerdo al problema '),
(81, 'Otros Servicios Varios', 'Servicios en general', 'p05bqul50g2wn7tdct2u', 1500, 'MARCA PROPIA', 'active', 'El precio es a convenir'),
(82, 'Pendrive', 'pendrive video', 'y8cdbbn5mrhvv9xtqhzk', 10, 'marca video', 'active', 'Observaciones'),
(83, 'Producto de prueba para el video', 'Observaciones de producto', NULL, 121, 'marca de video', 'removed', 'mas observaciones'),
(84, 'd', 'd', NULL, 1, 'd', 'removed', 's'),
(85, 'producto de prueba para video', 'descripcion', NULL, 121, 'marca de prueba para video', 'removed', 'Obser'),
(86, 'Producto ejemplo para video', 'producto descri', NULL, 222, 'marca para video', 'removed', ''),
(87, 'producto de prueba para video', 'producto descripcion', NULL, 121, 'marca de prueba', 'removed', 'Observaciones para video'),
(88, 'producto de prueba para video', 'descripcion', NULL, 1212, 'marca para video', 'removed', 'Observaciones para el video'),
(89, 'producto para video', 'ejemplo de producto', NULL, 1212, 'marca de producto', 'removed', 'Observaciones para pagina'),
(90, 'Ejemplo para video', 'descripcion', NULL, 1211, 'marca para video', 'removed', 'Observaciones para video'),
(91, 'producto de prueba para video', '101 TECLAS', NULL, 111, 'marca para video', 'removed', 'Observaciones de prueba para viodeo'),
(92, 'producto de prueba para video', '101 TECLAS', NULL, 1200, 'marca para video', 'removed', 'Observaciones para video'),
(93, 'producto para video', 'descripcion para video', NULL, 1200, 'GENIUS', 'removed', 'Observaciones para video'),
(94, 'producto de prueba para video', '101 TECLAS', NULL, 1515, 'generico', 'removed', 'Observaciones para video final'),
(95, 'producto de prueba para video', '101 TECLAS', NULL, 215151, 'GENIUS', 'removed', 'Observaciones para video final'),
(96, 'producto de prueba para video', '101 TECLAS', NULL, 1200, 'GENIUS', 'removed', 'observaciones para video '),
(97, 'producto de prueba para video', 'descripcion', 'g8oryycvq8bpuxzwgl7o', 111, 'GENIUS', 'active', 'Obvservacion para viode');

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
  `img_id` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id_servicio`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `servicios`
--

INSERT INTO `servicios` (`id_servicio`, `servicio`, `titulo`, `img_id`) VALUES
(1, 'Servicio Tecnico de Pc Modificado para video', 'Disco solido ipsum dolor sit amet consectetur adipisicing elit. Fuga tempora, quaerat, quam iusto veritatis animi eos repudiandae neque maiores quo quas doloremque eius, officiis placeat! Vero dolorum necessitatibus saepe laudantium! \r\n', 'w6tqpy7ywokbhznvhb5l'),
(2, 'Actualizacion de Antivirus', 'AVG ANTIVIRUS Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga tempora, quaerat, quam iusto veritatis animi eos repudiandae neque maiores quo quas doloremque eius, officiis placeat! Vero dolorum necessitatibus saepe laudantium!', 'woyri30gryl8sqzrrmng'),
(3, 'Agrego sevicio por primera vez ', 'Agergando servicio ', 'fhfgx5znfr8oexnjjrav'),
(4, 'Servicio tecnico a oficinas', 'Coordinamos horarios y podemos ir hasta tu lugar de trabajo a realizar el servicio que haga falta.', 'dowwtrdaoas0n2lidg24'),
(6, 'Servicio Tecnico de PC', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ullam quidem aliquam est laborum, quia officia perspiciatis velit architecto pariatur, esse harum, porro suscipit ab libero doloremque consectetur voluptatibus vel.', 'grd2aao4hduji4u0gbyw'),
(7, 'VARIOS', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ullam quidem aliquam est laborum, quia officia perspiciatis velit architecto pariatur, esse harum, porro suscipit ab libero doloremque consectetur voluptatibus vel.', 'hlyvrbivz6b7btswdcyj');

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
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`, `rol`) VALUES
(1, 'flavia', '81dc9bdb52d04dc20036dbd8313ed055', 'root'),
(2, 'laura', '81dc9bdb52d04dc20036dbd8313ed055', 'lectura'),
(9, 'invitado', '81dc9bdb52d04dc20036dbd8313ed055', 'lectura'),
(8, 'pablo', '81dc9bdb52d04dc20036dbd8313ed055', 'root'),
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
  `estado` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id_venta`),
  KEY `FK_id_producto` (`id_producto`),
  KEY `FK_id_cliente` (`id_cliente`)
) ENGINE=MyISAM AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `ventas`
--

INSERT INTO `ventas` (`id_venta`, `cantidad`, `fecha`, `id_producto`, `id_cliente`, `estado`) VALUES
(1, 122, '2022-04-17 12:34:52', 1, 1, 'finalizado'),
(2, 1, '2022-04-17 12:39:50', 18, 1, 'procesando'),
(3, 22, '2022-04-17 12:47:44', 1, 1, 'finalizado'),
(4, 1, '2022-04-17 12:51:06', 7, 2, 'finalizado'),
(5, 43, '2022-04-17 15:51:42', 1, 1, 'finalizado'),
(6, 1, '2022-04-17 15:54:08', 15, 1, 'finalizado'),
(7, 33, '2022-04-17 15:56:14', 23, 2, 'finalizado'),
(8, 21, '2022-04-17 15:57:26', 68, 1, 'finalizado'),
(9, 21, '2022-04-17 15:57:30', 68, 1, 'finalizado'),
(10, 1, '2022-04-17 16:11:42', 58, 1, 'finalizado'),
(11, 2, '2022-04-17 16:12:52', 17, 2, 'finalizado'),
(12, 1, '2022-04-20 15:14:10', 1, 1, 'finalizado'),
(13, 1, '2022-04-23 10:52:00', 7, 1, 'finalizado'),
(14, 1, '2022-04-23 19:34:07', 9, 1, 'finalizado'),
(15, 1, '2022-04-29 10:03:57', 12, 2, 'finalizado'),
(16, 1, '2022-04-30 10:02:16', 78, 3, 'procesando'),
(17, 1, '2022-04-30 15:09:46', 13, 3, 'finalizado'),
(18, 1, '2022-04-30 19:13:30', 78, 3, 'finalizado'),
(19, 1, '2022-05-11 22:10:40', 80, 1, 'procesando'),
(20, 1, '2022-05-11 22:13:57', 81, 6, 'finalizado'),
(21, 1, '2022-05-15 12:52:39', 80, 6, 'procesando'),
(22, 1, '2022-05-15 21:12:48', 80, 2, 'procesando'),
(23, 1, '2022-05-15 21:58:57', 80, 1, 'procesando'),
(24, 1, '2022-05-15 22:00:28', 80, 8, 'procesando'),
(25, 1, '2022-05-15 22:07:48', 80, 9, 'finalizado'),
(26, 1, '2022-05-16 15:00:21', 80, 10, 'finalizado'),
(27, 1, '2022-05-16 21:08:30', 80, 12, 'finalizado');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
