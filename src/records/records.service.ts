import { Injectable, Redirect } from '@nestjs/common';
import { AllRecordsEntities } from './dto/AllRecordsEntities';
import { AddRecordDto } from './dto/AddRecordDto';

const testArray = []; // "test1", "test2"라고 미리 적어두면, string[] type이 되어버림

interface Plans {
    showAllRecords(): AllRecordsEntities[];
    addRecords(record: AddRecordDto): void;
    updateRecords(): void;
    deleteRecords(): void;
    searchForRecords(): string[];
    showRelatedNews(): string[];
    showMixedRecords(): string[];
};

@Injectable()
export class RecordsService implements Plans {
    showAllRecords(): AllRecordsEntities[] {
        return testArray;
    };

    addRecords(record: AddRecordDto): void {
        testArray.push(record);
        console.log(testArray);
        // Redirect("/records");
    };

    updateRecords(): void {
        
    };

    deleteRecords(): void {
        
    };

    searchForRecords(): string[] {
        return testArray;
    };

    showRelatedNews(): string[] {
        return testArray;
    };

    showMixedRecords(): string[] {
        return testArray;
    };

};