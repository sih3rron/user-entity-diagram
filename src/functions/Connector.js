export async function Connector(beginning, ending){

    let connector = await miro.board.createConnector({
        shape: 'curved',
        style: {
          startStrokeCap: 'rounded_stealth',
          endStrokeCap: 'arrow',
          strokeStyle: 'dashed',
          strokeColor: '#ff00ff', // Magenta
          strokeWidth: 5,
        },
        // Set the start point of the connector.
        start: {
          // Define the start board item for the connector by specifying the 'start' item ID.
          item: beginning.toString(),
          // Set a point on the border of the 'start' shape to mark the start point of the connector.
          position: {
            // Horizontal: right
            x: 1.0,
            // Vertical: middle
            y: 0.5,
          },
        },
        // Set the end point of the connector.
        end: {
          // Define the end board item for the connector by specifying the 'end' item ID.
          item: ending.toString(),
          // Set a snapTo of 'end' shape to mark the end point of the connector.
          snapTo: 'top',
        }
      });

      return connector;
}