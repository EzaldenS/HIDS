import React from "react";

const Home = () => {
	return (
		<>
			<div className="flex flex-col md:flex-row justify-around items-center w-full mt-28 bg-gradient-to-l from-red-50 to-white rounded-full">
				<div className="flex flex-col justify-around items-center py-8 px-12 md:w-1/2">
					<h1 className="text-6xl mb-10 max-w-lg font-bold ">
						Design your amazing dream home in 30min
					</h1>
					<ul className="list-disc ml-4">
						<li className="mb-2 text-xl font-semibold">
							Free 3D home & interior design software
						</li>
						<li className="mb-2 text-xl font-semibold">
							1000+ designs & 20,000+ product options
						</li>
						<li className="mb-2 text-xl font-semibold">
							Real-time instant quotation of design
						</li>
					</ul>
					<button className="mt-10 bg-gradient-to-l from-gray-900 to-gray-800 rounded-2xl text-4xl py-4 px-6 text-white">
						Get started
					</button>
				</div>
				<div className="max-w-xl mt-10 md:mt-0 md:w-1/2">
					<img
						className="w-full h-auto rounded-xl"
						src="./imgs/home.webp"
						alt=""
					/>
				</div>
			</div>

			<div className="flex flex-col justify-around items-center my-14 mx-2">
				<div>
					<h1 className="font-bold text-4xl p-2">A simple new way to design</h1>
				</div>
				<div className="flex flex-row justify-around items-center flex-wrap">
					<div className="flex flex-col justify-around items-center">
						<img
							src="https://rome2.superbolter.com/Images/LandingPage/1-1.webp"
							alt=""
						/>
						<p className="text-xl font-semibold">Living room</p>
					</div>
					<div className="flex flex-col justify-around items-center">
						<img
							src="https://rome4.superbolter.com/Images/LandingPage/6-1.webp"
							alt=""
						/>
						<p className="text-xl font-semibold">Living room</p>
					</div>
					<div className="flex flex-col justify-around items-center">
						<img
							src="https://rome2.superbolter.com/Images/LandingPage/5-1.webp"
							alt=""
						/>
						<p className="text-xl font-semibold">Living room</p>
					</div>
					<div className="flex flex-col justify-around items-center">
						<img
							src="https://rome4.superbolter.com/Images/LandingPage/2-1.webp"
							alt=""
						/>
						<p className="text-xl font-semibold">Living room</p>
					</div>
					<div className="flex flex-col justify-around items-center">
						<img src="https://rome4.superbolter.com/Images/LandingPage/7-1.webp" />
						<p className="text-xl font-semibold">Living room</p>
					</div>
				</div>
			</div>
			<div className="py-24 p-12 flex md:flex-row  flex-col justify-around items-center text-xl bg-gradient-to-l from-blue-200 to-blue-50">
				<div>
					<p className="max-w-2xl px-2 py-8">
						Design shouldn't be hard, but somewhere along the way, we became
						bogged down with an expensive and time-consuming, process and
						complicated software that put design out of reach for most people.
						SuperBolter is here to change that, with a tool that makes design
						simple for everyone.
					</p>
				</div>
				<div>
					<p className="max-w-2xl px-2 py-8">
						SuperBolter gives you everything you need to easily turn ideas into
						stunning designs. Create designs for living rooms, bed rooms,
						dining, guest rooms, kid's rooms, study, and so much more.
					</p>
				</div>
			</div>
			<div className="bg-gradient-to-l from-gray-200 to-gray-50 p-24">
				<div className="flex justify-around items-center pb-24 ">
					<h1 className="text-4xl font-bold">
						<span className="text-4xl text-red-400 ">4 STYPS</span> to achieve
						your dream home in 3D
					</h1>
				</div>
				<div className="flex flex-col  justify-around items-center">
					<div className="flex m-12">
						<div className="p-8 ">
							<div className="text-5xl text-gray-400 font-semibold">1</div>
							<div className="text-3xl text-gray-800 py-8">
								Select your floorplan to get an interactive 3D home
							</div>
							<div className="text-2xl text-gray-700">
								Select your floorplan from a library of 1000s of homes or
								directly upload a floorplan image to get an interactive 3D home.
							</div>
						</div>
						<div>
							<video src="./imgs/5.webm" autoplay loop></video>
						</div>
					</div>
					<div className="flex m-12">
						<div className=" ">
							<div className="text-5xl text-gray-400 font-semibold">2</div>
							<div className="text-3xl text-gray-800 py-8">
								Select your floorplan to get an interactive 3D home
							</div>
							<div className="text-2xl text-gray-700">
								Select your floorplan from a library of 1000s of homes or
								directly upload a floorplan image to get an interactive 3D home.
							</div>
						</div>
						<div>
							<video src="./imgs/5.webm" autoplay loop></video>
						</div>
					</div>
					<div className="flex m-12">
						<div className=" ">
							<div className="text-5xl text-gray-400 font-semibold">3</div>
							<div className="text-3xl text-gray-800 py-8">
								Select your floorplan to get an interactive 3D home
							</div>
							<div className="text-2xl text-gray-700">
								Select your floorplan from a library of 1000s of homes or
								directly upload a floorplan image to get an interactive 3D home.
							</div>
						</div>
						<div>
							<video src="./imgs/5.webm" autoplay loop></video>
						</div>
					</div>
					<div className="flex m-12">
						<div className=" ">
							<div className="text-5xl text-gray-400 font-semibold">4</div>
							<div className="text-3xl text-gray-800 py-8">
								Select your floorplan to get an interactive 3D home
							</div>
							<div className="text-2xl text-gray-700">
								Select your floorplan from a library of 1000s of homes or
								directly upload a floorplan image to get an interactive 3D home.
							</div>
						</div>
						<div>
							<video src="./imgs/5.webm" autoplay loop></video>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
