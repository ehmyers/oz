var heart_size = 1.5,				// size of heart/bear
	heart_type = 1,					// type ( 1, 2 or 3 - heart, 4 - bear)
	particle_count = 600,			// number of elements in object
	particle_outline_count = 50,	// number of elements by path
	m_color1 = '#FF3366',			// color 1 of elements
	m_color2 = '#fff',				// color 2 of elements
	speed_rotation = 4;				// speed of elements (any number)

var heart_1 = new Path([[[381.3, -0.1], [73.2, 0], [-57, 0]],[[257, 86.4], [18.7, -50.5], [-18.7, -50.5]],[[132.6, -0.1], [57, 0], [-73.2, 0]],[[0.1, 132.4], [0, -73.2], [0, 155.5]],[[257, 449.2], [-34.2, 0], [34.2, 0]],[[513.8, 132.4], [0, 158.4], [0, -73.2]]]);
heart_1.closed = true;
heart_1.fillColor = m_color1;
heart_1.opacity = 0;


var heart_2 = new Path([[[382, 0], [72.3, 0], [-59.4, 0]], [[256.5, 93.8], [16, -54.2], [-16, -54.2]], [[130.9, 0], [59.4, 0], [-72.3, 0]], [[0, 130.9], [0, -72.3], [0, 72.3]], [[153.9, 329.2], [-86.1, -52.1], [27.9, 16.8]], [[256.5, 441.3], [-9.9, -31.7], [9.9, -31.7]], [[359.1, 329.2], [-27.9, 16.8], [86.1, -52.1]], [[513, 130.9], [0, 72.3], [0, -72.3]]]);
heart_2.closed = true;
heart_2.fillColor = m_color1;
heart_2.opacity = 0;


var heart_3 = new Path([[[381.3, -0.1], [73.2, 0], [-57, 0]], [[257, 86.4], [18.7, -50.5], [-18.7, -50.5]], [[132.6, -0.1], [57, 0], [-73.2, 0]], [[0.1, 132.4], [0, -73.2], [0, 155.5]], [[304, 454], [-107, 0], [0, -194]], [[513.8, 132.4], [0, 160.6], [0, -73.2]]]);
heart_3.closed = true;
heart_3.fillColor = m_color1;
heart_3.opacity = 0;

var heart_4 = new Path([[[400.1, 427.6], [31.3, 9.3], [-16.1, -4.8]], [[339.7, 445.4], [15.6, -11.5], [-15.6, 11.5]], [[311.5, 409.9], [7.3, 10.4], [-1, -1.4]], [[306.8, 402.6], [2.1, 3.3], [7.5, -6.1]], [[319, 376.8], [0, 10.4], [0, 0]], [[319, 283.4], [0, 0], [0, 0]], [[412.6, 189.8], [0, 0], [13.1, -13.1]], [[412.6, 142.4], [13.1, 13.1], [0, 0]], [[401.4, 131.2], [0, 0], [-13.1, -13.1]], [[354, 131.2], [13.1, -13.1], [0, 0]], [[297.2, 188], [0, 0], [-3.6, -1.4]], [[285.5, 185.9], [4.1, 0], [0, 0]], [[240.8, 185.9], [0, 0], [34.9, -13.1]], [[300.5, 99.6], [0, 39.5], [0, -3.9]], [[299.8, 88.2], [0.5, 3.7], [2.3, 0.4]], [[306.8, 88.8], [-2.4, 0], [24.5, 0]], [[351.2, 44.4], [0, 24.5], [0, -24.5]], [[306.8, 0], [24.5, 0], [-18.5, 0]], [[265.8, 27.5], [6.6, -16.2], [-15.7, -12.5]], [[208.4, 7.5], [21.7, 0], [-20, 0]], [[154.9, 24.7], [15.1, -10.8], [-7.3, -14.6]], [[115.1, 0], [17.4, 0], [-24.5, 0]], [[70.7, 44.4], [0, -24.5], [0, 24.5]], [[115.1, 88.8], [-24.5, 0], [0.6, 0]], [[117, 88.7], [-0.6, 0], [-0.4, 3.6]], [[116.3, 99.6], [0, -3.7], [0, 39.5]], [[176.1, 185.9], [-34.9, -13.1], [0, 0]], [[138.5, 185.9], [0, 0], [-4.7, 0]], [[125.3, 188.6], [4.1, -1.7], [0, 0]], [[67.9, 131.2], [0, 0], [-13.1, -13.1]], [[20.6, 131.2], [13.1, -13.1], [0, 0]], [[9.3, 142.4], [0, 0], [-13.1, 13.1]], [[9.3, 189.8], [-13.1, -13.1], [0, 0]], [[105, 285.5], [0, 0], [0, 0]], [[105, 376.8], [0, 0], [0, 9.7]], [[115.7, 401.3], [-6.6, -6.1], [-2.5, 4]], [[110, 409.9], [1.2, -1.6], [-7.3, 10.4]], [[81.9, 445.4], [15.6, 11.5], [-15.6, -11.5]], [[21.4, 427.6], [16.1, -4.8], [-31.3, 9.3]], [[14, 503.6], [-17.3, -18.8], [14.6, 15.8]], [[97.2, 535], [-36.5, -1], [36.5, 1]], [[170.9, 490.2], [-11.1, 37.5], [5.3, -18]], [[191.2, 410.3], [-6.9, 29.1], [0, 0]], [[230.4, 410.3], [0, 0], [6.9, 29.1]], [[250.7, 490.2], [-5.3, -18], [11.1, 37.5]], [[324.4, 535], [-36.5, 1], [36.5, -1]], [[407.6, 503.6], [-14.6, 15.8], [17.3, -18.8]]]);
heart_4.closed = true;
heart_4.fillColor = m_color1;
heart_4.opacity = 0;


