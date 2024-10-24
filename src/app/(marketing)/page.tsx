import Link from "next/link";
import React from "react";

import HomeHero from "./_sections/home-hero";
import TrustedCompanies from "./_sections/trusted-companies";
import HomePricing from "./_sections/home-pricing";

const Home = () => {
	return (
		<>
			<HomeHero />
			<TrustedCompanies />
			<HomePricing />
		</>
	);
};

export default Home;
