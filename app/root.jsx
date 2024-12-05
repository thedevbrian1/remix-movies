import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import "./tailwind.css";

export const links = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }) {
  let navLinks = [
    {
      path: "/",
      text: "Home",
    },
    {
      path: "/movies",
      text: "Movies",
    },
    {
      path: "/series",
      text: "Series",
    },
  ];

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <header className="flex justify-between items-center p-4 lg:p-8">
          <img src="/logo.svg" alt="" className="h-20 w-20" />
          {/* TODO: Make nav responsive */}
          <nav>
            <ul className="flex gap-4 items-center">
              {navLinks.map((item, index) => (
                <li
                  key={index}
                  className="hover:text-orange-300 transition ease-in-out duration-300"
                >
                  <Link to={item.path}>{item.text}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
