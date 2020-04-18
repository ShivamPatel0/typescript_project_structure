import {EmployeeController} from './controller/EmployeeController';
import {EmpDetailsDTO}  from './DTO/EmpDetailsDTO'

const objEmployeeController = new EmployeeController();

const setEmpDetails = (obj:EmpDetailsDTO) =>{
    objEmployeeController.SaveEmpDetails(obj); 
}

const details = new EmpDetailsDTO();
details.EmpID = 0;
details.EmpName = 'ABC';
details.EmpNumber = '1122334455';
details.EmpHobby = 'XYZ';

setEmpDetails(details);