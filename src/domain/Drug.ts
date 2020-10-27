export class Drug {
    private name: string = '';
    private lab: string = '';
    private expirationYear: number = 0;

    public getName = () => {
        return this.name;
    }

    public getLab = () => {
        return this.lab;
    }

    public getExpirationYear = () => {
        return this.expirationYear;
    }

    public setName = (name: string) => {
        this.name = name;
    }

    public setLab = (lab: string) => {
        return this.lab;
    }

    public setExpirationYear = (expirationYear: number) => {
        this.expirationYear = expirationYear
    }




}
