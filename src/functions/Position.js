async function axis(mixIds, idx) {
console.log(idx)
  const myParentAxis = await miro.board.get({ "id": mixIds.parent });
  const myChildAxis = await miro.board.get({ "id": mixIds.child });

  myParentAxis[0].sync();
  myChildAxis[0].sync();
  myChildAxis[0].x = myChildAxis[0].width * idx;
  myChildAxis[0].sync();

}

export function bfsPosition(source, graph, values) {
  const queue = [source];

  while (queue.length > 0) {
    const current = queue.shift();

    for (const neighbour of graph[current]) {

      
        queue.push();

      const mixIds = {
        "parent": 0,
        "child": 0,
      };

      values.filter((val) => {
        if (val[1] === current) mixIds.parent = val[0];
        if (val[1] === neighbour) mixIds.child = val[0];
        axis(mixIds, graph[current].indexOf(neighbour));
      });



    }
  }
}
