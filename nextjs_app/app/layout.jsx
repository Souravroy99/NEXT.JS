import Navbar from "./Navbar"

export default function RootLayout({ children }) {
    return (
        <html>
            <body>
                <h1>Hello Layout</h1>
                <Navbar />
                
                {children}
            </body>
        </html>
    )
}