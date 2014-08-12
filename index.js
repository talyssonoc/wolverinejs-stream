var WolverineStream = function(wolverineObj, stream) {
	this.wolverineObj = wolverineObj;
	this.stream = stream;
};

WolverineStream.prototype = {
	write: function write(message, data) {
		message = this.wolverineObj.chalk.stripColor(message);
		this.stream.write(message + '\n');
	}
};

module.exports = WolverineStream;