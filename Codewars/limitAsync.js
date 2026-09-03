
async function limitAsync(task,limit){
  if (limit<1) throw new Error('Invalid limit');
  let results = [];
  let nextIndex =0;

  async function worker(){
    while(nextIndex<task.length){
      let currentIndex = nextIndex;
      nextIndex++;
      results[currentIndex] = await task[currentIndex]();
    }
  }
  let workers =[]
  for (let i =0;i<limit;i++){
    workers.push(worker());
  }

  await Promise.all(workers);
  return results;
}

