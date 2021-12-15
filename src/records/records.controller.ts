import { Controller, Get, Param, Redirect, Query, Post, Body } from '@nestjs/common';
import { RecordsService } from './records.service';

@Controller('records')
export class RecordsController {
    constructor(private readonly recordsService: RecordsService) {};

    @Get()
    showAllRecords(): string[] {
        return this.recordsService.showAllRecords();
    };

    @Post('add')
    @Redirect("/records")
    addRecords(@Body() record: string[]): void {
        this.recordsService.addRecords(record);

    };

};