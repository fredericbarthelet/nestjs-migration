import { Path } from './entities/path.class';
import { HttpService } from '@nestjs/common';

export class TrelloApiClientProvider {
  constructor(
    private readonly httpService: HttpService
  ) {}

  async get(path: Path) {
    const url = path.getUrl();
    return this.httpService
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