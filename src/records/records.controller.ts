import { Controller, Get, Param, Redirect, Query, Post, Body } from '@nestjs/common';
import { RecordsService } from './records.service';
import { AllRecordsEntities } from './dto/AllRecordsEntities';
import { AddRecordDto } from './dto/AddRecordDto';

@Controller('records')
export class RecordsController {
    constructor(private readonly recordsService: RecordsService) {};

    @Get()
    showAllRecords(): AllRecordsEntities[] {
        return this.recordsService.showAllRecords();
    };

    @Post('add')
    @Redirect("/records")
    addRecords(@Body() record: AddRecordDto): void {
        this.recordsService.addRecords(record);

    };

};