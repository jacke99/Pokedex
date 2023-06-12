import { cssBundleHref } from "@remix-run/css-bundle";

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import Header from "./components/Header";
import headerStyles from "~/styles/header.css";
import pokeColors from "~/styles/pokeColors.css";
import font from "~/styles/font.css";
import NavBottom from "./components/NavBottom";
import bottomNav from "~/styles/bottomNav.css";

export const links = () => [
  ...(cssBundleHref
    ? [{ rel: "stylesheet", href: cssBundleHref }]
    : [
        { rel: "stylesheet", href: headerStyles },
        { rel: "stylesheet", href: pokeColors },
        { rel: "stylesheet", href: font },
        { rel: "stylesheet", href: bottomNav },
      ]),
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        <Outlet />
        <NavBottom />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
