import { Injectable, NestMiddleware, Scope } from '@nestjs/common';
import { Request, Response } from 'express';
import { SettingsService } from 'src/settings/settings.service';

@Injectable()
export class TrelloContextMiddleware implements NestMiddleware {
  constructor (private readonly settingsService: SettingsService) {}

  async use(req: Request, res: Response, next: Function) {
    const boardId = req.header('X-Application-Board-Id');
    const settings = await this.settingsService.getBoardSettings(
        boardId
    );
    next();
  }
}