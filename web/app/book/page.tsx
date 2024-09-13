"use client";
import { useRouter } from "next/navigation";

import { AiOutlineArrowLeft } from "react-icons/ai";
import { getStaticUrl } from "../cfg/constants";
import { Book } from "../interface/book";
import { BookCard } from "./BookCard";
import { mockBooks } from "./mockBooks";
import { useAppContext } from "../context/AppContext";

interface BooksPageProps {
  books: Book[];
}

const BooksPage: React.FC<BooksPageProps> = () => {
  const books = mockBooks;
  const { addNotification } = useAppContext();
  const router = useRouter();
  const handle = () => {
    addNotification("Wait a moment ...");

    router.push("/");
  };

  return (
    <div className="relative mx-auto p-4 min-h-screen min-h-screen bg-gradient-to-br from-darker-blue via-darker-purple to-darker-gray bg-[length:200%_200%] animate-gradient-move">
      <button onClick={handle}>
        <div className="absolute top-5 left-5 z-20 text-xl hover:text-gray-600">
          <AiOutlineArrowLeft className="h-8 w-8" />
        </div>
      </button>
      <h1 className="text-2xl font-bold mb-6 text-center">My Favorite Books</h1>{" "}
      <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-9 gap-4">
        {books.map((book) => (
          <BookCard
            key={book.name}
            href={getStaticUrl(`test/self/book/${book.imageUrl}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default BooksPage;
