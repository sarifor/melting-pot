import { Controller, Get, Param, Redirect } from '@nestjs/common';
import { RecordsService } from './records.service';

@Controller('records')
export class RecordsController {
    constructor(private readonly recordsService: RecordsService) {};

    @Get()
    showAllRecords(): string[] {
        return this.recordsService.showAllRecords();
    };

    @Get('add/:record')
    @Redirect("/records")
    addRecords(@Param("record") record: string): void {
        this.recordsService.addRecords(record);

    };

};