import { Drug } from './domain/Drug';
import { SendExpirationNotificationDrugUseCase } from "./application/usecase/SendExpirationNotificationDrugUseCase";

console.log('########## INIT ##########')

const drug = new Drug();
drug.setName('DrugName');
drug.setLab('LabName');
drug.setExpirationYear(2019);

const notify = new SendExpirationNotificationDrugUseCase(drug);
notify.execute();
