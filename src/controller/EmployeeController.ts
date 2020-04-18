import {EmpDetails} from '../interface/IEmpDetails';
import * as DTO from '../DTO/EmpDetailsDTO';

export class EmployeeController implements EmpDetails{
    SaveEmpDetails(obj:DTO.EmpDetailsDTO){
            console.log(obj);
    };
}