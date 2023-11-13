import { xAxis, yAxis } from "./Position";

export async function Shape(sapId, title, iterator, noOfItems, tcount) {
  let entityShape = await miro.board.createShape({
    "content": `<strong>${title}</strong>`,
    "shape": "round_rectangle",
    "style": {
      "fillColor": "#228B22",
      "fillOpacity": 1.0,
      "fontFamily": "open_sans",
      "fontSize": 10,
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
    "x": xAxis(iterator, noOfItems, tcount),
    "y": yAxis(iterator, noOfItems, tcount),
    //"x": 0,
   //"y": 0,
  });

  await entityShape.setMetadata("transaction", {
    entity: title,
    sap: sapId,
    entityShapeId: await miro.board.getById(entityShape.id),
  });

  return [entityShape.id, sapId];
}
