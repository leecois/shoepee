-- drop database shoepee

-- use shoePee;
-- create table tblUserRole(
--     roleId int primary key auto_increment,
--     roleName varchar(50)
-- );



-- create table tblBrand(
--     brandId int primary key auto_increment,
--     brandName nvarchar(255)
-- );


-- create table tblShopLocation(
--     locationId int primary key auto_increment,
--     locationName nvarchar(255),
--     address nvarchar(255),
--     phone varchar(50),
--     email varchar(255),
--     workingHour time
-- );



-- create table tblUSER(
--     userId int primary key auto_increment,
--     userName nvarchar(100),
--     password varchar(100),
--     email varchar(255),
--     address varchar(1000),
--     phone varchar(50),
--     roleId int,
--     foreign key(roleId) references tblUserRole(roleId)
-- );





-- create table tblOrder(
--     orderId int primary key auto_increment,
--     userId int,
--     orderDate varchar(255),
--     status bit,
--     locationId int,
--     totalPrice decimal(10,2),
--     foreign key(userId) references tblUSER(userId),
--     foreign key(locationId) references tblShopLocation(locationId)
-- );



-- create table tblOrderDetail(
--     orderDetailId int primary key auto_increment,
--     orderId int,
--     quantity int,
--     unitPrice decimal(10,2),
--     subtotal decimal(10,2),
--     foreign key(orderId) references tblOrder(orderId)
-- );


-- create table tblService(
--     serviceId int primary key auto_increment,
--     name nvarchar(100),
--     description nvarchar(1000),
--     price decimal(10,2)
-- );
-- create table tblshoeModel(
--     modelId int primary key auto_increment,
--     brandId int,
--     modelName nvarchar(255),
--     foreign key(brandId) references tblBrand(brandId)
-- );

-- create table tblShoe(
--     shoeId int primary key auto_increment,
--     brandId int,
--     modelId int,
--     size int,
--     price decimal(10,2),
--     stockQuantity int,
--     description nvarchar(1000),
--     imageUrl varchar(1000),
--     orderId int,
--     foreign key(orderId) references tblOrder(orderId),
-- 	foreign key(modelId) references tblshoeModel(modelId)
-- );

-- create table tblServiceModel(
--     serviceModelId int primary key auto_increment,
--     serviceId int,
--     modelId int,
--     price decimal(10,2),
--     orderDetailId int,
--     foreign key(orderDetailId) references tblOrderDetail(orderDetailId),
--     foreign key(serviceId) references tblService(serviceId),
--     foreign key(modelId) references tblshoeModel(modelId)
-- );
-- create table tblUserDrawing(
--     id int primary key auto_increment,
--     userId int,
--     drawingFile varchar(1000),
--     description nvarchar(1000),
--     orderDetailId int,
--     foreign key(userId) references tblUSER(userId),
--     foreign key(orderDetailId) references tblOrderDetail(orderDetailId)
-- );
-- create table tblPayment(
--     paymentId int primary key auto_increment,
--     orderId int,
--     amount int,
--     paymentDate datetime,
--     method varchar(255),
--     status varchar(255),
--     foreign key(orderId) references tblOrder(orderId)
-- );
-- INSERT INTO tblUserRole (roleName) VALUES ('USER');
-- INSERT INTO tblUserRole (roleName) VALUES ('ADMIN');
-- INSERT INTO tblBrand (brandName) VALUES ('ADIDAS');
-- INSERT INTO tblBrand (brandName) VALUES ('NIKE');
-- INSERT INTO tblShopLocation (locationName,address,phone,email,workingHour) VALUES ('thu duc','le van viet','0987654321','shop1@gmail.com','9:00');
-- INSERT INTO tblShopLocation (locationName,address,phone,email,workingHour) VALUES ('go vap','phan van tri','0787654321','shop2@gmail.com','9:00');
-- INSERT INTO tblUSER (userName,password,email,address,phone,roleId) VALUES ('minhchan','1','minh123@gmail.com','S702 vin','0123456789','2');
-- INSERT INTO tblUSER (userName,password,email,address,phone,roleId) VALUES ('anxem','2','an123@gmail.com','le van viet','0123456780','1');
-- INSERT INTO tblOrder (userId,orderDate,status,locationId,totalPrice) VALUES (2,'10/7/2023',1,2,'1000');
-- INSERT INTO tblOrder (userId,orderDate,status,locationId,totalPrice) VALUES (2,'9/16/2023',1,2,'400');
-- INSERT INTO tblOrderDetail (orderId,quantity,unitPrice,subtotal) VALUES (1,4,'200','1500');
-- select * from tbluser

-- tblorderdetailtbluseruserId
create database shoePee;
use shoePee;
create table tblUserRole(
                            roleId int primary key auto_increment,
                            roleName varchar(50)
);



create table tblBrand(
                         brandId int primary key auto_increment,
                         brandName nvarchar(255),
                         imageUrl varchar(1000)
);


create table tblShopLocation(
                                locationId int primary key auto_increment,
                                locationName nvarchar(255),
                                address nvarchar(255),
                                phone varchar(50),
                                email varchar(255),
                                workingHour time
);