var heart;
if(heart_type == 2){
	heart = heart_2.clone();
}else if(heart_type == 3){
	heart = heart_3.clone();
}else if(heart_type == 4){
	heart = heart_4.clone();
}else{
	heart = heart_1.clone();
}

heart_1.remove();
heart_2.remove();
heart_3.remove();
heart_4.remove();

heart.scale(heart_size);
heart.position = {x:400, y:400};

var part1_1 = new Path([[[16.5, 6.1], [4, 2.4], [-3.2, -1.9]], [[7.1, 8.3], [1.9, -3.3], [-1.4, 2.5]], [[9, 15.6], [-2.7, -1.3], [1.8, 0.9]], [[14.2, 13.9], [-0.8, 2.1], [0.4, -1.2]], [[12.7, 10.8], [1.4, 0.1], [-0.5, -0.1]], [[11.8, 12], [-0.7, -0.6], [0.7, 0.6]], [[10.8, 13.1], [0.5, 0.1], [-1.4, -0.1]], [[9.3, 10.1], [-0.4, 1.2], [0.8, -2.1]], [[14.5, 8.4], [-1.8, -0.9], [2.7, 1.3]], [[16.5, 15.7], [1.4, -2.5], [-1.9, 3.3]], [[7, 17.9], [3.2, 1.9], [-4, -2.4]], [[4.6, 6.3], [-2.4, 3.8], [1.6, -2.5]], [[11.6, 2], [-2.8, 0.3], [-14.1, 1]], [[5.3, 20.3], [-5.4, -3.4], [4.5, 2.9]], [[18.9, 17.6], [-2.9, 4.6], [2.4, -3.8]]]);
part1_1.closed = true;
part1_1.fillColor = m_color1;

var part1_2 = new Path([ [[7, 17.9], [-4, -2.4], [3.2, 1.9]], [[16.5, 15.7], [-1.9, 3.3], [1.4, -2.5]], [[14.5, 8.3], [2.7, 1.3], [-1.8, -0.9]], [[9.3, 10], [0.8, -2.1], [-0.4, 1.2]], [[10.8, 13.1], [-1.4, -0.1], [0.5, 0.1]], [[11.8, 11.9], [0.7, 0.6], [-0.7, -0.6]], [[12.8, 10.8], [-0.5, -0.1], [1.4, 0.1]], [[14.2, 13.9], [0.4, -1.2], [-0.8, 2.1]], [[9, 15.6], [1.8, 0.9], [-2.7, -1.3]], [[7.1, 8.2], [-1.4, 2.5], [1.9, -3.3]], [[16.5, 6], [-3.2, -1.9], [4, 2.4]], [[18.9, 17.6], [2.4, -3.8], [-1.6, 2.5]], [[11.9, 21.9], [2.8, -0.3], [14.1, -1]], [[18.3, 3.6], [5.4, 3.4], [-4.5, -2.9]], [[4.6, 6.3], [2.9, -4.6], [-2.4, 3.8]]]);
part1_2.closed = true;
part1_2.fillColor = m_color2;

var part1_3 = new Path([ [[24, 12], [0, -6.6], [0, 6.6]], [[12, 24], [6.6, 0], [-6.6, 0]], [[0, 12], [0, 6.6], [0, -6.6]], [[12, 0], [-6.6, 0], [6.6, 0]]]);
part1_3.closed = true;
part1_3.fillColor = m_color2;

var part1 = new Group(part1_3, part1_1, part1_2);
part1.scale(2);
var part1_raster = part1.rasterize();
part1.remove();

var part2_1 = new Path([[[18.3, 12], [0, -3.5], [0, 3.5]],[[12, 18.3], [3.5, 0], [-3.5, 0]],[[5.7, 12], [0, 3.5], [0, -3.5]],[[12, 5.7], [-3.5, 0], [3.5, 0]]]);
part2_1.closed = true;
part2_1.fillColor = m_color1;

var part2_2 = new Path([[[12, 2], [-0.5, 0], [0.5, 0]],[[13.3, 3.8], [0, 0], [0, 0]],[[15.1, 2.5], [-0.5, -0.2], [0.5, 0.2]],[[15.8, 4.6], [0, 0], [0, 0]],[[17.9, 3.9], [-0.4, -0.3], [0.4, 0.3]],[[17.9, 6.1], [0, 0], [0, 0]],[[20.1, 6.1], [-0.3, -0.4], [0.3, 0.4]],[[19.4, 8.2], [0, 0], [0, 0]],[[21.5, 8.9], [-0.2, -0.5], [0.2, 0.5]],[[20.2, 10.7], [0, 0], [0, 0]],[[22, 12], [0, -0.5], [0, 0.5]],[[20.2, 13.3], [0, 0], [0, 0]],[[21.5, 15.1], [0.2, -0.5], [-0.2, 0.5]],[[19.4, 15.8], [0, 0], [0, 0]],[[20.1, 17.9], [0.3, -0.4], [-0.3, 0.4]],[[17.9, 17.9], [0, 0], [0, 0]],[[17.9, 20.1], [0.4, -0.3], [-0.4, 0.3]],[[15.8, 19.4], [0, 0], [0, 0]],[[15.1, 21.5], [0.5, -0.2], [-0.5, 0.2]],[[13.3, 20.2], [0, 0], [0, 0]],[[12, 22], [0.5, 0], [-0.5, 0]],[[10.7, 20.2], [0, 0], [0, 0]],[[8.9, 21.5], [0.5, 0.2], [-0.5, -0.2]],[[8.2, 19.4], [0, 0], [0, 0]],[[6.1, 20.1], [0.4, 0.3], [-0.4, -0.3]],[[6.1, 17.9], [0, 0], [0, 0]],[[3.9, 17.9], [0.3, 0.4], [-0.3, -0.4]],[[4.6, 15.8], [0, 0], [0, 0]],[[2.5, 15.1], [0.2, 0.5], [-0.2, -0.5]],[[3.8, 13.3], [0, 0], [0, 0]],[[2, 12], [0, 0.5], [0, -0.5]],[[3.8, 10.7], [0, 0], [0, 0]],[[2.5, 8.9], [-0.2, 0.5], [0.2, -0.5]],[[4.6, 8.2], [0, 0], [0, 0]],[[3.9, 6.1], [-0.3, 0.4], [0.3, -0.4]],[[6.1, 6.1], [0, 0], [0, 0]],[[6.1, 3.9], [-0.4, 0.3], [0.4, -0.3]],[[8.2, 4.6], [0, 0], [0, 0]],[[8.9, 2.5], [-0.5, 0.2], [0.5, -0.2]],[[10.7, 3.8], [0, 0], [0, 0]]]);

