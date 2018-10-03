/************************************************************
 * 
 *  MEAN - Algo HEAP
 *  Oct 2, 2018
 *  Shawn Chen
 *  codingDojo
 * 
 ***********************************************************/


class Heap {
    constructor(){
        this.heap = [undefined]; // or this.heap = [undefined]; explicit
    }
    addVal(val) {
        this.heap.push(val);
        var idx = this.heap.length - 1;
        // this heap only has one object
        if (idx == 1){
            return this;
        }
        while (idx > 1 && val < this.heap[Math.trunc(idx/2)]){
            // console.log('swapping '+parent+' and '+val);
            this.heap[idx] = this.heap[Math.trunc(idx/2)];
            this.heap[Math.trunc(idx/2)] = val;
            idx = Math.trunc(idx/2);
            //parent = this.heap[idx]; 
        }
        return this;
    }
    showVal() {
        var ref = this.heap;
        for (let i=1; i < ref.length; ++i){
            console.log(' cell:'+i+' - '+ref[i]);
        }
        return this;
    }
}

var box = new Heap();
for (let n=0; n<10; n++) {
    box.addVal(Math.floor(Math.random() * 50) + 1);
}

box.showVal();