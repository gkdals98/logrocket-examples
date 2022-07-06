import { useLoaderData } from "@remix-run/react";
import { json } from '@remix-run/node';
import { db } from '~/utils/db.server';

interface Quote { 
  id: string;
  quote: string;
  by: string;
}
//remix의 Hook. loader function을 정의하면 return 값을 useLoaderData function으로부터 받아올 수 있다.
//출처 - https://remix.run/docs/en/v1/api/remix#useloaderdata
export const loader = async () => {
  return json ({ 
    quotes: await db.quote.findMany(),
  })
}

export default function Index() {
  const { quotes } = useLoaderData();
  return (
    <div>
      <div className="grid lg:grid-flow-row grid-cols-1 lg:grid-cols-3">
        {
          quotes.map((q : Quote, i : number) => {
            const {id, quote, by} = q;
            return (
              <figure key={id} className="m-4 py-10 px-4 shadow-md shadow-sky-100">
                <blockquote className="py-3">
                  <p className="text-gray-800  text-xl">
                    {quote}
                  </p>
                </blockquote>
                <figcaption>
                  <cite className="text-gray-600 text-md mb-4 text-right">
                    - {by}
                  </cite>
                </figcaption>
              </figure>
            )
          })
        }
      </div>
    </div>
  );
}
