export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Bahia Visual",
	description: "Natal e Iluminação Pública",
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
