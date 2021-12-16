import { Controller, Get, Param, Redirect, Query, Post, Body } from '@nestjs/common';
import { RecordsService } from './records.service';
import { Record } from './entities/record.entity';
import { AddRecordDto } from './dto/add-record.dto';

@Controller('records')
export class RecordsController {
    constructor(private readonly recordsService: RecordsService) {};

    @Get()
    showAllRecords(): Record[] {
        return this.recordsService.showAllRecords();
    };

    @Post('add')
    @Redirect("/records")
    addRecords(@Body() record: AddRecordDto): void {
        this.recordsService.addRecords(record);
    };
};