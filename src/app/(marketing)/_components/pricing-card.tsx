import { subscriptionTiersInOrder } from "@/data/subscription-tiers-in-order";
import { cn } from "@/lib/utils";
import { SignUpButton } from "@clerk/nextjs";
import { Button } from "../../../components/ui/button";
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
} from "../../../components/ui/card";
import { formatCompactNumber } from "@/lib/formatter";
import { ReactNode } from "react";
import { CheckIcon } from "lucide-react";

const PricingCard = ({
	name,
	priceInCents,
	maxNumberOfVisits,
	maxNumberOfProducts,
	canRemoveBranding,
	canAccessAnalytics,
	canCustomizeBanner,
}: (typeof subscriptionTiersInOrder)[number]) => {
	const isMostPopular = name === "Standard";

	return (
		<Card
			className={cn(
				"relative shadow-none rounded-3xl overflow-hidden",
				isMostPopular ? "border-accent border-2" : "border-none"
			)}
		>
			{isMostPopular && (
				<div className="bg-accent text-accent-foreground absolute py-1 px-10 -right-8 top-24 rotate-45 origin-top-right">
					Most popular
				</div>
			)}
			<CardHeader>
				<div className="text-accent font-semibold mb-8">{name}</div>
				<CardTitle className="text-xl font-bold">
					${priceInCents / 100} /mo
				</CardTitle>
				<CardDescription>
					{formatCompactNumber(maxNumberOfVisits)} pricing page visits/mo
				</CardDescription>
			</CardHeader>
			<CardContent>
				<SignUpButton>
					<Button
						className="text-lg w-full rounded-lg"
						variant={isMostPopular ? "accent" : "default"}
					>
						Get Started
					</Button>
				</SignUpButton>
			</CardContent>
			<CardFooter className="flex flex-col gap-4 items-start">
				<Feature className="font-bold">
					{maxNumberOfProducts}{" "}
					{maxNumberOfProducts === 1 ? "product" : "products"}
				</Feature>
				<Feature>PPP discounts</Feature>
				{canAccessAnalytics && <Feature>Advanced analytics</Feature>}
				{canRemoveBranding && <Feature>Remove Easy PPP branding</Feature>}
				{canCustomizeBanner && <Feature>Banner customization</Feature>}
			</CardFooter>
		</Card>
	);
};

const Feature = ({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) => {
	return (
		<div className={cn("flex items-center gap-2", className)}>
			<CheckIcon className="size-4 stroke-accent bg-accent/25 rounded-full p-0.5" />
			<span>{children}</span>
		</div>
	);
};

export default PricingCard;
