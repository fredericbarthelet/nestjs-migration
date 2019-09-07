import Path = require('./entities/path.class');
const httpService = require('@nestjs/common/httpService');

export class TrelloApiClientProvider {
  async get(path: Path) {
    const url = path.getUrl();
    return httpService
      .get('https://api.trello.com/1'.concat(url), {
        params: {
          ...path.getQueryParams(),
        },
      })
      .toPromise()
      .then(res => {
        return res.data;
      });
  }
}