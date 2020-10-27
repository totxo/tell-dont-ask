import { Drug } from "../../domain/Drug";

export class SendExpirationNotificationDrugUseCase {

    private readonly drug: Drug;

    constructor(drug: Drug) {
        this.drug = drug;
    }

    public execute() {
        const currentYear = new Date().getUTCFullYear()
        if ( this.drug.getExpirationYear() < currentYear ) {
            console.log( 'Send notify!!' );
        }
    }
}