create table tblUSER(
                        userId int primary key auto_increment,
                        userName nvarchar(100),
                        password varchar(100),
                        email varchar(255),
                        address varchar(1000),
                        phone varchar(50),
                        roleId int,
                        roleName varchar(50),
                        foreign key(roleId) references tblUserRole(roleId)
);

create table tblOrder(
                         orderId int primary key auto_increment,
                         userId int,
                         orderDate varchar(255),
                         status bit,
                         locationId int,
                         totalPrice decimal(10,2),
                         foreign key(userId) references tblUSER(userId),
                         foreign key(locationId) references tblShopLocation(locationId)
);



create table tblOrderDetail(
                               orderDetailId int primary key auto_increment,
                               orderId int,
                               quantity int,
                               unitPrice decimal(10,2),
                               subtotal decimal(10,2),
                               foreign key(orderId) references tblOrder(orderId)
);


create table tblService(
                           serviceId int primary key auto_increment,
                           name nvarchar(100),
                           description nvarchar(1000),
                           price decimal(10,2)
);


create table tblshoeModel(
                             modelId int primary key auto_increment,
                             brandId int,
                             modelName nvarchar(255),
                             imageurl varchar(1000),
                             foreign key(brandId) references tblBrand(brandId)
);


create table tblShoe(
                        shoeId int primary key auto_increment,
                        brandId int,
                        modelId int,
                        size int,
                        price decimal(10,2),
                        description nvarchar(1000),
                        imageUrl varchar(1000),
                        orderId int,
                        foreign key(orderId) references tblOrder(orderId),
                        foreign key(modelId) references tblshoeModel(modelId)
);


create table tblServiceModel(
                                serviceModelId int primary key auto_increment,
                                serviceId int,
                                modelId int,
                                price decimal(10,2),
                                orderDetailId int,
                                imageModel varchar(1000),
                                foreign key(orderDetailId) references tblOrderDetail(orderDetailId),
                                foreign key(serviceId) references tblService(serviceId),
                                foreign key(modelId) references tblshoeModel(modelId)
);


create table tblUserDrawing(
                               id int primary key auto_increment,
                               userId int,
                               drawingFile varchar(1000),
                               description nvarchar(1000),
                               orderDetailId int,
                               foreign key(userId) references tblUSER(userId),
                               foreign key(orderDetailId) references tblOrderDetail(orderDetailId)
);


create table tblPayment(
                           paymentId int primary key auto_increment,
                           orderId int,
                           amount int,
                           paymentDate datetime,
                           method varchar(255),
                           status varchar(255),
                           foreign key(orderId) references tblOrder(orderId)
);


INSERT INTO tblUserRole (roleName) VALUES ('USER');
INSERT INTO tblUserRole (roleName) VALUES ('ADMIN');
INSERT INTO tblBrand (brandName) VALUES ('ADIDAS');
INSERT INTO tblBrand (brandName) VALUES ('NIKE');
INSERT INTO tblShopLocation (locationName,address,phone,email,workingHour) VALUES ('thu duc','le van viet','0987654321','shop1@gmail.com','9:00');
INSERT INTO tblShopLocation (locationName,address,phone,email,workingHour) VALUES ('go vap','phan van tri','0787654321','shop2@gmail.com','9:00');
INSERT INTO tblUSER (userName,password,email,address,phone,roleId,roleName) VALUES ('minhchan','1','minh123@gmail.com','S702 vin','0123456789','2','Admin');
INSERT INTO tblUSER (userName,password,email,address,phone,roleId,roleName) VALUES ('anxem','2','an123@gmail.com','le van viet','0123456780','1','User');
INSERT INTO tblOrder (userId,orderDate,status,locationId,totalPrice) VALUES (2,'10/7/2023',1,2,'1000');
INSERT INTO tblOrder (userId,orderDate,status,locationId,totalPrice) VALUES (2,'9/16/2023',1,2,'400');
INSERT INTO tblOrderDetail (orderId,quantity,unitPrice,subtotal) VALUES (1,4,'200','1500');
INSERT INTO tblOrderDetail (orderId,quantity,unitPrice,subtotal) VALUES (2,4,'300','1300');
INSERT INTO tblService (name,description,price) VALUES ('custom','stickers,','25');
INSERT INTO tblshoeModel (brandId,modelName) VALUES (1,'UltraBoost');
INSERT INTO tblshoeModel (brandId,modelName) VALUES (2,'Air Force 1');
INSERT INTO tblShoe (brandId,modelId,size,price,description,imageUrl,orderId)
VALUES (1,1,42,'99','A shoe has flexible','https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4f225a0bbc3e43729858af0100006731_9366/Giay_Ultraboost_1.0_trang_HQ4207_01_standard.jpg',1);
INSERT INTO tblServiceModel (serviceId,modelId,price,orderDetailId)
VALUES (1,1,'15',2);
INSERT INTO tblUserDrawing (userId,drawingFile,description,orderDetailId)
VALUES (1,'good','best of store',1);
INSERT INTO tblPayment (orderId,amount,paymentDate,method,status)
VALUES (1,1,'2022-10-10','paint','done');
select * from tbluser	