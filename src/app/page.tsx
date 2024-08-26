"use client"

import { Dropdown } from '@/app/components/Dropdown';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { fetchModels } from '@/lib/api';

const YEARS = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024];

interface Car {
  MakeId: string;
  MakeName: string;
}

export default function Main() {
  const [cars, setCars] = useState<Car[]>([]);
  const [type, setType] = useState<string>('');
  const [makeId, setMakeId] = useState<string>('');
  const [year, setYear] = useState<number>(0);

  useEffect(() => {
    async function fetchData() {
      const cars: Car[] = await fetchModels();
      setCars(cars);
    }

    fetchData();
  }, []);

  function handleUpdateType(newType: string) {
    setType(newType);

    const car = cars.find((car) => car.MakeName === newType);
    if (car) {
      setMakeId(car.MakeId);
    }
  }

  function handleUpdateYear(newYear: number) {
    setYear(newYear);
  }

  const carsTypes = cars.map((car) => car.MakeName);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center space-y-4">
        <div className="flex justify-center space-x-4">
          <Dropdown items={carsTypes} currentValue={type} label="Type" onUpdateValue={handleUpdateType} />
          <Dropdown items={YEARS} currentValue={year} label="Year" onUpdateValue={handleUpdateYear} />
        </div>
        {type && year ? (
          <Link href={`/result/${makeId}/${year}`}>
            <div className="flex justify-center items-center bg-orange-600 text-white w-[300px] h-12 rounded-lg">
              Next
            </div>
          </Link>
        ) : (
          <div className="flex justify-center items-center bg-gray-600 text-white w-[300px] h-12 rounded-lg">
            Next
          </div>
        )}
      </div>
    </div>
  );
}