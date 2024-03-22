const showInfo = (str) => {
    const cars = str.trim().split('\n').slice(1).map((line) => line.split(';'));
  
    const brands = cars.map((row) => row[0]).sort().join(', ');
  
    const maxEuropSale = Math.max.apply(null, cars.map((row) => Number(row[5])));
  
    const carsPrice = cars.map((row) => Number(row[3]));
    const minPrice = Math.min.apply(null, carsPrice);
    const maxPrice = Math.max.apply(null, carsPrice);
  
    const carsSales = cars.reduce((acc, car) => {
      const averageSales = {};
      averageSales.brand = `${car[0]} ${car[1]}`;
      const sales = car.slice(4);
      averageSales.sale = sales.reduce((acc, sale) => acc + Number(sale), 0) /  sales.length;
      return [...acc, averageSales];
    }, []);
    const carsAverageSales = carsSales.map((carSale) => Object.entries(carSale)).sort((a, b) => {
      return a[1][1] - b[1][1];
    })
    const outsider = carsAverageSales[0][0][1]
    
    console.log(`Count: ${cars.length}`); //количество записей с данными в переданном файле
    console.log(`Brands: ${brands}`); //список автомобильных брендов
    console.log(`Cars price: Min price: ${minPrice}, Max price: ${maxPrice}`); //количество языков из переданного файла, которые используются только в одной стране
    console.log(`Max Europe sale: ${maxEuropSale}`); //самое большое количество продаж по Европе
    console.log(`Outsider: ${outsider}`); //все уровни сложности изучения языка и количество его нахождений в файле
};

export default showInfo;


// результат

// bin/cars.js __fixtures__/cars1.csv
// Count: 22
// Brands: Audi, BMW, Cadillac, Chevrolet, Ford, GMC, Honda, Hyundai, Infiniti, Jeep, Kia, Lexus, Mazda,
//   Mercedes-Benz, Mitsubishi, Nissan, Porsche, Ram, Subaru, Tesla, Toyota, Volvo
// Cars price: Min price: 17999, Max price: 91999
// Max Europe sale: 80000
// Outsider: Mitsubishi Outlander