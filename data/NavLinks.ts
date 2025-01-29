type Nav = {
    href: string;
    to: string;
    smooth: boolean;
    spy: boolean;
    offset?: number;
};

interface Props {
    nav: Nav[];
}

export const NavLinks: Props = {
    nav: [
        {
            href: 'home',
            to: 'home',
            smooth: true,
            spy: true,
            offset: -200
        },
        {
            href: 'experience',
            to: 'experience',
            smooth: true,
            spy: true,
            offset: -20
        },
        {
            href: 'skills',
            to: 'skills',
            smooth: true,
            spy: true,
            offset: -20
        },
        {
            href: 'about',
            to: 'about',
            smooth: true,
            spy: true
        },
        {
            href: 'work',
            to: 'work',
            smooth: true,
            spy: true,
            offset: 5
        },
        {
            href: 'contact',
            to: 'contact',
            smooth: true,
            spy: true,
            offset: -10
        }
    ]
};
