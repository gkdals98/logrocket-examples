import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet
} from "@remix-run/react";
import styles from "~/styles/app.css";
import { useLoaderData } from "@remix-run/react";
import { getUser } from "~/utils/session.server";
import { json } from '@remix-run/node';

export function links() {
  return [{rel: "stylesheet", href: styles}]
}

export const meta = () => ({
  charset: "utf-8",
  title: "Quote Wall App",
  viewport: "width=device-width,initial-scale=1",
})

export const loader = async ({request} : {request: Request}) => {
  const user = await getUser(request);
  return json ({ 
    user
  })
}

export default function App() {
  const { user } = useLoaderData();
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-purple-100 relative px-5">
        <div className="mt-20 w-full max-w-screen-lg mx-auto">
          <nav className="bg-gradient-to-br from-purple-400 via-purple-500 to-purple-500 w-full fixed top-0 left-0 px-5">
            <div className="w-full max-w-screen-lg mx-auto flex justify-between content-center py-3 ">
              <Link className="text-white text-3xl font-bold" to={"/"}>Quote Wall</Link>
              <div className="flex flex-col md:flex-row items-center justify-between gap-x-4 text-blue-50">
                {
                  user ? (
                    <>
                    <Link to={"new-quote"}>Add A Quote</Link>

                    <form action="/logout" method="post">
                      <button type="submit" className="button">
                        Logout
                      </button>
                    </form>
                    </>
                  ) :  (
                    <>
                      <Link to={"login"}>Login</Link>
                      <Link to={"login"}>Register</Link>
                    </>
                  )
                }
              </div>
            </div>
          </nav>
          <Outlet />
        </div>
        <LiveReload />
      </body>
    </html>
  );
}
