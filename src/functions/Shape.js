export async function Shape(title, sapId, shapecolor) {
  let entityShape = await miro.board.createShape({
    "content": `<strong>${title}</strong>`,
    "shape": "rectangle",
    "style": {
      "fillColor": `${shapecolor}`,
      "fillOpacity": 1.0,
      "fontFamily": "open_sans",
      "fontSize": 6,
      "borderColor": "#1E2F97",
      "borderWidth": 1.0,
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
