export async function Connector(beginning, ending) {
 
  let connector = await miro.board.createConnector({
    shape: "curved",
    style: {
      startStrokeCap: "none",
      endStrokeCap: "filled_triangle",
      strokeStyle: "dashed",
      strokeColor: "#ff00ff", 
      strokeWidth: 2,
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
      snapTo: "top",
    }/* ,
    captions: [
      {
        content: "Hello",
        position: 0.5,
        textAlignVertical: "bottom",
      },
    ], */
  });

  return connector;
}
