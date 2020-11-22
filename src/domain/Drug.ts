export class Drug {

    constructor(
        private readonly name: string,
        private readonly lab: string,
        private readonly expirationYear: number,
    ) {
    }

    public isExpired = () => {
        const currentYear = new Date().getUTCFullYear()
        if ( this.expirationYear < currentYear ) {
            return true
        }
}


}
