export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Next.js + NextUI",
	description: "Make beautiful websites regardless of your design experience.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "Empresa",
      href: "/company",
    },
    {
      label: "Contato",
      href: "/contact",
    },
    {
      label: "Portfolio",
      href: "/portfolio",
    },
    {
      label: "Blog",
      href: "/Blog",
    }
	],
	links: {
		instagram: "/",
		youtube: "/",
    sistema: "/system"
	},
};
