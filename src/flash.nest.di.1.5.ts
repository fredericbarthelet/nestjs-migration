import { Path } from './entities/path.class';
import { HttpService, Inject } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';

export class TrelloApiClientProvider {
  private readonly token: string;

  constructor(
    private readonly httpService: HttpService
    @Inject(REQUEST) private readonly request: Request
  ) {
    this.token = request.header('X-App-Token');
  }

  async get(path: Path) {
    const url = path.getUrl();
    return this.httpService
      .get('https://api.trello.com/1'.concat(url), {
        params: {
          ...path.getQueryParams(),
          token: this.token,
        },
      })
      .toPromise()
      .then(res => {
        return res.data;
      });
  }
}