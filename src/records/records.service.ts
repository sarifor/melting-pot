import { Injectable, Redirect } from '@nestjs/common';
import { Record } from './entities/record.entity';
import { AddRecordDto } from './dto/add-record.dto';
import { UpdateRecordDto } from './dto/update-record.dto';

const records: Record[] = [];

interface Plans {
    showAllRecords(): Record[];
    addRecords(record: AddRecordDto): void;
    updateRecords(id: number, updatedRecord: UpdateRecordDto): void;
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

    updateRecords(id: number, updatedRecord: UpdateRecordDto): void {
        // id로 record 특정하고, 수정하고, /records로 redirect
        const record: Record = records.find(item => item.id === id); // == vs === ?
        console.log(`Filtered record is ${record}`);
        console.log(updatedRecord);
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