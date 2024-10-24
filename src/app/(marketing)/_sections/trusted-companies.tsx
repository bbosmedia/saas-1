import React from "react";
import { NeonIcon } from "../_icons/neon-icon";
import { ClerkIcon } from "../_icons/clerk-icon";
import Link from 'next/link'

const TrustedCompanies = () => {
	return (
		<section className="bg-primary text-primary-foreground">
			<div className="container py-16 flex flex-col gap-16 px-8 md:px-16">
				<h2 className="text-3xl text-center text-balance">
					Trusted by the top modern companies
				</h2>
				<div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-16">
					<Link href="https://neon.tech">
						<NeonIcon />
					</Link>
					<Link href="https://clerk.com">
						<ClerkIcon />
					</Link>
					<Link href="https://neon.tech">
						<NeonIcon />
					</Link>
					<Link href="https://clerk.com">
						<ClerkIcon />
					</Link>
					<Link href="https://neon.tech">
						<NeonIcon />
					</Link>
					<Link href="https://clerk.com">
						<ClerkIcon />
					</Link>
					<Link href="https://neon.tech">
						<NeonIcon />
					</Link>
					<Link href="https://clerk.com">
						<ClerkIcon />
					</Link>
					<Link href="https://neon.tech">
						<NeonIcon />
					</Link>
					<Link
						className="md:max-xl:hidden"
						href="https://clerk.com"
					>
						<ClerkIcon />
					</Link>
				</div>
			</div>
		</section>
	);
};

export default TrustedCompanies;
