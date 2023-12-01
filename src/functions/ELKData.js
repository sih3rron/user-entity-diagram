import ELK from 'elkjs/lib/elk.bundled.js'
const elk = new ELK({
  workerUrl: './node_modules/elkjs/lib/elk-worker.min.js',
});

export async function axis(shapeId, layout) {
  const myAxis = await miro.board.get({ "id": shapeId });
  myAxis[0].x = layout.x;
  myAxis[0].y = layout.y;
  myAxis[0].sync();
}

export async function elkResults(graph) {
  const fetchCoordinates = elk.layout(graph);
  const coordinates = (await fetchCoordinates).children;

  coordinates.forEach((c) => {
    values.filter((val) => {
      if (val[1] == c.id) axis(val[0], { x: c.x, y: c.y });
    });
  });
}