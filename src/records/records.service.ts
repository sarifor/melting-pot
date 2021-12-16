import { Injectable, Redirect } from '@nestjs/common';
import { Record } from './entities/record.entity';
import { AddRecordDto } from './dto/add-record.dto';

const records: Record[] = [];

interface Plans {
    showAllRecords(): Record[];
    addRecords(record: AddRecordDto): void;
    updateRecords(): void;
    /* deleteRecords(): void;
    searchForRecords(): string[];
    showRelatedNews(): string[];
    showMixedRecords(): string[]; */
};

@Injectable()
export class RecordsService implements Plans {
    showAllRecords(): Record[] {
        return records;
    };

    addRecords(record: AddRecordDto): void {
        records.push({
            id: records.length + 1,
            createdDate: new Date(),
            ...record
        });
    };

    updateRecords(): void {
        
    };

    /* deleteRecords(): void {
        
    };

    searchForRecords(): string[] {
        return testArray;
    };

    showRelatedNews(): string[] {
        return testArray;
    };

    showMixedRecords(): string[] {
        return testArray;
    }; */

};