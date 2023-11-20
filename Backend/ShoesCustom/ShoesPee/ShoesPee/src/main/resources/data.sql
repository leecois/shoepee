# # drop database shoepee;
# # create database shoepee;
# # use shoepee;
# #
# #
# # create table tblbrand
# # (
# #     brandid int primary key auto_increment,
# #     brandname nvarchar(255),
# #     imageurl varchar(1000)
# # );
# #
# #
# # create table tblshoplocation
# # (
# #     locationid int primary key auto_increment,
# #     locationname nvarchar(255),
# #     address nvarchar(255),
# #     phone varchar(50),
# #     email varchar(255),
# #     workinghour time
# # );
# #
# #
# #
# # create table tbluser
# # (
# #     userid int primary key auto_increment,
# #     username nvarchar(100),
# #     password varchar(100),
# #     email varchar(255)
# # );
# #
# # create table tblinforuser (
# #                               id int primary key auto_increment,
# #                               fullname nvarchar(100),
# #                               address varchar(1000),
# #                               phone varchar(50),
# #                               foreign key(id) references tbluser (userid)
# # );
# #
# # create table tblorder
# # (
# #     orderid int primary key auto_increment,
# #     userid int,
# #     orderdate varchar(255),
# #     status bit,
# #     locationid int,
# #     totalprice decimal(10,2),
# #     foreign key(userid) references tbluser (userid),
# #     foreign key(locationid) references tblshoplocation(locationid)
# # );
# #
# #
# #
# # create table tblorderdetail(
# #                                orderdetailid int primary key auto_increment,
# #                                orderid int,
# #                                quantity int,
# #                                unitprice decimal(10,2),
# #                                subtotal decimal(10,2),
# #                                foreign key(orderid) references tblorder (orderid)
# # );
# #
# #
# # create table tblservice(
# #                            serviceid int primary key auto_increment,
# #                            name nvarchar(100),
# #                            description nvarchar(1000),
# #                            price decimal(10,2)
# # );
# #
# #
# # create table tblshoemodel(
# #                              modelid int primary key auto_increment,
# #                              brandid int,
# #                              price decimal(10,2),
# #                              modelname nvarchar(255),
# #                              imageurl varchar(1000),
# #                              foreign key(brandid) references tblbrand (brandid)
# # );
# #
# #
# # create table tblshoe(
# #                         shoeid int primary key auto_increment,
# #                         modelid int,
# #                         price decimal(10,2),
# #                         description nvarchar(1000),
# #                         imageurl varchar(1000),
# #                         foreign key(modelid) references tblshoemodel(modelid)
# # );
# #
# #
# # create table tblservicemodel(
# #                                 servicemodelid int primary key auto_increment,
# #                                 serviceid int,
# #                                 modelid int,
# #                                 price decimal(10,2),
# #                                 orderDetailid int,
# #                                 imagemodel varchar(1000),
# #                                 foreign key(orderdetailid) references tblorderdetail(orderdetailid),
# #                                 foreign key(serviceid) references tblservice(serviceid),
# #                                 foreign key(modelid) references tblshoemodel(modelid)
# # );
# #
# #
# #
# # create table tblpayment(
# #                            paymentid int primary key auto_increment,
# #                            orderid int,
# #                            amount int,
# #                            paymentdate datetime,
# #                            method varchar(255),
# #                            status varchar(255),
# #                            foreign key(orderid) references tblorder (orderid)
# # );
# #
# # create table tblimage(
# #
# #                          iamgeid int primary key auto_increment,
# #                          imageurl varchar(5000),
# #                          shoeid int,
# #                          foreign key(shoeid) references tblshoe (shoeid)
# # );
# #
# # create table tblsize (
# #                          sizeid int primary key auto_increment,
# #                          size int
# # );
# #
# #
# # #SIZE
# #
# # INSERT INTO tblsize (size) VALUES (28);
# # INSERT INTO tblsize (size) VALUES (29);
# # INSERT INTO tblsize (size) VALUES (30);
# # INSERT INTO tblsize (size) VALUES (31);
# # INSERT INTO tblsize (size) VALUES (32);
# # INSERT INTO tblsize (size) VALUES (33);
# # INSERT INTO tblsize (size) VALUES (34);
# # INSERT INTO tblsize (size) VALUES (35);
# # INSERT INTO tblsize (size) VALUES (36);
# # INSERT INTO tblsize (size) VALUES (37);
# #
# #
# #
# # INSERT INTO tblbrand (brandname,imageurl) VALUES ('ADIDAS','https://assets.adidas.com/images/w_600,f_auto,q_auto/2535f3464914497aaa27ae9200f84ead_9366/Giay_Grand_Court_Cloudfoam_Lifestyle_Court_Comfort_trang_GW9214_01_standard.jpg');
# # INSERT INTO tblbrand (brandname,imageurl) VALUES ('NIKE','https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-customizedShoes-WrLlWX.png');
# # INSERT INTO tblbrand (brandname,imageurl) VALUES ('MLB','https://bizweb.dktcdn.net/100/413/756/products/giay-mlb-chunky-liner-low-new-york-yankees-ivory-3asxca12n-50ivs-1-98ec97352e294a39b9853a22079fb39e-master.jpg?v=1678768537200');
# # INSERT INTO tblbrand (brandname,imageurl) VALUES ('VANS','https://bizweb.dktcdn.net/thumb/1024x1024/100/140/774/products/vans-old-skool-black-white-vn000d3hy28-1.jpg');
# # INSERT INTO tblbrand (brandname,imageurl) VALUES ('New Balance','https://supersports.com.vn/cdn/shop/products/ML574EVG-1.jpg?v=1673511691');
# #
# #
# #
# #
# # #SHOEMODEL
# # ## ADIDAS
# # INSERT INTO tblshoemodel (brandid,price,modelname,imageurl) VALUES (1,1.999,'STAN SMITH','https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b47d77eba6f945ea8dabac210127b11e_9366/Giay_Stan_Smith_trang_FX5501_01_standard.jpg');
# # INSERT INTO tblshoemodel (brandid,price,modelname,imageurl) VALUES (1,1.999,'SUPER STAR','https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7ed0855435194229a525aad6009a0497_9366/Giay_Superstar_trang_EG4958_01_standard.jpg');
# # INSERT INTO tblshoemodel (brandid,price,modelname,imageurl) VALUES (1,1.999,'NMD','https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/52f6f689607048ad9831ae700009af3d_9366/Giay_NMD_360_DJen_GY9147_01_standard.jpg');
# #
# #
# # ## NIKE
# # INSERT INTO tblshoemodel (brandid,price,modelname,imageurl) VALUES (2,1.999,'Nike Air Force 1','https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-customizedShoes-WrLlWX.png');
# # INSERT INTO tblshoemodel (brandid,price,modelname,imageurl) VALUES (2,1.999,'Nike Air Max','https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/2aeba6e4-5058-453d-af76-008f38c2ac41/air-max-1-premium-customizedShoes-QBdDK8.png');
# # INSERT INTO tblshoemodel (brandid,price,modelname,imageurl) VALUES (2,1.999,'Blazer','https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/fb7eda3c-5ac8-4d05-a18f-1c2c5e82e36e/blazer-mid-77-vintage-customizedShoes-dNWPTj.png');
# # INSERT INTO tblshoemodel (brandid,price,modelname,imageurl) VALUES (2,1.999,'Cortez','https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/np029vozcemdcdmebpwm/classic-cortez-customizedShoe-8p3Qjt.png');
# #
# # ## MLB
# # INSERT INTO tblshoemodel (brandid,price,modelname,imageurl) VALUES (3,1.999,'PLAYBALL','https://product.hstatic.net/200000384787/product/giay_mlb_bigball_chunky_a_new_york_yankees_beige_3ashc101n-50bgs__1__b2207921661f4fe2bc798894c4f5bb2a_master.jpg');
# # INSERT INTO tblshoemodel (brandid,price,modelname,imageurl) VALUES (3,1.999,'Mules','https://sneakerholicvietnam.vn/wp-content/uploads/2021/06/mlb-big-ball-chunky-boston-32SHC2911-43I.jpg');
# # INSERT INTO tblshoemodel (brandid,price,modelname,imageurl) VALUES (3,1.999,'Chunky','https://bizweb.dktcdn.net/100/423/558/products/mlb-3.jpg?v=1659335545760');
# #
# # ## Vans
# #
# # INSERT INTO tblshoemodel (brandid,price,modelname,imageurl) VALUES (4,1.999,'VANS CLASSIC','https://images.vans.com/is/image/Vans/VN000EE3_BLK_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
# # INSERT INTO tblshoemodel (brandid,price,modelname,imageurl) VALUES (4,1.999,'VANS Knu Skool','https://images.vans.com/is/image/Vans/VN0009QC_6BT_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
# # INSERT INTO tblshoemodel (brandid,price,modelname,imageurl) VALUES (4,1.999,'VANS OLD SKOOL','https://bizweb.dktcdn.net/100/140/774/products/vans-old-skool-black-white-vn000d3hy28-2.jpg?v=1625905148527');
# # INSERT INTO tblshoemodel (brandid,price,modelname,imageurl) VALUES (4,1.999,'VANS UltraRange ','https://images.vans.com/is/image/Vans/VN0A4U1K_BLK_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
# #
# # ## New Balance
# # INSERT INTO tblshoemodel (brandid,price,modelname,imageurl) VALUES (5,1.999,'Fresh Foam X','https://nb.scene7.com/is/image/NB/m1080i13_nb_02_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880');
# # INSERT INTO tblshoemodel (brandid,price,modelname,imageurl) VALUES (5,1.999,'Made in USA 990v6','https://nb.scene7.com/is/image/NB/m990nv6_nb_02_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880');
# #
# #
# # # Shoe
# # ## ADIDAS
# # ### Stan smith
# # INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (1,2.600,'This product is made with vegan alternatives to animal-derived ingredients or materials. It is also made with Primegreen, a series of high-performance recycled materials. 50% of upper is recycled content. No virgin polyester.','https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b47d77eba6f945ea8dabac210127b11e_9366/Giay_Stan_Smith_trang_FX5501_01_standard.jpg');
# # INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (1,2.600,'This product is made with vegan alternatives to animal-derived ingredients or materials. It is also made with Primegreen, a series of high-performance recycled materials. 50% of upper is recycled content. No virgin polyester.','https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b47d77eba6f945ea8dabac210127b11e_9366/Stan_Smith_Shoes_White_FX5501_01_standard.jpg');
# # INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (1,2.600,'This product is made with vegan alternatives to animal-derived ingredients or materials. It is also made with Primegreen, a series of high-performance recycled materials. 50% of upper is recycled content. No virgin polyester.','https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4cf7720ac5a7420591148d75b2f3f592_9366/Stan_Smith_Shoes_White_ID2031_01_standard.jpg');
# # INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (1,2.600,'This product is made with vegan alternatives to animal-derived ingredients or materials. It is also made with Primegreen, a series of high-performance recycled materials. 50% of upper is recycled content. No virgin polyester.','https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a41ae84d535e4d9d8f2cf641b387f77e_9366/Stan_Smith_Shoes_White_ID2032_01_standard.jpg');
# #
# # ### SUPER STAR
# # INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (2,2.600,'Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court. The serrated 3-Stripes mark, iconic shell style toe, and box logo makes this one of the true Originals.','https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7ed0855435194229a525aad6009a0497_9366/Giay_Superstar_trang_EG4958_01_standard.jpg');
# # INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (2,2.600,'Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court. The serrated 3-Stripes mark, iconic shell style toe, and box logo makes this one of the true Originals.','https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/15f901c90a9549d29104aae700d27efb_9366/Superstar_Shoes_Black_EG4959_01_standard.jpg');
# # INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (2,2.600,'Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court. The serrated 3-Stripes mark, iconic shell style toe, and box logo makes this one of the true Originals.','https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9ef861e1b233457e80a461a9bae38ec1_9366/Superstar_Shoes_Burgundy_IF8071_01_standard.jpg');
# # INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (2,2.600,'Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court. The serrated 3-Stripes mark, iconic shell style toe, and box logo makes this one of the true Originals.','https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/46743c5abef5415a99616af9704aaf76_9366/Superstar_Shoes_Green_IF8072_01_standard.jpg');
# #
# # ### NMD
# # INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (3,2.600,'This customizedShoes upper is made with a high-performance yarn which contains at least 50% Parley Ocean Plastic — reimagined plastic waste, intercepted on remote islands, beaches, coastal communities and shorelines, preventing it from polluting our ocean. The other 50% of the yarn is recycled polyester.','https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/030e1916d6d64713b0a9af1e00c3aab4_9366/NMD_S1_Shoes_White_GW4652_01_standard.jpg');
# # INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (3,2.600,'This customizedShoes upper is made with a high-performance yarn which contains at least 50% Parley Ocean Plastic — reimagined plastic waste, intercepted on remote islands, beaches, coastal communities and shorelines, preventing it from polluting our ocean. The other 50% of the yarn is recycled polyester.','https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6b2d4eb761694fdcb6ffaf8c00d21558_9366/NMD_S1_Shoes_Turquoise_HQ4437_01_standard.jpg');
# # INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (3,2.600,'This customizedShoes upper is made with a high-performance yarn which contains at least 50% Parley Ocean Plastic — reimagined plastic waste, intercepted on remote islands, beaches, coastal communities and shorelines, preventing it from polluting our ocean. The other 50% of the yarn is recycled polyester.','https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6e1a01ee20b5422b98a9af8c00d27073_9366/NMD_S1_Shoes_Beige_HQ4439_01_standard.jpg');
# # INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (3,2.600,'This customizedShoes upper is made with a high-performance yarn which contains at least 50% Parley Ocean Plastic — reimagined plastic waste, intercepted on remote islands, beaches, coastal communities and shorelines, preventing it from polluting our ocean. The other 50% of the yarn is recycled polyester.','https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e45e26f7f6be45b28ff9af8c00d33127_9366/NMD_S1_Shoes_Blue_HQ4468_01_standard.jpg');
# #
# # ## NIKE
# # ### NIKE AIR FORCE 1
# # INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (4,2.600,'Classic and comfortable, you will want to wear these AF-1s time after time. Smooth suede and a plush collar give these kicks a premium feel, while the gum sole adds a retro look. Of course, some things never change: Nike Air units still cushion your every step.','https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/cb1732aa-9f69-4b01-b77c-1da2a20a0729/air-force-1-07-customizedShoes-cWFrxr.png');
# # INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (4,2.600,'Classic and comfortable, you will want to wear these AF-1s time after time. Smooth suede and a plush collar give these kicks a premium feel, while the gum sole adds a retro look. Of course, some things never change: Nike Air units still cushion your every step.','https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/416e1d81-a6ed-4401-93d1-e5e26ea37a8d/air-force-1-07-customizedShoes-CMNWtG.png');
# # INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (4,2.600,'Classic and comfortable, you will want to wear these AF-1s time after time. Smooth suede and a plush collar give these kicks a premium feel, while the gum sole adds a retro look. Of course, some things never change: Nike Air units still cushion your every step.','https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9586f004-25c7-4e72-bef9-6492f6491a4b/air-force-1-07-wb-customizedShoe-j46FxX.png');
# # INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (4,2.600,'Classic and comfortable, you will want to wear these AF-1s time after time. Smooth suede and a plush collar give these kicks a premium feel, while the gum sole adds a retro look. Of course, some things never change: Nike Air units still cushion your every step.','https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fa7c385b-0f6d-4bd9-8a0f-6038d8d8a355/air-force-1-07-customizedShoes-VWCc04.png');
# #
# #
# # ### NIKE AIR MAX
# # INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (5,2.600,'The AM97 was the shapeshifter of its time, and it is your turn to do the same. Customise every part of the customizedShoe from upper materials to the colours of the midsole and Nike Air unit, plus non-slip laces to secure the fit. Then, decide whether you want your outsole solid, tinted or translucent. There is even an upgraded insole for extra cushioning underfoot. Finally, a customizedShoe as multifaceted as you.','https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/14de6943-8c87-4b9b-9585-80dea96a70d3/air-max-97-customizedShoes-EBZrb8.png');
# # INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (5,2.600,'The AM97 was the shapeshifter of its time, and it is your turn to do the same. Customise every part of the customizedShoe from upper materials to the colours of the midsole and Nike Air unit, plus non-slip laces to secure the fit. Then, decide whether you want your outsole solid, tinted or translucent. There is even an upgraded insole for extra cushioning underfoot. Finally, a customizedShoe as multifaceted as you.','https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1464bd95-4121-4b07-af49-dfbddff7a460/air-max-97-customizedShoes-EBZrb8.png');
# # INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (5,2.600,'The AM97 was the shapeshifter of its time, and it is your turn to do the same. Customise every part of the customizedShoe from upper materials to the colours of the midsole and Nike Air unit, plus non-slip laces to secure the fit. Then, decide whether you want your outsole solid, tinted or translucent. There is even an upgraded insole for extra cushioning underfoot. Finally, a customizedShoe as multifaceted as you.','https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/6a3671b8-f115-44f6-9ab6-3798d55210eb/custom-nike-air-max-97-customizedShoes-by-you.png');
# # INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (5,2.600,'The AM97 was the shapeshifter of its time, and it is your turn to do the same. Customise every part of the customizedShoe from upper materials to the colours of the midsole and Nike Air unit, plus non-slip laces to secure the fit. Then, decide whether you want your outsole solid, tinted or translucent. There is even an upgraded insole for extra cushioning underfoot. Finally, a customizedShoe as multifaceted as you.','https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/cc11861c-e016-4925-a669-a9f8aa6ee356/custom-nike-air-max-97-customizedShoes-by-you.png');
# # INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (5,2.600,'The AM97 was the shapeshifter of its time, and it is your turn to do the same. Customise every part of the customizedShoe from upper materials to the colours of the midsole and Nike Air unit, plus non-slip laces to secure the fit. Then, decide whether you want your outsole solid, tinted or translucent. There is even an upgraded insole for extra cushioning underfoot. Finally, a customizedShoe as multifaceted as you.','https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/6b6ac8ce-2527-4849-ab3e-d4ce990bef79/custom-nike-air-max-97-customizedShoes-by-you.png');
# #
# # ### BLAZER
# # INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (6,2.600,'Praised by the streets for its classic simplicity and comfort, the Nike Blazer Low 77 Vintage returns with its low-profile style and heritage b-ball looks. Featuring luscious suede details, a retro Swoosh design and a super-soft collar, it is the must-have wardrobe staple that will take you everywhere.','https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3dbd02fc-6c4d-419f-b706-8293ed200d14/blazer-low-77-vintage-customizedShoes-5Gw9TZ.png');
# # INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (6,2.600,'Praised by the streets for its classic simplicity and comfort, the Nike Blazer Low 77 Vintage returns with its low-profile style and heritage b-ball looks. Featuring luscious suede details, a retro Swoosh design and a super-soft collar, it is the must-have wardrobe staple that will take you everywhere.','https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fca59736-ff84-4797-9e64-0978d3b43731/blazer-low-77-vintage-customizedShoes-5Gw9TZ.png');
# # INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (6,2.600,'Praised by the streets for its classic simplicity and comfort, the Nike Blazer Low 77 Vintage returns with its low-profile style and heritage b-ball looks. Featuring luscious suede details, a retro Swoosh design and a super-soft collar, it is the must-have wardrobe staple that will take you everywhere.','https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8371a7ff-046d-4d7c-a89c-4d84434b2d42/blazer-low-77-vintage-customizedShoes-5Gw9TZ.png');
# #
# #
# # ### CORTEZ
# # INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (7,2.600,'One word: tradition. From heritage running to fashion phenom, its retro appeal, sponge-soft midsole and see-saw detailing deliver decade after decade. This iteration offers easy-to-style colours with a vintage vibe.','https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e4acbdf1-367b-4412-8820-8f2a41d16da7/cortez-customizedShoes-svdKM9.png');
# # INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (7,2.600,'One word: tradition. From heritage running to fashion phenom, its retro appeal, sponge-soft midsole and see-saw detailing deliver decade after decade. This iteration offers easy-to-style colours with a vintage vibe.','https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/82b7bb9c-451e-43e4-a1fa-408ec0072888/cortez-customizedShoes-svdKM9.png');
# # INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (7,2.600,'One word: tradition. From heritage running to fashion phenom, its retro appeal, sponge-soft midsole and see-saw detailing deliver decade after decade. This iteration offers easy-to-style colours with a vintage vibe.','https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/02148fc1-9fb7-4df1-ab6d-2d696e9da039/cortez-customizedShoes-svdKM9.png');
# #
# # ## MLB
# # ### MULE
# # INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (9,2.600,'The MLB Mule is a new design heel customizedShoe. It is creating a trend in the community and is favored by young people. Young dynamic customizedShoes, suitable for all times and many different uses.','https://product.hstatic.net/200000642007/product/50t_32shs1111_1_e1620526925a4f2ea846504f60990f3e_bd451ae3d35c46baa6d88b04fef562a6_master.jpg');
# # INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (9,2.600,'The MLB Mule is a new design heel customizedShoe. It is creating a trend in the community and is favored by young people. Young dynamic customizedShoes, suitable for all times and many different uses.','https://product.hstatic.net/200000642007/product/50l_32shs1111_1_45793aa1b8064f5f9221d9847dc3f662_900546c43cea427c9f0036f73834da02_master.jpg');
# # INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (9,2.600,'The MLB Mule is a new design heel customizedShoe. It is creating a trend in the community and is favored by young people. Young dynamic customizedShoes, suitable for all times and many different uses.','https://product.hstatic.net/200000642007/product/07v_32shs1111_1_5d23cd7c12f1402dab24aca350624d45_7dd11016a95f4ef9abaef36ca3e0d162_master.jpg');
# # INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (9,2.600,'The MLB Mule is a new design heel customizedShoe. It is creating a trend in the community and is favored by young people. Young dynamic customizedShoes, suitable for all times and many different uses.','https://product.hstatic.net/200000642007/product/07s_32shs1111_1_aeb6eb105a194cf8a876ffae4b376ed8_ef638ee652af4860a52fe74974cdab8d_master.jpg');
# #
# # ### PLAYBALL
# # INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (8,2.600,'...','https://product.hstatic.net/200000642007/product/07ivs_3acvppr3n_1_b6cce9e680fc40d6a1a212702c6b6a43_684ecc99eb134846971207b2a5a24a27.jpg');
# # INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (8,2.600,'...','https://product.hstatic.net/200000642007/product/50bks_3acvppr3n_1_6675b4850c6a4fa49758fbb4cff563e0_23b472a47b5b4c1789097b2c0af93a0d_master.jpg');
# #
# # ### Chunky
# # INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (10,2.600,'...','https://product.hstatic.net/200000642007/product/50bks_3asxam82n_1_36a253345e994545a7ff20d44f17fa34_02092633535b4c6294a1e617a181d8c8_master.jpg');
# # INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (10,2.600,'...','https://product.hstatic.net/200000642007/product/07bld_3asxxa12n_1_eb3c021e5d3545bc89130276a32a6645_44ee0fbb8b124cb2b9082a2bc484eef7_master.jpg');
# # INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (10,2.600,'...','https://product.hstatic.net/200000642007/product/50ivs_3asxccb3n_1_491eab2f9a844a458dadb2f8d583f0c1_8d34d841567e4c82ad81be93c333ce14_master.jpg');
# #
# #
# # ## VANS
# # ### VANS CLASSIC
# # INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (11,2.600,'','https://bizweb.dktcdn.net/thumb/small/100/140/774/products/vans-authentic-classic-black-vn000ee3blk-1.png?v=1625925617317');
# # INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (11,2.600,'','https://images.vans.com/is/image/Vans/VN000EYE_BWW_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
# # INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (11,2.600,'','https://images.vans.com/is/image/Vans/VN000BVZ_C9I_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
# # INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (11,2.600,'','https://images.vans.com/is/image/Vans/VN000EYE_BPJ_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
# #
# # ### VANS Knu Skool
# # INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (12,2.600,'The Knu Skool is a modern interpretation of a classic 90s style, defined by its puffed up tongue and 3D-molded Sidestripe, and tied off with oversized, chunky laces. With its in-your-face profile, color pop accents, and dramatic style details','https://images.vans.com/is/image/Vans/VN0009QC_BKA_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
# # INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (12,2.600,'The Knu Skool is a modern interpretation of a classic 90s style, defined by its puffed up tongue and 3D-molded Sidestripe, and tied off with oversized, chunky laces. With its in-your-face profile, color pop accents, and dramatic style details','https://images.vans.com/is/image/Vans/VN0009QC_WHT_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
# # INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (12,2.600,'The Knu Skool is a modern interpretation of a classic 90s style, defined by its puffed up tongue and 3D-molded Sidestripe, and tied off with oversized, chunky laces. With its in-your-face profile, color pop accents, and dramatic style details','https://images.vans.com/is/image/Vans/VN000CRP_GRN_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
# # INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (12,2.600,'The Knu Skool is a modern interpretation of a classic 90s style, defined by its puffed up tongue and 3D-molded Sidestripe, and tied off with oversized, chunky laces. With its in-your-face profile, color pop accents, and dramatic style details','https://images.vans.com/is/image/Vans/VN0009QC_PRP_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
# #
# # ### VANS OLD SKOOL
# # INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (13,2.600,'The Old Skool was our first footwear design to showcase the famous Vans Sidestripe—although back then, it was just a random doodle drawn by founder Paul Van Doren. Since its debut in 1977, this low-top silhouette has established itself as an icon in the skate, music, and fashion scenes. From 90s street skaters and punks to current hip hop and fashion legends, the Old Skool has consistently been the go-to customizedShoe for creatives who do things their own way.','https://images.vans.com/is/image/Vans/VN0A38G1_P0S_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
# # INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (13,2.600,'The Old Skool was our first footwear design to showcase the famous Vans Sidestripe—although back then, it was just a random doodle drawn by founder Paul Van Doren. Since its debut in 1977, this low-top silhouette has established itself as an icon in the skate, music, and fashion scenes. From 90s street skaters and punks to current hip hop and fashion legends, the Old Skool has consistently been the go-to customizedShoe for creatives who do things their own way.','https://images.vans.com/is/image/Vans/VN000CP5_TAN_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
# #
# # ### VANS UltraRange
# # INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (14,2.600,'What does it mean to be “ready for anything”? With the Vans UltraRange EXO, you’re bound to find out. This is a customizedShoe that not only stands up to the journey, but keeps you comfortable in the most uncomfortable of situations. Armed with updated RapidWeld detailing, a breathable Old Skool-inspired upper, and a revamped rubber toe and forefoot shape to provide an optimal fit without sacrificing Vans design DNA, this is the UltraRange—evolved.','https://images.vans.com/is/image/Vans/VN0A4U1K_WHT_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
# # INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (14,2.600,'What does it mean to be “ready for anything”? With the Vans UltraRange EXO, you’re bound to find out. This is a customizedShoe that not only stands up to the journey, but keeps you comfortable in the most uncomfortable of situations. Armed with updated RapidWeld detailing, a breathable Old Skool-inspired upper, and a revamped rubber toe and forefoot shape to provide an optimal fit without sacrificing Vans design DNA, this is the UltraRange—evolved.','https://images.vans.com/is/image/Vans/VN0A4U1K_ZS8_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
# # INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (14,2.600,'What does it mean to be “ready for anything”? With the Vans UltraRange EXO, you’re bound to find out. This is a customizedShoe that not only stands up to the journey, but keeps you comfortable in the most uncomfortable of situations. Armed with updated RapidWeld detailing, a breathable Old Skool-inspired upper, and a revamped rubber toe and forefoot shape to provide an optimal fit without sacrificing Vans design DNA, this is the UltraRange—evolved.','https://images.vans.com/is/image/Vans/VN0A4U1K_4LP_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
# # INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (14,2.600,'What does it mean to be “ready for anything”? With the Vans UltraRange EXO, you’re bound to find out. This is a customizedShoe that not only stands up to the journey, but keeps you comfortable in the most uncomfortable of situations. Armed with updated RapidWeld detailing, a breathable Old Skool-inspired upper, and a revamped rubber toe and forefoot shape to provide an optimal fit without sacrificing Vans design DNA, this is the UltraRange—evolved.','https://images.vans.com/is/image/Vans/VN0A4U1K_ZS8_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
# #
# #
# # ## New Balance
# # ### Fresh Foam X
# # INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (15,2.600,'If we only made one running customizedShoe, it would be the Fresh Foam X 1080. The unique combination of reliable comfort and high performance offers versatility that spans everyday to race day. The Fresh Foam X midsole cushioning is built for smooth transitions from landing to push-off, while a second-skin style mesh upper is breathable and supportive.','https://nb.scene7.com/is/image/NB/m1080k13_nb_02_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880');
# # INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (15,2.600,'If we only made one running customizedShoe, it would be the Fresh Foam X 1080. The unique combination of reliable comfort and high performance offers versatility that spans everyday to race day. The Fresh Foam X midsole cushioning is built for smooth transitions from landing to push-off, while a second-skin style mesh upper is breathable and supportive.','https://nb.scene7.com/is/image/NB/m1080b13_nb_02_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880');
# # INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (15,2.600,'If we only made one running customizedShoe, it would be the Fresh Foam X 1080. The unique combination of reliable comfort and high performance offers versatility that spans everyday to race day. The Fresh Foam X midsole cushioning is built for smooth transitions from landing to push-off, while a second-skin style mesh upper is breathable and supportive.','https://nb.scene7.com/is/image/NB/m1080l13_nb_02_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880');
# # INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (15,2.600,'If we only made one running customizedShoe, it would be the Fresh Foam X 1080. The unique combination of reliable comfort and high performance offers versatility that spans everyday to race day. The Fresh Foam X midsole cushioning is built for smooth transitions from landing to push-off, while a second-skin style mesh upper is breathable and supportive.','https://nb.scene7.com/is/image/NB/m1080i13_nb_02_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880');
# #
# # ### Made in USA 990v6
# # INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (16,2.600,'The designers of the first 990 were tasked with creating the single best running customizedShoe on the market. The MADE in USA 990v6 embraces this original mandate, with a series of performance-inspired updates.','https://nb.scene7.com/is/image/NB/m990gl6_nb_02_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880');
# # INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (16,2.600,'The designers of the first 990 were tasked with creating the single best running customizedShoe on the market. The MADE in USA 990v6 embraces this original mandate, with a series of performance-inspired updates.','https://nb.scene7.com/is/image/NB/m990bk6_nb_02_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880');
# #
# #
# #
# #
# #
# #
# #
# #
# #
# #
# #
# # #1
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/817c815ba1db46629f89ac210127bebb_9366/Stan_Smith_Shoes_White_FX5501_02_standard_hover.jpg',1);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f633a0c9cb124e16914cac210127ca62_9366/Stan_Smith_Shoes_White_FX5501_04_standard.jpg',1);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a9e4a56537d34680ae9eac210127d326_9366/Stan_Smith_Shoes_White_FX5501_05_standard.jpg',1);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a68e0082d9b140178cb9ac210127b7c3_9366/Stan_Smith_Shoes_White_FX5501_06_standard.jpg',1);
# #
# # #2
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/817c815ba1db46629f89ac210127bebb_9366/Stan_Smith_Shoes_White_FX5501_02_standard_hover.jpg',2);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f633a0c9cb124e16914cac210127ca62_9366/Stan_Smith_Shoes_White_FX5501_04_standard.jpg',2);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a9e4a56537d34680ae9eac210127d326_9366/Stan_Smith_Shoes_White_FX5501_05_standard.jpg',2);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a68e0082d9b140178cb9ac210127b7c3_9366/Stan_Smith_Shoes_White_FX5501_06_standard.jpg',2);
# #
# # #3
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e910873744704b76a752f6af6232556c_9366/Stan_Smith_Shoes_White_ID2031_02_standard_hover.jpg',3);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4e4e39029c7343dcbc08505d84b26fa9_9366/Stan_Smith_Shoes_White_ID2031_04_standard.jpg',3);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a22d03afb1594555ba85f08936eb52f3_9366/Stan_Smith_Shoes_White_ID2031_05_standard.jpg',3);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e55aae1769984c00936b62d36f142148_9366/Stan_Smith_Shoes_White_ID2031_06_standard.jpg',3);
# #
# # #4
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8453e94830a943b8865868ee4c72ba25_9366/Stan_Smith_Shoes_White_ID2032_02_standard_hover.jpg',4);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/19f795d4eb93409f967836947ba4e3ec_9366/Stan_Smith_Shoes_White_ID2032_04_standard.jpg',4);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e1ce4c675cb34547b62ea55f560d7845_9366/Stan_Smith_Shoes_White_ID2032_05_standard.jpg',4);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ad647d18b43b4e03b6d402862f4f893a_9366/Stan_Smith_Shoes_White_ID2032_06_standard.jpg',4);
# #
# # #5
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8a358bcd5e3d453da815aad6009a249e_9366/Superstar_Shoes_White_EG4958_02_standard_hover.jpg',5);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ff2e419f1eda4ebab23faad6009a3a9e_9366/Superstar_Shoes_White_EG4958_04_standard.jpg',5);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/31cf91f6e16c4f0aa11caad6009a4590_9366/Superstar_Shoes_White_EG4958_05_standard.jpg',5);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/27a4cab6236447958c5caad6009a19be_9366/Superstar_Shoes_White_EG4958_06_standard.jpg',5);
# #
# # #6
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ff0654f4089f4413baa7aae700d2a08c_9366/Superstar_Shoes_Black_EG4959_02_standard_hover.jpg',6);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7c365af056f34e6bacf4aae700d2b7fe_9366/Superstar_Shoes_Black_EG4959_04_standard.jpg',6);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/14051792ebf5402ea618aae700d296a1_9366/Superstar_Shoes_Black_EG4959_06_standard.jpg',6);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ebe5146ef13d4d9096a5aae700d2c437_9366/Superstar_Shoes_Black_EG4959_05_standard.jpg',6);
# #
# # #7
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9838b1cb1e25477ca7896d443855ca68_9366/Superstar_Shoes_Burgundy_IF8071_02_standard_hover.jpg',7);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c8a972664a27474495125584dec1c275_9366/Superstar_Shoes_Burgundy_IF8071_04_standard.jpg',7);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4b0d50c98c9c460eaffe5d0cef385039_9366/Superstar_Shoes_Burgundy_IF8071_06_standard.jpg',7);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7dd2b38101aa42149fc04fb41196e8a9_9366/Superstar_Shoes_Burgundy_IF8071_05_standard.jpg',7);
# #
# # #8
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cdf33741e9c14836afe99c1bee661821_9366/Superstar_Shoes_Green_IF8072_02_standard.jpg',8);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/81291a17e7e348ef85425c5ff7a66b9d_9366/Superstar_Shoes_Green_IF8072_04_standard.jpg',8);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5f976200f70343f18bb9a57c3842e868_9366/Superstar_Shoes_Green_IF8072_05_standard.jpg',8);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/988136d20eb34120b1e38bd942c24a3c_9366/Superstar_Shoes_Green_IF8072_06_standard.jpg',8);
# #
# # #9
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/165b22d5748b4e4cbad8af1e00c3b9c8_9366/NMD_S1_Shoes_White_GW4652_02_standard_hover.jpg',9);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/22660014819240f7b8b1af1e00c3c961_9366/NMD_S1_Shoes_White_GW4652_04_standard.jpg',9);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f22cced427cf432bab26af1e00c3d26e_9366/NMD_S1_Shoes_White_GW4652_05_standard.jpg',9);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/06fcec96df284aaf8485af1e00c3b261_9366/NMD_S1_Shoes_White_GW4652_06_standard.jpg',9);
# #
# # #10
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4ab2f16766de4cfd9458af8c00d23158_9366/NMD_S1_Shoes_Turquoise_HQ4437_02_standard_hover.jpg',10);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f0bed4acaa654b02b1baaf8c00d243ab_9366/NMD_S1_Shoes_Turquoise_HQ4437_04_standard.jpg',10);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6b903e5be20e4c778dc1af8c00d24f77_9366/NMD_S1_Shoes_Turquoise_HQ4437_05_standard.jpg',10);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/789b0bd2b34946b1ba78af8c00d224c5_9366/NMD_S1_Shoes_Turquoise_HQ4437_06_standard.jpg',10);
# #
# # #11
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/bdd5b151b9a74671bdbeaf8c00d288e1_9366/NMD_S1_Shoes_Beige_HQ4439_02_standard_hover.jpg',11);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/04a01b31153948598f1faf8c00d29caa_9366/NMD_S1_Shoes_Beige_HQ4439_04_standard.jpg',11);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1de1d0667a3f401aa096af8c00d2a7d4_9366/NMD_S1_Shoes_Beige_HQ4439_05_standard.jpg',11);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/220400bc865242209f63af8c00d27dae_9366/NMD_S1_Shoes_Beige_HQ4439_06_standard.jpg',11);
# #
# # #12
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4ab2f16766de4cfd9458af8c00d23158_9366/NMD_S1_Shoes_Turquoise_HQ4437_02_standard_hover.jpg',12);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f0bed4acaa654b02b1baaf8c00d243ab_9366/NMD_S1_Shoes_Turquoise_HQ4437_04_standard.jpg',12);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6b903e5be20e4c778dc1af8c00d24f77_9366/NMD_S1_Shoes_Turquoise_HQ4437_05_standard.jpg',12);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/789b0bd2b34946b1ba78af8c00d224c5_9366/NMD_S1_Shoes_Turquoise_HQ4437_06_standard.jpg',12);
# #
# # #13
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ab043655-acd5-4643-85b0-cf8f381e3b4b/air-force-1-07-customizedShoes-cWFrxr.png',13);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/58677f3d-3e3e-40b5-bce3-3a14191dc36b/air-force-1-07-customizedShoes-cWFrxr.png',13);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/12c6f454-17de-4d0b-bc29-dabf32eadea3/air-force-1-07-customizedShoes-cWFrxr.png',13);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ae2597c0-59f7-4552-bc38-b531be5665ff/air-force-1-07-customizedShoes-cWFrxr.png',13);
# #
# # #14
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3b6360aa-fa59-4c97-9504-28c856f79759/air-force-1-07-customizedShoes-CMNWtG.png',14);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/cba89489-eb3b-485a-8d12-02b01fc49f25/air-force-1-07-customizedShoes-CMNWtG.png',14);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4ee81ad8-fc92-4c07-83c5-dce318c4156f/air-force-1-07-customizedShoes-CMNWtG.png',14);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d1910142-f82d-4a74-ba35-d58b57daaf59/air-force-1-07-customizedShoes-CMNWtG.png',14);
# #
# # #15
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2483d8eb-d559-4e27-96f1-9ad1950ff72f/air-force-1-07-wb-customizedShoe-j46FxX.png',15);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5b320b94-6b58-4eba-8bf1-e3c021a4f418/air-force-1-07-wb-customizedShoe-j46FxX.png',15);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/012378b0-2e16-4774-97ed-547c1d16b25a/air-force-1-07-wb-customizedShoe-j46FxX.png',15);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/83fd9fba-4174-44e8-8f3b-c369059e4cad/air-force-1-07-wb-customizedShoe-j46FxX.png',15);
# #
# # #16
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a185a94c-818b-46ae-bd0b-d54e5834b907/air-force-1-07-customizedShoes-VWCc04.png',16);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e634b359-8d30-4720-b7fb-2769f9bb53fd/air-force-1-07-customizedShoes-VWCc04.png',16);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3010d407-c09e-4124-81c8-d84a955af273/air-force-1-07-customizedShoes-VWCc04.png',16);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9a8fe0e9-52d0-4581-a54a-7a738e75a2be/air-force-1-07-customizedShoes-VWCc04.png',16);
# #
# # #17
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7c6cb39f-1218-4eff-bddc-55e4a435a6cf/air-max-97-customizedShoes-EBZrb8.png',17);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f75082ae-6ef7-4922-a356-d52665aa587c/air-max-97-customizedShoes-EBZrb8.png',17);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/38d684fe-897f-42e1-be11-d0612eaa05db/air-max-97-customizedShoes-EBZrb8.png',17);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/60a9269c-516f-4291-abc9-841745a74e49/air-max-97-customizedShoes-EBZrb8.png',17);
# #
# # #18
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/dc6e7adc-00da-4978-9ea3-77828d6c4b1a/air-max-97-customizedShoes-EBZrb8.png',18);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b3463394-fa1e-4124-932e-ef999e30f946/air-max-97-customizedShoes-EBZrb8.png',18);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d7a170d5-4a95-495a-9023-e5dc624d906e/air-max-97-customizedShoes-EBZrb8.png',18);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/52f2b310-9e5a-4bd9-b724-ea821173fa0a/air-max-97-customizedShoes-EBZrb8.png',18);
# #
# # #19
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0c632f16-281f-424e-b26a-45b20ea7c28e/air-max-97-customizedShoes-B2TV3Z.png',19);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8d7bf343-7a90-49fe-b9ff-585d01ccd1fd/air-max-97-customizedShoes-B2TV3Z.png',19);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f7c6de78-cbfb-4376-82a2-472c21f29814/air-max-97-customizedShoes-B2TV3Z.png',19);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7da900d5-fad5-4c4b-994b-db2766d5e2a5/air-max-97-customizedShoes-B2TV3Z.png',19);
# #
# # #20
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/896597b3-01e7-4203-9711-c65d9a4b67bf/custom-nike-air-max-97-customizedShoes-by-you.png',20);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/bbfa7b7b-df2f-4727-aab5-c48d684e3a24/custom-nike-air-max-97-customizedShoes-by-you.png',20);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5b9f2db2-0efc-4940-a04a-3cdccca6cf22/custom-nike-air-max-97-customizedShoes-by-you.png',20);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/beb812ab-a58f-4863-9a30-a68dba30535c/custom-nike-air-max-97-customizedShoes-by-you.png',20);
# #
# # #21
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f7dda3bb-9024-47b5-bd0a-6f9a0c8eaca9/custom-nike-air-max-97-customizedShoes-by-you.png',21);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fd313ed2-c864-4394-9fb2-a8f774f85d49/custom-nike-air-max-97-customizedShoes-by-you.png',21);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/3eba0f82-5e2e-41cb-b86b-465cfbb8d26f/custom-nike-air-max-97-customizedShoes-by-you.png',21);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/2d26097f-c98b-415a-9417-4c50b99c7d50/custom-nike-air-max-97-customizedShoes-by-you.png',21);
# #
# # #22
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4100beb8-394c-4552-89ff-ad2dd03e8007/blazer-low-77-vintage-customizedShoes-5Gw9TZ.png',22);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/67ddef9d-8de0-4bef-94ed-3f08e1cf4d83/blazer-low-77-vintage-customizedShoes-5Gw9TZ.png',22);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/db724bb2-46ab-40c9-abc8-5f3709b842d4/blazer-low-77-vintage-customizedShoes-5Gw9TZ.png',22);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/98fb26c7-255b-4b9f-8cc6-0b90c686baf9/blazer-low-77-vintage-customizedShoes-5Gw9TZ.png',22);
# #
# # #23
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8efb4d34-600a-4cdc-ae8a-4cf95149ea1a/blazer-low-77-vintage-customizedShoes-5Gw9TZ.png',23);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1b0792e5-9266-429f-b4e3-f5e7270ad3b8/blazer-low-77-vintage-customizedShoes-5Gw9TZ.png',23);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2ea0c191-6c69-4f95-9119-a564383fa253/blazer-low-77-vintage-customizedShoes-5Gw9TZ.png',23);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3dee6cb1-895f-42d5-a687-786d7d17eef7/blazer-low-77-vintage-customizedShoes-5Gw9TZ.png',23);
# #
# # #24
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b837b4ce-8fc9-40ce-9f07-468b9c7a428e/blazer-low-77-vintage-customizedShoes-5Gw9TZ.png',24);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6a93ddd7-b533-41b1-bbaf-cdaca7711a04/blazer-low-77-vintage-customizedShoes-5Gw9TZ.png',24);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5592ab95-166b-4a8f-9e78-6e136c2a9c75/blazer-low-77-vintage-customizedShoes-5Gw9TZ.png',24);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/52af7d59-9060-42ec-8c8c-78183c48b5ff/blazer-low-77-vintage-customizedShoes-5Gw9TZ.png',24);
# #
# # #25
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b053ebe9-aa11-491d-baf7-1d6f1319ba37/cortez-customizedShoes-svdKM9.png',25);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/29ad7010-3b9a-4a1a-84c5-83cc1c6df792/cortez-customizedShoes-svdKM9.png',25);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0e921af3-7443-4438-bc60-e1166b1caf53/cortez-customizedShoes-svdKM9.png',25);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7429f0dc-d8b7-4d3c-9377-08684397bf17/cortez-customizedShoes-svdKM9.png',25);
# #
# # #26
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/87a83d95-0c8b-489f-9a05-44a87301a589/cortez-customizedShoes-svdKM9.png',26);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7943aa0e-5e46-4e19-ac27-85963221ccb4/cortez-customizedShoes-svdKM9.png',26);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f11f57d1-1632-43a5-a05b-c817452bec2a/cortez-customizedShoes-svdKM9.png',26);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5ab5f198-233e-478d-978b-54994fe08aa7/cortez-customizedShoes-svdKM9.png',26);
# #
# # #27
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/02148fc1-9fb7-4df1-ab6d-2d696e9da039/cortez-customizedShoes-svdKM9.png',27);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f3d3f77a-bb06-481c-a6cf-0085b985d9a6/cortez-customizedShoes-svdKM9.png',27);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fd7642be-db2b-46e9-ab77-5ed20bb8a5d7/cortez-customizedShoes-svdKM9.png',27);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b75f6368-982b-430e-9073-fe104b8d2ca4/cortez-customizedShoes-svdKM9.png',27);
# #
# # #28
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://product.hstatic.net/200000642007/product/50t_32shs1111_2_13e018415a2e4efab0ed4cf34a8641f8_9df68654feb443ae8c3cc63606630fcc_master.jpg',28);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://product.hstatic.net/200000642007/product/50t_32shs1111_3_f47c4e0cc97c4522bc54af0e9965d7a0_893d426b29384158b2d7ae5270461b17_master.jpg',28);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://product.hstatic.net/200000642007/product/50t_32shs1111_4_84663d39cd4d433c86e62a24c8dd9cf4_85679ec785294ff69f92a084824bcf28_master.jpg',28);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://product.hstatic.net/200000642007/product/50t_32shs1111_5_0cee3e66790645449be36a8b8f46b740_d0f8774544b34311994131b29809dc1a_master.jpg',28);
# #
# # #29
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://product.hstatic.net/200000642007/product/50l_32shs1111_3_9ca393cff546416999fb7b848b984991_cfc963ce39934e6aa815dfaf1e28e4ff_master.jpg',29);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://product.hstatic.net/200000642007/product/50l_32shs1111_4_2e23daa91dd14aa08fca172802b9f68a_a2750b26a8464087ac5c4977193ff5fb_master.jpg',29);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://product.hstatic.net/200000642007/product/50l_32shs1111_5_21ebee2e86934d928ab85f6a0ec1ff86_9d93a438cfa142cb867959ecdb7ad8e1_master.jpg',29);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://product.hstatic.net/200000642007/product/50l_32shs1111_6_0d82788181b549e890396bbe53acdaec_da651cf909e343e2a2f1e3b2c77337ce_master.jpg',29);
# #
# # #30
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://product.hstatic.net/200000642007/product/07v_32shs1111_3_88eb529d82304a82b13f8c46cc6a38c6_0e7f0d1809fa42a3b7ced1dc9a7d378f_master.jpg',30);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://product.hstatic.net/200000642007/product/07v_32shs1111_4_2d663838fabb49e0bd979f66e8f34c6e_c35e3d183d844d60bd23292b5062fb35_master.jpg',30);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://product.hstatic.net/200000642007/product/07v_32shs1111_5_7dba58ff953f4f729c6c35bd5a2085ac_c7ca2fc6223a412cbeaabdce204d210a_master.jpg',30);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://product.hstatic.net/200000642007/product/07v_32shs1111_6_7dd9a9bb02cc49f8a930551b7f14145c_b0b35d2049f74dd283264bdb3d3527f8_master.jpg',30);
# #
# # #31
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://product.hstatic.net/200000642007/product/07s_32shs1111_2_10026872939044a9ba89281e33c80e8f_13614b0540614c40bcbb39c9c999edec_master.jpg',31);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://product.hstatic.net/200000642007/product/07s_32shs1111_3_ba55293b3a0b490c8fca30af604e41c2_4fbb72d92ed248deb89d5b90b50d152c_master.jpg',31);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://product.hstatic.net/200000642007/product/07s_32shs1111_4_6bfd8a0398b24eeaaad8d583f47b2c87_fa3d71a7e6a04737b7a516779fa9ddf6_master.jpg',31);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://product.hstatic.net/200000642007/product/07s_32shs1111_5_8e852cc0ec174310b5c986e3fbcdf41e_f3b5b6f78a004155bb1708a8339ee234_master.jpg',31);
# #
# # #32
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://product.hstatic.net/200000642007/product/07ivs_3acvppr3n_3_dbd72786a16849d69794564b76c3ee73_cf84044849d442188a4c7204d78b4efe_master.jpg',32);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://product.hstatic.net/200000642007/product/07ivs_3acvppr3n_4_8b71633d84a647248b365f1189106952_765120a74e5b4ae4bdc7a93a30f92e20_master.jpg',32);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://product.hstatic.net/200000642007/product/07ivs_3acvppr3n_5_edd4b64e65e34af289a17313d9d85482_e1bcd8d62770463e94ad0c9045119c56_master.jpg',32);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://product.hstatic.net/200000642007/product/07ivs_3acvppr3n_7_f67301b295b8457dba697a9a3bbd1e5d_c60d3c2664c340a6b9200cb75aa9b8e1_master.jpg',32);
# #
# # #33
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://product.hstatic.net/200000642007/product/50bks_3acvppr3n_2_e1aecadfab6649218711d130c75807b3_fc3911b9423a48639a919c355652f67a_master.jpg',33);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://product.hstatic.net/200000642007/product/50bks_3acvppr3n_3_dd7210fc89024750895894e9187b30e9_f80dd28759a747ccba6d1feba2dd338c_master.jpg',33);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://product.hstatic.net/200000642007/product/50bks_3acvppr3n_4_5f9683f99e7540aaa019e37105bc89af_233ab0d3c2ca4ff4b7f91f6eca9fcf4e_master.jpg',33);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://product.hstatic.net/200000642007/product/50bks_3acvppr3n_6_3f98378940094f49b1e154598c35e0cc_65cc0b22a2704ee6a28ad9ab1869b457_master.jpg',33);
# #
# # #34
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://product.hstatic.net/200000642007/product/50bks_3asxam82n_2_9a067cf066db4cc083fa4052983917e2_2af7606b6f4e418991c21900f40fbdb2_master.jpg',34);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://product.hstatic.net/200000642007/product/50bks_3asxam82n_3_196a0789dcac476eafee7359788251e4_df294dad6ed8412c9c042d25547eb078_master.jpg',34);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://product.hstatic.net/200000642007/product/50bks_3asxam82n_4_2128c6c8fac6422dad41f965c884bb99_cb5f79bd231b48d1a616c8eb7ed9d681_master.jpg',34);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://product.hstatic.net/200000642007/product/50bks_3asxam82n_6_751370f2cb7140a48e7fd714cbe5bbe7_489b612884a943a7b67b450de49bd3b6_master.jpg',34);
# #
# # #35
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://product.hstatic.net/200000642007/product/07bld_3asxxa12n_3_ee28384313ab4958b2fd086d2e6474f3_2288b706ad33432c970c4fc3b74d4171_master.jpg',35);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://product.hstatic.net/200000642007/product/07bld_3asxxa12n_4_37d24cea190847eca6be97bd64e80ee9_bd49f01d5ae74450bcee29b35c0118bc_master.jpg',35);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://product.hstatic.net/200000642007/product/07bld_3asxxa12n_5_dc1ee6fe76244964ba9dee186ea7c26b_d77bfc4b1d244fc08aa2030b52b551b5_master.jpg',35);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://product.hstatic.net/200000642007/product/07bld_3asxxa12n_7_ff5c372c924b4687b53b5b262b052aee_e77ec5920cd94d1280eb4d29d53124ee_master.jpg',35);
# #
# # #36
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://product.hstatic.net/200000642007/product/50ivs_3asxccb3n_2_0058b0a2f1614c08aa6fab2dd288b858_fbb7ae9f4319412186bd06d211b1a218_master.jpg',36);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://product.hstatic.net/200000642007/product/50ivs_3asxccb3n_3_7e96835e78fc4eef8393ad320275c6b6_bfd1b4eabe0c4b9fac88e0f612313cbe_master.jpg',36);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://product.hstatic.net/200000642007/product/50ivs_3asxccb3n_4_490d1ace7703456aa5be0e43a9ebe6a1_eff51602d9cb47d6b5ae6c6514787baa_master.jpg',36);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://product.hstatic.net/200000642007/product/50ivs_3asxccb3n_6_9cdc94c11d194d619b4d8708db9be816_46c58477ad2f45769e568e4ed584f2c5_master.jpg',36);
# #
# # #37
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://images.vans.com/is/image/Vans/VN000EE3_BLK_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0',37);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://images.vans.com/is/image/Vans/VN000EE3_BLK_ALT1?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0',37);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://images.vans.com/is/image/Vans/VN000EE3_BLK_ALT2?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0',37);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://images.vans.com/is/image/Vans/VN000EE3_BLK_ALT3?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0',37);
# #
# # #38
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://images.vans.com/is/image/Vans/VN000EYE_BWW_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0',38);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://images.vans.com/is/image/Vans/VN000EYE_BWW_ALT1?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0',38);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://images.vans.com/is/image/Vans/VN000EYE_BWW_ALT2?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0',38);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://images.vans.com/is/image/Vans/VN000EYE_BWW_ALT3?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0',38);
# #
# # #39
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://images.vans.com/is/image/Vans/VN000BVZ_C9I_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0',39);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://images.vans.com/is/image/Vans/VN000BVZ_C9I_ALT1?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0',39);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://images.vans.com/is/image/Vans/VN000BVZ_C9I_ALT2?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0',39);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://images.vans.com/is/image/Vans/VN000BVZ_C9I_ALT3?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0',39);
# #
# # #40
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://images.vans.com/is/image/Vans/VN000EYE_BPJ_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0',40);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://images.vans.com/is/image/Vans/VN000EYE_BPJ_ALT1?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0',40);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://images.vans.com/is/image/Vans/VN000EYE_BPJ_ALT2?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0',40);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://images.vans.com/is/image/Vans/VN000EYE_BPJ_ALT3?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0',40);
# #
# # #41
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://images.vans.com/is/image/Vans/VN0009QC_BKA_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0',41);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://images.vans.com/is/image/Vans/VN0009QC_BKA_ALT1?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0',41);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://images.vans.com/is/image/Vans/VN0009QC_BKA_ALT2?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0',41);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://images.vans.com/is/image/Vans/VN0009QC_BKA_ALT3?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0',41);
# #
# # #42
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://images.vans.com/is/image/Vans/VN0009QC_WHT_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0',42);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://images.vans.com/is/image/Vans/VN0009QC_WHT_ALT1?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0',42);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://images.vans.com/is/image/Vans/VN0009QC_WHT_ALT2?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0',42);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://images.vans.com/is/image/Vans/VN0009QC_WHT_ALT3?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0',42);
# #
# # #43
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://images.vans.com/is/image/Vans/VN000CRP_GRN_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0',43);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://images.vans.com/is/image/Vans/VN000CRP_GRN_ALT1?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0',43);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://images.vans.com/is/image/Vans/VN000CRP_GRN_ALT2?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0',43);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://images.vans.com/is/image/Vans/VN000CRP_GRN_ALT3?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0',43);
# #
# # #44
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://images.vans.com/is/image/Vans/VN0009QC_PRP_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0',44);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://images.vans.com/is/image/Vans/VN0009QC_PRP_ALT1?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0',44);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://images.vans.com/is/image/Vans/VN0009QC_PRP_ALT2?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0',44);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://images.vans.com/is/image/Vans/VN0009QC_PRP_ALT3?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0',44);
# #
# # #45
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://images.vans.com/is/image/Vans/VN0A38G1_P0S_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0',45);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://images.vans.com/is/image/Vans/VN0A38G1_P0S_ALT1?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0',45);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://images.vans.com/is/image/Vans/VN0A38G1_P0S_ALT2?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0',45);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://images.vans.com/is/image/Vans/VN0A38G1_P0S_ALT3?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0',45);
# #
# # #46
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://images.vans.com/is/image/Vans/VN000CP5_TAN_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0',46);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://images.vans.com/is/image/Vans/VN000CP5_TAN_ALT1?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0',46);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://images.vans.com/is/image/Vans/VN000CP5_TAN_ALT2?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0',46);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://images.vans.com/is/image/Vans/VN000CP5_TAN_ALT3?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0',46);
# #
# # #47
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://images.vans.com/is/image/Vans/VN0A4U1K_WHT_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0',47);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://images.vans.com/is/image/Vans/VN0A4U1K_WHT_ALT1?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0',47);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://images.vans.com/is/image/Vans/VN0A4U1K_WHT_ALT2?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0',47);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://images.vans.com/is/image/Vans/VN0A4U1K_WHT_ALT3?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0',47);
# #
# # #48
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://images.vans.com/is/image/Vans/VN0A4U1K_ZS8_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0',48);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://images.vans.com/is/image/Vans/VN0A4U1K_ZS8_ALT1?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0',48);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://images.vans.com/is/image/Vans/VN0A4U1K_ZS8_ALT2?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0',48);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://images.vans.com/is/image/Vans/VN0A4U1K_ZS8_ALT3?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0',48);
# #
# # #49
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://images.vans.com/is/image/Vans/VN0A4U1K_4LP_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0',49);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://images.vans.com/is/image/Vans/VN0A4U1K_4LP_ALT1?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0',49);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://images.vans.com/is/image/Vans/VN0A4U1K_4LP_ALT2?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0',49);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://images.vans.com/is/image/Vans/VN0A4U1K_4LP_ALT3?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0',49);
# #
# # #50
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://images.vans.com/is/image/Vans/VN0A4U1K_ZS8_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0',50);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://images.vans.com/is/image/Vans/VN0A4U1K_ZS8_ALT1?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0',50);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://images.vans.com/is/image/Vans/VN0A4U1K_ZS8_ALT2?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0',50);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://images.vans.com/is/image/Vans/VN0A4U1K_ZS8_ALT3?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0',50);
# #
# # #51
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://nb.scene7.com/is/image/NB/w1080k13_nb_02_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880',51);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://nb.scene7.com/is/image/NB/w1080k13_nb_05_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880',51);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://nb.scene7.com/is/image/NB/w1080k13_nb_03_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880',51);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://nb.scene7.com/is/image/NB/w1080k13_nb_04_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880',51);
# #
# # #52
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://nb.scene7.com/is/image/NB/w1080b13_nb_02_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880',52);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://nb.scene7.com/is/image/NB/w1080b13_nb_05_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880',52);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://nb.scene7.com/is/image/NB/w1080b13_nb_03_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880',52);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://nb.scene7.com/is/image/NB/w1080b13_nb_04_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880',52);
# #
# # #53
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://nb.scene7.com/is/image/NB/w1080d13_nb_02_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880',53);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://nb.scene7.com/is/image/NB/w1080d13_nb_05_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880',53);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://nb.scene7.com/is/image/NB/w1080d13_nb_03_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880',53);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://nb.scene7.com/is/image/NB/w1080d13_nb_07_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880',53);
# #
# # #54
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://nb.scene7.com/is/image/NB/m1080i13_nb_02_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880',54);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://nb.scene7.com/is/image/NB/m1080i13_nb_05_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880',54);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://nb.scene7.com/is/image/NB/w860k13_nb_03_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880',54);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://nb.scene7.com/is/image/NB/w860k13_nb_04_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880',54);
# #
# # #55
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://nb.scene7.com/is/image/NB/w990gl6_nb_02_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880',55);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://nb.scene7.com/is/image/NB/w990gl6_nb_05_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880',55);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://nb.scene7.com/is/image/NB/w990gl6_nb_03_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880',55);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://nb.scene7.com/is/image/NB/w990gl6_nb_04_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880',55);
# #
# # #56
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://nb.scene7.com/is/image/NB/w990nv6_nb_02_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880',56);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://nb.scene7.com/is/image/NB/w990nv6_nb_05_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880',56);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://nb.scene7.com/is/image/NB/w990nv6_nb_03_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880',56);
# # INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://nb.scene7.com/is/image/NB/w990nv6_nb_04_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880',56);
# #
# #
# #
# #
# #
# #
# #
# #
# #
# #
# #
# #
# #
# # # INSERT INTO tblshoemodel (brandid,modelname,imageurl) VALUES (2,'Air Force 1','https://sneakerholicvietnam.vn/wp-content/uploads/2021/07/nike-air-force-1-low-white-315115-112.jpg');
# # # INSERT INTO tblShoe (brandid,modelid,price,description,imageurl)
# # # VALUES (1,1,42,'99','A customizedShoe has flexible','https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4f225a0bbc3e43729858af0100006731_9366/Giay_Ultraboost_1.0_trang_HQ4207_01_standard.jpg',1);;
# # # INSERT INTO tblServiceModel (serviceId,modelid,price,orderDetailId)
# # # VALUES (1,1,'15',2);;
# # # INSERT INTO tbluserDrawing (userid,drawingFile,description,orderDetailId)
# # # VALUES (1,'good','best of store',1);;
# # # INSERT INTO tblPayment (orderId,amount,paymentDate,method,status)
# # # VALUES (1,1,'2022-10-10','paint','done');
# # -- select * from tbluser
# drop database shoepee;
# create database shoepee;
# use shoepee;
#
#
# create table tblbrand
# (
#     brandid int primary key auto_increment,
#     brandname nvarchar(255),
#     imageurl varchar(1000)
# );
#
#
# create table tblshoplocation
# (
#     locationid int primary key auto_increment,
#     locationname nvarchar(255),
#     address nvarchar(255),
#     phone varchar(50),
#     email varchar(255),
#     workinghour time
# );
#
#
#
# create table tbluser
# (
#     userid int primary key auto_increment,
#     username nvarchar(100),
#     password varchar(100),
#     email varchar(255)
# );
#
# create table tblinforuser (
#                               id int primary key auto_increment,
#                               fullname nvarchar(100),
#                               address varchar(1000),
#                               phone varchar(50),
#                               foreign key(id) references tbluser (userid)
# );
#
# create table tblorder
# (
#     orderid int primary key auto_increment,
#     userid int,
#     orderdate varchar(255),
#     status bit,
#     locationid int,
#     totalprice decimal(10,2),
#     foreign key(userid) references tbluser (userid),
#     foreign key(locationid) references tblshoplocation(locationid)
# );
#
#
#
# create table tblorderdetail(
#                                orderdetailid int primary key auto_increment,
#                                orderid int,
#                                quantity int,
#                                unitprice decimal(10,2),
#                                subtotal decimal(10,2),
#                                foreign key(orderid) references tblorder (orderid)
# );
#
#
# create table tblservice(
#                            serviceid int primary key auto_increment,
#                            name nvarchar(100),
#                            description nvarchar(1000),
#                            price decimal(10,2)
# );
#
#
# create table tblshoemodel(
#                              modelid int primary key auto_increment,
#
#                              price decimal(10,2),
#                              modelname nvarchar(255),
#
#                              imageurl varchar(1000)
#
# );
#
#
# create table tblshoe(
#                         shoeid int primary key auto_increment,
#
#                         price decimal(10,2),
#                         description nvarchar(1000),
#                         imageurl varchar(1000)
#
# );
#
#
# create table tblservicemodel(
#                                 servicemodelid int primary key auto_increment,
#                                 serviceid int,
#                                 modelid int,
#                                 price decimal(10,2),
#                                 orderDetailid int,
#                                 imagemodel varchar(1000),
#                                 foreign key(orderdetailid) references tblorderdetail(orderdetailid),
#                                 foreign key(serviceid) references tblservice(serviceid),
#                                 foreign key(modelid) references tblshoemodel(modelid)
# );
#
#
#
# create table tblpayment(
#                            paymentid int primary key auto_increment,
#                            orderid int,
#                            amount int,
#                            paymentdate datetime,
#                            method varchar(255),
#                            status varchar(255),
#                            foreign key(orderid) references tblorder (orderid)
# );
#
# create table tblimage(
#
#                          iamgeid int primary key auto_increment,
#                          imageurl varchar(5000)
#
#
# );
#
# create table tblsize (
#                          sizeid int primary key auto_increment,
#                          size int
# );
#
#
# #SIZE
#
# INSERT INTO tblsize (size) VALUES (28);
# INSERT INTO tblsize (size) VALUES (29);
# INSERT INTO tblsize (size) VALUES (30);
# INSERT INTO tblsize (size) VALUES (31);
# INSERT INTO tblsize (size) VALUES (32);
# INSERT INTO tblsize (size) VALUES (33);
# INSERT INTO tblsize (size) VALUES (34);
# INSERT INTO tblsize (size) VALUES (35);
# INSERT INTO tblsize (size) VALUES (36);
# INSERT INTO tblsize (size) VALUES (37);
#
#
#
# INSERT INTO tblbrand (brandname,imageurl) VALUES ('ADIDAS','https://assets.adidas.com/images/w_600,f_auto,q_auto/2535f3464914497aaa27ae9200f84ead_9366/Giay_Grand_Court_Cloudfoam_Lifestyle_Court_Comfort_trang_GW9214_01_standard.jpg');
# INSERT INTO tblbrand (brandname,imageurl) VALUES ('NIKE','https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-customizedShoes-WrLlWX.png');
# INSERT INTO tblbrand (brandname,imageurl) VALUES ('MLB','https://bizweb.dktcdn.net/100/413/756/products/giay-mlb-chunky-liner-low-new-york-yankees-ivory-3asxca12n-50ivs-1-98ec97352e294a39b9853a22079fb39e-master.jpg?v=1678768537200');
# INSERT INTO tblbrand (brandname,imageurl) VALUES ('VANS','https://bizweb.dktcdn.net/thumb/1024x1024/100/140/774/products/vans-old-skool-black-white-vn000d3hy28-1.jpg');
# INSERT INTO tblbrand (brandname,imageurl) VALUES ('New Balance','https://supersports.com.vn/cdn/shop/products/ML574EVG-1.jpg?v=1673511691');
#
#
#
#
# #SHOEMODEL
# ## ADIDAS
# INSERT INTO tblshoemodel (price,modelname,imageurl) VALUES (1.999,'STAN SMITH','https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b47d77eba6f945ea8dabac210127b11e_9366/Giay_Stan_Smith_trang_FX5501_01_standard.jpg');
# INSERT INTO tblshoemodel (price,modelname,imageurl) VALUES (1.999,'SUPER STAR','https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7ed0855435194229a525aad6009a0497_9366/Giay_Superstar_trang_EG4958_01_standard.jpg');
# INSERT INTO tblshoemodel (price,modelname,imageurl) VALUES (1.999,'NMD','https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/52f6f689607048ad9831ae700009af3d_9366/Giay_NMD_360_DJen_GY9147_01_standard.jpg');
#
#
# ## NIKE
# INSERT INTO tblshoemodel (price,modelname,imageurl) VALUES (1.999,'Nike Air Force 1','https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-customizedShoes-WrLlWX.png');
# INSERT INTO tblshoemodel (price,modelname,imageurl) VALUES (1.999,'Nike Air Max','https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/2aeba6e4-5058-453d-af76-008f38c2ac41/air-max-1-premium-customizedShoes-QBdDK8.png');
# INSERT INTO tblshoemodel (price,modelname,imageurl) VALUES (1.999,'Blazer','https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/fb7eda3c-5ac8-4d05-a18f-1c2c5e82e36e/blazer-mid-77-vintage-customizedShoes-dNWPTj.png');
# INSERT INTO tblshoemodel (price,modelname,imageurl) VALUES (1.999,'Cortez','https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/np029vozcemdcdmebpwm/classic-cortez-customizedShoe-8p3Qjt.png');
#
# ## MLB
# INSERT INTO tblshoemodel (price,modelname,imageurl) VALUES (1.999,'PLAYBALL','https://product.hstatic.net/200000384787/product/giay_mlb_bigball_chunky_a_new_york_yankees_beige_3ashc101n-50bgs__1__b2207921661f4fe2bc798894c4f5bb2a_master.jpg');
# INSERT INTO tblshoemodel (price,modelname,imageurl) VALUES (1.999,'Mules','https://sneakerholicvietnam.vn/wp-content/uploads/2021/06/mlb-big-ball-chunky-boston-32SHC2911-43I.jpg');
# INSERT INTO tblshoemodel (price,modelname,imageurl) VALUES (1.999,'Chunky','https://bizweb.dktcdn.net/100/423/558/products/mlb-3.jpg?v=1659335545760');
#
# ## Vans
#
# INSERT INTO tblshoemodel (price,modelname,imageurl) VALUES (1.999,'VANS CLASSIC','https://images.vans.com/is/image/Vans/VN000EE3_BLK_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
# INSERT INTO tblshoemodel (price,modelname,imageurl) VALUES (1.999,'VANS Knu Skool','https://images.vans.com/is/image/Vans/VN0009QC_6BT_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
# INSERT INTO tblshoemodel (price,modelname,imageurl) VALUES (1.999,'VANS OLD SKOOL','https://bizweb.dktcdn.net/100/140/774/products/vans-old-skool-black-white-vn000d3hy28-2.jpg?v=1625905148527');
# INSERT INTO tblshoemodel (price,modelname,imageurl) VALUES (1.999,'VANS UltraRange ','https://images.vans.com/is/image/Vans/VN0A4U1K_BLK_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
#
# ## New Balance
# INSERT INTO tblshoemodel (price,modelname,imageurl) VALUES (1.999,'Fresh Foam X','https://nb.scene7.com/is/image/NB/m1080i13_nb_02_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880');
# INSERT INTO tblshoemodel (price,modelname,imageurl) VALUES (1.999,'Made in USA 990v6','https://nb.scene7.com/is/image/NB/m990nv6_nb_02_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880');
#
#
# # Shoe
# ## ADIDAS
# ### Stan smith
# INSERT INTO tblshoe (price,description,imageurl) VALUES (2.600,'This product is made with vegan alternatives to animal-derived ingredients or materials. It is also made with Primegreen, a series of high-performance recycled materials. 50% of upper is recycled content. No virgin polyester.','https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b47d77eba6f945ea8dabac210127b11e_9366/Giay_Stan_Smith_trang_FX5501_01_standard.jpg');
# INSERT INTO tblshoe (price,description,imageurl) VALUES (2.600,'This product is made with vegan alternatives to animal-derived ingredients or materials. It is also made with Primegreen, a series of high-performance recycled materials. 50% of upper is recycled content. No virgin polyester.','https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b47d77eba6f945ea8dabac210127b11e_9366/Stan_Smith_Shoes_White_FX5501_01_standard.jpg');
# INSERT INTO tblshoe (price,description,imageurl) VALUES (2.600,'This product is made with vegan alternatives to animal-derived ingredients or materials. It is also made with Primegreen, a series of high-performance recycled materials. 50% of upper is recycled content. No virgin polyester.','https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4cf7720ac5a7420591148d75b2f3f592_9366/Stan_Smith_Shoes_White_ID2031_01_standard.jpg');
# INSERT INTO tblshoe (price,description,imageurl) VALUES (2.600,'This product is made with vegan alternatives to animal-derived ingredients or materials. It is also made with Primegreen, a series of high-performance recycled materials. 50% of upper is recycled content. No virgin polyester.','https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a41ae84d535e4d9d8f2cf641b387f77e_9366/Stan_Smith_Shoes_White_ID2032_01_standard.jpg');
#
# ### SUPER STAR
# INSERT INTO tblshoe (price,description,imageurl) VALUES (2.600,'Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court. The serrated 3-Stripes mark, iconic shell style toe, and box logo makes this one of the true Originals.','https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7ed0855435194229a525aad6009a0497_9366/Giay_Superstar_trang_EG4958_01_standard.jpg');
# INSERT INTO tblshoe (price,description,imageurl) VALUES (2.600,'Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court. The serrated 3-Stripes mark, iconic shell style toe, and box logo makes this one of the true Originals.','https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/15f901c90a9549d29104aae700d27efb_9366/Superstar_Shoes_Black_EG4959_01_standard.jpg');
# INSERT INTO tblshoe (price,description,imageurl) VALUES (2.600,'Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court. The serrated 3-Stripes mark, iconic shell style toe, and box logo makes this one of the true Originals.','https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9ef861e1b233457e80a461a9bae38ec1_9366/Superstar_Shoes_Burgundy_IF8071_01_standard.jpg');
# INSERT INTO tblshoe (price,description,imageurl) VALUES (2.600,'Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court. The serrated 3-Stripes mark, iconic shell style toe, and box logo makes this one of the true Originals.','https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/46743c5abef5415a99616af9704aaf76_9366/Superstar_Shoes_Green_IF8072_01_standard.jpg');
#
# ### NMD
# INSERT INTO tblshoe (price,description,imageurl) VALUES (2.600,'This customizedShoes upper is made with a high-performance yarn which contains at least 50% Parley Ocean Plastic — reimagined plastic waste, intercepted on remote islands, beaches, coastal communities and shorelines, preventing it from polluting our ocean. The other 50% of the yarn is recycled polyester.','https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/030e1916d6d64713b0a9af1e00c3aab4_9366/NMD_S1_Shoes_White_GW4652_01_standard.jpg');
# INSERT INTO tblshoe (price,description,imageurl) VALUES (2.600,'This customizedShoes upper is made with a high-performance yarn which contains at least 50% Parley Ocean Plastic — reimagined plastic waste, intercepted on remote islands, beaches, coastal communities and shorelines, preventing it from polluting our ocean. The other 50% of the yarn is recycled polyester.','https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6b2d4eb761694fdcb6ffaf8c00d21558_9366/NMD_S1_Shoes_Turquoise_HQ4437_01_standard.jpg');
# INSERT INTO tblshoe (price,description,imageurl) VALUES (2.600,'This customizedShoes upper is made with a high-performance yarn which contains at least 50% Parley Ocean Plastic — reimagined plastic waste, intercepted on remote islands, beaches, coastal communities and shorelines, preventing it from polluting our ocean. The other 50% of the yarn is recycled polyester.','https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6e1a01ee20b5422b98a9af8c00d27073_9366/NMD_S1_Shoes_Beige_HQ4439_01_standard.jpg');
# INSERT INTO tblshoe (price,description,imageurl) VALUES (2.600,'This customizedShoes upper is made with a high-performance yarn which contains at least 50% Parley Ocean Plastic — reimagined plastic waste, intercepted on remote islands, beaches, coastal communities and shorelines, preventing it from polluting our ocean. The other 50% of the yarn is recycled polyester.','https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e45e26f7f6be45b28ff9af8c00d33127_9366/NMD_S1_Shoes_Blue_HQ4468_01_standard.jpg');
#
# ## NIKE
# ### NIKE AIR FORCE 1
# INSERT INTO tblshoe (price,description,imageurl) VALUES (2.600,'Classic and comfortable, you will want to wear these AF-1s time after time. Smooth suede and a plush collar give these kicks a premium feel, while the gum sole adds a retro look. Of course, some things never change: Nike Air units still cushion your every step.','https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/cb1732aa-9f69-4b01-b77c-1da2a20a0729/air-force-1-07-customizedShoes-cWFrxr.png');
# INSERT INTO tblshoe (price,description,imageurl) VALUES (2.600,'Classic and comfortable, you will want to wear these AF-1s time after time. Smooth suede and a plush collar give these kicks a premium feel, while the gum sole adds a retro look. Of course, some things never change: Nike Air units still cushion your every step.','https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/416e1d81-a6ed-4401-93d1-e5e26ea37a8d/air-force-1-07-customizedShoes-CMNWtG.png');
# INSERT INTO tblshoe (price,description,imageurl) VALUES (2.600,'Classic and comfortable, you will want to wear these AF-1s time after time. Smooth suede and a plush collar give these kicks a premium feel, while the gum sole adds a retro look. Of course, some things never change: Nike Air units still cushion your every step.','https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9586f004-25c7-4e72-bef9-6492f6491a4b/air-force-1-07-wb-customizedShoe-j46FxX.png');
# INSERT INTO tblshoe (price,description,imageurl) VALUES (2.600,'Classic and comfortable, you will want to wear these AF-1s time after time. Smooth suede and a plush collar give these kicks a premium feel, while the gum sole adds a retro look. Of course, some things never change: Nike Air units still cushion your every step.','https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fa7c385b-0f6d-4bd9-8a0f-6038d8d8a355/air-force-1-07-customizedShoes-VWCc04.png');
#
#
# ### NIKE AIR MAX
# INSERT INTO tblshoe (price,description,imageurl) VALUES (2.600,'The AM97 was the shapeshifter of its time, and it is your turn to do the same. Customise every part of the customizedShoe from upper materials to the colours of the midsole and Nike Air unit, plus non-slip laces to secure the fit. Then, decide whether you want your outsole solid, tinted or translucent. There is even an upgraded insole for extra cushioning underfoot. Finally, a customizedShoe as multifaceted as you.','https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/14de6943-8c87-4b9b-9585-80dea96a70d3/air-max-97-customizedShoes-EBZrb8.png');
# INSERT INTO tblshoe (price,description,imageurl) VALUES (2.600,'The AM97 was the shapeshifter of its time, and it is your turn to do the same. Customise every part of the customizedShoe from upper materials to the colours of the midsole and Nike Air unit, plus non-slip laces to secure the fit. Then, decide whether you want your outsole solid, tinted or translucent. There is even an upgraded insole for extra cushioning underfoot. Finally, a customizedShoe as multifaceted as you.','https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1464bd95-4121-4b07-af49-dfbddff7a460/air-max-97-customizedShoes-EBZrb8.png');
# INSERT INTO tblshoe (price,description,imageurl) VALUES (2.600,'The AM97 was the shapeshifter of its time, and it is your turn to do the same. Customise every part of the customizedShoe from upper materials to the colours of the midsole and Nike Air unit, plus non-slip laces to secure the fit. Then, decide whether you want your outsole solid, tinted or translucent. There is even an upgraded insole for extra cushioning underfoot. Finally, a customizedShoe as multifaceted as you.','https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/6a3671b8-f115-44f6-9ab6-3798d55210eb/custom-nike-air-max-97-customizedShoes-by-you.png');
# INSERT INTO tblshoe (price,description,imageurl) VALUES (2.600,'The AM97 was the shapeshifter of its time, and it is your turn to do the same. Customise every part of the customizedShoe from upper materials to the colours of the midsole and Nike Air unit, plus non-slip laces to secure the fit. Then, decide whether you want your outsole solid, tinted or translucent. There is even an upgraded insole for extra cushioning underfoot. Finally, a customizedShoe as multifaceted as you.','https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/cc11861c-e016-4925-a669-a9f8aa6ee356/custom-nike-air-max-97-customizedShoes-by-you.png');
# INSERT INTO tblshoe (price,description,imageurl) VALUES (2.600,'The AM97 was the shapeshifter of its time, and it is your turn to do the same. Customise every part of the customizedShoe from upper materials to the colours of the midsole and Nike Air unit, plus non-slip laces to secure the fit. Then, decide whether you want your outsole solid, tinted or translucent. There is even an upgraded insole for extra cushioning underfoot. Finally, a customizedShoe as multifaceted as you.','https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/6b6ac8ce-2527-4849-ab3e-d4ce990bef79/custom-nike-air-max-97-customizedShoes-by-you.png');
#
# ### BLAZER
# INSERT INTO tblshoe (price,description,imageurl) VALUES (2.600,'Praised by the streets for its classic simplicity and comfort, the Nike Blazer Low 77 Vintage returns with its low-profile style and heritage b-ball looks. Featuring luscious suede details, a retro Swoosh design and a super-soft collar, it is the must-have wardrobe staple that will take you everywhere.','https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3dbd02fc-6c4d-419f-b706-8293ed200d14/blazer-low-77-vintage-customizedShoes-5Gw9TZ.png');
# INSERT INTO tblshoe (price,description,imageurl) VALUES (2.600,'Praised by the streets for its classic simplicity and comfort, the Nike Blazer Low 77 Vintage returns with its low-profile style and heritage b-ball looks. Featuring luscious suede details, a retro Swoosh design and a super-soft collar, it is the must-have wardrobe staple that will take you everywhere.','https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fca59736-ff84-4797-9e64-0978d3b43731/blazer-low-77-vintage-customizedShoes-5Gw9TZ.png');
# INSERT INTO tblshoe (price,description,imageurl) VALUES (2.600,'Praised by the streets for its classic simplicity and comfort, the Nike Blazer Low 77 Vintage returns with its low-profile style and heritage b-ball looks. Featuring luscious suede details, a retro Swoosh design and a super-soft collar, it is the must-have wardrobe staple that will take you everywhere.','https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8371a7ff-046d-4d7c-a89c-4d84434b2d42/blazer-low-77-vintage-customizedShoes-5Gw9TZ.png');
#
#
# ### CORTEZ
# INSERT INTO tblshoe (price,description,imageurl) VALUES (2.600,'One word: tradition. From heritage running to fashion phenom, its retro appeal, sponge-soft midsole and see-saw detailing deliver decade after decade. This iteration offers easy-to-style colours with a vintage vibe.','https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e4acbdf1-367b-4412-8820-8f2a41d16da7/cortez-customizedShoes-svdKM9.png');
# INSERT INTO tblshoe (price,description,imageurl) VALUES (2.600,'One word: tradition. From heritage running to fashion phenom, its retro appeal, sponge-soft midsole and see-saw detailing deliver decade after decade. This iteration offers easy-to-style colours with a vintage vibe.','https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/82b7bb9c-451e-43e4-a1fa-408ec0072888/cortez-customizedShoes-svdKM9.png');
# INSERT INTO tblshoe (price,description,imageurl) VALUES (2.600,'One word: tradition. From heritage running to fashion phenom, its retro appeal, sponge-soft midsole and see-saw detailing deliver decade after decade. This iteration offers easy-to-style colours with a vintage vibe.','https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/02148fc1-9fb7-4df1-ab6d-2d696e9da039/cortez-customizedShoes-svdKM9.png');
#
# ## MLB
# ### MULE
# INSERT INTO tblshoe (price,description,imageurl) VALUES (2.600,'The MLB Mule is a new design heel customizedShoe. It is creating a trend in the community and is favored by young people. Young dynamic customizedShoes, suitable for all times and many different uses.','https://product.hstatic.net/200000642007/product/50t_32shs1111_1_e1620526925a4f2ea846504f60990f3e_bd451ae3d35c46baa6d88b04fef562a6_master.jpg');
# INSERT INTO tblshoe (price,description,imageurl) VALUES (2.600,'The MLB Mule is a new design heel customizedShoe. It is creating a trend in the community and is favored by young people. Young dynamic customizedShoes, suitable for all times and many different uses.','https://product.hstatic.net/200000642007/product/50l_32shs1111_1_45793aa1b8064f5f9221d9847dc3f662_900546c43cea427c9f0036f73834da02_master.jpg');
# INSERT INTO tblshoe (price,description,imageurl) VALUES (2.600,'The MLB Mule is a new design heel customizedShoe. It is creating a trend in the community and is favored by young people. Young dynamic customizedShoes, suitable for all times and many different uses.','https://product.hstatic.net/200000642007/product/07v_32shs1111_1_5d23cd7c12f1402dab24aca350624d45_7dd11016a95f4ef9abaef36ca3e0d162_master.jpg');
# INSERT INTO tblshoe (price,description,imageurl) VALUES (2.600,'The MLB Mule is a new design heel customizedShoe. It is creating a trend in the community and is favored by young people. Young dynamic customizedShoes, suitable for all times and many different uses.','https://product.hstatic.net/200000642007/product/07s_32shs1111_1_aeb6eb105a194cf8a876ffae4b376ed8_ef638ee652af4860a52fe74974cdab8d_master.jpg');
#
# ### PLAYBALL
# INSERT INTO tblshoe (price,description,imageurl) VALUES (2.600,'...','https://product.hstatic.net/200000642007/product/07ivs_3acvppr3n_1_b6cce9e680fc40d6a1a212702c6b6a43_684ecc99eb134846971207b2a5a24a27.jpg');
# INSERT INTO tblshoe (price,description,imageurl) VALUES (2.600,'...','https://product.hstatic.net/200000642007/product/50bks_3acvppr3n_1_6675b4850c6a4fa49758fbb4cff563e0_23b472a47b5b4c1789097b2c0af93a0d_master.jpg');
#
# ### Chunky
# INSERT INTO tblshoe (price,description,imageurl) VALUES (12.600,'...','https://product.hstatic.net/200000642007/product/50bks_3asxam82n_1_36a253345e994545a7ff20d44f17fa34_02092633535b4c6294a1e617a181d8c8_master.jpg');
# INSERT INTO tblshoe (price,description,imageurl) VALUES (12.600,'...','https://product.hstatic.net/200000642007/product/07bld_3asxxa12n_1_eb3c021e5d3545bc89130276a32a6645_44ee0fbb8b124cb2b9082a2bc484eef7_master.jpg');
# INSERT INTO tblshoe (price,description,imageurl) VALUES (12.600,'...','https://product.hstatic.net/200000642007/product/50ivs_3asxccb3n_1_491eab2f9a844a458dadb2f8d583f0c1_8d34d841567e4c82ad81be93c333ce14_master.jpg');
#
#
# ## VANS
# ### VANS CLASSIC
# INSERT INTO tblshoe (price,description,imageurl) VALUES (2.600,'','https://bizweb.dktcdn.net/thumb/small/100/140/774/products/vans-authentic-classic-black-vn000ee3blk-1.png?v=1625925617317');
# INSERT INTO tblshoe (price,description,imageurl) VALUES (2.600,'','https://images.vans.com/is/image/Vans/VN000EYE_BWW_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
# INSERT INTO tblshoe (price,description,imageurl) VALUES (12.600,'','https://images.vans.com/is/image/Vans/VN000BVZ_C9I_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
# INSERT INTO tblshoe (price,description,imageurl) VALUES (12.600,'','https://images.vans.com/is/image/Vans/VN000EYE_BPJ_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
#
# ### VANS Knu Skool
# INSERT INTO tblshoe (price,description,imageurl) VALUES (12.600,'The Knu Skool is a modern interpretation of a classic 90s style, defined by its puffed up tongue and 3D-molded Sidestripe, and tied off with oversized, chunky laces. With its in-your-face profile, color pop accents, and dramatic style details','https://images.vans.com/is/image/Vans/VN0009QC_BKA_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
# INSERT INTO tblshoe (price,description,imageurl) VALUES (12.600,'The Knu Skool is a modern interpretation of a classic 90s style, defined by its puffed up tongue and 3D-molded Sidestripe, and tied off with oversized, chunky laces. With its in-your-face profile, color pop accents, and dramatic style details','https://images.vans.com/is/image/Vans/VN0009QC_WHT_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
# INSERT INTO tblshoe (price,description,imageurl) VALUES (12.600,'The Knu Skool is a modern interpretation of a classic 90s style, defined by its puffed up tongue and 3D-molded Sidestripe, and tied off with oversized, chunky laces. With its in-your-face profile, color pop accents, and dramatic style details','https://images.vans.com/is/image/Vans/VN000CRP_GRN_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
# INSERT INTO tblshoe (price,description,imageurl) VALUES (12.600,'The Knu Skool is a modern interpretation of a classic 90s style, defined by its puffed up tongue and 3D-molded Sidestripe, and tied off with oversized, chunky laces. With its in-your-face profile, color pop accents, and dramatic style details','https://images.vans.com/is/image/Vans/VN0009QC_PRP_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
#
# ### VANS OLD SKOOL
# INSERT INTO tblshoe (price,description,imageurl) VALUES (132.600,'The Old Skool was our first footwear design to showcase the famous Vans Sidestripe—although back then, it was just a random doodle drawn by founder Paul Van Doren. Since its debut in 1977, this low-top silhouette has established itself as an icon in the skate, music, and fashion scenes. From 90s street skaters and punks to current hip hop and fashion legends, the Old Skool has consistently been the go-to customizedShoe for creatives who do things their own way.','https://images.vans.com/is/image/Vans/VN0A38G1_P0S_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
# INSERT INTO tblshoe (price,description,imageurl) VALUES (12.600,'The Old Skool was our first footwear design to showcase the famous Vans Sidestripe—although back then, it was just a random doodle drawn by founder Paul Van Doren. Since its debut in 1977, this low-top silhouette has established itself as an icon in the skate, music, and fashion scenes. From 90s street skaters and punks to current hip hop and fashion legends, the Old Skool has consistently been the go-to customizedShoe for creatives who do things their own way.','https://images.vans.com/is/image/Vans/VN000CP5_TAN_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
#
# ### VANS UltraRange
# INSERT INTO tblshoe (price,description,imageurl) VALUES (12.600,'What does it mean to be “ready for anything”? With the Vans UltraRange EXO, you’re bound to find out. This is a customizedShoe that not only stands up to the journey, but keeps you comfortable in the most uncomfortable of situations. Armed with updated RapidWeld detailing, a breathable Old Skool-inspired upper, and a revamped rubber toe and forefoot shape to provide an optimal fit without sacrificing Vans design DNA, this is the UltraRange—evolved.','https://images.vans.com/is/image/Vans/VN0A4U1K_WHT_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
# INSERT INTO tblshoe (price,description,imageurl) VALUES (12.600,'What does it mean to be “ready for anything”? With the Vans UltraRange EXO, you’re bound to find out. This is a customizedShoe that not only stands up to the journey, but keeps you comfortable in the most uncomfortable of situations. Armed with updated RapidWeld detailing, a breathable Old Skool-inspired upper, and a revamped rubber toe and forefoot shape to provide an optimal fit without sacrificing Vans design DNA, this is the UltraRange—evolved.','https://images.vans.com/is/image/Vans/VN0A4U1K_ZS8_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
# INSERT INTO tblshoe (price,description,imageurl) VALUES (142.600,'What does it mean to be “ready for anything”? With the Vans UltraRange EXO, you’re bound to find out. This is a customizedShoe that not only stands up to the journey, but keeps you comfortable in the most uncomfortable of situations. Armed with updated RapidWeld detailing, a breathable Old Skool-inspired upper, and a revamped rubber toe and forefoot shape to provide an optimal fit without sacrificing Vans design DNA, this is the UltraRange—evolved.','https://images.vans.com/is/image/Vans/VN0A4U1K_4LP_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
# INSERT INTO tblshoe (price,description,imageurl) VALUES (2.600,'What does it mean to be “ready for anything”? With the Vans UltraRange EXO, you’re bound to find out. This is a customizedShoe that not only stands up to the journey, but keeps you comfortable in the most uncomfortable of situations. Armed with updated RapidWeld detailing, a breathable Old Skool-inspired upper, and a revamped rubber toe and forefoot shape to provide an optimal fit without sacrificing Vans design DNA, this is the UltraRange—evolved.','https://images.vans.com/is/image/Vans/VN0A4U1K_ZS8_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
#
#
# ## New Balance
# ### Fresh Foam X
# INSERT INTO tblshoe (price,description,imageurl) VALUES (12.600,'If we only made one running customizedShoe, it would be the Fresh Foam X 1080. The unique combination of reliable comfort and high performance offers versatility that spans everyday to race day. The Fresh Foam X midsole cushioning is built for smooth transitions from landing to push-off, while a second-skin style mesh upper is breathable and supportive.','https://nb.scene7.com/is/image/NB/m1080k13_nb_02_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880');
# INSERT INTO tblshoe (price,description,imageurl) VALUES (12.600,'If we only made one running customizedShoe, it would be the Fresh Foam X 1080. The unique combination of reliable comfort and high performance offers versatility that spans everyday to race day. The Fresh Foam X midsole cushioning is built for smooth transitions from landing to push-off, while a second-skin style mesh upper is breathable and supportive.','https://nb.scene7.com/is/image/NB/m1080b13_nb_02_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880');
# INSERT INTO tblshoe (price,description,imageurl) VALUES (2.600,'If we only made one running customizedShoe, it would be the Fresh Foam X 1080. The unique combination of reliable comfort and high performance offers versatility that spans everyday to race day. The Fresh Foam X midsole cushioning is built for smooth transitions from landing to push-off, while a second-skin style mesh upper is breathable and supportive.','https://nb.scene7.com/is/image/NB/m1080l13_nb_02_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880');
# INSERT INTO tblshoe (price,description,imageurl) VALUES (12.600,'If we only made one running customizedShoe, it would be the Fresh Foam X 1080. The unique combination of reliable comfort and high performance offers versatility that spans everyday to race day. The Fresh Foam X midsole cushioning is built for smooth transitions from landing to push-off, while a second-skin style mesh upper is breathable and supportive.','https://nb.scene7.com/is/image/NB/m1080i13_nb_02_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880');
#
# ### Made in USA 990v6
# INSERT INTO tblshoe (price,description,imageurl) VALUES (162.600,'The designers of the first 990 were tasked with creating the single best running customizedShoe on the market. The MADE in USA 990v6 embraces this original mandate, with a series of performance-inspired updates.','https://nb.scene7.com/is/image/NB/m990gl6_nb_02_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880');
# INSERT INTO tblshoe (price,description,imageurl) VALUES (12.600,'The designers of the first 990 were tasked with creating the single best running customizedShoe on the market. The MADE in USA 990v6 embraces this original mandate, with a series of performance-inspired updates.','https://nb.scene7.com/is/image/NB/m990bk6_nb_02_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880');
#
#
#
#
#
#
#
#
#
#
#
# #1
# INSERT INTO tblimage (imageurl) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/817c815ba1db46629f89ac210127bebb_9366/Stan_Smith_Shoes_White_FX5501_02_standard_hover.jpg');
# INSERT INTO tblimage (imageurl) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f633a0c9cb124e16914cac210127ca62_9366/Stan_Smith_Shoes_White_FX5501_04_standard.jpg');
# INSERT INTO tblimage (imageurl) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a9e4a56537d34680ae9eac210127d326_9366/Stan_Smith_Shoes_White_FX5501_05_standard.jpg');
# INSERT INTO tblimage (imageurl) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a68e0082d9b140178cb9ac210127b7c3_9366/Stan_Smith_Shoes_White_FX5501_06_standard.jpg');
#
# #2
# INSERT INTO tblimage (imageurl) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/817c815ba1db46629f89ac210127bebb_9366/Stan_Smith_Shoes_White_FX5501_02_standard_hover.jpg');
# INSERT INTO tblimage (imageurl) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f633a0c9cb124e16914cac210127ca62_9366/Stan_Smith_Shoes_White_FX5501_04_standard.jpg');
# INSERT INTO tblimage (imageurl) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a9e4a56537d34680ae9eac210127d326_9366/Stan_Smith_Shoes_White_FX5501_05_standard.jpg');
# INSERT INTO tblimage (imageurl) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a68e0082d9b140178cb9ac210127b7c3_9366/Stan_Smith_Shoes_White_FX5501_06_standard.jpg');
#
# #3
# INSERT INTO tblimage (imageurl) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e910873744704b76a752f6af6232556c_9366/Stan_Smith_Shoes_White_ID2031_02_standard_hover.jpg');
# INSERT INTO tblimage (imageurl) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4e4e39029c7343dcbc08505d84b26fa9_9366/Stan_Smith_Shoes_White_ID2031_04_standard.jpg');
# INSERT INTO tblimage (imageurl) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a22d03afb1594555ba85f08936eb52f3_9366/Stan_Smith_Shoes_White_ID2031_05_standard.jpg');
# INSERT INTO tblimage (imageurl) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e55aae1769984c00936b62d36f142148_9366/Stan_Smith_Shoes_White_ID2031_06_standard.jpg');
#
# #4
# INSERT INTO tblimage (imageurl) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8453e94830a943b8865868ee4c72ba25_9366/Stan_Smith_Shoes_White_ID2032_02_standard_hover.jpg');
# INSERT INTO tblimage (imageurl) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/19f795d4eb93409f967836947ba4e3ec_9366/Stan_Smith_Shoes_White_ID2032_04_standard.jpg');
# INSERT INTO tblimage (imageurl) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e1ce4c675cb34547b62ea55f560d7845_9366/Stan_Smith_Shoes_White_ID2032_05_standard.jpg');
# INSERT INTO tblimage (imageurl) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ad647d18b43b4e03b6d402862f4f893a_9366/Stan_Smith_Shoes_White_ID2032_06_standard.jpg');
#
# #5
# INSERT INTO tblimage (imageurl) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8a358bcd5e3d453da815aad6009a249e_9366/Superstar_Shoes_White_EG4958_02_standard_hover.jpg');
# INSERT INTO tblimage (imageurl) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ff2e419f1eda4ebab23faad6009a3a9e_9366/Superstar_Shoes_White_EG4958_04_standard.jpg');
# INSERT INTO tblimage (imageurl) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/31cf91f6e16c4f0aa11caad6009a4590_9366/Superstar_Shoes_White_EG4958_05_standard.jpg');
# INSERT INTO tblimage (imageurl) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/27a4cab6236447958c5caad6009a19be_9366/Superstar_Shoes_White_EG4958_06_standard.jpg');
#
# #6
# INSERT INTO tblimage (imageurl) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ff0654f4089f4413baa7aae700d2a08c_9366/Superstar_Shoes_Black_EG4959_02_standard_hover.jpg');
# INSERT INTO tblimage (imageurl) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7c365af056f34e6bacf4aae700d2b7fe_9366/Superstar_Shoes_Black_EG4959_04_standard.jpg');
# INSERT INTO tblimage (imageurl) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/14051792ebf5402ea618aae700d296a1_9366/Superstar_Shoes_Black_EG4959_06_standard.jpg');
# INSERT INTO tblimage (imageurl) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ebe5146ef13d4d9096a5aae700d2c437_9366/Superstar_Shoes_Black_EG4959_05_standard.jpg');
#
# #7
# INSERT INTO tblimage (imageurl) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9838b1cb1e25477ca7896d443855ca68_9366/Superstar_Shoes_Burgundy_IF8071_02_standard_hover.jpg');
# INSERT INTO tblimage (imageurl) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c8a972664a27474495125584dec1c275_9366/Superstar_Shoes_Burgundy_IF8071_04_standard.jpg');
# INSERT INTO tblimage (imageurl) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4b0d50c98c9c460eaffe5d0cef385039_9366/Superstar_Shoes_Burgundy_IF8071_06_standard.jpg');
# INSERT INTO tblimage (imageurl) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7dd2b38101aa42149fc04fb41196e8a9_9366/Superstar_Shoes_Burgundy_IF8071_05_standard.jpg');
#
# #8
# INSERT INTO tblimage (imageurl) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cdf33741e9c14836afe99c1bee661821_9366/Superstar_Shoes_Green_IF8072_02_standard.jpg');
# INSERT INTO tblimage (imageurl) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/81291a17e7e348ef85425c5ff7a66b9d_9366/Superstar_Shoes_Green_IF8072_04_standard.jpg');
# INSERT INTO tblimage (imageurl) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5f976200f70343f18bb9a57c3842e868_9366/Superstar_Shoes_Green_IF8072_05_standard.jpg');
# INSERT INTO tblimage (imageurl) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/988136d20eb34120b1e38bd942c24a3c_9366/Superstar_Shoes_Green_IF8072_06_standard.jpg');
#
# #9
# INSERT INTO tblimage (imageurl) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/165b22d5748b4e4cbad8af1e00c3b9c8_9366/NMD_S1_Shoes_White_GW4652_02_standard_hover.jpg');
# INSERT INTO tblimage (imageurl) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/22660014819240f7b8b1af1e00c3c961_9366/NMD_S1_Shoes_White_GW4652_04_standard.jpg');
# INSERT INTO tblimage (imageurl) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f22cced427cf432bab26af1e00c3d26e_9366/NMD_S1_Shoes_White_GW4652_05_standard.jpg');
# INSERT INTO tblimage (imageurl) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/06fcec96df284aaf8485af1e00c3b261_9366/NMD_S1_Shoes_White_GW4652_06_standard.jpg');
#
# #10
# INSERT INTO tblimage (imageurl) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4ab2f16766de4cfd9458af8c00d23158_9366/NMD_S1_Shoes_Turquoise_HQ4437_02_standard_hover.jpg');
# INSERT INTO tblimage (imageurl) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f0bed4acaa654b02b1baaf8c00d243ab_9366/NMD_S1_Shoes_Turquoise_HQ4437_04_standard.jpg');
# INSERT INTO tblimage (imageurl) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6b903e5be20e4c778dc1af8c00d24f77_9366/NMD_S1_Shoes_Turquoise_HQ4437_05_standard.jpg');
# INSERT INTO tblimage (imageurl) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/789b0bd2b34946b1ba78af8c00d224c5_9366/NMD_S1_Shoes_Turquoise_HQ4437_06_standard.jpg');
#
# #11
# INSERT INTO tblimage (imageurl) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/bdd5b151b9a74671bdbeaf8c00d288e1_9366/NMD_S1_Shoes_Beige_HQ4439_02_standard_hover.jpg');
# INSERT INTO tblimage (imageurl) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/04a01b31153948598f1faf8c00d29caa_9366/NMD_S1_Shoes_Beige_HQ4439_04_standard.jpg');
# INSERT INTO tblimage (imageurl) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1de1d0667a3f401aa096af8c00d2a7d4_9366/NMD_S1_Shoes_Beige_HQ4439_05_standard.jpg');
# INSERT INTO tblimage (imageurl) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/220400bc865242209f63af8c00d27dae_9366/NMD_S1_Shoes_Beige_HQ4439_06_standard.jpg');
#
# #12
# INSERT INTO tblimage (imageurl) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4ab2f16766de4cfd9458af8c00d23158_9366/NMD_S1_Shoes_Turquoise_HQ4437_02_standard_hover.jpg');
# INSERT INTO tblimage (imageurl) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f0bed4acaa654b02b1baaf8c00d243ab_9366/NMD_S1_Shoes_Turquoise_HQ4437_04_standard.jpg');
# INSERT INTO tblimage (imageurl) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6b903e5be20e4c778dc1af8c00d24f77_9366/NMD_S1_Shoes_Turquoise_HQ4437_05_standard.jpg');
# INSERT INTO tblimage (imageurl) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/789b0bd2b34946b1ba78af8c00d224c5_9366/NMD_S1_Shoes_Turquoise_HQ4437_06_standard.jpg');
#
# #13
# INSERT INTO tblimage (imageurl) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ab043655-acd5-4643-85b0-cf8f381e3b4b/air-force-1-07-customizedShoes-cWFrxr.png');
# INSERT INTO tblimage (imageurl) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/58677f3d-3e3e-40b5-bce3-3a14191dc36b/air-force-1-07-customizedShoes-cWFrxr.png');
# INSERT INTO tblimage (imageurl) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/12c6f454-17de-4d0b-bc29-dabf32eadea3/air-force-1-07-customizedShoes-cWFrxr.png');
# INSERT INTO tblimage (imageurl) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ae2597c0-59f7-4552-bc38-b531be5665ff/air-force-1-07-customizedShoes-cWFrxr.png');
#
# #14
# INSERT INTO tblimage (imageurl) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3b6360aa-fa59-4c97-9504-28c856f79759/air-force-1-07-customizedShoes-CMNWtG.png');
# INSERT INTO tblimage (imageurl) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/cba89489-eb3b-485a-8d12-02b01fc49f25/air-force-1-07-customizedShoes-CMNWtG.png');
# INSERT INTO tblimage (imageurl) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4ee81ad8-fc92-4c07-83c5-dce318c4156f/air-force-1-07-customizedShoes-CMNWtG.png');
# INSERT INTO tblimage (imageurl) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d1910142-f82d-4a74-ba35-d58b57daaf59/air-force-1-07-customizedShoes-CMNWtG.png');
#
# #15
# INSERT INTO tblimage (imageurl) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2483d8eb-d559-4e27-96f1-9ad1950ff72f/air-force-1-07-wb-customizedShoe-j46FxX.png');
# INSERT INTO tblimage (imageurl) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5b320b94-6b58-4eba-8bf1-e3c021a4f418/air-force-1-07-wb-customizedShoe-j46FxX.png');
# INSERT INTO tblimage (imageurl) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/012378b0-2e16-4774-97ed-547c1d16b25a/air-force-1-07-wb-customizedShoe-j46FxX.png');
# INSERT INTO tblimage (imageurl) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/83fd9fba-4174-44e8-8f3b-c369059e4cad/air-force-1-07-wb-customizedShoe-j46FxX.png');
#
# #16
# INSERT INTO tblimage (imageurl) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a185a94c-818b-46ae-bd0b-d54e5834b907/air-force-1-07-customizedShoes-VWCc04.png');
# INSERT INTO tblimage (imageurl) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e634b359-8d30-4720-b7fb-2769f9bb53fd/air-force-1-07-customizedShoes-VWCc04.png');
# INSERT INTO tblimage (imageurl) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3010d407-c09e-4124-81c8-d84a955af273/air-force-1-07-customizedShoes-VWCc04.png');
# INSERT INTO tblimage (imageurl) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9a8fe0e9-52d0-4581-a54a-7a738e75a2be/air-force-1-07-customizedShoes-VWCc04.png');
#
# #17
# INSERT INTO tblimage (imageurl) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7c6cb39f-1218-4eff-bddc-55e4a435a6cf/air-max-97-customizedShoes-EBZrb8.png');
# INSERT INTO tblimage (imageurl) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f75082ae-6ef7-4922-a356-d52665aa587c/air-max-97-customizedShoes-EBZrb8.png');
# INSERT INTO tblimage (imageurl) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/38d684fe-897f-42e1-be11-d0612eaa05db/air-max-97-customizedShoes-EBZrb8.png');
# INSERT INTO tblimage (imageurl) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/60a9269c-516f-4291-abc9-841745a74e49/air-max-97-customizedShoes-EBZrb8.png');
#
# #18
# INSERT INTO tblimage (imageurl) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/dc6e7adc-00da-4978-9ea3-77828d6c4b1a/air-max-97-customizedShoes-EBZrb8.png');
# INSERT INTO tblimage (imageurl) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b3463394-fa1e-4124-932e-ef999e30f946/air-max-97-customizedShoes-EBZrb8.png');
# INSERT INTO tblimage (imageurl) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d7a170d5-4a95-495a-9023-e5dc624d906e/air-max-97-customizedShoes-EBZrb8.png');
# INSERT INTO tblimage (imageurl) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/52f2b310-9e5a-4bd9-b724-ea821173fa0a/air-max-97-customizedShoes-EBZrb8.png');
#
# #19
# INSERT INTO tblimage (imageurl) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0c632f16-281f-424e-b26a-45b20ea7c28e/air-max-97-customizedShoes-B2TV3Z.png');
# INSERT INTO tblimage (imageurl) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8d7bf343-7a90-49fe-b9ff-585d01ccd1fd/air-max-97-customizedShoes-B2TV3Z.png');
# INSERT INTO tblimage (imageurl) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f7c6de78-cbfb-4376-82a2-472c21f29814/air-max-97-customizedShoes-B2TV3Z.png');
# INSERT INTO tblimage (imageurl) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7da900d5-fad5-4c4b-994b-db2766d5e2a5/air-max-97-customizedShoes-B2TV3Z.png');
#
# #20
# INSERT INTO tblimage (imageurl) VALUES ('https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/896597b3-01e7-4203-9711-c65d9a4b67bf/custom-nike-air-max-97-customizedShoes-by-you.png');
# INSERT INTO tblimage (imageurl) VALUES ('https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/bbfa7b7b-df2f-4727-aab5-c48d684e3a24/custom-nike-air-max-97-customizedShoes-by-you.png');
# INSERT INTO tblimage (imageurl) VALUES ('https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5b9f2db2-0efc-4940-a04a-3cdccca6cf22/custom-nike-air-max-97-customizedShoes-by-you.png');
# INSERT INTO tblimage (imageurl) VALUES ('https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/beb812ab-a58f-4863-9a30-a68dba30535c/custom-nike-air-max-97-customizedShoes-by-you.png');
#
# #21
# INSERT INTO tblimage (imageurl) VALUES ('https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f7dda3bb-9024-47b5-bd0a-6f9a0c8eaca9/custom-nike-air-max-97-customizedShoes-by-you.png');
# INSERT INTO tblimage (imageurl) VALUES ('https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fd313ed2-c864-4394-9fb2-a8f774f85d49/custom-nike-air-max-97-customizedShoes-by-you.png');
# INSERT INTO tblimage (imageurl) VALUES ('https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/3eba0f82-5e2e-41cb-b86b-465cfbb8d26f/custom-nike-air-max-97-customizedShoes-by-you.png');
# INSERT INTO tblimage (imageurl) VALUES ('https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/2d26097f-c98b-415a-9417-4c50b99c7d50/custom-nike-air-max-97-customizedShoes-by-you.png');
#
# #22
# INSERT INTO tblimage (imageurl) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4100beb8-394c-4552-89ff-ad2dd03e8007/blazer-low-77-vintage-customizedShoes-5Gw9TZ.png');
# INSERT INTO tblimage (imageurl) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/67ddef9d-8de0-4bef-94ed-3f08e1cf4d83/blazer-low-77-vintage-customizedShoes-5Gw9TZ.png');
# INSERT INTO tblimage (imageurl) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/db724bb2-46ab-40c9-abc8-5f3709b842d4/blazer-low-77-vintage-customizedShoes-5Gw9TZ.png');
# INSERT INTO tblimage (imageurl) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/98fb26c7-255b-4b9f-8cc6-0b90c686baf9/blazer-low-77-vintage-customizedShoes-5Gw9TZ.png');
#
# #23
# INSERT INTO tblimage (imageurl) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8efb4d34-600a-4cdc-ae8a-4cf95149ea1a/blazer-low-77-vintage-customizedShoes-5Gw9TZ.png');
# INSERT INTO tblimage (imageurl) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1b0792e5-9266-429f-b4e3-f5e7270ad3b8/blazer-low-77-vintage-customizedShoes-5Gw9TZ.png');
# INSERT INTO tblimage (imageurl) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2ea0c191-6c69-4f95-9119-a564383fa253/blazer-low-77-vintage-customizedShoes-5Gw9TZ.png');
# INSERT INTO tblimage (imageurl) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3dee6cb1-895f-42d5-a687-786d7d17eef7/blazer-low-77-vintage-customizedShoes-5Gw9TZ.png');
#
# #24
# INSERT INTO tblimage (imageurl) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b837b4ce-8fc9-40ce-9f07-468b9c7a428e/blazer-low-77-vintage-customizedShoes-5Gw9TZ.png');
# INSERT INTO tblimage (imageurl) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6a93ddd7-b533-41b1-bbaf-cdaca7711a04/blazer-low-77-vintage-customizedShoes-5Gw9TZ.png');
# INSERT INTO tblimage (imageurl) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5592ab95-166b-4a8f-9e78-6e136c2a9c75/blazer-low-77-vintage-customizedShoes-5Gw9TZ.png');
# INSERT INTO tblimage (imageurl) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/52af7d59-9060-42ec-8c8c-78183c48b5ff/blazer-low-77-vintage-customizedShoes-5Gw9TZ.png');
#
# #25
# INSERT INTO tblimage (imageurl) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b053ebe9-aa11-491d-baf7-1d6f1319ba37/cortez-customizedShoes-svdKM9.png');
# INSERT INTO tblimage (imageurl) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/29ad7010-3b9a-4a1a-84c5-83cc1c6df792/cortez-customizedShoes-svdKM9.png');
# INSERT INTO tblimage (imageurl) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0e921af3-7443-4438-bc60-e1166b1caf53/cortez-customizedShoes-svdKM9.png');
# INSERT INTO tblimage (imageurl) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7429f0dc-d8b7-4d3c-9377-08684397bf17/cortez-customizedShoes-svdKM9.png');
#
# #26
# INSERT INTO tblimage (imageurl) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/87a83d95-0c8b-489f-9a05-44a87301a589/cortez-customizedShoes-svdKM9.png');
# INSERT INTO tblimage (imageurl) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7943aa0e-5e46-4e19-ac27-85963221ccb4/cortez-customizedShoes-svdKM9.png');
# INSERT INTO tblimage (imageurl) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f11f57d1-1632-43a5-a05b-c817452bec2a/cortez-customizedShoes-svdKM9.png');
# INSERT INTO tblimage (imageurl) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5ab5f198-233e-478d-978b-54994fe08aa7/cortez-customizedShoes-svdKM9.png');
#
# #27
# INSERT INTO tblimage (imageurl) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/02148fc1-9fb7-4df1-ab6d-2d696e9da039/cortez-customizedShoes-svdKM9.png');
# INSERT INTO tblimage (imageurl) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f3d3f77a-bb06-481c-a6cf-0085b985d9a6/cortez-customizedShoes-svdKM9.png');
# INSERT INTO tblimage (imageurl) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fd7642be-db2b-46e9-ab77-5ed20bb8a5d7/cortez-customizedShoes-svdKM9.png');
# INSERT INTO tblimage (imageurl) VALUES ('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b75f6368-982b-430e-9073-fe104b8d2ca4/cortez-customizedShoes-svdKM9.png');
#
# #28
# INSERT INTO tblimage (imageurl) VALUES ('https://product.hstatic.net/200000642007/product/50t_32shs1111_2_13e018415a2e4efab0ed4cf34a8641f8_9df68654feb443ae8c3cc63606630fcc_master.jpg');
# INSERT INTO tblimage (imageurl) VALUES ('https://product.hstatic.net/200000642007/product/50t_32shs1111_3_f47c4e0cc97c4522bc54af0e9965d7a0_893d426b29384158b2d7ae5270461b17_master.jpg');
# INSERT INTO tblimage (imageurl) VALUES ('https://product.hstatic.net/200000642007/product/50t_32shs1111_4_84663d39cd4d433c86e62a24c8dd9cf4_85679ec785294ff69f92a084824bcf28_master.jpg');
# INSERT INTO tblimage (imageurl) VALUES ('https://product.hstatic.net/200000642007/product/50t_32shs1111_5_0cee3e66790645449be36a8b8f46b740_d0f8774544b34311994131b29809dc1a_master.jpg');
#
# #29
# INSERT INTO tblimage (imageurl) VALUES ('https://product.hstatic.net/200000642007/product/50l_32shs1111_3_9ca393cff546416999fb7b848b984991_cfc963ce39934e6aa815dfaf1e28e4ff_master.jpg');
# INSERT INTO tblimage (imageurl) VALUES ('https://product.hstatic.net/200000642007/product/50l_32shs1111_4_2e23daa91dd14aa08fca172802b9f68a_a2750b26a8464087ac5c4977193ff5fb_master.jpg');
# INSERT INTO tblimage (imageurl) VALUES ('https://product.hstatic.net/200000642007/product/50l_32shs1111_5_21ebee2e86934d928ab85f6a0ec1ff86_9d93a438cfa142cb867959ecdb7ad8e1_master.jpg');
# INSERT INTO tblimage (imageurl) VALUES ('https://product.hstatic.net/200000642007/product/50l_32shs1111_6_0d82788181b549e890396bbe53acdaec_da651cf909e343e2a2f1e3b2c77337ce_master.jpg');
#
# #30
# INSERT INTO tblimage (imageurl) VALUES ('https://product.hstatic.net/200000642007/product/07v_32shs1111_3_88eb529d82304a82b13f8c46cc6a38c6_0e7f0d1809fa42a3b7ced1dc9a7d378f_master.jpg');
# INSERT INTO tblimage (imageurl) VALUES ('https://product.hstatic.net/200000642007/product/07v_32shs1111_4_2d663838fabb49e0bd979f66e8f34c6e_c35e3d183d844d60bd23292b5062fb35_master.jpg');
# INSERT INTO tblimage (imageurl) VALUES ('https://product.hstatic.net/200000642007/product/07v_32shs1111_5_7dba58ff953f4f729c6c35bd5a2085ac_c7ca2fc6223a412cbeaabdce204d210a_master.jpg');
# INSERT INTO tblimage (imageurl) VALUES ('https://product.hstatic.net/200000642007/product/07v_32shs1111_6_7dd9a9bb02cc49f8a930551b7f14145c_b0b35d2049f74dd283264bdb3d3527f8_master.jpg');
#
# #31
# INSERT INTO tblimage (imageurl) VALUES ('https://product.hstatic.net/200000642007/product/07s_32shs1111_2_10026872939044a9ba89281e33c80e8f_13614b0540614c40bcbb39c9c999edec_master.jpg');
# INSERT INTO tblimage (imageurl) VALUES ('https://product.hstatic.net/200000642007/product/07s_32shs1111_3_ba55293b3a0b490c8fca30af604e41c2_4fbb72d92ed248deb89d5b90b50d152c_master.jpg');
# INSERT INTO tblimage (imageurl) VALUES ('https://product.hstatic.net/200000642007/product/07s_32shs1111_4_6bfd8a0398b24eeaaad8d583f47b2c87_fa3d71a7e6a04737b7a516779fa9ddf6_master.jpg');
# INSERT INTO tblimage (imageurl) VALUES ('https://product.hstatic.net/200000642007/product/07s_32shs1111_5_8e852cc0ec174310b5c986e3fbcdf41e_f3b5b6f78a004155bb1708a8339ee234_master.jpg');
#
# #32
# INSERT INTO tblimage (imageurl) VALUES ('https://product.hstatic.net/200000642007/product/07ivs_3acvppr3n_3_dbd72786a16849d69794564b76c3ee73_cf84044849d442188a4c7204d78b4efe_master.jpg');
# INSERT INTO tblimage (imageurl) VALUES ('https://product.hstatic.net/200000642007/product/07ivs_3acvppr3n_4_8b71633d84a647248b365f1189106952_765120a74e5b4ae4bdc7a93a30f92e20_master.jpg');
# INSERT INTO tblimage (imageurl) VALUES ('https://product.hstatic.net/200000642007/product/07ivs_3acvppr3n_5_edd4b64e65e34af289a17313d9d85482_e1bcd8d62770463e94ad0c9045119c56_master.jpg');
# INSERT INTO tblimage (imageurl) VALUES ('https://product.hstatic.net/200000642007/product/07ivs_3acvppr3n_7_f67301b295b8457dba697a9a3bbd1e5d_c60d3c2664c340a6b9200cb75aa9b8e1_master.jpg');
#
# #33
# INSERT INTO tblimage (imageurl) VALUES ('https://product.hstatic.net/200000642007/product/50bks_3acvppr3n_2_e1aecadfab6649218711d130c75807b3_fc3911b9423a48639a919c355652f67a_master.jpg');
# INSERT INTO tblimage (imageurl) VALUES ('https://product.hstatic.net/200000642007/product/50bks_3acvppr3n_3_dd7210fc89024750895894e9187b30e9_f80dd28759a747ccba6d1feba2dd338c_master.jpg');
# INSERT INTO tblimage (imageurl) VALUES ('https://product.hstatic.net/200000642007/product/50bks_3acvppr3n_4_5f9683f99e7540aaa019e37105bc89af_233ab0d3c2ca4ff4b7f91f6eca9fcf4e_master.jpg');
# INSERT INTO tblimage (imageurl) VALUES ('https://product.hstatic.net/200000642007/product/50bks_3acvppr3n_6_3f98378940094f49b1e154598c35e0cc_65cc0b22a2704ee6a28ad9ab1869b457_master.jpg');
#
# #34
# INSERT INTO tblimage (imageurl) VALUES ('https://product.hstatic.net/200000642007/product/50bks_3asxam82n_2_9a067cf066db4cc083fa4052983917e2_2af7606b6f4e418991c21900f40fbdb2_master.jpg');
# INSERT INTO tblimage (imageurl) VALUES ('https://product.hstatic.net/200000642007/product/50bks_3asxam82n_3_196a0789dcac476eafee7359788251e4_df294dad6ed8412c9c042d25547eb078_master.jpg');
# INSERT INTO tblimage (imageurl) VALUES ('https://product.hstatic.net/200000642007/product/50bks_3asxam82n_4_2128c6c8fac6422dad41f965c884bb99_cb5f79bd231b48d1a616c8eb7ed9d681_master.jpg');
# INSERT INTO tblimage (imageurl) VALUES ('https://product.hstatic.net/200000642007/product/50bks_3asxam82n_6_751370f2cb7140a48e7fd714cbe5bbe7_489b612884a943a7b67b450de49bd3b6_master.jpg');
#
# #35
# INSERT INTO tblimage (imageurl) VALUES ('https://product.hstatic.net/200000642007/product/07bld_3asxxa12n_3_ee28384313ab4958b2fd086d2e6474f3_2288b706ad33432c970c4fc3b74d4171_master.jpg');
# INSERT INTO tblimage (imageurl) VALUES ('https://product.hstatic.net/200000642007/product/07bld_3asxxa12n_4_37d24cea190847eca6be97bd64e80ee9_bd49f01d5ae74450bcee29b35c0118bc_master.jpg');
# INSERT INTO tblimage (imageurl) VALUES ('https://product.hstatic.net/200000642007/product/07bld_3asxxa12n_5_dc1ee6fe76244964ba9dee186ea7c26b_d77bfc4b1d244fc08aa2030b52b551b5_master.jpg');
# INSERT INTO tblimage (imageurl) VALUES ('https://product.hstatic.net/200000642007/product/07bld_3asxxa12n_7_ff5c372c924b4687b53b5b262b052aee_e77ec5920cd94d1280eb4d29d53124ee_master.jpg');
#
# #36
# INSERT INTO tblimage (imageurl) VALUES ('https://product.hstatic.net/200000642007/product/50ivs_3asxccb3n_2_0058b0a2f1614c08aa6fab2dd288b858_fbb7ae9f4319412186bd06d211b1a218_master.jpg');
# INSERT INTO tblimage (imageurl) VALUES ('https://product.hstatic.net/200000642007/product/50ivs_3asxccb3n_3_7e96835e78fc4eef8393ad320275c6b6_bfd1b4eabe0c4b9fac88e0f612313cbe_master.jpg');
# INSERT INTO tblimage (imageurl) VALUES ('https://product.hstatic.net/200000642007/product/50ivs_3asxccb3n_4_490d1ace7703456aa5be0e43a9ebe6a1_eff51602d9cb47d6b5ae6c6514787baa_master.jpg');
# INSERT INTO tblimage (imageurl) VALUES ('https://product.hstatic.net/200000642007/product/50ivs_3asxccb3n_6_9cdc94c11d194d619b4d8708db9be816_46c58477ad2f45769e568e4ed584f2c5_master.jpg');
#
# #37
# INSERT INTO tblimage (imageurl) VALUES ('https://images.vans.com/is/image/Vans/VN000EE3_BLK_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
# INSERT INTO tblimage (imageurl) VALUES ('https://images.vans.com/is/image/Vans/VN000EE3_BLK_ALT1?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
# INSERT INTO tblimage (imageurl) VALUES ('https://images.vans.com/is/image/Vans/VN000EE3_BLK_ALT2?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
# INSERT INTO tblimage (imageurl) VALUES ('https://images.vans.com/is/image/Vans/VN000EE3_BLK_ALT3?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
#
# #38
# INSERT INTO tblimage (imageurl) VALUES ('https://images.vans.com/is/image/Vans/VN000EYE_BWW_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
# INSERT INTO tblimage (imageurl) VALUES ('https://images.vans.com/is/image/Vans/VN000EYE_BWW_ALT1?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
# INSERT INTO tblimage (imageurl) VALUES ('https://images.vans.com/is/image/Vans/VN000EYE_BWW_ALT2?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
# INSERT INTO tblimage (imageurl) VALUES ('https://images.vans.com/is/image/Vans/VN000EYE_BWW_ALT3?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
#
# #39
# INSERT INTO tblimage (imageurl) VALUES ('https://images.vans.com/is/image/Vans/VN000BVZ_C9I_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
# INSERT INTO tblimage (imageurl) VALUES ('https://images.vans.com/is/image/Vans/VN000BVZ_C9I_ALT1?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
# INSERT INTO tblimage (imageurl) VALUES ('https://images.vans.com/is/image/Vans/VN000BVZ_C9I_ALT2?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
# INSERT INTO tblimage (imageurl) VALUES ('https://images.vans.com/is/image/Vans/VN000BVZ_C9I_ALT3?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
#
# #40
# INSERT INTO tblimage (imageurl) VALUES ('https://images.vans.com/is/image/Vans/VN000EYE_BPJ_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
# INSERT INTO tblimage (imageurl) VALUES ('https://images.vans.com/is/image/Vans/VN000EYE_BPJ_ALT1?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
# INSERT INTO tblimage (imageurl) VALUES ('https://images.vans.com/is/image/Vans/VN000EYE_BPJ_ALT2?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
# INSERT INTO tblimage (imageurl) VALUES ('https://images.vans.com/is/image/Vans/VN000EYE_BPJ_ALT3?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
#
# #41
# INSERT INTO tblimage (imageurl) VALUES ('https://images.vans.com/is/image/Vans/VN0009QC_BKA_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
# INSERT INTO tblimage (imageurl) VALUES ('https://images.vans.com/is/image/Vans/VN0009QC_BKA_ALT1?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
# INSERT INTO tblimage (imageurl) VALUES ('https://images.vans.com/is/image/Vans/VN0009QC_BKA_ALT2?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
# INSERT INTO tblimage (imageurl) VALUES ('https://images.vans.com/is/image/Vans/VN0009QC_BKA_ALT3?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
#
# #42
# INSERT INTO tblimage (imageurl) VALUES ('https://images.vans.com/is/image/Vans/VN0009QC_WHT_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
# INSERT INTO tblimage (imageurl) VALUES ('https://images.vans.com/is/image/Vans/VN0009QC_WHT_ALT1?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
# INSERT INTO tblimage (imageurl) VALUES ('https://images.vans.com/is/image/Vans/VN0009QC_WHT_ALT2?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
# INSERT INTO tblimage (imageurl) VALUES ('https://images.vans.com/is/image/Vans/VN0009QC_WHT_ALT3?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
#
# #43
# INSERT INTO tblimage (imageurl) VALUES ('https://images.vans.com/is/image/Vans/VN000CRP_GRN_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
# INSERT INTO tblimage (imageurl) VALUES ('https://images.vans.com/is/image/Vans/VN000CRP_GRN_ALT1?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
# INSERT INTO tblimage (imageurl) VALUES ('https://images.vans.com/is/image/Vans/VN000CRP_GRN_ALT2?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
# INSERT INTO tblimage (imageurl) VALUES ('https://images.vans.com/is/image/Vans/VN000CRP_GRN_ALT3?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
#
# #44
# INSERT INTO tblimage (imageurl) VALUES ('https://images.vans.com/is/image/Vans/VN0009QC_PRP_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
# INSERT INTO tblimage (imageurl) VALUES ('https://images.vans.com/is/image/Vans/VN0009QC_PRP_ALT1?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
# INSERT INTO tblimage (imageurl) VALUES ('https://images.vans.com/is/image/Vans/VN0009QC_PRP_ALT2?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
# INSERT INTO tblimage (imageurl) VALUES ('https://images.vans.com/is/image/Vans/VN0009QC_PRP_ALT3?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
#
# #45
# INSERT INTO tblimage (imageurl) VALUES ('https://images.vans.com/is/image/Vans/VN0A38G1_P0S_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
# INSERT INTO tblimage (imageurl) VALUES ('https://images.vans.com/is/image/Vans/VN0A38G1_P0S_ALT1?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
# INSERT INTO tblimage (imageurl) VALUES ('https://images.vans.com/is/image/Vans/VN0A38G1_P0S_ALT2?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
# INSERT INTO tblimage (imageurl) VALUES ('https://images.vans.com/is/image/Vans/VN0A38G1_P0S_ALT3?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
#
# #46
# INSERT INTO tblimage (imageurl) VALUES ('https://images.vans.com/is/image/Vans/VN000CP5_TAN_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
# INSERT INTO tblimage (imageurl) VALUES ('https://images.vans.com/is/image/Vans/VN000CP5_TAN_ALT1?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
# INSERT INTO tblimage (imageurl) VALUES ('https://images.vans.com/is/image/Vans/VN000CP5_TAN_ALT2?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
# INSERT INTO tblimage (imageurl) VALUES ('https://images.vans.com/is/image/Vans/VN000CP5_TAN_ALT3?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
#
# #47
# INSERT INTO tblimage (imageurl) VALUES ('https://images.vans.com/is/image/Vans/VN0A4U1K_WHT_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
# INSERT INTO tblimage (imageurl) VALUES ('https://images.vans.com/is/image/Vans/VN0A4U1K_WHT_ALT1?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
# INSERT INTO tblimage (imageurl) VALUES ('https://images.vans.com/is/image/Vans/VN0A4U1K_WHT_ALT2?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
# INSERT INTO tblimage (imageurl) VALUES ('https://images.vans.com/is/image/Vans/VN0A4U1K_WHT_ALT3?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
#
# #48
# INSERT INTO tblimage (imageurl) VALUES ('https://images.vans.com/is/image/Vans/VN0A4U1K_ZS8_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
# INSERT INTO tblimage (imageurl) VALUES ('https://images.vans.com/is/image/Vans/VN0A4U1K_ZS8_ALT1?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
# INSERT INTO tblimage (imageurl) VALUES ('https://images.vans.com/is/image/Vans/VN0A4U1K_ZS8_ALT2?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
# INSERT INTO tblimage (imageurl) VALUES ('https://images.vans.com/is/image/Vans/VN0A4U1K_ZS8_ALT3?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
#
# #49
# INSERT INTO tblimage (imageurl) VALUES ('https://images.vans.com/is/image/Vans/VN0A4U1K_4LP_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
# INSERT INTO tblimage (imageurl) VALUES ('https://images.vans.com/is/image/Vans/VN0A4U1K_4LP_ALT1?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
# INSERT INTO tblimage (imageurl) VALUES ('https://images.vans.com/is/image/Vans/VN0A4U1K_4LP_ALT2?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
# INSERT INTO tblimage (imageurl) VALUES ('https://images.vans.com/is/image/Vans/VN0A4U1K_4LP_ALT3?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
#
# #50
# INSERT INTO tblimage (imageurl) VALUES ('https://images.vans.com/is/image/Vans/VN0A4U1K_ZS8_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
# INSERT INTO tblimage (imageurl) VALUES ('https://images.vans.com/is/image/Vans/VN0A4U1K_ZS8_ALT1?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
# INSERT INTO tblimage (imageurl) VALUES ('https://images.vans.com/is/image/Vans/VN0A4U1K_ZS8_ALT2?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
# INSERT INTO tblimage (imageurl) VALUES ('https://images.vans.com/is/image/Vans/VN0A4U1K_ZS8_ALT3?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
#
# #51
# INSERT INTO tblimage (imageurl) VALUES ('https://nb.scene7.com/is/image/NB/w1080k13_nb_02_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880');
# INSERT INTO tblimage (imageurl) VALUES ('https://nb.scene7.com/is/image/NB/w1080k13_nb_05_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880');
# INSERT INTO tblimage (imageurl) VALUES ('https://nb.scene7.com/is/image/NB/w1080k13_nb_03_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880');
# INSERT INTO tblimage (imageurl) VALUES ('https://nb.scene7.com/is/image/NB/w1080k13_nb_04_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880');
#
# #52
# INSERT INTO tblimage (imageurl) VALUES ('https://nb.scene7.com/is/image/NB/w1080b13_nb_02_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880');
# INSERT INTO tblimage (imageurl) VALUES ('https://nb.scene7.com/is/image/NB/w1080b13_nb_05_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880');
# INSERT INTO tblimage (imageurl) VALUES ('https://nb.scene7.com/is/image/NB/w1080b13_nb_03_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880');
# INSERT INTO tblimage (imageurl) VALUES ('https://nb.scene7.com/is/image/NB/w1080b13_nb_04_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880');
#
# #53
# INSERT INTO tblimage (imageurl) VALUES ('https://nb.scene7.com/is/image/NB/w1080d13_nb_02_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880');
# INSERT INTO tblimage (imageurl) VALUES ('https://nb.scene7.com/is/image/NB/w1080d13_nb_05_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880');
# INSERT INTO tblimage (imageurl) VALUES ('https://nb.scene7.com/is/image/NB/w1080d13_nb_03_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880');
# INSERT INTO tblimage (imageurl) VALUES ('https://nb.scene7.com/is/image/NB/w1080d13_nb_07_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880');
#
# #54
# INSERT INTO tblimage (imageurl) VALUES ('https://nb.scene7.com/is/image/NB/m1080i13_nb_02_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880');
# INSERT INTO tblimage (imageurl) VALUES ('https://nb.scene7.com/is/image/NB/m1080i13_nb_05_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880');
# INSERT INTO tblimage (imageurl) VALUES ('https://nb.scene7.com/is/image/NB/w860k13_nb_03_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880');
# INSERT INTO tblimage (imageurl) VALUES ('https://nb.scene7.com/is/image/NB/w860k13_nb_04_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880');
#
# #55
# INSERT INTO tblimage (imageurl) VALUES ('https://nb.scene7.com/is/image/NB/w990gl6_nb_02_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880');
# INSERT INTO tblimage (imageurl) VALUES ('https://nb.scene7.com/is/image/NB/w990gl6_nb_05_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880');
# INSERT INTO tblimage (imageurl) VALUES ('https://nb.scene7.com/is/image/NB/w990gl6_nb_03_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880');
# INSERT INTO tblimage (imageurl) VALUES ('https://nb.scene7.com/is/image/NB/w990gl6_nb_04_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880');
#
# #56
# INSERT INTO tblimage (imageurl) VALUES ('https://nb.scene7.com/is/image/NB/w990nv6_nb_02_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880');
# INSERT INTO tblimage (imageurl) VALUES ('https://nb.scene7.com/is/image/NB/w990nv6_nb_05_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880');
# INSERT INTO tblimage (imageurl) VALUES ('https://nb.scene7.com/is/image/NB/w990nv6_nb_03_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880');
# INSERT INTO tblimage (imageurl) VALUES ('https://nb.scene7.com/is/image/NB/w990nv6_nb_04_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880');
#
#
#
#
#
#
#
#
#
#
#
#
#
# # INSERT INTO tblshoemodel (modelname,imageurl) VALUES (2,'Air Force 1','https://sneakerholicvietnam.vn/wp-content/uploads/2021/07/nike-air-force-1-low-white-315115-112.jpg');
# # INSERT INTO tblShoe (price,description,imageurl)
# # VALUES (1,1,42,'99','A customizedShoe has flexible','https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4f225a0bbc3e43729858af0100006731_9366/Giay_Ultraboost_1.0_trang_HQ4207_01_standard.jpg',1);;
# # INSERT INTO tblServiceModel (serviceId,price,orderDetailId)
# # VALUES (1,1,'15',2);;
# # INSERT INTO tbluserDrawing (userid,drawingFile,description,orderDetailId)
# # VALUES (1,'good','best of store',1);;
# # INSERT INTO tblPayment (orderId,amount,paymentDate,method,status)
# # VALUES (1,1,'2022-10-10','paint','done');
# -- select * from tbluser