import { element } from 'protractor';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import {TemplateAComponent} from '../template/template-a/template-a.component';

import * as jsPDF from 'jspdf';
import html2canvas from '@nidi/html2canvas';

// import pdfMake from 'pdfmake-thai/build/pdfmake';
// import pdfFonts from 'pdfmake-thai/build/vfs_fonts.js';
// pdfMake.vfs = pdfFonts.pdfMake.vfs;

// import htmlToPdfmake from 'html-to-pdfmake';


@Component({
  selector: 'app-navbar-upload',
  templateUrl: './navbar-upload.component.html',
  styleUrls: ['./navbar-upload.component.scss']
})
export class NavbarUploadComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {  }

  downloadPDF(): void  {
    console.log('Saving to PDF');
    const element = document.getElementById('exportPDF');
    html2canvas(element).then((canvas) => {
    const imgWidth = 208;
    const imgHeight = canvas.height * imgWidth / canvas.width;
    const contentDataURL = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
    const position = 0;
    pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
    pdf.save('MYPdf.pdf'); // Generated PDF
    });
  }

  makePDF(): void {
    // pdfMake.createPdf().open();
    // pdfMake.createPdf().download('temp');
  }

  send() {
    this.router.navigate(['/send']);
  }
}
