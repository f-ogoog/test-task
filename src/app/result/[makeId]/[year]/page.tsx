"use client"
import { useEffect, useState } from "react";
import { DataTable } from "@/app/components/DataTable/DataTable";
import { fetchCars } from "@/lib/api";
import { columns } from "@/app/components/DataTable/columns";

interface PageProps {
  params: {
    makeId: string;
    year: number;
  };
}

export default function Page({ params }: PageProps) {
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const cars = await fetchCars(params.makeId, params.year);
        setCars(cars);
        setIsLoading(false);
      } catch (err) {
        setError(true);
        setIsLoading(false);
      }
    }

    fetchData();
  }, [params.makeId, params.year]);

  return error ? (
    <div className="flex justify-center items-center min-h-screen">
      <div
        className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 max-w-lg rounded-lg shadow-md"
        role="alert"
      >
        <div className="flex items-center">
          <svg
            className="w-6 h-6 text-red-500 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M18.364 5.636L5.636 18.364M5.636 5.636l12.728 12.728"
            />
          </svg>
          <strong className="font-bold">Error:</strong>
          <span className="ml-2">Something went wrong while fetching data.</span>
        </div>
      </div>
    </div>
  ) : (
    <DataTable data={cars} columns={columns} isLoading={isLoading} />
  );
}
