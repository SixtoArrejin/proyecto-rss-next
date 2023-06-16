import { Navegacion } from "../components/Navegacion";

export const metadata = {
  title: "SSR",
  description: "La seleccion Argentina",
  keywords: "nextjs, react, javascript",
};

function RootLayout({ children }) {
  return (
    <html>
      <head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/flatly/bootstrap.min.css"
        />
      </head>
      <body>
        <Navegacion />
        <div className="container p-4">{children}</div>
      </body>
    </html>
  );
}

export default RootLayout;
