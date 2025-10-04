export interface _Object {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[key: string]: any
}

export interface MenuItemEntity {
	menuItemEntity: {
		id: string
		type: string
		object: string
	}
}

export interface MenuItem {
	nodes: []
	child: { nodes: { label: string, path: string } }
	subChild: { nodes: { label: string, path: string, menuItemEntity: MenuItemEntity } }
	id: string;
	parentId: string;
	path: string;
	label: string;
	menuItemEntity: MenuItemEntity
	childItems?: {
		nodes: {
			id: string;
			parentId: string
			path: string;
			label: string;
			length: number
			menuItemEntity: MenuItemEntity
			childItems?: {
				nodes: {
					id: string;
					parentId: string
					path: string;
					label: string;
					length: number
					menuItemEntity: MenuItemEntity
				}[];
			}
		}[];
	}
}

export interface Navigation {
	id: string;
	name: string;
	menuItems: {
		nodes: MenuItem[];
	}
}

export type HeaderProps = {
	menu: Navigation
};
export type FooterProps = {
  menus: Navigation[];
  siteSettings: SiteSettingsItem[];
};

export interface SiteSettingsItem {
  [key: string]: SiteSettingItemValue;
}

export interface SiteSettingItemValue {
  description: string;
  fieldGroupName: string;
  title: string;
  image?: {
    node: {
      mediaItemUrl: string;
    };
  };
  link?: {
    label: string;
    target: string;
  };
  lists?: FAQItem[];
}

interface FAQItem {
  answer: string | null;
  fieldGroupName: string;
  question: string;
}

export type LayoutProps = {
	header: HeaderProps
	footer: FooterProps
};

export interface PageInfo {
	endCursor: string;
	hasNextPage: boolean;
}

export interface FeaturedImage {
	node: {
		sourceUrl: string;
	};
}

export interface Post {
	seo: {
		title: string;
		metaDesc: string;
		opengraphImage: {
			sourceUrl: object
		}
	}
	nodes: [];
	categories: {
		edges: {
			node: {
				name: string;
				slug: string;
			};
		}[];
	};
	author: {
		node: {
			name: string;
		};
	};
	tags: {
		edges: {
			node: {
				name: string;
				slug: string;
			};
		}[];
	};
	content: string | TrustedHTML;
	slug: string;
	title: string;
	excerpt: string;
	date: string;
	featuredImage: {
		node: {
			sourceUrl: string;
			altText: string;
			mediaItemUrl: string;
		};
	};
}

export interface PostList {
	nodes: Post[];
	pageInfo: PageInfo
}

export interface BlogPost {
	post: {
		excerpt: string;
		uri: string;
		date: string;
		title: string;
		content: string;
		categories: {
			edges: {
				node: {
					name: string;
					slug: string;
				};
			}[];
		};
		tags: {
			edges: {
				node: {
					name: string;
					slug: string;
				};
			}[];
		};
		author: {
			node: {
				slug: string;
				name: string;
			};
		};
		featuredImage: {
			node: {
				altText: string;
				sourceUrl: string;
			};
		};
	}
}

interface VariationsProps {
	databaseId?: number;
	attributes?: { nodes: { label: string; name: string; value: string }[] };
	name?: string;
	price?: string;
	salePrice?: string | null;
	regularPrice?: string;
	slug?: string;
	stockQuantity?: number | null;
	stockStatus?: string;
	id?: string;
	parent?: { node: { id: string; databaseId: number } };
}

export interface ProductDetail {
	databaseId: number;
	attributes: {
		nodes: { label: string; name: string; options: string[] }[];
	};
	defaultAttributes?: {
		nodes: { label: string; name: string; value: string }[];
	};
	image: { mediaItemUrl: string }
	extraAttributes?: { extraAttributes: { nameOnCake: boolean, photoCake: boolean } }
	price?: string;
	salePrice?: string | null;
	regularPrice?: string;
	stockStatus?: string;
	averageRating: number;
	name: string;
	variations: { nodes: VariationsProps[] };
	id: string;
	type: string;
	reviewCount: number;
	related: {
		nodes: {
			averageRating: number;
			id: string;
			image: { altText: string; sourceUrl: string };
			reviewCount: number;
			slug: string;
			name: string;
		}[];
	};
}
export interface CTAProps {
	media?: {
		image: {
			node: {
				mediaItemUrl: string
			}
		}
		video: string
	}
	name?: string;
	slug?: string;
	title?: string;
	sectionId?: string;
	description?: string;
	link1?: {
		target: string;
		label: string
	};
	link2?: {
		target: string;
		label: string
	};
	subtitle?: string;
	backgroundColor?: string;
	i?: number;
	imagePosition?: 'left' | 'right';
	layout?: 'style1' | 'style2' | 'style3' | 'style4';
}