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
            else if(index%2 == 0){
                temp2 = this.List[index];
                this.List[index] = temp1; 
                this.List[index]["nextNode"] = Number(index)+1; 
                evenIndex = false;
                if(index == 2){this.List[index]["startNode"]=false};
            }
            else if(index%2 != 0){
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

    this.toString () {
        
    }
}

function Node (value,nextNode,isStartNode) {
    this.value = value; 
    this.nextNode = nextNode ; 
    this.startNode = isStartNode; 
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
