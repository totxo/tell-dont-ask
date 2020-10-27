import { Drug } from './domain/Drug';
import { SendExpirationNotificationDrugUseCase } from "./application/usecase/SendExpirationNotificationDrugUseCase";

console.log('########## INIT ##########')

const drug = new Drug('DrugName', 'LabName', 2019);

const notify = new SendExpirationNotificationDrugUseCase(drug);
notify.execute();
