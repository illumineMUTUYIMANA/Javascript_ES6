function allocateRooms(customers) {
  let sorted = customers.sort((a, b) => a[0] - b[0]);
  
  let roomFreeTime = []; 
   let allocation = [];

  for (let i = 0; i < sorted.length; i++) {
    let arrival = sorted[i][0];
    let departure = sorted[i][1];
    let allocated = false;
    for (let j = 0; j < roomFreeTime.length; j++) {
      if (roomFreeTime[j] < arrival) { 
        roomFreeTime[j] = departure; 
        allocation.push(j + 1);
        allocated = true;
        break;
      }
    }

   
    if (!allocated) {
      roomFreeTime.push(departure);
      allocation.push(roomFreeTime.length);
    }
  }
  
  return allocation;
}

console.log(allocateRooms([[1,5],[6,8],[2,4],[7,7]]));
