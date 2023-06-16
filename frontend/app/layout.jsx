import { Navigation } from "../components/Navigation";

export const metadata = {
  title: "Nextjs First App",
  description: "My first Nextjs app",
  keywords: "nextjs, react, javascript",
};

function RootLayout({ children }) {
  return (
    <html>
      <head>
        {/* <link
          rel="stylesheet"
          
          href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/flatly/bootstrap.min.css"
        /> */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous"/>
        {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/journal/bootstrap.min.css" /> */}
      </head>
      <body>
        <Navigation />
        <div className="container p-4">{children}</div>
      </body>
    </html>
  );
}

export default RootLayout;
