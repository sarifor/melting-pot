import { Injectable, Redirect } from '@nestjs/common';

const testArray = []; // "test1", "test2"라고 미리 적어두면, string[] type이 되어버림

interface Plans {
    showAllRecords(): string[];
    addRecords(record: string, record2: number): void;
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

    addRecords(record: string, record2: number): void {
        testArray.push(record, record2);
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