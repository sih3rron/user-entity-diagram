export async function CreateCard(sapId, title) {

  const card = await miro.board.createCard({
    title: `${title}`
  });

  await card.setMetadata("transaction", {
    entity: title,
    sap: sapId,
    id: await miro.board.getById(card.id),
  });

  return card;
}
