import { Injectable } from '@nestjs/common';
import { Record } from './entities/record.entity';
import { AddRecordDto } from './dto/add-record.dto';
import { UpdateRecordDto } from './dto/update-record.dto';

const records: Record[] = [];

interface Plans {
    showAllRecords(): Record[];
    addRecord(record: AddRecordDto): void;
    updateRecord(id: number, updatedRecord: UpdateRecordDto): void;
    /* deleteRecord(): void;
    searchForRecords(): string[];
    showRelatedNews(): string[];
    showMixedRecords(): string[]; */
};

@Injectable()
export class RecordsService implements Plans {
    showAllRecords(): Record[] {
        return records;
    };

    addRecord(record: AddRecordDto): void {
        records.push({
            id: records.length + 1,
            createdDate: new Date(),
            ...record
        });
    };

    updateRecord(id: number, updatedRecord: UpdateRecordDto): void {
        // id로 record 특정하고, 수정하고, /records로 redirect
        const record: Record = records.find(item => item.id == id); // 받은 id 타입이 string이라서, ===가 아닌 ==를 사용함 
        console.log(record); // console.log(`Filtered record is ${record}`);의 경우, [object Object] 라고 출력되어, 알맹이를 확인할 수 없음
        console.log(updatedRecord);

        records.push({ ...record, ...updatedRecord }); // 두 객체의 중복 속성 opinion, keywords, idea의 값은 updatedRecord 것이 적용됨
    };

    /* deleteRecord(): void {
        
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