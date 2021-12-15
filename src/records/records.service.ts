import { Injectable } from '@nestjs/common';

const testArray = ["test1", "test2"];

interface Plans {
    showAllRecords(): string[];
    addRecords(): void;
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

    addRecords(): void {
        
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