part2_2.closed = true;
part2_2.fillColor = m_color2;
part2_2.strokeColor = m_color1;
part2_2.strokeWidth = 2;

var part2_3 = new Path([
[[24, 12], [0, -6.6], [0, 6.6]],
[[12, 24], [6.6, 0], [-6.6, 0]],
[[0, 12], [0, 6.6], [0, -6.6]],
[[12, 0], [-6.6, 0], [6.6, 0]]]);
part2_3.closed = true;
part2_3.fillColor = m_color2;
part2_3.opacity = 0;

var part2 = new Group(part2_3, part2_2, part2_1);
part2.scale(2);

var part2_raster = part2.rasterize();
part2.remove();

var part3_1 = new Path([
[[14.4, 7.8], [0, 0], [0, 0]], [[17.2, 8.5], [0, 0], [0, 0]], [[17.6, 7], [0, 0], [0, 0]], [[16.3, 6.7], [0, 0], [0, 0]], [[18.1, 5.7], [0, 0], [0, 0]], [[17.3, 4.3], [0, 0], [0, 0]], [[15.6, 5.4], [0, 0], [0, 0]], [[15.9, 4.1], [0, 0], [0, 0]], [[14.4, 3.7], [0, 0], [0, 0]], [[13.7, 6.4], [0, 0], [0, 0]], [[11.9, 7.5], [0, 0], [0, 0]], [[11.2, 6.2], [0, 0], [0, 0]], [[9.6, 7.1], [0, 0], [0, 0]], [[10.4, 8.4], [0, 0], [0, 0]], [[10.2, 8.4], [0, 0], [0, 0]], [[9.9, 9.5], [0, 0], [0, 0]], [[11, 9.8], [0, 0], [0, 0]], [[11.1, 9.7], [0, 0], [0, 0]], [[11.8, 10.9], [0, 0], [0, 0]], [[13.4, 10], [0, 0], [0, 0]], [[12.7, 8.8], [0, 0], [0, 0]]]);
part3_1.closed = true;
part3_1.fillColor = m_color1;

var part3_2 = new Path([[[3.7, 12.2], [0, 0], [0, 0]], [[0.9, 11.5], [0, 0], [0, 0]], [[0.5, 13], [0, 0], [0, 0]], [[1.8, 13.3], [0, 0], [0, 0]], [[0, 14.3], [0, 0], [0, 0]], [[0.8, 15.7], [0, 0], [0, 0]], [[2.5, 14.6], [0, 0], [0, 0]], [[2.2, 15.9], [0, 0], [0, 0]], [[3.7, 16.3], [0, 0], [0, 0]], [[4.4, 13.6], [0, 0], [0, 0]], [[6.2, 12.5], [0, 0], [0, 0]], [[6.9, 13.8], [0, 0], [0, 0]], [[8.5, 12.9], [0, 0], [0, 0]], [[7.7, 11.6], [0, 0], [0, 0]], [[7.9, 11.6], [0, 0], [0, 0]], [[8.2, 10.5], [0, 0], [0, 0]], [[7.1, 10.2], [0, 0], [0, 0]], [[7, 10.3], [0, 0], [0, 0]], [[6.2, 9.1], [0, 0], [0, 0]], [[4.7, 10], [0, 0], [0, 0]], [[5.4, 11.2], [0, 0], [0, 0]]]);
part3_2.closed = true;
part3_2.fillColor = m_color1;

var part3_3 = new Path([[[13.7, 13.6], [0, 0], [0, 0]], [[14.4, 16.3], [0, 0], [0, 0]], [[15.9, 15.9], [0, 0], [0, 0]], [[15.6, 14.6], [0, 0], [0, 0]], [[17.3, 15.7], [0, 0], [0, 0]], [[18.1, 14.3], [0, 0], [0, 0]], [[16.3, 13.3], [0, 0], [0, 0]], [[17.6, 13], [0, 0], [0, 0]], [[17.2, 11.5], [0, 0], [0, 0]], [[14.4, 12.2], [0, 0], [0, 0]], [[12.7, 11.2], [0, 0], [0, 0]], [[13.4, 10], [0, 0], [0, 0]], [[11.8, 9.1], [0, 0], [0, 0]], [[11.1, 10.3], [0, 0], [0, 0]], [[11, 10.2], [0, 0], [0, 0]], [[9.9, 10.5], [0, 0], [0, 0]], [[10.2, 11.6], [0, 0], [0, 0]], [[10.4, 11.6], [0, 0], [0, 0]], [[9.6, 12.9], [0, 0], [0, 0]], [[11.2, 13.8], [0, 0], [0, 0]], [[11.9, 12.5], [0, 0], [0, 0]]]);
part3_3.closed = true;
part3_3.fillColor = m_color1;

