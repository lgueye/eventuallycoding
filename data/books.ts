interface Toc {
    title: string;
    link?: string;
    subsections?: Toc[];
}

const tocEn = [
    {
        title: "Table of contents",
        link: "https://eventuallycoding.com/en/2023/02/impactful-software-engineering",
    },
    {
        title: "Introduction",
        subsections: [
            {
                title: "Who am I",
            },
            {
                title: "What is this book about",
            },
            {
                title: "Who is this book for",
            },
            {
                title: "What isn't this book",
            },
        ],
    },
    {
        title: "Being in the room",
        subsections: [
            {
                title: "Senior after 6 years, what's next?",
                link: "https://medium.com/nerds-malt/senior-with-6-years-of-experience-whats-next-eb1721d37f82",
            },
            {
                title: "Senior archetypes",
            },
            {
                title: "It's not just a matter of technique",
                link: "https://eventuallycoding.com/en/2023/02/not-only-about-technique",
            },
            {
                title: "Measure everything",
                link: "https://eventuallycoding.com/en/2023/02/measuring-everything",
            },
            {
                title: "Prioritization",
            },
            {
                title: "Create free time",
            },
            {
                title: "Communication & Tech Marketing",
            },
        ],
    },
    {
        title: "Engineering Leadership",
        subsections: [
            {
                title: "Soft versus hard leadership",
            },
            {
                title: "Empowered teams",
            },
            {
                title: "Create a technical vision",
            },
            {
                title: "Alignement with context",
            },
            {
                title: "Building 10x teams",
            },
            {
                title: "Anti-patterns",
            },
        ],
    },
    {
        title: "Engineering Organization",
        subsections: [
            {
                title: "Should we measure performance of engineering teams?",
                link: "https://medium.com/nerds-malt/should-we-measure-the-performance-of-an-engineering-team-e461ccff1cd4",
            },
            {
                title: "Engineering culture and agility",
            },
            {
                title: "Continuous discovery",
            },
            {
                title: "The benefits of constraints",
            },
            {
                title: "Fighting complexity",
            },
            {
                title: "Estimation and planning in efficient teams",
            },
            {
                title: "Team engineering maturity model",
            },
        ],
    },
    {
        title: "Engineering and Discovery",
        subsections: [
            {
                title: "The trio PM/UX/Engineering",
            },
            {
                title: "The role of engineering team in discovery",
            },
            {
                title: "Being the 10th person",
            },
            {
                title: "Being an explorer",
            },
        ],
    },
    {
        title: "Engineering and Delivery",
        subsections: [
            {
                title: "The role of engineering team in delivery",
            },
            {
                title: "Tech Lead Vs/And Engineering Manager",
            },
            {
                title: "What does an engineering manager do?",
                link: "https://medium.com/nerds-malt/what-does-an-engineering-manager-bae1929850ba",
            },
            {
                title: "Claim your independence",
            },
            {
                title: "Buy or build?",
            },
        ],
    },
];

const tocFr = [
    {
        title: "Table des matières",
        link: "https://eventuallycoding.com/2023/02/impactful-software-engineering",
    },
    {
        title: "Introduction",
        subsections: [
            {
                title: "Qui suis-je",
            },
            {
                title: "Quel est le sujet de ce livre",
            },
            {
                title: "A qui s'adresse ce livre",
            },
            {
                title: "Qu'est-ce que ce livre n'est pas",
            },
        ],
    },
    {
        title: "Etre dans la pièce",
        subsections: [
            {
                title: "Senior avec 6 ans d'expérience, et après ?",
                link: "https://eventuallycoding.com/2021/06/24/senior-avec-6-ans-dexperience-et-apres",
            },
            {
                title: "Senior archetypes",
            },
            {
                title: "Ce n'est pas juste une question de technique",
                link: "https://eventuallycoding.com/2023/02/not-only-about-technique",
            },
            {
                title: "Tout mesurer",
                link: "https://eventuallycoding.com/2023/02/measuring-everything",
            },
            {
                title: "Priorisation",
            },
            {
                title: "Se créer du temps libre",
            },
            {
                title: "Communication & Tech Marketing",
            },
        ],
    },
    {
        title: "Engineering Leadership",
        subsections: [
            {
                title: "Soft versus hard leadership",
            },
            {
                title: "Empowered teams",
            },
            {
                title: "Créer une vision technique",
            },
            {
                title: "Leading with context",
            },
            {
                title: "Construire des équipes 10x",
            },
            {
                title: "Anti-patterns",
            },
        ],
    },
    {
        title: "Engineering Organization",
        subsections: [
            {
                title: "Faut-il mesurer la performance d’une équipe engineering ?",
                link: "https://eventuallycoding.com/2021/10/07/faut-il-mesurer-la-performance-dune-equipe-engineering",
            },
            {
                title: "Culture engineering et agilité",
            },
            {
                title: "Continuous discovery",
            },
            {
                title: "Travailler avec des contraintes",
                link: "https://eventuallycoding.com/2022/09/travailler-avec-contraintes",
            },
            {
                title: "Combattre la complexité",
            },
            {
                title: "Estimation et planification dans les équipes efficaces",
            },
            {
                title: "Modèle de maturité des équipes engineering",
            },
        ],
    },
    {
        title: "Engineering et Discovery",
        subsections: [
            {
                title: "Le trio PM/UX/Engineering",
            },
            {
                title: "Le rôle de l'engineering dans la discovery",
            },
            {
                title: "Devenir explorateur(rice)",
            },
        ],
    },
    {
        title: "Engineering et Delivery",
        subsections: [
            {
                title: "Le rôle de l'Engineering dans la delivery",
            },
            {
                title: "Tech Lead Vs/et Engineering Manager",
            },
            {
                title: "Que fait un engineering Manager?",
                link: "https://eventuallycoding.com/2022/01/31/que-fait-un-engineering-manager",
            },
            {
                title: "Réclamez votre indépendance",
            },
            {
                title: "Buy or build?",
            },
        ],
    },
];

const books: { [key: string]: { [key: string]: Toc[] } } = {
    impactfulSoftwareEngineering: {
        en: tocEn,
        fr: tocFr,
    },
};
export default books;
