import { CarProps, FilterProps } from "@/types"

const fetchCars = async function(filters:FilterProps){
    const { manufacturer, year, model, limit, fuel } = filters;

    const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,{
        headers:{
            'X-RapidAPI-Key': 'd0b4be5dc9mshf40951c03e0ecfep1d36b5jsnc315bc54f5dd',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
        }
    })
    const result  = await response.json()
    return result
}

export default fetchCars


export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };

export const generateCarImageUrl = (car:CarProps,angle?:string)=>{
    
}