var part3_4 = new Path([[[4.4, 6.4], [0, 0], [0, 0]], [[3.7, 3.7], [0, 0], [0, 0]], [[2.2, 4.1], [0, 0], [0, 0]], [[2.5, 5.4], [0, 0], [0, 0]], [[0.8, 4.3], [0, 0], [0, 0]], [[0, 5.7], [0, 0], [0, 0]], [[1.8, 6.7], [0, 0], [0, 0]], [[0.5, 7], [0, 0], [0, 0]], [[0.9, 8.5], [0, 0], [0, 0]], [[3.7, 7.8], [0, 0], [0, 0]], [[5.4, 8.8], [0, 0], [0, 0]], [[4.7, 10], [0, 0], [0, 0]], [[6.2, 10.9], [0, 0], [0, 0]], [[7, 9.7], [0, 0], [0, 0]], [[7.1, 9.8], [0, 0], [0, 0]], [[8.2, 9.5], [0, 0], [0, 0]], [[7.9, 8.4], [0, 0], [0, 0]], [[7.7, 8.4], [0, 0], [0, 0]], [[8.5, 7.1], [0, 0], [0, 0]], [[6.9, 6.2], [0, 0], [0, 0]], [[6.2, 7.5], [0, 0], [0, 0]]]);
part3_4.closed = true;
part3_4.fillColor = m_color1;

var part3_5 = new Path([[[8.3, 15.8], [0, 0], [0, 0]], [[6.3, 17.8], [0, 0], [0, 0]], [[7.4, 18.9], [0, 0], [0, 0]], [[8.3, 18], [0, 0], [0, 0]], [[8.3, 20], [0, 0], [0, 0]], [[9.8, 20], [0, 0], [0, 0]], [[9.8, 18], [0, 0], [0, 0]], [[10.7, 18.9], [0, 0], [0, 0]], [[11.8, 17.8], [0, 0], [0, 0]], [[9.8, 15.8], [0, 0], [0, 0]], [[9.8, 13.8], [0, 0], [0, 0]], [[11.3, 13.8], [0, 0], [0, 0]], [[11.3, 12], [0, 0], [0, 0]], [[9.8, 12], [0, 0], [0, 0]], [[9.8, 11.8], [0, 0], [0, 0]], [[9, 11], [0, 0], [0, 0]], [[8.3, 11.8], [0, 0], [0, 0]], [[8.3, 12], [0, 0], [0, 0]], [[6.8, 12], [0, 0], [0, 0]], [[6.8, 13.8], [0, 0], [0, 0]], [[8.3, 13.8], [0, 0], [0, 0]]]);
part3_5.closed = true;
part3_5.fillColor = m_color1;

var part3_6 = new Path([[[9.8, 4.2], [0, 0], [0, 0]], [[11.8, 2.2], [0, 0], [0, 0]], [[10.7, 1.1], [0, 0], [0, 0]], [[9.8, 2], [0, 0], [0, 0]], [[9.8, 0], [0, 0], [0, 0]], [[8.3, 0], [0, 0], [0, 0]], [[8.3, 2], [0, 0], [0, 0]],
[[7.4, 1.1], [0, 0], [0, 0]], [[6.3, 2.2], [0, 0], [0, 0]], [[8.3, 4.2], [0, 0], [0, 0]], [[8.3, 6.2], [0, 0], [0, 0]], [[6.8, 6.2], [0, 0], [0, 0]], [[6.8, 8], [0, 0], [0, 0]], [[8.3, 8], [0, 0], [0, 0]], [[8.3, 8.2], [0, 0], [0, 0]], [[9, 9], [0, 0], [0, 0]], [[9.8, 8.2], [0, 0], [0, 0]], [[9.8, 8], [0, 0], [0, 0]], [[11.3, 8], [0, 0], [0, 0]], [[11.3, 6.2], [0, 0], [0, 0]], [[9.8, 6.2], [0, 0], [0, 0]]]);
part3_6.closed = true;
part3_6.fillColor = m_color1;

var part3 = new Group(part3_1, part3_2, part3_3, part3_4, part3_5, part3_6);
part3.scale(2);

var part3_raster = part3.rasterize();
part3.remove();

var part4_1 = new Path([[[14.5, 7.5], [-0.5, 0.5], [0.5, -0.5]], [[16.5, 7.5], [-0.5, -0.5], [0.5, 0.5]], [[16.5, 9.5], [0.5, -0.5], [-0.5, 0.5]], [[14.5, 9.5], [0.5, 0.5], [-0.5, -0.5]]]);
part4_1.closed = true;
part4_1.fillColor = m_color1;

var part4_2 = new Path([[[7.6, 14.5], [-0.5, 0.5], [0.5, -0.5]], [[9.5, 14.5], [-0.5, -0.5], [0.5, 0.5]], [[9.5, 16.5], [0.5, -0.5], [-0.5, 0.5]], [[7.6, 16.5], [0.5, 0.5], [-0.5, -0.5]]]);
part4_2.closed = true;
part4_2.fillColor = m_color1;

var part4_3 = new Path([[[16.9, 10.7], [-0.7, 0], [0.7, 0]], [[18.3, 12], [0, -0.7], [0, 0.7]], [[16.9, 13.3], [0.7, 0], [-0.7, 0]], [[15.6, 12], [0, 0.7], [0, -0.7]]]);
part4_3.closed = true;
part4_3.fillColor = m_color1;

var part4_4 = new Path([[[7.1, 10.7], [-0.7, 0], [0.7, 0]], [[8.4, 12], [0, -0.7], [0, 0.7]], [[7.1, 13.3], [0.7, 0], [-0.7, 0]], [[5.7, 12], [0, 0.7], [0, -0.7]]]);
part4_4.closed = true;
part4_4.fillColor = m_color1;

