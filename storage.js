import mongoose from 'mongoose';
import Request from './models/request';
import fs from 'fs';
import _ from 'lodash';

class Storage {
	constructor(){
		mongoose.connect('mongodb://localhost/fa');
	}

	initFakeData(){
		fs.readFile('fakeData.json', 'utf8', (err, data) => {			
			if (err) throw err;
			Request.count((err, count) => {
				if (err) throw err;
				if(count === 0) this.populate(data);		
			});
		});
	};

	populate (data){
		_.forEach(
			JSON.parse(data), 
			(v) => new Request(v).save(
				(err) => console.log(err || v.email)
			)
		);
	};
}

export { Storage, Request };
