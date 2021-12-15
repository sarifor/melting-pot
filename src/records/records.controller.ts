import { Controller, Get, Param, Redirect, Query } from '@nestjs/common';
import { RecordsService } from './records.service';

@Controller('records')
export class RecordsController {
    constructor(private readonly recordsService: RecordsService) {};

    @Get()
    showAllRecords(): string[] {
        return this.recordsService.showAllRecords();
    };

    @Get('add')
    @Redirect("/records")
    addRecords(@Query('record') record: string, @Query('record2') record2: number): void {
        this.recordsService.addRecords(record, record2);

    };

};