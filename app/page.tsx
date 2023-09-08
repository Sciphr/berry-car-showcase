import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from "@/components";
import { fuels, yearsOfProduction } from "@/constants/constants";

import { fetchCars } from "@/utils";

const Home = async ({ searchParams }: any) => {
	const allCars = await fetchCars({
		manufacturer: searchParams?.manufacturer || "",
		model: searchParams?.model || "",
		year: searchParams?.year || 2022,
		fuel: searchParams?.fuel || "",
		limit: searchParams?.limit || 10,
	});

	const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

	return (
		<>
			<main className="overflow-hidden">
				<Hero />

				<div className="mt-12 padding-x padding-y max-width" id="discover">
					<div className="home__text-container">
						<h1 className="text-4xl font-extrabold">Car Catalogue</h1>
						<p>Explore the next car for you!</p>
					</div>
					<div className="home__filters">
						<SearchBar />
						<div className="home__filter-container">
							<CustomFilter title="Fuel" options={fuels} />
							<CustomFilter title="Year" options={yearsOfProduction} />
						</div>
					</div>

					{!isDataEmpty ? (
						<section>
							<div className="home__cars-wrapper">
								{allCars?.map((car) => (
									<CarCard car={car} />
								))}
							</div>
							<ShowMore
								pageNumber={(searchParams?.limit || 10) / 10}
								isNext={(searchParams?.limit || 10) > allCars.length}
							/>
						</section>
					) : (
						<div className="home__error-container">
							<h2 className="text-black text-xl font-bold">Oops, no results</h2>
							<p>{allCars?.message}</p>
						</div>
					)}
				</div>
			</main>
		</>
	);
};

export default Home;
