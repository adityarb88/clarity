/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

const NO_YEAR_IN_VIEW: number = 10;

export class YearRangeModel {
    constructor(private year: number) {
        this.generateYearRange();
    }

    yearRange: number[] = [];

    /**
     * Generates the year range based on the year parameter.
     * eg: If 2018 is passed the output will be [2010, 2011, ..., 2019]
     */
    private generateYearRange() {
        const remainder: number = this.year % NO_YEAR_IN_VIEW;
        const floor: number = this.year - remainder;
        const ceil: number = floor + NO_YEAR_IN_VIEW;
        this.yearRange = this.generateRange(floor, ceil);
    }

    /**
     * Function which generate a range of numbers from floor to ceil.
     */
    private generateRange(floor: number, ceil: number): number[] {
        return Array.from({length: (ceil - floor)}, (v, k) => k + floor);
    }

    nextDecade(): YearRangeModel {
        return new YearRangeModel(this.year + 10);
    }

    previousDecade(): YearRangeModel {
        return new YearRangeModel(this.year - 10);
    }

    currentDecade(): YearRangeModel {
        return new YearRangeModel((new Date()).getFullYear());
    }

    inRange(value: number): boolean {
        return this.yearRange.indexOf(value) > -1;
    }

    get midNumber(): number {
        return this.yearRange[Math.floor(this.yearRange.length/2)];
    }
}
