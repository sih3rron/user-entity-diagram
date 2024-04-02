export async function Connector(
  beginning,
  ending,
  id1,
  id2,
  data,
  connectorcolor,
  captions,
  connectStyle,
) {
  let attribute = "";
  data.filter((d) => {
    if (d[2] !== "") {
      if (
        d[1] == id1 &&
        d[2] == id2
      ) {
        attribute = d[3];
      }
    }
  });

  let connector = await miro.board.createConnector({
    shape: `${connectStyle}`,
    style: {
      startStrokeCap: "none",
      endStrokeCap: "arrow",
      strokeStyle: "normal",
      strokeColor: `${connectorcolor}`,
      strokeWidth: 2,
      fontSize: 6,
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
      captions
        ? {
          content: `${attribute}`,
          position: 0.97,
          textAlignVertical: "middle",
        }
        : {},
    ],
  });
}
