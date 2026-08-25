{
  jokes: [{ 
    id: 101,
    setup: "Who is Santa's favorite singer?",
    punchLine: "Elf-is Presley!"
  },
//...moreJokes
]
}

async function sayJoke(apiUrl, jokeId){

  // use mocked `fetch(url)`
  try{
    let response = await fetch(apiUrl);
    if (!response.ok){
      throw new Error('not found');
    }
    let data = await response.json();
    if (!data || !Array.isArray(data.jokes)) {
      throw new Error(`No jokes at endpoint ${apiUrl}`);
    }
    for (let info of data.jokes){
      if (info.id === jokeId){
        return {
        saySetup () { 
          return info.setup; 
        },
        sayPunchLine() { 
          return info.punchLine; 
        }
      };
      }
    }
  }

  catch(error){
    throw new Error(`No jokes found id: ${jokeId}`)
  }
  
    
}

console.log(sayJoke)


