export class Drug {
    private name: string;
    private lab: string;
    private expirationYear: number;

    constructor(
        name: string,
        lab: string,
        expirationYear: number,
    ) {
        this.name = name;
        this.lab = lab;
        this.expirationYear = expirationYear
    }

    public isExpired = () => {
        const currentYear = new Date().getUTCFullYear()
        if ( this.expirationYear < currentYear ) {
            return true
        }
}


}
