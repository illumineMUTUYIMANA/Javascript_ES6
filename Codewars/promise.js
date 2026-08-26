let arr ={
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
  let response = await fetch(apiUrl);
  let data = await response.json();
  if (!Array.isArray(data.jokes)|| !data){
    throw new Error(`No jokes at url: ${apiUrl}`);
  }
  let joke = data.jokes.find((joke)=>joke.id === jokeId);
  if (!joke){
    throw new Error(`No jokes found id: ${jokeId}`)
  }

  return{
        saySetup () { 
          return joke.setup; 
        },
        sayPunchLine() { 
          return joke.punchLine; 
        }
  }
    
}

console.log(sayJoke('https://jsonplaceholder.typicode.com/posts',100))


