function LinkedList () {
    this.List = {} ;  
    this.size = 0 ; 

    this.append = function (value){
        this.size +=1;
        this.List[this.size] = new Node (value,null);
        if(this.size>1){
            this.List[this.size-1]["nextNode"] = this.size;
        }
    }

    this.prepend = function (value){
        this.size +=1;
        let temp1 = null;
        let temp2 = null;  
        for(let index in this.List){
            if(index == 1){
                temp1 = this.List[1];
                this.List[1] = new Node(value,null);
                this.List[1]["nextNode"] = this.List[2] == null ? null : 2; 
            }
            else if(index%2==0){
                temp2 = this.List[index];
                this.List[index] = temp1; 
                this.List[index]["nextNode"] = Number(index)+1; 
            }
            else {
                temp1 = this.List[index];
                this.List[index] = temp2;
                this.List[index]["nextNode"] = Number(index)+1;

            }
            if(index==this.size-1){
                let lastIndex = Number(index) + 1 ; 
                if(evenIndex){
                    this.List[lastIndex]=temp1;
                }
                else{
                    this.List[lastIndex]=temp2;
                }
            
            }
        }  

    } 

    function shiftList (starterIndex,nodeToInsert) {
        let temp1 = null; 
        let temp2 = null; 
        temp1 = this.List[starterIndex];
        this.List[starterIndex] = nodeToInsert;
        this.List[starterIndex]["nextNode"] = this.List[Number(starterIndex)+1] == null ? null : starterIndex+1; 
        for(let index = starterIndex+1 ; index<=size ; index++){
            if(index%2==0){
                temp2 = this.List[index];
                this.List[index] = temp1; 
                this.List[index]["nextNode"] = index+1; 
            }
            else {
                temp1 = this.List[index];
                this.List[index] = temp2;
                this.List[index]["nextNode"] = index+1;
            }
        }  
        List[size+1]["nextNode"]=null; 
    }
    

    this.head = function () {
        return this.List[1];
    }

    this.tail = function () {
        return this.List[this.size];
    }

    this.at = function (index) {
        return this.List[index];
    }

    this.pop = function () {
        if(this.size == 0) {return null}
        let temp = this.List[this.size];
        delete this.List[this.size] ;
        this.size-=1;
        this.List[this.size]["nextNode"] = null ; 
        return temp;
    }

    this.contains = function (value) {
        for(let index in this.List){
            if(this.List[index]["value"]==value){
                return true;
            }
        }
        return false; 
    }

    this.find = function (value) {
        let indexes = [];
        for(let index in this.List){
            if(this.List[index]["value"]==value){
                indexes.push(index);
            }
        }
        return indexes.length==0 ? null : indexes; 
    }

    this.toString = function () {
        //let indexes = Object.keys(this.List).sort((a,b)=>a-b);
        if(size==0){return "There is nothing to print"};
        let str = "(" + JSON.stringify(this.List[1]["value"]) + ")";
        for(let i=2; i<=size; i++) {
            str += " -> (" + JSON.stringify(this.List[i]["value"]) + ")";
        }
        str += " -> null"; 
        return str; 
    }
    
    this.insertAt = function (value,index) {
        //let indexes = Object.keys(this.List).sort((a,b)=>a-b);
        if(index<1){
            console.log("The index must be bigger or equal than 1");
            return;  
        }
        else if(index>size+1){
            let maxIndex = size + 1 ; 
            console.log("The maximum index ammited is " + maxIndex);
            return;
        }
        let temp1 = null;
        let temp2 = null;
        if(index%2==0)
            temp2 = this.List[index];
            this.List[index] = new Node(value,index+1); 
            for(let i=index+1; i<size+1; i++){
                
            }
        else{
            temp1 = this.List[index];
        }
        
    }
}


function Node (value,nextNode) {
    this.value = value; 
    this.nextNode = nextNode ; 
}

let myList = new LinkedList();
console.log(myList);
myList.append(1293);
myList.append(8);
myList.prepend(23);
myList.prepend(2222);
myList.append(33);
console.log(myList);
console.log("removed element" , myList.pop());
console.log(myList);
console.log("head: "+ JSON.stringify(myList.head()));
console.log("tail: "+ JSON.stringify(myList.tail()));
console.log("index 3: "+ JSON.stringify(myList.at(3)));
console.log(myList.toString());
