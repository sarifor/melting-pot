import { Injectable } from '@nestjs/common';
import { Record } from './entities/record.entity';
import { AddRecordDto } from './dto/add-record.dto';
import { UpdateRecordDto } from './dto/update-record.dto';

let records: Record[] = [];

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
        const filteredRecords: Record[] = records.filter(item => item.id != id);

        records = filteredRecords; // const 변수에는 '재할당( = 변수의 메모리 주소 변경)'이 되지 않아, records 앞에 붙는 키워드를 let으로 변경하여 재할당 가능하게 함        
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