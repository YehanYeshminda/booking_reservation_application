import React from 'react';

const PropertyList = () => {
	return (
		<div className="w-full max-w-5xl flex justify-between gap-5">
			<div className="rounded overflow-hidden cursor-pointer flex-1">
				<img
					src="https://q-xx.bstatic.com/xdata/images/hotel/300x240/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o="
					alt=""
					className="w-full h-40 object-cover"
				/>
				<div className="pListTitles">
					<h1 className="text-[18px] font-bold">Hotels</h1>
					<h2 className="text-[14px] font-normal">233 Hotels</h2>
				</div>
			</div>
			<div className="rounded overflow-hidden cursor-pointer flex-1">
				<img
					src="https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o="
					alt=""
					className="w-full h-40 object-cover"
				/>
				<div className="pListTitles">
					<h1 className="text-[18px] font-bold">Resorts</h1>
					<h2 className="text-[14px] font-normal">233 Resorts</h2>
				</div>
			</div>
			<div className="rounded overflow-hidden cursor-pointer flex-1">
				<img
					src="https://r-xx.bstatic.com/xdata/images/hotel/300x240/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o="
					alt=""
					className="w-full h-40 object-cover"
				/>
				<div className="pListTitles">
					<h1 className="text-[18px] font-bold">Jacusies</h1>
					<h2 className="text-[14px] font-normal">233 Jacusies</h2>
				</div>
			</div>
			<div className="rounded overflow-hidden cursor-pointer flex-1">
				<img
					src="https://r-xx.bstatic.com/xdata/images/xphoto/300x240/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o="
					alt=""
					className="w-full h-40 object-cover"
				/>
				<div className="pListTitles">
					<h1 className="text-[18px] font-bold">Businesses</h1>
					<h2 className="text-[14px] font-normal">233 Businesses</h2>
				</div>
			</div>
		</div>
	);
};

export default PropertyList;
