import { Controller, Get } from '@nestjs/common';
import { Token } from '../common/token.decorator';
import { Service } from './module.service';

@Controller('path')
export class Controller {
    constructor(private readonly service: Service) {}

    @Get()
    async get(@Token() token: string) {
        return this.service.getInfoForToken(token);
    }
}