namespace app.domain {

    export interface IThermostat {
        thermostatId: number;
        imageUrl: string;
        name: string;
        deadline: Date;
        creationDate: string;
        currentCapital: number;
        capitalGoal: number;
        remainingCapital: number; //will be readonly as it's based current and goal capital
    }

    export class Thermostat implements IThermostat {
        constructor(
            public thermostatId: number,
            public imageUrl: string,
            public name: string,
            public deadline: Date,
            public creationDate: string,
            public currentCapital: number,
            public capitalGoal: number,
            public remainingCapital: number
            ) {}

    }
}