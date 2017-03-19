//废弃
exports.check = function(req,res){
    console.log('My name is check');
    if(req.session && req.session.user){
			return true;
		}
    else {
			return false
		}
}