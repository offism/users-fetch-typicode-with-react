export default class Data {
	static async  getData (){
		let res = await fetch('http://jsonplaceholder.typicode.com/users')
		res = await res.json()
		res.map((item,index)=>{
			console.log(item)
		})
		return res
	}
}