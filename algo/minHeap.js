
class Heap {
    constructor(){
        this.heap = ['']; // or this.heap = [undefined]; explicit
    }
    addVal(val){
        this.heap.push(val);
        var idx = this.heap.length - 1;
        // this heap only has one object
        if (idx == 1){
            return this;
        }
        var parent = this.heap[Math.trunc(idx/2)];
        while (idx > 1 && val < parent){
            this.heap[idx] = parent;
            parent = val;
            idx = Math.trunc(idx/2);
        }
        return this;
    }
}