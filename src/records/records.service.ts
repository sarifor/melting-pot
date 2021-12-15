import { Injectable } from '@nestjs/common';

const testArray = ["test1", "test2"];

class plans { // interface(or 같은 역할을 하는 class)의 이름은 어떻게 정함 ?
    public showAllRecords(): string[];
    /* public addRecords(): void;
    public updateRecords(): void;
    public deleteRecords(): void;
    public searchForRecords(): string[];
    public showRelatedNews(): string[];
    public showMixedRecords(): string[]; */
};

@Injectable()
export class RecordsService extends plans {
    getHello(): string {
        return 'Hello World from records module!';
    }

    showAllRecords(): string[] {
        return testArray;
    };

}