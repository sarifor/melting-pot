import { Controller, Get } from '@nestjs/common';
import { RecordsService } from './records.service';

@Controller('records')
export class RecordsController {
    constructor(private readonly recordsService: RecordsService) {}

    @Get()
    getHello(): string {
        return this.recordsService.getHello();
    }
}