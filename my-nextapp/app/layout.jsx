import { Roboto } from "next/font/google"
import './globals.css'

const roboto = Roboto({
    subsets: ['latin']
});

export default function RootLayout({children}) {
    return(
        <html>
            <body className={roboto.className}>
                {children}
            </body>
        </html>
    )
}