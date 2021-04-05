import { MatGridListModule } from '@angular/material/grid-list';
import { Component,OnInit , ViewChild , ElementRef } from '@angular/core';
import { CdkDragDrop, CdkDragStart, CdkDragEnter, CdkDragExit, moveItemInArray, CdkDropList, DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-template-b',
  templateUrl: './template-b.component.html',
  styleUrls: ['./template-b.component.scss']
})
export class TemplateBComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cards = [
    {
      name: 'logo',
      image: 'assets/img/logo.png',
      posL: false,
      posC: true,
      posR: false,
      index: '0',
    },
    {
      name: 'หัวข้อ',
      text: 'บันทึกข้อความ',
      posL: false,
      posC: true,
      posR: false,
      index: '1',
    },
    {
      name: 'เรียน',
      head: 'เรียน',
      text: '........................',
      posL: false,
      posC: true,
      posR: false,
      index: '2',
    },
    {
      name: 'เรื่อง',
      head: 'เรื่อง',
      text: '........................',
      posL: false,
      posC: true,
      posR: false,
      index: '3',
    },
    {
      name: 'รายละเอียด',
      space: '               ',
      text: '               ข้าพเจ้า xxxxxxx xxxxxxx มีความประสงค์ ..................................................หกดหกดหกดหกดหกดหกดหกดหกดหกดกหดหกดไำเdfgdgfdgdgfgdาีดหดกดอกดอกดอกดเกดเกดเกเกดเดกดเกด',
      posL: false,
      posC: true,
      posR: false,
      index: '4',
    },
    {
      name: 'ลายเซ็น',
      text: 'นาย..........................',
      status: 'ตำแหน่ง..............',
      signature: '(....................................)',
      posL: false,
      posC: true,
      posR: false,
      index: '5',
    },
    {
      name: 'เวลา',
      day: 'ว้นที่ .......',
      month: ' เดือน ................',
      year: ' ปี ........',
      posL: false,
      posC: true,
      posR: false,
      index: '6',
    },
  ];

  zones = [];

  @ViewChild(MatGridListModule,
    {
      read: ElementRef
    })  child: ElementRef;

  // เริ่่ม drag
  dragStarted(event: CdkDragStart) {
    console.log('dragStarted Event > item', event.source.data.name);
  }

  // drag เข้า area อื่่น
  dragEntered(event: CdkDragEnter) {
    console.log('dragEntered Event',
      `> dragging '${event.item.data.name}' into '${event.container.id}'`);
  }

  // drag ออก area
  dragExited(event: CdkDragExit) {
    console.log('dragExited Event',
      `> drag '${event.item.data.name}' exit '${event.container.id}'`);
  }

  // drop card ที่่ลาก
  drop(event: CdkDragDrop<string[]>) {
    // console.log(event.item)

    // มี item แล้ว sort
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      console.log('dropped Event',
      `> dropped '${event.item.data.name}' in the same '${event.container.id}'`);

    }
    else {
      // เช็คว่ามีหรือยัง ไม่มีก็ add
      if ((event.container.data.includes(event.item.data )) === false) {
        this.addZone(event.item.data, event.currentIndex);
        console.log('dropped Event',
        `> add '${event.item.data.name}' into '${event.container.id}'`);
        // drag เข้าแล้ว disable
        event.item.disabled = true;

      }
      else {
        console.log('dropped Event',
        `> can't drop '${event.item.data.name}' again in this zone'${event.container.id}'`);
      }
    }
    // loop แก้บัค index ไม่เปลี่ยนตามในกรณี ลากวางใส่ index 0 เท่านั้น
    let count = 0;
    for (const zone of this.zones) {
      zone.index = count;
      // console.log(count);
      count += 1;

    }
    console.log(this.zones);

    // กำหนด index array ใหม่ให้เปลี่ยนตามหลังลาก เพื่อใช้ในหารหดปุ่มปรับตำแหน่ง
    this.zones[event.currentIndex].index = event.currentIndex;
    this.zones[event.previousIndex].index = event.previousIndex;


  }

  // drag ใน zone เดิม
  move(event: CdkDragStart) {
    console.log('Moving Event > item', JSON.stringify(event.source.data.name));
  }

  // เพิ่่มข้อมูล
  addZone(fieldType: string, index: number) {
    this.zones.splice(index, 0, fieldType);
  }
  update() {

  }

  // ปุ่มไปซ้าย
  shiftL(index) {
    this.zones[index].posL = true;
    this.zones[index].posC = false;
    this.zones[index].posR = false;
    }
  // ปุ่มไปกลาง
  shiftC(index) {
    this.zones[index].posL = false;
    this.zones[index].posC = true;
    this.zones[index].posR = false;
  }
  // ปุ่มไปขวา
  shiftR(index) {
    this.zones[index].posL = false;
    this.zones[index].posC = false;
    this.zones[index].posR = true;
  }

}
