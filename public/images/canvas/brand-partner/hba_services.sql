-- phpMyAdmin SQL Dump
-- version 4.6.6deb4
-- https://www.phpmyadmin.net/
--
-- Host: db721332247.db.1and1.com
-- Generation Time: Jul 04, 2019 at 11:07 AM
-- Server version: 5.5.60-0+deb7u1-log
-- PHP Version: 7.0.33-0+deb9u3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db721332247`
--

-- --------------------------------------------------------

--
-- Table structure for table `hba_services`
--

CREATE TABLE `hba_services` (
  `Id` int(11) NOT NULL,
  `ServiceName` text,
  `LinkName` varchar(255) NOT NULL,
  `Description` text,
  `URL` text,
  `Image` text,
  `HeadingImage` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `hba_services`
--

INSERT INTO `hba_services` (`Id`, `ServiceName`, `LinkName`, `Description`, `URL`, `Image`, `HeadingImage`) VALUES
(1, 'Architecture', 'HBA Architecture', 'HBA Architecture is a global design practice strategically positioned for the new era of design, development and brand interaction adopting an interdisciplinary design approach that blends design.', 'http://www.hbaarchitecture.com ', 'nav-architecture-grey.jpg', 'hba-architecture-white.png'),
(2, 'Graphic Design', 'HBA Graphics', 'HBA Graphics believe in strong narratives to drive their projects – paying close attention to form and function they combine beauty and purpose with a synergy that is timeless. ', 'http://www.hbagraphics.com', 'nav-graphics-grey.jpg', 'hba-graphics-white.png'),
(3, 'Art Consultation', 'Canvas', 'Canvas\' consultants further the client\'s design goals by breathing the vibrancy of well-conceived and fully realized art collections and accessories into their spaces.', 'http://www.canvasartconsultants.com', 'nav-canvas-grey.jpg', 'hba-canvas-white.png'),
(4, 'Illuminate', 'Illuminate', 'Illuminate are a lighting design consultancy working with architects, interior designers, landscape architects and end clients across Asia, Middle East, Europe and America on a wide range of commercial and residential projects. A successful lighting scheme should be a seamless, complimentary layer to an interior or exterior; the user of the space should be blissfully unaware of its presence, and yet be able to fully appreciate the space in all its realized glory. At Illuminate, lighting design is considered in layers, and it is by the intelligent grouping of lights into these layers that allows the manipulation of a space to suit the desired task or ambience.', 'http://www.illuminateld.com', 'nav-illuminate-grey.jpg', 'hba-illuminate-white.png'),
(5, 'Studio', 'Studio HBA', 'Studio hba services a large client base of developers and hoteliers both independent and international midscale brands, looking for cutting-edge lifestyle design, quality service and solutions to real world project constraints.', 'http://www.studiohba.com', 'nav-studio-grey.jpg', 'hba-studio-white.png'),
(6, 'Residential', 'HBA Residential', 'HBA Residential creates distinctive, sophisticated and sublime environments for private villas, penthouses, luxury buildings, and houses for the world’s most distinguished individuals. ', 'http://www.hbaresidential.com', 'nav-residential-grey.jpg', 'hba-residential-white.png'),
(7, 'Resort', 'HBA Resort', 'Integrating Interior Design, Architecture and Landscape Services to Deliver a Uniquely Customised Experience Around the Globe.\r\nHBA Resort specializes in creating bespoke, luxury resort properties globally with a flagship office based out of Bali, Indonesia, a hub for Southeast Asia\'s flourishing resort community. The design team draws inspiration from Bali\'s enchanting locale, working with local artisans and craftsman for indigenous and authentic design projects to create the world\'s most treasured resorts.\r\nHBA Resort stands apart for its ability to deliver full service resort projects with a hands-on approach - from boutique to comprehensive, large scale mixed-use developments with complete turn-key services backed by 51 years of HBA\'s expertise. The office offers a cohesive service from feasibility master planning packages through room and villa design, hospitality and procurement disciplines. Located in the design base of Bali, surrounded and inspired by the pure artisanal spirit of tropical island life, the design team has direct and exclusive access to the region\'s talented artisans specializing in metalwork, stonework, carving and other lost arts that are only found in this region.\r\nHBA Resort\'s Bali office utilizes a holistic combination of interior design, architecture, landscape, lighting and art - drawing upon the exploration and skills of HBA\'s worldwide network of design studios. The team\'s environment is their ethos: whether in reference to an island, desert, volcanic mountain or tropical jungle setting, Bali\'s enchantment inspires a unique approach to luxury hospitality design.', 'http://www.hbaresort.com', 'nav-resort-grey.jpg', 'hba-resort-white.png'),
(8, 'Procurement', 'HBA Procurement', 'HBA Procurement provides a single point of accountability for design and purchasing services with truly global sourcing and the best negotiated pricing within the hospitality and residential industry.', NULL, 'nav-procurement-grey.jpg', 'hba-pro-white.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `hba_services`
--
ALTER TABLE `hba_services`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `hba_services`
--
ALTER TABLE `hba_services`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
