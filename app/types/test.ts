export interface TestStep {
    id: number;
    status: 'pass' | 'fail' | 'error' | 'not-executed';
    testStep: string;
    description: string;
    session: string;
    wait: string;
    dataSheet: string;
    rowId: number;
    startTime: string;
    endTime: string;
    duration: number;
}

export interface TestScenario {
    id: string;
    name: string;
    description: string;
    moduleNumber: string;
    dataSheetNumber: string;
    result: string;
    startTime: string;
    endTime: string;
    duration: number;
    steps: TestStep[];
}

export interface TestDetails {
    fieldName: string;
    actual: string;
    binary: string;
    expected: string;
    status: 'pass' | 'fail' | 'not-executed';
}