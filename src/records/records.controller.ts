import { Controller, Get, Param, Redirect, Post, Body } from '@nestjs/common';
import { RecordsService } from './records.service';
import { Record } from './entities/record.entity';
import { AddRecordDto } from './dto/add-record.dto';
import { UpdateRecordDto } from './dto/update-record.dto';

@Controller('records')
export class RecordsController {
    constructor(private readonly recordsService: RecordsService) {};

    @Get()
    showAllRecords(): Record[] {
        return this.recordsService.showAllRecords();
    };

    @Post('add')
    @Redirect("/records")
    addRecord(@Body() record: AddRecordDto): void {
        this.recordsService.addRecord(record);
    };

    @Post('update/:id')
    @Redirect("/records")
    UpdateRecord(@Param('id') id: number, @Body() updatedRecord: UpdateRecordDto): void {
        this.recordsService.updateRecord(id, updatedRecord);
    };

    @Get('delete/:id')
    @Redirect('/records')
    DeleteRecord(@Param('id') id: number): void {
        this.recordsService.deleteRecord(id);
    };
};