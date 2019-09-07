import { Path } from './entities/path.class';
import { HttpService, Inject, Injectable, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';

@Injectable({
  scope: Scope.REQUEST,
})
export class TrelloApiClientProvider {
  private readonly token: string;

  constructor(
    private readonly httpService: HttpService
    @Token() @Inject(REQUEST) private readonly token: string
  ) {
    this.token = token;
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