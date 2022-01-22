
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
	name: "Palkesh",
	links: [
		{
			title: "About",
			link: "#about",
		},
		{
			title: "Projects",
			link: "#projects",
		},
		{
			title: "Contact",
			link: "#contact",
		},
		{
			title: "Links",
			link: "/links",
		},
	],
}
export const intro = {
	title: "Hey, I'm Palkesh",
	description: "A Software Engineer who create ERP, CRM, Sale, Inventory, Accounting, eCommerce, Point of Sale, HR, Websites, Project Management Business apps with Odoo.",
	image: profile.src,
	buttons: [
		{
			title: "Contact Me",
			link: "#contact",
			isPrimary: true,
		},
		{
			title: "Resume",
			link: "https://drive.google.com/file/d/12scAXH9OBAHBbIN8HEsQKprFToZdGlWt/view?usp=sharing",
			isPrimary: false,
		},
	],
}

export const about = {
	title: "Who I am",
	description: [
		"I graduated from Gujarat Technological University (GTU) in 2016 with a degree in Information Technology Engineering. I kick started my professional career as a Python developer.",
		"The tech industry is ever-evolving and I love being able to grow with it, while continually solidifying the fundamentals. I opensource my code from a place of empathy - for future developers, teammates, users, and with accessibility in mind. I also love joining communities, helping and mentoring new developers, and supporting organizations to promote diversity in tech. I’m sharing my programming journey on LinkedIn, helping people who are just getting into the space of programming.",
		"When I’m not programming, I focus on my hobbies which are: diary writing, doodling, meeting people and growing my network.",
	],
}

export const work = {
	title: "What I do",
	cards: [
		{
			title: "ERP Engineer",
			description: "I create ERP, CRM, Sale, Inventory, Accounting, eCommerce, Point of Sale, HR, Project Management Business apps with Odoo.",
			icons: null,
		},
		{
			title: "Web Development",
			description: "I create responsive and static websites.",
			icons: null,
		}
	],
}

export const projects = {
	title: "Projects",
	cards: [
		// {
		// 	title: "StarBook",
		// 	description: "A digital diary and mood tracking app that helps you in keeping track of your mood and productivity throughout the month/year.",
		// 	icons: [
		// 		{
		// 			icon: faAppStore,
		// 			link: "https://apps.apple.com/us/app/starbook-journal-ai-diary/id1552418289",
		// 		},
		// 		{
		// 			icon: faGithub,
		// 			link: "https://github.com/hashirshoaeb/star_book",
		// 		},
		// 	]
		// },
		// {
		// 	title: "QuranTalk",
		// 	description: "An emotional well being and mental health app. The app helps people to navigate their emotions in the light of the Quran.",
		// 	icons: [
		// 		{
		// 			icon: faAppStore,
		// 			link: "https://apps.apple.com/us/app/qurantalk/id1563425149",
		// 		},
		// 		{
		// 			icon: faGooglePlay,
		// 			link: "https://play.google.com/store/apps/details?id=com.ayahemotion.quran_talk",
		// 		},
		// 	]
		// },
		{
			title: "Portfolio",
			description: "A portfolio website template that helps you showcase your work, projects and skills as a software developer or freelancer.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/palkesh-baraiya/portfolio",
				},
			]
		},
	],
}

export const contact = {
	title: "Get in touch",
	description: "Coffee Chat! Please do not hesitate to schedule a meeting. Alternatively, feel free to reach out directly by email at palkeshbaraiya816@gmail.com.",
	buttons: [
		{
			title: "Email Me",
			link: "mailto:palkeshbaraiya816@gmail.com",
			isPrimary: true,
		},
		{
			title: "Schedule Meeting",
			link: "",
			isPrimary: false,
		},
	]
}

// SEARCH ENGINE 
export const SEO = {
	// 50 - 60 char  
	title: "Palkesh Baraiya | Software Engineer | Techno-Functional | Odoo | Python | ERP Engineer",
	description: "I create Business apps and websites. I graduated from Gujarat Technological University (GTU) in 2016 with a degree in Information Technology Engineering.",
	image: profile.src,
}

export const links = {
	image: profile.src,
	title: "@palkesh-baraiya",
	description: "Software Engineer | Techno-Functional | Odoo | Python | ERP Engineer",
	cards: [
		{
			title: "My website",
			link: "https://palkesh-baraiya.github.io/home",
		},
		{
			title: "Blog",
			link: "https://odooask.blogspot.com/",
		},
		{
			title: "Website",
			link: "https://odoo11.wordpress.com/about/",
		},
		{
			title: "Stack Overflow – Story",
			link: "https://stackoverflow.com/story/palkesh_baraiya",
		},
		{
			title: "My GitHub",
			link: "https://github.com/palkesh-baraiya/",
		},
		{
			title: "My LinkedIn",
			link: "https://www.linkedin.com/in/palkesh-baraiya/",
		},
	]
}