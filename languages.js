const showInfo = (str) => {
    const languages = str.trim().split('\n').slice(1).map((line) => line.split(','));
  
    const continents = [...new Set(languages.map((row) => row[2]))].join(', ');
  
    const monoLanguages = languages.filter((row) => Number(row[4]) === 1).length;
  
    const mostPopularLanguage = languages.map(
      (language) => (
        { lang: language[0], speakers: Number(language[1]) }
      ),
    ).reduce(
      (max, language) => language.speakers 
      > max.speakers ? language : max,
    ).lang;
  
    const complexityCounts = languages.reduce((acc, language) => {
      const complexity = language[3];
      acc[complexity] = (acc[complexity] || 0) + 1;
      return acc;
    }, {});
    const complexityOutput = Object.entries(complexityCounts)
      .map(([key, value]) => `${key}: ${value}`).join(', ');
    
    console.log(`Count: ${languages.length}`); //количество записей с данными в переданном файле
    console.log(`Continents: ${continents}`); //список континентов, в которых используются языки из переданного файла
    console.log(`Amount of languages with 1 country: ${monoLanguages}`); //количество языков из переданного файла, которые используются только в одной стране
    console.log(`The most popular language: ${mostPopularLanguage}`); //самый популярный язык из предложенных, на основе информации о количестве носителей
    console.log(`Complexity: ${complexityOutput}`); //все уровни сложности изучения языка и количество его нахождений в файле
};

export default showInfo;



// результат 
//
// Count: 17
// Continents: Европа, Америка, Африка, Азия
// Amount of languages with 1 country: 4
// The most popular language: Английский
// Complexity: Средняя: 8, Низкая: 3, Высокая: 6