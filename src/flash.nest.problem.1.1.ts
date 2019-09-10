export class CardsController {
  async getCardBadges(@Request() request: Request) {
      return cardsService.getCardBadges(request);
  }
}

export class CardsService {
  async getCardBadges(request: Request) {
    return trelloApiClientService.getCard(request);
  }
}

export class TrelloApiClientService {
  async getCard(request: Request) {
      return trelloApiClientProvider.get(request);
  }
}

export class TrelloApiClientProvider {
  async get(request: Request) {
    const token = request.header('Token');
    ...
  }
}