var isDate = function (input) {
  //   write your code here
	if (input instanceof Date && !isNaN(input.getTime())) {
	    return true;
	  }
  
	  if (typeof input === 'string') {
	    const parsedData = new Date(input);
	    return !isNaN(parsedData.getTime());
	  }
	  return false;

};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input || new Date(input)))
