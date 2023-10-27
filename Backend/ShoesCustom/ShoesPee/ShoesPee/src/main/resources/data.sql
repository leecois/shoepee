drop database shoepee;
create database shoepee;
use shoepee;


create table tblbrand
(
    brandid int primary key auto_increment,
    brandname nvarchar(255),
    imageurl varchar(1000)
);


create table tblshoplocation
(
    locationid int primary key auto_increment,
    locationname nvarchar(255),
    address nvarchar(255),
    phone varchar(50),
    email varchar(255),
    workinghour time
);



create table tbluser
(
    userid int primary key auto_increment,
    username nvarchar(100),
    password varchar(100),
    email varchar(255)
);

create table tblinforuser (
                              id int primary key auto_increment,
                              fullname nvarchar(100),
                              address varchar(1000),
                              phone varchar(50),
                              foreign key(id) references tbluser (userid)
);

create table tblorder
(
    orderid int primary key auto_increment,
    userid int,
    orderdate varchar(255),
    status bit,
    locationid int,
    totalprice decimal(10,2),
    foreign key(userid) references tbluser (userid),
    foreign key(locationid) references tblshoplocation(locationid)
);



create table tblorderdetail(
                               orderdetailid int primary key auto_increment,
                               orderid int,
                               quantity int,
                               unitprice decimal(10,2),
                               subtotal decimal(10,2),
                               foreign key(orderid) references tblorder (orderid)
);


create table tblservice(
                           serviceid int primary key auto_increment,
                           name nvarchar(100),
                           description nvarchar(1000),
                           price decimal(10,2)
);


create table tblshoemodel(
                             modelid int primary key auto_increment,
                             brandid int,
                             modelname nvarchar(255),
                             imageurl varchar(1000),
                             foreign key(brandid) references tblbrand (brandid)
);


create table tblshoe(
                        shoeid int primary key auto_increment,
                        modelid int,
                        price decimal(10,2),
                        description nvarchar(1000),
                        imageurl varchar(1000),
                        foreign key(modelid) references tblshoemodel(modelid)
);


create table tblservicemodel(
                                servicemodelid int primary key auto_increment,
                                serviceid int,
                                modelid int,
                                price decimal(10,2),
                                orderDetailid int,
                                imagemodel varchar(1000),
                                foreign key(orderdetailid) references tblorderdetail(orderdetailid),
                                foreign key(serviceid) references tblservice(serviceid),
                                foreign key(modelid) references tblshoemodel(modelid)
);



create table tblpayment(
                           paymentid int primary key auto_increment,
                           orderid int,
                           amount int,
                           paymentdate datetime,
                           method varchar(255),
                           status varchar(255),
                           foreign key(orderid) references tblorder (orderid)
);

create table tblimage(

                         iamgeid int primary key auto_increment,
                         imageurl varchar(5000),
                         shoeid int,
                         foreign key(shoeid) references tblshoe (shoeid)
);


INSERT INTO tblbrand (brandname,imageurl) VALUES ('ADIDAS','https://assets.adidas.com/images/w_600,f_auto,q_auto/2535f3464914497aaa27ae9200f84ead_9366/Giay_Grand_Court_Cloudfoam_Lifestyle_Court_Comfort_trang_GW9214_01_standard.jpg');
INSERT INTO tblbrand (brandname,imageurl) VALUES ('NIKE','https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-shoes-WrLlWX.png');
INSERT INTO tblbrand (brandname,imageurl) VALUES ('MLB','https://bizweb.dktcdn.net/100/413/756/products/giay-mlb-chunky-liner-low-new-york-yankees-ivory-3asxca12n-50ivs-1-98ec97352e294a39b9853a22079fb39e-master.jpg?v=1678768537200');
INSERT INTO tblbrand (brandname,imageurl) VALUES ('VANS','https://bizweb.dktcdn.net/thumb/1024x1024/100/140/774/products/vans-old-skool-black-white-vn000d3hy28-1.jpg');
INSERT INTO tblbrand (brandname,imageurl) VALUES ('New Balance','https://supersports.com.vn/cdn/shop/products/ML574EVG-1.jpg?v=1673511691');




