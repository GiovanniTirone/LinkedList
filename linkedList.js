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
        this.shiftList(1,new Node(value,null));
    } 

    this.shiftList = function (starterIndex,nodeToInsert) {
        this.size +=1;
        let temp1 = null; 
        let temp2 = null; 
        console.log(this.List);
        temp1 = this.List[starterIndex];
        let savedTemp1 = true; 
        this.List[starterIndex] = nodeToInsert;
        this.List[starterIndex]["nextNode"] = this.List[Number(starterIndex)+1] == null ? null : starterIndex+1; 
        for(let index = starterIndex+1 ; index<=this.size ; index++){
            if(savedTemp1){
                temp2 = this.List[index];
                this.List[index] = temp1; 
                this.List[index]["nextNode"] = index+1; 
                savedTemp1 = false;
            }
            else {
                temp1 = this.List[index];
                this.List[index] = temp2;
                this.List[index]["nextNode"] = index+1;
                savedTemp1 = true;
            }
        }  
        this.List[this.size]["nextNode"]=null; 
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
        if(this.size==0){return "There is nothing to print"};
        let str = "(" + JSON.stringify(this.List[1]["value"]) + ")";
        for(let i=2; i<=this.size; i++) {
            str += " -> (" + JSON.stringify(this.List[i]["value"]) + ")";
        }
        str += " -> null"; 
        return str; 
    }
    
    this.insertAt = function (index,value) {
        if(index<1){
            console.log("The index must be bigger or equal than 1");
            return;  
        }
        else if(index>this.size+1){
            let maxIndex = this.size + 1 ; 
            console.log("The maximum index ammited is " + maxIndex);
            return;
        }
        this.shiftList(index,new Node(value,null));
    }

    this.removeAt = function (index) {
        if(index<1){
            console.log("The index must be bigger or equal than 1");
            return;  
        }
        else if(index>this.size+1){
            let maxIndex = this.size + 1 ; 
            console.log("The maximum index ammited is " + maxIndex);
            return;
        }
        for(let i=0; i<this.size-index; i++){
            this.List[index+i]=this.List[index+i+1];
            this.List[index+i]["nextNode"] = index+i+1;
        }
        delete this.List[this.size];
        this.size -=1;
        this.List[this.size]["nextNode"]=null;
    }

}


function Node (value,nextNode) {
    this.value = value; 
    this.nextNode = nextNode ; 
}

