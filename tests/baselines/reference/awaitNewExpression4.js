//// [awaitNewExpression4.ts]
declare class Promise<T> {
    constructor(init: (resolve: (value?: T | IPromise<T>) => void, reject: (reason?: any) => void) => void);
    then<TResult>(onfulfilled?: (value: T) => TResult | IPromise<TResult>, onrejected?: (reason: any) => TResult | IPromise<TResult>): Promise<TResult>;
}
declare var a: boolean;
declare var p: Promise<boolean>;
declare var fn: { new(arg0: boolean, arg1: boolean, arg2: boolean): void; };
declare var o: { fn: { new (arg0: boolean, arg1: boolean, arg2: boolean): void; }; };
declare var pfn: Promise<{ new(arg0: boolean, arg1: boolean, arg2: boolean): void; }>;
declare var po: Promise<{ fn: { new (arg0: boolean, arg1: boolean, arg2: boolean): void; }; }>;
async function func(): Promise<void> {
    "before";
    var b = new (await pfn)(a, a, a);
    "after";
}

//// [awaitNewExpression4.js]
function func() {
    var b, __l0;
    return new Promise(function (__resolve) {
        __resolve(__awaiter(__generator(function (__state) {
            switch (__state.label) {
                case 0:
                    "before";
                    return ["yield", pfn];
                case 1:
                    __l0 = (__state.sent);
                    b = new __l0(a, a, a);
                    "after";
                    return ["return"];
            }
        })));
    });
}
