export async function Connector(beginning, ending) {
  let connector = await miro.board.createConnector({
    shape: "elbowed",
    style: {
      startStrokeCap: "none",
      endStrokeCap: "rounded_stealth",
      strokeStyle: "dashed",
      strokeColor: "#ff00ff", 
      strokeWidth: 1,
    },
    start: {
      item: beginning.toString(),
      position: {
        // x: 0.0 = left; x: 0.5 = center; x: 1.0 = right
        x: 0.5,
        // y: 0.0 = top; y: 0.5 = center; y: 1.0 = bottom
        y: 1.0,
      },
    },
    end: {
      item: ending.toString(),
      snapTo: "top",
    }
  });
}