#SHOEMODEL
## ADIDAS
INSERT INTO tblshoemodel (brandid,modelname,imageurl) VALUES (1,'STAN SMITH','https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b47d77eba6f945ea8dabac210127b11e_9366/Giay_Stan_Smith_trang_FX5501_01_standard.jpg');
INSERT INTO tblshoemodel (brandid,modelname,imageurl) VALUES (1,'SUPER STAR','https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7ed0855435194229a525aad6009a0497_9366/Giay_Superstar_trang_EG4958_01_standard.jpg');
INSERT INTO tblshoemodel (brandid,modelname,imageurl) VALUES (1,'NMD','https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/52f6f689607048ad9831ae700009af3d_9366/Giay_NMD_360_DJen_GY9147_01_standard.jpg');


## NIKE
INSERT INTO tblshoemodel (brandid,modelname,imageurl) VALUES (2,'Nike Air Force 1','https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-shoes-WrLlWX.png');
INSERT INTO tblshoemodel (brandid,modelname,imageurl) VALUES (2,'Nike Air Max','https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/2aeba6e4-5058-453d-af76-008f38c2ac41/air-max-1-premium-shoes-QBdDK8.png');
INSERT INTO tblshoemodel (brandid,modelname,imageurl) VALUES (2,'Blazer','https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/fb7eda3c-5ac8-4d05-a18f-1c2c5e82e36e/blazer-mid-77-vintage-shoes-dNWPTj.png');
INSERT INTO tblshoemodel (brandid,modelname,imageurl) VALUES (2,'Cortez','https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/np029vozcemdcdmebpwm/classic-cortez-shoe-8p3Qjt.png');

## MLB
INSERT INTO tblshoemodel (brandid,modelname,imageurl) VALUES (3,'PLAYBALL','https://product.hstatic.net/200000384787/product/giay_mlb_bigball_chunky_a_new_york_yankees_beige_3ashc101n-50bgs__1__b2207921661f4fe2bc798894c4f5bb2a_master.jpg');
INSERT INTO tblshoemodel (brandid,modelname,imageurl) VALUES (3,'Mules','https://sneakerholicvietnam.vn/wp-content/uploads/2021/06/mlb-big-ball-chunky-boston-32SHC2911-43I.jpg');
INSERT INTO tblshoemodel (brandid,modelname,imageurl) VALUES (3,'Chunky','https://bizweb.dktcdn.net/100/423/558/products/mlb-3.jpg?v=1659335545760');

## Vans

