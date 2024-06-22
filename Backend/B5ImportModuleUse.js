/*// code of import / require module
import { sum, PI } from "./B5ImportModule.js";
// Note:- to run this type of import modules we have to have "package.json" file containing the dependency (IMPORTANT) ""type": "module""
console.log(sum(2,3))

// Notes :- 1) We can import individual methods or properties with "import module" 2) We can import only things which are to be used by us . This way we will save memory space.
*/



// Random word generater
import { generate  } from "random-words";
console.log(generate());
