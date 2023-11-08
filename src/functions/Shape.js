import { yAxis, xAxis } from "./Position";

export async function Shape(sapId, title, iterator, noOfItems) {

  let entityShape = await miro.board.createShape({
    "content": `<strong>${title}</strong>`,
    "shape": "round_rectangle",
    "style": {
      "fillColor": "#228B22",
      "fillOpacity": 1.0,
      "fontFamily": "open_sans",
      "fontSize": 30,
      "borderColor": "#1a1a1a",
      "borderWidth": 2.0,
      "borderOpacity": 1.0,
      "borderStyle": "normal",
      "textAlign": "center",
      "textAlignVertical": "middle",
      "color": "#ffffff",
    },
    "width": 300,
    "height": 150,
    "x": xAxis(iterator, noOfItems),
    "y": yAxis(iterator, noOfItems),
  });

  await entityShape.setMetadata('transaction', {
        entity: title,
        sap: sapId,
        entityShapeId: await miro.board.getById(entityShape.id)
    })

  return [entityShape.id, sapId];
}