INSERT INTO tblshoemodel (brandid,modelname,imageurl) VALUES (4,'VANS CLASSIC','https://bizweb.dktcdn.net/100/140/774/products/vans-era-classic-black-vn000ewzblk-2.jpg?v=1625933736357');
INSERT INTO tblshoemodel (brandid,modelname,imageurl) VALUES (4,'VANS Knu Skool','https://images.vans.com/is/image/Vans/VN0009QC_6BT_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
INSERT INTO tblshoemodel (brandid,modelname,imageurl) VALUES (4,'VANS OLD SKOOL','https://bizweb.dktcdn.net/100/140/774/products/vans-old-skool-black-white-vn000d3hy28-2.jpg?v=1625905148527');
INSERT INTO tblshoemodel (brandid,modelname,imageurl) VALUES (4,'VANS UltraRange ','https://images.vans.com/is/image/Vans/VN0A4U1K_BLK_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');

## New Balance
INSERT INTO tblshoemodel (brandid,modelname,imageurl) VALUES (5,'Fresh Foam X','https://nb.scene7.com/is/image/NB/m1080i13_nb_02_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880');
INSERT INTO tblshoemodel (brandid,modelname,imageurl) VALUES (5,'Made in USA 990v6','https://nb.scene7.com/is/image/NB/m990nv6_nb_02_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880');


# Shoe 
## ADIDAS
### Stan smith
INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (1,2.600,'This product is made with vegan alternatives to animal-derived ingredients or materials. It is also made with Primegreen, a series of high-performance recycled materials. 50% of upper is recycled content. No virgin polyester.','https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b47d77eba6f945ea8dabac210127b11e_9366/Giay_Stan_Smith_trang_FX5501_01_standard.jpg');
INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (1,2.600,'This product is made with vegan alternatives to animal-derived ingredients or materials. It is also made with Primegreen, a series of high-performance recycled materials. 50% of upper is recycled content. No virgin polyester.','https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b47d77eba6f945ea8dabac210127b11e_9366/Stan_Smith_Shoes_White_FX5501_01_standard.jpg');
INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (1,2.600,'This product is made with vegan alternatives to animal-derived ingredients or materials. It is also made with Primegreen, a series of high-performance recycled materials. 50% of upper is recycled content. No virgin polyester.','https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4cf7720ac5a7420591148d75b2f3f592_9366/Stan_Smith_Shoes_White_ID2031_01_standard.jpg');
INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (1,2.600,'This product is made with vegan alternatives to animal-derived ingredients or materials. It is also made with Primegreen, a series of high-performance recycled materials. 50% of upper is recycled content. No virgin polyester.','https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a41ae84d535e4d9d8f2cf641b387f77e_9366/Stan_Smith_Shoes_White_ID2032_01_standard.jpg');

### SUPER STAR
INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (2,2.600,'Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court. The serrated 3-Stripes mark, iconic shell style toe, and box logo makes this one of the true Originals.','https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7ed0855435194229a525aad6009a0497_9366/Giay_Superstar_trang_EG4958_01_standard.jpg');
INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (2,2.600,'Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court. The serrated 3-Stripes mark, iconic shell style toe, and box logo makes this one of the true Originals.','https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/15f901c90a9549d29104aae700d27efb_9366/Superstar_Shoes_Black_EG4959_01_standard.jpg');
INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (2,2.600,'Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court. The serrated 3-Stripes mark, iconic shell style toe, and box logo makes this one of the true Originals.','https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9ef861e1b233457e80a461a9bae38ec1_9366/Superstar_Shoes_Burgundy_IF8071_01_standard.jpg');
INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (2,2.600,'Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court. The serrated 3-Stripes mark, iconic shell style toe, and box logo makes this one of the true Originals.','https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/46743c5abef5415a99616af9704aaf76_9366/Superstar_Shoes_Green_IF8072_01_standard.jpg');

### NMD
INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (3,2.600,'This shoes upper is made with a high-performance yarn which contains at least 50% Parley Ocean Plastic — reimagined plastic waste, intercepted on remote islands, beaches, coastal communities and shorelines, preventing it from polluting our ocean. The other 50% of the yarn is recycled polyester.','https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/030e1916d6d64713b0a9af1e00c3aab4_9366/NMD_S1_Shoes_White_GW4652_01_standard.jpg');
INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (3,2.600,'This shoes upper is made with a high-performance yarn which contains at least 50% Parley Ocean Plastic — reimagined plastic waste, intercepted on remote islands, beaches, coastal communities and shorelines, preventing it from polluting our ocean. The other 50% of the yarn is recycled polyester.','https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6b2d4eb761694fdcb6ffaf8c00d21558_9366/NMD_S1_Shoes_Turquoise_HQ4437_01_standard.jpg');
INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (3,2.600,'This shoes upper is made with a high-performance yarn which contains at least 50% Parley Ocean Plastic — reimagined plastic waste, intercepted on remote islands, beaches, coastal communities and shorelines, preventing it from polluting our ocean. The other 50% of the yarn is recycled polyester.','https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6e1a01ee20b5422b98a9af8c00d27073_9366/NMD_S1_Shoes_Beige_HQ4439_01_standard.jpg');
INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (3,2.600,'This shoes upper is made with a high-performance yarn which contains at least 50% Parley Ocean Plastic — reimagined plastic waste, intercepted on remote islands, beaches, coastal communities and shorelines, preventing it from polluting our ocean. The other 50% of the yarn is recycled polyester.','https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e45e26f7f6be45b28ff9af8c00d33127_9366/NMD_S1_Shoes_Blue_HQ4468_01_standard.jpg');

## NIKE
### NIKE AIR FORCE 1 
INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (4,2.600,'Classic and comfortable, you will want to wear these AF-1s time after time. Smooth suede and a plush collar give these kicks a premium feel, while the gum sole adds a retro look. Of course, some things never change: Nike Air units still cushion your every step.','https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/cb1732aa-9f69-4b01-b77c-1da2a20a0729/air-force-1-07-shoes-cWFrxr.png');
INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (4,2.600,'Classic and comfortable, you will want to wear these AF-1s time after time. Smooth suede and a plush collar give these kicks a premium feel, while the gum sole adds a retro look. Of course, some things never change: Nike Air units still cushion your every step.','https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/416e1d81-a6ed-4401-93d1-e5e26ea37a8d/air-force-1-07-shoes-CMNWtG.png');
INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (4,2.600,'Classic and comfortable, you will want to wear these AF-1s time after time. Smooth suede and a plush collar give these kicks a premium feel, while the gum sole adds a retro look. Of course, some things never change: Nike Air units still cushion your every step.','https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9586f004-25c7-4e72-bef9-6492f6491a4b/air-force-1-07-wb-shoe-j46FxX.png');
INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (4,2.600,'Classic and comfortable, you will want to wear these AF-1s time after time. Smooth suede and a plush collar give these kicks a premium feel, while the gum sole adds a retro look. Of course, some things never change: Nike Air units still cushion your every step.','https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fa7c385b-0f6d-4bd9-8a0f-6038d8d8a355/air-force-1-07-shoes-VWCc04.png');


### NIKE AIR MAX
INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (5,2.600,'The AM97 was the shapeshifter of its time, and it is your turn to do the same. Customise every part of the shoe from upper materials to the colours of the midsole and Nike Air unit, plus non-slip laces to secure the fit. Then, decide whether you want your outsole solid, tinted or translucent. There is even an upgraded insole for extra cushioning underfoot. Finally, a shoe as multifaceted as you.','https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/14de6943-8c87-4b9b-9585-80dea96a70d3/air-max-97-shoes-EBZrb8.png');
INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (5,2.600,'The AM97 was the shapeshifter of its time, and it is your turn to do the same. Customise every part of the shoe from upper materials to the colours of the midsole and Nike Air unit, plus non-slip laces to secure the fit. Then, decide whether you want your outsole solid, tinted or translucent. There is even an upgraded insole for extra cushioning underfoot. Finally, a shoe as multifaceted as you.','https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1464bd95-4121-4b07-af49-dfbddff7a460/air-max-97-shoes-EBZrb8.png');
INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (5,2.600,'The AM97 was the shapeshifter of its time, and it is your turn to do the same. Customise every part of the shoe from upper materials to the colours of the midsole and Nike Air unit, plus non-slip laces to secure the fit. Then, decide whether you want your outsole solid, tinted or translucent. There is even an upgraded insole for extra cushioning underfoot. Finally, a shoe as multifaceted as you.','https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/6a3671b8-f115-44f6-9ab6-3798d55210eb/custom-nike-air-max-97-shoes-by-you.png');
INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (5,2.600,'The AM97 was the shapeshifter of its time, and it is your turn to do the same. Customise every part of the shoe from upper materials to the colours of the midsole and Nike Air unit, plus non-slip laces to secure the fit. Then, decide whether you want your outsole solid, tinted or translucent. There is even an upgraded insole for extra cushioning underfoot. Finally, a shoe as multifaceted as you.','https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/cc11861c-e016-4925-a669-a9f8aa6ee356/custom-nike-air-max-97-shoes-by-you.png');
INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (5,2.600,'The AM97 was the shapeshifter of its time, and it is your turn to do the same. Customise every part of the shoe from upper materials to the colours of the midsole and Nike Air unit, plus non-slip laces to secure the fit. Then, decide whether you want your outsole solid, tinted or translucent. There is even an upgraded insole for extra cushioning underfoot. Finally, a shoe as multifaceted as you.','https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/6b6ac8ce-2527-4849-ab3e-d4ce990bef79/custom-nike-air-max-97-shoes-by-you.png');

### BLAZER
INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (6,2.600,'Praised by the streets for its classic simplicity and comfort, the Nike Blazer Low 77 Vintage returns with its low-profile style and heritage b-ball looks. Featuring luscious suede details, a retro Swoosh design and a super-soft collar, it is the must-have wardrobe staple that will take you everywhere.','https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3dbd02fc-6c4d-419f-b706-8293ed200d14/blazer-low-77-vintage-shoes-5Gw9TZ.png');
INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (6,2.600,'Praised by the streets for its classic simplicity and comfort, the Nike Blazer Low 77 Vintage returns with its low-profile style and heritage b-ball looks. Featuring luscious suede details, a retro Swoosh design and a super-soft collar, it is the must-have wardrobe staple that will take you everywhere.','https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fca59736-ff84-4797-9e64-0978d3b43731/blazer-low-77-vintage-shoes-5Gw9TZ.png');
INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (6,2.600,'Praised by the streets for its classic simplicity and comfort, the Nike Blazer Low 77 Vintage returns with its low-profile style and heritage b-ball looks. Featuring luscious suede details, a retro Swoosh design and a super-soft collar, it is the must-have wardrobe staple that will take you everywhere.','https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8371a7ff-046d-4d7c-a89c-4d84434b2d42/blazer-low-77-vintage-shoes-5Gw9TZ.png');


### CORTEZ
INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (7,2.600,'One word: tradition. From heritage running to fashion phenom, its retro appeal, sponge-soft midsole and see-saw detailing deliver decade after decade. This iteration offers easy-to-style colours with a vintage vibe.','https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e4acbdf1-367b-4412-8820-8f2a41d16da7/cortez-shoes-svdKM9.png');
INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (7,2.600,'One word: tradition. From heritage running to fashion phenom, its retro appeal, sponge-soft midsole and see-saw detailing deliver decade after decade. This iteration offers easy-to-style colours with a vintage vibe.','https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/82b7bb9c-451e-43e4-a1fa-408ec0072888/cortez-shoes-svdKM9.png');
INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (7,2.600,'One word: tradition. From heritage running to fashion phenom, its retro appeal, sponge-soft midsole and see-saw detailing deliver decade after decade. This iteration offers easy-to-style colours with a vintage vibe.','https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/02148fc1-9fb7-4df1-ab6d-2d696e9da039/cortez-shoes-svdKM9.png');

## MLB
### MULE
INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (9,2.600,'The MLB Mule is a new design heel shoe. It is creating a trend in the community and is favored by young people. Young dynamic shoes, suitable for all times and many different uses.','https://product.hstatic.net/200000642007/product/50t_32shs1111_1_e1620526925a4f2ea846504f60990f3e_bd451ae3d35c46baa6d88b04fef562a6_master.jpg');
INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (9,2.600,'The MLB Mule is a new design heel shoe. It is creating a trend in the community and is favored by young people. Young dynamic shoes, suitable for all times and many different uses.','https://product.hstatic.net/200000642007/product/50l_32shs1111_1_45793aa1b8064f5f9221d9847dc3f662_900546c43cea427c9f0036f73834da02_master.jpg');
INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (9,2.600,'The MLB Mule is a new design heel shoe. It is creating a trend in the community and is favored by young people. Young dynamic shoes, suitable for all times and many different uses.','https://product.hstatic.net/200000642007/product/07v_32shs1111_1_5d23cd7c12f1402dab24aca350624d45_7dd11016a95f4ef9abaef36ca3e0d162_master.jpg');
INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (9,2.600,'The MLB Mule is a new design heel shoe. It is creating a trend in the community and is favored by young people. Young dynamic shoes, suitable for all times and many different uses.','https://product.hstatic.net/200000642007/product/07s_32shs1111_1_aeb6eb105a194cf8a876ffae4b376ed8_ef638ee652af4860a52fe74974cdab8d_master.jpg');

### PLAYBALL
INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (8,2.600,'...','https://product.hstatic.net/200000642007/product/07ivs_3acvppr3n_1_b6cce9e680fc40d6a1a212702c6b6a43_684ecc99eb134846971207b2a5a24a27.jpg');
INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (8,2.600,'...','https://product.hstatic.net/200000642007/product/50bks_3acvppr3n_1_6675b4850c6a4fa49758fbb4cff563e0_23b472a47b5b4c1789097b2c0af93a0d_master.jpg');

### Chunky
INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (10,2.600,'...','https://product.hstatic.net/200000642007/product/50bks_3asxam82n_1_36a253345e994545a7ff20d44f17fa34_02092633535b4c6294a1e617a181d8c8_master.jpg');
INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (10,2.600,'...','https://product.hstatic.net/200000642007/product/07bld_3asxxa12n_1_eb3c021e5d3545bc89130276a32a6645_44ee0fbb8b124cb2b9082a2bc484eef7_master.jpg');
INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (10,2.600,'...','https://product.hstatic.net/200000642007/product/50ivs_3asxccb3n_1_491eab2f9a844a458dadb2f8d583f0c1_8d34d841567e4c82ad81be93c333ce14_master.jpg');


## VANS
### VANS CLASSIC 
INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (11,2.600,'','https://bizweb.dktcdn.net/thumb/small/100/140/774/products/vans-authentic-classic-black-vn000ee3blk-1.png?v=1625925617317');
INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (11,2.600,'','https://images.vans.com/is/image/Vans/VN000EYE_BWW_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (11,2.600,'','https://images.vans.com/is/image/Vans/VN000BVZ_C9I_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (11,2.600,'','https://images.vans.com/is/image/Vans/VN000EYE_BPJ_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');

### VANS Knu Skool
INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (12,2.600,'The Knu Skool is a modern interpretation of a classic 90s style, defined by its puffed up tongue and 3D-molded Sidestripe, and tied off with oversized, chunky laces. With its in-your-face profile, color pop accents, and dramatic style details','https://images.vans.com/is/image/Vans/VN0009QC_BKA_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (12,2.600,'The Knu Skool is a modern interpretation of a classic 90s style, defined by its puffed up tongue and 3D-molded Sidestripe, and tied off with oversized, chunky laces. With its in-your-face profile, color pop accents, and dramatic style details','https://images.vans.com/is/image/Vans/VN0009QC_WHT_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (12,2.600,'The Knu Skool is a modern interpretation of a classic 90s style, defined by its puffed up tongue and 3D-molded Sidestripe, and tied off with oversized, chunky laces. With its in-your-face profile, color pop accents, and dramatic style details','https://images.vans.com/is/image/Vans/VN000CRP_GRN_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (12,2.600,'The Knu Skool is a modern interpretation of a classic 90s style, defined by its puffed up tongue and 3D-molded Sidestripe, and tied off with oversized, chunky laces. With its in-your-face profile, color pop accents, and dramatic style details','https://images.vans.com/is/image/Vans/VN0009QC_PRP_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');

### VANS OLD SKOOL
INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (13,2.600,'The Old Skool was our first footwear design to showcase the famous Vans Sidestripe—although back then, it was just a random doodle drawn by founder Paul Van Doren. Since its debut in 1977, this low-top silhouette has established itself as an icon in the skate, music, and fashion scenes. From 90s street skaters and punks to current hip hop and fashion legends, the Old Skool has consistently been the go-to shoe for creatives who do things their own way.','https://images.vans.com/is/image/Vans/VN0A38G1_P0S_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (13,2.600,'The Old Skool was our first footwear design to showcase the famous Vans Sidestripe—although back then, it was just a random doodle drawn by founder Paul Van Doren. Since its debut in 1977, this low-top silhouette has established itself as an icon in the skate, music, and fashion scenes. From 90s street skaters and punks to current hip hop and fashion legends, the Old Skool has consistently been the go-to shoe for creatives who do things their own way.','https://images.vans.com/is/image/Vans/VN000CP5_TAN_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');

### VANS UltraRange
INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (14,2.600,'What does it mean to be “ready for anything”? With the Vans UltraRange EXO, you’re bound to find out. This is a shoe that not only stands up to the journey, but keeps you comfortable in the most uncomfortable of situations. Armed with updated RapidWeld detailing, a breathable Old Skool-inspired upper, and a revamped rubber toe and forefoot shape to provide an optimal fit without sacrificing Vans design DNA, this is the UltraRange—evolved.','https://images.vans.com/is/image/Vans/VN0A4U1K_WHT_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (14,2.600,'What does it mean to be “ready for anything”? With the Vans UltraRange EXO, you’re bound to find out. This is a shoe that not only stands up to the journey, but keeps you comfortable in the most uncomfortable of situations. Armed with updated RapidWeld detailing, a breathable Old Skool-inspired upper, and a revamped rubber toe and forefoot shape to provide an optimal fit without sacrificing Vans design DNA, this is the UltraRange—evolved.','https://images.vans.com/is/image/Vans/VN0A4U1K_ZS8_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (14,2.600,'What does it mean to be “ready for anything”? With the Vans UltraRange EXO, you’re bound to find out. This is a shoe that not only stands up to the journey, but keeps you comfortable in the most uncomfortable of situations. Armed with updated RapidWeld detailing, a breathable Old Skool-inspired upper, and a revamped rubber toe and forefoot shape to provide an optimal fit without sacrificing Vans design DNA, this is the UltraRange—evolved.','https://images.vans.com/is/image/Vans/VN0A4U1K_4LP_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');
INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (14,2.600,'What does it mean to be “ready for anything”? With the Vans UltraRange EXO, you’re bound to find out. This is a shoe that not only stands up to the journey, but keeps you comfortable in the most uncomfortable of situations. Armed with updated RapidWeld detailing, a breathable Old Skool-inspired upper, and a revamped rubber toe and forefoot shape to provide an optimal fit without sacrificing Vans design DNA, this is the UltraRange—evolved.','https://images.vans.com/is/image/Vans/VN0A4U1K_ZS8_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0');


## New Balance
### Fresh Foam X
INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (15,2.600,'If we only made one running shoe, it would be the Fresh Foam X 1080. The unique combination of reliable comfort and high performance offers versatility that spans everyday to race day. The Fresh Foam X midsole cushioning is built for smooth transitions from landing to push-off, while a second-skin style mesh upper is breathable and supportive.','https://nb.scene7.com/is/image/NB/m1080k13_nb_02_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880');
INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (15,2.600,'If we only made one running shoe, it would be the Fresh Foam X 1080. The unique combination of reliable comfort and high performance offers versatility that spans everyday to race day. The Fresh Foam X midsole cushioning is built for smooth transitions from landing to push-off, while a second-skin style mesh upper is breathable and supportive.','https://nb.scene7.com/is/image/NB/m1080b13_nb_02_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880');
INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (15,2.600,'If we only made one running shoe, it would be the Fresh Foam X 1080. The unique combination of reliable comfort and high performance offers versatility that spans everyday to race day. The Fresh Foam X midsole cushioning is built for smooth transitions from landing to push-off, while a second-skin style mesh upper is breathable and supportive.','https://nb.scene7.com/is/image/NB/m1080l13_nb_02_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880');
INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (15,2.600,'If we only made one running shoe, it would be the Fresh Foam X 1080. The unique combination of reliable comfort and high performance offers versatility that spans everyday to race day. The Fresh Foam X midsole cushioning is built for smooth transitions from landing to push-off, while a second-skin style mesh upper is breathable and supportive.','https://nb.scene7.com/is/image/NB/m1080i13_nb_02_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880');

### Made in USA 990v6
INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (16,2.600,'The designers of the first 990 were tasked with creating the single best running shoe on the market. The MADE in USA 990v6 embraces this original mandate, with a series of performance-inspired updates.','https://nb.scene7.com/is/image/NB/m990gl6_nb_02_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880');
INSERT INTO tblshoe (modelid,price,description,imageurl) VALUES (16,2.600,'The designers of the first 990 were tasked with creating the single best running shoe on the market. The MADE in USA 990v6 embraces this original mandate, with a series of performance-inspired updates.','https://nb.scene7.com/is/image/NB/m990bk6_nb_02_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880');











#1
INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/817c815ba1db46629f89ac210127bebb_9366/Stan_Smith_Shoes_White_FX5501_02_standard_hover.jpg',1);
INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f633a0c9cb124e16914cac210127ca62_9366/Stan_Smith_Shoes_White_FX5501_04_standard.jpg',1);
INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a9e4a56537d34680ae9eac210127d326_9366/Stan_Smith_Shoes_White_FX5501_05_standard.jpg',1);
INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a68e0082d9b140178cb9ac210127b7c3_9366/Stan_Smith_Shoes_White_FX5501_06_standard.jpg',1);

#2
INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/817c815ba1db46629f89ac210127bebb_9366/Stan_Smith_Shoes_White_FX5501_02_standard_hover.jpg',2);
INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f633a0c9cb124e16914cac210127ca62_9366/Stan_Smith_Shoes_White_FX5501_04_standard.jpg',2);
INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a9e4a56537d34680ae9eac210127d326_9366/Stan_Smith_Shoes_White_FX5501_05_standard.jpg',2);
INSERT INTO tblimage (imageurl, shoeid) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a68e0082d9b140178cb9ac210127b7c3_9366/Stan_Smith_Shoes_White_FX5501_06_standard.jpg',2);
