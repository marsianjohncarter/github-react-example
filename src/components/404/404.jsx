import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      {/* component */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        href="https://fonts.googleapis.com/css?family=Nunito+Sans:300i,400,700&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <link
        href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
        rel="stylesheet"
      />
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            "\n      .text-9xl{\n      font-size: 14rem;\n      }\n      @media(max-width: 645px){\n      .text-9xl{\n      font-size: 5.75rem;\n      }\n      .text-6xl{\n      font-size: 1.75rem;\n      }\n      .text-2xl {\n      font-size: 1rem;\n      line-height: 1.2rem;\n      }\n      .py-8 {\n      padding-top: 1rem;\n      padding-bottom: 1rem;\n      }\n      .px-6 {\n      padding-left: 1.2rem;\n      padding-right: 1.2rem;\n      }\n      .mr-6{\n      margin-right: 0.5rem;\n      }\n      .px-12 {\n      padding-left: 1rem;\n      padding-right: 1rem;\n      }\n      }\n    ",
        }}
      />
      <div className="bg-gradient-to-r from-purple-300 to-blue-200">
        <div className="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg pb-8">
            <div className="border-t border-gray-200 text-center pt-8">
              <h1 className="text-9xl font-bold text-purple-400">404</h1>
              <h1 className="text-6xl font-medium py-8">
                <u>Page not found</u>
              </h1>
              <p className="text-2xl pb-8 px-12 font-medium">
                Oops! The page you are looking for does not exist. It might have
                been moved or deleted.
              </p>
              <Link to="/" className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md mr-6">
                HOME
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