var part4_5 = new Path([[[16.5, 14.5], [-0.5, -0.5], [0.5, 0.5]], [[16.5, 16.5], [0.5, -0.5], [-0.5, 0.5]], [[14.5, 16.5], [0.5, 0.5], [-0.5, -0.5]], [[14.5, 14.5], [-0.5, 0.5], [0.5, -0.5]]]);
part4_5.closed = true;
part4_5.fillColor = m_color1;

var part4_6 = new Path([[[9.5, 7.5], [-0.5, -0.5], [0.5, 0.5]], [[9.5, 9.5], [0.5, -0.5], [-0.5, 0.5]], [[7.5, 9.5], [0.5, 0.5], [-0.5, -0.5]], [[7.5, 7.5], [-0.5, 0.5], [0.5, -0.5]]]);
part4_6.closed = true;
part4_6.fillColor = m_color1;

var part4_7 = new Path([[[10.8, 11.5], [-0.3, 0.7], [0.3, -0.7]], [[12.5, 10.8], [-0.7, -0.3], [0.7, 0.3]], [[13.2, 12.5], [0.3, -0.7], [-0.3, 0.7]], [[11.5, 13.2], [0.7, 0.3], [-0.7, -0.3]]]);
part4_7.closed = true;
part4_7.fillColor = m_color2;

var part4_8 = new Path([[[14, 3.7], [-0.3, 0.7], [0.3, -0.7]], [[15.7, 3], [-0.7, -0.3], [0.7, 0.3]], [[16.5, 4.7], [0.3, -0.7], [-0.3, 0.7]], [[14.7, 5.5], [0.7, 0.3], [-0.7, -0.3]]]);
part4_8.closed = true;
part4_8.fillColor = m_color2;

var part4_9 = new Path([[[7.5, 19.3], [-0.3, 0.7], [0.3, -0.7]], [[9.3, 18.5], [-0.7, -0.3], [0.7, 0.3]], [[10, 20.3], [0.3, -0.7], [-0.3, 0.7]], [[8.3, 21], [0.7, 0.3], [-0.7, -0.3]]]);
part4_9.closed = true;
part4_9.fillColor = m_color2;

var part4_10 = new Path([[[19.3, 7.5], [-0.7, 0.3], [0.7, -0.3]], [[21, 8.3], [-0.3, -0.7], [0.3, 0.7]], [[20.3, 10], [0.7, -0.3], [-0.7, 0.3]], [[18.5, 9.3], [0.3, 0.7], [-0.3, -0.7]]]);
part4_10.closed = true;
part4_10.fillColor = m_color2;

var part4_11 = new Path([[[3.7, 14], [-0.7, 0.3], [0.7, -0.3]], [[5.5, 14.7], [-0.3, -0.7], [0.3, 0.7]], [[4.7, 16.5], [0.7, -0.3], [-0.7, 0.3]], [[3, 15.7], [0.3, 0.7], [-0.3, -0.7]]]);
part4_11.closed = true;
part4_11.fillColor = m_color2;

var part4_12 = new Path([[[20.3, 14], [-0.7, -0.3], [0.7, 0.3]], [[21, 15.7], [0.3, -0.7], [-0.3, 0.7]], [[19.3, 16.5], [0.7, 0.3], [-0.7, -0.3]], [[18.5, 14.7], [-0.3, 0.7], [0.3, -0.7]]]);
part4_12.closed = true;
part4_12.fillColor = m_color2;

var part4_13 = new Path([[[4.7, 7.5], [-0.7, -0.3], [0.7, 0.3]], [[5.5, 9.3], [0.3, -0.7], [-0.3, 0.7]], [[3.7, 10], [0.7, 0.3], [-0.7, -0.3]], [[3, 8.3], [-0.3, 0.7], [0.3, -0.7]]]);
part4_13.closed = true;
part4_13.fillColor = m_color2;

var part4_14 = new Path([[[16.5, 19.3], [-0.3, -0.7], [0.3, 0.7]], [[15.7, 21], [0.7, -0.3], [-0.7, 0.3]], [[14, 20.3], [0.3, 0.7], [-0.3, -0.7]], [[14.7, 18.5], [-0.7, 0.3], [0.7, -0.3]]]);
part4_14.closed = true;
part4_14.fillColor = m_color2;

var part4_15 = new Path([[[10, 3.7], [-0.3, -0.7], [0.3, 0.7]], [[9.3, 5.5], [0.7, -0.3], [-0.7, 0.3]], [[7.5, 4.7], [0.3, 0.7], [-0.3, -0.7]], [[8.3, 3], [-0.7, 0.3], [0.7, -0.3]]]);
part4_15.closed = true;
part4_15.fillColor = m_color2;

var part4_16 = new Path([[[13.3, 16.9], [0, -0.7], [0, 0.7]], [[12, 18.3], [0.7, 0], [-0.7, 0]], [[10.7, 16.9], [0, 0.7], [0, -0.7]], [[12, 15.6], [-0.7, 0], [0.7, 0]]]);
part4_16.closed = true;
part4_16.fillColor = m_color1;

var part4_17 = new Path([[[13.3, 7.1], [0, -0.7], [0, 0.7]], [[12, 8.4], [0.7, 0], [-0.7, 0]], [[10.7, 7.1], [0, 0.7], [0, -0.7]], [[12, 5.7], [-0.7, 0], [0.7, 0]]]);
part4_17.closed = true;
part4_17.fillColor = m_color1;

var part4_18 = new Path([[[15.4, 12], [0, -1.9], [0, 1.9]], [[12, 15.4], [1.9, 0], [-1.9, 0]], [[8.6, 12], [0, 1.9], [0, -1.9]], [[12, 8.6], [-1.9, 0], [1.9, 0]]]);
part4_18.closed = true;
part4_18.fillColor = m_color1;

