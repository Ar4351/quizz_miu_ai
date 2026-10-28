"use client";
import { quizzes } from "@/db/schema";
import { InferSelectModel } from "drizzle-orm";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export type Quizz = InferSelectModel<typeof quizzes>;

type Props = {
  quizzes: Quizz[];
};

const QuizzesTable = (props: Props) => {
  const [visibleQuizzes, setVisibleQuizzes] = useState(3);
  const tableRef = useRef<HTMLDivElement>(null);

  const handleReadMore = (e: React.MouseEvent) => {
    e.stopPropagation();
    setVisibleQuizzes((prev) => prev + 3);
    
    setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth"
      });
    }, 100);
  };

  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (tableRef.current && !tableRef.current.contains(event.target as Node)) {
        setVisibleQuizzes(3);
      }
    };

    
    document.addEventListener("mousedown", handleClickOutside);
    
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [tableRef]);

  return (
    <div 
      className="rounded-md overflow-hidden p-5 border" 
      ref={tableRef}
    >
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="text-[#6c7381] text-left">Name</th>
            <th className="text-[#6c7381] text-left">Description</th>
          </tr>
        </thead>
        <tbody>
          {props.quizzes.slice(0, visibleQuizzes).map((quizz: Quizz, index) => (
            <tr 
              key={quizz.id}
              className="transition-all duration-300 ease-in-out"
              style={{
                opacity: 1,
                animation: index >= visibleQuizzes - 3 ? "fadeIn 0.5s ease-in-out" : "none"
              }}
            >
              <td className="py-2">
                <Link href={`/quizz/${quizz.id}`}>
                  <p className="text-blue-400 underline">{quizz.name}</p>
                </Link>
              </td>
              <td className="py-2">{quizz.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {visibleQuizzes < props.quizzes.length && (
        <div className="mt-3 text-right">
          <button
            onClick={handleReadMore}
            className="px-3 py-1 text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            Show more
          </button>
        </div>
      )}
      
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeOut {
          from { opacity: 1; transform: translateY(0); }
          to { opacity: 0; transform: translateY(10px); }
        }
      `}</style>
    </div>
  );
};

export default QuizzesTable;