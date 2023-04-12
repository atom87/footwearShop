import { Log } from '../model/log';

export class logServeBack{
    count: number;
    results: Log[];
 
    constructor(obj? : any){
        this.count = obj && obj.count || 0;
        this.results = obj && obj.results.map( elem =>
            new Log(elem)) || [];
    }
}