export async function fetchModels () {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/vehicles/GetMakesForVehicleType/car?format=json`);
  const data = await response.json();

  return data.Results;
}

export async function fetchCars (makeId, year) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`)
  const data = await response.json();

  return data.Results.map((car) => ({ madeBy: car.Make_Name, model: car.Model_Name, year }));
}