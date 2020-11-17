DROP TABLE IF EXISTS `permissions`;
CREATE TABLE `permissions` (
`id` varchar(64) NOT NULL,
`created_at` timestamp NULL DEFAULT NULL COMMENT '创建时间',
`modified_at` timestamp NULL DEFAULT NULL COMMENT '更新时间',
`created_by` varchar(64) DEFAULT NULL COMMENT '创建人',
`modified_by` varchar(64) DEFAULT NULL COMMENT '更新人',
`version` int(11) DEFAULT NULL COMMENT '版本（乐观锁）',
`is_delete` char(1) DEFAULT NULL COMMENT '逻辑删除',
`code` varchar(150) NOT NULL COMMENT '编码',
`name` varchar(50) DEFAULT NULL COMMENT '名称',
`title` varchar(50) DEFAULT NULL COMMENT '标题',
`icon` varchar(50) DEFAULT NULL COMMENT '图标',
`uri` varchar(250) DEFAULT NULL COMMENT '路径',
`sort` int(11) DEFAULT NULL COMMENT '排序',
`parent_id` varchar(64) DEFAULT NULL COMMENT '父id',
`type` char(2) DEFAULT NULL COMMENT '类型',
`component_path` varchar(250) DEFAULT NULL COMMENT '组件路径',
`redirect_uri` varchar(250) DEFAULT NULL COMMENT '重定向路径',
`full_screen` char(1) DEFAULT NULL COMMENT '全屏',
`hidden` char(1) DEFAULT NULL COMMENT '隐藏',
`no_cache` char(1) DEFAULT NULL COMMENT '缓存',
PRIMARY KEY (`id`),
UNIQUE KEY `code` (`code`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='资源';
INSERT INTO `permissions` VALUES ('b37f971139ca49ab8c6506d4b30eddb3','2020-11-17 11:43:18','2020-11-17 11:43:18','zeeker','zeeker','1','N','ADMIN-system-principal-create','create','新增',null,null,'1','b9bd920263bb47dbbfbf4c6e47cc087b','BT',null,null,'N','N','N')
;INSERT INTO `permissions` VALUES ('d3bcee30ec03432db9db2da999bb210f','2020-11-17 11:43:18','2020-11-17 11:43:18','zeeker','zeeker','1','N','ADMIN-system-principal-edit','edit','编辑',null,null,'2','b9bd920263bb47dbbfbf4c6e47cc087b','BT',null,null,'N','N','N')
;INSERT INTO `permissions` VALUES ('7c2ce28dcedf439fabc4ae9ad94f6899','2020-11-17 11:43:18','2020-11-17 11:43:18','zeeker','zeeker','1','N','ADMIN-system-principal-delete','delete','删除',null,null,'3','b9bd920263bb47dbbfbf4c6e47cc087b','BT',null,null,'N','N','N')
;INSERT INTO `permissions` VALUES ('bdf4d9e8bf004e40a82b80f0e88c866c','2020-11-17 11:43:18','2020-11-17 11:43:18','zeeker','zeeker','1','N','ADMIN-system-principal-resetPwd','resetPwd','修改密码',null,null,'4','b9bd920263bb47dbbfbf4c6e47cc087b','BT',null,null,'N','N','N')
;INSERT INTO `permissions` VALUES ('ba09f8a270e3420bb8877f8def455f6f','2020-11-17 11:43:18','2020-11-17 11:43:18','zeeker','zeeker','1','N','ADMIN-system-principal-setRole','setRole','选择角色',null,null,'5','b9bd920263bb47dbbfbf4c6e47cc087b','BT',null,null,'N','N','N')
;INSERT INTO `permissions` VALUES ('b9bd920263bb47dbbfbf4c6e47cc087b','2020-11-17 11:43:18','2020-11-17 11:43:18','zeeker','zeeker','1','N','ADMIN-system-principal','principal','用户管理',null,'principal','1','06f1082640a0440b97009d536590cf4f','MN','views/system/principal',null,'N','N','N')
;INSERT INTO `permissions` VALUES ('81c0dca0ed2c455d9e6b6d0c86d24b10','2020-11-17 11:43:18','2020-11-17 11:43:18','zeeker','zeeker','1','N','ADMIN-system-role-create','create','新增',null,null,'1','c47c8ad710774576871739504c6cd2a8','BT',null,null,'N','N','N')
;INSERT INTO `permissions` VALUES ('19a2bf03e6834d3693d69a70e919d55e','2020-11-17 11:43:18','2020-11-17 11:43:18','zeeker','zeeker','1','N','ADMIN-system-role-edit','edit','编辑',null,null,'2','c47c8ad710774576871739504c6cd2a8','BT',null,null,'N','N','N')
;INSERT INTO `permissions` VALUES ('6136cc46c45a47f4b2f20e899308b097','2020-11-17 11:43:18','2020-11-17 11:43:18','zeeker','zeeker','1','N','ADMIN-system-role-delete','delete','删除',null,null,'3','c47c8ad710774576871739504c6cd2a8','BT',null,null,'N','N','N')
;INSERT INTO `permissions` VALUES ('ad5cf52a78b54a1da7c65be74817744b','2020-11-17 11:43:18','2020-11-17 11:43:18','zeeker','zeeker','1','N','ADMIN-system-role-setMenu','setMenu','设置菜单',null,null,'4','c47c8ad710774576871739504c6cd2a8','BT',null,null,'N','N','N')
;INSERT INTO `permissions` VALUES ('c47c8ad710774576871739504c6cd2a8','2020-11-17 11:43:18','2020-11-17 11:43:18','zeeker','zeeker','1','N','ADMIN-system-role','role','角色管理',null,'role','2','06f1082640a0440b97009d536590cf4f','MN','views/system/role',null,'N','N','N')
;INSERT INTO `permissions` VALUES ('d4182147883f48069173b7d173e821dc','2020-11-17 11:43:18','2020-11-17 11:43:18','zeeker','zeeker','1','N','ADMIN-system-resource-create','create','新增',null,null,'1','8b5781640b9b4a5cb28ac616da32636c','BT',null,null,'N','N','N')
;INSERT INTO `permissions` VALUES ('935fcb52fffa45acb2891043ddb37ace','2020-11-17 11:43:18','2020-11-17 11:43:18','zeeker','zeeker','1','N','ADMIN-system-resource-edit','edit','编辑',null,null,'2','8b5781640b9b4a5cb28ac616da32636c','BT',null,null,'N','N','N')
;INSERT INTO `permissions` VALUES ('3f99d47b4bfd402eb3c787ee10633f77','2020-11-17 11:43:18','2020-11-17 11:43:18','zeeker','zeeker','1','N','ADMIN-system-resource-delete','delete','删除',null,null,'3','8b5781640b9b4a5cb28ac616da32636c','BT',null,null,'N','N','N')
;INSERT INTO `permissions` VALUES ('8b5781640b9b4a5cb28ac616da32636c','2020-11-17 11:43:18','2020-11-17 11:43:18','zeeker','zeeker','1','N','ADMIN-system-resource','resource','资源管理',null,'resource','3','06f1082640a0440b97009d536590cf4f','MN','views/system/resource',null,'N','N','N')
;INSERT INTO `permissions` VALUES ('06f1082640a0440b97009d536590cf4f','2020-11-17 11:43:18','2020-11-17 11:43:18','zeeker','zeeker','1','N','ADMIN-system','system','系统管理','el-icon-setting','/system','1','00b82eb6e50a45a495df301b0a3cde8b','MN','modules/Layout',null,'N','N','N')
;INSERT INTO `permissions` VALUES ('00b82eb6e50a45a495df301b0a3cde8b','2020-11-17 11:43:18','2020-11-17 11:43:18','zeeker','zeeker','1','N','ADMIN','ADMIN','SV ADMIN',null,null,'1','0','MD',null,null,'N','N','N')
;INSERT INTO `permissions` VALUES ('eb5370681213412d8541d171e9929c84','2020-11-17 11:43:18','2020-11-17 11:43:18','zeeker','zeeker','1','N','HMI-001','001','启动检测',null,null,'1','fc8194b529fa4e87b454f970a2e71899',null,null,null,'N','N','N')
;INSERT INTO `permissions` VALUES ('06eb36e7224043ddbb591eb4d688f438','2020-11-17 11:43:18','2020-11-17 11:43:18','zeeker','zeeker','1','N','HMI-002','002','设备信息',null,null,'2','fc8194b529fa4e87b454f970a2e71899',null,null,null,'N','N','N')
;INSERT INTO `permissions` VALUES ('76696598fd46432aa19d413bc15b5110','2020-11-17 11:43:18','2020-11-17 11:43:18','zeeker','zeeker','1','N','HMI-003','003','AI模型库',null,null,'3','fc8194b529fa4e87b454f970a2e71899',null,null,null,'N','N','N')
;INSERT INTO `permissions` VALUES ('2896f3861d9e4506af8120d6fcb59ee1','2020-11-17 11:43:18','2020-11-17 11:43:18','zeeker','zeeker','1','N','HMI-004','004','保养维修',null,null,'4','fc8194b529fa4e87b454f970a2e71899',null,null,null,'N','N','N')
;INSERT INTO `permissions` VALUES ('91825c6d7d7a457ebd70bfdc9a3a2d81','2020-11-17 11:43:18','2020-11-17 11:43:18','zeeker','zeeker','1','N','HMI-005','005','继续',null,null,'5','fc8194b529fa4e87b454f970a2e71899',null,null,null,'N','N','N')
;INSERT INTO `permissions` VALUES ('24694d28b2c943c88487f6e44e7db626','2020-11-17 11:43:18','2020-11-17 11:43:18','zeeker','zeeker','1','N','HMI-006','006','暂停',null,null,'6','fc8194b529fa4e87b454f970a2e71899',null,null,null,'N','N','N')
;INSERT INTO `permissions` VALUES ('225387753cf24781bb7c853ee538d087','2020-11-17 11:43:18','2020-11-17 11:43:18','zeeker','zeeker','1','N','HMI-007','007','结束',null,null,'7','fc8194b529fa4e87b454f970a2e71899',null,null,null,'N','N','N')
;INSERT INTO `permissions` VALUES ('fc8194b529fa4e87b454f970a2e71899','2020-11-17 11:43:18','2020-11-17 11:43:18','zeeker','zeeker','1','N','HMI','HMI','SV HMI',null,null,'2','0','MD',null,null,'N','N','N')
