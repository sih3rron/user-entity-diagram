export async function Connector(beginning, ending, id1, id2, data) {
  let percentage = "";
  data.filter((d) => {
    if (d[2] !== '') {
      if(d[1] == id1 && d[2] == id2 && d[3] !== "100.00"){ 
        percentage = d[3];
      }
    }
  });

  let connector = await miro.board.createConnector({
    shape: "elbowed",
    style: {
      startStrokeCap: "none",
      endStrokeCap: "rounded_stealth",
      strokeStyle: "dashed",
      strokeColor: "#ff00ff",
      strokeWidth: 2,
      fontSize: 5,
      textOrientation: "horizontal",
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
    },
    captions: [
      {
        content: `${percentage}`,
        position: 0.5,
        textAlignVertical: "middle",
      },
    ],
  });
}
