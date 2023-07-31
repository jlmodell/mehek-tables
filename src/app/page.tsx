import SearchBar from "@/components/search";
import { Great_Vibes } from "next/font/google";

const gv = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="min-h-screen grid place-items-center p-2 sm:p-10">
      <div className="border-4 border-[rgb(192,192,192)] py-12 px-2 sm:py-12 sm:px-12 border-double text-center">
        <div className="grid place-items-center mb-12 mt-4">
          <h3 className="font-serif text-xs sm:text-2xl">
            Table Arrangements for
          </h3>
          <h1
            className={`text-2xl sm:text-4xl md:text-6xl font-bold ${gv.className}`}
          >
            Mehek Ansari's
          </h1>
          <h3 className="font-serif -mt-2 sm:-mt-3 md:-mt-4 text-xs sm:text-2xl">
            Sweet Sixteen
          </h3>
        </div>
        <SearchBar />
      </div>
    </main>
  );
}
