import { Drug } from "../../domain/Drug";

export class SendExpirationNotificationDrugUseCase {

    private readonly drug: Drug;

    constructor(drug: Drug) {
        this.drug = drug;
    }

    public execute() {
        if ( this.drug.isExpired() ) {
            console.log( 'Send notify!!' );
        }
    }
}
