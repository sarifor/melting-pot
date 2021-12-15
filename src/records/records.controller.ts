import { Controller, Get } from '@nestjs/common';
import { RecordsService } from './records.service';

@Controller('records')
export class RecordsController {
    constructor(private readonly recordsService: RecordsService) {};

    @Get()
    showAllRecords(): string[] {
        return this.recordsService.showAllRecords();
    };

    @Get('add')
    addRecords(): void {
        this.recordsService.addRecords("test3");

    };

};