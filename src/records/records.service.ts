import { Injectable } from '@nestjs/common';

const testArray = ["test1", "test2"];

interface Plans {
    showAllRecords(): string[];
    addRecords(record: string): void;
    updateRecords(): void;
    deleteRecords(): void;
    searchForRecords(): string[];
    showRelatedNews(): string[];
    showMixedRecords(): string[];
};

@Injectable()
export class RecordsService implements Plans {
    showAllRecords(): string[] {
        return testArray;
    };

    addRecords(record: string): void {
        testArray.push(record);
        console.log(testArray);
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