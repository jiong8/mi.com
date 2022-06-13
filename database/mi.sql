-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- 主机： localhost
-- 生成日期： 2022-06-12 18:34:10
-- 服务器版本： 5.7.26
-- PHP 版本： 7.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `mi`
--

-- --------------------------------------------------------

--
-- 表的结构 `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL COMMENT '商品id',
  `title` varchar(255) NOT NULL COMMENT '商品标题',
  `price` float NOT NULL COMMENT '商品价格',
  `picture` text NOT NULL COMMENT '商品图片',
  `type` text NOT NULL COMMENT '商品分类'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `product`
--

INSERT INTO `product` (`id`, `title`, `price`, `picture`, `type`) VALUES
(100002, 'Redmi Note 11T Pro+系列', 1999, '[{ \"src\": \"images/redmi11Tpro+.webp\", \"alt\": \"small\" },{ \"src\": \"imgs/redmi_t1.png\", \"alt\": \"small\" }]', '[{\"type\":\"8GB+128GB\",\"color\":[\"时光蓝\",\"子夜黑\",\"原子银\"],\"price\":\"1999\"},{\"type\":\"8GB+256GB\",\"color\":[\"时光蓝\",\"子夜黑\",\"原子银\",\"潮流限定版 铁臂阿童木\"],\"price\":\"2199\"},{\"type\":\"8GB+512GB\",\"color\":[\"时光蓝\",\"子夜黑\",\"原子银\"],\"price\":\"2399\"}]'),
(100001, 'Redmi Note 11T Pro系列', 1699, '[{ \"src\": \"images/ri_2.webp\", \"alt\": \"small\" },{ \"src\": \"imgs/redmi_t1.png\", \"alt\": \"small\" }]', '[{\"type\":\"6GB+128GB\",\"color\":[\"时光蓝\",\"子夜黑\",\"原子银\"],\"price\":\"1699\"},{\"type\":\"8GB+128GB\",\"color\":[\"时光蓝\",\"子夜黑\",\"原子银\"],\"price\":\"1899\"},{\"type\":\"8GB+256GB\",\"color\":[\"时光蓝\",\"子夜黑\",\"原子银\"],\"price\":\"2099\"}]'),
(100003, 'Redmi Note 11SE', 999, '[{ \"src\": \"images/ri_3.webp\", \"alt\": \"small\" },{ \"src\": \"imgs/se_11.png\", \"alt\": \"small\" }]', '[{\"type\":\"4GB+128GB\",\"color\":[\"暗影黑\",\"深空蓝\"],\"price\":\"999\"},{\"type\":\"8GB+128GB\",\"color\":[\"暗影黑\",\"深空蓝\"],\"price\":\"1299\"}]'),
(100004, 'Xiaomi Civi 1S', 2299, '[{ \"src\": \"images/ri_4.webp\", \"alt\": \"small\" },{ \"src\": \"imgs/se_11.png\", \"alt\": \"small\" }]', '[{\"type\":\"8GB+128GB\",\"color\":[\"怦怦粉\", \"奇迹阳光\",\"闪闪黑\",\"轻轻蓝\"],\"price\":\"2299\"},{\"type\":\"8GB+256GB\",\"color\":[\"怦怦粉\", \"奇迹阳光\",\"闪闪黑\",\"轻轻蓝\"],\"price\":\"2599\"},{\"type\":\"12GB+256GB\",\"color\":[\"怦怦粉\", \"奇迹阳光\",\"闪闪黑\",\"轻轻蓝\"],\"price\":\"2899\"}]'),
(100005, 'Redmi 10A', 649, '[{ \"src\": \"images/ri_5.webp\", \"alt\": \"small\" },{ \"src\": \"imgs/Redmi_10A.webp\", \"alt\": \"small\" }]', '[{\"type\":\"4GB+64GB\",\"color\":[\"烟波蓝\", \"暗影黑\",\"月光银\"],\"price\":\"649\"},{\"type\":\"4GB+128GB\",\"color\":[\"烟波蓝\", \"暗影黑\",\"月光银\"],\"price\":\"799\"},{\"type\":\"6GB+128GB\",\"color\":[\"烟波蓝\", \"暗影黑\",\"月光银\"],\"price\":\"899\"}]'),
(100006, 'Redmi K50 Pro', 2699, '[{ \"src\": \"images/ri_6.webp\", \"alt\": \"small\" },{ \"src\": \"imgs/k50p1.png\", \"alt\": \"details-1\" },{ \"src\": \"imgs/k50p2.png\", \"alt\": \"details-2\" }]', '[{\"type\":\"8GB+128GB\",\"color\":[\"墨羽\", \"银迹\"],\"price\":\"2699\"},{\"type\":\"8GB+256GB\",\"color\":[\"墨羽\", \"银迹\"],\"price\":\"2999\"},{\"type\":\"12GB+256GB\",\"color\":[\"墨羽\", \"银迹\"],\"price\":\"3299\"},{\"type\":\"12GB+512GB\",\"color\":[\"墨羽\", \"银迹\"],\"price\":\"3999\"}]'),
(100007, 'Redmi K40S', 1899, '[{ \"src\": \"images/ri_7.webp\", \"alt\": \"small\" },{ \"src\": \"imgs/k40s1.png\", \"alt\": \"details-1\" },{ \"src\": \"imgs/k40s2.png\", \"alt\": \"details-2\" },{ \"src\": \"imgs/k40s3.png\", \"alt\": \"details-3\" }]', '[{\"type\":\"8GB+128GB\",\"color\":[\"亮黑\", \"银迹\",\"幽芒\",\"幻境\"],\"price\":\"1899\"},{\"type\":\"6GB+128GB\",\"color\":[\"亮黑\", \"银迹\",\"幽芒\",\"幻境\"],\"price\":\"1799\"},{\"type\":\"8GB+256GB\",\"color\":[\"亮黑\", \"银迹\",\"晴雪\"],\"price\":\"2099\"},{\"type\":\"12GB+256GB\",\"color\":[\"亮黑\", \"银迹\",\"晴雪\"],\"price\":\"2199\"}]'),
(100008, 'Redmi K50', 2199, '[{ \"src\": \"images/redmi_k50.webp\", \"alt\": \"small\" },{ \"src\": \"imgs/redmi_d1.png\", \"alt\": \"details-1\" }, { \"src\": \"imgs/redmi_d2.png\", \"alt\": \"details-2\" },{ \"src\": \"imgs/redmi_d3.png\", \"alt\": \"details-3\" },{ \"src\": \"images/phone_1.webp\", \"alt\": \"small\" }]', '[{\"type\":\"8GB+128GB\",\"color\":[\"亮黑\", \"银迹\",\"幽芒\",\"幻境\"],\"price\":\"2199\"},{\"type\":\"8GB+256GB\",\"color\":[\"亮黑\", \"银迹\",\"幽芒\",\"幻境\"],\"price\":\"2399\"},{\"type\":\"12GB+256GB\",\"color\":[\"亮黑\", \"银迹\",\"幽芒\",\"幻境\",\"晴雪\"],\"price\":\"2599\"},{\"type\":\"12GB+512GB\",\"color\":[\"亮黑\", \"银迹\",\"晴雪\"],\"price\":\"2899\"}]\r\n\r\n');

-- --------------------------------------------------------

--
-- 表的结构 `username`
--

CREATE TABLE `username` (
  `id` int(11) NOT NULL COMMENT '用户id',
  `username` varchar(20) COLLATE utf8_unicode_ci NOT NULL COMMENT '名称',
  `password` varchar(16) COLLATE utf8_unicode_ci NOT NULL COMMENT '密码',
  `email` varchar(16) COLLATE utf8_unicode_ci NOT NULL COMMENT '邮箱',
  `address` varchar(16) COLLATE utf8_unicode_ci NOT NULL COMMENT '地址',
  `sex` tinyint(1) NOT NULL COMMENT '性别',
  `phone` bigint(20) NOT NULL COMMENT '手机'
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- 转存表中的数据 `username`
--

INSERT INTO `username` (`id`, `username`, `password`, `email`, `address`, `sex`, `phone`) VALUES
(10001, 'zhangsan', 'wjsd18763187', '156@654165.cn', '杭州', 1, 15888888888),
(10003, '李四', 'sjkdfkj13678', '1561@3153.com', '杭州上城', 1, 15666666666),
(10004, '王五', 'bsjhgdjh185623', 'hjsdgj@lkl.com', '杭州萧山', 1, 15777777777),
(10005, '小明', 'kasjhd1324', 'sdkj@vmnn.cn', '杭州富阳', 1, 15444444444),
(10006, 'China', '123456', 'zxc@qq.com', '....', 1, 15805757402),
(10009, 'aeff', '123456', 'zxc@qq.com', '....', 1, 15805757402);

--
-- 转储表的索引
--

--
-- 表的索引 `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `username`
--
ALTER TABLE `username`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '商品id', AUTO_INCREMENT=100010;

--
-- 使用表AUTO_INCREMENT `username`
--
ALTER TABLE `username`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户id', AUTO_INCREMENT=10010;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