var part4_19 = new Path([[[18.7, 12], [0, -3.7], [0, 3.7]], [[12, 18.7], [3.7, 0], [-3.7, 0]], [[5.3, 12], [0, 3.7], [0, -3.7]], [[12, 5.3], [-3.7, 0], [3.7, 0]]]);
part4_19.closed = true;
part4_19.fillColor = m_color2;

var part4_20 = new Path([[[7.9, 22], [0, 0], [0, 0]], [[2, 16.1], [0, 0], [0, 0]], [[2, 7.9], [0, 0], [0, 0]], [[7.9, 2], [0, 0], [0, 0]], [[16.1, 2], [0, 0], [0, 0]], [[22, 7.9], [0, 0], [0, 0]], [[22, 16.1], [0, 0], [0, 0]], [[16.1, 22], [0, 0], [0, 0]]]);
part4_20.closed = true;
part4_20.fillColor = m_color1;

var part4 = new Group(part4_20, part4_19, part4_1, part4_2, part4_3, part4_4, part4_5, part4_6, part4_8, part4_9, part4_10, part4_11, part4_12, part4_13, part4_14, part4_15, part4_16, part4_17, part4_18, part4_7);
part4.scale(2);

var part4_raster = part4.rasterize();
part4.remove();

var part5_1 = new Path([[[12, 7.8], [-0.4, 0], [0.4, 0]], [[12.8, 9], [0, 0], [0, 0]], [[14.1, 8.4], [-0.3, -0.2], [0.3, 0.2]], [[14.2, 9.8], [0, 0], [0, 0]], [[15.6, 9.9], [-0.2, -0.3], [0.2, 0.3]], [[15, 11.2], [0, 0], [0, 0]], [[16.2, 12], [0, 0], [0, 0]], [[15, 12.8], [0, 0], [0, 0]], [[15.6, 14.1], [0.2, -0.3], [-0.2, 0.3]], [[14.2, 14.2], [0, 0], [0, 0]], [[14.1, 15.6], [0.3, -0.2], [-0.3, 0.2]], [[12.8, 15], [0, 0], [0, 0]], [[12, 16.2], [0.4, 0], [-0.4, 0]], [[11.2, 15], [0, 0], [0, 0]], [[9.9, 15.6], [0.3, 0.2], [-0.3, -0.2]], [[9.8, 14.2], [0, 0], [0, 0]], [[8.4, 14.1], [0.2, 0.3], [-0.2, -0.3]], [[9, 12.8], [0, 0], [0, 0]], [[7.8, 12], [0, 0.4], [0, -0.4]], [[9, 11.2], [0, 0], [0, 0]], [[8.4, 9.9], [-0.2, 0.3], [0.2, -0.3]], [[9.8, 9.8], [0, 0], [0, 0]], [[9.9, 8.4], [-0.3, 0.2], [0.3, -0.2]], [[11.2, 9], [0, 0], [0, 0]]]);
part5_1.closed = true;
part5_1.fillColor = m_color1;

var part5_2 = new Path([[[17.4, 12], [0, -3], [0, 3]], [[12, 17.4], [3, 0], [-3, 0]], [[6.6, 12], [0, 3], [0, -3]], [[12, 6.6], [-3, 0], [3, 0]]]);
part5_2.closed = true;
part5_2.fillColor = m_color2;

var part5_3 = new Path([[[12, 2], [-0.9, 0], [0.9, 0]], [[13.8, 5.1], [-0.9, -0.2], [0.9, 0.2]], [[17, 3.3], [-0.8, -0.5], [0.8, 0.5]], [[17.1, 6.9], [-0.6, -0.6], [0.6, 0.6]], [[20.7, 7], [-0.5, -0.8], [0.5, 0.8]], [[18.9, 10.2], [-0.2, -0.9], [0.2, 0.9]], [[22, 12], [0, -0.9], [0, 0.9]], [[18.9, 13.8], [0.2, -0.9], [-0.2, 0.9]], [[20.7, 17], [0.5, -0.8], [-0.5, 0.8]], [[17.1, 17.1], [0.6, -0.6], [-0.6, 0.6]], [[17, 20.7], [0.8, -0.5], [-0.8, 0.5]], [[13.8, 18.9], [0.9, -0.2], [-0.9, 0.2]], [[12, 22], [0.9, 0], [-0.9, 0]], [[10.2, 18.9], [0.8, 0.3], [-0.8, -0.3]], [[7, 20.7], [0.8, 0.5], [-0.8, -0.5]], [[6.9, 17.1], [0.6, 0.6], [-0.6, -0.6]], [[3.3, 17], [0.5, 0.8], [-0.5, -0.8]], [[5.1, 13.8], [0.2, 0.9], [-0.2, -0.9]], [[2, 12], [0, 0.9], [0, -0.9]], [[5.1, 10.2], [-0.2, 0.9], [0.2, -0.9]], [[3.3, 7], [-0.5, 0.8], [0.5, -0.8]], [[6.9, 6.9], [-0.6, 0.6], [0.6, -0.6]], [[7, 3.3], [-0.8, 0.5], [0.8, -0.5]], [[10.2, 5.1], [-0.8, 0.3], [0.8, -0.3]]]);
part5_3.closed = true;
part5_3.fillColor = m_color1;

var part5_4 = new Path([[[24, 12], [0, -6.6], [0, 6.6]], [[12, 24], [6.6, 0], [-6.6, 0]], [[0, 12], [0, 6.6], [0, -6.6]], [[12, 0], [-6.6, 0], [6.6, 0]]]);
part5_4.closed = true;

var part5 = new Group(part5_3, part5_2, part5_1, part5_4);
part5.scale(2);

var part5_raster = part5.rasterize();
part5.remove();

var part6_1 = new Path([[[16.4, 4.9], [-0.7, 0.7], [0.7, -0.7]], [[19.1, 4.9], [-0.7, -0.7], [0.7, 0.7]], [[19.1, 7.6], [0.7, -0.7], [-0.7, 0.7]], [[16.4, 7.6], [0.7, 0.7], [-0.7, -0.7]]]);
part6_1.closed = true;
part6_1.fillColor = m_color1;

