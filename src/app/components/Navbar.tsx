const pages = {
    home: '/',
    downloads: '/downloads',
    discord: 'https://discord.gg/HzZ8WrmUea',
    about: '/about',
}

export default function Navbar() {
    return (<ul className="navbar">
        {Object.entries(pages).map(([name, href]) => (
            <li key={name} className="navbaritem">
                <a href={href}>{name}</a>
            </li>
        ))}
    </ul>)
}