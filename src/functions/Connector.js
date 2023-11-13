export async function Connector(beginning, ending, transaction) {
  let connectColor = "#ff00ff"
  let dashed = "dashed"
  switch (transaction) {
    case "1":
      connectColor = "black";
      break;
    case "2":
      connectColor = "#32a852";
      break;
    case "3":
      connectColor = "#3256a8";
      break;
    case "4":
      connectColor = "#96232c";
      break;
    case "5":
      connectColor = "#d1af17";
      break;
    case "6":
      connectColor = "#7717d1";
      break;
    case "6a":
      dashed = "normal"
      connectColor = "#7717d1";
      break;
    default:
      connectColor = "#ff00ff";
  }

  let connector = await miro.board.createConnector({
    shape: "curved",
    style: {
      startStrokeCap: "none",
      endStrokeCap: "filled_triangle",
      strokeStyle: dashed,
      strokeColor: connectColor, 
      strokeWidth: 5,
    },
    // Set the start point of the connector.
    start: {
      // Define the start board item for the connector by specifying the 'start' item ID.
      item: beginning.toString(),
      // Set a point on the border of the 'start' shape to mark the start point of the connector.
      position: {
        // x: 0.0 = left; x: 0.5 = center; x: 1.0 = right
        x: 0.5,
        // y: 0.0 = top; y: 0.5 = center; y: 1.0 = bottom
        y: 1.0,
      },
    },
    // Set the end point of the connector.
    end: {
      // Define the end board item for the connector by specifying the 'end' item ID.
      item: ending.toString(),
      // Set a snapTo of 'end' shape to mark the end point of the connector.
      snapTo: "bottom",
    },
    captions: [
      {
        content: `${transaction}`,
        position: 0.5,
        textAlignVertical: "bottom",
      },
    ],
  });

  return connector;
}