var part6_2 = new Path([[[4.9, 16.4], [-0.7, 0.7], [0.7, -0.7]], [[7.6, 16.4], [-0.7, -0.7], [0.7, 0.7]], [[7.6, 19.1], [0.7, -0.7], [-0.7, 0.7]], [[4.9, 19.1], [0.7, 0.7], [-0.7, -0.7]]]);
part6_2.closed = true;
part6_2.fillColor = m_color1;

var part6_3 = new Path([[[20.1, 10.1], [-1, 0], [1, 0]], [[22, 12], [0, -1], [0, 1]], [[20.1, 13.9], [1, 0], [-1, 0]], [[18.3, 12], [0, 1], [0, -1]]]);
part6_3.closed = true;
part6_3.fillColor = m_color1;

var part6_4 = new Path([[[3.9, 10.1], [-1, 0], [1, 0]], [[5.7, 12], [0, -1], [0, 1]], [[3.9, 13.9], [1, 0], [-1, 0]], [[2, 12], [0, 1], [0, -1]]]);
part6_4.closed = true;
part6_4.fillColor = m_color1;

var part6_5 = new Path([[[19.1, 16.4], [-0.7, -0.7], [0.7, 0.7]], [[19.1, 19.1], [0.7, -0.7], [-0.7, 0.7]], [[16.4, 19.1], [0.7, 0.7], [-0.7, -0.7]], [[16.4, 16.4], [-0.7, 0.7], [0.7, -0.7]]]);
part6_5.closed = true;
part6_5.fillColor = m_color1;

var part6_6 = new Path([[[7.6, 4.9], [-0.7, -0.7], [0.7, 0.7]], [[7.6, 7.6], [0.7, -0.7], [-0.7, 0.7]], [[4.9, 7.6], [0.7, 0.7], [-0.7, -0.7]], [[4.9, 4.9], [-0.7, 0.7], [0.7, -0.7]]]);
part6_6.closed = true;
part6_6.fillColor = m_color1;

var part6_7 = new Path([[[13.9, 20.1], [0, -1], [0, 1]], [[12, 22], [1, 0], [-1, 0]], [[10.1, 20.1], [0, 1], [0, -1]], [[12, 18.3], [-1, 0], [1, 0]]]);
part6_7.closed = true;
part6_7.fillColor = m_color1;

var part6_8 = new Path([[[13.9, 3.9], [0, -1], [0, 1]], [[12, 5.7], [1, 0], [-1, 0]], [[10.1, 3.9], [0, 1], [0, -1]], [[12, 2], [-1, 0], [1, 0]]]);
part6_8.closed = true;
part6_8.fillColor = m_color1;

var part6_9 = new Path([[[16.6, 12], [0, -2.5], [0, 2.5]], [[12, 16.6], [2.5, 0], [-2.5, 0]], [[7.4, 12], [0, 2.5], [0, -2.5]], [[12, 7.4], [-2.5, 0], [2.5, 0]]]);
part6_9.closed = true;
part6_9.fillColor = m_color1;

var part6_10 = new Path([[[20.1, 12], [0, -4.5], [0, 4.5]], [[12, 20.1], [4.5, 0], [-4.5, 0]], [[3.9, 12], [0, 4.5], [0, -4.5]], [[12, 3.9], [-4.5, 0], [4.5, 0]]]);
part6_10.closed = true;
part6_10.strokeColor = m_color1;

var part6_11 = new Path([[[24, 12], [0, -6.6], [0, 6.6]], [[12, 24], [6.6, 0], [-6.6, 0]], [[0, 12], [0, 6.6], [0, -6.6]], [[12, 0], [-6.6, 0], [6.6, 0]]]);
part6_11.closed = true;

var part6 = new Group(part6_11, part6_1, part6_2, part6_3, part6_4, part6_5, part6_6, part6_7, part6_8, part6_9, part6_10);
part6.scale(2);

var part6_raster = part6.rasterize();
part6.remove();

var part7_1 = new Path([[[15.3, 12], [0, -1.8], [0, 1.8]], [[12, 15.3], [1.8, 0], [-1.8, 0]], [[8.7, 12], [0, 1.8], [0, -1.8]], [[12, 8.7], [-1.8, 0], [1.8, 0]]]);
part7_1.closed = true;
part7_1.fillColor = m_color1;

var part7_2 = new Path([[[12, 5.5], [-0.8, 0], [0.8, 0]], [[13, 8.4], [0, 0], [0, 0]], [[15.2, 6.4], [-0.7, -0.4], [0.7, 0.4]], [[14.6, 9.4], [0, 0], [0, 0]], [[17.6, 8.8], [-0.4, -0.7], [0.4, 0.7]], [[15.6, 11], [0, 0], [0, 0]], [[18.5, 12], [0, -0.8], [0, 0.8]], [[15.6, 13], [0, 0], [0, 0]], [[17.6, 15.2], [0.4, -0.7], [-0.4, 0.7]], [[14.6, 14.6], [0, 0], [0, 0]], [[15.2, 17.6], [0.7, -0.4], [-0.7, 0.4]], [[13, 15.6], [0, 0], [0, 0]], [[12, 18.5], [0.8, 0], [-0.8, 0]], [[11, 15.6], [0, 0], [0, 0]], [[8.8, 17.6], [0.7, 0.4], [-0.7, -0.4]], [[9.4, 14.6], [0, 0], [0, 0]], [[6.4, 15.2], [0.4, 0.7], [-0.4, -0.7]], [[8.4, 13], [0, 0], [0, 0]], [[5.5, 12], [0, 0.8], [0, -0.8]], [[8.4, 11], [0, 0], [0, 0]], [[6.4, 8.8], [-0.4, 0.7], [0.4, -0.7]], [[9.4, 9.4], [0, 0], [0, 0]], [[8.8, 6.4], [-0.7, 0.4], [0.7, -0.4]], [[11, 8.4], [0, 0], [0, 0]]]);
part7_2.closed = true;
part7_2.fillColor = m_color2;

