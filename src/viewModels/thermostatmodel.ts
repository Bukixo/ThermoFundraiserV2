namespace app.domain {
    
    export interface IThermostat {
        thermostatId: number;
        name: string;
        deadline: Date;
        creationDate: Date;
        goalDate: Date;
        currentCapital: number;
        capitalGoal: number;
        remainingCapital: number; //will be readonly as it's based current and goal capital
    }

    export class Thermostat implements IThermostat {
        constructor(
            public thermostatId: number,
            public name: string,
            public deadline: Date,
            public creationDate: Date,
            public goalDate: Date,
            public currentCapital: number,
            public capitalGoal: number,
            public remainingCapital: number
            ) {
        }

    }
}