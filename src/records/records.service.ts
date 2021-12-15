import { Injectable } from '@nestjs/common';

const testArray = ["test1", "test2"];

interface Plans { // interface(or 같은 역할을 하는 class)의 이름은 어떻게 정함 ?
    showAllRecords(): string[];
    /* public addRecords(): void;
    public updateRecords(): void;
    public deleteRecords(): void;
    public searchForRecords(): string[];
    public showRelatedNews(): string[];
    public showMixedRecords(): string[]; */
};

@Injectable()
export class RecordsService implements Plans {
    getHello(): string {
        return 'Hello World from records module!';
    }

    showAllRecords(): string[] {
        return testArray;
    };

}