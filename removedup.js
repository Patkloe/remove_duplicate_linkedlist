function sortlinkedlist(head){
  var curr = head;
  var prev = null;
  var repeat;
  head = null;
  while(curr !== null){
    if(curr.next !== null && curr.val == curr.next.val){
       curr = curr.next;
       repeat = curr.val;
       if(prev !== null){
           prev.next = null;
        }
    }
    else{
        if(curr.val !== repeat){
          if(head === null){
             head = curr;
          }
          else{
              prev.next = curr;
          }
             prev = curr;
        }
       curr = curr.next;
    }
  }// fin while
   return head;
 }
