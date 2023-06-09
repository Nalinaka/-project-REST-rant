const React = require('react')
const currentYear = new Date().getFullYear()
const footerText = `Site Created By Nalini Krishan © IWBOS 2023-${currentYear}`

function Def (html) {
    return (
        <html>
        <head>
                <title>Title</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" />
                <link rel="stylesheet" href="/css/style.css"/>
            </head>
            <body>
            <nav>
        <ul>
            <li>
        <a href="/">Home</a>
            </li>
            <li>
        <a href="/places">Places</a>
            </li>
            <li>
        <a href="/places/new">Add Place</a>
            </li>
        </ul>
        </nav>
                {html.children}
            </body>
            <footer>{footerText}</footer>
        </html>
    )
}

module.exports = Def
    
