export async function Shape(title, sapId) {
  let entityShape = await miro.board.createShape({
    "content": `<strong>${title}</strong>`,
    "shape": "round_rectangle",
    "style": {
      "fillColor": "#228B22",
      "fillOpacity": 1.0,
      "fontFamily": "open_sans",
      "fontSize": 8,
      "borderColor": "#1a1a1a",
      "borderWidth": 2.0,
      "borderOpacity": 1.0,
      "borderStyle": "normal",
      "textAlign": "center",
      "textAlignVertical": "middle",
      "color": "#ffffff",
    },
    "width": 100,
    "height": 50,
    "x": 0,
    "y": 0,
  });

  return [entityShape.id, sapId];
}
