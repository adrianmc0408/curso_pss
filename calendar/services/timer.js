const Timer = (function(scope){
    return {
        setInterval:scope.setInterval.bind(scope),
	    clearInterval:scope.clearInterval.bind(scope)
    }
}(self))

export default Timer;
