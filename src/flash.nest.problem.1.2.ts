export class CardsController {
  async getCardBadges(@Request() request: Request) {
      const cardId = request.param('cardId');
      return cardsService.getCardBadges(cardId);
  }
}

export class CardsService {
  async getCardBadges(cardId: number) {
    return trelloApiClientService.getCard(cardId);
  }
}

export class TrelloApiClientService {
  async getCard(cardId: number) {
      return trelloApiClientProvider.get(cardId);
  }
}

export class TrelloApiClientProvider {
  async get(cardId: number) {
    const token = request.header('Token');
    const url = '/card/' + cardId;
    ...
  }
}