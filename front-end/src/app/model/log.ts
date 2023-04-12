export class Log{
	_id: number;
	userName: string;
	password: string;
	repeatPass: string;


	constructor(obj?: any){
		this._id = obj && obj._id || null;
		this.userName = obj && obj.userName || null;
		this.password = obj && obj.password || null;
		this.repeatPass = obj && obj.repeatPass || null;

	}
}