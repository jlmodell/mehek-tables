"use client";
import { useState, useEffect } from "react";
import { Person, findNameInTable } from "@/lib/tables";
import { Great_Vibes, Playfair_Display } from "next/font/google";
import clsx from "clsx";

const gv = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
});

const pf = Playfair_Display({
  weight: "400",
  subsets: ["latin"],
});

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<Person[]>([]);

  useEffect(() => {
    let timer = setTimeout(() => {
      let tablesFound: Person[] = [];
      if (search === "") {
        setResults([]);
        tablesFound = [];
        return;
      }
      tablesFound = findNameInTable(search.toLowerCase());
      setResults(
        tablesFound.sort((a, b) => {
          if (a.table === b.table) {
            return a.table - b.table;
          }
          return a.table - b.table;
        })
      );
    }, 500);
    return () => clearTimeout(timer);
  }, [search]);

  return (
    <div className="flex flex-col items-center justify-center max-w-lg w-full">
      <div className="flex space-x-1 mb-4">
        <input
          type="text"
          placeholder="Search for your name"
          className={clsx(
            "border-2 border-[rgb(192,192,192)] focus:border-[rgb(192,192,192)] focus:bg-[rgb(192,192,192)] text-slate-900 ring-0 outline-none p-2 w-full bg-[rgb(192,192,192)] bg-opacity-75 hover:bg-opacity-100 focus:bg-opacity-100 transition-all ease-in-out) text-sm sm:text-lg",
            search === "" ? "bg-opacity-100" : ""
          )}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className={clsx(
            "border-2 border-[rgb(192,192,192)] focus:border-[rgb(192,192,192)] ring-0 outline-none p-2 text-sm text-slate-900 w-20 bg-[rgb(192,192,192)] bg-opacity-75 hover:bg-opacity-100 focus:bg-opacity-100 transition-all ease-in-out",
            search === "" ? "hidden" : ""
          )}
          onClick={() => setSearch("")}
        >
          {" "}
          reset{" "}
        </button>
      </div>

      <div className="flex flex-col items-center justify-center text-[rgb(191,193,194)]">
        {results.map((table, index) => (
          <div
            className="flex flex-col items-center justify-center my-3"
            key={`table-${index}`}
          >
            <h1
              className={`text-2xl sm:text-4xl font-bold text-center underline mb-1 ${gv.className}`}
            >
              Table - {table.num}
            </h1>
            <ul className="grid place-items-center">
              <li className="flex flex-col items-center justify-center">
                <p
                  className={`text-sm sm:text-xl text-center font-serif font-extralight`}
                >
                  {table.person}
                </p>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