var part7_3 = new Path([[[12, 1], [-1.3, 0], [1.3, 0]], [[13.6, 5.9], [0, 0], [0, 0]], [[17.5, 2.5], [-1.1, -0.6], [1.1, 0.6]], [[16.4, 7.6], [0, 0], [0, 0]], [[21.5, 6.5], [-0.6, -1.1], [0.6, 1.1]], [[18.1, 10.4], [0, 0], [0, 0]], [[23, 12], [0, -1.3], [0, 1.3]], [[18.1, 13.6], [0, 0], [0, 0]], [[21.5, 17.5], [0.6, -1.1], [-0.6, 1.1]], [[16.4, 16.4], [0, 0], [0, 0]], [[17.5, 21.5], [1.1, -0.6], [-1.1, 0.6]], [[13.6, 18.1], [0, 0], [0, 0]], [[12, 23], [1.3, 0], [-1.3, 0]], [[10.4, 18.1], [0, 0], [0, 0]], [[6.5, 21.5], [1.1, 0.6], [-1.1, -0.6]], [[7.6, 16.4], [0, 0], [0, 0]], [[2.5, 17.5], [0.6, 1.1], [-0.6, -1.1]], [[5.9, 13.6], [0, 0], [0, 0]], [[1, 12], [0, 1.3], [0, -1.3]], [[5.9, 10.4], [0, 0], [0, 0]], [[2.5, 6.5], [-0.6, 1.1], [0.6, -1.1]], [[7.6, 7.6], [0, 0], [0, 0]], [[6.5, 2.5], [-1.1, 0.6], [1.1, -0.6]], [[10.4, 5.9], [0, 0], [0, 0]]]);
part7_3.closed = true;
part7_3.fillColor = m_color1;

var part7_4 = new Path([
[[24, 12], [0, -6.6], [0, 6.6]],
[[12, 24], [6.6, 0], [-6.6, 0]],
[[0, 12], [0, 6.6], [0, -6.6]],
[[12, 0], [-6.6, 0], [6.6, 0]]]);
part7_4.closed = true;

var part7 = new Group(part7_4, part7_3, part7_2, part7_1);
part7.scale(2);

var part7_raster = part7.rasterize();
part7.remove();


var n_point = new Point(),
	hitResult,
	hit_b=false,
	part_variant = [part1_raster, part2_raster, part3_raster, part4_raster, part5_raster, part6_raster, part7_raster],
	particles=[],
	particles_path=[],
	big_group = new Group(),
	m_box = new Path.Rectangle([0,0], [800,800]);

big_group.addChild(m_box);
big_group.addChild(heart);

part1_raster.remove();
part2_raster.remove();
part3_raster.remove();
part4_raster.remove();
part5_raster.remove();
part6_raster.remove();
part7_raster.remove();


for (var i = 0; i < particle_count; i++) {
	particles[i] = part_variant[i%part_variant.length].clone();
	particles[i].scale(.5+Math.random()*.5);
	particles[i].position.x = i*20;

	particles[i].r = i%2 == 0 ? 1+Math.random()*speed_rotation : -(1+Math.random()*speed_rotation);
	hit_b=false;

	while(!hit_b){
		n_point = new Point( heart.position.x-heart.bounds.width/2+Math.random()*heart.bounds.width, heart.position.y-heart.bounds.height/2+Math.random()*heart.bounds.height);
		hitResult = heart.hitTest( n_point );
		if (hitResult && hitResult.item){
			hit_b=true;
			particles[i].position = n_point;
		}
	}
	big_group.addChild(particles[i]);
};


var path_h = heart.length/particle_outline_count;
for (var i = 0; i < particle_outline_count; i++) {
	particles_path[i] = part_variant[i%part_variant.length].clone();
	particles_path[i].position = heart.getPointAt( i*path_h );
	particles_path[i].scale(.5+Math.random()*.5);
	particles_path[i].r = i%2 == 0 ? 1+Math.random()*speed_rotation : -(1+Math.random()*speed_rotation);
	big_group.addChild(particles_path[i]);
}

onResize();

function onFrame(event) {
	for (var i = 0; i < particle_count; i++) {
		particles[i].rotate(particles[i].r);	
	};
	for (var i = 0; i < particles_path.length; i++) {
		particles_path[i].rotate(particles_path[i].r);	
	};
}

function onResize(event) {
	big_group.position = view.center - [heart.bounds.width/2+50, 0];
}

</script>

<script type="text/javascript">
	window.onload=function(){
		var v = document.getElementsByTagName("audio")[0];
		v.volume = .8;
		v.loop = true;		
		var play=true;
		v.play();

		var elements = $("#social_icons").children();

		$('canvas').hide().fadeIn(2500);
		$('#greeting_text').hide().delay(2500).fadeIn(3000).css({visibility: 'visible'});

		/*$('#social_icons').css({top:'100%',left:'50%',margin:'-'+($('#social_icons').height()+5)+'px 0 0 -'+($('#social_icons').width() / 2)+'px', visibility: 'visible'});
		*/

		for (var i = 0; i < elements.length; i++) {
			$(elements[i]).hide().delay(5000+i*600).fadeIn(1000).animate({ opacity: 0.5, visibility: 'visible'}, 700).hover(
				function() {$(this).stop().animate({ opacity: 1.0 }, 100);},
				function() {$(this).stop().animate({ opacity: 0.5 }, 500);}
			);
		};

	}