import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatDialog, MatPaginator} from '@angular/material';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { DatePipe } from '@angular/common';
declare var jsPDF: any;
import { AngularFireAuth } from '@angular/fire/auth';
export interface Order {
  orderid:number;
propertytype:string;
street:string;
unit:any;
orderby:any;
comments:any;
accesscode:any;
city:string;
zip:string;
orders:any;
property:any;
squarefeet:string;
ordersprice:number
  visitingdate:Date;
  orderprice:number;
  ordereddate:string;
  phonenumber:number;
 
}
@Component({
  selector: 'app-admininvoice',
  templateUrl: './admininvoice.component.html',
  styleUrls: ['./admininvoice.component.css']
})
export class AdmininvoiceComponent {

  displayedColumns = ['name','address','date/time','ordervalue','no','invoice','edit/delete'];
  dataSource: MatTableDataSource<Order>; 
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  downloadurl: Observable<string>;
  uploadPercent:Observable<number>;
  property:any;
  photographyurl:any;
  uploads: any[];
  userid:any;
  profile:any;
  progressBarValue;
  allPercentage: Observable<any>;
  files: Observable<any>;
  constructor(private afauth: AngularFireAuth,private afs: AngularFirestore, public dialog: MatDialog,public storage: AngularFireStorage) {
    
  }
  ngOnInit(){
   
    
  }
  ngAfterViewInit() 
  {
   
     this.afs.collection<Order>('orders', ref => ref.where
    ('payment','==','true' )).valueChanges().subscribe(data => {
      this.dataSource = new MatTableDataSource(data); 
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
 
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
    
  }
  query1(a){
   
   var docRef$= this.afs.collection<Order>('orders').doc(a);

   this.property = docRef$.ref.get().then(function (doc) {
    if (doc.exists) {
      console.log("Document data:", doc.data());
      return doc.data()
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }).catch(function (error) {
    console.log("Error getting document:", error);
  });
}
  query(a,b,c,d,e,f,g){
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);
    console.log(f);
    console.log(g);
   var docRef$= this.afs.collection<Order>('orders').doc(a);

   this.property = docRef$.ref.get().then(function (doc) {
    if (doc.exists) {
      console.log("Document data:", doc.data());
      return doc.data()
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }).catch(function (error) {
    console.log("Error getting document:", error);
  });
  setTimeout (() => {
var img='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAEsAQIDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD3+iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiq11e2ljF5t5dQW8f96WQKPzJoAs0Vxuo/FDwrp4KrfPdyD+C2jLZ/4EcL+tclf/GieTeuk6KPlBPmXDlsD1KrjH/fVAHr9Fc94T8VWfivTBdWx8udMLPbk/NG39QecHv9ciuhoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiq13fWlhF5t5dQW8f8AemkCD8yaALNFcZqPxQ8K6fuVb17tx1W2jLZ+hOFP51y1z8Yr28m8jQ9CaSQ/dMpZ2P8AwBBn9aAPXKrXd9aWEXm3l1Bbx/3ppAg/M15Lj4p+IuS0mnQN6lbcL+Xz/wA6z5PA2k20pm8T+NLUzfxxwv5kh/Ekt/47QB6BqPxQ8K6flVvXu5B/DbRls/8AAjhf1rlrr4xXl5N5Gh6E0kh+6ZSzsf8AgCDP61lpqHwx0T/j3sLzV5R0eUEqfqG2j/x2rUXxQvpB9l8MeFoIgOAkcbSfjtQLj9aAH7fin4j6mTToG91t9v5fP/OpYfhBLITdeIPEGT1coCT+LuR/Ko/+Lra90ElhC3+5Bt/9npyfCTWdRYTa74iDN1JG+Y/mxGKALqaX8L/D3Nzd295Kp6vKbg/iqfL+lFz8VPC1havaaXo8ksRG0xrEkMTDHcdcHp92mJ4H+H2jc6nrSXDjqkt2q/8AjqYb9asJ4p+GmhDFjZwTOvG6K0LN/wB9uB/OgDgbW+k0y7PijwwGgijfF1ZM5fyQx4DHA3RtwA2AQeDggE+3eGPE9j4p0pby0ba64E0DH5om9D6j0Pf65FeIXd7Zxavca94WikjtVOLiyuFUhUbAIKgkGNicY/hJA4ytWbe4m8PzReLPC7N/Z7MEurVmLGBjyY37lCfut9M4I5APoSisTw34isfE+lJfWTY/hlhb70Teh/oe9bdABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAc14l8baP4WeOLUGmaeRC6RRR7mI5HcgdQe/auIufjDe3kxg0PQWkkP3TKWdj/AMAQZ/Wqk0MfjD40yQSos1jZEo6MNwKxjBB7EGQn86d43kuL7xrY+EtBk+wwhVSSO2zGm9vmJYL1Cpg+3NAFO+1fx/qIJv8AU4dFhYdJZktSPoM+YfyNYElh4eSUzav4nuL+f+NLGBnJ+kkhUH8qt+KfCWneDpbWG+urjUrq4VnMcBEIQA45JDk5OQOB0NUI5JreJZbfwrbRRscLcXiSOD3wS7BP/HRQBat9Z8M2kix6V4Ukv5+iyX85cn6xoNproLfUfiLfQlNL0iPSbbGcQ2qW6AeuZOfxFc+mt+IhHsGu6fpsJ4xayxRgfhCCf0zVOeOwu23ar4uluTnJ8qCaY59jIUoA3bvw/qN2c+JPHFhEv8UTXrTuv/AAQB+FQJp/w607BudZ1LVHXqttD5Sn/voA/k1ZUbeCrfl49cvHHYmKFT+RY1ct/EHh2Jtun+CI5pOzXF1JNn6rjFAGjH4w8GaYQNK8GrOR0e9cMc+vO/8AQ1qR+PfGt/GItG8NJDD/AAmK0kcL+OQo/Kq9p4n8XgAaN4MtbNOzW+muP1yB+lXPN+LeofdjaBD22wR4/P5qAE+w/FfV/wDXXL2kbdD5kcWP++Pm/Oj/AIVPr+ofPrXiRT3JzJOR+LFaD4O+JN8M3WvmBT1DXrgfkgIqF/hXdTHOq+LLcHqScyEf99MKALkfw18HaeM6n4lDMOoNxFEPxByf1q1HbfCjSeWltJ2H8TPJPn8BkfpWfH8M/CcH/H74sRvXbNFH/MtVuLwn8MbX/W6zBcf7+oKf/QCKAOO8RXGiwa8dW8IzAxKC09s0DKig/KwCkDKMDgrjv6HiK3uf7CkTXtHi8/R7r9zeWUh3BM8tC/qCMlWx098irfjKz8N6ZdWuoeFL+3badktqrs/r83zZypGQwJ6diCcZtneJo0i6lbwC40S+zBeWjMSFPUxk9QR95G64wc5DAAGsrT+ELuDxV4Yla40S5bbJE5OYz3ikxnBHZvoee/svh7xBY+I9Kjv7GTKNxJGfvRt3Vh6//rrxeCZvBd6LiHOp+FdWTBVhxInQqw6LIvI98du1llu/AOp2/iHw/Ob3w/e9CScEE/6t/RhzgnnOfcUAe70VlaHrll4h0uLULCTfE/DKfvI3dWHYj/6/StWgAooooAKKKKACiiigAooooAKKKKACiiigAqjq+oJpWj3l/JgrbwtJg98DOPx4q9Xn/wAXdU+xeDxZq2HvZljwOu1fmY/oo/GgDE+EFqI7fWfEN43U+WZG7YG+Qn65U/hUHwyhfxB421fxLcLwhYpn+FpD2+igj6EVa1J/+EU+CtraA7bnUECn1/eZds/Rcr+VO0yT/hDfg3JeZ2Xl+pdPXdJ8qEfRAG/CgDO0n/itfjBNfH57Gwbeh6jbH8qY+rfN+dL43lk8ZfEWx8N2rnyLZvLkZeQCfmkb8FGMHuCO9X/AqR+Efhvf+I7hQJrjLxhv4gpKxr+LEn6GofhdZpZ6fq3jLVXPzbwJG6lR80je+WwPXII70Ac5478L6N4aurLTNK+1XOoTkO4lcNhc4UAKo5Y/jx71my+F/EemRLLJokUKk7QZVjfJ69HJ/lXWeA7Kbxd41vvFeoL+5t5C0atyA/8ACo9kXH47TXTTNJ4r8SCNCfsUGfpt7n8f89Kwr1nTSUVeT0X9eR1Yagqsm56Rirt/kl5tnmVvF4kjx5cVlbn+8ttAp/NVzWijeMZF2/8ACR+QvosrqB+CrXa67bWLalHpulWg88NhyGJyfQZ9P0rO1TR7nSNgunhO/oEbJ/UCuGeLrxbsk0t2k7X7bnpUsBhZqN5STlsm1drvomc//ZfiifmXxqMehvLn+WzFOHhG/n/4+PGcRz1y8zfzxV9WCnJVW+v/AOurMdxbrxJZI3+67Kf51CzGp1SX3m0snpLZyfzX6pGUvw4spzmfxhDn18gt/NhVmP4YaF/y08WI3+7Aq/zY1qJcaQWHmabMo/2bjP8AMVZRvDL4DxagnuCprVY2b6x+9r9DCWWU10n8kn+TM6P4Y+FBjzPEkjf7rRr/AENWo/hp4JHXWrh/b7XH/wDE1oJaeFJB/wAhC7Qn+8v/ANjVlND8NSfd1hgT6yqP6VosRVe3K/8At455YOhHdzX/AG6cP418D6VpGlJqOgXnmmFv38bzK7FTjDDp079eD6A1yum3cOnt5k0TTaPfjyrmFeqkYJxnoynDKe4OM8sK9b1fwvZw6XJPZXJuQvLqSrAr0J4ryqW2h0fUpLO83f2Ve8FgMmMg8OB3ZCc47qSONxralXlKXJUVna613XX7jCthoxp+1pSco3s9LNPpp2Zq2MsXh27l0DWm+1+HNSAliuEB+UH7kyehHRh7dDjBt2dxN4C1aXQ9aRb/AMOagN24co6HpImOhAxkdeAR0BqnpkKymbwVrzpGS+/TrvOVikbBXB7xyAg+mSOMnIvaLKlyk3gPxYrQPHIVsbhutvJ2GT1VuMc9DjoRjpOMdLHqPwz1qLVNLmN7oF9gqwOVkXqFY9Aw5IYdR+Ir2HRtZs9e0yG/sJRJDIPoyt3Vh2I/zkHNeQaLqMnhW+ufBvi6ESaTOdqs2SseTw6n+6TznqDzwQaWSPVfhT4iW4t2a70O7Yc5+WRewOOA4HfoR9SAAe4UVQ0nVrPW9Niv7GYSwSDIPceoPoR0xV+gAooooAKKKKACiiigAooooAKKKKACvHPiEx8R/EjSfD6EmOHYkgH8Jc7nP/fAU17AzBFLMcKOST2FeO/D91134ha14luDiC3DyKzfwb8hfwCBh+FADviQ7a/450jwzbHCx7VcL/C0mMn8EANHxNmbVfEmj+EdPwqx7AVXorPgLkf7KjP0NR+AXXWfG2t+LLw7YLZXlBb+DdkD8kDCm+A3XVvFet+M9SytvaK8uT/CWBxj/dQEfiKAJ/iZc+ZPo3grShkIIwUHr9yNT9Bk/iDR8Q7tdJ0XSvA+kgu7KnmqnV+cKD7s+Wx9Oxqr4JkXU/Ems+ONW+W2sw8gJ7MQcAZ67UGAOuStL4JRtc8S6l411Zf3Nu5aIdvMPAUZ/urgD6qaTdld7IFq0kdTNDH4T8J2nh+1Ia6lTM7L1Yn7x/E5A9hVtpF8K6CsS4/tK5G499n1+nT6mqWmOLm8ufEGp48qE5jX+8/8Kgewx+OPeo7eUXlxNr+rHNvG2I48/wCsYdFA9B1/ya8mVWUpc+zd0r9I9X8+h70KEacFSauotOVvtS6R+XUu6YkXhzTDq2oAtezj91Gx5/H0z1J9Md6NF0ibW7w6rqeTExyqnjfj0/2R+v55ZpmnXPibUjqOoEi1U/KvIDY6BfYev9encqiooVVAUDAAHStqNJVLO3uLZd/N/oc+KxHsrpP95Ld/yr+Vfq/6VC50PTLkEy2UOT1YDB/MVkXHgnT5ctBNNCfQHcB+ddSelJ096654elNe9FM4KeKr0/gm18/87nDP4R1S15tL1HUfwliufw6VTkttYsyTc6PDcD+8YA36rXoxH+c0mMCsHgoJe62vx/M6o5lVfxxUvwf3qx5sl9ojsVvNFaJuhMMrZH4HAFWo7Lwrd48u+ntm/uyf44P867eaxtrlds9vFKPRlzWXc+EdJuMkQtCx7xtj9Dx+lZvCzW3LL1Vn96No4+k93OL8ndfcznbzwpAthLc2N+twI13FRg7h16g/X61x99p0Wq2b2khVGfmOQ/wOOmT6HOD7E8ZArubrwUYEeayvX3KuQjDnp6g/0rkFUs4A5J4A964qylRmpKPK/LZnpYaUMTSnCU+dPurNadehzlpaS+ItLk0SZCmvaWH+yq3DTRLkvCe5ZTkr+I4FakMa/ETw+YiQPE+mR4Ung3cQ7En+IHjJ79epxH4is50S38T6axS9snQXJX8kk+nRT68eppdY3lLP4geHR5JMmL6FORBP0bP+y2e/qP73Ht06iqRU47M+aq0pUpunLdP/AIZ/NGjpFxb/ABE0I+HtYcQ+ILJT9kuZBhpAByG9cYww6kDPJzSeGNbW3M3gTxlD+4z5UTynmI/wjd6dCrDp9CMM8Q2Ka/psPjvwzuhu4WDX0MZ+aN1wS/1HU8cjB9c6EsFl8VfDIuYRHB4jsU2uuQPMHYH/AGW5wT90/mbMzLzq/wAJvEm0l7rRbpvwcD9FkUfgR+nsWm6jaavYQ31jMs1vKNyMP1yOxrzDwl4gg1+yl8FeLYm+0LmKF5jhyV4Ckno69j36deubb3Gr/CfxGba433WiXLZBHAcf3l9HHGR3HtggA9voqnYX1tqdjFe2kyzW8qhkdTwR/nsenSrlABRRRQAUUUUAFFFFABRRRQBzHj7Vf7J8FalOrYklj8iP1y/y5HuASfwrzfTn/wCEc+DF5d/dudYmMSHodp+XH02q5H+8K1/jLfvMdJ0ODLSTOZmQdSfuJ+ZLflWV46tjc634c8F2bfLaxRxMV/vvgZI9lAb/AIFQBHK//CMfB2GEHZea5KXPYiPv+BUKP+B0zW3Phj4ZaZoUeVvtWP2q5A+8EyCAR1BPyD/gLCrOvwx+KPihYaBAB/Z2mqsDKD8qqg3SfTgBfqBVaO/g8S/EK+8QXZP9kaSpmX0KRnEaj3Zucd8kUAJ4mWTRvDmj+CLFS19clJ70IeWkcjah9ef0VT3rpmslsrOw8K2BUrbj/SJB0eU8uT7Dnr247CuX8LyzX2r6j4xv8GfzClsp6eaw7Z7ImAPqPStvzmtbV13ZubkZkYnkIecfj1+n1rz8bXS/d3836dF8/wAj1sswzf762u0b9+r9EvxLt7PFdSJZQuV0y0/j/verY9TyB/8Arq1pmnTeJLtCymHTbf5FUdAOuB6t6n/61UdE0efWLgQKSlqhDSv/AEHqcf1/H0i1tYbO2SCBAsajAArHDUZVnzzXu/nbZei/E6cbiI4Zezpv3vyvu/8AE/wRLBDHbxLFEoRFGFVRwBU1FFeqkeAFFFFMAooooAKKKKAG4yc15VrdmbDWrmEDC7t6Y44PPFeq9K4nxxZ4ktrxR94GNj9OR/WuDH0+anzLdf8ADHp5TV5K/I9pafPdGHDNFb3EdzLEJLK6UxXERHDA8MuPxz+Irn7Jh4B8Xz6Tf4n8P6mgUs/KvE2dr/Vc4OO2fauj06EXQudJcgmYeZbsePnAyPoCMio7vSf+Eu8LzaU2P7U0/MlozdSO6H2PA9uPSs8FV5XyPaX4Nbr57o3zKhzpzjvG1/OL2fy2ZiRtdfCzxoVYvPod8Mg9d8fr6Flzz6g9sjEniTSbjwTrVt4t8Nsr6ZcEMVQ5RQ3O04/gYcg9jx2GbHhWaDxt4Xn8I6uTHqVipNpK4+ZQvA4P937pH90+oJpfA2sNYXV14E8TRAxOzRRLKeAx/g+jZyp9T7jHpnil3xHoVn4/0KLxP4eG3U4x+8iU4ZyvVD6OvGD3GO2CJfC3iCy8eaLJ4a8RqP7QRflZvlaTbxvX0decjv8AQkDB/wBP+E/i/wD5az6Jdn/vtP5b1z+PtnjY8b+FF1CKLxj4Xl/fgCeQQZzJjnzFxzuHcd+vUHIBkWF9q3wq8RHT78PcaNctuVl6MOPnT0YcAr3/ACNex2d5b6haRXVrMs0EyhkdDkMP89q4LRdd0n4keFp9N1oRx3sCb5TwCMDiVD29x2zjoecn4MTXzzapbrOzaZCFKo3Z2JwR6cA5H0oA9eooooAKKKKACiiigAooqjrGoJpWjXt++CtvC0mD3IGQP5CgDyguviX42vI7ZtNMYsSeiiEfy8w5/GqHhzUVvfFXiLxrcruhsInliDd3fKRL/wB8gj64qjoMz6Z4F8R65K2bm/ddPhc9SW+aQ/kc59RVe93aZ4A0vSYlJutXnN5Ko+95Y+SNfcE/MPegB+lXUmk+EdZ12V83+qObK3c/eIPzTP8AjwMjoarXCS2Xh7T/AA7ar/puqOl3dAdcHiFCfTHz89NwNT6uts+tWWiu2dM0OArcFTwzD5piD2LP8g99tGhGbUtUvNcusebKzKgAwASMHA7ALhQOmCR2rOtUVKDm+n59EbYei61VU49fwXV/JHRokVpa29jbkG3tU2JkffPVmP8AvNk+34Vd0rS7jWb0xRZx96SQ9FHfP+f61JpWizanb3UynCwRlv8AebBIArqfBE8cmlTQqqiWOT5sfxA9D+hFeNSpOtVTqPSV3626f10Po8RXjhqEo0d42Xpf8+/q9TesLCDT7Rbe3XCD8z7mrmKBScbTzXuJJKy2Plm3J3e4+iiimAUUUUAFFFFABRRRQAwD+lZHiSz+26FcxgZZR5i/Uf5x+NbNNIBGDyMVE4qacXsyqc3TmprdO55WpdbC11CE4ltpNjH0/iU/zH4Vq6oxsr+z8QWS/urnDsPRv4lP15/EGmWNmItZ1HRJOEnVkTPYj5lP5VP4dUX2nX2gXWVkQlo938BzyPwOPzNePCL+HZ9PKUf80fRVZxXv7pb+cJf5M5jx5pkuj6tZ+N9B+WOR1aXaOFk9SPRuQw9fc1e8V6Tb+O/C9t4p0ZCL+GPMiIfmYL95Dj+JTyPX8RW14fMV3Be+GtTjDRyKy7G/8eA/nx35rkfDV9c/DrxxPoWoyN/Zt042yNwvJwkg9Afun6f7NerQq+1jzde3n1PCxNB0ajhv2fdPZm/4a1Sy+JPhObRdXx/aECjc/G444WVfcd/14OKxfB2tX/gfxTL4U1gl7WSULGy5IjZuVZf9lhjI7H0wc0vF8aeF/iZb3Ph+UJcy7ZZIf4EZiQVOP4WHJHbP0xhXOpvqmoa/4nlBG7MNuCejSZRR9ViDnPYgHitjASG6SW58SeIIUWGLa8UCINoDTkqBgf8ATPzD9QK9X+E+l/YPBUVwy4kvJWmOeu0Hav4YXP415NeWkkHhnQtIiX/StSlN4ynqdx8uL8MBz/wKvojTrOPTtNtrGIfu7eJYl+igAfyoAt0UUUAFFFFABRRRQAV598XtU+xeEFs1bEl7Mqf8BX5ifzCj8a9Brxv4ht/wkPxJ0rQQcwwBVl/2d53Of++ApoAwdatJGs/CnhO34meNbibHaSdsjd7quPwqK71OGfxde6vEAbHSIglmp5BKAJCB65bDn2DU1tY+169r/ifOBErR2h6YeQGOP8VjDN9UrHs7SW9Gn6JbECe9nV5CegydqAj0Clmz6P7UAQWkdzfNHYWwMl3fzKGJPJ5woPfBbLHPHCntXrHg3SLaz1RdPuVxJbowVCBhnHX69zXM32m/8Kz8f2V8I2n01yTE7jLBSNrgH+8ufxGPU13niWALJaa/pzqyNtYunQ91b6EVyYtNKM7XUXd+a/4B34CScpUtnJNJ+e9vnsN0Z20LxVNp0h/czHapPQ91P9Kdov8AxKPGN1YNxFKSqjt/eX9P50eI9uo6VZa5bDa64V9p5XnjP0OR+NVdbuftC6ZrkIw7AK+P76nP68/lXE37PRbRakv8L3+656EY+1V5bzTjL/FHVffY9EoqGCZLiFJkOUdQwPqDyKmr10eAFFFFMAooooAKKKKACiiigAooooA4fxbEbDW7HVYx6ZA9VIPP1GPyqHXM6V4gttXt8mGf5yR06YI/EEVv+K7QXmgykDLQ4lH4df0zWA91b3ngVVuHAlt3EaH/AGh0x/wE4ry60bTkvJSXqtz2sNU56dOTV0m4NeT2+5kvim3MFxba7YsPmK72XofRvoRx+FcH8TtetNfvdMtLRE8yGIvNJjlC3O0n/ZAyfqPetTU9dlTQY4Z2/cWiluDyxz8ufzx+NedsJF06S+mybi/kaOId9gwXYdxk7VHYjeO1a4SXPOU4/C7X9bamOPp+ypwpT+JXs/7t9P8AgEsMsz2N9rF1K8srKtpA8hyzFlwx56hYwVPoWU1oXWnSG08PeHIRi5vGF1Nx0eUhUz9EAPtuNWv7F+2eJNF8JjhLUBrwg4+dvnmOfVVCpn1QVoaDfLf+L9f8WuB5GnQSSwAjjdgpCuOn3Rj6iu88su6PbRa78Y9sK5sdJG2NeoVYQEXB/wB/B/Gvaa8r+DOmsLDUtXlyXnlEKM3XC/Mx/EsPyr1SgAooooAKKKKACiiigBjOqKWYgADJJ7V87x6q1zqHibxMxO5laG3J6q8xKrg+ojD/AJCvZPH+qDSPBWpTK2JJY/Ijx1y528e4BJ/CvKofBmo3vwvg1CzBdzcSXMluF+aRANikepXaxx3DHHoQDn7+wurDwzpHnQyR2t673LSheGIOwLjPJCgsM9RIfw9E8a+E7XUPD9j4j8MnL2kCYMPWSJBhWGP4lA+uB6gVb8K6lpHj7wd/wjl7GkN1axKgReoCjCyJn07j3x0NYfhfWr34d+JZfDmusf7OlfKSn7qZOBIuf4TjBHYgnqCCAbunXlr8UfBM2n3bImrWygliOkgztkH+y3II7ZI9DWb8OdYY/avBetgpKhdYA55BGdyfUcsPx9qp+KtKuvAHimDxLoi/8S+d/mjX7ik8shxxtYZI9PwGZ/HNjFq+nWXjzw87LIhVpyn3kKnhiB0ZSNp/DsM0NJ6PYNnc6PRv9Dv7vw9en91PlAf9rsR9Rj9Kz4EkS01LRpxiSJvOi/3l4OPqucfSntqUfirw5a+ILUBLy3Iju0Q/cYYOR7dx7HrxT9SuvP8AsOvQgb2/dzqOhdR/UfpXjVY+zbg+l7ecXv8Acz6KhP2yVSP2rX8px1X/AIEjqPCF59q0RI2+/AxjP06j9DW+QCfoK4PwhdC21qa0Vv3c4yhPcjkfpmu8PH4134SfPSV91oeTmFL2eIlbZ6/fr+dx9FFFdRxhRRRQAUUUUAFFFFACcUnGDxR0rI1zWotItdxAaZ8+Wmep9fpUymoLmlsVCEqklCCu2V/EWtRaZZPCQHuJl2qh5wD1J9vavOdx2bcnaOcdqnkkn1K+aSR980hyWY8Dv+AoeS2tLe61GZd1nZpuwePNY8Iv/Amx9Bn0rw6s5YmpZLTovzufUYelTwNFuTu7Xb/JL8l33Ob16OfUtVsfD1oAbiZ1aX0UkfLn0AXLH2I7in6StnfeK578Lu0XQLcyRg9HWPOz2y7ksR3LGq9jJNYeHNT8UXbE3+pO1paMeuW5mkHpgZUEdCcVJqMR8P8Aw6sdPXIvtbkF1OB1EK/6tSPc4YfjXtUqapwUI7L+rnzVetKtUdSW7/BdvkP0SWW18MeJPFV0c3V4TZQOf4pJTukYehAOQR70tyn9h/CW3iPy3Gt3fmMDxmKPp+GQpH+9VrxdYyWlt4Z8FWuPPVVknA6GaU4H5Hd+Bq54otItX+JGieF7cE2dhHFAU6/KBvc/98AflWhkel+CtM/sfwfptoV2yCESSA9nf5iPwJx+FdBRRQAUUUUAFFFFABRRRQBjeI/D9p4m0eXTrsMFY745F6xuMgMPzPHcE15d4f17U/hvrjaBroZtMdtySgZCAn76eqnuvUcnqOfaqwfE/hix8U6U9ndrtdcmGdR80Teo9R6jv9cGgDz7xt4Wm0m7j8ZeFpAqA+dKsPIXPPmKOhUg/MOmCe2cabHTfiz4T+Xy7fWrQdCfuP8AzKNj3wfUjnC8N+ItQ8Aay/hrxGpOnMfkf7yxgnh19UPOR1BzxnIJ4o0C78D6vF4q8MtnT3O50TlEDY+U46xtxg+uORwaALHgzXFuoJ/AfimNgTmCEy8EEdEJ7EHlT7YHaqOjXc/w68V3Ph7Wv3mi3vBZh8hVsgSY9CPlYe3fAzqeIdNtPiJ4fTxJoS7NWtgBPAp+dsDO046sOqnuOPTFexu4fiZ4XbSb51j8RWK77eVuDMOnP14BHY4PsACggf4beN3gl3SaDqC4OeQ0R4B92Qn8QfcV0j2wsr240xnDW1yA0MmflOeUb8enp+Vczo0h8U6FN4M1c+Vq9jubTpJeG3LkGJifbI+n+6Mr4a1OTUNKfQr4MupaXuMIfhmiB+aM57qecemQOlcuLp80eeO6/FdV9x3YGv7Ofs5OylZejWz+/wDM1LK5ew1CCfBDQuMg9eOo/LivWlcMgZeQRkH615DPJ50nmH7zcv7n1/z616L4Xvlu9EgUsPMizGy55GOn6Yrjy6olKUOj1R6GcUm4Qq212f8AXrc3qKKK9Y8EKKKKACiiigBnGBxSn6UZqjqWpQaZaNcTn5R0A6sfQUpSUVd7DjFyfLHdkWq6rBpFm08p3MeI0HBc+n/1687vbia9Zr+8bMkp/dp04/oB/nvWgWl1eeXWNVJWxi4SMH757Iv9T/kOsIxL52vagi/Z4TiGIDCu3QKPYf5715FepKu0um69P5n5dj38LSjhYt7y2du72ivPu+hRlt5LG3jtUUm9u8b1HVEJ4X2JOP5Vg+LUkv8AWNN8F6cwZ1kVrpx0aZh1Psi5/M9xXTxXg0vTdQ8W6h87xgi3Vv8AlpKeBj2BIHHQA+lc34S36L4e1jxzfnfeTBorQuM75GOGb3y3HH91vWurBUUl7S1ui9O/q9zizHENv2N79ZPu+3olov8AMbqVhD4k8f6b4WsQRpelKIGIPZeZWJHQkjbn1Aq1bKvjL4vl1AOnaaflx90JEcLjtguc49Cah8JBvDfgLWfFcxP228Bt7VmPzHJxuHrlsk/7lL4cj/4Rn4V6trj/AC3WpfuICeDtyVBHvku30AruPMJvCbr4m+Kep+IZiPsdnvlVz0AA2R59PlBb/gNTfDGN9e8caz4imXhdxTP8LSNwB9FBH4iqukJ/wjnwb1HUT8tzqzmKP1KnKfy8xh9a7H4UaX9g8FRTsMSXkrTnPXH3VH0wufxoA7qiiigAooooAKKKKACiiigAooooA57xZ4Vs/FemNa3IEc6ZaCcD5o2/qDxkd/rg15t4b8Q3XhDUZfCXiyPdp75RWk+ZUDZGeesbc/T8xXtVc14v8I2fizTTBKBHdxc29xjlD6H1U9xQB5tqmn6h8MPEcesaSWn0a5OCpJKleuxjz25Vv58gyeKNNjmSDx94RlKruElyifeicdWKj8mHTvyCTSeHtek0SSfwV4zhzYP+7R5ekWenPdM4II+6cdB0hI1D4W+JNjBrvQL3qCAVlTvx0DqPzB9+ABNdWPxZpEfjLRB5GrWO3+0IIz8yleRIvfjGc+g9VNZ+q3j6rb23jXSyItStXRNRjQY2yDhZQP7rAYPbPHPJq7qVvJ4J1i28UeHHFxoV90UEldp5aJvTocZ5BGD0OaeopB4f1CDxFoyC48PaopjltzwFB/1kD46EckemO+MkA14ruDULeK+tV2xTDJQc+W4+8v4Hp6gj1re0XQRq9s0kF55M8bYZWXP0IxyK88t5k8P6t5CTGXSb5RLbzNjoSQpPowOVYdiD1wK7/QtGOriTybwQzx87dp5HqCD/AErxamH9nXso3Tu0r2+7zX5H0dHGOpheZz5ZRsm7X9L+TW/ma/8AZvivTube6M6+gk3fo4oHinWrE4v9OBA6sUKfr0pR4c8RW/MGqZHYCdh/SkaPxhBwH80e7If51racNueP3SMb0qnxOnL74sv23jjT5MCeGaEnvjcB/X9K1rfXdMuwBFew5PRWO0/ka4y6GsPk3mhxSHuwtjk/itZVwiKctYywH03ED/x4UvrlSn8Wvqmn+qD+zqFX4bp+UlJfoz1dSrLlSD9MU4cj/wCvXkMF5c2pzb3EsfOfkcj8wDWrb+LtXg+9Mkw/6aID/KtYZlCXxJoyqZNVWsJJ/h/wD0C8vIbG2e4uHCRqOvc/SuJjS58Wam9xOTDp8PfPCj0HYk+vaqlxqkniLUIUvbiO1tl6jPA9T7n61oaxqMTW8Gh6Lh0fAZoznd7Z9zyTUVa6q6/ZXT+Z+m9i6GFlh2or45dekV1d9r2IWU+JNVisLQGPTrbgYH3VHU/U9B/+unaiTrGrwaLYALaW3y8dAR94n6f4+tXrzy/C3h4W0Lf6bc8Fx+pH06CqizR+DfB91rVyoN5KgESN3Y/cX+p9vpSjSlOfs3u7OXkukUOdeMIe1j8KuoX6vrJnKeOJX8QeKtN8G6ScQWzBZCOQHI+Yn1Crn35ak8fgXer6L4G0gYit9ilRzh2GBu+iktn/AGjV34b2C6bo+qeNNWJZnVyjN95lBy7D1LNwO+QfWo/hjaPqmuat4w1IgBGfa7dA7cuR6BVIH/Aq9VKx4fqQ/Ecb7vQfBOlj5IQg2juzfImfcDJP+9mnfE0BH8P+DtOyRGq/L6sfkTPv97/vql8ARP4q+ImpeJbhT5UBLxhuxb5UHvhAfpxSeF/+Kt+Lt9rDfPa2ZaSM9sL8kf04+b6g0AL8UR5S+HvCdhyI0XCf3jxGn4/e/OvWtPs49O062soh+7t4liX6KMD+VeS6b/xVHxtnufvW+nuzDuAIsIuD7uQ1eyUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAct4y8HWfizTjGwWK+iBMFxjof7reqn9Ov1850XV1hjn8C+NYmSDOyCdzzbt/D8393urdgccqePb65Lxt4KtfFun5XbDqMKnyJyP/AB1vVSfy6j0IB5rbvP4E1W58NeIYjdeH77OWAyCp4EiehHGQOQQCM8E1pIP+EO1GbSNRY3vhrVF3JKnIZT92VCON65HHf34NW9Nv0v7d/BHjENbywtss7yTlrd8YCsSeVPABzgg4zjBFWHdpjz+CfFn7u0L7rW6IyLZzna6k9Y27jjGT0OaAMa9sn06WXQbyVHhYiexugfkO4DaynpscAA88EAk/KQel8Atdau0thHefZr+2XgOxVnTODjHcd6wZbWeLzPC2sbY7i3YtYXDN8qs3OzJ/5ZvwQexx0Baq3h6w1q/8QiHTJha6rCG5eTy3JUYbGerAEgjqQCT3rOrSjVVpdNez+82oV50W5Q6qzurprzTPY/8AhGfEQ+7qv/kw/wDhR/wj/idemqE/9vL/AOFct/wh3xKn+/4iaP8A7f5B/wCgij/hW3jab/j48UKfX/S5m/mBWH1On3f3s6P7Qq9VH/wFf5HUjRvFK9NQ/wDJhjTXsPFEQy2oAD/anx/OuUl+FGphN194oijB6l9xH6sKzpfh34ftj/pfjuwUjqqohb8vMJ/Sj6nHpKX3sP7Qn/LH/wABR1dxBqeCLi/sD/10mj/rWVOI14k1HSV9vtcKn/0Kudk8P+BLbiXxfPMfSG0b+eCP1qpLD8P4eBdeILg9jGkSA/8AfQ4qXgKb3b+//gGkc0rR2UV8n/mb73dnF97ULE/7t1G38mptt4ntNMuPPhvoBIBgMAHx/OuXku/CEfEGkarP7z3qJ/6DGaVI47r/AJB/g+WX03PPL/6AVqVl9NO6k015r/IqWb1pJxlGLT6Wf+Z11v4z0a+1hLrWL9mjjAJCwMd2OgAAwKr+KdcHxF8TaZoukNJ9iByWZCMt/ExH+yoOM+/rXOSeHdbZN/8Awjcdip/im3Rgf9/XxUFtBqOjXDXEes2NhMyFGe3uldtpIJH7rcRyB09K6qVFUlpe++vU4q2IlWabSSSsklZL0R6F8Ur+PTdE0zwnpqkeaFJjXk+WpARffLDP/AaseKQngj4Vw6NEwF1dAQuVPJLfNKfcdR+Irz3SNYtLHxPb6xrV9cas9ud6hNzFmA+XLSbcAE54B5ArZ1DWJPif410m0itXgtE+UoX3YXO6RiQMDKqAPcD1rUwOo02P/hDPg7Pdn5Ly8j8wdjvkwqY+i4OPUGo/h9Gvhr4b6n4glAEsyvIhPcICqD8WLfnVf4t6kL250nw5YMju0m9o0IxuPyIOOh5bj6Vb+J0sWgeAtO0C3b/WFIv95IwCT/31t/WgBvwZ00rp2o6tLy88whVm64Xkn8S3/jteqVgeDNL/ALH8IaZZldriEPID2d/mYfgSRW/QAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAcd458EW3iuyMsQWLU4VxDLjhx12N7fy/MHzS3uBr1v/wAIl4mP2XVrVjHY3s3BRu0Uh7qeMH6de/vlcV488CweKbP7TbBItViH7tzwJR/cb+h7H2oA8pMct/GfC+uL9n1ayPl2M8px7iByeqnqrZwCRzg8UbVdTvNXt1tFlj1+1kCBchXkKcDOcDeuMEHqMEjIJOnubxJEND1kG38Q2Y8q1nm+XzgP+WMhP8X91j16d8nPke61KYK4lh8RWTBc8rJPs4APfzVxx3YDHUDcAdt9g+LN/wD666a3U9/NhT/0Dmj/AIV145vub/xLhT2a7lcj8MAVHHr3xT1SNFttOkt/lA3m2WPd7nzOMnrxgc0//hDviPqwzf64bdT1Rrth/wCOxjbQAj/CCC2Hnar4ojiB5JaILn/gTP8A0qrJ4W+HGnDN74omnYdRburj8kRv51cHwfhhU3OseI1Rf4iEA/8AHmb+lRPonwu0bIutWlv3H8KSmQH2zGoH5mgDPkv/AIX2PEWk6jqDDozOyr+OWX+VQr4w0Xf5Wj+A7F3/AITMPPJ/4Dt/rV5/GfgXTONK8JLcMvR7lVA/AtvP6VPD448bapH5Wg+HUtoD91obVmA/4EcL+lAEdvqfxDvMf2V4eh04djFYLD+snFNvNG8dTLu1zxTBpqH7y3GoeWD+CcGrEnhv4kawjSarrP2GHqwkuvLXH0jGPzxWRL4U8I6Y27WfGAuZTy0dhHvbPpuG7n6gUAZ0+jeGLZy+oeLZLyX+JLK0Zyfo7EA1W+1+FIGCWWi6lfuThTd3QTP/AAGNcn6bvxrSbWvBGnsF0zwzc6hKDgSX0+AT/urkH8hWtZ3/AI91FdmhaBBpNu3ANtaJCCP95+v4UAZNtY+I7tN+m+ErOxiAyJJLQYx675yw/EYqC7tLsIY9Y8X2kUfe2t5nnIPpsjGwfiRXUp8LfE2suJPEGv8Avt3vOw/MgD8Ca6LTvhF4bs9rXQur1v8AprJtXP0XHH1JoA8q0zUtC0DVbe+sob7U7m3cNF5+yCMtyASo3scEggZByB9K6NrXxR8QvEmm3Gp6Q9vp8LqrERMiCPcCxG85YnGOPTpXr+naFpOkgfYNOtrY4xujjAY/U9TWlQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQBwvj7wHF4mtjfWSrHq0S/K3QTAfwsex9D+B9vKZGm8QMLa6D2/iWzOxHbKtdBeArHgiVegPVgMHkDP0hXA/EDwEniGE6npq+Xq8Q7cCcDoCezDsfwPYgA5Kw+JXjC7sYrSx0gXd1GNkk4gd2YjjJCkAHpnP5VZ+xfFTXj++uXsIm6HzEhx/wB8fP8AmKr6b8WtS0zSxp1/pjXWowt5fmO+w8cfOME7s8Hp+fWca/8AE3xHxYae1lC38SQiMEeoaQ8/hQBJH8ILu4Judc8Q5I5cqpf/AMfcj+VI+ifDDQM/bdRbUJV/gExkyfTEYA/AmkT4WeJNZdZfEGv++3e87D25IA/Amui074R+G7PDXQub1x/z1k2rn2C44+pNAHMH4j+GtKITw94VjMg4WSREjYn14DMfxINPPiH4meIh/oGnNZQt0ZIBGCP96QnP4V6lp+h6VpQH9n6dbW3GN0cQDH8eprRoA8eT4WeJNZcS+INf99pd52H5kAfgTXRad8I/DdnhroXN64/56ybVz7BccfUmu/ooAztP0PStKA/s/Tra24xujiAY/j1NaNFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAFWOxtIruS6jtYEuJOXlWMB24xyep9KtUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQB//9k=';
    
var doc = new jsPDF('p', 'pt');
var res = doc.autoTableHtmlToJson(document.getElementById("content"));

doc.autoTable(res.columns, res.data,{
   headerStyles: {
           fillColor: [240, 124, 73]},
  margin: {top: 200},
  addPageContent: function(data) {
    doc.setFontSize(18);
  doc.text("SonderWorks", 50 ,50);
     doc.text("INVOICE",450,50)
    doc.setFontSize(14);
        doc.text("Bill To", 50,120);
   
     doc.setFontSize(8);
    //company address
    doc.text("101 15th St, San Francisco, CA 94103, USA", 50,70);
    doc.text("Phone Number : +1 800-657-9859", 50,80);
//agent address
    doc.text(b, 50 ,135);
    doc.text(c,50, 145);
    doc.text(d,50, 155);
    doc.text(e,50, 165);
    doc.text(f, 50,175);
    doc.text("Phone Number : +91 800-757-4567", 50,185);
    //order details
    doc.text("Order No  :",440,160);
    doc.text(a,500,160);;
     doc.text("Order Date :",440,170);
    doc.text("24/10/2018",500,170);
     doc.text("Ordered On :",440,180);
    doc.text("17/10/2018",500,180);
  doc.addImage(img, 'JPEG', 450, 55, 80, 90);
  }
});
doc.save('SonderWorks.pdf');
}, 1000)
  }

  singleimageupload(name:any,event:any,orderid:any,userid:any){
    const date=new Date();
 var urlarray=[];
 
    const fulldate=date.getFullYear()+'/'+(date.getMonth()+1);
    //const file = event.target.files[0];
    const filelist = event.target.files;
    for (const file of filelist) {
    const filePath = name+'/'+orderid+'/'+fulldate+'/'+file.name;
    this.uploadPercent = this.storage.upload(filePath, file).percentageChanges();
    const task = this.storage.upload(filePath, file).then(()=>{
      const fileRef = this.storage.ref(filePath);
     
    
      const getDownloadURLl=fileRef.getDownloadURL().subscribe(url=>
      {
        const URL=url;
       
        urlarray.push(url);
     
          console.log(url);
          console.log(name)
            this.afs.collection('orders').doc(orderid).update({
            invoice:url
      })
      
      this.afs.collection(`users/${userid}/orders`).doc(orderid).update({
          
        invoice:url
        
      
    })
  

   
   

          
        
      })
      

    }
  
  )
  const uploadTask=this.storage.upload(filePath, file);
  uploadTask.percentageChanges().subscribe((value) => {
    this.progressBarValue = value.toFixed(2);
  })
 
}

  }
 
update(a:any,b:any){
   this.afs.collection('orders').doc(a).update({
    status: 'completed'
  }).then(() => {
   
  })
  this.afs.collection(`users/${b}/orders`).doc(a).update({
    status: 'completed'
  }).then(() => {
    alert('updated');
  })

}
delete(b:any) {
  this.afs.collection('orders').doc(b).delete().then(() => {
    
  })
  this.afs.collection(`users/${this.userid}/orders`).doc(b).delete().then(() => {
    alert('deleted');
  })
}

}


  
