import { Injectable } from '@nestjs/common';

const testArray = ["test1", "test2"];

interface Plans { // interface(or 같은 역할을 하는 class)의 이름은 어떻게 정함 ?
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
    getHello(): string {
        return 'Hello World from records module!';
    }

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